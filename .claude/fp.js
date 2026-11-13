(function () {
  var PROPS = ['display', 'position', 'color', 'background-color', 'background-image', 'font-family', 'font-size', 'font-weight',
    'line-height', 'letter-spacing', 'text-transform', 'text-align', 'padding', 'margin', 'border-top', 'border-left', 'border-radius',
    'grid-template-columns', 'gap', 'flex-direction', 'justify-content', 'align-items', 'z-index', 'box-shadow', 'max-width',
    'overflow', 'cursor', 'white-space', 'filter', 'animation-name'];
  function path(el) {
    var p = [];
    while (el && el !== document.body) {
      var i = 0, s = el;
      while ((s = s.previousElementSibling)) if (!/^(SCRIPT|STYLE|LINK)$/.test(s.tagName)) i++;
      p.unshift(el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/)[0] : '') + ':' + i);
      el = el.parentElement;
    }
    return p.join('>');
  }
  function snap() {
    var out = {};
    document.querySelectorAll('body *').forEach(function (el) {
      if (el.closest('script,style')) return;
      var cs = getComputedStyle(el);
      var parts = PROPS.map(function (p) { return cs.getPropertyValue(p); });
      ['::before', '::after'].forEach(function (pe) {
        var c = getComputedStyle(el, pe);
        if (c.content && c.content !== 'none') parts.push(pe + c.content + c.color + c.backgroundColor + c.backgroundImage + c.width + c.height);
      });
      out[path(el)] = parts.join('|');
    });
    return out;
  }
  window.__fp = function (mode) {
    var key = 'fp:' + innerWidth + ':' + location.pathname.replace('/.claude/orig', '');
    var now = snap();
    if (mode === 'save') { localStorage.setItem(key, JSON.stringify(now)); return 'saved ' + Object.keys(now).length; }
    var base = JSON.parse(localStorage.getItem(key) || '{}');
    var diffs = [], missing = 0, extra = 0;
    Object.keys(base).forEach(function (k) {
      if (!(k in now)) { missing++; return; }
      if (base[k] !== now[k]) {
        var a = base[k].split('|'), b = now[k].split('|'), d = [];
        a.forEach(function (v, i) { if (v !== b[i]) d.push((PROPS[i] || 'pseudo') + ': ' + v.slice(0, 80) + ' => ' + (b[i] || '').slice(0, 80)); });
        diffs.push(k.slice(-90) + ' :: ' + d.join(' ; '));
      }
    });
    Object.keys(now).forEach(function (k) { if (!(k in base)) extra++; });
    return { total: Object.keys(base).length, diffs: diffs.length, missing: missing, extra: extra, sample: diffs.slice(0, 15) };
  };
})();
