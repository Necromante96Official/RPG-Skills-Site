/* ============================================
   RPG SKILLS - XP e níveis
   Tabela de zonas (XpZoneKind do mod), gráfico da curva e calculadora.
   ============================================ */
(function (RPG) {
  'use strict';

  var XP_BASE = 10000;
  var XP_POR_NIVEL = 10000;
  var NIVEL_MAX = 170;

  // Copiado de XpZoneKind.java (mod 4.1). tipo: sup | cav | fundo | mini | inc
  var ZONAS = [
    ['sup', 15, 'Floresta - superfície', 'Forest - surface'],
    ['sup', 20, 'Vila pirata', 'Pirate village'],
    ['sup', 20, 'Neve - superfície', 'Snow - surface'],
    ['sup', 20, 'Pântano - superfície', 'Swamp - surface'],
    ['sup', 20, 'Deserto - superfície', 'Desert - surface'],
    ['sup', 20, 'Planícies - superfície', 'Plains - surface'],
    ['sup', 25, 'Masmorra', 'Dungeon'],
    ['sup', 30, 'Outras superfícies', 'Other surfaces'],
    ['sup', 32, 'Floresta queimada', 'Charred forest'],
    ['sup', 40, 'Ferro-velho - superfície', 'Scrapyard - surface'],
    ['mini', 20, 'Ruínas', 'Ruins'],
    ['mini', 25, 'Ninho de aranhas', 'Spider nest'],
    ['mini', 25, 'Cripta de vampiros', 'Vampire crypt'],
    ['mini', 30, 'Espinhos', 'Thorns'],
    ['cav', 30, 'Floresta - caverna', 'Forest - cave'],
    ['cav', 30, 'Neve - caverna', 'Snow - cave'],
    ['cav', 35, 'Planícies - caverna', 'Plains - cave'],
    ['cav', 40, 'Pântano - caverna', 'Swamp - cave'],
    ['cav', 40, 'Deserto - caverna', 'Desert - cave'],
    ['fundo', 45, 'Floresta - caverna profunda', 'Forest - deep cave'],
    ['fundo', 50, 'Neve - caverna profunda', 'Snow - deep cave'],
    ['fundo', 55, 'Planícies - caverna profunda', 'Plains - deep cave'],
    ['fundo', 60, 'Pântano - caverna profunda', 'Swamp - deep cave'],
    ['fundo', 65, 'Deserto - caverna profunda', 'Desert - deep cave'],
    ['fundo', 70, 'Templo', 'Temple'],
    ['inc', 75, 'Incursão: Slime', 'Incursion: Slime'],
    ['inc', 80, 'Incursão: Cemitério', 'Incursion: Graveyard'],
    ['inc', 85, 'Incursão: Castelo das Aranhas', 'Incursion: Spider Castle'],
    ['inc', 90, 'Incursão: Arena Sol e Lua', 'Incursion: Sun & Moon Arena'],
    ['inc', 95, 'Incursão: Caverna de Cristal', 'Incursion: Crystal Hollow'],
    ['inc', 100, 'Incursão: Ruínas da Vila', 'Incursion: Settlement Ruins'],
    ['inc', 105, 'Incursão: Ferro-velho', 'Incursion: Scrapyard']
  ];
  var TIPOS = {
    sup: ['Superfície', 'Surface'],
    mini: ['Mini-bioma', 'Mini-biome'],
    cav: ['Caverna', 'Cave'],
    fundo: ['Profundo', 'Deep'],
    inc: ['Incursão', 'Incursion']
  };
  var filtro = 'todos';

  function en() { return RPG.i18n.lang() === 'en'; }
  function fmt(n) { return RPG.i18n.formatNumber(n); }

  /** XP para ir do nível n ao n+1. */
  function xpDoNivel(n) { return XP_BASE + (n - 1) * XP_POR_NIVEL; }

  function xpEntre(de, ate) {
    var total = 0;
    for (var n = de; n < ate; n++) total += xpDoNivel(n);
    return total;
  }

  function desenharZonas() {
    var box = document.getElementById('filtro-zonas');
    var i = en() ? 1 : 0;
    box.innerHTML = '<button type="button" class="filtro' + (filtro === 'todos' ? ' active' : '') + '" data-z="todos">' +
      (en() ? 'All' : 'Todas') + '</button>' + Object.keys(TIPOS).map(function (k) {
      return '<button type="button" class="filtro' + (filtro === k ? ' active' : '') + '" data-z="' + k + '">' + TIPOS[k][i] + '</button>';
    }).join('');
    RPG.ui.bindFilterGroup(box.querySelectorAll('.filtro'), 'data-z', function (v) { filtro = v; desenharTabela(); });
    desenharTabela();
  }

  function desenharTabela() {
    var i = en() ? 1 : 0;
    document.getElementById('zonas-corpo').innerHTML = ZONAS.filter(function (z) {
      return filtro === 'todos' || z[0] === filtro;
    }).map(function (z) {
      return '<tr><td>' + z[2 + i] + '</td><td><span class="tipo tipo--' + z[0] + '">' + TIPOS[z[0]][i] +
        '</span></td><td class="num">' + z[1] + '</td><td class="barra-col"><span class="barra" style="--p:' +
        Math.round(z[1] / 105 * 100) + '%"></span></td></tr>';
    }).join('');
  }

  function desenharCurva() {
    var cv = document.getElementById('curva-grafico');
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    var w = cv.width, h = cv.height, m = 34;
    var max = xpDoNivel(NIVEL_MAX - 1);
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(190,165,255,.12)';
    ctx.fillStyle = '#8f86ad';
    ctx.font = '12px Outfit, sans-serif';
    [0, 0.5, 1].forEach(function (f) {
      var y = h - m - f * (h - 2 * m);
      ctx.beginPath(); ctx.moveTo(m, y); ctx.lineTo(w - 10, y); ctx.stroke();
      ctx.fillText(f === 0 ? '0' : (max * f / 1e6).toFixed(1).replace('.', en() ? '.' : ',') + 'M', 0, y + 4);
    });
    [1, 50, 100, 170].forEach(function (n) {
      ctx.fillText(String(n), m + (n - 1) / (NIVEL_MAX - 1) * (w - m - 10) - 6, h - 10);
    });
    var grad = ctx.createLinearGradient(m, 0, w, 0);
    grad.addColorStop(0, '#f5b83d');
    grad.addColorStop(1, '#9d6bff');
    ctx.lineWidth = 4;
    ctx.strokeStyle = grad;
    ctx.beginPath();
    for (var n = 1; n < NIVEL_MAX; n++) {
      var x = m + (n - 1) / (NIVEL_MAX - 1) * (w - m - 10);
      var y = h - m - xpDoNivel(n) / max * (h - 2 * m);
      if (n === 1) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  function preencherZonasCalc() {
    var sel = document.getElementById('calc-zona');
    var atual = sel.value || '45';
    var i = en() ? 1 : 0;
    sel.innerHTML = ZONAS.map(function (z) {
      return '<option value="' + z[1] + '">' + z[2 + i] + ' (' + z[1] + ' XP)</option>';
    }).join('');
    var opcao = sel.querySelector('option[value="' + atual + '"]');
    if (opcao) opcao.selected = true;
  }

  function calcular() {
    var de = Math.max(1, Math.min(NIVEL_MAX - 1, parseInt(document.getElementById('calc-de').value, 10) || 1));
    var ate = Math.max(de + 1, Math.min(NIVEL_MAX, parseInt(document.getElementById('calc-ate').value, 10) || de + 1));
    var xp = xpEntre(de, ate);
    var porAbate = Number(document.getElementById('calc-zona').value) * Number(document.getElementById('calc-bonus').value);
    document.getElementById('calc-xp').textContent = fmt(xp);
    document.getElementById('calc-abates').textContent = fmt(Math.ceil(xp / porAbate));
    document.getElementById('calc-pontos').textContent = fmt(ate - de);
  }

  function init() {
    if (document.body.getAttribute('data-page') !== 'progressao') return;
    ['calc-de', 'calc-ate', 'calc-zona', 'calc-bonus'].forEach(function (id) {
      document.getElementById(id).addEventListener('input', calcular);
    });
    RPG.i18n.onChange(function () {
      desenharZonas();
      desenharCurva();
      preencherZonasCalc();
      calcular();
    });
  }

  RPG.pages = RPG.pages || {};
  RPG.pages.progressao = { init: init };
})(window.RPG = window.RPG || {});
