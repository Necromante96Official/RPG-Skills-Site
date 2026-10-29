/* ============================================
   RPG SKILLS - Idioma (i18n)
   Dicionários vêm de js/generated/i18n-data.js (gerado de i18n/*.json
   por tools/build.py). Nunca editar traduções aqui.
   ============================================ */
(function (RPG) {
  'use strict';

  var STORAGE_KEY = 'rpgskills-lang';
  var LANGS = ['pt-BR', 'en'];
  var dicts = window.RPG_I18N || { 'pt-BR': {}, 'en': {} };
  var current = 'pt-BR';

  var PAGE_BY_FILE = {};

  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function store(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* modo privado */ }
  }

  function detect() {
    var saved = readStored();
    if (LANGS.indexOf(saved) !== -1) return saved;
    var nav = navigator.language || '';
    return nav.toLowerCase().indexOf('en') === 0 ? 'en' : 'pt-BR';
  }

  /** Texto traduzido; cai para pt-BR e depois para o fallback. */
  function t(key, fallback) {
    var dict = dicts[current] || {};
    if (dict[key] !== undefined) return dict[key];
    var base = dicts['pt-BR'] || {};
    if (base[key] !== undefined) return base[key];
    return fallback !== undefined ? fallback : '';
  }

  /** t() com substituição de {nome} por valores. */
  function tf(key, fallback, vars) {
    var text = t(key, fallback);
    Object.keys(vars || {}).forEach(function (k) {
      text = text.split('{' + k + '}').join(String(vars[k]));
    });
    return text;
  }

  function locale() {
    return current === 'en' ? 'en-US' : 'pt-BR';
  }

  function formatNumber(n) {
    return Number(n).toLocaleString(locale());
  }

  function pageId() {
    var page = document.body && document.body.getAttribute('data-page');
    if (page) return page;
    var m = (location.pathname || '').match(/\/([^/]+)\.html?$/i);
    if (!m || m[1] === 'index') return 'index';
    return PAGE_BY_FILE[m[1]] || m[1];
  }

  function applyMeta(dict) {
    var page = pageId();
    var title = dict['meta.title.' + page];
    var desc = dict['meta.desc.' + page];
    if (title !== undefined) document.title = title;
    if (desc !== undefined) {
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', desc);
    }
  }

  /** Aplica o idioma atual a um trecho do DOM (padrão: documento todo). */
  function apply(root) {
    var dict = dicts[current] || {};
    var scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v !== undefined) el.innerHTML = v;
    });
    scope.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-placeholder')];
      if (v !== undefined) el.placeholder = v;
    });
    scope.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-aria')];
      if (v !== undefined) el.setAttribute('aria-label', v);
    });
  }

  function syncSwitchers() {
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === current);
    });
  }

  function setLanguage(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    current = lang;
    store(lang);
    document.documentElement.lang = lang;
    syncSwitchers();
    apply();
    applyMeta(dicts[current] || {});
    document.dispatchEvent(new CustomEvent('rpgskills:i18n', { detail: { lang: current } }));
  }

  /** Registra uma função que roda a cada troca de idioma (e na primeira aplicação). */
  function onChange(fn) {
    document.addEventListener('rpgskills:i18n', fn);
  }

  function init() {
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });
    setLanguage(detect());
  }

  RPG.i18n = {
    t: t,
    tf: tf,
    lang: function () { return current; },
    locale: locale,
    formatNumber: formatNumber,
    apply: apply,
    onChange: onChange,
    setLanguage: setLanguage,
    init: init
  };
})(window.RPG = window.RPG || {});
