/* ============================================
   RPG SKILLS - Main JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ---- TRANSLATIONS (JSON is the source of truth) ---- */
  var I18N = { 'pt-BR': {}, 'en': {} };
  var STORAGE_KEY = 'rpgskills-lang';
  var currentLang = 'pt-BR';
  var i18nReady = false;

  function i18nBasePath() {
    var path = (window.location.pathname || '').replace(/\\/g, '/');
    if (/\/html\//.test(path) || /\/html\/[^/]*\.html?$/i.test(path)) return '../i18n/';
    return 'i18n/';
  }

  function t(key, fallback) {
    var dict = I18N[currentLang] || {};
    if (dict[key] !== undefined) return dict[key];
    var other = I18N['pt-BR'] || {};
    if (other[key] !== undefined) return other[key];
    return fallback !== undefined ? fallback : '';
  }

  /* ---- DETECT LANGUAGE ---- */
  function detectLanguage() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'pt-BR') return saved;
    var bl = navigator.language || navigator.userLanguage || '';
    return bl.startsWith('en') ? 'en' : 'pt-BR';
  }

  /* ---- APPLY TO DOM ---- */
  function applyPageMeta(dict) {
    var page = document.body && document.body.getAttribute('data-page');
    if (!page) {
      var path = (window.location.pathname || '').replace(/\\/g, '/');
      if (/index\.html?$/i.test(path) || path.endsWith('/') || path === '') page = 'index';
      else {
        var m = path.match(/\/([^/]+)\.html?$/i);
        if (m) {
          var map = {
            'funcionalidades': 'funcionalidades',
            'progressao': 'progressao',
            'universo-xp': 'universo',
            'classes': 'classes',
            'janela': 'janela',
            'qol': 'qol',
            'configuracao': 'configuracao',
            'atalhos': 'atalhos',
            'passivas': 'passivas',
            'changelog': 'changelog',
            'discussoes': 'discussoes',
            'fontes-xp': 'fontes'
          };
          page = map[m[1]] || m[1];
        }
      }
    }
    if (!page) return;
    var titleKey = 'meta.title.' + page;
    var descKey = 'meta.desc.' + page;
    if (dict[titleKey] !== undefined) document.title = dict[titleKey];
    if (dict[descKey] !== undefined) {
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', dict[descKey]);
    }
  }

  function applyTranslations() {
    var dict = I18N[currentLang];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    applyPageMeta(dict);
    document.dispatchEvent(new CustomEvent('rpgskills:i18n', { detail: { lang: currentLang } }));
  }

  /* ---- SWITCH LANGUAGE ---- */
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : 'en';

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    if (I18N[lang] && Object.keys(I18N[lang]).length) applyTranslations();
  }

  function loadI18nDictionaries() {
    // Prefer bundled data (works on file:// and offline). JSON remains editable source.
    if (window.RPG_I18N && window.RPG_I18N['pt-BR'] && window.RPG_I18N['en']) {
      I18N['pt-BR'] = window.RPG_I18N['pt-BR'];
      I18N['en'] = window.RPG_I18N['en'];
      i18nReady = true;
      return Promise.resolve();
    }
    var base = i18nBasePath();
    return Promise.all([
      fetch(base + 'pt-BR.json').then(function (r) {
        if (!r.ok) throw new Error('pt-BR.json ' + r.status);
        return r.json();
      }),
      fetch(base + 'en.json').then(function (r) {
        if (!r.ok) throw new Error('en.json ' + r.status);
        return r.json();
      })
    ]).then(function (pair) {
      I18N['pt-BR'] = pair[0] || {};
      I18N['en'] = pair[1] || {};
      i18nReady = true;
    }).catch(function (err) {
      console.warn('[rpgskills] i18n load failed; keeping HTML fallbacks.', err);
      i18nReady = false;
    });
  }

  /* ---- NAV SCROLL ---- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- REVEAL ON SCROLL ---- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ---- MOBILE NAV ---- */
  var mobileToggle = document.querySelector('.mobile-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileClose = document.querySelector('.mobile-nav-close');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    var closeMobile = function () {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (mobileClose) mobileClose.addEventListener('click', closeMobile);
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobile);
    });
  }

  /* ---- SMOOTH SCROLL ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---- LANGUAGE SWITCHER ---- */
  document.querySelectorAll('.lang-option').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });

  /* ---- WINDOW TAB SWITCH (legacy + new premium) ---- */
  (function () {
    // Legacy (old .window-tab) - keep compat if present
    var legacyTabs = document.querySelectorAll('.window-tab');
    var legacyPanels = document.querySelectorAll('.window-panel');
    if (legacyTabs.length && legacyPanels.length) {
      legacyTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          var target = tab.dataset.tab;
          legacyTabs.forEach(function (t) { t.classList.remove('active'); });
          legacyPanels.forEach(function (p) { p.style.display = 'none'; });
          tab.classList.add('active');
          var panel = document.getElementById(target);
          if (panel) panel.style.display = 'block';
        });
      });
    }

    // New premium rpg-window
    var rwTabs = document.querySelectorAll('.rw-tab');
    var rwPanels = document.querySelectorAll('.rw-panel');
    if (!rwTabs.length || !rwPanels.length) return;

    function activateRwTab(id) {
      rwTabs.forEach(function (t) {
        var isActive = t.dataset.tab === id;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      rwPanels.forEach(function (p) {
        p.classList.toggle('active', p.id === id);
      });
    }

    rwTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateRwTab(tab.dataset.tab);
      });
    });

    // Keyboard 1/2/3 inside window area
    document.addEventListener('keydown', function (e) {
      var win = document.querySelector('.rpg-window');
      if (!win) return;
      // only if window is in viewport (user is viewing #window)
      var rect = win.getBoundingClientRect();
      var inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === '1') activateRwTab('rw-status');
      if (e.key === '2') activateRwTab('rw-classes');
      if (e.key === '3') activateRwTab('rw-shop');
    });

    /* ---- DEMO: XP GAIN ---- */
    var xp = 12450;
    var lvl = 42;
    var free = 3;
    var spent = 42;
    var chestSlots = 40;
    var worldStack = 1;
    var activeBuff = null;

    function xpNeededFor(l) {
      // Real mod formula: 10000 + (L-1)*10000 → L1=10k … L42=420k … L165=1.65M
      if (l <= 0) return 0;
      return 10000 + (l - 1) * 10000;
    }
    function localeNum(n) {
      return n.toLocaleString(currentLang === 'en' ? 'en-US' : 'pt-BR');
    }
    function updateXP() {
      var needed = xpNeededFor(lvl);
      var pct = Math.max(0, Math.min(100, (xp / needed) * 100));
      var fill = document.getElementById('rw-xpfill');
      var txt = document.getElementById('rw-xp-text');
      var pctEl = document.getElementById('rw-xp-pct');
      var lvlEl = document.getElementById('rw-lvl-label');
      var badge = document.getElementById('rw-badge-status');
      var maxBadge = document.getElementById('rw-max-badge');
      var bar = document.getElementById('rw-xpbar');
      if (fill) fill.style.width = pct.toFixed(1) + '%';
      if (txt) txt.innerHTML = '<strong>' + localeNum(xp) + '</strong> / ' + localeNum(needed) + ' XP';
      if (pctEl) pctEl.textContent = pct.toFixed(0) + '%';
      if (lvlEl) lvlEl.textContent = t('demo.level', 'Nível') + ' ' + lvl;
      if (badge) badge.textContent = lvl;
      if (bar) { bar.classList.remove('pulse'); void bar.offsetWidth; bar.classList.add('pulse'); }
      if (maxBadge) maxBadge.style.display = lvl >= 165 ? 'inline-block' : 'none';
      var freeEl = document.getElementById('rw-free-points');
      var spentEl = document.getElementById('rw-spent-points');
      if (freeEl) freeEl.textContent = free;
      if (spentEl) spentEl.textContent = spent;
      var pv = document.getElementById('rw-points-val');
      if (pv) pv.textContent = free;
    }
    function showToast(amount) {
      var toast = document.getElementById('rw-toast');
      if (!toast) return;
      toast.textContent = '+ ' + localeNum(amount) + ' XP';
      toast.classList.add('show');
      clearTimeout(toast._hide);
      toast._hide = setTimeout(function () { toast.classList.remove('show'); }, 1800);
    }
    var gainBtn = document.getElementById('rw-gain-xp');
    if (gainBtn) {
      gainBtn.addEventListener('click', function () {
        var mult = activeBuff === '2' ? 2 : activeBuff === '5' ? 5 : activeBuff === '10' ? 10 : 1;
        var gain = 850 * mult;
        xp += gain;
        showToast(gain);
        if (xp >= xpNeededFor(lvl) && lvl < 165) {
          xp -= xpNeededFor(lvl);
          lvl += 1;
          free += 1;
          spent += 1;
        }
        updateXP();
      });
    }
    updateXP();

    /* ---- DEMO: CLASSES filter + spend ---- */
    var filterBtns = document.querySelectorAll('.rw-fbtn');
    var crowEls = document.querySelectorAll('.rw-crow');
    if (filterBtns.length) {
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var f = btn.dataset.filter;
          filterBtns.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          crowEls.forEach(function (row) {
            var cat = row.dataset.cat;
            var show = f === 'all' || cat === f;
            row.style.display = show ? '' : 'none';
          });
        });
      });
    }

    // Populate full 33 classes list (bilingual; rebuilt on language change)
    var classData = [
      { cat: 'combat', id: 'warrior', icon: '&#9876;', init: 3, bonusPt: '+10% dano corpo a corpo · +10% crítico · +10% pen. armadura · +10% velocidade', bonusEn: '+10% melee damage · +10% crit · +10% armor pen · +10% attack speed', color: '#ef4444' },
      { cat: 'combat', id: 'marksman', icon: '&#127993;', init: 0, bonusPt: '+10% dano à distância · Olho de Águia no Nv1', bonusEn: '+10% ranged damage · Eagle Eye at Lv1', color: '#ef4444' },
      { cat: 'combat', id: 'magic', icon: '&#128302;', init: 0, bonusPt: '+10% dano mágico · +10% regen mana · +10% veloc. lançamento', bonusEn: '+10% magic damage · +10% mana regen · +10% cast speed', color: '#ef4444' },
      { cat: 'combat', id: 'summoner', icon: '&#128058;', init: 0, bonusPt: '+10% dano invocação · +2 invocações/pt (cap 10)', bonusEn: '+10% summon damage · +2 summons/pt (cap 10)', color: '#ef4444' },
      { cat: 'combat', id: 'bloodthirsty', icon: '&#129657;', init: 0, bonusPt: 'sangramento 5-25/s · quebra de armadura no Nv5', bonusEn: 'bleed 5-25/s · armor break at Lv5', color: '#ef4444' },
      { cat: 'combat', id: 'fire', icon: '&#128293;', init: 1, bonusPt: '5-25/s queimadura · 3-15s duração', bonusEn: '5-25/s burn · 3-15s duration', color: '#ef4444' },
      { cat: 'combat', id: 'poison', icon: '&#9760;', init: 0, bonusPt: '5-25/s veneno necrótico · lentidão', bonusEn: '5-25/s necrotic poison · slow', color: '#ef4444' },
      { cat: 'combat', id: 'frost', icon: '&#10052;', init: 0, bonusPt: '5-25/s geada · Lv5: 30% congelar 15s', bonusEn: '5-25/s frost · Lv5: 30% freeze 15s', color: '#ef4444' },
      { cat: 'combat', id: 'nightmare', icon: '&#128123;', init: 0, bonusPt: '5-25/s escuridão · Lv5: 5% golpe mortal', bonusEn: '5-25/s darkness · Lv5: 5% hitkill', color: '#ef4444' },
      { cat: 'defense', id: 'bloody', icon: '&#10084;', init: 0, bonusPt: '+0.6/s cura por pt · roubo de vida +10%/pt', bonusEn: '+0.6/s heal per pt · lifesteal +10%/pt', color: '#60a5fa' },
      { cat: 'defense', id: 'resistance', icon: '🛡️', init: 0, bonusPt: '-10% dano recebido/pt · -10% empurrão', bonusEn: '-10% damage taken/pt · -10% knockback', color: '#60a5fa' },
      { cat: 'defense', id: 'elemental', icon: '&#129514;', init: 0, bonusPt: 'Lv1 imune a veneno → Lv5 bloqueia todos debuffs', bonusEn: 'Lv1 poison immune → Lv5 blocks all debuffs', color: '#60a5fa' },
      { cat: 'defense', id: 'colossal', icon: '&#129704;', init: 0, bonusPt: '2-10s invulnerável ao ser atingido (30s CD)', bonusEn: '2-10s invulnerable when hit (30s CD)', color: '#60a5fa' },
      { cat: 'defense', id: 'vitality', icon: '❤️', init: 0, bonusPt: '+20 HP/pt · regen · 3%/pt sobreviver fatal', bonusEn: '+20 HP/pt · regen · 3%/pt survive fatal', color: '#60a5fa' },
      { cat: 'defense', id: 'defense', icon: '🛡️', init: 0, bonusPt: '+5 armadura/pt (cap 25) · +10% espinhos/pt', bonusEn: '+5 armor/pt (cap 25) · +10% thorns/pt', color: '#60a5fa' },
      { cat: 'defense', id: 'resilient', icon: '💧', init: 0, bonusPt: '+20 resiliência/pt · +10% ganho/recarga', bonusEn: '+20 resilience/pt · +10% gain/recovery', color: '#60a5fa' },
      { cat: 'mobility', id: 'speed', icon: '👟', init: 0, bonusPt: '+10% mov. / corrida por pt', bonusEn: '+10% move / sprint per pt', color: '#a78bfa' },
      { cat: 'mobility', id: 'dash', icon: '💨', init: 0, bonusPt: '+2 dash/pt (cap 10) · -10% cooldown/pt', bonusEn: '+2 dash/pt (cap 10) · -10% cooldown/pt', color: '#a78bfa' },
      { cat: 'mobility', id: 'reduction', icon: '🎯', init: 0, bonusPt: '-10% munição/pt · -10% dano crítico recebido', bonusEn: '-10% ammo/pt · -10% crit damage taken', color: '#a78bfa' },
      { cat: 'utility', id: 'cavern', icon: '&#9935;', init: 5, bonusPt: '+10% mineração · Vein Miner + Dark Ruin · Explosive Miner no Nv5', bonusEn: '+10% mining · Vein Miner + Dark Ruin · Explosive Miner at Lv5', color: '#c8973a' },
      { cat: 'utility', id: 'construction', icon: '🔨', init: 0, bonusPt: '+10% veloc. construção · +alcance interação', bonusEn: '+10% build speed · +interact range', color: '#c8973a' },
      { cat: 'utility', id: 'arcane', icon: '✨', init: 0, bonusPt: '+20 mana/pt · Escritor Imortal (Nv1)', bonusEn: '+20 mana/pt · Immortal Scribe (Lv1)', color: '#c8973a' },
      { cat: 'utility', id: 'wealth', icon: '💰', init: 0, bonusPt: 'Golpe de Ouro até 50/hit', bonusEn: 'Gold Strike up to 50/hit', color: '#c8973a' },
      { cat: 'utility', id: 'loot', icon: '🎁', init: 0, bonusPt: 'Saque 2×-5× · chance drop completo', bonusEn: 'Loot 2×-5× · full drop chance', color: '#c8973a' },
      { cat: 'utility', id: 'relic', icon: '💎', init: 0, bonusPt: '+4 slots trinket/pt · alcance coleta', bonusEn: '+4 trinket slots/pt · pickup range', color: '#c8973a' },
      { cat: 'utility', id: 'sea', icon: '🎣', init: 0, bonusPt: 'Pesca + Reflexo do Pescador (AFK)', bonusEn: 'Fishing + Angler\u2019s Reflex (AFK)', color: '#c8973a' },
      { cat: 'utility', id: 'gourmet', icon: '🍖', init: 0, bonusPt: 'Comida +25%→300% · Lv5 auto-comer', bonusEn: 'Food +25%→300% · Lv5 auto-eat', color: '#c8973a' },
      { cat: 'utility', id: 'alchemy', icon: '🧪', init: 0, bonusPt: 'Poção +25%→300% · Lv5 auto-poção (<50% HP)', bonusEn: 'Potion +25%→300% · Lv5 auto-potion (<50% HP)', color: '#c8973a' },
      { cat: 'utility', id: 'ranch', icon: '🐓', init: 0, bonusPt: 'Doma/cruzamento rápido · Lv5: 5× drops', bonusEn: 'Faster tame/breed · Lv5: 5× drops', color: '#c8973a' },
      { cat: 'utility', id: 'machine', icon: '⚙️', init: 0, bonusPt: 'Forno 6s→2s · Prensa 45→2s · Compost 30→2s', bonusEn: 'Furnace 6s→2s · Press 45→2s · Compost 30→2s', color: '#c8973a' },
      { cat: 'utility', id: 'nature', icon: '🌱', init: 0, bonusPt: 'Colheitas/árvores rápidas no assentamento', bonusEn: 'Faster crops/trees in settlements', color: '#c8973a' },
      { cat: 'utility', id: 'trap', icon: '💬', init: 0, bonusPt: 'Armadilhas +sangramento no Lv5', bonusEn: 'Traps +bleed at Lv5', color: '#c8973a' },
      { cat: 'settler', id: 'realm', icon: '👑', init: 4, bonusPt: 'Nv5: Sem Rival + 3× XP + Aura +15% stats colonos', bonusEn: 'Lv5: Unrivaled + 3× XP + Aura +15% settler stats', color: '#4ade80' }
    ];

    var list = document.getElementById('rw-class-list');

    function lvlLabel(lvlNow, max) {
      var nv = t('demo.nv', 'NV');
      var mx = t('demo.max', 'MÁX');
      return lvlNow >= max ? mx + ' 5' : nv + ' ' + lvlNow + ' / 5';
    }

    function updateCavernGate() {
      var cavernRow = Array.from(document.querySelectorAll('.rw-crow')).find(function (r) {
        return r.dataset.classId === 'cavern';
      });
      var cavernLvl = cavernRow ? parseInt(cavernRow.dataset.lvl || '0', 10) : 0;
      var btn = document.getElementById('rw-buy-explosive');
      if (btn) {
        if (btn.dataset.unlocked === '1') {
          btn.disabled = true;
          btn.textContent = t('demo.unlocked', '✓ Desbloqueado');
          btn.style.opacity = '1';
          btn.style.background = 'rgba(34,197,94,0.14)';
          btn.style.borderColor = 'rgba(34,197,94,0.35)';
          btn.style.color = '#22c55e';
          btn.style.cursor = 'default';
        } else if (cavernLvl >= 5) {
          btn.disabled = false;
          btn.style.opacity = '1';
          btn.style.cursor = 'pointer';
          btn.textContent = t('demo.buy.explosive', 'Comprar Explosivo');
          btn.style.background = 'linear-gradient(180deg, var(--gold), #c2761a)';
          btn.style.color = '#120a00';
        } else {
          btn.disabled = true;
          btn.style.opacity = '0.45';
          btn.style.cursor = 'not-allowed';
          btn.textContent = t('demo.need.cavern', 'Requer Caverna 5 ({n}/5)').replace('{n}', String(cavernLvl));
        }
      }
    }

    function bindPlusButtons(scope) {
      var btns = (scope || document).querySelectorAll('.rw-plus');
      btns.forEach(function (btn) {
        if (btn._bound) return;
        btn._bound = true;
        btn.addEventListener('click', function () {
          if (btn.disabled) return;
          if (free <= 0) {
            btn.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }], { duration: 240 });
            showToast(0);
            var toastEl = document.getElementById('rw-toast');
            if (toastEl) { toastEl.textContent = t('demo.no.points', 'Sem pontos! Ganhe XP'); toastEl.classList.add('show'); clearTimeout(toastEl._hide2); toastEl._hide2 = setTimeout(function () { toastEl.classList.remove('show'); }, 1600); }
            return;
          }
          var row = btn.closest('.rw-crow');
          if (!row) return;
          var lvlNow = parseInt(row.dataset.lvl || '0', 10);
          var max = parseInt(row.dataset.max || '5', 10);
          if (lvlNow >= max) return;
          lvlNow += 1;
          row.dataset.lvl = lvlNow;
          free -= 1;
          spent += 1;
          var lvlTag = row.querySelector('.rw-clvl');
          var bar = row.querySelector('.rw-cfill');
          if (lvlTag) {
            lvlTag.textContent = lvlLabel(lvlNow, max);
            lvlTag.className = 'rw-clvl' + (lvlNow >= max ? ' max' : lvlNow === 0 ? ' dim' : '');
          }
          if (bar) bar.style.width = (lvlNow / max * 100) + '%';
          row.classList.toggle('locked', lvlNow === 0);
          row.classList.toggle('maxed', lvlNow >= max);
          if (lvlNow >= max) { btn.disabled = true; btn.textContent = '✓'; }
          updateXP();
          updateCavernGate();
          showToast(0);
          var tt = document.getElementById('rw-toast');
          var cname = row.querySelector('.rw-cname');
          var plain = cname ? cname.childNodes[0].textContent.trim() : '';
          if (tt) { tt.textContent = '+1 ' + plain; tt.classList.add('show'); clearTimeout(tt._hide2); tt._hide2 = setTimeout(function () { tt.classList.remove('show'); }, 1300); }
        });
      });
    }

    function buildClassRows(preserveLevels) {
      if (!list) return;
      var saved = {};
      if (preserveLevels) {
        Array.from(list.querySelectorAll('.rw-crow')).forEach(function (row) {
          if (row.dataset.classId) saved[row.dataset.classId] = parseInt(row.dataset.lvl || '0', 10);
        });
      }
      list.innerHTML = '';
      classData.forEach(function (c) {
        var lvlInit = preserveLevels && saved[c.id] !== undefined ? saved[c.id] : (c.init || 0);
        var max = 5;
        var bonus = currentLang === 'en' ? c.bonusEn : c.bonusPt;
        var name = t('class.' + c.id, c.id);
        var row = document.createElement('div');
        row.className = 'rw-crow' + (lvlInit >= max ? ' maxed' : lvlInit === 0 ? ' locked' : '');
        row.dataset.cat = c.cat;
        row.dataset.lvl = String(lvlInit);
        row.dataset.max = String(max);
        row.dataset.classId = c.id;
        row.innerHTML = '<div class="rw-cico" style="color:' + c.color + '; background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.06);">' + c.icon + '</div>' +
          '<div class="rw-cinfo"><div class="rw-cname">' + name + ' <span class="rw-clvl' + (lvlInit >= max ? ' max' : lvlInit === 0 ? ' dim' : '') + '">' + lvlLabel(lvlInit, max) + '</span></div><div class="rw-cbonus">' + bonus + '</div><div class="rw-cbar"><div class="rw-cfill" style="width:' + (lvlInit / max * 100) + '%"></div></div></div>' +
          '<button class="rw-plus" aria-label="' + t('aria.add.point', 'Adicionar ponto') + '"' + (lvlInit >= max ? ' disabled' : '') + '>' + (lvlInit >= max ? '✓' : '+1') + '</button>';
        var ico = row.querySelector('.rw-cico');
        if (c.color === '#ef4444') ico.style.background = 'rgba(239,68,68,0.10)';
        else if (c.color === '#60a5fa') ico.style.background = 'rgba(96,165,250,0.10)';
        else if (c.color === '#a78bfa') ico.style.background = 'rgba(167,139,250,0.10)';
        else if (c.color === '#c8973a') ico.style.background = 'rgba(234,179,8,0.10)';
        else if (c.color === '#4ade80') ico.style.background = 'rgba(74,222,128,0.10)';
        list.appendChild(row);
      });
      crowEls = document.querySelectorAll('.rw-crow');
      // re-apply active filter
      var activeFilter = document.querySelector('.rw-fbtn.active');
      var f = activeFilter ? activeFilter.dataset.filter : 'all';
      crowEls.forEach(function (row) {
        var show = f === 'all' || row.dataset.cat === f;
        row.style.display = show ? '' : 'none';
      });
      bindPlusButtons(list);
      updateCavernGate();
    }

    buildClassRows(false);

    var resetBtn = document.getElementById('rw-reset-points');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        free = 3;
        spent = 42;
        buildClassRows(false);
        updateXP();
      });
    }

    document.addEventListener('rpgskills:i18n', function () {
      buildClassRows(true);
      updateXP();
      updateCavernGate();
      var buffLabel = document.getElementById('rw-buff-active');
      if (buffLabel) {
        if (activeBuff) buffLabel.textContent = t('demo.buff.active', '{n}× ativo - 10 min').replace('{n}', activeBuff);
        else buffLabel.textContent = t('demo.no.buff', 'Nenhum ativo');
      }
      // restore chest/stack numbers after i18n may rewrite nested HTML
      chestVal = document.getElementById('rw-chest-val');
      stackVal = document.getElementById('rw-stack-val');
      if (chestVal) chestVal.textContent = chestSlots;
      if (stackVal) stackVal.textContent = worldStack + '×';
      var bar = document.getElementById('rw-chest-bar');
      if (bar && bar.firstElementChild) bar.firstElementChild.style.width = (chestSlots / 1000 * 100).toFixed(1) + '%';
    });

    /* ---- DEMO: SHOP buffs & buys ---- */
    var buffBtns = document.querySelectorAll('.rw-buff');
    var buffLabel = document.getElementById('rw-buff-active');
    buffBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var val = b.dataset.buff;
        if (activeBuff === val) {
          activeBuff = null;
          buffBtns.forEach(function (x) { x.classList.remove('active'); });
          if (buffLabel) buffLabel.textContent = t('demo.no.buff', 'Nenhum ativo');
        } else {
          activeBuff = val;
          buffBtns.forEach(function (x) { x.classList.remove('active'); });
          b.classList.add('active');
          if (buffLabel) buffLabel.textContent = t('demo.buff.active', '{n}× ativo - 10 min').replace('{n}', val);
        }
      });
    });

    var chestVal = document.getElementById('rw-chest-val');
    var stackVal = document.getElementById('rw-stack-val');
    document.querySelectorAll('.rw-buy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var kind = btn.dataset.buy;
        if (btn.disabled) return;
        if (kind === 'chest') {
          if (chestSlots >= 1000) return;
          chestSlots += 10;
          if (chestSlots > 1000) chestSlots = 1000;
          chestVal = document.getElementById('rw-chest-val');
          if (chestVal) chestVal.textContent = chestSlots;
          var bar = document.getElementById('rw-chest-bar');
          if (bar && bar.firstElementChild) bar.firstElementChild.style.width = (chestSlots / 1000 * 100).toFixed(1) + '%';
          btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.04)' }, { transform: 'scale(1)' }], { duration: 220 });
        } else if (kind === 'stack') {
          worldStack = Math.min(1000, worldStack === 1 ? 10 : worldStack * 2);
          stackVal = document.getElementById('rw-stack-val');
          if (stackVal) stackVal.textContent = worldStack + '×';
          btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.04)' }, { transform: 'scale(1)' }], { duration: 220 });
        } else if (kind === 'explosive') {
          btn.dataset.unlocked = '1';
          btn.textContent = t('demo.unlocked', '✓ Desbloqueado');
          btn.disabled = true;
          btn.style.opacity = '1';
          btn.style.background = 'rgba(34,197,94,0.14)';
          btn.style.borderColor = 'rgba(34,197,94,0.35)';
          btn.style.color = '#22c55e';
        }
        showToast(0);
        var toastEl = document.getElementById('rw-toast');
        if (toastEl) { toastEl.textContent = t('janela.mock.purchase', '✓ Compra efetuada'); toastEl.classList.add('show'); clearTimeout(toastEl._hide3); toastEl._hide3 = setTimeout(function () { toastEl.classList.remove('show'); }, 1400); }
      });
    });

    // close button just switches to status tab as easter egg
    var closeBtn = document.querySelector('.rw-close');
    if (closeBtn) closeBtn.addEventListener('click', function () { activateRwTab('rw-status'); });

  })();

  /* ---- QoL DEMOS (vein miner + switches + fishing) ---- */
  (function () {
    var veinOres = document.querySelectorAll('#qol-ore-grid .qol-ore.vein');
    var allOres = document.querySelectorAll('#qol-ore-grid .qol-ore');
    var veinCount = document.getElementById('qol-vein-count');
    var veinBtn = document.getElementById('qol-vein-all');
    var veinReset = document.getElementById('qol-vein-reset');
    var veinEnabled = true;

    function minedCount() {
      return document.querySelectorAll('#qol-ore-grid .qol-ore.vein.mined').length;
    }
    function updateVeinLabel() {
      if (veinCount) veinCount.textContent = minedCount();
      if (veinBtn) {
        veinBtn.textContent = veinEnabled
          ? t('qol.demo.vein.on', '⛏️ Minerador de Veios ON')
          : t('qol.demo.vein.off', '⛏️ OFF - clique único');
        veinBtn.style.opacity = veinEnabled ? '1' : '0.7';
        veinBtn.style.background = veinEnabled ? 'linear-gradient(180deg, var(--gold), #c2761a)' : 'rgba(255,255,255,0.08)';
        veinBtn.style.color = veinEnabled ? '#120a00' : '#fff';
        veinBtn.style.border = veinEnabled ? 'none' : '1px solid rgba(255,255,255,0.12)';
      }
    }
    function mineVein(target) {
      if (target.classList.contains('mined')) return;
      if (veinEnabled) {
        // mine all vein ores with staggered pop
        veinOres.forEach(function (ore, idx) {
          if (ore.classList.contains('mined')) return;
          setTimeout(function () {
            ore.classList.add('mined', 'pop');
            setTimeout(function () { ore.classList.remove('pop'); }, 260);
            updateVeinLabel();
          }, idx * 70);
        });
      } else {
        target.classList.add('mined', 'pop');
        setTimeout(function () { target.classList.remove('pop'); }, 260);
        updateVeinLabel();
      }
    }
    allOres.forEach(function (ore) {
      ore.addEventListener('click', function () {
        if (ore.dataset.ore === 'stone') {
          ore.classList.add('pop');
          setTimeout(function () { ore.classList.remove('pop'); }, 220);
          ore.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-3px)' }, { transform: 'translateX(3px)' }, { transform: 'translateX(0)' }], { duration: 220 });
          return;
        }
        mineVein(ore);
      });
    });
    document.addEventListener('rpgskills:i18n', function () {
      veinCount = document.getElementById('qol-vein-count');
      updateVeinLabel();
    });

    if (veinBtn) veinBtn.addEventListener('click', function () {
      veinEnabled = !veinEnabled;
      updateVeinLabel();
      // also toggle the switch in card
      var sw = document.querySelector('.qol-switch[data-qol=\"vein\"]');
      if (sw) { sw.classList.toggle('on', veinEnabled); sw.setAttribute('aria-checked', veinEnabled ? 'true' : 'false'); }
    });
    if (veinReset) veinReset.addEventListener('click', function () {
      veinOres.forEach(function (o) { o.classList.remove('mined', 'pop'); });
      updateVeinLabel();
    });
    updateVeinLabel();

    // Switches
    document.querySelectorAll('.qol-switch').forEach(function (sw) {
      sw.addEventListener('click', function () {
        var on = sw.classList.toggle('on');
        sw.setAttribute('aria-checked', on ? 'true' : 'false');
        if (sw.dataset.qol === 'vein') {
          veinEnabled = on;
          updateVeinLabel();
        }
      });
      sw.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sw.click(); }
      });
    });

    // Fishing bobber demo
    var fishBar = document.getElementById('qol-fish-bar');
    var fishPct = document.getElementById('qol-fish-pct');
    var fishingCard = document.querySelector('.qol-card[data-accent=\"blue\"] .qol-bobber');
    var fishIv = null;
    var fishProgress = 0;
    var fishOn = true;
    function startFish() {
      if (!fishBar || !fishOn) return;
      fishProgress = 0;
      if (fishIv) clearInterval(fishIv);
      fishIv = setInterval(function () {
        fishProgress += 3 + Math.random() * 4;
        if (fishProgress >= 100) {
          fishProgress = 100;
          fishBar.style.width = '100%';
          if (fishPct) fishPct.textContent = '100%';
          setTimeout(function () {
            fishProgress = 0;
            fishBar.style.width = '0%';
            if (fishPct) fishPct.textContent = '0%';
          }, 700);
          clearInterval(fishIv);
          fishIv = null;
          // auto restart if switch on
          setTimeout(function () {
            var sw = document.querySelector('.qol-switch[data-qol=\"fish\"]');
            if (sw && sw.classList.contains('on')) startFish();
          }, 900);
          return;
        }
        fishBar.style.width = fishProgress.toFixed(0) + '%';
        if (fishPct) fishPct.textContent = fishProgress.toFixed(0) + '%';
      }, 90);
    }
    // auto start fishing animation on intersection
    var fishObserver = null;
    if (fishBar) {
      try {
        fishObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (ent) {
            if (ent.isIntersecting) {
              var sw = document.querySelector('.qol-switch[data-qol=\"fish\"]');
              if (sw && sw.classList.contains('on')) startFish();
            } else {
              if (fishIv) { clearInterval(fishIv); fishIv = null; }
            }
          });
        }, { threshold: 0.2 });
        fishObserver.observe(fishBar.closest('.qol-card'));
      } catch (e) { startFish(); }
      // click bobber to manual trigger
      if (fishingCard) fishingCard.closest('.qol-card').addEventListener('click', function (e) {
        if (e.target.closest('.qol-switch')) return;
        startFish();
      });
      // switch toggle
      var fishSw = document.querySelector('.qol-switch[data-qol=\"fish\"]');
      if (fishSw) fishSw.addEventListener('click', function () {
        fishOn = fishSw.classList.contains('on');
        if (fishOn) startFish(); else { if (fishIv) { clearInterval(fishIv); fishIv = null; } fishBar.style.width = '0%'; if (fishPct) fishPct.textContent = '0%'; }
      });
    }
  })();

  /* ---- HERO TITLE LETTER WAVE ---- */
  var heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    var text = heroTitle.textContent;
    heroTitle.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement('span');
      span.className = 'letter' + (text[i] === ' ' ? ' space' : '');
      span.textContent = text[i] === ' ' ? '' : text[i];
      heroTitle.appendChild(span);
    }
  }

  /* ---- PASSIVES COLLECTION ---- */
  (function () {
    var cards = document.querySelectorAll('.passive-card');
    if (!cards.length) return;
    var collected = 0;
    var STORAGE = 'rpgskills-passives-collected';

    function updateProgress() {
      var total = cards.length || 19;
      var pct = Math.round(collected / total * 100);
      var countEl = document.getElementById('collected-count');
      var fillEl = document.getElementById('progress-fill');
      if (countEl) countEl.textContent = collected;
      if (fillEl) fillEl.style.width = pct + '%';
    }

    function setCollectedVisual(card, on) {
      var icon = card.querySelector('.passive-icon');
      if (!icon) return;
      if (!icon.dataset.orig) icon.dataset.orig = icon.textContent.trim();
      if (on) {
        icon.textContent = '✓';
        icon.style.background = 'rgba(74,222,128,0.14)';
        icon.style.borderColor = 'rgba(74,222,128,0.22)';
        icon.style.color = '#4ade80';
      } else {
        icon.textContent = icon.dataset.orig;
        icon.style.background = '';
        icon.style.borderColor = '';
        icon.style.color = '';
      }
    }

    function saveState() {
      var ids = [];
      cards.forEach(function (c, i) {
        if (c.classList.contains('collected')) ids.push(String(i));
      });
      try { localStorage.setItem(STORAGE, JSON.stringify(ids)); } catch (e) { }
    }

    function loadState() {
      try {
        var raw = localStorage.getItem(STORAGE);
        if (!raw) return;
        var ids = JSON.parse(raw) || [];
        ids.forEach(function (id) {
          var idx = parseInt(id, 10);
          if (!isNaN(idx) && cards[idx]) {
            cards[idx].classList.add('collected');
            setCollectedVisual(cards[idx], true);
            collected += 1;
          }
        });
      } catch (e) { }
    }

    cards.forEach(function (card) {
      var ic = card.querySelector('.passive-icon');
      if (ic && !ic.dataset.orig) ic.dataset.orig = ic.textContent.trim();
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.addEventListener('click', function () {
        card.classList.toggle('collected');
        var on = card.classList.contains('collected');
        collected += on ? 1 : -1;
        if (collected < 0) collected = 0;
        if (collected > cards.length) collected = cards.length;
        setCollectedVisual(card, on);
        updateProgress();
        saveState();
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    document.querySelectorAll('[data-pass]').forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.dataset.pass;
        document.querySelectorAll('[data-pass]').forEach(function (x) {
          x.classList.toggle('active', x === b);
        });
        cards.forEach(function (c) {
          var cat = c.dataset.cat;
          var show = f === 'all' || cat === f;
          c.style.display = show ? '' : 'none';
        });
      });
    });

    loadState();
    updateProgress();
  })();

  /* ---- FULL CHANGELOG (from release-notes via changelog-data.js) ---- */
  (function () {
    var mount = document.getElementById('changelog-timeline');
    if (!mount || !window.RPG_CHANGELOG || !window.RPG_CHANGELOG.length) return;

    var activeFilter = 'all';

    function localePack(entry) {
      return currentLang === 'en' ? (entry.en || entry.pt) : (entry.pt || entry.en);
    }

    function tagLabel(entry) {
      return t(entry.tagKey, entry.tag);
    }

    function sectionIsFix(heading) {
      var h = (heading || '').toLowerCase();
      return h.indexOf('corre') !== -1 || h.indexOf('fix') !== -1;
    }

    function render() {
      var html = '';
      window.RPG_CHANGELOG.forEach(function (entry) {
        var pack = localePack(entry);
        var sections = (pack && pack.sections) || [];
        html += '<div class="changelog-item polish reveal" data-cl-type="' + entry.tag + '">';
        html += '<div><span class="changelog-version">v' + entry.version + '</span>';
        html += '<span class="changelog-tag ' + entry.tagClass + '" data-i18n="' + entry.tagKey + '">' + tagLabel(entry) + '</span></div>';
        if (pack && pack.title) {
          html += '<p class="changelog-note" style="margin-top:8px;color:#fff;font-weight:600;">' + pack.title + '</p>';
        }
        sections.forEach(function (sec) {
          var fixSec = sectionIsFix(sec.heading);
          html += '<div class="changelog-section">';
          if (sec.heading) {
            html += '<h4 class="changelog-section-title">' + sec.heading + '</h4>';
          }
          html += '<ul class="changelog-list">';
          (sec.items || []).forEach(function (item) {
            html += '<li' + (fixSec ? ' class="fix"' : '') + '>' + item + '</li>';
          });
          html += '</ul></div>';
        });
        if (pack && pack.note) {
          html += '<p class="changelog-note">' + pack.note + '</p>';
        }
        html += '</div>';
      });
      mount.innerHTML = html;
      applyFilter(activeFilter);
      if (window.Reveal && typeof window.Reveal.refresh === 'function') {
        try { window.Reveal.refresh(); } catch (e) { }
      }
      // re-observe reveal for newly injected nodes
      document.querySelectorAll('#changelog-timeline .reveal:not(.visible)').forEach(function (el) {
        el.classList.add('visible');
      });
    }

    function applyFilter(f) {
      activeFilter = f || 'all';
      mount.querySelectorAll('.changelog-item').forEach(function (it) {
        var type = it.getAttribute('data-cl-type') || '';
        var show = activeFilter === 'all' || activeFilter === type ||
          (activeFilter === 'major' && (type === 'major' || type === 'new' || type === 'release'));
        it.style.display = show ? '' : 'none';
      });
    }

    document.querySelectorAll('[data-cl]').forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.dataset.cl;
        document.querySelectorAll('[data-cl]').forEach(function (x) {
          x.classList.toggle('active', x === b);
        });
        applyFilter(f);
      });
    });

    document.addEventListener('rpgskills:i18n', render);
    render();
  })();

  /* ---- CLASS MODAL ---- */
  function L(pair) {
    if (!pair) return '';
    if (typeof pair === 'string') return pair;
    return currentLang === 'en' ? (pair[1] || pair[0]) : pair[0];
  }

  var CLASS_DATA = {
    'class.warrior': {
      icon: '&#9876;', color: 'var(--cat-combat)', tabKey: 'modal.tab.combat',
      bonuses: [
        [['Dano Corpo a Corpo', 'Melee Damage'], '+10%/pt'],
        [['Dano Crítico', 'Critical Damage'], '+10%/pt'],
        [['Chance Crítica', 'Critical Chance'], '+10%/pt'],
        [['Penetração de Armadura', 'Armor Penetration'], '+10%/pt'],
        [['Velocidade de Ataque', 'Attack Speed'], '+10%/pt'],
        [['Poder de Empurrão', 'Knockback'], '+10%/pt']
      ],
      passives: [],
      note: ['Deus do Dano: todas as 4 classes de combate nível 5 = +50% dano total', 'Damage God: all 4 combat classes at level 5 = +50% total damage']
    },
    'class.marksman': {
      icon: '&#127993;', color: 'var(--cat-combat)', tabKey: 'modal.tab.combat',
      bonuses: [
        [['Dano à Distância', 'Ranged Damage'], '+10%/pt'],
        [['Dano Crítico', 'Critical Damage'], '+10%/pt'],
        [['Chance Crítica', 'Critical Chance'], '+10%/pt'],
        [['Penetração de Armadura', 'Armor Penetration'], '+10%/pt'],
        [['Velocidade do Projétil', 'Projectile Speed'], '+10%/pt'],
        [['Poder de Empurrão', 'Knockback'], '+10%/pt']
      ],
      passives: [{
        name: ['Olho de Águia', 'Eagle Eye'],
        req: 'modal.req.point1',
        desc: ['Mostra barras de vida e radar de inimigos', 'Shows health bars and enemy radar']
      }]
    },
    'class.magic': {
      icon: '&#128302;', color: 'var(--cat-combat)', tabKey: 'modal.tab.combat',
      bonuses: [
        [['Dano Mágico', 'Magic Damage'], '+10%/pt'],
        [['Dano Crítico', 'Critical Damage'], '+10%/pt'],
        [['Chance Crítica', 'Critical Chance'], '+10%/pt'],
        [['Regeneração de Mana', 'Mana Regen'], '+10%/pt'],
        [['Velocidade de Ataque Mágico', 'Magic Attack Speed'], '+10%/pt'],
        [['Poder de Empurrão', 'Knockback'], '+10%/pt']
      ],
      passives: []
    },
    'class.summoner': {
      icon: '&#128058;', color: 'var(--cat-combat)', tabKey: 'modal.tab.combat',
      bonuses: [
        [['Dano de Invocação', 'Summon Damage'], '+10%/pt'],
        [['Dano Crítico', 'Critical Damage'], '+10%/pt'],
        [['Chance Crítica', 'Critical Chance'], '+10%/pt'],
        [['Velocidade de Invocação', 'Summon Speed'], '+10%/pt'],
        [['Máx. Invocações', 'Max Summons'], '+2/pt (cap 10)'],
        [['Poder de Empurrão', 'Knockback'], '+10%/pt']
      ],
      passives: []
    },
    'class.bloodthirsty': {
      icon: '&#129657;', color: 'var(--cat-combat)', tabKey: 'modal.tab.combat',
      bonuses: [
        [['Dano de Sangramento/s', 'Bleed Damage/s'], '+5/pt (cap 25)'],
        [['Duração do Sangramento', 'Bleed Duration'], '+3s/pt (cap 15s)'],
        [['Lentidão Necrótica', 'Necrotic Slow'], '+3s/pt (cap 15s)']
      ],
      passives: [],
      note: ['Nível 5: Quebra de armadura adicional', 'Level 5: Extra armor break']
    },
    'class.fire': {
      icon: '&#128293;', color: 'var(--cat-combat)', tabKey: 'modal.tab.combat',
      bonuses: [
        [['Dano de Queimadura/s', 'Burn Damage/s'], '+5/pt (cap 25)'],
        [['Duração da Queimadura', 'Burn Duration'], '+3s/pt (cap 15s)'],
        [['Lentidão Necrótica', 'Necrotic Slow'], '+3s/pt (cap 15s)']
      ],
      passives: []
    },
    'class.poison': {
      icon: '&#9760;', color: 'var(--cat-combat)', tabKey: 'modal.tab.combat',
      bonuses: [
        [['Dano de Veneno/s', 'Poison Damage/s'], '+5/pt (cap 25)'],
        [['Duração do Veneno', 'Poison Duration'], '+3s/pt (cap 15s)'],
        [['Lentidão Necrótica', 'Necrotic Slow'], '+3s/pt (cap 15s)']
      ],
      passives: []
    },
    'class.frost': {
      icon: '&#10052;', color: 'var(--cat-combat)', tabKey: 'modal.tab.combat',
      bonuses: [
        [['Dano de Geada/s', 'Frost Damage/s'], '+5/pt (cap 25)'],
        [['Duração da Geada', 'Frost Duration'], '+3s/pt (cap 15s)'],
        [['Duração do Frio', 'Chill Duration'], '+3s/pt (cap 15s)']
      ],
      passives: [],
      note: ['Nível 5: 30% chance de congelar por 15s', 'Level 5: 30% chance to freeze for 15s']
    },
    'class.nightmare': {
      icon: '&#128128;', color: 'var(--cat-combat)', tabKey: 'modal.tab.combat',
      bonuses: [
        [['Dano de Escuridão/s', 'Darkness Damage/s'], '+5/pt (cap 25)'],
        [['Duração da Escuridão', 'Darkness Duration'], '+3s/pt (cap 15s)'],
        [['Lentidão Necrótica', 'Necrotic Slow'], '+3s/pt (cap 15s)']
      ],
      passives: [],
      note: ['Nível 5: 5% chance de golpe mortal', 'Level 5: 5% chance of lethal strike']
    },
    'class.bloody': {
      icon: '&#10084;', color: 'var(--cat-defense)', tabKey: 'modal.tab.survival',
      bonuses: [
        [['Roubo de Vida', 'Life Steal'], '+10%/pt'],
        [['Cura/s', 'Heal/s'], '+0.6/pt (cap 3.0)'],
        [['Cura ao Comer', 'Heal on Eat'], '+10/pt (cap 50)'],
        [['Cura ao Matar', 'Heal on Kill'], '+10%/pt']
      ],
      passives: []
    },
    'class.resistance': {
      icon: '&#128737;', color: 'var(--cat-defense)', tabKey: 'modal.tab.survival',
      bonuses: [
        [['Resistência Física', 'Physical Resistance'], '+10%/pt'],
        [['Resistência Mágica', 'Magic Resistance'], '+10%/pt'],
        [['Resistência a Empurrão', 'Knockback Resistance'], '+10%/pt']
      ],
      passives: []
    },
    'class.elemental': {
      icon: '&#128167;', color: 'var(--cat-defense)', tabKey: 'modal.tab.survival',
      bonuses: [
        [['Redução de Dano de Fogo', 'Fire Damage Reduction'], '+10%/pt'],
        [['Resistência a Sangramento', 'Bleed Resistance'], '+10%/pt']
      ],
      passives: [{
        name: ['Graça de Hermes', "Hermes' Grace"],
        req: 'modal.req.lv4_5',
        desc: ['Lv4: Imunidade a lentidão. Lv5: Remove e bloqueia debuffs', 'Lv4: Slow immunity. Lv5: Removes and blocks debuffs']
      }]
    },
    'class.colossal': {
      icon: '&#129657;', color: 'var(--cat-defense)', tabKey: 'modal.tab.survival',
      bonuses: [
        [['Invulnerabilidade Temporária', 'Temporary Invulnerability'], '+2s/pt (cap 10s)']
      ],
      passives: [{
        name: ['Proteção Colossal', 'Colossal Protection'],
        req: 'modal.req.point1',
        desc: ['Invulnerabilidade ao ser atingido. 30s cooldown', 'Invulnerability when hit. 30s cooldown']
      }]
    },
    'class.vitality': {
      icon: '&#10084;', color: 'var(--cat-defense)', tabKey: 'modal.tab.survival',
      bonuses: [
        [['HP Máximo', 'Max HP'], '+20/pt (cap 100)'],
        [['Regeneração de HP', 'HP Regen'], '+10%/pt'],
        [['Sobrevivência Fatal', 'Fatal Survival'], '+3%/pt (cap 15%)']
      ],
      passives: [{
        name: ['Bênção Vital', 'Vital Blessing'],
        req: 'modal.req.point1',
        desc: ['HP extra/s com poção de vida ativa', 'Extra HP/s while a life potion is active']
      }]
    },
    'class.defense': {
      icon: '&#128737;', color: 'var(--cat-defense)', tabKey: 'modal.tab.survival',
      bonuses: [
        [['Ganho de Defesa', 'Defense Gain'], '+5/pt (cap 25)'],
        [['Espinhos', 'Thorns'], '+10%/pt']
      ],
      passives: []
    },
    'class.resilient': {
      icon: '&#128167;', color: 'var(--cat-defense)', tabKey: 'modal.tab.survival',
      bonuses: [
        [['Resiliência Máxima', 'Max Resilience'], '+20/pt (cap 100)'],
        [['Ganho de Resiliência', 'Resilience Gain'], '+10%/pt'],
        [['Regen de Resiliência', 'Resilience Regen'], '+10%/pt']
      ],
      passives: []
    },
    'class.speed': {
      icon: '&#128095;', color: 'var(--cat-mobility)', tabKey: 'modal.tab.mobility',
      bonuses: [
        [['Velocidade de Movimento', 'Move Speed'], '+10%/pt'],
        [['Bônus de Corrida', 'Sprint Bonus'], '+10%/pt'],
        [['Controle de Mobilidade', 'Mobility Control'], '+10%/pt']
      ],
      passives: []
    },
    'class.dash': {
      icon: '&#128168;', color: 'var(--cat-mobility)', tabKey: 'modal.tab.mobility',
      bonuses: [
        [['Capacidade de Dash', 'Dash Capacity'], '+2/pt (cap 10)'],
        [['Cooldown do Dash', 'Dash Cooldown'], '-10%/pt']
      ],
      passives: []
    },
    'class.reduction': {
      icon: '&#127919;', color: 'var(--cat-mobility)', tabKey: 'modal.tab.mobility',
      bonuses: [
        [['Uso de Munição', 'Ammo Usage'], '-10%/pt'],
        [['Uso de Flechas', 'Arrow Usage'], '-10%/pt'],
        [['Dano Crítico Recebido', 'Crit Damage Taken'], '-10%/pt']
      ],
      passives: []
    },
    'class.cavern': {
      icon: '&#9935;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Velocidade de Mineração', 'Mining Speed'], '+10%/pt'],
        [['Alcance de Mineração', 'Mining Range'], '+10%/pt'],
        [['Visibilidade Subterrânea', 'Underground Visibility'], '+10%/pt']
      ],
      passives: [
        {
          name: ['Minerador de Veios', 'Vein Miner'],
          req: 'modal.req.point1',
          desc: ['Minera veios inteiros automaticamente', 'Mines entire veins automatically']
        },
        {
          name: ['Ruína Escura', 'Dark Ruin'],
          req: 'modal.req.point1',
          desc: ['Alcance de trinket luminoso 250→350', 'Light trinket range 250→350']
        }
      ],
      note: ['Nível 5: Desbloqueia Minerador Explosivo na loja', 'Level 5: Unlocks Explosive Miner in the shop']
    },
    'class.construction': {
      icon: '&#128736;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Velocidade de Construção', 'Build Speed'], '+10%/pt'],
        [['Alcance de Interação', 'Interact Range'], '+10%/pt'],
        [['Alcance de Construção', 'Build Range'], '+10%/pt'],
        [['Visão do Mapa', 'Map Vision'], '+10%/pt']
      ],
      passives: []
    },
    'class.arcane': {
      icon: '&#10024;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Mana Máxima', 'Max Mana'], '+20/pt (cap 100)'],
        [['Regen de Mana', 'Mana Regen'], '+10%/pt'],
        [['Regen de Mana Flat', 'Flat Mana Regen'], '+0.6/pt (cap 3.0)'],
        [['Redução de Custo', 'Cost Reduction'], '+10%/pt']
      ],
      passives: [{
        name: ['Escritor Imortal', 'Immortal Scribe'],
        req: 'modal.req.point1',
        desc: ['Scrolls de encantamento não são consumidos', 'Enchantment scrolls are not consumed']
      }]
    },
    'class.wealth': {
      icon: '&#129689;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Encontro de Ouro', 'Gold Find'], '+10%/pt'],
        [['Ganho de Ouro', 'Gold Gain'], '+10%/pt'],
        [['Ouro por Hit', 'Gold per Hit'], '+10/pt (cap 50)']
      ],
      passives: [{
        name: ['Golpe de Ouro', 'Gold Strike'],
        req: 'modal.req.point1',
        desc: ['Gera ouro a cada hit inimigo', 'Grants gold on every enemy hit']
      }]
    },
    'class.loot': {
      icon: '&#127873;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Qualidade do Saque', 'Loot Quality'], '+10%/pt'],
        [['Ganho de Saque', 'Loot Gain'], '2x-5x (50-100% chance)'],
        [['Chance de Drop Completo', 'Full Drop Chance'], '+10%/pt']
      ],
      passives: [],
      note: [
        'Saque: 1pt=2x(50%), 2pt=3x(100%), 3pt=3x, 4pt=4x, 5pt=5x',
        'Loot: 1pt=2x(50%), 2pt=3x(100%), 3pt=3x, 4pt=4x, 5pt=5x'
      ]
    },
    'class.relic': {
      icon: '&#128141;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Slots de Trinket', 'Trinket Slots'], '+4/pt (cap 20)'],
        [['Alcance de Coleta', 'Pickup Range'], '+10%/pt']
      ],
      passives: []
    },
    'class.realm': {
      icon: '&#128081;', color: 'var(--cat-settler)', tabKey: 'modal.tab.settlement',
      bonuses: [
        [['Felicidade do Assentamento', 'Settlement Happiness'], '+20/pt (cap 100)'],
        [['Desconto na Loja', 'Shop Discount'], '+10%/pt (cap 90%)']
      ],
      passives: [
        {
          name: ['Líder do Assentamento', 'Settlement Leader'],
          req: 'modal.req.lv5',
          desc: ['Sem Rival + 3x XP + bloqueia greves', 'Unrivaled + 3x XP + blocks strikes']
        },
        {
          name: ['Aura de Liderança', 'Leadership Aura'],
          req: 'modal.req.lv5',
          desc: ['+15% dano/HP/resist/vel. nos colonos', '+15% damage/HP/resist/speed for settlers']
        },
        {
          name: ['Administração Rica', 'Rich Administration'],
          req: 'modal.req.info',
          desc: ['6+ personalidades = +1.5x XP', '6+ personalities = +1.5x XP']
        }
      ]
    },
    'class.sea': {
      icon: '&#127754;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Poder de Pesca', 'Fishing Power'], '+10%/pt'],
        [['Linhas Extras', 'Extra Lines'], '+2/pt (cap 10)'],
        [['Velocidade de Natação', 'Swim Speed'], '+10%/pt']
      ],
      passives: [{
        name: ['Reflexo do Pescador', "Angler's Reflex"],
        req: 'modal.req.point1',
        desc: ['Pesca AFK: pega e recoloca isca automaticamente', 'AFK fishing: auto-catch and re-bait']
      }]
    },
    'class.gourmet': {
      icon: '&#127830;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Duração do Buff de Comida', 'Food Buff Duration'], '+25%/50%/75%/100%/300%']
      ],
      passives: [{
        name: ['Sempre Barriga Cheia', 'Always Full'],
        req: 'modal.req.lv5',
        desc: ['Come quando fome < 95%', 'Eats when hunger < 95%']
      }]
    },
    'class.alchemy': {
      icon: '&#129514;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Duração do Buff de Poção', 'Potion Buff Duration'], '+25%/50%/75%/100%/300%']
      ],
      passives: [{
        name: ['Poção Automática', 'Auto Potion'],
        req: 'modal.req.lv5',
        desc: ['Usa poções automaticamente quando HP <= 50%', 'Uses potions automatically when HP <= 50%']
      }]
    },
    'class.ranch': {
      icon: '&#128037;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Velocidade do Rancho', 'Ranch Speed'], '+25%/50%/75%/100%']
      ],
      passives: [{
        name: ['Colheita de Rancho', 'Ranch Harvest'],
        req: 'modal.req.lv5',
        desc: ['Animais na zona de criação dropam 5x mais', 'Animals in breeding zones drop 5x more']
      }]
    },
    'class.machine': {
      icon: '&#9881;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Velocidade das Máquinas', 'Machine Speed'], ['Forno: 6s→2s, Prensa: 45s→2s, Compost: 30s→2s', 'Furnace: 6s→2s, Press: 45s→2s, Compost: 30s→2s']],
        [['Duração do Combustível', 'Fuel Duration'], '80s→600s']
      ],
      passives: []
    },
    'class.nature': {
      icon: '&#127793;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Velocidade de Crescimento', 'Growth Speed'], '+25%/50%/75%/100%/300%']
      ],
      passives: []
    },
    'class.trap': {
      icon: '&#128483;', color: 'var(--cat-utility)', tabKey: 'modal.tab.utility',
      bonuses: [
        [['Maestria em Armadilhas', 'Trap Mastery'], ['Dano +150%-300%', 'Damage +150%-300%']],
        [['Proteção Aliada', 'Ally Protection'], ['Reduz dano aliado em 50%-100%', 'Reduces ally damage by 50%-100%']]
      ],
      passives: [{
        name: ['Engenharia Defensiva', 'Defensive Engineering'],
        req: 'modal.req.lv5',
        desc: ['Armadilhas aplicam sangramento', 'Traps apply bleed']
      }]
    }
  };

  var modal = document.getElementById('classModal');
  var modalIcon = document.getElementById('modalIcon');
  var modalTitle = document.getElementById('modalTitle');
  var modalTab = document.getElementById('modalTab');
  var modalBody = document.getElementById('modalBody');
  var modalClose = document.getElementById('modalClose');

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openModal(card) {
    var h4 = card.querySelector('h4');
    if (!h4) return;
    var key = h4.getAttribute('data-i18n');
    var data = CLASS_DATA[key];
    if (!data) return;

    modalIcon.innerHTML = data.icon;
    var colorMap = {
      'var(--cat-combat)': { bg: 'rgba(239,68,68,0.12)', fg: 'var(--cat-combat)' },
      'var(--cat-defense)': { bg: 'rgba(96,165,250,0.12)', fg: 'var(--cat-defense)' },
      'var(--cat-mobility)': { bg: 'rgba(167,139,250,0.12)', fg: 'var(--cat-mobility)' },
      'var(--cat-utility)': { bg: 'rgba(234,179,8,0.12)', fg: 'var(--cat-utility)' },
      'var(--cat-settler)': { bg: 'rgba(74,222,128,0.12)', fg: 'var(--cat-settler)' }
    };
    var cm = colorMap[data.color] || { bg: 'rgba(212,136,28,0.12)', fg: 'var(--gold)' };
    modalIcon.style.background = cm.bg;
    modalIcon.style.color = cm.fg;
    modal.style.setProperty('--cat-fg', cm.fg);
    modal.style.setProperty('--cat-bg', cm.bg);
    modalTitle.textContent = h4.textContent;

    var tabIcons = {
      'modal.tab.combat': '&#9876; ',
      'modal.tab.survival': '&#10084; ',
      'modal.tab.mobility': '&#128170; ',
      'modal.tab.utility': '&#9881; ',
      'modal.tab.settlement': '&#127969; '
    };
    var tabLabel = t(data.tabKey, data.tabKey);
    modalTab.innerHTML = (tabIcons[data.tabKey] || '') + tabLabel;

    var html = '';
    if (data.bonuses && data.bonuses.length) {
      html += '<div class="modal-section"><h4>' + t('modal.bonuses', 'Bônus por Ponto') + '</h4><div class="bonus-grid">';
      data.bonuses.forEach(function (b) {
        html += '<div class="bonus-item"><span class="bonus-name">' + L(b[0]) + '</span><span class="bonus-value">' + L(b[1]) + '</span></div>';
      });
      html += '</div></div>';
    }
    if (data.passives && data.passives.length) {
      html += '<div class="modal-section"><h4>' + t('modal.passives', 'Passivas Desbloqueáveis') + '</h4>';
      data.passives.forEach(function (p) {
        var req = p.req && p.req.indexOf('modal.') === 0 ? t(p.req, p.req) : L(p.req);
        html += '<div class="passive-tag"><span class="passive-icon">&#9733;</span><div><strong>' + L(p.name) + '</strong> - ' + L(p.desc) + '<br><small>' + req + '</small></div></div>';
      });
      html += '</div>';
    }
    if (data.note) {
      html += '<div class="modal-section"><h4>' + t('modal.note', 'Observação') + '</h4><p class="modal-note">' + L(data.note) + '</p></div>';
    }

    modalBody.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('.class-card').forEach(function (card) {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', function () { openModal(card); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  /* ---- DISCUSSIONS FORM (FormSubmit) ---- */
  (function () {
    var form = document.getElementById('discuss-form');
    if (!form) return;

    var MAX_BYTES = 10 * 1024 * 1024;
    var nextInput = document.getElementById('discuss-next');
    var filesInput = document.getElementById('discuss-files');
    var fileList = document.getElementById('discuss-file-list');
    var errorEl = document.getElementById('discuss-error');
    var successEl = document.getElementById('discuss-success');
    var submitBtn = document.getElementById('discuss-submit');
    var meterFill = document.getElementById('discuss-meter-fill');
    var meterText = document.getElementById('discuss-meter-text');
    var meterLeft = document.getElementById('discuss-meter-left');
    var fileBox = form.querySelector('.discuss-file-box');

    function setNextUrl() {
      if (!nextInput) return;
      try {
        var url = new URL(window.location.href);
        url.searchParams.set('enviado', '1');
        url.hash = '';
        nextInput.value = url.toString();
      } catch (e) {
        nextInput.value = 'discussoes.html?enviado=1';
      }
    }
    setNextUrl();

    function showSuccessBanner() {
      if (!successEl) return;
      successEl.innerHTML =
        '<strong>' + t('discussoes.success.title', 'Mensagem enviada!') + '</strong>' +
        '<span>' + t('discussoes.success.text', 'Obrigado. Assim que possível, respondo no e-mail que você informou.') + '</span>';
      successEl.hidden = false;
      successEl.classList.add('is-visible');
    }

    function hideSuccessBanner() {
      if (!successEl) return;
      successEl.hidden = true;
      successEl.classList.remove('is-visible');
      successEl.innerHTML = '';
    }

    hideSuccessBanner();
    if (/[?&]enviado=1(?:&|$)/.test(window.location.search || '')) {
      showSuccessBanner();
      try {
        var clean = new URL(window.location.href);
        clean.searchParams.delete('enviado');
        window.history.replaceState({}, '', clean.pathname + clean.search + clean.hash);
      } catch (e2) { }
    }

    function showError(msg) {
      if (!errorEl) return;
      errorEl.textContent = msg;
      errorEl.hidden = !msg;
      errorEl.classList.toggle('is-visible', !!msg);
    }

    function formatSize(bytes) {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }

    function formatMb(bytes) {
      return (bytes / (1024 * 1024)).toFixed(bytes >= 1024 * 1024 ? 2 : 1);
    }

    function totalFileBytes() {
      if (!filesInput || !filesInput.files) return 0;
      var total = 0;
      for (var i = 0; i < filesInput.files.length; i++) total += filesInput.files[i].size || 0;
      return total;
    }

    function refreshMeter() {
      var used = totalFileBytes();
      var pct = Math.min(100, Math.round((used / MAX_BYTES) * 100));
      var over = used > MAX_BYTES;
      var left = Math.max(0, MAX_BYTES - used);
      if (meterFill) {
        meterFill.style.width = pct + '%';
        meterFill.classList.toggle('is-warn', pct >= 80 && !over);
        meterFill.classList.toggle('is-over', over);
      }
      if (meterText) {
        meterText.textContent = over
          ? t('discussoes.files.meter.over', 'Limite excedido: {used} / 10 MB').replace('{used}', formatMb(used))
          : t('discussoes.files.meter.used', '{used} MB de 10 MB usados').replace('{used}', formatMb(used));
      }
      if (meterLeft) {
        meterLeft.textContent = over
          ? t('discussoes.files.meter.over.short', 'Remova arquivos')
          : t('discussoes.files.meter.free', '{free} MB livres').replace('{free}', formatMb(left));
      }
      if (fileBox) fileBox.classList.toggle('is-over', over);
    }

    function refreshFileList() {
      if (!fileList || !filesInput) return;
      var files = filesInput.files;
      if (!files || !files.length) {
        fileList.textContent = '';
        refreshMeter();
        return;
      }
      var names = [];
      for (var i = 0; i < files.length; i++) {
        names.push(files[i].name + ' (' + formatSize(files[i].size || 0) + ')');
      }
      fileList.textContent = names.join(' · ');
      refreshMeter();
    }

    if (filesInput) {
      filesInput.addEventListener('change', function () {
        showError('');
        if (totalFileBytes() > MAX_BYTES) {
          showError(t('discussoes.error.size', 'Os anexos juntos passam de 10 MB. Remova alguns arquivos.'));
        }
        refreshFileList();
      });
    }
    refreshMeter();
    document.addEventListener('rpgskills:i18n', refreshMeter);

    form.addEventListener('submit', function (e) {
      showError('');
      var name = (form.elements.namedItem('name') || {}).value || '';
      var email = (form.elements.namedItem('email') || {}).value || '';
      var message = (form.elements.namedItem('message') || {}).value || '';
      if (!String(name).trim() || !String(email).trim() || !String(message).trim()) {
        e.preventDefault();
        showError(t('discussoes.error.required', 'Preencha nome, e-mail e mensagem.'));
        return;
      }
      if (totalFileBytes() > MAX_BYTES) {
        e.preventDefault();
        showError(t('discussoes.error.size', 'Os anexos juntos passam de 10 MB. Remova alguns arquivos.'));
        return;
      }
      setNextUrl();
      if (submitBtn) {
        submitBtn.disabled = true;
        var label = submitBtn.querySelector('[data-i18n="discussoes.submit"]') || submitBtn;
        label.textContent = t('discussoes.sending', 'Enviando…');
      }
    });
  })();

  /* ---- INIT ---- */
  currentLang = detectLanguage();
  document.documentElement.lang = currentLang === 'pt-BR' ? 'pt-BR' : 'en';
  document.querySelectorAll('.lang-option').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
  loadI18nDictionaries().then(function () {
    setLanguage(currentLang);
  });

})();
