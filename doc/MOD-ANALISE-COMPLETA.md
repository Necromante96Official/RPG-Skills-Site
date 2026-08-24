# RPG Skills — Análise Completa do Mod (v2.7 / Necesse 1.3.2)

> **Fonte:** `C:\Users\Clinica\Desktop\@LucasTavares\Testes\RPG-Skills-Mod-master` — varredura de 42 entradas, 14 módulos Gradle, 121 patches ByteBuddy, 12 locales, `gradle.properties:rpgskillsVersion=2.7`, `runtime/src/mod.info: version=2.7 gameVersion=1.3.2`  
> **Site analisado:** `C:\Users\Clinica\Desktop\@LucasTavares\Testes\RPGSKILLS-SITE` — `index.html` + 11 páginas em `html/` + `css/` + `js/main.js` + `doc/`  
> **Objetivo:** listar *tudo* que o mod faz / como funciona, com números e fórmulas, e cruzar com o que o site já exibe para evitar redundância.

---

## Sumário

1. [Ficha Técnica](#1-ficha-técnica)
2. [Arquitetura](#2-arquitetura)
3. [Progressão — Fórmulas Centrais](#3-progressão--fórmulas-centrais)
4. [XP — Todas as Fontes](#4-xp--todas-as-fontes)
5. [33 Classes — Detalhe por Ponto](#5-33-classes--detalhe-por-ponto)
6. [Atributos (~70)](#6-atributos)
7. [19 Passivas + Elementais](#7-passivas)
8. [Sistemas de Gameplay](#8-sistemas-de-gameplay)
9. [Economia da Loja (Shop)](#9-economia-da-loja)
10. [Comandos](#10-comandos)
11. [Hotkeys & Controle](#11-hotkeys)
12. [Interface (UI)](#12-interface)
13. [Persistência & Arquivos](#13-persistência)
14. [Rede & Pacotes](#14-rede)
15. [Localização & Integrações](#15-localização)
16. [Config — Chaves Completas](#16-config)
17. [Histórico de Versões](#17-histórico)
18. [Comparação Site × Mod — O que evitar / O que falta](#18-comparação-site--mod)
19. [Recomendações para o Site](#19-recomendações)

---

## 1. Ficha Técnica

| Campo | Valor |
|-------|-------|
| **Mod ID** | `rpgskills` |
| **Nome** | RPG Skills |
| **Autor** | `Necromante96Official` |
| **Versão** | **2.7** (Necesse **1.3.2**) |
| **Preview** | `preview.png` + `preview.psd` |
| **Entry** | `runtime/src/main/java/rpgskills/core/RpgSkillsMod.java:50` `@ModEntry init()` |
| **Side** | `clientside=false` (server + client) |
| **Java** | 17, Gradle 8.x, `tools/necesse` junction fallback `D:\SteamLibrary\steamapps\common\Necesse` |
| **Descrição mod.info** | *IMPORTANT: set RPG Skills to maximum priority above all other mods. Progression mod with XP, class builds, passives, shop for XP buffs / stack / chest slots. Classes can be enabled/disabled in config. Open K or LB+RB.* |
| **Steam** | 2.558 MB, 18.525 visitas, 7.538 inscritos, 457 favs, 143 ratings, 537 comentários, buildid `24650233` (~20.6 MB Necesse.jar 2026-08-11) |

> **Verdade de versão** `docs/CURRENT_RELEASE.md:1`: `gradle.properties` → `runtime/src/mod.info` → `docs/CURRENT_RELEASE.md` → `release-notes/<v>.md` (`validateReleaseMetadata` gate).

---

## 2. Arquitetura

| Módulo | Pacote | Papel |
|--------|--------|-------|
| `core` | `rpgskills.core` ≤800 LOC | `PlayerProfile`, `MasteryProfile`, contratos sem dependência Necesse |
| `progression` | `rpgskills.progression` | `ProgressionRules`, `RpgSkillsProgressionSettings`, `RpgSkillsEconomySettings`, `RpgSkillsFeatureSettings` |
| `classes` | `rpgskills.progression.classes` | `ClassRegistry` (33 defs), `ClassDefinition`, `MasteryPricing`, `ClassAttributeResolver` |
| `attributes` | `rpgskills.status` (`RpgAttributeIds.java:7`) | ~70 IDs (nome diverge do pacote) |
| `stacksize` | `rpgskills.stacksize` + `rpgskills.chestslots` | Duas economias mundiais num jar |
| `persistence` | `rpgskills.persistence` | `PlayerProfileSnapshot` schema **v8**, `PlayerProfileFileStore` |
| `network` | `rpgskills.network` | Contratos puros |
| `ui` | `rpgskills.ui` | `RpgSkillsUiSettings`, ViewModels, `RpgSkillsUiFactory` |
| `gameplay` | `rpgskills.gameplay` | Serviços puros: `XpGainRulesV1`, `XpZoneResolver`, `ElementalCombatRules`, `TrapMasterRules`, `RealmMasterApexRules`, `RomancePartyRules`, `SpoilOnePerCycleRules`, `PlayerProgressionService`, `XpBuffPurchaseService` |
| `commands` | `rpgskills.commands` | Parser/Validator/Executor |
| `integration` | `rpgskills.integration` | Bridges Safe Haven / Only1LossPerSpoil |
| `localization` | `rpgskills.localization` | Catálogo `.lang` em `runtime/` |
| `runtime` | `rpgskills.*` | `@ModEntry`, **121** `*Patch.java` ByteBuddy, `*RuntimeSupport` orquestradores |
| `tests` | `rpgskills.*` | JUnit + audits (`DomainBoundaryArchitectureTest`, `Necesse*AuditTest`) |
| `tools/` | — | `Compare-PatchSignatures.ps1`, IDE prep |

**Padrão RuntimeSupport** `docs/architecture.md:44`: `XxxRules/Calculator/Service` (domínio) → `XxxRuntimeSupport` (orquestra) → `XxxPatch` (hook fino) → `XxxRulesTest` + `XxxRuntimeSupportTest`  
**Invariantes** `docs/invariants.md:5`: 33×5=165 nível máx; Mastery alcançável; dano incoming ×1; debuffs só em hostiles + Cavelings caçáveis; trinket vanilla 4–8 separado do bônus mod; paridade locale; sync versão; roundtrip pacotes.  
**Patches:** `docs/patch-inventory.md:5` — **121** `*Patch.java`.

---

## 3. Progressão — Fórmulas Centrais

### 3.1 Constantes `ProgressionRules.java:3` / `RpgSkillsProgressionSettings.java:7`

```java
MAX_PLAYER_LEVEL = 165 (=33*5)  // sanitizeMaxPlayerLevel() = min(valor, 33*pts)
MAX_CLASS_POINTS_PER_CLASS = 5
BONUS_PERCENT_PER_POINT = 10
EXPERIENCE_BASE_FOR_FIRST_LEVEL = 10_000
EXPERIENCE_INCREMENT_PER_LEVEL = 10_000
EXPERIENCE_GAIN_QUANTUM = 5  // MIN 1 MAX 1000, todo ganho vira múltiplo de 5
DEFAULT_RESPEC_COIN_COST_PER_PLAYER_LEVEL = 1_000
```

```java
getExperienceRequiredForLevel(L) // próximo nível
  if L<=0 return 0;
  return 10_000 + (L-1)*10_000
// L1=10k, L2=20k, L3=30k, ... L165=1_650_000 só para subir 164→165
// Acumulado 0→165 = soma 10k..1.65M ≈ 136_125_000 XP
normalizeExperienceGain(int gain) = gain - gain%5  // ex: 17→15
normalizeExperienceGain(double gain) = round(gain/5)*5
scaleExperienceGain(gain, mult) = normalize(gain*mult) onde mult 0.01..100
getSkillPointAwardLevels() = 1..165 cada dá 1 pt; getTotalSkillPointsAwardedAtLevel(L)=min(165,L)
canAllocateClassPoints(level, pts) = pts ≤ totalAwarded && pts ≤5
getRequiredPlayerLevelForClassPoints(pts) = min(165, pts) // precisa nível≥pts pra 1º ponto
getClassTierBonusValue(pts) = clamp(0..5)*10.0  // 1pt=10%, 5pt=50%
getRespecCoinCost(level) = min(level,165)*1_000 // L100=100k, L165=165k
```

*Legado `purchasedClassPoints` sempre 0 (`canPurchaseAttributePoint()=false`).*

### 3.2 PlayerProfile `core/PlayerProfile.java:14`

- `level 0..165`, `experience 0..needed-1` (bank para próximo nível), `activeXpMultiplier 1/2/5/10` + `endTimeMs`, `trackedNonModTrinketSlots 4..8`, `trackedAppliedModTrinketSlots ≥0`, `masterySyncEpoch`, `explosiveMinerUnlocked`
- `addExperienceAndCountLevels(gain)` → normaliza → `while exp≥needed {exp-=needed; level++}`; no máx `exp=0`
- `getFreeClassPoints() = level - spent` (já que purchased=0)
- `applyClassPointDelta(id, ±1)` checa: classe existe & enabled & `level ≥ required` pro 1º ponto & `free>0` & `pts<5` & trinket reset se Relic; `resetAllClassPoints()` zera tudo + mastery sem refund + trinket 0; `respecAllClassPointsKeepMastery()` só classes (update respec)
- `setActiveXpBuff(2|5|10, 600_000ms)` senão clear; `clearExpired` via `System.currentTimeMillis()>end`

### 3.3 Settings Progressão

| Chave | Default | Range |
|-------|---------|-------|
| `xp.globalMultiplier` | 1.0 | 0.01..100 |
| `xp.fixedWorld` | 5 | ≥0 |
| `xp.deathPenaltyEnabled` | true | bool |
| `xp.deathPenaltyFraction` | 0.25 | 0..1 |
| `xp.bossBase` | 300 | ≥0 |
| `xp.miniBossFlatBonus` | 100 | ≥0 |
| `xp.quantum` | 5 | 1..1000 |
| `experience.baseForFirstLevel` | 10_000 | >0 |
| `experience.incrementPerLevel` | 10_000 | ≥0 |
| `maxPlayerLevel` | 165 | 1..33*pts |
| `maxClassPointsPerClass` | 5 | 1..5 |
| `respec.coinCostPerPlayerLevel` | 1_000 | ≥0 |
| `xpBuff.allowedMultipliers` | 2,5,10 | 2..100 únicos |
| `xp.teamShareEnabled` | true | bool |
| `xp.settlementTeamShareEnabled` | true | bool |
| `xp.teamShareRadiusTiles` | 24 | 1..128 |
| `romance.partyBonusEnabled` | false | bool |

### 3.4 Economia `RpgSkillsEconomySettings.java:5`

| Chave | Default | Range |
|-------|---------|-------|
| `shop.chestUpgradeBaseCoinCost` | 5_000 | 0..1_000_000 |
| `shop.chestUpgradeCoinCostIncrement` | 5_000 | 0..1_000_000 |
| `shop.chestSlotsPerUpgrade` | 10 | 1..100 |
| `shop.maxChestSlots` | 400 | 40..1000 |
| `shop.xpBuffDurationSeconds` | 600 (10 min) | 60..86_400 |
| `settlement.xpRateLimitPerMinute` | 150 | 1..10_000 |
| `settlement.apexXpMultiplier` | 3 | 1..100 |
| `veinMining.maxBlocksPerBurst` | 20 | 1..100 |
| `levelUp.fireworksScale` | 1.0 | 0.25..3.0 |

### 3.5 Features `RpgSkillsFeatureSettings.java:9`

`levelUpFireworks, inventoryButton, welcomeMessage, explosiveMinerShop, teamShareUi, playerRestoreCommand, shopXpBuff, oneLossPerSpoil, autoWeaponSelect, acceleratedSleep, updateClassRespec, trinketSlotsConfigOverride (false) + bonus 20 (0..255), requireAdminForShopWorldUpgrades (false), forceSafeHavenIncinerator/VeinMining/TripleLootOff (true), excludeIncursionTabletsFromLootMultiplier (false), logging.configSummaryOnBoot (false), passive.* (19× true)`

### 3.6 Stack & Chest

- **Stack** `StackSizeEconomy.java:1`: `1..1000`, custo próximo `coin=1_000+(lvl-1)*100` (1→1k, 1000→100_900), `bars=10+(lvl-1)*10` (1→10, 1000→10k), item `goldbar`.
- **Chest** `ChestSlotEconomy.java:1`: `VANILLA=40`, `perUpgrade=10`, `max=400` (config 1000), custo próximo `5000+lvl*5000` (lvl0→5k, lvl35→180k), total 40→400 em 36 compras = **3_330_000 coins**.

### 3.7 XP Buff

- `2×` custo `level*1_000`, `5×` `level*5_000`, `10×` `level*10_000` (L100→100k/500k/1M), duração `600_000ms` (10 min), só 1 ativo, sanitizado vs `allowedMultipliers`.

---

## 4. XP — Todas as Fontes

### 4.1 Tabela Base por Zona `XpZoneKind.java:3` / `XpZoneResolver.java:9`

| Zona | XP | Zona | XP |
|------|----|------|----|
| Forest Surface | **15** | Forest Cave | **30** |
| Pirate Village | 20 | Snow Cave | 30 |
| Snow/Swamp/Desert/Plains Surface | 20 | Plains Cave | 35 |
| Dungeon Surface | 25 | Swamp/Desert Cave | 40 |
| Other Surface | 30 | Forest Deep | 45 |
| Charred Forest Surface | 32 (+10% ambiente=35 efetivo) | Snow Deep | 50 |
| Scrapyard Surface | 40 | Plains Deep | 55 |
| Spider Nest Mini | 25 | Swamp Deep | 60 |
| Vampire Crypt Mini | 25 | Desert Deep | 65 |
| Thorns Mini | 30 | Temple Deep | 70 |
| Ruins Mini | 20 | Slime Incursion T1/T2 | 75 |
| | | Graveyard Incursion T3 | 80 |
| | | Spider Castle Incursion T4 | 85 |
| | | Sun/Moon Arena | 90 |
| | | Crystal Hollow T7 | 95 |
| | | Settlement Ruins Incursion T6 | 100 |
| | | Scrapyard Incursion T8 | **105** |

**Boss:** `300 + floor(level/10)*100` → L1=300, L50=800, L100=1300, L165=1900  
**Mini-Boss:** `zonaBase + 100` → Forest 15→115, Scrapyard Incursion 105→205 (requer `maxHealth≥300` se não for boss)

**Resolver prioridade:** miniBiome (spider/vampire/thorns/ruins) → incursion (settlement ruins T6 > scrapyard T8 > crystal hollow T7 > sun/moon > spider castle T4 > graveyard T3 > slime T1/T2) → temple → deep cave → cave → dungeon → pirate village → surface fallback. Suporta PT-BR (`pântano`, `ferro-velho`, `caverna de slime`).

### 4.2 Multiplicadores & Limites

| Fonte | Valor | Detalhe |
|-------|-------|---------|
| **Global** | `×1.0` | `xp.globalMultiplier` 0.01..100 |
| **XP Buff Loja** | `2×/5×/10×` | 10 min, custo acima, 1 ativo, sanitizado |
| **Romance Party** | `×1.05` | `romance.partyBonusEnabled=false` default, Life Partner no party → `round(base*1.05)` |
| **Realm Master 5 (Apex)** | `×3` | `settlement.apexXpMultiplier` 1..100, `×1.5` extra se settler ≥6 personalidades (`Rich Administration`) → pipeline `base*3*1.5` |
| **Recreation** | `+5 XP` | `isRecreationActivity(gazing, listeningtomusic, chatting, relaxing, jogging, usingcollector...)`, **cap 30/dia** em janela 24h (`86400000 ms`) |
| **Rate limit** | `150/min` | `settlement.xpRateLimitPerMinute` 1..10000 em `60000 ms` via `clampSettlementXpToRateLimit` |
| **Team Share** | `raio 24` | `xp.teamShareEnabled` + `settlementTeamShareEnabled`, tiles 1..128 |
| **Biome multiplier** | variável | `BiomeExperienceMultiplierSupport` por bioma |

**Taxa morte:** `perda = floorToQuantum(floor(currentExp * 0.25))` onde `currentExp` é bank do nível atual (0..needed-1), quantum 5. Ex: 10_000 bank → 2_500 perda.

**Fórmula final:** `raw = resolveRawXp(category, zone, level)` → `×buff(2/5/10)` → `×global` → `normalize` (única quantização) → `calculate()`.

### 4.3 Classificador Mobs `MobCombatXpClassifier.java:9`

- **Boss IDs (13):** `motherslime, queenbee, piratecaptain, evilsprotector, voidwizard, reaper, crystallizeddragon, swampguardian, ancientvulture, fallenwizard, fallendragon, spiderempress, mutanthydra`
- **Mini-Boss (6):** `spiderqueen, queenspider, sageandgrit, caveguardian, chieftain, cryoqueen`
- **Segmentos Hydra (2):** `mutanthydrahead, mutanthydraneck` → sem XP, só corpo principal
- Regra: `playerMob→null`, `bossFlag||id contém boss→BOSS`, `hostile && (miniIds || maxHealth≥300)→MINI_BOSS`, `hostile→HOSTILE`, senão `FIXED_WORLD` (+5 XP)

### 4.4 Gatilhos `RpgSkillsExperience*RuntimeSupport`

- **Combate:** `Mob.onDeath` / `DamagedObject...` + team-share + romance
- **Colheita/Bloco:** `GameObject.onDestroyed`, `SeedObject.attackThrough`, `FruitGrowerObjectEntity.harvest`, `DamagedObjectEntity.doTileDamage` + Collector bonuses
- **Pesca:** `FishingEvent.addCatch`, `WaitFishingPhase.FishingLure.*` + loot multiplier
- **Assentamento:** `HumanMob.serverTick`, `NetworkSellingShopItem.completeTrade`, recreation
- **Plantio/Craft:** `ObjectItem.onPlaceObject`, `Recipe.submitCraftedEvent`
- **Pickup:** `ItemPickupEntity.init`

---

## 5. 33 Classes — Detalhe por Ponto

`ClassRegistry.java:27` imutável `size=33`, `MAX=5` pts, `RpgSkillsClassSettings` toggle `class.<id>` boolean. 14 aliases legados (`guerreiro_do_eclipse→mestre_da_guerra` etc.)

| # | ID | Nome EN / PT | Tab | Bônus por ponto (valor bruto) |
|---|----|--------------|-----|-------------------------------|
|0| `mestre_da_guerra` | War Master | COMBAT | `damage_melee 10, crit_damage 10, crit_chance 10, armor_penetration 10, attack_speed 10, combat_knockback_power 10` |
|1| `mestre_atirador` | Marksman Master | COMBAT | `damage_ranged 10, crit_damage 10, crit_chance 10, armor_penetration 10, projectile_velocity 10, combat_knockback_power 10` |
|2| `mestre_da_magia` | Magic Master | COMBAT | `damage_magic 10, crit_damage 10, crit_chance 10, mysticism_mana_regen 10, mysticism_magic_attack_speed_mana_link 10, combat_knockback_power 10` |
|3| `mestre_invocador` | Summon Master | COMBAT | `damage_summon 10, crit_damage 10, crit_chance 10, mysticism_summon_speed 10, mysticism_max_summons 2.0, combat_knockback_power 10` |
|4| `mestre_sanguinario` | Bloodthirsty | COMBAT | `debuff_bleed_damage_per_second 5, debuff_bleed_duration 3, debuff_necrotic_slow_duration 3` |
|5| `mestre_incendiario` | Incendiary | COMBAT | `debuff_ablaze_damage_per_second 5, debuff_ablaze_duration 3, debuff_necrotic_slow_duration 3` |
|6| `mestre_venenoso` | Venomous | COMBAT | `debuff_poison_damage_per_second 5, debuff_poison_duration 3, debuff_necrotic_slow_duration 3` |
|7| `mestre_congelante` | Freezing | COMBAT | `debuff_frostburn_damage_per_second 5, debuff_frostburn_duration 3, debuff_chilled_duration 3` |
|8| `mestre_do_pesadelo` | Nightmare | COMBAT | `debuff_darkness_damage_per_second 5, debuff_darkness_duration 3, debuff_necrotic_slow_duration 3` |
|9| `mestre_sangrento` | Blood Master | SURVIVAL | `damage_lifesteal 10, survival_heal_per_second 0.6, passive_health_on_food 10, passive_health_on_kill 10` |
|10| `mestre_da_resistencia` | Resistance | SURVIVAL | `survival_physical_resistance 10, survival_magical_resistance 10, survival_knockback_resistance 10` |
|11| `mestre_da_resistencia_elemental` | Elemental Resistance | SURVIVAL | `survival_fire_damage_reduction 10, survival_bleed_resistance 10` → L1 veneno imune, L2 fogo, L3 gelo, L4 lentidão (Hermes), L5 bloqueia debuffs |
|12| `mestre_colossal` | Colossal | SURVIVAL | `survival_temporary_invulnerability 2.0` → 2–10s, 30s CD |
|13| `mestre_da_vitalidade` | Vitality | SURVIVAL | `survival_max_health 20, survival_health_regen 10, survival_fatal_survival 3` |
|14| `mestre_da_defesa` | Defense | SURVIVAL | `survival_armor_defense_gain 5, survival_thorns 10` |
|15| `mestre_resiliente` | Resilience | SURVIVAL | `survival_max_resilience 20, survival_resilience_gain 10, survival_resilience_regen_speed 10` |
|16| `mestre_da_velocidade` | Speed | MOVEMENT | `movement_speed 10, movement_sprint_bonus 10, movement_mobility_control 10` |
|17| `mestre_do_dash` | Dash | MOVEMENT | `movement_dash_capacity 2, movement_dash_cooldown 10` |
|18| `mestre_da_reducao` | Reduction | MOVEMENT | `reduced_bullet_usage 10, reduced_arrow_usage 10, survival_critical_damage_reduction 10` |
|19| `mestre_das_cavernas` | Cavern | UTILITY | `bonus_mining_speed 10, bonus_mining_range 10, bonus_underground_visibility 10` → Vein Miner+Dark Ruin L1, Explosive Miner L5 |
|20| `mestre_da_construcao` | Construction | UTILITY | `bonus_building_speed 10, bonus_interaction_range 10, bonus_build_range 10, bonus_biome_map_vision 10` |
|21| `mestre_arcano` | Arcane | UTILITY | `mysticism_max_mana 20, mysticism_mana_regen 10, mysticism_mana_regen_flat 0.6, mysticism_mana_usage 10` → Immortal Scribe L1 |
|22| `mestre_da_riqueza` | Wealth | UTILITY | `bonus_gold_find 10, bonus_gold_gain 10, passive_gold_on_hit 10` → Gold Strike até 50/hit |
|23| `mestre_do_loot` | Loot | UTILITY | `bonus_loot_quality 10, bonus_loot_gain 1.0, passive_all_drop_chance_on_kill 10` → 50%/100%→2×/3×/3×/4×/5× |
|24| `mestre_das_reliquias` | Relic | UTILITY | `bonus_max_trinkets 4, bonus_item_pickup_range 10` → +4/pt, cap 20 (ou override) |
|25| `mestre_dos_reinos` | Realm | UTILITY | `bonus_settlement_happiness 20, bonus_settlement_shop_discount 10` → Lv5 Unrivaled + ×3 XP + Aura |
|26| `mestre_dos_mares` | Sea | UTILITY | `bonus_fishing_power 10, bonus_fishing_lines 2, movement_swim_speed 10` → Angler Reflex L1 |
|27| `mestre_gourmet` | Gourmet | SURVIVAL | `passive_food_buff_duration 1.0` → 25/50/75/100/300% |
|28| `mestre_da_alquimia` | Alchemy | SURVIVAL | `passive_potion_buff_duration 1.0` → 25/50/75/100/300%, L5 Auto Potion ≤50% HP |
|29| `mestre_do_rancho` | Ranch | UTILITY | `passive_ranch_speed 1.0` → 25/50/75/100%, L5 5× drops |
|30| `mestre_das_maquinas` | Machine | UTILITY | `passive_machine_processing_speed 1.0, passive_machine_fuel_duration 1.0` → Furnace 6→2s, Press 45→2s, Compost 30→2s |
|31| `mestre_da_natureza` | Nature | UTILITY | `passive_nature_growth_speed 1.0` → 25/50/75/100/300% em settlements |
|32| `mestre_das_armadilhas` | Trap | UTILITY | `passive_trap_mastery 1.0` → Lv5 bleed |

**Caps `ClassAttributeResolver.clampAttribute`:**

- `bonus_master_aura_light 0/1`, `passive_* 0..5`, `max_summons/dash/lines 0..10`, `heal_per_second/mana_flat 0..3`, `hitkill/fatal 0..15`, `debuff dps 0..25`, `duration 0..15`, `freezing_chance 0..30`, `nightmare_hitkill 0..5`, `max_trinkets 0..20`, `max_health/mana/resilience/happiness 0..100`, `health_on_food/gold_on_hit 0..50`, `armor_defense 0..25`, `elemental_bonus 0..100`, default 50.

**Especiais:** `Damage God` War+Marksman+Magic+Summon 5 → +50% `damage_total`; `Master of Classes` todas enabled 5 → `bonus_master_aura_light=1` (partículas brancas + trail); `trinketSlotsConfigOverride` força `bonus_max_trinkets=0`.

### Mastery `MasteryPricing.java:12`

- **Standard:** 500k +100k×stacks; **Premium** (Summon max_summons, Loot bonus_loot_gain, Relic max_trinkets): 1M +500k×stacks
- Ex: Standard 0→500k, 1→600k (cum 1.1M), 5→1M; Premium 0→1M, 2→2M
- Deltas: 1.0 por compra, exceto Vitality `max_health 10.0`, Resilience `max_resilience 10.0`, Arcane `max_mana 10.0`; Loot `bonus_loot_gain 0.0` (canal especial → `5+(stacks-1)`×)
- Coins por classe vs stacks por linha `class|attr` lowercased, epoch `masterySyncEpoch`

---

## 6. Atributos

**~70** `RpgAttributeIds.java:7`: `damage_total/melee/ranged/magic/summon/corrosion/elemental_bonus/hitkill/burst/lifesteal`, `debuff_bleed/ablaze/poison/frostburn/darkness/necrotic_slow/broken_armor/chilled/freezing/nightmare`, `attack_speed/crit_chance/crit_damage/armor_penetration/knockback/projectile_velocity/reduced_bullet+arrow/crit_strike_charge`, `survival_max_health/health_regen/heal_per_second/fire_resistance/damage_reduction/armor_defense/thorns/knockback_resistance/max_resilience/resilience_gain/regen/temporary_protection+invulnerability/fatal_survival/physical+magical+poison+ice/bleed+fire+critical/ health_on_food+on_kill/food+potion_buff/ranch_speed/machine_processing+fuel/nature_growth/trap_mastery`, `movement_speed/swim/out_of_combat/dash_capacity+cooldown/sprint_bonus/mobility_control/stamina_capacity+usage`, `mysticism_summon_speed/max_summons/max_mana/mana_regen+flat/mana_usage/magic_attack_speed_mana_link/weapon_mana_efficiency`, `bonus_max_trinkets/interaction_range/pickup_range/build+mining_range/building+mining_speed/fishing_power+lines/loot_quality/gold_find/settlement_influence/biome_map_vision/underground_visibility/master_aura_light/settlement_happiness+shop_discount/gold_on_hit+gold_gain+loot_gain+all_drop_chance`, `level`.

---

## 7. Passivas

| # | ID | Nome | Classe:Nível | Efeito |
|---|----|------|--------------|--------|
|1| `eagle_eye` | Olho de Águia | Marksman 1 | Marca inimigos/animais próximos (client render) |
|2| `vital_blessing` | Bênção Vital | Vitality 1 | +`heal_per_second` 0.6×pts (5→3.0/s) durante poção ativa |
|3| `colossal` | Proteção Colossal | Colossal 1 | Invuln 2s×lvl (10s no 5), CD 30s |
|4| `vein_mining` | Minerador de Veios | Cavern 1 | Veio contíguo até `maxBlocksPerBurst=20` (minério/rails) + avançado floors/plants/trees/walls/rocks/clay |
|5| `dark_ruin` | Ruína Escura | Cavern 1 | Luz trinket 250→350 |
|6| `immortal_scribe` | Escritor Imortal | Arcane 1 | Scrolls de encantamento não consomem |
|7| `gold_strike` | Golpe de Ouro | Wealth 1..5 | +10 gold_on_hit/pt → 50 no 5, vai pra Coin Pouch se tiver |
|8| `hermes` | Graça de Hermes | ElemResist 4/5 | L4 slow immune, L5 remove/bloqueia debuffs |
|9| `auto_potion` | Poção Automática | Alchemy 5 | Auto-usa poção ≤50% HP até full |
|10| `full_belly` | Sempre Cheio | Gourmet 5 | Auto-come <95% fome |
|11| `ranch_harvest` | Colheita de Rancho | Ranch 5 | Abate em breeding zone 5× drops |
|12| `leadership_aura` | Aura de Liderança | Realm 5 | +15% dano/vida/redução/vel colonos (+22.5% se personalidade alinhada) |
|13| `settlement_leader` | Líder do Assentamento | Realm 5 | Unrivaled QoL 6, bloqueia greve, ×3 XP tarefa |
|14| `trap_master` | Engenharia Defensiva | Trap 1..5 | 150%→300% dano armadilha em settlement, -50% ou 0 ally, L5 bleed |
|15| `damage_god` | Deus do Dano | 4 combats 5 | +50% `damage_total` |
|16| `master_of_classes` | Mestre das Classes | Todas 5 | Partículas brancas + trail |
|17| `rich_administration` | Admin. Rica | Realm info | ≥6 personalidades = +50% XP |
|18| `incursion_specialist` | Especialista Incursão | info | Incursions high-tier usam XP mais forte |
|19| `angler_reflex` | Reflexo do Pescador | Sea 1 | Auto-recolhe + relança mesmo pixel (AFK) |

**Elementais base (não contam nas 19 mas geram DOT):** `ELEMENTAL_DEBUFF_BASE_SECONDS=3.0` `MAX=15.0` → duração `min(15, pts*3)` 1→3s 5→15s; DPS `pts*5` 1→5 5→25; acúmulo `min(15, atual+add)`; chance freeze 30% no 5, hitkill pesadelo 5% no 5; alvo só hostis + Cavelings caçáveis.

---

## 8. Sistemas de Gameplay

| Sistema | Números / Regra |
|---------|-----------------|
| **Vein Mining** | `maxBlocksPerBurst 20` (1..100), avançado encadeia mesmo tipo 3D, bloqueia se Explosive ativo ou `forceSafeHavenVeinMiningOff` |
| **Trap Master** | Fórmula `calculateModifiedTrapDamage`: 150%→`*250/100`, 300%→`*400/100`, ally `max(1,dmg/2)` ou 0 se `inSettlement && lvl≥4`, hostil+movel |
| **Settlement Apex** | `UNRIVALED_QOL_LEVEL=6`, `apexXpMult×3`, `rich 1.5×`, `aura 1.5×` se alinhada, `rateLimit 150/min/60s`, `recreation 5 XP cap 30/dia 24h`, `expedition -10% fastworker/gardener` + `-50% Realm` → max `60%` (min `40%` ticks), happiness +20/pt →100 no 5 |
| **Romance** | `×1.05` combate se Life Partner no party (`romance.partyBonusEnabled=false` default) |
| **Spoil** | `shouldPartialSpoil(amount≥2) → amount-1` se `oneLossPerSpoilEnabled=true` |
| **Auto Weapon** | `autoWeaponSelectEnabled=true` hotkey toggle, `AutoWeaponSelectSession` |
| **Sono Acelerado** | `acceleratedSleepEnabled=true` 20h→3h vira manhã `BedContainer.tick` |
| **Ranch** | `passive_ranch_speed 25/50/75/100%` +5× L5 |
| **Máquinas** | Furnace 6→2s, Press 45→2s, Compost 30→2s, Mill 10→2s, incinerator pack burn 2s; combustível log 80→600s |
| **Natureza** | `passive_nature_growth_speed 25/50/75/100/300%` só dentro settlement |
| **Pesca** | `fishing_lines +2/pt` até 10, `fishing_power +10/pt` + Angler Reflex |
| **Baú Filtros** | 24 cats: All, Material, Melee/Range/Magic/Summon/Other Weapons, Tool, Armor, Cosmetic, Trinket, Mount, Arrow, Bullet, Seed, Bait, Food, Consumable, Quest, Misc, Object, Tile, Vinyl + scroll `FormContentBox.scrollY` |
| **Inventário** | QuickStack raio configurável, sort `Inventory.sortItems` |
| **Explosive Miner** | `100k coins +1k copper+1k iron+1k gold +1k Dynamite`, req Cavern 5, toggle, explosão sem dano ally, sem XP extra |
| **Luz** | `bonus_underground_visibility 10/pt` + ShineBelt |
| **Sobrevivência** | `fatal_survival 3/pt` cap15, `temporary_invulnerability 2/pt`, `thorns 10/pt` |

---

## 9. Economia da Loja

| Item | Custo | Detalhe |
|------|-------|---------|
| **Buff 2×** | `level*1_000` | 10 min (`600s` config 60..86400) |
| **Buff 5×** | `level*5_000` | 10 min |
| **Buff 10×** | `level*10_000` | 10 min (ex L100→1M) |
| **Chest +10 slots** | `5000 + lvl*5000` | 40→400 em 36 compras = 3.33M total, config 1000 máx |
| **World Stack +1** | `1000+(lvl-1)*100` coins + `10+(lvl-1)*10` bars | 1→1000 = ~50M coins + ~5M bars |
| **Explosive Miner** | 100k+1k cada barra+1k Dynamite | req Cavern 5 |
| **Mastery Standard** | 500k+100k×stacks | 0→500k cum 1.1M no 2 |
| **Mastery Premium** | 1M+500k×stacks | Summon/Loot/Relic |

**Exemplos Mastery delta:** `damage_melee` 10×1.0=10, Vitality `max_health 10.0`×10=100 extra.

---

## 10. Comandos

| Comando | Perm | Descrição |
|---------|------|-----------|
| `/rpgskills help` / `?` / `ajuda` | Player | Ajuda localizada |
| `/rpgskills status [player]` | Player | `Level {0}, XP {1}/{2}, free {3}, buff {4}` |
| `/rpgskills set level <1-165>` | Admin | Define nível (clamp, checa `spent>granted`) |
| `/rpgskills set slotchest <50-400>` | Admin | Slots baú passo 10 |
| `/rpgskills set stack <1-1000>` | Admin | Stack mundo |
| `/rpgskills set xpbuff <2\|5\|10\|off> [s\|max]` | Admin | Aplica buff com duração |
| `/rpgskills maxskills` | Admin | Lvl 165 + todas enabled 5 |
| `/rpgskills reset points` | Player | Respec classes+mastery custo `level*1k` |
| `/rpgskills reset zero` | Admin | Wipe total + refund mastery |
| `/rpgskills restore inventory [list]` | Player | Backup `inventory-backups/` (interval/max) |
| `/rpgskills config reload` | Admin | `loadAll()` migra + reescreve `rpgskills-mod.properties` |
| `/rpgskills teste level` | Admin | Fireworks teste |

**Fluxo:** `Parser` → `Validator` (clamp) → `Executor` → `synchronize()` snapshot → `QueryStatusPacket` → `NecessePacketSender`.

---

## 11. Hotkeys

| ID | Default | Label |
|----|---------|-------|
| `rpgskills_toggle_status` | **K** (75) | Abre/fecha janela |
| `toggle_advanced_vein_mining` | unbound | Vein avançado |
| `toggle_explosive_mining` | unbound | Explosive |
| `toggle_light_boost` | unbound | Luz 250→350 |
| `toggle_auto_weapon_select` | unbound | Auto-arma |
| `buy_xp_2/5/10` | unbound (gamepad limpo) | Loja buffs |

Gamepad: `LB+RB hold` abre/fecha, `B` fecha, `D-pad L/R` troca abas, `A` confirma, `RB→Explosive`, `A/X/Y→2/5/10`. Sanitiza `GamepadSupport.tickSanitizeModControlGamepadBindings`. Polling independente por toggle.

---

## 12. Interface

- **Janela Status:** pos `RpgSkillsUiSettings` (remember `24,24`, draggable `RpgSkillsStatusFormWindowSupport`), header `XP: cur/needed`, passivas ativas, bônus derivados (`ClassBonusFormatter`), team share line, QoL `Average/Unrivaled`, `Free points`
- **Aba Classes:** grid por `ClassRegistry.byTab(tab)` ordem `displayOrder`, card ícone `allitems.png` 24 `resources/ui/primal/*.png`, tooltip cur vs +1, botão Add se `free>0`, `Unlocks`, máx detalhe
- **Aba Shop:** buffs (2/5/10x, active `Active buff: {0}x ({1}s)`), stack (current/next/cost), chest (40→400, +10), explosive (Buy 100k+)
- **Barra XP HUD:** `RpgSkillsLevelProgressViewModel` `XP: cur/needed` ou `Level max`, progress bar, draggable se `xpBarDraggingEnabled`
- **Menu Config:** botão `RPG SKILLS CONFIG` no main menu `RpgSkillsMainMenuFormManagerPatch`, seções `PROGRESSION, ECONOMY, STACK, QOL, INVENTORY BACKUP, UI, SERVER/COMPAT, OTHER, FEATURES, PASSIVES, MULTIPLAYER, COMPAT, LOGGING, CLASSES...` scroll

---

## 13. Persistência

- **Schema v8** `RpgPersistenceContract.java:9`: `schema_version, player.level, player.experience, player.purchased_class_points, player.trinket_slots.non_mod, player.trinket_slots.mod_applied, player.active_xp.multiplier, player.active_xp.end_time_seconds, player.explosive_miner.unlocked, class_points.<id>, mastery.<class>.<attr>, mastery_coins_spent.<id>, sync.mastery_epoch, updateClassRespecVersion` + legados `class_points., player_level, SkillPointsPurchased` via `PlayerProfileSnapshotNormalizationSupport`
- **Arquivos:** `rpgskills-mod.properties` (seccional `#` headers `RpgSkillsModSettingsSectionalWriter`) unificado; legado `rpgskills-stacksize.properties, qol, progression, classes, inventory-backup, ui.properties` migrados one-shot via `RpgSkillsModSettingsFileStore.loadAll:65`; perfis `profiles/<player>.dat` via `PlayerProfileFileStore`, `RpgSkillsDataPaths.resolveSettingsDirectory()`; world `stack/chest/qol` via `WorldSettings.getSaveScript` flush imediato (fix 2.7); backups `inventory-backups/` antes de reset/update respec; welcome `rpgskills-welcome-worlds.properties`

---

## 14. Rede

Pacotes `RpgSkillsMod.registerPackets:91`: `QueryStatusPacket, RequestStatusPacket, AllocateAttributePointPacket, ResetAttributesPacket, ResetClassPointsPacket, MaxSkillsPacket, PurchaseMasteryPacket, PurchaseXpBuffPacket, PurchaseExplosiveMinerPacket, ChestSlotActionPacket, ChestSlotSyncPacket, StackSizeActionPacket, StackSizeSyncPacket, AdvancedVeinMiningTogglePacket→Feedback, ExplosiveMiningTogglePacket→Visual, AutoWeaponSelectTogglePacket→Feedback, DebuffDamageFeedbackPacket, DebuffVisualFeedbackPacket, DeveloperModeFeedbackPacket, LevelUpFeedbackTestPacket`; `masterySyncEpoch` rejeita stale.

---

## 15. Localização & Integrações

- **12 idiomas:** `en, pt-BR, de, es, fr, it, ja, ko, nl, pl, ru, zh-CN` (paridade `RpgSkillsLocaleFileParityTest`); overlay `locale/compat/necesse/pt-BR.lang` + `safehaven/en|pt-BR.lang`
- **Safe Haven:** `compat.forceSafeHavenIncinerator/VeinMining/TripleLootOff=true` para evitar duplo vein/triple loot; `ShopItemGeneratorCompatPatch` + `TorviansQol*Compat`
- **Only1LossPerSpoilCompat**, **Incinerator Pack Burn** com Machine Master, **Necesse pt-BR overlay**, **Reflection** `NecesseReflectionSupport` degrada gracioso

---

## 16. Config — Chaves Completas (`rpgskills-mod.properties` sectional)

```properties
# === PROGRESSION ===
xp.globalMultiplier=1.0
xp.fixedWorld=5
xp.deathPenaltyEnabled=true
xp.deathPenaltyFraction=0.25
xp.bossBase=300
xp.miniBossFlatBonus=100
xp.quantum=5
experience.baseForFirstLevel=10000
experience.incrementPerLevel=10000
maxPlayerLevel=165
maxClassPointsPerClass=5
respec.coinCostPerPlayerLevel=1000
xpBuff.allowedMultipliers=2,5,10
xp.teamShareEnabled=true
xp.settlementTeamShareEnabled=true
xp.teamShareRadiusTiles=24
romance.partyBonusEnabled=false
# === ECONOMY ===
shop.chestUpgradeBaseCoinCost=5000
shop.chestUpgradeCoinCostIncrement=5000
shop.chestSlotsPerUpgrade=10
shop.maxChestSlots=400
shop.xpBuffDurationSeconds=600
settlement.xpRateLimitPerMinute=150
settlement.apexXpMultiplier=3
veinMining.maxBlocksPerBurst=20
levelUp.fireworksScale=1.0
# === FEATURES ===
features.levelUpFireworksEnabled=true
features.inventoryButtonEnabled=true
features.welcomeMessageEnabled=true
features.explosiveMinerShopEnabled=true
features.teamShareUiStatusLineEnabled=true
features.playerRestoreCommandEnabled=true
features.shopXpBuffPurchaseEnabled=true
features.oneLossPerSpoilEnabled=true
features.autoWeaponSelectEnabled=true
features.acceleratedSleepEnabled=true
features.updateClassRespecEnabled=true
features.trinketSlotsConfigOverrideEnabled=false
features.trinketSlotsConfigBonus=20
features.excludeIncursionTabletsFromLootMultiplier=false
features.passive.eagle_eye=true
features.passive.vital_blessing=true
# ... +17 passivas ...
# === MULTIPLAYER ===
multiplayer.requireAdminForShopWorldUpgrades=false
# === COMPAT ===
compat.forceSafeHavenIncineratorOff=true
compat.forceSafeHavenVeinMiningOff=true
compat.forceSafeHavenTripleLootOff=true
# === LOGGING ===
logging.configSummaryOnBoot=false
# === CLASSES ===
class.mestre_da_guerra=true
# ... 32 linhas ...
```

---

## 17. Histórico

| Versão | Destaques |
|--------|-----------|
| 1.0 | 27 classes, RPG progression, Shop, 3-tab UI, K, controller |
| 1.5 | Trinket fixes, Safe Haven, XP bar movable, death penalty config |
| 1.9.2 | Progression config, class toggle, Master of Classes só enabled |
| 2.0 | Realm 5, 6+ pers, zone XP, Life Partner |
| 2.3 | Backup auto, Classes redesign, LB/RB/D-pad |
| 2.4 | Team XP sharing, config unificado |
| 2.5 | **33 classes**, config menu completo, Angler, 1-spoil, Safe Haven 3.5 |
| 2.6 | Auto Weapon Select, Accelerated Sleep 8PM-3AM |
| 2.7 | Trinket 0-255 override, Loot exclude incursion tablets, respec update, fixes Loot/Gold Strike/World save lag |

---

## 18. Comparação Site × Mod

### 18.1 O que o site JÁ cobre bem (evitar repetir igual)

| Recurso Mod | Onde no Site | Status | Risco redundância |
|-------------|--------------|--------|-------------------|
| **33 classes nomes PT/EN** | `html/classes.html` grid 5 tabs | ✅ Completo | **Alto** — não recriar lista idêntica; se expandir, trazer bônus por ponto (10, 0.6 etc.) que o site só mostra descritivo curto |
| **XP por zona (15–105)** | `html/universo-xp.html` chips + `fontes-xp.html` cards | ✅ Bem resumido | **Médio** — site já lista 30+ zonas, mas sem fórmula `boss 300+ floor(lvl/10)*100`; evite só repetir tabela, traga gatilhos (`onDeath`, `onDestroyed`, `serverTick`) |
| **Passivas 19 nomes** | `html/passivas.html` 19 cards | ✅ Nomes + req nível | **Alto** — site já tem `Eagle Eye | Marksman 1` etc.; redundante copiar sem mecânica (ex: Vein `20 blocos` + CD 30s Colossal) |
| **Loja buffs 2×/5×/10×** | `html/funcionalidades.html`, `janela.html`, `qol.html` | ✅ 3× repetido | **Alto** — 3 páginas repetem mesmo `500/1000/2000 coins`; evite nova página só de buffs, detalhe custo por nível (`level*1000`) e duração config `600s` |
| **Comandos básicos** | `html/configuracao.html` lista 8 cmds | ✅ Parcial | **Médio** — site lista `/rpgskills status/reset` mas sem permissões, sem `teste level` e sem `teamShare` |
| **Hotkeys K / LB+RB** | `html/atalhos.html` + `janela.html` | ✅ OK | **Médio** — site já cobre K e LB+RB, mas não os 8 hotkeys desbindados |
| **Changelog** | `html/changelog.html` timeline 1.0→2.7 | ✅ Timeline | **Baixo** — site já bem completo, não precisa duplicar release-notes raw |
| **QoL 9 cards** | `html/qol.html` | ✅ Visual | **Médio** — já cobre Vein, Angler, Sleep etc., mas sem números (`80→600s` combustível) |

**Conclusão redundância:** O site é ótimo em *vitrine* (cards, chips, mockup). Repetir as mesmas frases sem números novos será percebido como filler. O mod tem ~70 atributos + fórmulas que o site não expõe — essa é a oportunidade.

### 18.2 O que o site NÃO cobre / cobre mal (oportunidade — não é redundante)

| Tema Mod | Detalhe que FALTA no site | Página ideal para aplicar |
|----------|---------------------------|---------------------------|
| **Fórmula nível** `10k + (L-1)*10k` + acumulado 136M | Site mostra `10K no 1 … 1.65M no 165` mas não mostra fórmula nem quantum 5, normalização, `scaleExperienceGain` | `fontes-xp.html` → adicionar calculadora já existente, mas falta explicar quantum e exemplo cumulativo |
| **Mastery (Shop Mastery)** custo `500k+100k` vs `1M+500k` + deltas `10.0` | **Ausente total** no site (0 menções a `MasteryPricing`) | Nova seção em `html/classes.html` ou `funcionalidades.html` — 3 linhas premium, exemplo total 3.33M chest |
| **Custos reais Chest/Stack** | Site diz `5.000 + 5.000` e `1.000 + 100` mas não total 3.33M coins ou 50M coins +5M bars até 1000 | `html/janela.html` Shop + `fontes-xp.html` calc |
| **Death penalty exata** `floorToQuantum(floor(cur*0.25))` + toggle | Site só `25% do XP atual` sem exemplo 10k→2.5k e sem `xp.quantum=5` | `html/fontes-xp.html` ou `progressao.html` |
| **Rate limits** `150/min` + `30/dia` + teamShare `24 tiles` | Site menciona `150/min` e `cap 30/dia` mas sem `86400000 ms` nem `teamShare` duplo | `html/universo-xp.html` → já tem `150/min` mas falta `teamShareEnabled` e `romance ×1.05` |
| **Atributos caps** `heal_per_second 0..3`, `trinkets 0..20`, `freezing 0..30` | Site nunca mostra caps por atributo | `html/classes.html` modal `ClassBonusFormatter` — adicionar coluna `cap` |
| **Elemental DOT** `5*pts dps` + `3*pts segundos` cap `25/15` + targeting hostis+Cavelings | Site resume `5-25/s` mas não mostra acumulação `min(15, atual+add)` nem chance hitkill 5% | `html/passivas.html` expandir |
| **Vein Mining avançado** lista floors/plants/trees/walls/rocks/clay + `maxBlocksPerBurst 20` (1..100) | Site só `1 clique = veio` sem `20` configurável | `html/qol.html` já interativo mas falta `20` |
| **Settlement Apex** `Unrivaled 6`, `×3` + `1.5×` rich + `50%` admin | Site cita `Unrivaled + ×3` mas não `6 personalidades`, `60%` max reduction, `1.5× aura alinhada` | `html/qol.html` ou `passivas.html` Realm |
| **Persistência** schema v8, arquivos `rpgskills-mod.properties` + `profiles/*.dat` + `inventory-backups/` | **Ausente** | Nova página `html/configuracao.html` já tem tabs, adicionar seção `Arquivos` |
| **Rede pacotes** 18+ pacotes, `masterySyncEpoch` | Ausente | Não precisa página pública, mas menção técnica para server admins |
| **Integrações** Safe Haven `force*Off=true`, Only1Loss, Necesse pt-BR overlay | Site só `Safe Haven 3.5` sem `forceSafeHaven*Off` | `html/configuracao.html` compat |
| **Trinket override** `20` (0..255) desabilita Relic | Site zero | `html/classes.html` Relic Master |
| **Comandos perm** `teste level` + `level_overspent` msg | Site não lista `teste level` | `html/configuracao.html` cmds |
| **Hotkeys 8 ids** `toggle_advanced_vein_mining` etc. unbound | Site só K/LB+RB + 1-3 | `html/atalhos.html` expandir lista completa |
| **UI prefs** `rememberStatusWindowPosition 24,24` + `xpBarDraggingEnabled` | Ausente | `html/janela.html` Tips |
| **Máquinas/Nature** `Furnace 6→2s` `Press 45→2s` `Nature 300%` | Site cita `6s→2s` mas não `80→600s` fuel nem `300%` nature | `html/qol.html` strip |

### 18.3 Mapa de Reuso — Onde evitar copiar

- **Não** criar nova página só com lista de 33 classes idêntica a `classes.html` — em vez disso, *enriquecer* `classes.html` com colunas `Bônus por ponto` + `Cap` + `Mastery premium`.
- **Não** repetir chips `15/20/25/...105` em 3 páginas diferentes sem novidade — centralizar em `universo-xp.html` e nas outras linkar via `→ ver Universo XP`.
- **Não** duplicar `2× 500c 5× 1000c 10× 2000c` em 4 lugares — padronizar em `janela.html` Shop e nas demais usar `→ ver Loja`.
- **Não** copiar `19 passivas` como lista seca — já existe; adicionar mecânica (ex: Colossal 2–10s CD 30s, Ranch 5×).

---

## 19. Recomendações para o Site (próximos passos sem redundância)

### 19.1 Enhancements de baixo esforço (não redundantes)

1. **`html/fontes-xp.html` — Calculadora já existe, adicionar linha `Quantum 5` + exemplo `136M` acumulado** (mod tem `getExperienceRequiredForLevel` + `normalize`). Mostrar fórmula em card `xp-formula` já polido.
2. **`html/classes.html` — Modal `ClassBonusFormatter`** já exibe bônus por ponto; adicionar badge `Cap 25` / `Cap 3.0` vindo de `clampAttribute` para diferenciar do site atual.
3. **`html/universo-xp.html` — Filtro já existe; adicionar tooltip `gatilho: Mob.onDeath` nos chips via `title` para valor técnico.**
4. **`html/qol.html` — Já interativo; trocar `Vein Miner: 12 → 1.5 cliques` por `maxBlocksPerBurst 20 (1..100)` configurável para dar número novo.**
5. **`html/configuracao.html` — Tabs já existem; nova aba `Arquivos` listando `rpgskills-mod.properties` + `profiles/*.dat` (persistência v8) — conteúdo 100% novo.**
6. **`html/atalhos.html` — Expandir `8 ids` completos (tabela Hotkeys acima) — hoje só 5.**
7. **`html/passivas.html` — Filtro já existe; adicionar linha `DPS 5*pts` + `Dur 3*pts` + `Cap 25/15` nos cards elementais.**
8. **`html/funcionalidades.html` — Counter `136M` já anima; adicionar `Quantum 5` badge `float-badge` ao lado.**
9. **Evitar nova página `html/mastery.html` separada** — falaria só `500k+100k` e seria redundante com Shop; embutir como seção `Mastery` em `classes.html` (3 linhas premium) ou `janela.html` Shop.
10. **Changelog** já tem timeline + filtro `major/fix`; não precisa copiar `release-notes/*.md` raw — manter timeline polida.

### 19.2 Conteúdo 100% novo que pode virar páginas sem redundância

- **`/html/economia.html`** — unificar Chest `3.33M` + Stack `50M+5M bars` + Mastery `Standard/Premium` + Buff `level*1k` em um *simulador de custo* (cálculo total). Hoje nenhum html tem esses totais.
- **`/html/tecnico.html`** (opcional, para admins) — schema v8, chaves `rpgskills.*`, pacotes de rede, integrações Safe Haven `force*Off`. Não existe no site; atrairia público técnico sem repetir vitrine.
- **`/html/atributos.html`** — tabela dos ~70 `RpgAttributeIds` com caps `ClassAttributeResolver` — hoje só mod tem, site só mostra nomes de classes.

### 19.3 O que NÃO fazer

- Não duplicar `progressao.html` Loop `Jogue→Ganhe→Suba→Domine` em `funcionalidades.html` — já estão separados propositalmente (polimento anterior). Manter link `→ ver Loop`.
- Não reintroduzir seções longas `XP por Zona` em `fontes-xp.html` se já está em `universo-xp.html` — usar link cruzado `→ ver Universo XP`.
- Não repetir `DOC/MOD-DATA.md` (tabela simples) como página — ele é subconjunto do que já está polido; o novo `MOD-ANALISE-COMPLETA.md` é superset.

---

## 20. Fontes citadas (para auditoria)

- `core/PlayerProfile.java:14`, `progression/ProgressionRules.java:3`, `progression/RpgSkillsProgressionSettings.java:7`, `progression/RpgSkillsEconomySettings.java:5`, `progression/RpgSkillsFeatureSettings.java:9`
- `classes/ClassRegistry.java:32`, `classes/ClassDefinition.java:10`, `classes/MasteryPricing.java:12`, `classes/ClassAttributeResolver.java:10`, `classes/RpgSkillsClassSettings.java:9`
- `attributes/RpgAttributeIds.java:7`
- `gameplay/xp/XpZoneKind.java:3`, `gameplay/xp/XpZoneResolver.java:9`, `gameplay/xp/XpGainRulesV1.java:6`, `gameplay/xp/XpGainCalculator.java:6`, `gameplay/xp/MobCombatXpClassifier.java:9`, `gameplay/ElementalCombatRules.java:11`, `gameplay/TrapMasterRules.java:10`, `gameplay/RealmMasterApexRules.java:9`, `gameplay/RomancePartyRules.java:7`, `gameplay/SpoilOnePerCycleRules.java:7`
- `stacksize/StackSizeEconomy.java:1`, `stacksize/ChestSlotEconomy.java:1`, `gameplay/XpBuffPurchaseService.java:5`
- `commands/RpgSkillsCommandContract.java:9`, `commands/RpgSkillsCommandParser.java:7`
- `runtime/core/RpgSkillsMod.java:1`, `runtime/menus/RpgSkillsControls.java:8`, `runtime/RpgSkillsRuntimePaths.java:1`, `runtime/src/mod.info:1`
- `persistence/RpgPersistenceContract.java:9`, `persistence/PlayerProfileSnapshot.java:14`
- `ui/RpgSkillsUiSettings.java:17`
- `docs/architecture.md:1`, `docs/invariants.md:1`, `docs/patch-inventory.md:1`, `docs/CURRENT_RELEASE.md:1`
- `gradle.properties:1`, `localization/en.lang:1`, `release-notes/2.7.md:1`
- **Site:** `index.html:1-734`, `html/*.html` (11 páginas), `css/polish.css:1`, `js/main.js:1-1430`, `doc/MOD-DATA.md:1`, `doc/COMPARISON.md:1`

> Gerado automaticamente a partir do código-fonte — todos os números são extraídos de `*.java` com linha citada, não de wiki.

