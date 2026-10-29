/* ============================================
   RPG SKILLS - Acesso aos dados do mod (js/generated/mod-data.js)
   Classes e passivas vêm do código do mod; aqui só há leitura e formatação.
   ============================================ */
(function (RPG) {
  'use strict';

  var DATA = window.RPG_MOD || { classes: [], passivas: [] };
  var MAX_PONTOS = 5;

  var ABAS = [
    { id: 'combate', pt: 'Combate', en: 'Combat' },
    { id: 'sobrevivencia', pt: 'Sobrevivência', en: 'Survival' },
    { id: 'movimento', pt: 'Movimento', en: 'Movement' },
    { id: 'utilidade', pt: 'Utilidade', en: 'Utility' },
    { id: 'necromancia', pt: 'Necromancia', en: 'Necromancy' }
  ];

  /** Texto {pt, en} no idioma atual. */
  function txt(obj) {
    if (!obj) return '';
    return RPG.i18n.lang() === 'en' ? (obj.en || obj.pt || '') : (obj.pt || obj.en || '');
  }

  function aba(id) {
    for (var i = 0; i < ABAS.length; i++) if (ABAS[i].id === id) return ABAS[i];
    return { id: id, pt: id, en: id };
  }

  function classe(id) {
    for (var i = 0; i < DATA.classes.length; i++) if (DATA.classes[i].id === id) return DATA.classes[i];
    return null;
  }

  /** Caminho do ícone da classe, relativo à página atual. */
  function icone(id) {
    var raiz = document.body.getAttribute('data-raiz') || '';
    return raiz + 'assets/classes/' + id + '.webp';
  }

  function numero(n) {
    var r = Math.round(n * 10) / 10;
    return RPG.i18n.formatNumber(r);
  }

  /** Valor de um bônus com N pontos na classe (ex.: "+30%", "+6 tiles"). */
  function valor(bonus, pontos) {
    if (bonus.faixas) return txt(bonus.faixas[Math.max(1, Math.min(MAX_PONTOS, pontos)) - 1]);
    return '+' + numero(bonus.porPonto * pontos) + txt(bonus.sufixo);
  }

  RPG.mod = {
    classes: function () { return DATA.classes; },
    passivas: function () { return DATA.passivas; },
    abas: function () { return ABAS; },
    aba: aba,
    classe: classe,
    icone: icone,
    valor: valor,
    txt: txt,
    MAX_PONTOS: MAX_PONTOS
  };
})(window.RPG = window.RPG || {});
