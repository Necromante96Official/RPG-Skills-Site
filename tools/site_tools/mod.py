"""Lê o código do mod (pasta do RPG Skills) e gera js/generated/mod-data.js.

Fonte da verdade das classes e passivas do site: o próprio mod.
- ClassRegistry.java: classes, aba, ordem e bônus por ponto.
- RpgAttributeIds.java: nome interno dos atributos.
- locale/pt-BR.lang e locale/en.lang: nomes, descrições e desbloqueios.

O bônus de cada atributo é linear: pontos x valor por ponto (ClassAttributeResolver).
Alguns atributos são por faixa (comida, máquinas, armadilhas...): o texto de cada nível
vem do .lang ou da tabela FAIXAS abaixo, copiada de ClassBonusFormatter/ProgressionRules.
"""
import json
import re
from pathlib import Path

from .caminhos import GERADO, gravar

REGISTRO = 'modules/classes/src/main/java/rpgskills/progression/classes/ClassRegistry.java'
IDS = 'modules/attributes/src/main/java/rpgskills/status/RpgAttributeIds.java'
LOCALE = 'modules/runtime/src/main/resources/locale'

ABAS = {'COMBAT': 'combate', 'SURVIVAL': 'sobrevivencia', 'MOVEMENT': 'movimento',
        'UTILITY': 'utilidade', 'NECROMANCY': 'necromancia'}

# Sufixo de cada atributo (ClassBonusFormatter.resolveSuffix). Chave do .lang ou texto fixo.
PORCENTO = set('''damage_melee damage_ranged damage_magic damage_summon damage_lifesteal attack_speed
crit_chance crit_damage armor_penetration projectile_velocity combat_knockback_power reduced_bullet_usage
reduced_arrow_usage survival_health_regen survival_knockback_resistance survival_resilience_gain
survival_fatal_survival survival_physical_resistance survival_magical_resistance survival_fire_damage_reduction
survival_critical_damage_reduction survival_thorns passive_health_on_kill movement_speed movement_swim_speed
movement_dash_cooldown movement_sprint_bonus movement_mobility_control bonus_building_speed bonus_mining_speed
bonus_settlement_happiness bonus_settlement_shop_discount bonus_loot_quality bonus_gold_find
passive_all_drop_chance_on_kill mysticism_summon_speed mysticism_mana_regen mysticism_mana_usage
mysticism_magic_attack_speed_mana_link bonus_gold_gain survival_bleed_resistance
survival_resilience_regen_speed bonus_biome_map_vision'''.split())
SUFIXOS = {
    'tiles': ('bonus_interaction_range', 'bonus_item_pickup_range', 'bonus_build_range', 'bonus_mining_range'),
    'points': ('survival_heal_per_second', 'mysticism_mana_regen_flat', 'mysticism_max_mana',
               'passive_health_on_food', 'survival_max_health', 'survival_max_resilience'),
    'armor_points': ('survival_armor_defense_gain',),
    'seconds': ('survival_temporary_invulnerability', 'debuff_bleed_duration', 'debuff_ablaze_duration',
                'debuff_poison_duration', 'debuff_frostburn_duration', 'debuff_darkness_duration',
                'debuff_necrotic_slow_duration', 'debuff_chilled_duration'),
    'damage_per_second': ('debuff_bleed_damage_per_second', 'debuff_ablaze_damage_per_second',
                          'debuff_poison_damage_per_second', 'debuff_frostburn_damage_per_second',
                          'debuff_darkness_damage_per_second'),
    'dash_charges': ('movement_dash_capacity',),
    'lines': ('bonus_fishing_lines',),
    'summons': ('mysticism_max_summons',),
    'slots': ('bonus_max_trinkets',),
    'gold': ('passive_gold_on_hit',),
}

# Atributos por faixa: texto de cada nível (1..5). 'lang:<prefixo>' lê <prefixo>_1.._5 do .lang.
FAIXAS = {
    'passive_food_buff_duration': ['+25%', '+50%', '+75%', '+100%', '+300%'],
    'passive_potion_buff_duration': ['+25%', '+50%', '+75%', '+100%', '+300%'],
    'passive_nature_growth_speed': ['+25%', '+50%', '+75%', '+100%', '+300%'],
    'passive_ranch_speed': ['+25%', '+50%', '+75%', '+100%', 'lang:rpgskills_bonus_ranch_speed_max'],
    'passive_machine_processing_speed': 'lang:rpgskills_bonus_machine_speed',
    'passive_machine_fuel_duration': 'lang:rpgskills_bonus_machine_fuel',
    'passive_trap_mastery': 'lang:rpgskills_bonus_trap',
    'passive_necromancy_mastery': 'lang:rpgskills_bonus_necro',
    'bonus_loot_gain': [(20, 2), (40, 2), (60, 2), (80, 2), (100, 2)],
    'bonus_underground_visibility': ['lang:rpgskills_bonus_active'] * 5,
}

