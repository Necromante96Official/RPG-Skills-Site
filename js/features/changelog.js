/* ============================================
   RPG SKILLS - Linha do tempo das novidades (changelog.html)
   Dados de js/generated/changelog-data.js (gerado de release-notes/*.md).
   ============================================ */
(function (RPG) {
  'use strict';

  var GRANDES = ['major', 'new', 'release'];
  var ABERTAS = 3;

  function ehCorrecao(titulo) {
    var t = (titulo || '').toLowerCase();
    return t.indexOf('corre') !== -1 || t.indexOf('fix') !== -1;
  }

  function entrada(e, en, aberta) {
    var pack = (en ? e.en : e.pt) || e.pt || e.en || {};
    var html = '<details class="versao revelar" id="v' + e.version + '" data-cl-type="' + e.tag + '"' + (aberta ? ' open' : '') + '>' +
      '<summary><span class="versao__num">v' + e.version + '</span>' +
      '<span class="versao__tag versao__tag--' + e.tagClass + '">' + RPG.i18n.t(e.tagKey, e.tag) + '</span>' +
      '<span class="versao__titulo">' + (pack.title || '').replace(/🌟/g, '').trim() + '</span></summary><div class="versao__corpo">';
    if (pack.intro) html += '<p class="versao__intro">' + pack.intro + '</p>';
    (pack.sections || []).forEach(function (s) {
      html += '<div class="versao__secao' + (ehCorrecao(s.heading) ? ' versao__secao--fix' : '') + '">';
      if (s.heading) html += '<h3>' + s.heading + '</h3>';
      html += '<ul>' + (s.items || []).map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></div>';
    });
    if (pack.note) html += '<p class="versao__nota">' + pack.note + '</p>';
    return html + '</div></details>';
  }

  function init() {
    var mount = document.getElementById('changelog-timeline');
    var dados = window.RPG_CHANGELOG;
    if (!mount || !dados || !dados.length) return;
    var filtro = 'all';

    function aplicar() {
      mount.querySelectorAll('.versao').forEach(function (it) {
        var tipo = it.getAttribute('data-cl-type');
        it.hidden = !(filtro === 'all' || filtro === tipo || (filtro === 'major' && GRANDES.indexOf(tipo) !== -1));
      });
    }

    function desenhar() {
      var en = RPG.i18n.lang() === 'en';
      mount.innerHTML = dados.map(function (e, i) { return entrada(e, en, i < ABERTAS); }).join('');
      document.getElementById('versoes').innerHTML = dados.map(function (e) {
        return '<a href="#v' + e.version + '">v' + e.version + '</a>';
      }).join('');
      aplicar();
      RPG.ui.observeReveal(mount);
    }

    document.getElementById('versoes').addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (!a) return;
      var alvo = document.getElementById(a.getAttribute('href').slice(1));
      if (alvo) { alvo.hidden = false; alvo.open = true; }
    });
    RPG.ui.bindFilterGroup(document.querySelectorAll('[data-cl]'), 'data-cl', function (f) {
      filtro = f || 'all';
      aplicar();
    });
    RPG.i18n.onChange(desenhar);
  }

  RPG.changelog = { init: init };
})(window.RPG = window.RPG || {});
