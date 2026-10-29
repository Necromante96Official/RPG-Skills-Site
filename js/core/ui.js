/* ============================================
   RPG SKILLS - Interface comum a todas as páginas
   Menu do celular, sombra do topo, revelar ao rolar e grupos de filtro.
   ============================================ */
(function (RPG) {
  'use strict';

  var revealObserver = null;

  function initMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var panel = document.getElementById('menu-movel');
    if (!toggle || !panel) return;
    function set(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.hidden = !open;
    }
    toggle.addEventListener('click', function () { set(panel.hidden); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    window.matchMedia('(min-width: 1181px)').addEventListener('change', function (m) { if (m.matches) set(false); });
  }

  /** Mostra com animação os elementos .revelar quando entram na tela. */
  function observeReveal(root) {
    var els = (root || document).querySelectorAll('.revelar:not(.visible)');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    els.forEach(function (el) { revealObserver.observe(el); });
  }

  /** Botões de filtro exclusivos: marca o clicado e chama onSelect(valor do atributo). */
  function bindFilterGroup(buttons, attr, onSelect) {
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        onSelect(btn.getAttribute(attr));
      });
    });
  }

  /** Escapa texto para montar HTML com segurança. */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function init() {
    initMenu();
    observeReveal();
  }

  RPG.ui = {
    init: init,
    observeReveal: observeReveal,
    bindFilterGroup: bindFilterGroup,
    esc: esc
  };
})(window.RPG = window.RPG || {});
