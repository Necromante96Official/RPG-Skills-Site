/* ============================================
   RPG SKILLS - Passivas e sinergias
   Textos das passivas vêm do mod (RPG_MOD.passivas); aqui só a classe de cada uma e o grupo.
   ============================================ */
(function (RPG) {
  'use strict';

  // id da passiva -> classes ligadas a ela (o primeiro ícone é o principal)
  var CLASSES = {
    combat_master: ['mestre_da_guerra', 'mestre_atirador', 'mestre_da_magia', 'mestre_invocador'],
    elemental_fusion: ['mestre_sanguinario', 'mestre_incendiario', 'mestre_venenoso', 'mestre_congelante', 'mestre_do_pesadelo'],
    inner_storm: ['mestre_sanguinario', 'mestre_incendiario', 'mestre_venenoso', 'mestre_congelante', 'mestre_do_pesadelo'],
    master_classes: ['mestre_da_guerra', 'mestre_da_vitalidade', 'mestre_do_dash', 'mestre_dos_reinos', 'mestre_da_necromancia'],
    vein: ['mestre_das_cavernas'],
    trinket: ['mestre_das_cavernas'],
    eagle_eye: ['mestre_atirador'],
    angler_reflex: ['mestre_dos_mares'],
    colossal: ['mestre_colossal'],
    vitalista_potion: ['mestre_da_vitalidade'],
    alchemy_potion: ['mestre_da_alquimia'],
    full_belly: ['mestre_gourmet'],
    ranch_drops: ['mestre_do_rancho'],
    enchant_scroll: ['mestre_arcano'],
    hermes: ['mestre_da_resistencia_elemental'],
    gold_on_hit: ['mestre_da_riqueza'],
    leadership_aura: ['mestre_dos_reinos'],
    settlement_leader: ['mestre_dos_reinos'],
    trap_master: ['mestre_das_armadilhas'],
    rich_administration: ['mestre_dos_reinos'],
    incursion_specialist: ['mestre_da_necromancia']
  };
  var SINERGIAS = ['combat_master', 'elemental_fusion', 'inner_storm', 'master_classes'];

  function icones(ids, grande) {
    return ids.map(function (id) {
      var c = RPG.mod.classe(id);
      return '<div class="icone-classe' + (grande ? '' : ' icone-classe--p') + '" data-aba="' + (c ? c.aba : '') +
        '" title="' + RPG.ui.esc(c ? RPG.mod.txt(c.nome) : id) + '"><img src="' + RPG.mod.icone(id) +
        '" alt="" width="64" height="64" loading="lazy"></div>';
    }).join('');
  }

  function cartao(p, sinergia) {
    var esc = RPG.ui.esc;
    var ids = CLASSES[p.id] || [];
    return '<article class="passiva revelar' + (sinergia ? ' passiva--sinergia' : '') + '">' +
      '<div class="passiva__icones">' + icones(sinergia ? ids : ids.slice(0, 1), !sinergia) + '</div>' +
      '<h3>' + esc(RPG.mod.txt(p.nome)) + '</h3>' +
      '<p>' + esc(RPG.mod.txt(p.desc)) + '</p>' +
      '<p class="passiva__como">' + esc(RPG.mod.txt(p.como)) + '</p></article>';
  }

  function desenhar() {
    var todas = RPG.mod.passivas();
    var porId = {};
    todas.forEach(function (p) { porId[p.id] = p; });
    document.getElementById('lista-sinergias').innerHTML = SINERGIAS.filter(function (id) { return porId[id]; })
      .map(function (id) { return cartao(porId[id], true); }).join('');
    document.getElementById('lista-passivas').innerHTML = todas.filter(function (p) {
      return SINERGIAS.indexOf(p.id) === -1;
    }).map(function (p) { return cartao(p, false); }).join('');
    RPG.ui.observeReveal();
  }

  function init() {
    if (document.body.getAttribute('data-page') !== 'passivas') return;
    RPG.i18n.onChange(desenhar);
  }

  RPG.pages = RPG.pages || {};
  RPG.pages.passivas = { init: init };
})(window.RPG = window.RPG || {});
