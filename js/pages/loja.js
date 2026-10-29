/* ============================================
   RPG SKILLS - Loja: preço dos bônus de XP pelo nível
   Mesma conta de XpBuffPurchaseService.calculateCost (mod 4.1).
   ============================================ */
(function (RPG) {
  'use strict';

  var BASE_2X = 1000;
  var POR_NIVEL_2X = 300;
  var TETO_2X = 50000;

  function custo(nivel, mult) {
    var dois = Math.min(TETO_2X, BASE_2X + POR_NIVEL_2X * Math.max(1, nivel));
    return Math.floor(dois * mult / 2);
  }

  function atualizar() {
    var nivel = Number(document.getElementById('preco-nivel').value);
    document.getElementById('preco-nivel-valor').textContent = nivel;
    [2, 5, 10].forEach(function (m) {
      document.getElementById('preco-' + m).textContent = RPG.i18n.formatNumber(custo(nivel, m));
    });
  }

  function init() {
    var faixa = document.getElementById('preco-nivel');
    if (!faixa) return;
    faixa.addEventListener('input', atualizar);
    RPG.i18n.onChange(atualizar);
  }

  RPG.pages = RPG.pages || {};
  RPG.pages.loja = { init: init };
})(window.RPG = window.RPG || {});
