/* ============================================
   RPG SKILLS - Inicialização (sempre o último script da página)
   Cada módulo só age se a página tiver os elementos dele.
   O idioma vem por último: ele dispara "rpgskills:i18n" e os módulos se redesenham.
   ============================================ */
(function (RPG) {
  'use strict';

  var modules = [
    RPG.ui,
    RPG.changelog,
    RPG.formDiscussoes
  ];
  Object.keys(RPG.pages || {}).forEach(function (k) { modules.push(RPG.pages[k]); });

  modules.forEach(function (m) {
    if (!m || typeof m.init !== 'function') return;
    try { m.init(); } catch (e) { console.error('[rpgskills]', e); }
  });

  RPG.i18n.init();
})(window.RPG = window.RPG || {});