DEF = re.compile(r'register\(def\(RpgAttributeIds\.Classes\.(\w+),\s*ClassDefinition\.Tab\.(\w+),\s*(\d+),'
                 r'\s*weights\((.*?)\)\)\);', re.S)
PAR = re.compile(r'pair\(RpgAttributeIds\.Attributes\.(\w+),\s*([\d.]+)\)')
CONST = re.compile(r'(\w+)\s*=\s*"([^"]+)"')


def ler_lang(caminho):
    d = {}
    for linha in Path(caminho).read_text(encoding='utf-8').splitlines():
        if '=' in linha and not linha.startswith(('#', '[')):
            k, v = linha.split('=', 1)
            d[k.strip()] = v.strip()
    return d


def numero(v):
    v = float(v)
    return int(v) if v.is_integer() else v


def faixa(attr, langs):
    regra = FAIXAS[attr]
    if isinstance(regra, str):
        regra = ['%s_%d' % (regra, n) for n in range(1, 6)]
    niveis = []
    for item in regra:
        if isinstance(item, tuple):
            niveis.append({'pt': '+%d%% de chance de receber %dx o item' % item,
                           'en': '+%d%% chance to receive %dx the item' % item})
        elif item.startswith('lang:'):
            chave = item[5:]
            niveis.append({l: langs[l].get(chave, '') for l in langs})
        else:
            niveis.append({'pt': item, 'en': item})
    return niveis


def sufixo(attr, langs):
    if attr in PORCENTO:
        return {'pt': '%', 'en': '%'}
    for nome, attrs in SUFIXOS.items():
        if attr in attrs:
            chave = 'rpgskills_bonus_suffix_' + nome
            return {l: ' ' + langs[l].get(chave, nome) for l in langs}
    return {'pt': '', 'en': ''}


def texto(langs, chave):
    return {l: langs[l].get(chave, '') for l in langs}


def gerar(pasta_mod):
    raiz = Path(pasta_mod)
    ids = dict(CONST.findall((raiz / IDS).read_text(encoding='utf-8')))
    langs = {'pt': ler_lang(raiz / LOCALE / 'pt-BR.lang'), 'en': ler_lang(raiz / LOCALE / 'en.lang')}
    classes = []
    for const, aba, ordem, pesos in DEF.findall((raiz / REGISTRO).read_text(encoding='utf-8')):
        cid = ids[const]
        chave = 'rpgskills_class_' + cid
        bonus = []
        for aconst, valor in PAR.findall(pesos):
            attr = ids[aconst]
            b = {'id': attr, 'nome': texto(langs, 'rpgskills_attr_' + attr)}
            if attr in FAIXAS:
                b['faixas'] = faixa(attr, langs)
            else:
                b['porPonto'] = numero(valor)
                b['sufixo'] = sufixo(attr, langs)
            bonus.append(b)
        desbloqueios = {n: texto(langs, '%s_unlock_%d' % (chave, n))
                        for n in range(1, 6) if langs['pt'].get('%s_unlock_%d' % (chave, n))}
        classes.append({'id': cid, 'aba': ABAS[aba], 'ordem': int(ordem),
                        'nome': texto(langs, chave), 'desc': texto(langs, chave + '_desc'),
                        'bonus': bonus, 'desbloqueios': desbloqueios})
    classes.sort(key=lambda c: c['ordem'])

    passivas = []
    for k in langs['pt']:
        m = re.match(r'rpgskills_passives_actives_(\w+)_title$', k)
        if m and langs['pt'].get('rpgskills_passives_actives_%s_description' % m.group(1)):
            base = 'rpgskills_passives_actives_' + m.group(1)
            passivas.append({'id': m.group(1), 'nome': texto(langs, k),
                             'desc': texto(langs, base + '_description'),
                             'como': texto(langs, base + '_unlock')})

    corpo = ('/* GERADO por tools/build.py --mod <pasta do mod>. Não editar. */\n'
             'window.RPG_MOD = %s;\n' % json.dumps({'classes': classes, 'passivas': passivas},
                                                  ensure_ascii=False, indent=1))
    gravar(GERADO / 'mod-data.js', corpo)
    return {'classes': len(classes), 'passivas': len(passivas)}
