/* ============================================
   RPG SKILLS - Main JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ---- TRANSLATIONS (embedded) ---- */
  var I18N = {
    'pt-BR': {
      "nav.features": "Funcionalidades",
      "nav.classes": "Classes",
      "nav.progression": "Progressão",
      "nav.window": "Janela",
      "nav.config": "Config",
      "hero.badge": "Mod para Necesse",
      "hero.title": "RPG Skills",
      "hero.tagline": "Fique mais forte a cada nível.",
      "hero.subtitle": "Esqueça tudo o que você sabia sobre Necesse. ⚔️|Imagine transformar o jogo em um RPG de verdade:|⚔️ 33 classes profundas para dominar|🔮 19 passivas exclusivas para builds únicas|📈 XP dinâmico que recompensa a verdadeira dificuldade|Sua jornada nunca mais será a mesma. Você tem o que é preciso? 🔥",
      "hero.cta": "Inscreva-se no Steam",
      "hero.learn": "Saiba Mais",
      "hero.stat.classes": "Classes",
      "hero.stat.maxlevel": "Nível Máximo",
      "hero.stat.passives": "Passivas",
      "hero.stat.languages": "Idiomas",
      "features.label": "O que o mod adiciona",
      "features.title": "Progressão <span class='text-green'>Completa</span>",
      "features.subtitle": "Loop claro e satisfatório: XP → Nível → Pontos de Classe → Domine o mundo.",
      "features.card1.title": "Sistema de XP",
      "features.card1.text": "Ganhe XP de inimigos, mineração, pesca, fazenda e trabalho no assentamento. Curva de XP e penalidade de morte configuráveis.",
      "features.card2.title": "33 Classes",
      "features.card2.text": "Mestre da Guerra, Arcanista, Minerador, Construtor e mais. Cada classe oferece passivas e ativas únicas. Ative ou desative pelo config.",
      "features.card3.title": "Loja QoL",
      "features.card3.text": "Buffs de XP (2x, 5x ou 10x), slots de baú extras (até 1000), stacks de mundo maiores e Minerador Explosivo. Tudo com economia balanceada.",
      "features.card4.title": "Config Completa",
      "features.card4.text": "Menu in-game para configurar progressão, classes, passivas, economia da loja e compatibilidade com outros mods.",
      "features.card5.title": "Controle",
      "features.card5.text": "Suporte completo a controle. LB+RB para abrir janela, D-pad para navegar, A para confirmar. Funciona em SP e MP.",
      "features.card6.title": "Compatibilidade",
      "features.card6.text": "Compatível com Safe Haven QOL 3.5. Opções de compatibilidade no menu RPG Skills. O config do Safe Haven não é mais sobrescrito.",
      "features.card7.title": "Auto Weapon Select",
      "features.card7.text": "Seleção automática de arma. Acelere o sono e pesque automaticamente com Angler's Reflex (Sea Master 1).",
      "features.card8.title": "Spoil Otimizado",
      "features.card8.text": "Spoil perde 1 por ciclo (não a stack inteira). Toggleável no config. Evita perdas desnecessárias.",
      "features.card9.title": "DoT Combinado",
      "features.card9.text": "Múltiplos DoTs no mesmo alvo mostram o número azul combinado. Life Partner (off by default) para progressão personalizada.",
      "progression.label": "Como funciona",
      "progression.title": "O Loop de <span class='text-green'>Progressão</span>",
      "progression.step1": "Jogue",
      "progression.step2": "Ganhe XP",
      "progression.step3": "Suba de Nível",
      "progression.step4": "Gaste Pontos",
      "progression.step5": "Domine",
      "progression.xp.title": "Fontes de XP",
      "progression.xp.combat": "Combate",
      "progression.xp.combat.desc": "Inimigos e bosses (regiões mais difíceis = mais XP). Invocações não dão XP de combate. Regras de zona: Charred Forest; Scrapyard surface ≠ incursion.",
      "progression.xp.mining": "Mineração e Fabricação",
      "progression.xp.mining.desc": "Minerar blocos, árvores, plantas e fabricar itens.",
      "progression.xp.fishing": "Pesca e Fazenda",
      "progression.xp.fishing.desc": "Pescar peixes e cultivar colheitas no assentamento.",
      "progression.xp.settlement": "Assentamento",
      "progression.xp.settlement.desc": "Trabalho e recreação diária (com limite), recrutar especialistas, colonos com 6 ou mais personalidades.",
      "progression.config.title": "Configuração",
      "progression.config.curve": "Curva de XP",
      "progression.config.curve.desc": "Nível máx. 165 (33 classes x 5 pontos). Curva e multiplicador configuráveis. Life Partner (off by default).",
      "progression.config.death": "Penalidade de Morte",
      "progression.config.death.desc": "Perda de XP ao morrer. Configurável (pode ser desativado).",
      "progression.config.respec": "Reconfiguração",
      "progression.config.respec.desc": "Resetar pontos de classe. Via comando ou menu.",
      "progression.config.economy": "Economia da Loja",
      "progression.config.economy.desc": "Preços de itens, buffs de XP, slots de baú (base 40, máx 400, config até 1000). Tudo balanceado.",
      "classes.label": "33 Classes Disponíveis",
      "classes.title": "Escolha Sua <span class='text-green'>Build</span>",
      "classes.subtitle": "Ative apenas as classes que importam para o seu servidor. Cada uma oferece passivas e ativas únicas.",
      "classes.cat.combat": "Combate",
      "classes.cat.defense": "Defesa",
      "classes.cat.mobility": "Mobilidade",
      "classes.cat.utility": "Utilidade e Fabricação",
      "classes.cat.settler": "Assentamento",
      "class.warrior": "Mestre da Guerra",
      "class.warrior.desc": "Corpo a corpo, críticos, penetração de armadura, velocidade de ataque",
      "class.marksman": "Mestre Atirador",
      "class.marksman.desc": "À distância, projéteis, Olho de Águia",
      "class.magic": "Mestre da Magia",
      "class.magic.desc": "Magia, mana, velocidade de lançamento",
      "class.summoner": "Mestre Invocador",
      "class.summoner.desc": "Dano de invocação, velocidade, limites",
      "class.bloodthirsty": "Mestre Sedento de Sangue",
      "class.bloodthirsty.desc": "Sangramento; quebra de armadura em níveis altos",
      "class.fire": "Mestre do Fogo",
      "class.fire.desc": "Dano de queimadura",
      "class.poison": "Mestre do Veneno",
      "class.poison.desc": "Veneno necrótico",
      "class.frost": "Mestre do Gelo",
      "class.frost.desc": "Geada, lentidão, congelamento",
      "class.nightmare": "Mestre do Pesadelo",
      "class.nightmare.desc": "Escuridão, lentidão; raro golpe mortal",
      "class.bloody": "Mestre Sangrento",
      "class.bloody.desc": "Roubo de vida, regeneração, cura pós-kill",
      "class.resistance": "Mestre da Resistência",
      "class.resistance.desc": "Menos dano e empurrão",
      "class.elemental": "Mestre da Resistência Elemental",
      "class.elemental.desc": "Resistência e imunidade a debuffs",
      "class.colossal": "Mestre Colossal",
      "class.colossal.desc": "Explosão curta de defesa ao ser atingido",
      "class.vitality": "Mestre da Vitalidade",
      "class.vitality.desc": "HP máximo, regeneração, chance de sobreviver a golpe fatal",
      "class.defense": "Mestre da Defesa",
      "class.defense.desc": "Armadura e espinhos",
      "class.resilient": "Mestre da Resiliência",
      "class.resilient.desc": "Resiliência máxima, ganho, recuperação",
      "class.speed": "Mestre da Velocidade",
      "class.speed.desc": "Velocidade de movimento e corrida",
      "class.dash": "Mestre do Dash",
      "class.dash.desc": "Mais dashes, cooldown menor",
      "class.reduction": "Mestre da Redução",
      "class.reduction.desc": "Menos munição; menos dano crítico recebido",
      "class.cavern": "Mestre da Caverna",
      "class.cavern.desc": "Mineração; Minerador de Veios",
      "class.construction": "Mestre da Construção",
      "class.construction.desc": "Alcance e velocidade de construção e interação",
      "class.arcane": "Mestre Arcano",
      "class.arcane.desc": "Mana; Escritor Imortal",
      "class.wealth": "Mestre da Riqueza",
      "class.wealth.desc": "Ouro; Golpe de Ouro",
      "class.loot": "Mestre do Saque",
      "class.loot.desc": "Saque melhor; chance extra de drop",
      "class.relic": "Mestre das Relíquias",
      "class.relic.desc": "Slots de trinket extras; alcance de coleta",
      "class.sea": "Mestre do Mar",
      "class.sea.desc": "Pesca; Reflexo do Pescador no nível 1",
      "class.gourmet": "Mestre Gourmet",
      "class.gourmet.desc": "Comida duradoura; Sempre Barriga Cheia",
      "class.alchemy": "Mestre da Alquimia",
      "class.alchemy.desc": "Poções duradouras; Poção Automática",
      "class.ranch": "Mestre do Rancho",
      "class.ranch.desc": "Doma e cruzamento mais rápidos; drops de rancho melhores",
      "class.machine": "Mestre das Máquinas",
      "class.machine.desc": "Máquinas mais rápidas (equipe de assentamento)",
      "class.nature": "Mestre da Natureza",
      "class.nature.desc": "Colheitas e árvores mais rápidas em assentamentos",
      "class.trap": "Mestre das Armadilhas",
      "class.trap.desc": "Armadilhas mais fortes; menos dano de armadilha aliada",
      "class.realm": "Mestre do Reino",
      "class.realm.desc": "Assentamentos; nível 5 Sem Rival + 3x XP",
      "window.label": "Interface do Jogo",
      "window.title": "Janela <span class='text-green'>RPG Skills</span>",
      "window.subtitle": "Pressione K (ou LB+RB no controle) para abrir. Três abas completas.",
      "window.heading": "3 Abas, Tudo Visível",
      "window.tab.status": "Status",
      "window.tab.status.desc": "Veja seu personagem, passivas e bônus ativos de classe.",
      "window.tab.classes": "Classes",
      "window.tab.classes.desc": "Revise bônus e desbloqueios e gaste 1 ponto por vez em cada classe.",
      "window.tab.shop": "Loja",
      "window.tab.shop.desc": "Buffs de XP, stacks de mundo, slots de baú, Minerador Explosivo e passivas/ativas.",
      "window.mockup.title": "RPG Skills v2.7",
      "window.mockup.tab1": "Status",
      "window.mockup.tab2": "Classes",
      "window.mockup.tab3": "Loja",
      "window.mockup.warrior": "Guerreiro",
      "window.mockup.actives": "ATIVOS",
      "window.mockup.melee": "Corpo a corpo",
      "window.mockup.dash": "Dash",
      "window.mockup.veinminer": "Minerador de Veios",
      "window.mockup.points": "PONTOS DISPONÍVEIS:",
      "window.mockup.shop": "LOJA",
      "window.mockup.chestslots": "Slots de Baú",
      "window.mockup.explosiveminer": "Minerador Explosivo",
      "qol.label": "Qualidade de Vida",
      "qol.title": "Recursos que <span class='text-green'>Facilitam</span>",
      "qol.veinminer": "Minerador de Veios",
      "qol.veinminer.desc": "Minere veios inteiros de minério com um clique. Configurável.",
      "qol.angler": "Reflexo do Pescador",
      "qol.angler.desc": "Pesca AFK: pegue e lance a isca automaticamente. Desbloqueado em Sea Master 1.",
      "qol.potion": "Poção Automática",
      "qol.potion.desc": "Use poções automaticamente quando necessário. Desbloqueado em Alchemy Master.",
      "qol.explosive": "Minerador Explosivo",
      "qol.explosive.desc": "Detonação de picareta sem dano a jogadores ou mobs. Cavern Master 5.",
      "qol.xpbuffs": "Buffs de XP",
      "qol.xpbuffs.desc": "Buffs temporários de 2x, 5x ou 10x. Via loja ou atalho.",
      "qol.worldstack": "Stack de Mundo",
      "qol.worldstack.desc": "Stacks de mundo maiores e mais slots de baú. Compre na loja.",
      "config.label": "Config e Comandos",
      "config.title": "Controle <span class='text-green'>Total</span>",
      "config.menu.title": "Menu de Configuração",
      "config.menu.progression": "Progressão",
      "config.menu.progression.desc": "XP, penalidade de morte, curva, nível máx., pontos por classe, reconfiguração, Parceiro da Vida.",
      "config.menu.classes": "Classes",
      "config.menu.classes.desc": "Ative ou desative classes individualmente. Mestre das Classes conta apenas as ativas.",
      "config.menu.economy": "Economia",
      "config.menu.economy.desc": "Preços da loja, spoil 1 por ciclo, Sono Acelerado e mais.",
      "config.commands.title": "Comandos",
      "config.commands.player": "Jogador",
      "config.commands.status": "ver nível, XP e pontos",
      "config.commands.respec": "reconfigurar",
      "config.commands.admin": "Admin (MP)",
      "hotkeys.label": "Atalhos",
      "hotkeys.title": "Controles <span class='text-green'>Rápidos</span>",
      "hotkeys.keyboard": "Teclado",
      "hotkeys.open": "Abrir/Fechar Janela",
      "hotkeys.keyboard.shortcuts": "Buffs de XP, Minerador de Veios, Minerador Explosivo",
      "hotkeys.controller": "Controle",
      "hotkeys.navigate": "Navegar, Confirmar, Fechar",
      "cta.title": "Pronto para <span class='text-green'>Evoluir</span>?",
      "cta.subtitle": "Inscreva-se no Steam Workshop e comece sua jornada RPG no Necesse.",
      "cta.subscribe": "Inscreva-se Agora",
      "cta.youtube": "Canal no YouTube",
      "footer.brand": "Mod de progressão RPG para Necesse. Criado por Necromante96.",
      "footer.links": "Links",
      "footer.store": "Loja Necesse",
      "footer.resources": "Recursos",
      "footer.config": "Configuração",
      "footer.community": "Comunidade",
      "footer.discussions": "Discussões",
      "footer.made": "Feito com &#9829; por Necromante96",
      "zones.label": "Valores de XP por Zona",
      "zones.title": "XP por <span class='text-green'>Região</span>",
      "zones.subtitle": "Quanto mais difícil a zona, mais XP por kill. Bosses dão 300 XP base + 100 por 10 níveis.",
      "changelog.label": "Histórico de Versões",
      "changelog.title": "Changelog <span class='text-green'>Completo</span>",
      "changelog.subtitle": "Todas as versões desde o lançamento. Atualizações constantes com novas classes, features e correções.",
      "passives.label": "Passivas e Habilidades",
      "passives.title": "19 <span class='text-green'>Passivas</span> Desbloqueáveis",
      "passives.subtitle": "Cada classe oferece passivas exclusivas ao investir pontos. Algumas requerem nível máximo para desbloquear.",
      "xp-detail.label": "Fontes de XP Detalhadas",
      "xp-detail.title": "Tudo Sobre <span class='text-green'>XP</span>",
      "xp-detail.subtitle": "Cada ação gera XP de forma diferente. Compreenda todas as fontes para otimizar sua progressão.",
      "changelog-full.label": "Histórico Completo",
      "changelog-full.title": "Changelog <span class='text-green'>Detalhado</span>",
      "changelog-full.subtitle": "Todas as versões desde o lançamento com detalhes completos de cada atualização."
    },
    'en': {
      "nav.features": "Features",
      "nav.classes": "Classes",
      "nav.progression": "Progression",
      "nav.window": "Window",
      "nav.config": "Config",
      "hero.badge": "Necesse Mod",
      "hero.title": "RPG Skills",
      "hero.tagline": "Get stronger with every level.",
      "hero.subtitle": "Forget everything you knew about Necesse. ⚔️|Imagine turning the game into a real RPG:|⚔️ 33 deep classes to master|🔮 19 unique passives for unique builds|📈 Dynamic XP that rewards real difficulty|Your journey will never be the same. Do you have what it takes? 🔥",
      "hero.cta": "Subscribe on Steam",
      "hero.learn": "Learn More",
      "hero.stat.classes": "Classes",
      "hero.stat.maxlevel": "Max Level",
      "hero.stat.passives": "Passives",
      "hero.stat.languages": "Languages",
      "features.label": "What the mod adds",
      "features.title": "Full <span class='text-green'>Progression</span>",
      "features.subtitle": "A clear and satisfying loop: XP → Level → Class Points → Dominate the world.",
      "features.card1.title": "XP System",
      "features.card1.text": "Earn XP from enemies, mining, fishing, farming, and settlement work. Configurable XP curve and death penalty.",
      "features.card2.title": "33 Classes",
      "features.card2.text": "War Master, Arcane Master, Cavern Master, Construction Master, and more. Each class offers unique passives and actives. Toggle via config.",
      "features.card3.title": "QoL Shop",
      "features.card3.text": "XP buffs (2x, 5x, or 10x), extra chest slots (up to 1000), larger world stacks, and Explosive Miner. All with balanced economy.",
      "features.card4.title": "Full Config",
      "features.card4.text": "In-game menu to configure progression, classes, passives, shop economy, and mod compatibility.",
      "features.card5.title": "Controller",
      "features.card5.text": "Full controller support. LB+RB to open window, D-pad to navigate, A to confirm. Works in SP and MP.",
      "features.card6.title": "Compatibility",
      "features.card6.text": "Compatible with Safe Haven QOL 3.5. Compat options in the RPG Skills menu. Safe Haven config is no longer overwritten.",
      "features.card7.title": "Auto Weapon Select",
      "features.card7.text": "Automatic weapon selection. Accelerate sleep and auto-fish with Angler's Reflex (Sea Master 1).",
      "features.card8.title": "Optimized Spoil",
      "features.card8.text": "Spoil loses 1 per cycle (not the whole stack). Toggleable in config. Prevents unnecessary losses.",
      "features.card9.title": "Combined DoT",
      "features.card9.text": "Multiple DoTs on the same target show the combined blue number. Life Partner (off by default) for personalized progression.",
      "progression.label": "How it works",
      "progression.title": "The <span class='text-green'>Progression</span> Loop",
      "progression.step1": "Play",
      "progression.step2": "Earn XP",
      "progression.step3": "Level Up",
      "progression.step4": "Spend Points",
      "progression.step5": "Dominate",
      "progression.xp.title": "XP Sources",
      "progression.xp.combat": "Combat",
      "progression.xp.combat.desc": "Enemies and bosses (harder regions = more XP). Summons grant no combat XP. Zone rules: Charred Forest; Scrapyard surface ≠ incursion.",
      "progression.xp.mining": "Mining and Crafting",
      "progression.xp.mining.desc": "Mining blocks, trees, plants, and crafting items.",
      "progression.xp.fishing": "Fishing and Farming",
      "progression.xp.fishing.desc": "Catch fish and grow crops in settlements.",
      "progression.xp.settlement": "Settlement",
      "progression.xp.settlement.desc": "Daily work and recreation (capped), recruit specialists, settlers with 6+ personalities.",
      "progression.config.title": "Configuration",
      "progression.config.curve": "XP Curve",
      "progression.config.curve.desc": "Max level 165 (33 classes x 5 points). Configurable curve and multiplier. Life Partner (off by default).",
      "progression.config.death": "Death Penalty",
      "progression.config.death.desc": "XP loss on death. Configurable (can be disabled).",
      "progression.config.respec": "Respec",
      "progression.config.respec.desc": "Reset class points via command or menu.",
      "progression.config.economy": "Shop Economy",
      "progression.config.economy.desc": "Item prices, XP buffs, chest slots (base 40, max 400, config up to 1000). All balanced.",
      "classes.label": "33 Available Classes",
      "classes.title": "Choose Your <span class='text-green'>Build</span>",
      "classes.subtitle": "Enable only the classes that matter for your server. Each offers unique passives and actives.",
      "classes.cat.combat": "Combat",
      "classes.cat.defense": "Defense",
      "classes.cat.mobility": "Mobility",
      "classes.cat.utility": "Utility and Crafting",
      "classes.cat.settler": "Settlement",
      "class.warrior": "War Master",
      "class.warrior.desc": "Melee, crits, armor penetration, attack speed",
      "class.marksman": "Master Marksman",
      "class.marksman.desc": "Ranged, projectiles, Eagle Eye",
      "class.magic": "Master of Magic",
      "class.magic.desc": "Magic, mana, cast speed",
      "class.summoner": "Master Summoner",
      "class.summoner.desc": "Summon damage, speed, limits",
      "class.bloodthirsty": "Bloodthirsty Master",
      "class.bloodthirsty.desc": "Bleed; armor break at high levels",
      "class.fire": "Fire Master",
      "class.fire.desc": "Burn damage",
      "class.poison": "Poison Master",
      "class.poison.desc": "Necrotic poison",
      "class.frost": "Frost Master",
      "class.frost.desc": "Frost, chill, freeze",
      "class.nightmare": "Nightmare Master",
      "class.nightmare.desc": "Darkness, slow; rare instant kill",
      "class.bloody": "Bloody Master",
      "class.bloody.desc": "Lifesteal, regeneration, post-kill heal",
      "class.resistance": "Resistance Master",
      "class.resistance.desc": "Less damage and knockback",
      "class.elemental": "Elemental Resistance Master",
      "class.elemental.desc": "Debuff resistance and immunities",
      "class.colossal": "Colossal Master",
      "class.colossal.desc": "Short defense burst when hit",
      "class.vitality": "Vitality Master",
      "class.vitality.desc": "Max HP, regeneration, chance to survive fatal damage",
      "class.defense": "Defense Master",
      "class.defense.desc": "Armor and thorns",
      "class.resilient": "Resilient Master",
      "class.resilient.desc": "Max resilience, gain, recovery",
      "class.speed": "Speed Master",
      "class.speed.desc": "Movement speed and sprint",
      "class.dash": "Dash Master",
      "class.dash.desc": "More dashes, lower cooldown",
      "class.reduction": "Reduction Master",
      "class.reduction.desc": "Less ammo; less critical damage taken",
      "class.cavern": "Cavern Master",
      "class.cavern.desc": "Mining; Vein Miner",
      "class.construction": "Construction Master",
      "class.construction.desc": "Build and interact range and speed",
      "class.arcane": "Arcane Master",
      "class.arcane.desc": "Mana; Immortal Scribe",
      "class.wealth": "Wealth Master",
      "class.wealth.desc": "Gold; Gold Strike",
      "class.loot": "Loot Master",
      "class.loot.desc": "Better loot and extra drop chance",
      "class.relic": "Relic Master",
      "class.relic.desc": "Extra trinket slots; pickup range",
      "class.sea": "Sea Master",
      "class.sea.desc": "Fishing; Angler's Reflex at level 1",
      "class.gourmet": "Gourmet Master",
      "class.gourmet.desc": "Longer food duration; Always Full Belly",
      "class.alchemy": "Alchemy Master",
      "class.alchemy.desc": "Longer potion duration; Auto Potion",
      "class.ranch": "Ranch Master",
      "class.ranch.desc": "Faster taming and breeding; better ranch drops",
      "class.machine": "Machine Master",
      "class.machine.desc": "Faster machines (settlement team)",
      "class.nature": "Nature Master",
      "class.nature.desc": "Faster crops and trees in settlements",
      "class.trap": "Trap Master",
      "class.trap.desc": "Stronger traps; less ally trap damage",
      "class.realm": "Realm Master",
      "class.realm.desc": "Settlements; level 5 Unrivaled + 3x XP",
      "window.label": "In-Game Interface",
      "window.title": "<span class='text-green'>RPG Skills</span> Window",
      "window.subtitle": "Press K (or LB+RB on controller) to open. Three full tabs.",
      "window.heading": "3 Tabs, Everything Visible",
      "window.tab.status": "Status",
      "window.tab.status.desc": "View your character, passives, and active class bonuses.",
      "window.tab.classes": "Classes",
      "window.tab.classes.desc": "Review bonuses and unlocks, and spend 1 point at a time in each class.",
      "window.tab.shop": "Shop",
      "window.tab.shop.desc": "XP buffs, world stacks, chest slots, Explosive Miner, and passives/actives.",
      "window.mockup.title": "RPG Skills v2.7",
      "window.mockup.tab1": "Status",
      "window.mockup.tab2": "Classes",
      "window.mockup.tab3": "Shop",
      "window.mockup.warrior": "Warrior",
      "window.mockup.actives": "ACTIVES",
      "window.mockup.melee": "Melee",
      "window.mockup.dash": "Dash",
      "window.mockup.veinminer": "Vein Miner",
      "window.mockup.points": "AVAILABLE POINTS:",
      "window.mockup.shop": "SHOP",
      "window.mockup.chestslots": "Chest Slots",
      "window.mockup.explosiveminer": "Explosive Miner",
      "qol.label": "Quality of Life",
      "qol.title": "Features That <span class='text-green'>Make It Easy</span>",
      "qol.veinminer": "Vein Miner",
      "qol.veinminer.desc": "Mine entire ore veins with one click. Configurable.",
      "qol.angler": "Angler's Reflex",
      "qol.angler.desc": "AFK fishing: catch and recast automatically. Unlocked at Sea Master 1.",
      "qol.potion": "Auto Potion",
      "qol.potion.desc": "Use potions automatically when needed. Unlocked at Alchemy Master.",
      "qol.explosive": "Explosive Miner",
      "qol.explosive.desc": "Pickaxe blast with no player or mob damage. Cavern Master 5.",
      "qol.xpbuffs": "XP Buffs",
      "qol.xpbuffs.desc": "Temporary 2x, 5x, or 10x XP buffs. Via shop or hotkey.",
      "qol.worldstack": "World Stack",
      "qol.worldstack.desc": "Larger world stacks and more chest slots. Buy in shop.",
      "config.label": "Config and Commands",
      "config.title": "Full <span class='text-green'>Control</span>",
      "config.menu.title": "Config Menu",
      "config.menu.progression": "Progression",
      "config.menu.progression.desc": "XP, death penalty, curve, max level, points per class, respec, Life Partner.",
      "config.menu.classes": "Classes",
      "config.menu.classes.desc": "Toggle classes individually. Master of Classes only counts enabled ones.",
      "config.menu.economy": "Economy",
      "config.menu.economy.desc": "Shop prices, spoil 1 per cycle, Accelerated Sleep, and more.",
      "config.commands.title": "Commands",
      "config.commands.player": "Player",
      "config.commands.status": "see level, XP, and points",
      "config.commands.respec": "respec",
      "config.commands.admin": "Admin (MP)",
      "hotkeys.label": "Hotkeys",
      "hotkeys.title": "<span class='text-green'>Quick</span> Controls",
      "hotkeys.keyboard": "Keyboard",
      "hotkeys.open": "Open/Close Window",
      "hotkeys.keyboard.shortcuts": "XP Buffs, Vein Miner, Explosive Miner",
      "hotkeys.controller": "Controller",
      "hotkeys.navigate": "Navigate, Confirm, Close",
      "cta.title": "Ready to <span class='text-green'>Level Up</span>?",
      "cta.subtitle": "Subscribe on the Steam Workshop and start your RPG journey in Necesse.",
      "cta.subscribe": "Subscribe Now",
      "cta.youtube": "YouTube Channel",
      "footer.brand": "RPG progression mod for Necesse. Created by Necromante96.",
      "footer.links": "Links",
      "footer.store": "Necesse Store",
      "footer.resources": "Resources",
      "footer.config": "Configuration",
      "footer.community": "Community",
      "footer.discussions": "Discussions",
      "footer.made": "Made with &#9829; by Necromante96",
      "zones.label": "XP Values by Zone",
      "zones.title": "XP by <span class='text-green'>Region</span>",
      "zones.subtitle": "Harder zones = more XP per kill. Bosses give 300 base XP + 100 per 10 player levels.",
      "changelog.label": "Version History",
      "changelog.title": "Full <span class='text-green'>Changelog</span>",
      "changelog.subtitle": "All versions since launch. Constant updates with new classes, features, and fixes.",
      "passives.label": "Passives & Abilities",
      "passives.title": "19 <span class='text-green'>Passives</span> to Unlock",
      "passives.subtitle": "Each class offers unique passives by investing points. Some require max level to unlock.",
      "xp-detail.label": "Detailed XP Sources",
      "xp-detail.title": "Everything About <span class='text-green'>XP</span>",
      "xp-detail.subtitle": "Each action generates XP differently. Understand all sources to optimize your progression.",
      "changelog-full.label": "Full History",
      "changelog-full.title": "Detailed <span class='text-green'>Changelog</span>",
      "changelog-full.subtitle": "All versions since launch with complete details of each update."
    }
  };

  var STORAGE_KEY = 'rpgskills-lang';
  var currentLang = 'pt-BR';

  /* ---- DETECT LANGUAGE ---- */
  function detectLanguage() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'pt-BR') return saved;
    var bl = navigator.language || navigator.userLanguage || '';
    return bl.startsWith('en') ? 'en' : 'pt-BR';
  }

  /* ---- APPLY TO DOM ---- */
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
  }

  /* ---- SWITCH LANGUAGE ---- */
  function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt-BR' ? 'pt-BR' : 'en';

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    applyTranslations();
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
      if (lang && lang !== currentLang) setLanguage(lang);
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
    var chestSlots = 60;
    var worldStack = 1;
    var activeBuff = null;

    function xpNeededFor(l) {
      // Next level needs 10000 * (l+1) ? Simplified: incremental, level 43 needs 15000 in demo
      // Use real formula: 10k * (lvl+1) for next, but clamp for demo values
      if (l < 42) return 10000 * (l + 1);
      if (l === 42) return 15000;
      return 10000 * (l + 1);
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
      if (txt) txt.innerHTML = '<strong>' + xp.toLocaleString('pt-BR') + '</strong> / ' + needed.toLocaleString('pt-BR') + ' XP';
      if (pctEl) pctEl.textContent = pct.toFixed(0) + '%';
      if (lvlEl) lvlEl.textContent = 'Nível ' + lvl;
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
      var t = document.getElementById('rw-toast');
      if (!t) return;
      t.textContent = '+ ' + amount.toLocaleString('pt-BR') + ' XP';
      t.classList.add('show');
      clearTimeout(t._hide);
      t._hide = setTimeout(function () { t.classList.remove('show'); }, 1800);
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

    // Populate full 33 classes list (append after the 5 placeholders)
    var classData = [
      // combat 9
      { cat:'combat', name:'Mestre da Guerra', icon:'&#9876;', bonus:'+10% dano corpo a corpo · +10% crítico · +10% pen. armadura · +10% velocidade', color:'#ef4444' },
      { cat:'combat', name:'Mestre Atirador', icon:'&#127993;', bonus:'+10% dano à distância · Eagle Eye no Nv1', color:'#ef4444' },
      { cat:'combat', name:'Mestre da Magia', icon:'&#128302;', bonus:'+10% dano mágico · +10% regen mana · +10% veloc. lançamento', color:'#ef4444' },
      { cat:'combat', name:'Mestre Invocador', icon:'&#128058;', bonus:'+10% dano invocação · +2 invocações/pt (cap 10)', color:'#ef4444' },
      { cat:'combat', name:'Mestre Sangrento', icon:'&#129657;', bonus:'+0.6/s cura por pt · lifesteal +10%/pt', color:'#ef4444' },
      { cat:'combat', name:'Mestre do Fogo', icon:'&#128293;', bonus:'5-25/s queimadura · 3-15s duração', color:'#ef4444' },
      { cat:'combat', name:'Mestre do Veneno', icon:'&#9760;', bonus:'5-25/s veneno necrótico · slow', color:'#ef4444' },
      { cat:'combat', name:'Mestre do Gelo', icon:'&#10052;', bonus:'5-25/s geada · Lv5: 30% congelar 15s', color:'#ef4444' },
      { cat:'combat', name:'Mestre do Pesadelo', icon:'&#128123;', bonus:'5-25/s escuridão · Lv5: 5% hitkill', color:'#ef4444' },
      // defense 7 (already have some, but ergänzen)
      { cat:'defense', name:'Mestre da Resistência', icon:'🛡️', bonus:'-10% dano recebido/pt · -10% empurrão', color:'#60a5fa' },
      { cat:'defense', name:'Mestre Elemental', icon:'&#129514;', bonus:'Lv1 veneno immune → Lv5 bloqueia todos debuffs', color:'#60a5fa' },
      { cat:'defense', name:'Mestre Colossal', icon:'&#129704;', bonus:'2-10s invulnerável ao ser atingido (30s CD)', color:'#60a5fa' },
      { cat:'defense', name:'Mestre da Vitalidade', icon:'❤️', bonus:'+20 HP/pt · regen · 3%/pt sobreviver fatal', color:'#60a5fa' },
      { cat:'defense', name:'Mestre da Resiliência', icon:'💧', bonus:'+20 resiliência/pt · +10% ganho/recarga', color:'#60a5fa' },
      // mobility 3
      { cat:'mobility', name:'Mestre da Velocidade', icon:'👟', bonus:'+10% mov. / corrida por pt', color:'#a78bfa' },
      { cat:'mobility', name:'Mestre do Dash', icon:'💨', bonus:'+2 dash/pt (cap 10) · -10% cooldown/pt', color:'#a78bfa' },
      { cat:'mobility', name:'Mestre da Redução', icon:'🎯', bonus:'-10% munição/pt · -10% dano crítico recebido', color:'#a78bfa' },
      // utility 13 (some already done, add rest)
      { cat:'utility', name:'Mestre da Construção', icon:'🔨', bonus:'+10% veloc. construção · +alcance interação', color:'#c8973a' },
      { cat:'utility', name:'Mestre Arcano', icon:'✨', bonus:'+20 mana/pt · Escritor Imortal (Nv1)', color:'#c8973a' },
      { cat:'utility', name:'Mestre da Riqueza', icon:'💰', bonus:'Golpe de Ouro até 50/hit', color:'#c8973a' },
      { cat:'utility', name:'Mestre do Saque', icon:'🎁', bonus:'Loot 2×-5× · chance drop completo', color:'#c8973a' },
      { cat:'utility', name:'Mestre das Relíquias', icon:'💎', bonus:'+4 slots trinket/pt · alcance coleta', color:'#c8973a' },
      { cat:'utility', name:'Mestre do Mar', icon:'🎣', bonus:'Pesca + Angler’s Reflex (AFK)', color:'#c8973a' },
      { cat:'utility', name:'Mestre Gourmet', icon:'🍖', bonus:'Comida +25%→300% · Lv5 auto-comer', color:'#c8973a' },
      { cat:'utility', name:'Mestre da Alquimia', icon:'🧪', bonus:'Poção +25%→300% · Lv5 auto-poção (<50% HP)', color:'#c8973a' },
      { cat:'utility', name:'Mestre do Rancho', icon:'🐓', bonus:'Doma/cruzamento rápido · Lv5: 5× drops', color:'#c8973a' },
      { cat:'utility', name:'Mestre das Máquinas', icon:'⚙️', bonus:'Forno 6s→2s · Prensa 45→2s · Compost 30→2s', color:'#c8973a' },
      { cat:'utility', name:'Mestre da Natureza', icon:'🌱', bonus:'Colheitas/árvores rápidas no assentamento', color:'#c8973a' },
      { cat:'utility', name:'Mestre das Armadilhas', icon:'💬', bonus:'Armadilhas +bleed no Lv5', color:'#c8973a' },
      // settler
      { cat:'settler', name:'Mestre do Reino', icon:'👑', bonus:'Nv5: Sem Rival + 3× XP + Aura +15% stats colonos', color:'#4ade80' }
    ];

    var list = document.getElementById('rw-class-list');
    if (list) {
      // Keep first 5 as demo interactive; append the rest as additional rows (cloned style)
      // Avoid duplicating already shown names
      var existingNames = Array.from(list.querySelectorAll('.rw-cname')).map(function (el) { return el.textContent.trim().toLowerCase(); });
      classData.forEach(function (c) {
        var already = existingNames.some(function (n) { return n.indexOf(c.name.toLowerCase()) !== -1; });
        if (already) return;
        var lvlInit = 0;
        var max = 5;
        var row = document.createElement('div');
        row.className = 'rw-crow locked';
        row.dataset.cat = c.cat;
        row.dataset.lvl = lvlInit;
        row.dataset.max = max;
        row.innerHTML = '<div class="rw-cico" style="background:' + (c.color===''+c.color ? '' : '') + '; color:' + c.color + '; background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.06);">' + c.icon + '</div>' +
          '<div class="rw-cinfo"><div class="rw-cname">' + c.name + ' <span class="rw-clvl dim">NV 0 / 5</span></div><div class="rw-cbonus">' + c.bonus + '</div><div class="rw-cbar"><div class="rw-cfill" style="width:0%"></div></div></div>' +
          '<button class="rw-plus" aria-label="Adicionar ponto">+1</button>';
        // color the icon bg a bit
        var ico = row.querySelector('.rw-cico');
        if (c.color === '#ef4444') ico.style.background = 'rgba(239,68,68,0.10)';
        else if (c.color === '#60a5fa') ico.style.background = 'rgba(96,165,250,0.10)';
        else if (c.color === '#a78bfa') ico.style.background = 'rgba(167,139,250,0.10)';
        else if (c.color === '#c8973a') ico.style.background = 'rgba(234,179,8,0.10)';
        else if (c.color === '#4ade80') ico.style.background = 'rgba(74,222,128,0.10)';
        list.appendChild(row);
      });
      // Refresh crowEls
      crowEls = document.querySelectorAll('.rw-crow');
    }

    function updateCavernGate() {
      var cavernRow = Array.from(document.querySelectorAll('.rw-crow')).find(function (r) {
        return r.querySelector('.rw-cname') && r.querySelector('.rw-cname').textContent.indexOf('Caverna') !== -1;
      });
      var lvl = cavernRow ? parseInt(cavernRow.dataset.lvl || '0', 10) : 0;
      var btn = document.getElementById('rw-buy-explosive');
      if (btn) {
        if (lvl >= 5) {
          btn.disabled = false;
          btn.style.opacity = '1';
          btn.style.cursor = 'pointer';
          btn.textContent = 'Comprar Explosivo';
          btn.style.background = 'linear-gradient(180deg, var(--gold), #c2761a)';
          btn.style.color = '#120a00';
        } else {
          btn.disabled = true;
          btn.style.opacity = '0.45';
          btn.style.cursor = 'not-allowed';
          btn.textContent = 'Requer Caverna 5 (' + lvl + '/5)';
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
            btn.animate([{ transform:'translateX(0)'},{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}],{duration:240});
            showToast(0);
            var t = document.getElementById('rw-toast');
            if (t) { t.textContent = 'Sem pontos! Ganhe XP'; t.classList.add('show'); clearTimeout(t._hide2); t._hide2=setTimeout(function(){t.classList.remove('show');},1600); }
            return;
          }
          var row = btn.closest('.rw-crow');
          if (!row) return;
          var lvlNow = parseInt(row.dataset.lvl || '0',10);
          var max = parseInt(row.dataset.max || '5',10);
          if (lvlNow >= max) return;
          lvlNow += 1;
          row.dataset.lvl = lvlNow;
          free -= 1;
          spent += 1;
          // update UI
          var lvlTag = row.querySelector('.rw-clvl');
          var bar = row.querySelector('.rw-cfill');
          if (lvlTag) {
            lvlTag.textContent = lvlNow >= max ? 'MÁX 5' : 'NV ' + lvlNow + ' / 5';
            lvlTag.className = 'rw-clvl' + (lvlNow>=max ? ' max' : lvlNow===0 ? ' dim' : '');
          }
          if (bar) bar.style.width = (lvlNow / max * 100) + '%';
          row.classList.toggle('locked', lvlNow===0);
          row.classList.toggle('maxed', lvlNow>=max);
          if (lvlNow >= max) { btn.disabled = true; btn.textContent = '✓'; }
          updateXP();
          updateCavernGate();
          // small toast
          showToast(0);
          var tt = document.getElementById('rw-toast');
          if (tt) { tt.textContent = '+1 ' + (row.querySelector('.rw-cname')? row.querySelector('.rw-cname').childNodes[0].textContent.trim() : 'Ponto'); tt.classList.add('show'); clearTimeout(tt._hide2); tt._hide2=setTimeout(function(){tt.classList.remove('show');},1300); }
        });
      });
    }
    bindPlusButtons(document);

    var resetBtn = document.getElementById('rw-reset-points');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        free = 3;
        // reset all rows to initial demo state (keep cavern at 5, guerra 3, reino 4, defesa 0)
        var rows = document.querySelectorAll('.rw-crow');
        rows.forEach(function (row) {
          var name = row.querySelector('.rw-cname') ? row.querySelector('.rw-cname').textContent : '';
          var init = 0;
          if (name.indexOf('Guerra') !== -1) init = 3;
          else if (name.indexOf('Caverna') !== -1) init = 5;
          else if (name.indexOf('Reino') !== -1) init = 4;
          else if (name.indexOf('Fogo') !== -1) init = 1;
          else init = 0;
          // but if row was appended dynamically and user increased it, reset to 0
          if (row.dataset.cat && init===0 && parseInt(row.dataset.lvl||'0',10) > 0) init = 0;
          // actually for appended rows reset to 0
          if (row._wasAppended) init = 0;
          row.dataset.lvl = init;
          var lvlTag = row.querySelector('.rw-clvl');
          var bar = row.querySelector('.rw-cfill');
          var btn = row.querySelector('.rw-plus');
          if (lvlTag) {
            lvlTag.textContent = init >=5 ? 'MÁX 5' : init===0 ? 'NV 0 / 5' : 'NV ' + init + ' / 5';
            lvlTag.className = 'rw-clvl' + (init>=5 ? ' max' : init===0 ? ' dim' : '');
          }
          if (bar) bar.style.width = (init/5*100)+'%';
          row.classList.toggle('locked', init===0);
          row.classList.toggle('maxed', init>=5);
          if (btn) { btn.disabled = init>=5; btn.textContent = init>=5? '✓' : '+1'; }
        });
        // recalc spent/free approx
        spent = 42;
        free = 3;
        updateXP();
        updateCavernGate();
      });
    }
    updateCavernGate();

    /* ---- DEMO: SHOP buffs & buys ---- */
    var buffBtns = document.querySelectorAll('.rw-buff');
    var buffLabel = document.getElementById('rw-buff-active');
    buffBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var val = b.dataset.buff;
        if (activeBuff === val) {
          activeBuff = null;
          buffBtns.forEach(function (x){ x.classList.remove('active'); });
          if (buffLabel) buffLabel.textContent = 'Nenhum ativo';
        } else {
          activeBuff = val;
          buffBtns.forEach(function (x){ x.classList.remove('active'); });
          b.classList.add('active');
          if (buffLabel) buffLabel.textContent = val + '× ativo - 10 min';
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
          if (chestVal) chestVal.textContent = chestSlots;
          var bar = document.getElementById('rw-chest-bar');
          if (bar) bar.firstElementChild.style.width = (chestSlots/1000*100).toFixed(1)+'%';
          btn.animate([{transform:'scale(1)'},{transform:'scale(1.04)'},{transform:'scale(1)'}],{duration:220});
        } else if (kind === 'stack') {
          worldStack = Math.min(1000, worldStack === 1 ? 10 : worldStack * 2);
          if (stackVal) stackVal.textContent = worldStack + '×';
          btn.animate([{transform:'scale(1)'},{transform:'scale(1.04)'},{transform:'scale(1)'}],{duration:220});
        } else if (kind === 'explosive') {
          btn.textContent = '✓ Desbloqueado';
          btn.disabled = true;
          btn.style.opacity = '1';
          btn.style.background = 'rgba(34,197,94,0.14)';
          btn.style.borderColor = 'rgba(34,197,94,0.35)';
          btn.style.color = '#22c55e';
        }
        showToast(0);
        var t = document.getElementById('rw-toast');
        if (t) { t.textContent = '✓ Compra efetuada'; t.classList.add('show'); clearTimeout(t._hide3); t._hide3=setTimeout(function(){t.classList.remove('show');},1400); }
      });
    });

    // close button just switches to status tab as easter egg
    var closeBtn = document.querySelector('.rw-close');
    if (closeBtn) closeBtn.addEventListener('click', function(){ activateRwTab('rw-status'); });

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
        veinBtn.textContent = veinEnabled ? '⛏️ Minerador de Veios ON' : '⛏️ OFF - clique único';
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
            setTimeout(function(){ ore.classList.remove('pop'); }, 260);
            updateVeinLabel();
          }, idx * 70);
        });
      } else {
        target.classList.add('mined', 'pop');
        setTimeout(function(){ target.classList.remove('pop'); }, 260);
        updateVeinLabel();
      }
    }
    allOres.forEach(function (ore) {
      ore.addEventListener('click', function () {
        if (ore.dataset.ore === 'stone') {
          ore.classList.add('pop');
          setTimeout(function(){ ore.classList.remove('pop'); }, 220);
          ore.animate([{transform:'translateX(0)'},{transform:'translateX(-3px)'},{transform:'translateX(3px)'},{transform:'translateX(0)'}],{duration:220});
          return;
        }
        mineVein(ore);
      });
    });
    if (veinBtn) veinBtn.addEventListener('click', function () {
      veinEnabled = !veinEnabled;
      updateVeinLabel();
      // also toggle the switch in card
      var sw = document.querySelector('.qol-switch[data-qol=\"vein\"]');
      if (sw) { sw.classList.toggle('on', veinEnabled); sw.setAttribute('aria-checked', veinEnabled?'true':'false'); }
    });
    if (veinReset) veinReset.addEventListener('click', function () {
      veinOres.forEach(function (o){ o.classList.remove('mined','pop'); });
      updateVeinLabel();
    });
    updateVeinLabel();

    // Switches
    document.querySelectorAll('.qol-switch').forEach(function (sw) {
      sw.addEventListener('click', function () {
        var on = sw.classList.toggle('on');
        sw.setAttribute('aria-checked', on ? 'true':'false');
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
        fishProgress += 3 + Math.random()*4;
        if (fishProgress >= 100) {
          fishProgress = 100;
          fishBar.style.width = '100%';
          if (fishPct) fishPct.textContent = '100%';
          setTimeout(function(){
            fishProgress = 0;
            fishBar.style.width = '0%';
            if (fishPct) fishPct.textContent = '0%';
          }, 700);
          clearInterval(fishIv);
          fishIv = null;
          // auto restart if switch on
          setTimeout(function(){
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
        fishObserver = new IntersectionObserver(function (entries){
          entries.forEach(function(ent){
            if (ent.isIntersecting) {
              var sw = document.querySelector('.qol-switch[data-qol=\"fish\"]');
              if (sw && sw.classList.contains('on')) startFish();
            } else {
              if (fishIv) { clearInterval(fishIv); fishIv=null; }
            }
          });
        }, {threshold:0.2});
        fishObserver.observe(fishBar.closest('.qol-card'));
      } catch(e){ startFish(); }
      // click bobber to manual trigger
      if (fishingCard) fishingCard.closest('.qol-card').addEventListener('click', function(e){
        if (e.target.closest('.qol-switch')) return;
        startFish();
      });
      // switch toggle
      var fishSw = document.querySelector('.qol-switch[data-qol=\"fish\"]');
      if (fishSw) fishSw.addEventListener('click', function(){
        fishOn = fishSw.classList.contains('on');
        if (fishOn) startFish(); else { if (fishIv){clearInterval(fishIv); fishIv=null;} fishBar.style.width='0%'; if(fishPct) fishPct.textContent='0%'; }
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

  /* ---- CLASS MODAL ---- */
  var CLASS_DATA = {
    'class.warrior': {
      icon: '&#9876;', color: 'var(--cat-combat)', tab: 'Combate',
      bonuses: [
        ['Dano Corpo a Corpo', '+10%/pt'], ['Dano Crítico', '+10%/pt'], ['Chance Crítica', '+10%/pt'],
        ['Penetração de Armadura', '+10%/pt'], ['Velocidade de Ataque', '+10%/pt'], ['Poder de Empurrão', '+10%/pt']
      ],
      passives: [],
      note: 'Deus do Dano: todas as 4 classes de combate nível 5 = +50% dano total'
    },
    'class.marksman': {
      icon: '&#127993;', color: 'var(--cat-combat)', tab: 'Combate',
      bonuses: [
        ['Dano à Distância', '+10%/pt'], ['Dano Crítico', '+10%/pt'], ['Chance Crítica', '+10%/pt'],
        ['Penetração de Armadura', '+10%/pt'], ['Velocidade do Projétil', '+10%/pt'], ['Poder de Empurrão', '+10%/pt']
      ],
      passives: [{name: 'Olho de Águia', req: '>=1 ponto', desc: 'Mostra barras de vida e radar de inimigos'}]
    },
    'class.magic': {
      icon: '&#128302;', color: 'var(--cat-combat)', tab: 'Combate',
      bonuses: [
        ['Dano Mágico', '+10%/pt'], ['Dano Crítico', '+10%/pt'], ['Chance Crítica', '+10%/pt'],
        ['Regeneração de Mana', '+10%/pt'], ['Velocidade de Ataque Mágico', '+10%/pt'], ['Poder de Empurrão', '+10%/pt']
      ],
      passives: []
    },
    'class.summoner': {
      icon: '&#128058;', color: 'var(--cat-combat)', tab: 'Combate',
      bonuses: [
        ['Dano de Invocação', '+10%/pt'], ['Dano Crítico', '+10%/pt'], ['Chance Crítica', '+10%/pt'],
        ['Velocidade de Invocação', '+10%/pt'], ['Máx. Invocações', '+2/pt (cap 10)'], ['Poder de Empurrão', '+10%/pt']
      ],
      passives: []
    },
    'class.bloodthirsty': {
      icon: '&#129657;', color: 'var(--cat-combat)', tab: 'Combate',
      bonuses: [
        ['Dano de Sangramento/s', '+5/pt (cap 25)'], ['Duração do Sangramento', '+3s/pt (cap 15s)'], ['Lentidão Necrótica', '+3s/pt (cap 15s)']
      ],
      passives: [],
      note: 'Nível 5: Quebra de armadura adicional'
    },
    'class.fire': {
      icon: '&#128293;', color: 'var(--cat-combat)', tab: 'Combate',
      bonuses: [
        ['Dano de Queimadura/s', '+5/pt (cap 25)'], ['Duração da Queimadura', '+3s/pt (cap 15s)'], ['Lentidão Necrótica', '+3s/pt (cap 15s)']
      ],
      passives: []
    },
    'class.poison': {
      icon: '&#9760;', color: 'var(--cat-combat)', tab: 'Combate',
      bonuses: [
        ['Dano de Veneno/s', '+5/pt (cap 25)'], ['Duração do Veneno', '+3s/pt (cap 15s)'], ['Lentidão Necrótica', '+3s/pt (cap 15s)']
      ],
      passives: []
    },
    'class.frost': {
      icon: '&#10052;', color: 'var(--cat-combat)', tab: 'Combate',
      bonuses: [
        ['Dano de Geada/s', '+5/pt (cap 25)'], ['Duração da Geada', '+3s/pt (cap 15s)'], ['Duração do Frio', '+3s/pt (cap 15s)']
      ],
      passives: [],
      note: 'Nível 5: 30% chance de congelar por 15s'
    },
    'class.nightmare': {
      icon: '&#128128;', color: 'var(--cat-combat)', tab: 'Combate',
      bonuses: [
        ['Dano de Escuridão/s', '+5/pt (cap 25)'], ['Duração da Escuridão', '+3s/pt (cap 15s)'], ['Lentidão Necrótica', '+3s/pt (cap 15s)']
      ],
      passives: [],
      note: 'Nível 5: 5% chance de golpe mortal'
    },
    'class.bloody': {
      icon: '&#10084;', color: 'var(--cat-defense)', tab: 'Sobrevivência',
      bonuses: [
        ['Roubo de Vida', '+10%/pt'], ['Cura/s', '+0.6/pt (cap 3.0)'], ['Cura ao Comer', '+10/pt (cap 50)'],
        ['Cura ao Matar', '+10%/pt']
      ],
      passives: []
    },
    'class.resistance': {
      icon: '&#128737;', color: 'var(--cat-defense)', tab: 'Sobrevivência',
      bonuses: [
        ['Resistência Física', '+10%/pt'], ['Resistência Mágica', '+10%/pt'], ['Resistência a Empurrão', '+10%/pt']
      ],
      passives: []
    },
    'class.elemental': {
      icon: '&#128167;', color: 'var(--cat-defense)', tab: 'Sobrevivência',
      bonuses: [
        ['Redução de Dano de Fogo', '+10%/pt'], ['Resistência a Sangramento', '+10%/pt']
      ],
      passives: [{name: 'Graça de Hermes', req: 'Nível 4-5', desc: 'Lv4: Imunidade a lentidão. Lv5: Remove e bloqueia debuffs'}]
    },
    'class.colossal': {
      icon: '&#129657;', color: 'var(--cat-defense)', tab: 'Sobrevivência',
      bonuses: [
        ['Invulnerabilidade Temporária', '+2s/pt (cap 10s)']
      ],
      passives: [{name: 'Proteção Colossal', req: '>=1 ponto', desc: 'Invulnerabilidade ao ser atingido. 30s cooldown'}]
    },
    'class.vitality': {
      icon: '&#10084;', color: 'var(--cat-defense)', tab: 'Sobrevivência',
      bonuses: [
        ['HP Máximo', '+20/pt (cap 100)'], ['Regeneração de HP', '+10%/pt'], ['Sobrevivência Fatal', '+3%/pt (cap 15%)']
      ],
      passives: [{name: 'Bênção Vital', req: '>=1 ponto', desc: 'HP extra/s com poção de vida ativa'}]
    },
    'class.defense': {
      icon: '&#128737;', color: 'var(--cat-defense)', tab: 'Sobrevivência',
      bonuses: [
        ['Ganho de Defesa', '+5/pt (cap 25)'], ['Espinhos', '+10%/pt']
      ],
      passives: []
    },
    'class.resilient': {
      icon: '&#128167;', color: 'var(--cat-defense)', tab: 'Sobrevivência',
      bonuses: [
        ['Resiliência Máxima', '+20/pt (cap 100)'], ['Ganho de Resiliência', '+10%/pt'], ['Regen de Resiliência', '+10%/pt']
      ],
      passives: []
    },
    'class.speed': {
      icon: '&#128095;', color: 'var(--cat-mobility)', tab: 'Mobilidade',
      bonuses: [
        ['Velocidade de Movimento', '+10%/pt'], ['Bônus de Corrida', '+10%/pt'], ['Controle de Mobilidade', '+10%/pt']
      ],
      passives: []
    },
    'class.dash': {
      icon: '&#128168;', color: 'var(--cat-mobility)', tab: 'Mobilidade',
      bonuses: [
        ['Capacidade de Dash', '+2/pt (cap 10)'], ['Cooldown do Dash', '-10%/pt']
      ],
      passives: []
    },
    'class.reduction': {
      icon: '&#127919;', color: 'var(--cat-mobility)', tab: 'Mobilidade',
      bonuses: [
        ['Uso de Munição', '-10%/pt'], ['Uso de Flechas', '-10%/pt'], ['Dano Crítico Recebido', '-10%/pt']
      ],
      passives: []
    },
    'class.cavern': {
      icon: '&#9935;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Velocidade de Mineração', '+10%/pt'], ['Alcance de Mineração', '+10%/pt'], ['Visibilidade Subterrânea', '+10%/pt']
      ],
      passives: [
        {name: 'Minerador de Veios', req: '>=1 ponto', desc: 'Minera veios inteiros automaticamente'},
        {name: 'Ruína Escura', req: '>=1 ponto', desc: 'Alcance de trinket luminoso 250→350'}
      ],
      note: 'Nível 5: Desbloqueia Minerador Explosivo na loja'
    },
    'class.construction': {
      icon: '&#128736;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Velocidade de Construção', '+10%/pt'], ['Alcance de Interação', '+10%/pt'], ['Alcance de Construção', '+10%/pt'], ['Visão do Mapa', '+10%/pt']
      ],
      passives: []
    },
    'class.arcane': {
      icon: '&#10024;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Mana Máxima', '+20/pt (cap 100)'], ['Regen de Mana', '+10%/pt'], ['Regen de Mana Flat', '+0.6/pt (cap 3.0)'], ['Redução de Custo', '+10%/pt']
      ],
      passives: [{name: 'Escritor Imortal', req: '>=1 ponto', desc: 'Scrolls de encantamento não são consumidos'}]
    },
    'class.wealth': {
      icon: '&#129689;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Encontro de Ouro', '+10%/pt'], ['Ganho de Ouro', '+10%/pt'], ['Ouro por Hit', '+10/pt (cap 50)']
      ],
      passives: [{name: 'Golpe de Ouro', req: '>=1 ponto', desc: 'Gera ouro a cada hit inimigo'}]
    },
    'class.loot': {
      icon: '&#127873;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Qualidade do Saque', '+10%/pt'], ['Ganho de Saque', '2x-5x (50-100% chance)'], ['Chance de Drop Completo', '+10%/pt']
      ],
      passives: [],
      note: 'Saque: 1pt=2x(50%), 2pt=3x(100%), 3pt=3x, 4pt=4x, 5pt=5x'
    },
    'class.relic': {
      icon: '&#128141;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Slots de Trinket', '+4/pt (cap 20)'], ['Alcance de Coleta', '+10%/pt']
      ],
      passives: []
    },
    'class.realm': {
      icon: '&#128081;', color: 'var(--cat-settler)', tab: 'Assentamento',
      bonuses: [
        ['Felicidade do Assentamento', '+20/pt (cap 100)'], ['Desconto na Loja', '+10%/pt (cap 90%)']
      ],
      passives: [
        {name: 'Líder do Assentamento', req: 'Nível 5', desc: 'Sem Rival + 3x XP + bloqueia greves'},
        {name: 'Aura de Liderança', req: 'Nível 5', desc: '+15% dano/HP/resist/vel. nos colonos'},
        {name: 'Administração Rica', req: 'Informacional', desc: '6+ personalidades = +1.5x XP'}
      ]
    },
    'class.sea': {
      icon: '&#127754;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Poder de Pesca', '+10%/pt'], ['Linhas Extras', '+2/pt (cap 10)'], ['Velocidade de Natação', '+10%/pt']
      ],
      passives: [{name: 'Reflexo do Pescador', req: '>=1 ponto', desc: 'Pesca AFK: pega e recoloca isca automaticamente'}]
    },
    'class.gourmet': {
      icon: '&#127830;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Duração do Buff de Comida', '+25%/50%/75%/100%/300%']
      ],
      passives: [{name: 'Sempre Barriga Cheia', req: 'Nível 5', desc: 'Come quando fome < 95%'}]
    },
    'class.alchemy': {
      icon: '&#129514;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Duração do Buff de Poção', '+25%/50%/75%/100%/300%']
      ],
      passives: [{name: 'Poção Automática', req: 'Nível 5', desc: 'Usa poções automaticamente quando HP <= 50%'}]
    },
    'class.ranch': {
      icon: '&#128037;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Velocidade do Rancho', '+25%/50%/75%/100%']
      ],
      passives: [{name: 'Colheita de Rancho', req: 'Nível 5', desc: 'Animais na zona de criação dropam 5x mais'}]
    },
    'class.machine': {
      icon: '&#9881;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Velocidade das Máquinas', 'Forno: 6s→2s, Prensa: 45s→2s, Compost: 30s→2s'], ['Duração do Combustível', '80s→600s']
      ],
      passives: []
    },
    'class.nature': {
      icon: '&#127793;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Velocidade de Crescimento', '+25%/50%/75%/100%/300%']
      ],
      passives: []
    },
    'class.trap': {
      icon: '&#128483;', color: 'var(--cat-utility)', tab: 'Utilidade',
      bonuses: [
        ['Maestria em Armadilhas', 'Dano +150%-300%'], ['Proteção Aliada', 'Reduz dano aliado em 50%-100%']
      ],
      passives: [{name: 'Engenharia Defensiva', req: 'Nível 5', desc: 'Armadilhas aplicam sangramento'}]
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
      'var(--cat-combat)':   { bg: 'rgba(239,68,68,0.12)',   fg: 'var(--cat-combat)' },
      'var(--cat-defense)':  { bg: 'rgba(96,165,250,0.12)',  fg: 'var(--cat-defense)' },
      'var(--cat-mobility)': { bg: 'rgba(167,139,250,0.12)', fg: 'var(--cat-mobility)' },
      'var(--cat-utility)':  { bg: 'rgba(234,179,8,0.12)',   fg: 'var(--cat-utility)' },
      'var(--cat-settler)':  { bg: 'rgba(74,222,128,0.12)',  fg: 'var(--cat-settler)' }
    };
    var cm = colorMap[data.color] || { bg: 'rgba(212,136,28,0.12)', fg: 'var(--gold)' };
    modalIcon.style.background = cm.bg;
    modalIcon.style.color = cm.fg;
    modal.style.setProperty('--cat-fg', cm.fg);
    modal.style.setProperty('--cat-bg', cm.bg);
    modalTitle.textContent = h4.textContent;

    var tabMap = {
      'Combate': '&#9876; Combate',
      'Sobrevivência': '&#10084; Sobrevivência',
      'Mobilidade': '&#128170; Mobilidade',
      'Utilidade': '&#9881; Utilidade',
      'Assentamento': '&#127969; Assentamento'
    };
    modalTab.innerHTML = tabMap[data.tab] || data.tab;

    var html = '';
    if (data.bonuses && data.bonuses.length) {
      html += '<div class="modal-section"><h4>Bônus por Ponto</h4><div class="bonus-grid">';
      data.bonuses.forEach(function (b) {
        html += '<div class="bonus-item"><span class="bonus-name">' + b[0] + '</span><span class="bonus-value">' + b[1] + '</span></div>';
      });
      html += '</div></div>';
    }
    if (data.passives && data.passives.length) {
      html += '<div class="modal-section"><h4>Passivas Desbloqueáveis</h4>';
      data.passives.forEach(function (p) {
        html += '<div class="passive-tag"><span class="passive-icon">&#9733;</span><div><strong>' + p.name + '</strong> - ' + p.desc + '<br><small>' + p.req + '</small></div></div>';
      });
      html += '</div>';
    }
    if (data.note) {
      html += '<div class="modal-section"><h4>Observação</h4><p class="modal-note">' + data.note + '</p></div>';
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

  /* ---- INIT ---- */
  setLanguage(detectLanguage());

})();
