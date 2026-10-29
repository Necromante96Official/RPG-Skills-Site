/* ============================================
   RPG SKILLS - Página inicial
   Ficha de classe que troca sozinha, órbita de ícones, categorias e contagem dos números.
   ============================================ */
(function (RPG) {
  'use strict';

  var VITRINE = ['mestre_da_guerra', 'mestre_da_magia', 'mestre_da_necromancia', 'mestre_dos_mares',
    'mestre_das_cavernas', 'mestre_congelante', 'mestre_dos_reinos', 'mestre_da_vitalidade'];
  var ORBITA = [[8, 10], [82, 6], [92, 46], [80, 86], [12, 84], [2, 46], [46, 0], [50, 94]];
  var DESC_ABA = {
    combate: { pt: 'Armas, críticos e efeitos contínuos nos inimigos.', en: 'Weapons, crits and damage over time.' },
    sobrevivencia: { pt: 'Vida, defesa, imunidades, comida e poções.', en: 'Health, defense, immunities, food and potions.' },
    movimento: { pt: 'Velocidade, dashes e menos munição gasta.', en: 'Speed, dashes and less ammo used.' },
    utilidade: { pt: 'Mineração, loot, pesca, vila e máquinas.', en: 'Mining, loot, fishing, settlement and machines.' },
    necromancia: { pt: 'Monstros derrotados viram seus lacaios.', en: 'Defeated monsters become your minions.' }
  };

  var indice = 0;
  var pontos = 3;

  function iconeHtml(id, aba) {
    return '<div class="icone-classe" data-aba="' + aba + '"><img src="' + RPG.mod.icone(id) +
      '" alt="" width="64" height="64" loading="lazy"></div>';
  }

  function desenharFicha() {
    var ficha = document.getElementById('ficha');
    var c = RPG.mod.classe(VITRINE[indice]);
    if (!ficha || !c) return;
    var q = function (k) { return ficha.querySelector('[data-ficha="' + k + '"]'); };
    q('icone').setAttribute('data-aba', c.aba);
    q('icone').innerHTML = '<img src="' + RPG.mod.icone(c.id) + '" alt="" width="96" height="96">';
    q('aba').setAttribute('data-aba', c.aba);
    q('aba').textContent = RPG.mod.txt(RPG.mod.aba(c.aba));
    q('nome').textContent = RPG.mod.txt(c.nome);
    var pips = '';
    for (var i = 1; i <= RPG.mod.MAX_PONTOS; i++) pips += '<i class="' + (i <= pontos ? 'on' : '') + '"></i>';
    q('pips').innerHTML = pips;
    q('bonus').innerHTML = c.bonus.slice(0, 5).map(function (b) {
      return '<li><span>' + RPG.ui.esc(RPG.mod.txt(b.nome)) + '</span><span class="v' + (b.faixas ? ' v--texto' : '') + '">' +
        RPG.ui.esc(RPG.mod.valor(b, pontos)) + '</span></li>';
    }).join('');
  }

  function desenharOrbita() {
    var orbita = document.getElementById('orbita');
    if (!orbita) return;
    var ids = ['mestre_atirador', 'mestre_incendiario', 'mestre_da_defesa', 'mestre_do_dash',
      'mestre_gourmet', 'mestre_do_loot', 'mestre_invocador', 'mestre_da_riqueza'];
    orbita.innerHTML = ids.map(function (id, i) {
      var c = RPG.mod.classe(id);
      if (!c) return '';
      return iconeHtml(id, c.aba).replace('class="icone-classe"',
        'class="icone-classe" style="left:' + ORBITA[i][0] + '%;top:' + ORBITA[i][1] + '%;animation-delay:-' + i * 0.7 + 's"');
    }).join('');
  }

  function desenharCategorias() {
    var lista = document.getElementById('categorias-lista');
    if (!lista) return;
    var en = RPG.i18n.lang() === 'en';
    lista.innerHTML = RPG.mod.abas().map(function (a) {
      var classes = RPG.mod.classes().filter(function (c) { return c.aba === a.id; });
      return '<a class="categoria revelar" data-aba="' + a.id + '" href="html/classes.html#' + a.id + '">' +
        '<span class="categoria__qtd">' + classes.length + '</span>' +
        '<h3>' + (en ? a.en : a.pt) + '</h3>' +
        '<p>' + RPG.mod.txt(DESC_ABA[a.id]) + '</p>' +
        '<div class="categoria__icones">' + classes.slice(0, 5).map(function (c) { return iconeHtml(c.id, c.aba); }).join('') + '</div>' +
        '</a>';
    }).join('');
    RPG.ui.observeReveal(lista);
  }

  function contar() {
    var els = document.querySelectorAll('[data-contar]');
    if (!els.length || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        obs.unobserve(e.target);
        var alvo = Number(e.target.getAttribute('data-contar'));
        var inicio = performance.now();
        (function passo(agora) {
          var p = Math.min(1, (agora - inicio) / 1200);
          var v = Math.round(alvo * (1 - Math.pow(1 - p, 3)));
          e.target.textContent = RPG.i18n.formatNumber(v);
          if (p < 1) requestAnimationFrame(passo);
        })(inicio);
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { obs.observe(el); });
  }

  function init() {
    if (document.body.getAttribute('data-page') !== 'inicio') return;
    desenharOrbita();
    contar();
    RPG.i18n.onChange(function () {
      desenharFicha();
      desenharCategorias();
      document.querySelectorAll('[data-contar]').forEach(function (el) {
        el.textContent = RPG.i18n.formatNumber(Number(el.getAttribute('data-contar')));
      });
    });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setInterval(function () {
      indice = (indice + 1) % VITRINE.length;
      pontos = pontos % RPG.mod.MAX_PONTOS + 1;
      desenharFicha();
    }, 3600);
  }

  RPG.pages = RPG.pages || {};
  RPG.pages.inicio = { init: init };
})(window.RPG = window.RPG || {});
