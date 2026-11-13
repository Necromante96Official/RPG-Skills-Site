window.__pages = ['/index.html', '/html/atalhos.html', '/html/changelog.html', '/html/classes.html', '/html/configuracao.html', '/html/discussoes.html', '/html/funcionalidades.html', '/html/janela.html', '/html/passivas.html', '/html/progressao.html', '/html/qol.html', '/html/universo-xp.html'];
window.__run = async function (pages, mode, width) {
  const res = {};
  for (const p of pages) {
    const f = document.createElement('iframe');
    f.style.cssText = 'width:' + width + 'px;height:900px;position:fixed;left:-3000px;top:0';
    f.src = p + '?v=' + Date.now();
    document.body.appendChild(f);
    f.contentWindow.__errs = [];
    await Promise.race([new Promise(r => f.onload = r), new Promise(r => setTimeout(r, 8000))]);
    for (let i = 0; i < 40 && !(f.contentDocument && f.contentDocument.querySelector('.lang-option.active')); i++) await new Promise(r => setTimeout(r, 100));
    await new Promise(r => setTimeout(r, 400));
    res['err:' + p] = (f.contentWindow.__errs || []).slice();
    const w = f.contentWindow;
    const s = w.document.createElement('script');
    s.src = '/.claude/fp.js?' + Date.now();
    w.document.head.appendChild(s);
    await new Promise(r => s.onload = r);
    const r = w.__fp(mode);
    res[p] = mode === 'save' ? r : (r.diffs || r.missing || r.extra ? r : 'OK ' + r.total);
    f.remove();
  }
  return res;
};
window.__cmp = async function (pages, widths) {
  const out = {};
  for (const w of widths || [1280, 390]) {
    await __run(pages.map(p => '/.claude/orig' + p), 'save', w);
    out[w] = await __run(pages, 'cmp', w);
  }
  return out;
};
