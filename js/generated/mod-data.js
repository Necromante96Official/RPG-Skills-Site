/* GERADO por tools/build.py --mod <pasta do mod>. Não editar. */
window.RPG_MOD = {
 "classes": [
  {
   "id": "mestre_da_guerra",
   "aba": "combate",
   "ordem": 0,
   "nome": {
    "pt": "Mestre da Guerra",
    "en": "War Master"
   },
   "desc": {
    "pt": "Melhora combate corpo a corpo: dano, crítico, penetração de armadura, velocidade de ataque e repulsão. Com Guerra, Atirador, Magia e Invocador no nível 5, desbloqueia Deus do Dano (+50% de dano total).",
    "en": "Improves melee combat: damage, crit, armor penetration, attack speed, and knockback. With War Master, Marksman, Magic Master, and Summon Master all at level 5, unlocks Damage God (+50% total damage)."
   },
   "bonus": [
    {
     "id": "damage_melee",
     "nome": {
      "pt": "Dano corpo a corpo",
      "en": "Melee damage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "crit_damage",
     "nome": {
      "pt": "Dano crítico",
      "en": "Crit damage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "crit_chance",
     "nome": {
      "pt": "Chance de crítico",
      "en": "Crit chance"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "armor_penetration",
     "nome": {
      "pt": "Penetração de armadura",
      "en": "Armor penetration"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "attack_speed",
     "nome": {
      "pt": "Velocidade de ataque",
      "en": "Attack speed"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "combat_knockback_power",
     "nome": {
      "pt": "Poder de repulsão",
      "en": "Knockback power"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_atirador",
   "aba": "combate",
   "ordem": 1,
   "nome": {
    "pt": "Mestre Atirador",
    "en": "Marksman Master"
   },
   "desc": {
    "pt": "Melhora ataques à distância: dano, crítico, penetração de armadura, velocidade de projéteis e repulsão. Com Guerra, Atirador, Magia e Invocador no nível 5, desbloqueia Deus do Dano (+50% de dano total).",
    "en": "Improves ranged attacks: damage, crit, armor pen, projectile speed, and knockback. With War Master, Marksman, Magic Master, and Summon Master all at level 5, unlocks Damage God (+50% total damage)."
   },
   "bonus": [
    {
     "id": "damage_ranged",
     "nome": {
      "pt": "Dano à distância",
      "en": "Ranged damage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "crit_damage",
     "nome": {
      "pt": "Dano crítico",
      "en": "Crit damage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "crit_chance",
     "nome": {
      "pt": "Chance de crítico",
      "en": "Crit chance"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "armor_penetration",
     "nome": {
      "pt": "Penetração de armadura",
      "en": "Armor penetration"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "projectile_velocity",
     "nome": {
      "pt": "Velocidade de projéteis",
      "en": "Projectile velocity"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "combat_knockback_power",
     "nome": {
      "pt": "Poder de repulsão",
      "en": "Knockback power"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {
    "1": {
     "pt": "Olho de Águia (destaca inimigos e animais próximos sem iluminar)",
     "en": "Eagle Eye (highlights nearby enemies and animals without lighting)"
    }
   }
  },
  {
   "id": "mestre_da_magia",
   "aba": "combate",
   "ordem": 2,
   "nome": {
    "pt": "Mestre da Magia",
    "en": "Magic Master"
   },
   "desc": {
    "pt": "Melhora magia: dano, crítico, regeneração de mana, velocidade de ataque mágico e repulsão. Com Guerra, Atirador, Magia e Invocador no nível 5, desbloqueia Deus do Dano (+50% de dano total).",
    "en": "Improves magic: damage, crit, mana regeneration, magic attack speed, and knockback. With War Master, Marksman, Magic Master, and Summon Master all at level 5, unlocks Damage God (+50% total damage)."
   },
   "bonus": [
    {
     "id": "damage_magic",
     "nome": {
      "pt": "Dano mágico",
      "en": "Magic damage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "crit_damage",
     "nome": {
      "pt": "Dano crítico",
      "en": "Crit damage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "crit_chance",
     "nome": {
      "pt": "Chance de crítico",
      "en": "Crit chance"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "mysticism_mana_regen",
     "nome": {
      "pt": "Regeneração de mana",
      "en": "Mana regeneration"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "mysticism_magic_attack_speed_mana_link",
     "nome": {
      "pt": "Velocidade de ataque mágico vinculada à mana",
      "en": "Magic attack speed mana link"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "combat_knockback_power",
     "nome": {
      "pt": "Poder de repulsão",
      "en": "Knockback power"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_invocador",
   "aba": "combate",
   "ordem": 3,
   "nome": {
    "pt": "Mestre Invocador",
    "en": "Summon Master"
   },
   "desc": {
    "pt": "Melhora invocações: dano, crítico, velocidade de invocação, limite de invocações e repulsão. Com Guerra, Atirador, Magia e Invocador no nível 5, desbloqueia Deus do Dano (+50% de dano total).",
    "en": "Improves summons: damage, crit, summon speed, summon limit, and knockback. With War Master, Marksman, Magic Master, and Summon Master all at level 5, unlocks Damage God (+50% total damage)."
   },
   "bonus": [
    {
     "id": "damage_summon",
     "nome": {
      "pt": "Dano de invocação",
      "en": "Summon damage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "crit_damage",
     "nome": {
      "pt": "Dano crítico",
      "en": "Crit damage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "crit_chance",
     "nome": {
      "pt": "Chance de crítico",
      "en": "Crit chance"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "mysticism_summon_speed",
     "nome": {
      "pt": "Velocidade de invocação",
      "en": "Summon speed"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "mysticism_max_summons",
     "nome": {
      "pt": "Quantidade máxima de invocações",
      "en": "Max summons"
     },
     "porPonto": 2,
     "sufixo": {
      "pt": " invocações",
      "en": " summons"
     }
    },
    {
     "id": "combat_knockback_power",
     "nome": {
      "pt": "Poder de repulsão",
      "en": "Knockback power"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_sanguinario",
   "aba": "combate",
   "ordem": 4,
   "nome": {
    "pt": "Mestre Sanguinário",
    "en": "Bloodthirsty Master"
   },
   "desc": {
    "pt": "Ataques aplicam sangramento e lentidão necrótica em mobs. O dano vai de 5 a 25 por segundo e a duração vai de 3s a 15s. Com outro mestre de efeito no nível 5, desbloqueia Fusão Elemental. Com os cinco no nível 5, desbloqueia Tempestade Interior.",
    "en": "Attacks apply bleeding and necrotic slow to mobs. Damage scales from 5 to 25 per second and duration from 3s to 15s. With another damage-over-time master at level 5, unlocks Elemental Fusion. With all five at level 5, unlocks Inner Storm."
   },
   "bonus": [
    {
     "id": "debuff_bleed_damage_per_second",
     "nome": {
      "pt": "Dano de sangramento por segundo",
      "en": "Bleed damage per second"
     },
     "porPonto": 5,
     "sufixo": {
      "pt": " dano/s",
      "en": " damage/s"
     }
    },
    {
     "id": "debuff_bleed_duration",
     "nome": {
      "pt": "Duração do sangramento",
      "en": "Bleed duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    },
    {
     "id": "debuff_necrotic_slow_duration",
     "nome": {
      "pt": "Duração da lentidão necrótica",
      "en": "Necrotic slow duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    }
   ],
   "desbloqueios": {
    "5": {
     "pt": "Ataques também aplicam armadura quebrada",
     "en": "Attacks also apply broken armor"
    }
   }
  },
  {
   "id": "mestre_incendiario",
   "aba": "combate",
   "ordem": 5,
   "nome": {
    "pt": "Mestre Incendiário",
    "en": "Incendiary Master"
   },
   "desc": {
    "pt": "Ataques aplicam queimadura forte e lentidão necrótica em mobs. O dano vai de 5 a 25 por segundo e a duração vai de 3s a 15s. Com outro mestre de efeito no nível 5, desbloqueia Fusão Elemental. Com os cinco no nível 5, desbloqueia Tempestade Interior.",
    "en": "Attacks apply strong burning and necrotic slow to mobs. Damage scales from 5 to 25 per second and duration from 3s to 15s. With another damage-over-time master at level 5, unlocks Elemental Fusion. With all five at level 5, unlocks Inner Storm."
   },
   "bonus": [
    {
     "id": "debuff_ablaze_damage_per_second",
     "nome": {
      "pt": "Dano de queimadura por segundo",
      "en": "Burn damage per second"
     },
     "porPonto": 5,
     "sufixo": {
      "pt": " dano/s",
      "en": " damage/s"
     }
    },
    {
     "id": "debuff_ablaze_duration",
     "nome": {
      "pt": "Duração da queimadura",
      "en": "Burn duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    },
    {
     "id": "debuff_necrotic_slow_duration",
     "nome": {
      "pt": "Duração da lentidão necrótica",
      "en": "Necrotic slow duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_venenoso",
   "aba": "combate",
   "ordem": 6,
   "nome": {
    "pt": "Mestre Venenoso",
    "en": "Venomous Master"
   },
   "desc": {
    "pt": "Ataques aplicam veneno necrótico e lentidão necrótica em mobs. O dano vai de 5 a 25 por segundo e a duração vai de 3s a 15s. Com outro mestre de efeito no nível 5, desbloqueia Fusão Elemental. Com os cinco no nível 5, desbloqueia Tempestade Interior.",
    "en": "Attacks apply necrotic poison and necrotic slow to mobs. Damage scales from 5 to 25 per second and duration from 3s to 15s. With another damage-over-time master at level 5, unlocks Elemental Fusion. With all five at level 5, unlocks Inner Storm."
   },
   "bonus": [
    {
     "id": "debuff_poison_damage_per_second",
     "nome": {
      "pt": "Dano de veneno por segundo",
      "en": "Poison damage per second"
     },
     "porPonto": 5,
     "sufixo": {
      "pt": " dano/s",
      "en": " damage/s"
     }
    },
    {
     "id": "debuff_poison_duration",
     "nome": {
      "pt": "Duração do veneno",
      "en": "Poison duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    },
    {
     "id": "debuff_necrotic_slow_duration",
     "nome": {
      "pt": "Duração da lentidão necrótica",
      "en": "Necrotic slow duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_congelante",
   "aba": "combate",
   "ordem": 7,
   "nome": {
    "pt": "Mestre Congelante",
    "en": "Freezing Master"
   },
   "desc": {
    "pt": "Ataques aplicam queimadura de frio e resfriado em mobs. O dano vai de 5 a 25 por segundo e a duração vai de 3s a 15s. Com outro mestre de efeito no nível 5, desbloqueia Fusão Elemental. Com os cinco no nível 5, desbloqueia Tempestade Interior.",
    "en": "Attacks apply frostburn and chill to mobs. Damage scales from 5 to 25 per second and duration from 3s to 15s. With another damage-over-time master at level 5, unlocks Elemental Fusion. With all five at level 5, unlocks Inner Storm."
   },
   "bonus": [
    {
     "id": "debuff_frostburn_damage_per_second",
     "nome": {
      "pt": "Dano de frio por segundo",
      "en": "Frost damage per second"
     },
     "porPonto": 5,
     "sufixo": {
      "pt": " dano/s",
      "en": " damage/s"
     }
    },
    {
     "id": "debuff_frostburn_duration",
     "nome": {
      "pt": "Duração da queimadura de frio",
      "en": "Frostburn duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    },
    {
     "id": "debuff_chilled_duration",
     "nome": {
      "pt": "Duração do resfriado",
      "en": "Chilled duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    }
   ],
   "desbloqueios": {
    "5": {
     "pt": "30% de chance de congelar por 15s",
     "en": "30% chance to freeze for 15s"
    }
   }
  },
  {
   "id": "mestre_do_pesadelo",
   "aba": "combate",
   "ordem": 8,
   "nome": {
    "pt": "Mestre do Pesadelo",
    "en": "Nightmare Master"
   },
   "desc": {
    "pt": "Ataques aplicam escuridão ascendente e lentidão necrótica em mobs. O dano vai de 5 a 25 por segundo e a duração vai de 3s a 15s. Com outro mestre de efeito no nível 5, desbloqueia Fusão Elemental. Com os cinco no nível 5, desbloqueia Tempestade Interior.",
    "en": "Attacks apply ascending darkness and necrotic slow to mobs. Damage scales from 5 to 25 per second and duration from 3s to 15s. With another damage-over-time master at level 5, unlocks Elemental Fusion. With all five at level 5, unlocks Inner Storm."
   },
   "bonus": [
    {
     "id": "debuff_darkness_damage_per_second",
     "nome": {
      "pt": "Dano de escuridão por segundo",
      "en": "Darkness damage per second"
     },
     "porPonto": 5,
     "sufixo": {
      "pt": " dano/s",
      "en": " damage/s"
     }
    },
    {
     "id": "debuff_darkness_duration",
     "nome": {
      "pt": "Duração da escuridão",
      "en": "Darkness duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    },
    {
     "id": "debuff_necrotic_slow_duration",
     "nome": {
      "pt": "Duração da lentidão necrótica",
      "en": "Necrotic slow duration"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    }
   ],
   "desbloqueios": {
    "5": {
     "pt": "5% de chance de hitkill",
     "en": "5% hitkill chance"
    }
   }
  },
  {
   "id": "mestre_sangrento",
   "aba": "sobrevivencia",
   "ordem": 9,
   "nome": {
    "pt": "Mestre Sangrento",
    "en": "Blood Master"
   },
   "desc": {
    "pt": "Ajuda a recuperar vida com roubo de vida, cura por segundo até 3 pontos/s, cura fixa ao comer e cura baseada na vida atual ao derrotar mobs.",
    "en": "Helps recover health with lifesteal, healing per second up to 3 points/s, fixed healing when eating, and healing based on current health after defeating mobs."
   },
   "bonus": [
    {
     "id": "damage_lifesteal",
     "nome": {
      "pt": "Roubo de vida",
      "en": "Lifesteal"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "survival_heal_per_second",
     "nome": {
      "pt": "Cura por segundo",
      "en": "Heal per second"
     },
     "porPonto": 0.6,
     "sufixo": {
      "pt": " pontos",
      "en": " points"
     }
    },
    {
     "id": "passive_health_on_food",
     "nome": {
      "pt": "Vida ao Comer",
      "en": "Health on Food"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": " pontos",
      "en": " points"
     }
    },
    {
     "id": "passive_health_on_kill",
     "nome": {
      "pt": "Vida ao Abater",
      "en": "Health on Kill"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_da_resistencia",
   "aba": "sobrevivencia",
   "ordem": 10,
   "nome": {
    "pt": "Mestre da Resistência",
    "en": "Resistance Master"
   },
   "desc": {
    "pt": "Reduz dano físico e mágico recebido e aumenta resistência à repulsão.",
    "en": "Reduces incoming physical and magic damage and increases knockback resistance."
   },
   "bonus": [
    {
     "id": "survival_physical_resistance",
     "nome": {
      "pt": "Resistência física",
      "en": "Physical resistance"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "survival_magical_resistance",
     "nome": {
      "pt": "Resistência mágica",
      "en": "Magical resistance"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "survival_knockback_resistance",
     "nome": {
      "pt": "Resistência a repulsão",
      "en": "Knockback resistance"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_da_resistencia_elemental",
   "aba": "sobrevivencia",
   "ordem": 11,
   "nome": {
    "pt": "Mestre da Resistência Elemental",
    "en": "Elemental Resistance Master"
   },
   "desc": {
    "pt": "Reduz dano de fogo, aumenta resistência a sangramento e libera imunidades (veneno, fogo, gelo, lentidão e bloqueio de debuffs) conforme sobe de nível.",
    "en": "Reduces fire damage, increases bleed resistance, and unlocks immunities (poison, fire, frost, slow, and debuff blocking) as you level up."
   },
   "bonus": [
    {
     "id": "survival_fire_damage_reduction",
     "nome": {
      "pt": "Redução de dano de fogo",
      "en": "Fire damage reduction"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "survival_bleed_resistance",
     "nome": {
      "pt": "Resistência a sangramento",
      "en": "Bleed resistance"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {
    "1": {
     "pt": "Imunidade a veneno",
     "en": "Poison immunity"
    },
    "2": {
     "pt": "Imunidade a fogo",
     "en": "Fire immunity"
    },
    "3": {
     "pt": "Imunidade a gelo",
     "en": "Frost immunity"
    },
    "4": {
     "pt": "Imunidade à lentidão (Graça de Hermes)",
     "en": "Slow immunity (Hermes' Grace)"
    },
    "5": {
     "pt": "Remove e bloqueia debuffs no jogador",
     "en": "Removes and blocks debuffs on the player"
    }
   }
  },
  {
   "id": "mestre_colossal",
   "aba": "sobrevivencia",
   "ordem": 12,
   "nome": {
    "pt": "Mestre Colossal",
    "en": "Colossal Master"
   },
   "desc": {
    "pt": "Ao receber dano, ativa uma defesa temporária. A duração sobe com o nível (2s a 10s). Tem cooldown de 30 segundos.",
    "en": "When hit, triggers a temporary defense. Duration scales with level (2s to 10s). Has a 30-second cooldown."
   },
   "bonus": [
    {
     "id": "survival_temporary_invulnerability",
     "nome": {
      "pt": "Invulnerabilidade temporária",
      "en": "Temporary invulnerability"
     },
     "porPonto": 2,
     "sufixo": {
      "pt": " segundos",
      "en": " seconds"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_da_vitalidade",
   "aba": "sobrevivencia",
   "ordem": 13,
   "nome": {
    "pt": "Mestre da Vitalidade",
    "en": "Vitality Master"
   },
   "desc": {
    "pt": "Aumenta vida máxima, regeneração de vida e chance de sobreviver a golpe fatal.",
    "en": "Increases max health, health regen, and chance to survive a lethal hit."
   },
   "bonus": [
    {
     "id": "survival_max_health",
     "nome": {
      "pt": "Vida máxima",
      "en": "Max health"
     },
     "porPonto": 20,
     "sufixo": {
      "pt": " pontos",
      "en": " points"
     }
    },
    {
     "id": "survival_health_regen",
     "nome": {
      "pt": "Regeneração de vida",
      "en": "Health regeneration"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "survival_fatal_survival",
     "nome": {
      "pt": "Sobrevivência a dano fatal",
      "en": "Fatal survival"
     },
     "porPonto": 3,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {
    "1": {
     "pt": "Bênção Vital",
     "en": "Vital Blessing"
    }
   }
  },
  {
   "id": "mestre_da_defesa",
   "aba": "sobrevivencia",
   "ordem": 14,
   "nome": {
    "pt": "Mestre da Defesa",
    "en": "Defense Master"
   },
   "desc": {
    "pt": "Aumenta armadura e devolve parte do dano recebido com espinhos.",
    "en": "Increases armor and reflects part of incoming damage with thorns."
   },
   "bonus": [
    {
     "id": "survival_armor_defense_gain",
     "nome": {
      "pt": "Ganho de defesa pela armadura",
      "en": "Armor/defense gain"
     },
     "porPonto": 5,
     "sufixo": {
      "pt": " pontos de armadura",
      "en": " armor points"
     }
    },
    {
     "id": "survival_thorns",
     "nome": {
      "pt": "Espinhos",
      "en": "Thorns"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_resiliente",
   "aba": "sobrevivencia",
   "ordem": 15,
   "nome": {
    "pt": "Mestre Resiliente",
    "en": "Resilience Master"
   },
   "desc": {
    "pt": "Aumenta resiliência máxima, ganho de resiliência e velocidade de recarga da resiliência.",
    "en": "Increases max resilience, resilience gain, and resilience recharge speed."
   },
   "bonus": [
    {
     "id": "survival_max_resilience",
     "nome": {
      "pt": "Resiliência máxima",
      "en": "Max resilience"
     },
     "porPonto": 20,
     "sufixo": {
      "pt": " pontos",
      "en": " points"
     }
    },
    {
     "id": "survival_resilience_gain",
     "nome": {
      "pt": "Ganho de resiliência",
      "en": "Resilience gain"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "survival_resilience_regen_speed",
     "nome": {
      "pt": "Velocidade de recarga da resiliência",
      "en": "Resilience recharge speed"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_da_velocidade",
   "aba": "movimento",
   "ordem": 16,
   "nome": {
    "pt": "Mestre da Velocidade",
    "en": "Speed Master"
   },
   "desc": {
    "pt": "Aumenta velocidade de movimento, bônus de corrida e controle de mobilidade.",
    "en": "Increases movement speed, sprint bonus, and mobility control."
   },
   "bonus": [
    {
     "id": "movement_speed",
     "nome": {
      "pt": "Velocidade de movimento",
      "en": "Movement speed"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "movement_sprint_bonus",
     "nome": {
      "pt": "Bônus de corrida",
      "en": "Sprint bonus"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "movement_mobility_control",
     "nome": {
      "pt": "Controle de mobilidade",
      "en": "Mobility control"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_do_dash",
   "aba": "movimento",
   "ordem": 17,
   "nome": {
    "pt": "Mestre do Dash",
    "en": "Dash Master"
   },
   "desc": {
    "pt": "Aumenta cargas de dash e reduz a recarga do dash.",
    "en": "Increases dash charges and reduces dash cooldown."
   },
   "bonus": [
    {
     "id": "movement_dash_capacity",
     "nome": {
      "pt": "Capacidade de dash",
      "en": "Dash capacity"
     },
     "porPonto": 2,
     "sufixo": {
      "pt": " cargas de dash",
      "en": " dash charges"
     }
    },
    {
     "id": "movement_dash_cooldown",
     "nome": {
      "pt": "Recarga de dash",
      "en": "Dash cooldown"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_da_reducao",
   "aba": "movimento",
   "ordem": 18,
   "nome": {
    "pt": "Mestre da Redução",
    "en": "Reduction Master"
   },
   "desc": {
    "pt": "Reduz consumo de balas e flechas e reduz dano crítico recebido.",
    "en": "Reduces bullet and arrow usage and reduces incoming critical damage."
   },
   "bonus": [
    {
     "id": "reduced_bullet_usage",
     "nome": {
      "pt": "Menor consumo de munição",
      "en": "Reduced bullet usage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "reduced_arrow_usage",
     "nome": {
      "pt": "Menor consumo de flechas",
      "en": "Reduced arrow usage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "survival_critical_damage_reduction",
     "nome": {
      "pt": "Redução de dano crítico",
      "en": "Critical damage reduction"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_das_cavernas",
   "aba": "utilidade",
   "ordem": 19,
   "nome": {
    "pt": "Mestre das Cavernas",
    "en": "Cavern Master"
   },
   "desc": {
    "pt": "Melhora mineração, alcance de mineração e visão de cavernas. No nível 5 libera a compra do Minerador Explosivo na Loja.",
    "en": "Improves mining, mining range, and cave vision. Level 5 unlocks Explosive Miner purchase in the Shop."
   },
   "bonus": [
    {
     "id": "bonus_mining_speed",
     "nome": {
      "pt": "Velocidade de mineração",
      "en": "Mining speed"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "bonus_mining_range",
     "nome": {
      "pt": "Alcance de mineração",
      "en": "Mining range"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": " tiles",
      "en": " tiles"
     }
    },
    {
     "id": "bonus_underground_visibility",
     "nome": {
      "pt": "Visão de cavernas",
      "en": "Cave vision"
     },
     "faixas": [
      {
       "pt": "Ativo",
       "en": "Active"
      },
      {
       "pt": "Ativo",
       "en": "Active"
      },
      {
       "pt": "Ativo",
       "en": "Active"
      },
      {
       "pt": "Ativo",
       "en": "Active"
      },
      {
       "pt": "Ativo",
       "en": "Active"
      }
     ]
    }
   ],
   "desbloqueios": {
    "1": {
     "pt": "Ruína da Escuridão e Minerador de Veios",
     "en": "Ruin of Darkness and Vein Miner"
    },
    "5": {
     "pt": "Desbloqueio na Loja: compra do Minerador Explosivo (exige nível 5)",
     "en": "Shop unlock: Explosive Miner purchase (requires level 5)"
    }
   }
  },
  {
   "id": "mestre_da_construcao",
   "aba": "utilidade",
   "ordem": 20,
   "nome": {
    "pt": "Mestre da Construção",
    "en": "Construction Master"
   },
   "desc": {
    "pt": "Melhora velocidade de construção, alcance de interação, alcance de construção e visão de biomas no mapa.",
    "en": "Improves building speed, interaction range, build range, and biome map vision."
   },
   "bonus": [
    {
     "id": "bonus_building_speed",
     "nome": {
      "pt": "Velocidade de construção",
      "en": "Building speed"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "bonus_interaction_range",
     "nome": {
      "pt": "Alcance de interação",
      "en": "Interaction range"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": " tiles",
      "en": " tiles"
     }
    },
    {
     "id": "bonus_build_range",
     "nome": {
      "pt": "Alcance de construção",
      "en": "Build range"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": " tiles",
      "en": " tiles"
     }
    },
    {
     "id": "bonus_biome_map_vision",
     "nome": {
      "pt": "Biomas visíveis no mapa",
      "en": "Biome map vision"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_arcano",
   "aba": "utilidade",
   "ordem": 21,
   "nome": {
    "pt": "Mestre Arcano",
    "en": "Arcane Master"
   },
   "desc": {
    "pt": "Aumenta mana máxima, regeneração de mana em porcentagem, regeneração fixa de mana até 3 pontos/s e reduz consumo de mana.",
    "en": "Increases max mana, percent mana regen, flat mana regen up to 3/s, and reduces mana cost."
   },
   "bonus": [
    {
     "id": "mysticism_max_mana",
     "nome": {
      "pt": "Mana máxima",
      "en": "Max mana"
     },
     "porPonto": 20,
     "sufixo": {
      "pt": " pontos",
      "en": " points"
     }
    },
    {
     "id": "mysticism_mana_regen",
     "nome": {
      "pt": "Regeneração de mana",
      "en": "Mana regeneration"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "mysticism_mana_regen_flat",
     "nome": {
      "pt": "Regeneração fixa de mana",
      "en": "Flat mana regeneration"
     },
     "porPonto": 0.6,
     "sufixo": {
      "pt": " pontos",
      "en": " points"
     }
    },
    {
     "id": "mysticism_mana_usage",
     "nome": {
      "pt": "Consumo de mana",
      "en": "Mana usage"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {
    "1": {
     "pt": "Escriba Imortal (pergaminhos de encantamento não são consumidos)",
     "en": "Immortal Scribe (enchant scrolls are not consumed)"
    }
   }
  },
  {
   "id": "mestre_da_riqueza",
   "aba": "utilidade",
   "ordem": 22,
   "nome": {
    "pt": "Mestre da Riqueza",
    "en": "Wealth Master"
   },
   "desc": {
    "pt": "Aumenta ouro encontrado, ganho de ouro e concede Golpe de Ouro, que dá ouro ao acertar inimigos.",
    "en": "Increases gold find, gold gain, and grants Gold Strike, which gives gold when hitting enemies."
   },
   "bonus": [
    {
     "id": "bonus_gold_find",
     "nome": {
      "pt": "Ouro encontrado",
      "en": "Gold find"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "bonus_gold_gain",
     "nome": {
      "pt": "Ganho de ouro",
      "en": "Gold gain"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "passive_gold_on_hit",
     "nome": {
      "pt": "Golpe de Ouro",
      "en": "Gold Strike"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": " ouro",
      "en": " gold"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_do_loot",
   "aba": "utilidade",
   "ordem": 23,
   "nome": {
    "pt": "Mestre do Loot",
    "en": "Loot Master"
   },
   "desc": {
    "pt": "Melhora qualidade de loot, dá chance de loot em dobro (até 2x) e chance de saque total ao matar mobs. No nível 5, criar itens tem 50% de chance de não gastar os ingredientes.",
    "en": "Improves loot quality, gives a chance of double loot (up to 2x), and a full drop chance when killing mobs. At level 5, crafting has a 50% chance to not use up the ingredients."
   },
   "bonus": [
    {
     "id": "bonus_loot_quality",
     "nome": {
      "pt": "Qualidade de loot",
      "en": "Loot quality"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "bonus_loot_gain",
     "nome": {
      "pt": "Multiplicação de loot",
      "en": "Loot multiplier"
     },
     "faixas": [
      {
       "pt": "+20% de chance de receber 2x o item",
       "en": "+20% chance to receive 2x the item"
      },
      {
       "pt": "+40% de chance de receber 2x o item",
       "en": "+40% chance to receive 2x the item"
      },
      {
       "pt": "+60% de chance de receber 2x o item",
       "en": "+60% chance to receive 2x the item"
      },
      {
       "pt": "+80% de chance de receber 2x o item",
       "en": "+80% chance to receive 2x the item"
      },
      {
       "pt": "+100% de chance de receber 2x o item",
       "en": "+100% chance to receive 2x the item"
      }
     ]
    },
    {
     "id": "passive_all_drop_chance_on_kill",
     "nome": {
      "pt": "Saque Total",
      "en": "Full Loot Chance"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {
    "5": {
     "pt": "Artesão Econômico (50% de chance de não gastar os ingredientes ao criar)",
     "en": "Thrifty Artisan (50% chance to not use up the ingredients when crafting)"
    }
   }
  },
  {
   "id": "mestre_das_reliquias",
   "aba": "utilidade",
   "ordem": 24,
   "nome": {
    "pt": "Mestre das Relíquias",
    "en": "Relic Master"
   },
   "desc": {
    "pt": "Aumenta slots extras de trinket e alcance de coleta de itens.",
    "en": "Increases extra trinket slots and item pickup range."
   },
   "bonus": [
    {
     "id": "bonus_max_trinkets",
     "nome": {
      "pt": "Máximo de trinkets",
      "en": "Max trinkets"
     },
     "porPonto": 4,
     "sufixo": {
      "pt": " slots",
      "en": " slots"
     }
    },
    {
     "id": "bonus_item_pickup_range",
     "nome": {
      "pt": "Alcance de coleta de itens",
      "en": "Item pickup range"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": " tiles",
      "en": " tiles"
     }
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_dos_reinos",
   "aba": "utilidade",
   "ordem": 25,
   "nome": {
    "pt": "Mestre dos Reinos",
    "en": "Realm Master"
   },
   "desc": {
    "pt": "Melhora assentamentos: garante felicidade mínima dos colonos e reduz preços de lojas e contratos.",
    "en": "Improves settlements: guarantees a minimum settler happiness and reduces shop and contract prices."
   },
   "bonus": [
    {
     "id": "bonus_settlement_happiness",
     "nome": {
      "pt": "Felicidade nos assentamentos",
      "en": "Settlement happiness"
     },
     "porPonto": 20,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    },
    {
     "id": "bonus_settlement_shop_discount",
     "nome": {
      "pt": "Desconto nas lojas dos colonos",
      "en": "Colony shop discount"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {
    "5": {
     "pt": "QoL Inigualável, bloqueio de greve, XP de tarefas x3, Aura de Liderança e Administração Eficiente",
     "en": "Unrivaled QoL, strike block, settlement task XP x3, Leadership Aura, and Efficient Administration"
    }
   }
  },
  {
   "id": "mestre_dos_mares",
   "aba": "utilidade",
   "ordem": 26,
   "nome": {
    "pt": "Mestre dos Mares",
    "en": "Sea Master"
   },
   "desc": {
    "pt": "Aumenta poder de pesca, linhas extras e velocidade de nado. Também ajuda as linhas a pescarem com mais consistência. No nível 1 libera o Reflexo do Pescador para pesca AFK.",
    "en": "Increases fishing power, extra fishing lines, and swim speed. Also helps lines catch fish more consistently. At level 1 unlocks Angler's Reflex for AFK fishing."
   },
   "bonus": [
    {
     "id": "bonus_fishing_power",
     "nome": {
      "pt": "Poder de pesca",
      "en": "Fishing power"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "",
      "en": ""
     }
    },
    {
     "id": "bonus_fishing_lines",
     "nome": {
      "pt": "Linhas extras",
      "en": "Extra fishing lines"
     },
     "porPonto": 2,
     "sufixo": {
      "pt": " linhas",
      "en": " lines"
     }
    },
    {
     "id": "movement_swim_speed",
     "nome": {
      "pt": "Velocidade de nado",
      "en": "Swim speed"
     },
     "porPonto": 10,
     "sufixo": {
      "pt": "%",
      "en": "%"
     }
    }
   ],
   "desbloqueios": {
    "1": {
     "pt": "Reflexo do Pescador (captura e nova lançada automáticas)",
     "en": "Angler's Reflex (auto catch and recast)"
    }
   }
  },
  {
   "id": "mestre_gourmet",
   "aba": "sobrevivencia",
   "ordem": 27,
   "nome": {
    "pt": "Mestre Gourmet",
    "en": "Gourmet Master"
   },
   "desc": {
    "pt": "Aumenta a duração dos buffs de comida por nível: 25%, 50%, 75%, 100% e 300%.",
    "en": "Increases food buff duration per level: 25%, 50%, 75%, 100%, and 300%."
   },
   "bonus": [
    {
     "id": "passive_food_buff_duration",
     "nome": {
      "pt": "Duração de comida",
      "en": "Food buff duration"
     },
     "faixas": [
      {
       "pt": "+25%",
       "en": "+25%"
      },
      {
       "pt": "+50%",
       "en": "+50%"
      },
      {
       "pt": "+75%",
       "en": "+75%"
      },
      {
       "pt": "+100%",
       "en": "+100%"
      },
      {
       "pt": "+300%",
       "en": "+300%"
      }
     ]
    }
   ],
   "desbloqueios": {
    "5": {
     "pt": "Barriga Sempre Cheia (come automaticamente abaixo de 95% de fome)",
     "en": "Always Full (auto-eats below 95% hunger)"
    }
   }
  },
  {
   "id": "mestre_da_alquimia",
   "aba": "sobrevivencia",
   "ordem": 28,
   "nome": {
    "pt": "Mestre da Alquimia",
    "en": "Alchemy Master"
   },
   "desc": {
    "pt": "Aumenta a duração dos buffs de poções por nível: 25%, 50%, 75%, 100% e 300%. Também afeta o Frasco Fedorento.",
    "en": "Increases potion buff duration per level: 25%, 50%, 75%, 100%, and 300%. Also affects Stink Flask."
   },
   "bonus": [
    {
     "id": "passive_potion_buff_duration",
     "nome": {
      "pt": "Duração de poção",
      "en": "Potion buff duration"
     },
     "faixas": [
      {
       "pt": "+25%",
       "en": "+25%"
      },
      {
       "pt": "+50%",
       "en": "+50%"
      },
      {
       "pt": "+75%",
       "en": "+75%"
      },
      {
       "pt": "+100%",
       "en": "+100%"
      },
      {
       "pt": "+300%",
       "en": "+300%"
      }
     ]
    }
   ],
   "desbloqueios": {
    "5": {
     "pt": "Auto Poção (em até 50% de vida, usa poções até encher)",
     "en": "Auto Potion (at or below 50% HP, uses potions until full)"
    }
   }
  },
  {
   "id": "mestre_do_rancho",
   "aba": "utilidade",
   "ordem": 29,
   "nome": {
    "pt": "Mestre do Rancho",
    "en": "Ranch Master"
   },
   "desc": {
    "pt": "Acelera domesticação, procriação e crescimento de filhotes em 25%, 50%, 75% e 100%.",
    "en": "Speeds up taming, breeding, and baby growth by 25%, 50%, 75%, and 100%."
   },
   "bonus": [
    {
     "id": "passive_ranch_speed",
     "nome": {
      "pt": "Velocidade do rancho",
      "en": "Ranch speed"
     },
     "faixas": [
      {
       "pt": "+25%",
       "en": "+25%"
      },
      {
       "pt": "+50%",
       "en": "+50%"
      },
      {
       "pt": "+75%",
       "en": "+75%"
      },
      {
       "pt": "+100%",
       "en": "+100%"
      },
      {
       "pt": "+100% e 5x drops na zona de criação",
       "en": "+100% and 5x drops in the husbandry zone"
      }
     ]
    }
   ],
   "desbloqueios": {
    "5": {
     "pt": "Animais de rancho mortos na zona de criação dropam 5x mais itens",
     "en": "Ranch animals killed in the breeding zone drop 5x more items"
    }
   }
  },
  {
   "id": "mestre_das_maquinas",
   "aba": "utilidade",
   "ordem": 30,
   "nome": {
    "pt": "Mestre das Máquinas",
    "en": "Machine Master"
   },
   "desc": {
    "pt": "Define tempos por nível: fornalha 6s/5s/4s/3s/2s, prensa 45s/35s/20s/10s/2s, composteira 30s/20s/10s/5s/2s, moinho 10s/8s/6s/4s/2s e incinerador mais rápido. Com a classe ativa, o incinerador queima um pack inteiro por ciclo. Tronco na fornalha dura 80s/120s/240s/360s/600s.",
    "en": "Sets times by level: furnace 6s/5s/4s/3s/2s, press 45s/35s/20s/10s/2s, compost bin 30s/20s/10s/5s/2s, mill 10s/8s/6s/4s/2s, and a faster incinerator. With the class active, the incinerator burns one full pack per cycle. Log in furnace lasts 80s/120s/240s/360s/600s."
   },
   "bonus": [
    {
     "id": "passive_machine_processing_speed",
     "nome": {
      "pt": "Velocidade das máquinas",
      "en": "Machine speed"
     },
     "faixas": [
      {
       "pt": "Fornalha 6s, prensa 45s, composteira 30s, moinho 10s",
       "en": "Furnace 6s, press 45s, compost bin 30s, mill 10s"
      },
      {
       "pt": "Fornalha 5s, prensa 35s, composteira 20s, moinho 8s",
       "en": "Furnace 5s, press 35s, compost bin 20s, mill 8s"
      },
      {
       "pt": "Fornalha 4s, prensa 20s, composteira 10s, moinho 6s",
       "en": "Furnace 4s, press 20s, compost bin 10s, mill 6s"
      },
      {
       "pt": "Fornalha 3s, prensa 10s, composteira 5s, moinho 4s",
       "en": "Furnace 3s, press 10s, compost bin 5s, mill 4s"
      },
      {
       "pt": "Fornalha, prensa, composteira, moinho e incinerador em 2s; queima um pacote por ciclo",
       "en": "Furnace, press, compost bin, mill and incinerator at 2s; burns one pack per cycle"
      }
     ]
    },
    {
     "id": "passive_machine_fuel_duration",
     "nome": {
      "pt": "Duração do combustível",
      "en": "Fuel duration"
     },
     "faixas": [
      {
       "pt": "Tronco na fornalha dura 80s",
       "en": "Log in furnace lasts 80s"
      },
      {
       "pt": "Tronco na fornalha dura 120s",
       "en": "Log in furnace lasts 120s"
      },
      {
       "pt": "Tronco na fornalha dura 240s",
       "en": "Log in furnace lasts 240s"
      },
      {
       "pt": "Tronco na fornalha dura 360s",
       "en": "Log in furnace lasts 360s"
      },
      {
       "pt": "Tronco na fornalha dura 600s",
       "en": "Log in furnace lasts 600s"
      }
     ]
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_da_natureza",
   "aba": "utilidade",
   "ordem": 31,
   "nome": {
    "pt": "Mestre da Natureza",
    "en": "Nature Master"
   },
   "desc": {
    "pt": "Acelera plantações e cultivos (incluindo cogumelos plantáveis), mudas, árvores frutíferas e arbustos com frutas dentro dos assentamentos do jogador ou do time em 25%, 50%, 75%, 100% e 300%.",
    "en": "Speeds up crops and plantings (including plantable mushrooms), saplings, fruit trees, and berry bushes inside owned or team settlements by 25%, 50%, 75%, 100%, and 300%."
   },
   "bonus": [
    {
     "id": "passive_nature_growth_speed",
     "nome": {
      "pt": "Crescimento no assentamento",
      "en": "Settlement growth"
     },
     "faixas": [
      {
       "pt": "+25%",
       "en": "+25%"
      },
      {
       "pt": "+50%",
       "en": "+50%"
      },
      {
       "pt": "+75%",
       "en": "+75%"
      },
      {
       "pt": "+100%",
       "en": "+100%"
      },
      {
       "pt": "+300%",
       "en": "+300%"
      }
     ]
    }
   ],
   "desbloqueios": {}
  },
  {
   "id": "mestre_das_armadilhas",
   "aba": "utilidade",
   "ordem": 32,
   "nome": {
    "pt": "Mestre das Armadilhas",
    "en": "Trap Master"
   },
   "desc": {
    "pt": "Melhora armadilhas em assentamentos a cada nível: mais dano, proteção de aliados e efeitos extras.",
    "en": "Improves settlement traps each level: more damage, ally protection, and extra effects."
   },
   "bonus": [
    {
     "id": "passive_trap_mastery",
     "nome": {
      "pt": "Domínio de armadilhas",
      "en": "Trap mastery"
     },
     "faixas": [
      {
       "pt": "+150% dano de armadilhas em assentamentos",
       "en": "+150% trap damage in settlements"
      },
      {
       "pt": "+150% de dano em assentamentos e -50% de dano de armadilhas em aliados fora dos assentamentos",
       "en": "+150% settlement damage and -50% trap damage to allies outside settlements"
      },
      {
       "pt": "+300% dano de armadilhas em assentamentos",
       "en": "+300% trap damage in settlements"
      },
      {
       "pt": "+300% dano e imunidade aliada em assentamentos",
       "en": "+300% damage and ally immunity in settlements"
      },
      {
       "pt": "Engenharia de Defesa: armadilhas em assentamentos aplicam sangramento",
       "en": "Defense Engineering: settlement traps apply bleed"
      }
     ]
    }
   ],
   "desbloqueios": {
    "5": {
     "pt": "Armadilhas em assentamentos aplicam sangramento (Engenharia de Defesa)",
     "en": "Settlement traps apply bleed (Defense Engineering)"
    }
   }
  },
  {
   "id": "mestre_da_necromancia",
   "aba": "necromancia",
   "ordem": 33,
   "nome": {
    "pt": "Mestre da Necromancia",
    "en": "Necromancy Master"
   },
   "desc": {
    "pt": "Invoca monstros que você já derrotou como lacaios permanentes. Os lacaios sobem até o nível 100 lutando e podem receber Maestria. Cada nível da classe libera mais do ritual.",
    "en": "Summon monsters you have defeated as permanent minions. Minions level up to 100 by fighting and can receive Mastery. Each class level unlocks more of the ritual."
   },
   "bonus": [
    {
     "id": "passive_necromancy_mastery",
     "nome": {
      "pt": "Domínio da necromancia",
      "en": "Necromancy mastery"
     },
     "faixas": [
      {
       "pt": "1 slot de ritual, monstros comuns; lacaios sobem até o nível 100",
       "en": "1 ritual slot, common monsters; minions level up to 100"
      },
      {
       "pt": "2 slots de ritual, elites, +25% de XP dos lacaios",
       "en": "2 ritual slots, elites, +25% minion XP"
      },
      {
       "pt": "3 slots de ritual, Elo Sombrio e bônus de grupo",
       "en": "3 ritual slots, Shadow Link and group bonus"
      },
      {
       "pt": "3 slots de ritual e 1 chefe invocado",
       "en": "3 ritual slots and 1 summoned boss"
      },
      {
       "pt": "Exército dos Mortos e Ascensão",
       "en": "Army of the Dead and Ascension"
      }
     ]
    }
   ],
   "desbloqueios": {
    "1": {
     "pt": "1 slot de ritual e monstros comuns; lacaios sobem até o nível 100 e recebem Maestria",
     "en": "1 ritual slot and common monsters; minions level up to 100 and earn Mastery"
    },
    "2": {
     "pt": "Segundo slot de ritual, monstros elite e +25% de XP dos lacaios",
     "en": "2nd ritual slot, elite monsters and +25% minion XP"
    },
    "3": {
     "pt": "Terceiro slot de ritual, Elo Sombrio (lacaios recebem metade do seu bônus de dano de invocação) e bônus de grupo (3 lacaios iguais = +50% de dano contra aquele monstro)",
     "en": "3rd ritual slot, Shadow Link (minions get half of your summon damage bonus) and group bonus (3 equal minions = +50% damage against that monster)"
    },
    "4": {
     "pt": "Invoca 1 chefe derrotado como lacaio (com 40% do poder dele)",
     "en": "Summon 1 defeated boss as a minion (40% of its power)"
    },
    "5": {
     "pt": "Exército dos Mortos (50% de chance de levantar um inimigo abatido por 1 minuto, até 3) e Ascensão (+25% de dano para lacaios com Maestria)",
     "en": "Army of the Dead (50% chance to raise a fallen enemy for 1 minute, up to 3) and Ascension (+25% damage for minions with Mastery)"
    }
   }
  }
 ],
 "passivas": [
  {
   "id": "vein",
   "nome": {
    "pt": "Minerador de Veios",
    "en": "Vein Miner"
   },
   "desc": {
    "pt": "Passiva exclusiva da classe Mestre das Cavernas: ao minerar somente minérios ou trilhos próximos, outros blocos da mesma veia ou linha também são minerados automaticamente. O modo avançado pode ser ligado nas opções de controles.",
    "en": "Exclusive passive of the Cavern Master class: when you mine only contiguous ore or rails, the other blocks in the same vein or rail line are mined automatically too (rails: up to 20 automated breaks per burst). Optionally, a controls binding toggles advanced mode to chain-mine the same type of floors, plants, flowers, bushes, trees, walls, rocks, and clay (up to 20 per burst)."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 1 da classe Mestre das Cavernas.",
    "en": "Unlocked naturally at Cavern Master class level 1."
   }
  },
  {
   "id": "eagle_eye",
   "nome": {
    "pt": "Olho de Águia",
    "en": "Eagle Eye"
   },
   "desc": {
    "pt": "Passiva da classe Mestre Atirador: no nível 1, destaca inimigos e animais próximos sem iluminar o mapa.",
    "en": "Passive for Marksman Master: at level 1, highlights nearby enemies and animals without creating light."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 1 da classe Mestre Atirador.",
    "en": "Unlocked naturally at Marksman Master class level 1."
   }
  },
  {
   "id": "angler_reflex",
   "nome": {
    "pt": "Reflexo do Pescador",
    "en": "Angler's Reflex"
   },
   "desc": {
    "pt": "Passiva exclusiva da classe Mestre dos Mares: quando um peixe morde, a captura é puxada automaticamente e a vara é lançada de novo no mesmo ponto (pesca AFK). Linhas extras e bônus de pesca continuam valendo.",
    "en": "Exclusive passive of the Sea Master class: when a fish bites, the catch is reeled in automatically and the rod is cast again at the same spot (AFK fishing). Extra fishing lines and fishing bonuses still apply."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 1 da classe Mestre dos Mares.",
    "en": "Unlocked naturally at Sea Master class level 1."
   }
  },
  {
   "id": "colossal",
   "nome": {
    "pt": "Proteção Colossal",
    "en": "Colossal Protection"
   },
   "desc": {
    "pt": "Passiva da classe Mestre Colossal: ao receber dano, ativa uma defesa temporária. A duração aumenta com o nível da classe. Cooldown de 30 segundos.",
    "en": "Passive of the Colossal Master class: when hit, triggers a temporary defense. Duration increases with class level. 30-second cooldown."
   },
   "como": {
    "pt": "Desbloqueada naturalmente a partir do nível 1 da classe Mestre Colossal.",
    "en": "Unlocked naturally from Colossal Master class level 1."
   }
  },
  {
   "id": "master_classes",
   "nome": {
    "pt": "Mestre das Classes",
    "en": "Master of Classes"
   },
   "desc": {
    "pt": "Passiva final: quando todas as classes ativas chegam ao nível 5, o jogador ganha partículas brancas ao redor e rastro ao caminhar.",
    "en": "Final passive: when all enabled classes reach level 5, the player gains white particles around them and a trail while moving."
   },
   "como": {
    "pt": "Desbloqueada quando todas as classes ativas estiverem no nível 5.",
    "en": "Unlocked when all enabled classes reach level 5."
   }
  },
  {
   "id": "vitalista_potion",
   "nome": {
    "pt": "Bênção Vital",
    "en": "Vital Blessing"
   },
   "desc": {
    "pt": "Passiva exclusiva da classe Mestre da Vitalidade: no nível 1, enquanto um efeito de poção de vida estiver ativo, concede cura extra por segundo que escala com os pontos de Vitalidade.",
    "en": "Exclusive passive of the Vitality Master class: at level 1, while a health potion effect is active, grants extra healing per second that scales with Vitality Master points."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 1 da classe Mestre da Vitalidade.",
    "en": "Unlocked naturally at Vitality Master class level 1."
   }
  },
  {
   "id": "alchemy_potion",
   "nome": {
    "pt": "Auto Poção",
    "en": "Auto Potion"
   },
   "desc": {
    "pt": "Passiva da classe Mestre da Alquimia: no nível 5, quando a vida está até 50% da máxima, usa automaticamente poções de vida do inventário até encher.",
    "en": "Alchemy Master passive: at level 5, when health is at or below 50% of maximum, automatically uses health potions from inventory until full."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 5 da classe Mestre da Alquimia.",
    "en": "Unlocked naturally at Alchemy Master class level 5."
   }
  },
  {
   "id": "full_belly",
   "nome": {
    "pt": "Barriga Sempre Cheia",
    "en": "Always Full"
   },
   "desc": {
    "pt": "Passiva da classe Mestre Gourmet: no nível 5, come automaticamente comida do inventário quando a fome fica abaixo de 95%.",
    "en": "Gourmet Master passive: at level 5, automatically eats food from inventory when hunger falls below 95%."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 5 da classe Mestre Gourmet.",
    "en": "Unlocked naturally at Gourmet Master class level 5."
   }
  },
  {
   "id": "ranch_drops",
   "nome": {
    "pt": "Colheita do Rancho",
    "en": "Ranch Harvest"
   },
   "desc": {
    "pt": "Passiva da classe Mestre do Rancho: no nível 5, animais de rancho mortos na zona de criação dropam 5x mais itens.",
    "en": "Ranch Master passive: at level 5, ranch animals killed in the breeding zone drop 5x more items."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 5 da classe Mestre do Rancho.",
    "en": "Unlocked naturally at Ranch Master class level 5."
   }
  },
  {
   "id": "combat_master",
   "nome": {
    "pt": "Deus do Dano",
    "en": "Damage God"
   },
   "desc": {
    "pt": "Passiva das classes Mestre da Guerra, Mestre Atirador, Mestre da Magia e Mestre Invocador: com as quatro no nível 5, concede +50% de dano total.",
    "en": "Passive for War Master, Marksman Master, Magic Master, and Summon Master: when all four reach level 5, grants +50% total damage."
   },
   "como": {
    "pt": "Desbloqueada quando as quatro classes de combate estiverem no nível 5.",
    "en": "Unlocked when all four combat classes reach level 5."
   }
  },
  {
   "id": "elemental_fusion",
   "nome": {
    "pt": "Fusão Elemental",
    "en": "Elemental Fusion"
   },
   "desc": {
    "pt": "Passiva dos mestres de efeito: com dois deles no nível 5, os acertos combinam os efeitos (estilhaço, praga, combustão tóxica, hemorragia gelada ou medo).",
    "en": "Passive for the damage-over-time masters: with two of them at level 5, hits combine their effects (shatter, plague, toxic combustion, frozen hemorrhage, or fear)."
   },
   "como": {
    "pt": "Desbloqueada quando dois mestres de efeito que formam um par estão no nível 5.",
    "en": "Unlocked when two damage-over-time masters that form a pair are both at level 5."
   }
  },
  {
   "id": "inner_storm",
   "nome": {
    "pt": "Tempestade Interior",
    "en": "Inner Storm"
   },
   "desc": {
    "pt": "Passiva dos mestres Sanguinário, Incendiário, Venenoso, Congelante e do Pesadelo: com os cinco no nível 5, os efeitos contínuos causam +50% de dano.",
    "en": "Passive for Bloodthirsty, Incendiary, Venomous, Freezing, and Nightmare masters: when all five reach level 5, damage-over-time effects deal +50% damage."
   },
   "como": {
    "pt": "Desbloqueada quando os cinco mestres de efeito contínuo estão no nível 5.",
    "en": "Unlocked when all five damage-over-time masters reach level 5."
   }
  },
  {
   "id": "enchant_scroll",
   "nome": {
    "pt": "Escriba Imortal",
    "en": "Immortal Scribe"
   },
   "desc": {
    "pt": "Passiva exclusiva da classe Mestre Arcano: no nível 1, pergaminhos de encantamento deixam de ser consumidos ao serem usados.",
    "en": "Exclusive passive of the Arcane Master class: at level 1, enchanting scrolls are no longer consumed when used."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 1 da classe Mestre Arcano.",
    "en": "Unlocked naturally at Arcane Master class level 1."
   }
  },
  {
   "id": "trinket",
   "nome": {
    "pt": "Ruína da Escuridão",
    "en": "Dark Ruin"
   },
   "desc": {
    "pt": "Passiva exclusiva da classe Mestre das Cavernas: no nível 1, aumenta a luz de trinkets luminosos de 135 para 250. Não cria luz sem trinket luminoso.",
    "en": "Exclusive passive of the Cavern Master class: at level 1, Dark Ruin increases light from luminous trinkets from 135 to 250. It does not create light without a luminous trinket."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 1 da classe Mestre das Cavernas.",
    "en": "Unlocked naturally at Cavern Master class level 1."
   }
  },
  {
   "id": "hermes",
   "nome": {
    "pt": "Graça de Hermes",
    "en": "Grace of Hermes"
   },
   "desc": {
    "pt": "Passiva da classe Mestre da Resistência Elemental: no nível 4, concede imunidade à lentidão. No nível 5, remove e bloqueia debuffs no jogador.",
    "en": "Passive for Elemental Resistance Master: at level 4, grants slow immunity. At level 5, removes and blocks debuffs on the player."
   },
   "como": {
    "pt": "Desbloqueada naturalmente a partir do nível 4 da classe Mestre da Resistência Elemental.",
    "en": "Unlocked naturally from Elemental Resistance Master class level 4."
   }
  },
  {
   "id": "gold_on_hit",
   "nome": {
    "pt": "Golpe de Ouro",
    "en": "Gold Strike"
   },
   "desc": {
    "pt": "Passiva da classe Mestre da Riqueza: cada nível aumenta o ouro ganho ao acertar inimigos, até 50 ouro por acerto no nível 5.",
    "en": "Passive for Wealth Master: each level increases gold gained when hitting enemies, up to 50 gold per hit at level 5."
   },
   "como": {
    "pt": "Ativa naturalmente conforme você investe pontos na classe Mestre da Riqueza.",
    "en": "Active naturally as you invest points in the Wealth Master class."
   }
  },
  {
   "id": "leadership_aura",
   "nome": {
    "pt": "Aura de Liderança",
    "en": "Leadership Aura"
   },
   "desc": {
    "pt": "Passiva da classe Mestre dos Reinos: no nível 5, colonos recebem +15% de dano, vida, redução de dano e velocidade. Se o colono tiver personalidade Guerreiro/Atirador/Mago/Invocador alinhada à sua classe, a aura fica 50% mais forte nele. A Administração Eficiente também faz colonos trabalharem 50% mais rápido.",
    "en": "Passive for Realm Master: at level 5, colonists gain +15% damage, health, damage reduction and movement speed. If a colonist has a Warrior/Ranger/Magician/Summoner personality aligned with your class, the aura is 50% stronger on them. Efficient Administration also makes colonists work 50% faster."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 5 da classe Mestre dos Reinos.",
    "en": "Unlocked naturally at level 5 of the Realm Master class."
   }
  },
  {
   "id": "trap_master",
   "nome": {
    "pt": "Engenharia de Defesa",
    "en": "Defensive Engineering"
   },
   "desc": {
    "pt": "Passiva da classe Mestre das Armadilhas: no nível 5, armadilhas em assentamentos aplicam sangramento nos inimigos atingidos.",
    "en": "Passive for Trap Master: at level 5, traps inside settlements apply bleeding to enemies they hit."
   },
   "como": {
    "pt": "Desbloqueada naturalmente no nível 5 da classe Mestre das Armadilhas.",
    "en": "Unlocked naturally at level 5 of Trap Master."
   }
  },
  {
   "id": "settlement_leader",
   "nome": {
    "pt": "Líder do Assentamento",
    "en": "Settlement Leader"
   },
   "desc": {
    "pt": "No nível 5 do Mestre dos Reinos: garante qualidade de vida Inigualável, bloqueia greves de humor e triplica o XP de tarefas do assentamento (com limite por minuto). Colonos com 6+ personalidades dão ainda mais XP de assentamento.",
    "en": "At Realm Master level 5: guaranteed Unrivaled quality of life, blocks mood strikes, and triples settlement task XP (with a per-minute cap). Settlers with 6+ personalities grant even more settlement XP."
   },
   "como": {
    "pt": "Desbloqueado naturalmente no nível 5 da classe Mestre dos Reinos.",
    "en": "Unlocked naturally at level 5 of the Realm Master class."
   }
  },
  {
   "id": "rich_administration",
   "nome": {
    "pt": "Administração Rica",
    "en": "Rich Administration"
   },
   "desc": {
    "pt": "Informativo: colonos com 6 ou mais personalidades concedem 50% a mais de XP de tarefas e recrutamento do assentamento (antes do limite por minuto).",
    "en": "Informational: settlers with 6 or more personalities grant 50% more settlement task and recruitment XP (before the per-minute cap)."
   },
   "como": {
    "pt": "Informação permanente sobre colonos muito personalizados; não precisa comprar.",
    "en": "Permanent information about highly personalized settlers; no purchase required."
   }
  },
  {
   "id": "incursion_specialist",
   "nome": {
    "pt": "Especialista em Incursão",
    "en": "Incursion Specialist"
   },
   "desc": {
    "pt": "Informativo: incursões de alto nível (como Sucata / nível 8+) usam as zonas de XP mais fortes do mod. Combine com buffs de XP da loja no fim de jogo.",
    "en": "Informational: high-tier incursions (such as Scrapyard / tier 8+) use the mod's strongest XP zones. Pair with shop XP buffs for late-game."
   },
   "como": {
    "pt": "Informação permanente sobre progressão de incursão; não precisa comprar.",
    "en": "Permanent information about incursion progression; no purchase required."
   }
  }
 ]
};
