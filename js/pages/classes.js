/* ============================================
   RPG SKILLS - Página de classes
   Grade das 34 classes (dados do mod), filtro por aba, busca e detalhe por nível.
   ============================================ */
(function (RPG) {
  'use strict';

  var aba = 'todas';
  var busca = '';
  var aberta = null;
  var pontos = 5;

  function semAcento(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function textoBusca(c) {
    var partes = [c.nome.pt, c.nome.en, c.desc.pt, c.desc.en];
    c.bonus.forEach(function (b) { partes.push(b.nome.pt, b.nome.en); });
    Object.keys(c.desbloqueios).forEach(function (n) { partes.push(c.desbloqueios[n].pt, c.desbloqueios[n].en); });
    return semAcento(partes.join(' '));
  }

  function desenharFiltros() {
    var box = document.getElementById('filtros-aba');
    var en = RPG.i18n.lang() === 'en';
    var todas = RPG.mod.classes();
    var html = '<button type="button" class="filtro' + (aba === 'todas' ? ' active' : '') + '" data-filtro="todas">' +
      (en ? 'All' : 'Todas') + ' <span class="filtro__qtd">' + todas.length + '</span></button>';
    html += RPG.mod.abas().map(function (a) {
      var n = todas.filter(function (c) { return c.aba === a.id; }).length;
      return '<button type="button" class="filtro' + (aba === a.id ? ' active' : '') + '" data-aba="' + a.id +
        '" data-filtro="' + a.id + '">' + (en ? a.en : a.pt) + ' <span class="filtro__qtd">' + n + '</span></button>';
    }).join('');
    box.innerHTML = html;
    RPG.ui.bindFilterGroup(box.querySelectorAll('.filtro'), 'data-filtro', function (v) {
      aba = v;
      history.replaceState(null, '', v === 'todas' ? location.pathname : '#' + v);
      filtrar();
    });
  }

  function cartao(c) {
    var esc = RPG.ui.esc;
    var niveis = Object.keys(c.desbloqueios).length;
    return '<button type="button" class="classe" data-aba="' + c.aba + '" data-id="' + c.id + '">' +
      '<div class="icone-classe"><img src="' + RPG.mod.icone(c.id) + '" alt="" width="64" height="64" loading="lazy"></div>' +
      '<div class="classe__texto">' +
      '<span class="classe__aba">' + esc(RPG.mod.txt(RPG.mod.aba(c.aba))) + '</span>' +
      '<h3>' + esc(RPG.mod.txt(c.nome)) + '</h3>' +
      '<p>' + esc(RPG.mod.txt(c.desc)) + '</p>' +
      (niveis ? '<span class="classe__extra">★ ' + niveis + ' ' + (RPG.i18n.lang() === 'en' ? (niveis > 1 ? 'unlocks' : 'unlock') : (niveis > 1 ? 'desbloqueios' : 'desbloqueio')) + '</span>' : '') +
      '</div></button>';
  }

  function desenharGrade() {
    var grade = document.getElementById('classes-grade');
    grade.innerHTML = RPG.mod.classes().map(cartao).join('');
    filtrar();
  }

  function filtrar() {
    var termo = semAcento(busca.trim());
    var visiveis = 0;
    document.querySelectorAll('#classes-grade .classe').forEach(function (el) {
      var c = RPG.mod.classe(el.getAttribute('data-id'));
      var ok = (aba === 'todas' || c.aba === aba) && (!termo || textoBusca(c).indexOf(termo) !== -1);
      el.hidden = !ok;
      if (ok) visiveis++;
    });
    document.getElementById('vazio').hidden = visiveis > 0;
    document.getElementById('contagem').textContent = RPG.i18n.lang() === 'en'
      ? 'Showing ' + visiveis + ' of ' + RPG.mod.classes().length + ' classes'
      : 'Mostrando ' + visiveis + ' de ' + RPG.mod.classes().length + ' classes';
  }

  function desenharDetalhe() {
    var c = RPG.mod.classe(aberta);
    if (!c) return;
    var esc = RPG.ui.esc;
    var en = RPG.i18n.lang() === 'en';
    var icone = document.getElementById('detalhe-icone');
    icone.setAttribute('data-aba', c.aba);
    icone.innerHTML = '<img src="' + RPG.mod.icone(c.id) + '" alt="" width="96" height="96">';
    var selo = document.getElementById('detalhe-aba');
    selo.setAttribute('data-aba', c.aba);
    selo.textContent = RPG.mod.txt(RPG.mod.aba(c.aba));
    document.getElementById('detalhe-nome').textContent = RPG.mod.txt(c.nome);
    document.getElementById('detalhe-desc').textContent = RPG.mod.txt(c.desc);

    var botoes = '';
    for (var i = 1; i <= RPG.mod.MAX_PONTOS; i++) {
      botoes += '<button type="button" class="nivel' + (i === pontos ? ' active' : '') + '" data-nivel="' + i +
        '" aria-pressed="' + (i === pontos) + '">' + i + '</button>';
    }
    document.getElementById('detalhe-niveis').innerHTML = botoes;
    document.getElementById('detalhe-bonus').innerHTML = c.bonus.map(function (b) {
      return '<li><span>' + esc(RPG.mod.txt(b.nome)) + '</span><span class="v' + (b.faixas ? ' v--texto' : '') + '">' +
        esc(RPG.mod.valor(b, pontos)) + '</span></li>';
    }).join('');

    var niveis = Object.keys(c.desbloqueios).sort();
    document.getElementById('detalhe-desbloqueios').innerHTML = niveis.length
      ? '<h3>' + (en ? 'Unlocks' : 'Desbloqueios') + '</h3><ol class="desbloqueios">' + niveis.map(function (n) {
        return '<li class="' + (Number(n) <= pontos ? 'on' : '') + '"><span class="desbloqueios__nv">' +
          (en ? 'Lv ' : 'Nv ') + n + '</span><span>' + esc(RPG.mod.txt(c.desbloqueios[n])) + '</span></li>';
      }).join('') + '</ol>'
      : '';
  }

  function abrir(id) {
    var dlg = document.getElementById('detalhe');
    aberta = id;
    pontos = 5;
    desenharDetalhe();
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }

  function init() {
    if (document.body.getAttribute('data-page') !== 'classes') return;
    var hash = location.hash.slice(1);
    if (RPG.mod.abas().some(function (a) { return a.id === hash; })) aba = hash;

    document.getElementById('classes-grade').addEventListener('click', function (e) {
      var el = e.target.closest('.classe');
      if (el) abrir(el.getAttribute('data-id'));
    });
    document.getElementById('busca-classe').addEventListener('input', function (e) {
      busca = e.target.value;
      filtrar();
    });
    var dlg = document.getElementById('detalhe');
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg || e.target.closest('[data-fechar]')) dlg.close();
      var nv = e.target.closest('[data-nivel]');
      if (nv) { pontos = Number(nv.getAttribute('data-nivel')); desenharDetalhe(); }
    });

    RPG.i18n.onChange(function () {
      desenharFiltros();
      desenharGrade();
      if (aberta && dlg.open) desenharDetalhe();
    });
  }

  RPG.pages = RPG.pages || {};
  RPG.pages.classes = { init: init };
})(window.RPG = window.RPG || {});
