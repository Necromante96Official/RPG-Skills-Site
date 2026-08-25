# -*- coding: utf-8 -*-
"""Build js/changelog-data.js from release-notes/*.md and patch changelog.html."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"d:/RPG-Skills-Site")
NOTES = ROOT / "release-notes"
OUT_JS = ROOT / "js" / "changelog-data.js"
HTML = ROOT / "html" / "changelog.html"

# Prefer explicit tags for filter UX (match previous page where possible)
TAG_BY_VERSION = {
    "2.8": "new",
    "2.7": "fix",
    "2.6": "new",
    "2.5": "major",
    "2.4": "update",
    "2.3": "new",
    "2.2": "fix",
    "2.1": "update",
    "2.0": "major",
    "1.9.4": "fix",
    "1.9.3": "fix",
    "1.9.2": "update",
    "1.9.1": "fix",
    "1.9": "update",
    "1.8": "update",
    "1.7": "update",
    "1.6": "update",
    "1.5": "update",
    "1.4": "update",
    "1.3": "update",
    "1.2": "new",
    "1.1": "update",
    "1.0": "release",
}

TAG_CLASS = {
    "fix": "fix",
    "new": "major",
    "major": "major",
    "update": "minor",
    "release": "major",
}

TAG_I18N = {
    "fix": "changelog.tag.fix",
    "new": "changelog.tag.new",
    "major": "changelog.tag.major",
    "update": "changelog.tag.update",
    "release": "changelog.tag.release",
}


def version_key(v: str):
    parts = []
    for p in v.split("."):
        try:
            parts.append(int(p))
        except ValueError:
            parts.append(0)
    while len(parts) < 3:
        parts.append(0)
    return tuple(parts)


def bb_inline(text: str) -> str:
    text = text.strip()
    text = re.sub(r"\[b\](.*?)\[/b\]", r"<strong>\1</strong>", text, flags=re.I | re.S)
    text = re.sub(r"\[i\](.*?)\[/i\]", r"<em>\1</em>", text, flags=re.I | re.S)
    text = re.sub(r"\[u\](.*?)\[/u\]", r"<u>\1</u>", text, flags=re.I | re.S)
    # strip leftover bb tags
    text = re.sub(r"\[/?[a-z0-9]+\]", "", text, flags=re.I)
    return text.strip()


def parse_locale_block(block: str) -> dict:
    title = ""
    m = re.search(r"\[h1\](.*?)\[/h1\]", block, flags=re.I | re.S)
    if m:
        title = bb_inline(m.group(1))

    sections = []
    # Find h2 sections and following list
    for m in re.finditer(
        r"\[h2\](.*?)\[/h2\]\s*\[list\](.*?)\[/list\]",
        block,
        flags=re.I | re.S,
    ):
        heading = bb_inline(m.group(1))
        items_raw = m.group(2)
        items = []
        for im in re.finditer(r"\[\*\]\s*(.*?)(?=\[\*\]|\Z)", items_raw, flags=re.S):
            item = bb_inline(im.group(1))
            if item:
                items.append(item)
        if heading or items:
            sections.append({"heading": heading, "items": items})

    # Trailing bold thank-you / note not in a list
    note = ""
    trailing = re.split(r"\[/list\]", block, flags=re.I)
    if trailing:
        tail = trailing[-1]
        # remove any remaining h2 blocks already consumed
        for tm in re.finditer(r"\[b\](.*?)\[/b\]", tail, flags=re.I | re.S):
            t = bb_inline(tm.group(0)) if False else bb_inline(f"[b]{tm.group(1)}[/b]")
            if t and len(t) > 10:
                note = t

    return {"title": title, "sections": sections, "note": note}


def split_pt_en(raw: str) -> tuple[str, str]:
    # Split on a line that is exactly ---
    parts = re.split(r"\n---\s*\n", raw, maxsplit=1)
    if len(parts) == 2:
        return parts[0].strip(), parts[1].strip()
    # Fallback: look for English h1
    m = re.search(r"\[h1\][^\n]*Update|[h1\][^\n]*Official|[h1\][^\n]*Release", raw, flags=re.I)
    if m:
        return raw[: m.start()].strip(), raw[m.start() :].strip()
    return raw.strip(), raw.strip()


def infer_tag(version: str, pt: dict) -> str:
    if version in TAG_BY_VERSION:
        return TAG_BY_VERSION[version]
    heads = " ".join(s["heading"].lower() for s in pt.get("sections", []))
    if "correç" in heads or "fix" in heads:
        if "novidade" not in heads and "what" not in heads and "qualidade" not in heads:
            return "fix"
    if version == "1.0":
        return "release"
    if "novidade" in heads:
        return "new"
    return "update"


def build_entries() -> list:
    entries = []
    for path in NOTES.glob("*.md"):
        version = path.stem
        raw = path.read_text(encoding="utf-8")
        pt_raw, en_raw = split_pt_en(raw)
        pt = parse_locale_block(pt_raw)
        en = parse_locale_block(en_raw)
        # If EN empty sections, copy PT (shouldn't happen)
        if not en["sections"] and pt["sections"]:
            en = json.loads(json.dumps(pt))
        tag = infer_tag(version, pt)
        entries.append(
            {
                "version": version,
                "tag": tag,
                "tagClass": TAG_CLASS.get(tag, "minor"),
                "tagKey": TAG_I18N.get(tag, "changelog.tag.update"),
                "pt": pt,
                "en": en,
            }
        )
    entries.sort(key=lambda e: version_key(e["version"]), reverse=True)
    return entries


def write_js(entries: list) -> None:
    payload = json.dumps(entries, ensure_ascii=False, indent=2)
    OUT_JS.write_text(
        "/* Auto-generated from release-notes/*.md — do not edit by hand */\n"
        "window.RPG_CHANGELOG = " + payload + ";\n",
        encoding="utf-8",
    )


def patch_html(version_count: int) -> None:
    html = HTML.read_text(encoding="utf-8")
    # Update version count badge
    html = re.sub(
        r'(<span class="page-stat"><i>📜</i> <b>)\d+(</b>)',
        rf"\g<1>{version_count}\2",
        html,
        count=1,
    )
    # Latest version badge
    html = re.sub(
        r'(<span class="page-stat"><i>🔥</i> <b>)v[\d.]+(</b>)',
        r"\g<1>v2.8\2",
        html,
        count=1,
    )

    # Replace timeline body with empty mount + keep filters
    pattern = r'(<div class="timeline" style="margin-top:var\(--space-xl\);">)\s*[\s\S]*?(</div>\s*</div>\s*</section>)'
    replacement = (
        r'\1\n'
        r'        <!-- Filled by js/main.js from js/changelog-data.js -->\n'
        r'        <div id="changelog-timeline"></div>\n'
        r'      \2'
    )
    html2, n = re.subn(pattern, replacement, html, count=1)
    if n != 1:
        raise SystemExit(f"timeline replace failed: {n}")

    # Remove old inline filter script (re-bound in main.js after render)
    html2 = re.sub(
        r'\s*<script>\s*\(function\(\)\{\s*var btns=document\.querySelectorAll\(\'\[data-cl\]\'\);[\s\S]*?\}\)\(\);\s*</script>',
        "",
        html2,
        count=1,
    )

    # Ensure changelog-data.js is loaded before main.js
    if "changelog-data.js" not in html2:
        html2 = html2.replace(
            '<script src="../js/i18n-data.js"></script>',
            '<script src="../js/i18n-data.js"></script>\n'
            '  <script src="../js/changelog-data.js"></script>',
        )

    # Add light styles for section headings inside changelog items
    if ".changelog-section" not in html2:
        style_extra = """
    .changelog-section { margin-top: 14px; }
    .changelog-section:first-of-type { margin-top: 8px; }
    .changelog-section-title {
      font-family: var(--font-heading);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--gold);
      margin: 0 0 8px;
    }
    .changelog-note {
      margin-top: 12px;
      font-size: 0.88rem;
      color: var(--text-muted);
      line-height: 1.55;
    }
    .changelog-item .changelog-list li { margin-bottom: 6px; line-height: 1.55; }
"""
        html2 = html2.replace("</style>", style_extra + "\n  </style>", 1)

    HTML.write_text(html2, encoding="utf-8")


def main():
    entries = build_entries()
    write_js(entries)
    patch_html(len(entries))
    total_items = sum(
        len(it)
        for e in entries
        for s in e["pt"]["sections"]
        for it in [s["items"]]
    )
    print(f"versions={len(entries)} pt_items={total_items}")
    print("order:", ", ".join(e["version"] for e in entries))
    missing_en = [e["version"] for e in entries if not e["en"]["sections"]]
    print("missing_en_sections:", missing_en or "none")


if __name__ == "__main__":
    main()
