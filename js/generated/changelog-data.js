/* Gerado por tools/build.py a partir de release-notes/*.md. Não edite à mão. */
window.RPG_CHANGELOG = [
  {
    "version": "4.6",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 4.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Aba Reino:</strong> nova aba no menu do assentamento.",
            "<strong>Aba Reino:</strong> a visão geral mostra quantos colonos você tem e quantos têm cama, arma, armadura completa e conjunto completo.",
            "<strong>Aba Reino:</strong> a visão geral mostra quantos colonos estão fora do assentamento.",
            "<strong>Aba Reino:</strong> barras coloridas mostram o que os colonos estão fazendo, com o número e a porcentagem de cada atividade.",
            "<strong>Aba Reino:</strong> as atividades são trabalhando, comendo, descansando, se divertindo, organizando, seguindo ordens, lutando, caído, em greve, fora e parado.",
            "<strong>Aba Reino:</strong> o botão Ver de cada atividade lista os colonos nela.",
            "<strong>Aba Reino:</strong> a aba se atualiza a cada 2 segundos, só enquanto está aberta.",
            "<strong>Avisos:</strong> a aba Reino avisa quando um colono está caído, preso, sem cama ou faminto.",
            "<strong>Avisos:</strong> a aba Reino avisa quando um colono está com a mochila cheia há mais de 30 segundos.",
            "<strong>Avisos:</strong> a aba Reino avisa quando um colono está com a qualidade de vida no mínimo.",
            "<strong>Avisos:</strong> a aba Reino avisa quando um colono está sem arma ou com menos de 3 peças de armadura.",
            "<strong>Avisos:</strong> a aba Reino avisa quando um colono usa peças de conjuntos diferentes.",
            "<strong>Avisos:</strong> a aba Reino avisa quando a arma de um colono é de estilo diferente da armadura.",
            "<strong>Avisos:</strong> clicar num aviso ou numa atividade mostra só os colonos com ela.",
            "<strong>Avisos:</strong> cada jogador escolhe quais avisos quer ver, e a escolha vale só para ele.",
            "<strong>Lista de colonos:</strong> mostra profissão, personalidade, qualidade de vida e felicidade de cada colono.",
            "<strong>Lista de colonos:</strong> ordena por nome, profissão, qualidade de vida, felicidade, personalidade ou avisos.",
            "<strong>Lista de colonos:</strong> abrir um colono mostra a fome, a felicidade, o que ele está fazendo e os pensamentos dele.",
            "<strong>Lista de colonos:</strong> colonos longe demais aparecem como longe ou fora do mapa, sem detalhes até voltarem.",
            "<strong>Estilo do equipamento:</strong> novo botão no filtro de equipamento de cada colono, com três opções.",
            "<strong>Estilo do equipamento:</strong> Padrão do jogo deixa tudo como antes.",
            "<strong>Estilo do equipamento:</strong> A arma define mantém a arma do colono e prefere armaduras do mesmo estilo.",
            "<strong>Estilo do equipamento:</strong> O conjunto define prefere arma e peças do estilo do conjunto vestido.",
            "<strong>Estilo do equipamento:</strong> os estilos são corpo a corpo, distância, magia e invocação.",
            "<strong>Estilo do equipamento:</strong> a escolha fica salva no colono, e colonos de mundos antigos começam no Padrão do jogo.",
            "<strong>Estilo do equipamento:</strong> o botão Estilo de todos, no filtro de novos colonos, muda o estilo de todos os colonos, inclusive os que chegarem depois.",
            "<strong>Estilo do equipamento:</strong> depois do Estilo de todos, cada colono ainda pode ser mudado no próprio filtro, e vale a escolha mais recente.",
            "<strong>Botões por estilo:</strong> nova linha no filtro de equipamento com Corpo a corpo, Distância, Magia, Invocação e Outros.",
            "<strong>Botões por estilo:</strong> cada botão libera ou bloqueia de uma vez todas as armaduras daquele estilo.",
            "<strong>Botões por estilo:</strong> o conjunto vai inteiro: o peito e as botas que servem para vários estilos entram junto com o capacete de cada estilo (o botão Magia libera o Chapéu Rúnico e também o peito e as botas Rúnicos).",
            "<strong>Botões por estilo:</strong> o botão fica verde com tudo liberado, vermelho com tudo bloqueado e normal quando está misturado.",
            "<strong>Profissão Cozinhar:</strong> nova profissão, com coluna própria nas prioridades de trabalho.",
            "<strong>Profissão Cozinhar:</strong> a panela, o assador e a estação de cozinha passam a ser atendidos só por ela.",
            "<strong>Profissão Cozinhar:</strong> a receita \"qualquer ingrediente\" da panela e as entregas nas estações continuam funcionando.",
            "<strong>Equipamento feito pelo colono:</strong> o colono sem arma ou armadura melhor nos baús pede para fazer na bancada.",
            "<strong>Equipamento feito pelo colono:</strong> ele escolhe o melhor que dá para fazer com os seus materiais, respeitando o filtro de equipamento e o estilo dele.",
            "<strong>Equipamento feito pelo colono:</strong> o pedido aparece como aviso no assentamento, com o nome do colono e os itens.",
            "<strong>Equipamento feito pelo colono:</strong> os jogadores do assentamento recebem uma mensagem no chat para conferir os pedidos na aba Reino, no máximo uma por minuto.",
            "<strong>Pedidos:</strong> nova visão Pedidos na aba Reino, com o ícone e a quantidade de cada item e material do pedido (o nome aparece ao passar o mouse).",
            "<strong>Pedidos:</strong> botões Liberar e Recusar em cada pedido.",
            "<strong>Pedidos:</strong> o pedido fica na lista até alguém decidir, mesmo com o colono em missão.",
            "<strong>Pedidos:</strong> qualquer jogador com acesso ao assentamento pode decidir.",
            "<strong>Pedidos:</strong> com Sempre liberar, o assentamento não pergunta mais.",
            "<strong>Pedidos:</strong> o colono liberado passa a fabricação na frente dos outros trabalhos.",
            "<strong>Pedidos:</strong> o colono liberado pega os materiais nos baús, faz um item por vez e veste cada um assim que fica pronto, sem passar pelo baú. A peça antiga vai para os baús.",
            "<strong>Pedidos:</strong> o colono que sai em missão no meio continua a fabricação quando volta.",
            "<strong>Pedidos:</strong> o pedido recusado vira o aviso Precisa de equipamento na aba Reino, com a lista do que colocar nos baús.",
            "<strong>Pedidos:</strong> o aviso Precisa de equipamento some quando o colono pega os itens.",
            "<strong>Pedidos:</strong> o colono só pede de novo quando o que ele precisa muda.",
            "<strong>Pedidos:</strong> sem pedido na lista, a visão Pedidos explica o motivo: nenhuma bancada que faça equipamento, falta de materiais nos baús, colonos que já usam o melhor ou que não escolhem o próprio equipamento.",
            "<strong>Pedra de Casa:</strong> novo cartão na Loja que compra mais um espaço de Pedra do Caminho na Pedra de Casa.",
            "<strong>Pedra de Casa:</strong> cada espaço comprado vale em todos os assentamentos que são seus.",
            "<strong>Pedra de Casa:</strong> até 50 espaços extras por padrão.",
            "<strong>Pedra de Casa:</strong> o primeiro espaço custa 1500 moedas, e cada compra seguinte custa 500 moedas a mais.",
            "<strong>Pedra de Casa:</strong> os espaços comprados ficam no seu personagem e nunca se perdem ao atualizar o mod.",
            "<strong>Configuração:</strong> liga e desliga os botões por estilo, a profissão Cozinhar e o colono que faz o próprio equipamento.",
            "<strong>Configuração:</strong> com a profissão Cozinhar desligada, as estações de cozinha voltam ao trabalho comum de fabricação.",
            "<strong>Configuração:</strong> ajusta quantos pontos de qualidade de vida mínima cada nível do Mestre dos Reinos dá, de 0 (desliga) até 10.",
            "<strong>Configuração:</strong> o dono do mundo ajusta o custo dos espaços da Pedra de Casa.",
            "<strong>Configuração:</strong> o dono do mundo ajusta quantos espaços dá para comprar, de 0 (desliga a compra) até 500."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "As abas do menu do assentamento dividem a largura pelo tamanho do nome.",
            "Nomes longos de aba, como \"Prioridades de trabalho\", aparecem inteiros."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "Os colonos pesam menos no jogo em assentamentos grandes.",
            "Os bônus de rancho e de pesca do assentamento pesam menos no jogo."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Com o equipamento por classe do Safe Haven ligado, o colono em A arma define ou O conjunto define segue a sua escolha.",
            "O colono em Padrão do jogo continua preferindo o equipamento da classe do Safe Haven.",
            "A aba Reino convive com a aba Felicidade do Safe Haven, sem nomes de aba cortados."
          ]
        },
        {
          "heading": "👑 Mestre dos Reinos",
          "items": [
            "Cada nível da classe garante 1 ponto de qualidade de vida mínima aos colonos: 1 no nível 1 até 5 no nível 5.",
            "O colono novo já chega com essa qualidade de vida e os bônus dela.",
            "A qualidade de vida continua subindo acima do mínimo do jeito normal do jogo.",
            "O aviso \"Os colonos têm baixa qualidade de vida\" não aparece mais com a classe.",
            "A aba Reino mostra a qualidade de vida média dos colonos e quantos estão no nível máximo.",
            "A aba Reino avisa quando a felicidade de um colono chega perto do ponto de greve.",
            "O aviso de greve some no nível máximo da classe, em que os colonos não entram mais em greve.",
            "Os colonos cozinham 25% mais rápido, ajustável de 0% a 100%.",
            "Os colonos fazem o próprio equipamento 25% mais rápido, ajustável de 0% a 100%."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Kingdom tab:</strong> new tab in the settlement menu.",
            "<strong>Kingdom tab:</strong> the overview shows how many settlers you have and how many have a bed, a weapon, full armor and a full set.",
            "<strong>Kingdom tab:</strong> the overview shows how many settlers are away from the settlement.",
            "<strong>Kingdom tab:</strong> colored bars show what settlers are doing, with the number and percentage for each activity.",
            "<strong>Kingdom tab:</strong> the activities are working, eating, resting, having fun, organizing, following orders, fighting, downed, on strike, away and idle.",
            "<strong>Kingdom tab:</strong> each activity's Show button lists the settlers in it.",
            "<strong>Kingdom tab:</strong> the tab updates every 2 seconds, only while it is open.",
            "<strong>Warnings:</strong> the Kingdom tab warns when a settler is downed, trapped, without a bed or starving.",
            "<strong>Warnings:</strong> the Kingdom tab warns when a settler's backpack has been full for more than 30 seconds.",
            "<strong>Warnings:</strong> the Kingdom tab warns when a settler's quality of life is at the minimum.",
            "<strong>Warnings:</strong> the Kingdom tab warns when a settler has no weapon or fewer than 3 armor pieces.",
            "<strong>Warnings:</strong> the Kingdom tab warns when a settler wears pieces from different sets.",
            "<strong>Warnings:</strong> the Kingdom tab warns when a settler's weapon is a different style from the armor.",
            "<strong>Warnings:</strong> clicking a warning or an activity shows only the settlers with it.",
            "<strong>Warnings:</strong> each player picks which warnings to see, and the choice is just for them.",
            "<strong>Settler list:</strong> shows each settler's job, personality, quality of life and happiness.",
            "<strong>Settler list:</strong> sorts by name, job, quality of life, happiness, personality or warnings.",
            "<strong>Settler list:</strong> opening a settler shows hunger, happiness, what they are doing and their thoughts.",
            "<strong>Settler list:</strong> settlers too far away show as far away or off the map, with no details until they come back.",
            "<strong>Gear style:</strong> new button in each settler's equipment filter, with three options.",
            "<strong>Gear style:</strong> Game default keeps everything as before.",
            "<strong>Gear style:</strong> Weapon decides keeps the settler's weapon and prefers armor of the same style.",
            "<strong>Gear style:</strong> Armor set decides prefers a weapon and pieces matching the set being worn.",
            "<strong>Gear style:</strong> the styles are melee, ranged, magic and summon.",
            "<strong>Gear style:</strong> the choice is saved on the settler, and settlers from older worlds start on Game default.",
            "<strong>Gear style:</strong> the Everyone's style button, in the new settlers filter, changes the style of every settler, including those who arrive later.",
            "<strong>Gear style:</strong> after Everyone's style, each settler can still be changed in their own filter, and the most recent choice counts.",
            "<strong>Style buttons:</strong> new row in the equipment filter with Melee, Ranged, Magic, Summon and Other.",
            "<strong>Style buttons:</strong> each button allows or blocks every armor piece of that style at once.",
            "<strong>Style buttons:</strong> the whole set goes together: chest pieces and boots shared by several styles come along with the helmet of each style (the Magic button allows the Runic Hat and also the Runic chest and boots).",
            "<strong>Style buttons:</strong> the button turns green with everything allowed, red with everything blocked and normal when mixed.",
            "<strong>Cooking job:</strong> new job, with its own column in the work priorities.",
            "<strong>Cooking job:</strong> the cooking pot, the roasting station and the cooking station are now handled only by it.",
            "<strong>Cooking job:</strong> the cooking pot's \"any ingredient\" recipe and deliveries to stations keep working.",
            "<strong>Settler-made gear:</strong> a settler with no better weapon or armor in the chests asks to make it at a workstation.",
            "<strong>Settler-made gear:</strong> they pick the best they can make with your materials, following their equipment filter and style.",
            "<strong>Settler-made gear:</strong> the request shows as a settlement notice, with the settler's name and the items.",
            "<strong>Settler-made gear:</strong> the settlement's players get a chat message to check the requests in the Kingdom tab, at most once a minute.",
            "<strong>Requests:</strong> new Requests view in the Kingdom tab, with the icon and amount of each item and material in the request (the name shows on hover).",
            "<strong>Requests:</strong> Allow and Refuse buttons on each request.",
            "<strong>Requests:</strong> the request stays in the list until someone decides, even with the settler on a mission.",
            "<strong>Requests:</strong> any player with access to the settlement can decide.",
            "<strong>Requests:</strong> with Always allow, the settlement stops asking.",
            "<strong>Requests:</strong> an allowed settler puts the crafting ahead of their other work.",
            "<strong>Requests:</strong> an allowed settler takes the materials from the chests, makes one item at a time and puts each one on as soon as it is done, without going through the chests. The old piece goes to the chests.",
            "<strong>Requests:</strong> a settler who leaves on a mission halfway carries on crafting when they come back.",
            "<strong>Requests:</strong> a refused request becomes the Needs gear warning in the Kingdom tab, with the list of what to put in the chests.",
            "<strong>Requests:</strong> the Needs gear warning goes away when the settler takes the items.",
            "<strong>Requests:</strong> the settler only asks again when what they need changes.",
            "<strong>Requests:</strong> with no requests in the list, the Requests view explains why: no workstation that makes gear, missing materials in the chests, settlers who already use the best or who do not choose their own equipment.",
            "<strong>Homestone:</strong> new Shop card that buys one more Waystone space on the Homestone.",
            "<strong>Homestone:</strong> each space bought counts in every settlement you own.",
            "<strong>Homestone:</strong> up to 50 extra spaces by default.",
            "<strong>Homestone:</strong> the first space costs 1500 coins, and each next purchase costs 500 coins more.",
            "<strong>Homestone:</strong> spaces bought stay on your character and are never lost when the mod updates.",
            "<strong>Settings:</strong> turn the style buttons, the Cooking job and settler-made gear on or off.",
            "<strong>Settings:</strong> with the Cooking job off, the cooking stations go back to the regular crafting job.",
            "<strong>Settings:</strong> set how many points of minimum quality of life each Realm Master level gives, from 0 (off) up to 10.",
            "<strong>Settings:</strong> the world owner sets the cost of Homestone spaces.",
            "<strong>Settings:</strong> the world owner sets how many spaces can be bought, from 0 (turns the purchase off) up to 500."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "Settlement menu tabs split the width by the size of their names.",
            "Long tab names, like \"Work priorities\", show in full."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "Settlers weigh less on the game in big settlements.",
            "The settlement's ranch and fishing bonuses weigh less on the game."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "With Safe Haven's class gear on, a settler on Weapon decides or Armor set decides follows your choice.",
            "A settler on Game default keeps preferring Safe Haven's class gear.",
            "The Kingdom tab works alongside Safe Haven's Happiness tab, with no cut-off tab names."
          ]
        },
        {
          "heading": "👑 Realm Master",
          "items": [
            "Each class level guarantees settlers 1 point of minimum quality of life: 1 at level 1 up to 5 at level 5.",
            "New settlers arrive with that quality of life and its bonuses.",
            "Quality of life keeps rising above the minimum the game's usual way.",
            "The \"Settlers have low quality of life\" notice no longer shows with the class.",
            "The Kingdom tab shows the settlers' average quality of life and how many are at the top level.",
            "The Kingdom tab warns when a settler's happiness gets close to the strike point.",
            "The strike warning goes away at the class's top level, where settlers no longer go on strike.",
            "Settlers cook 25% faster, adjustable from 0% to 100%.",
            "Settlers make their own gear 25% faster, adjustable from 0% to 100%."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "4.5",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 4.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Configuração:</strong> nova opção escolhe quanto o Mestre do Loot multiplica no nível 5, de 2x a 50x, padrão 5x.",
            "<strong>Configuração:</strong> do nível 2 em diante, o loot sobe aos poucos até esse valor.",
            "<strong>Inteligência dos lacaios:</strong> os lacaios da Necromancia ganharam um jeito próprio de lutar.",
            "<strong>Inteligência dos lacaios:</strong> eles atacam o inimigo que você está acertando ou que está te atacando.",
            "<strong>Inteligência dos lacaios:</strong> se não houver, atacam o inimigo mais perto deles ao seu redor.",
            "<strong>Inteligência dos lacaios:</strong> vão direto até ficar no alcance do ataque, param ali e atacam sem parar, sem vagar, fugir ou ficar andando para lá e para cá.",
            "<strong>Inteligência dos lacaios:</strong> sem inimigos, ficam do seu lado.",
            "<strong>Inteligência dos lacaios:</strong> cada lacaio usa só o estilo de ataque do monstro: o tiro ou a magia dele, o golpe com a animação dele ou o dano ao encostar.",
            "<strong>Inteligência dos lacaios:</strong> a sequência de ataques e pausas que o monstro tinha não vale para o lacaio.",
            "<strong>Inteligência dos lacaios:</strong> os ataques saem num ritmo constante, com no máximo meio segundo entre um e outro, e ficam mais rápidos com o nível.",
            "<strong>Inteligência dos lacaios:</strong> vale para todos os lacaios, inclusive os que voavam em círculos em volta dos inimigos sem atacar.",
            "<strong>Inteligência dos lacaios:</strong> vale também para os que se teleportavam sozinhos, como o Aprendiz do Vazio."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "Com o alcance maior de descoberta do mapa (Mestre das Cavernas e Mestre da Construção), andar e explorar o mundo não trava mais.",
            "Só a parte nova que entra no alcance é revelada, em vez de toda a área em volta a cada poucos passos.",
            "A área inteira é revelada só de vez em quando, e o mapa é revelado do mesmo jeito.",
            "O brilho extra do Cinto brilhante e da Lanterna de fogo-fátuo com a Ruína da Escuridão pesa bem menos, sem mudar a luz.",
            "Os textos do mod pesam menos no jogo.",
            "Fazendas grandes pesam menos no servidor, porque cada planta é conferida no máximo uma vez por segundo.",
            "O crescimento acelerado das plantas continua igual.",
            "Os bônus de classe, o alcance de interação e a caça aos cavernídeos pelos lacaios só refazem as contas quando algo muda."
          ]
        },
        {
          "heading": "💰 Mestre do Loot",
          "items": [
            "Em vez de só uma chance de dobrar, o loot cresce a cada nível.",
            "No nível 1, 50% de chance de 2x.",
            "Nos níveis 2 a 5, sempre 2x, 3x, 4x e 5x.",
            "A economia de ingredientes do nível 5 continua igual."
          ]
        },
        {
          "heading": "💀 Necromancia",
          "items": [
            "Além do dano, os lacaios ganham até +75% de velocidade de ataque ao subir de nível e com a Maestria.",
            "Os lacaios também ganham até +50% de velocidade de movimento ao subir de nível e com a Maestria.",
            "A velocidade total do lacaio tem um teto fixo de 2x, para ele nunca sair voando pelo mapa.",
            "A velocidade de ataque vale para todo tipo de ataque: golpes, tiros, magias e dano por encostar.",
            "Os valores aparecem no cartão do lacaio no Grimório.",
            "Os tiros e magias dos lacaios viram com força para o inimigo.",
            "Os projéteis miram direto quando chegam perto, sem ficar girando em volta do inimigo.",
            "Os projéteis voam o bastante para alcançar o inimigo.",
            "A posição dos lacaios é atualizada várias vezes por segundo para todos os jogadores, e não só de tempos em tempos, então o lacaio não \"pula\" mais.",
            "A velocidade do lacaio é a mesma para todos os jogadores, inclusive lacaios que são animais, então ele anda liso."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Settings:</strong> a new option picks how much Loot Master multiplies at level 5, from 2x to 50x, default 5x.",
            "<strong>Settings:</strong> from level 2 on, loot rises step by step up to that value.",
            "<strong>Minion intelligence:</strong> Necromancy minions got their own way of fighting.",
            "<strong>Minion intelligence:</strong> they attack the enemy you are hitting or that is attacking you.",
            "<strong>Minion intelligence:</strong> if there is none, they attack the enemy closest to them around you.",
            "<strong>Minion intelligence:</strong> they go straight until they are in range of their attack, stop there and attack nonstop, without wandering, running away or pacing back and forth.",
            "<strong>Minion intelligence:</strong> with no enemies, they stay by your side.",
            "<strong>Minion intelligence:</strong> each minion uses only the monster's attack style: its shot or spell, its strike with its animation, or contact damage.",
            "<strong>Minion intelligence:</strong> the attack sequence and pauses the monster had don't apply to the minion.",
            "<strong>Minion intelligence:</strong> attacks come out at a steady pace, at most half a second apart, and get faster with level.",
            "<strong>Minion intelligence:</strong> this applies to every minion, including those that circled around enemies without attacking.",
            "<strong>Minion intelligence:</strong> it also applies to those that teleported on their own, like the Void Apprentice."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "With the bigger map discovery range (Cavern Master and Construction Master), walking and exploring the world no longer stutters.",
            "Only the new part that comes into range is revealed, instead of the whole area around you every few steps.",
            "The whole area is revealed only now and then, and the map is revealed the same way.",
            "The extra glow of the Shine belt and the Will-o'-wisp lantern with Dark Ruin costs much less, without changing the light.",
            "The mod's texts weigh less on the game.",
            "Big farms weigh less on the server, since each plant is checked at most once per second.",
            "Faster plant growth stays the same.",
            "Class bonuses, interaction range and minions hunting cavelings only redo their math when something changes."
          ]
        },
        {
          "heading": "💰 Loot Master",
          "items": [
            "Instead of just a chance to double, loot grows at every level.",
            "At level 1, a 50% chance of 2x.",
            "At levels 2 to 5, always 2x, 3x, 4x and 5x.",
            "The level 5 ingredient saving stays the same."
          ]
        },
        {
          "heading": "💀 Necromancy",
          "items": [
            "Besides damage, minions gain up to +75% attack speed as they level up and with Mastery.",
            "Minions also gain up to +50% movement speed as they level up and with Mastery.",
            "The minion's total speed has a fixed cap of 2x, so it never zooms across the map.",
            "Attack speed works for every kind of attack: strikes, shots, spells and contact damage.",
            "The values show on the minion's card in the Grimoire.",
            "Minion shots and spells turn hard toward the enemy.",
            "Projectiles aim straight at the enemy when close, with no more circling around it.",
            "Projectiles fly far enough to reach the enemy.",
            "Minion positions are updated several times per second for every player, not just every few seconds, so the minion no longer \"jumps\".",
            "The minion's speed is the same for every player, including minions that are animals, so it moves smoothly."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "4.4",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 4.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Slots do inventário:</strong> novo cartão \"Slots do inventário\" na loja.",
            "<strong>Slots do inventário:</strong> cada compra dá +10 slots no seu inventário, até 500 no total.",
            "<strong>Slots do inventário:</strong> a compra é só sua e fica com o seu personagem, inclusive quando o mod é atualizado.",
            "<strong>Slots do inventário:</strong> o preço sobe um pouco a cada compra e aparece no cartão antes de comprar.",
            "<strong>Slots do inventário:</strong> se o limite de slots for diminuído na configuração, os itens das linhas que sumiriam vão para os espaços vazios.",
            "<strong>Slots do inventário:</strong> se não houver espaço, o inventário fica do tamanho necessário para guardar tudo, e nenhum item se perde.",
            "<strong>Inventário com rolagem:</strong> passando dos 50 slots de sempre, o inventário ganha uma barra de rolagem.",
            "<strong>Inventário com rolagem:</strong> a barra de atalhos continua no mesmo lugar, na primeira linha.",
            "<strong>Slots de baú:</strong> o limite dos slots extras de baú subiu de 400 para 500, igual ao do inventário.",
            "<strong>Slots de baú:</strong> quem tinha o limite de 400 na configuração passa para 500 sozinho, e um limite mudado à mão continua como está.",
            "<strong>Slots de baú:</strong> cada baú tem um botão para ativar ou desativar os slots comprados na loja.",
            "<strong>Slots de baú:</strong> desativado, o baú fica no tamanho padrão.",
            "<strong>Slots de baú:</strong> se o baú estiver cheio demais para encolher, nada muda e nenhum item se perde.",
            "<strong>Caixas térmicas:</strong> as caixas térmicas também ganham os slots comprados e o mesmo botão.",
            "<strong>Caixas térmicas:</strong> os filtros da janela delas mostram só comida.",
            "<strong>Item em destaque:</strong> o item que aparece em cima do baú é escolhido num slot próprio, à esquerda do botão da moldura na janela do baú.",
            "<strong>Item em destaque:</strong> clique segurando o item: ele continua com você e fica no slot como um item fantasma.",
            "<strong>Item em destaque:</strong> com a mão vazia, o clique tira o item do slot.",
            "<strong>Aura dos lacaios:</strong> o contorno dos aliados da Necromancia virou uma aura suave em volta do corpo.",
            "<strong>Aura dos lacaios:</strong> a aura é dourada nos lacaios permanentes do ritual e branca nos temporários do Exército dos Mortos.",
            "<strong>Moradores abastecem as estações:</strong> ao guardar um item, inclusive a colheita que carregam, os moradores dão prioridade às fornalhas, composteiras e outras estações com receita configurada para ele, antes dos baús.",
            "<strong>Moradores abastecem as estações:</strong> o que não couber na estação vai para o baú, como sempre.",
            "<strong>Moradores abastecem as estações:</strong> estações sem receita daquele item não mudam nada.",
            "<strong>Composteira:</strong> o filtro de ingredientes do fertilizante ganhou o botão \"Somente sementes\".",
            "<strong>Composteira:</strong> com o filtro ajustado, os moradores levam as sementes direto para a composteira.",
            "<strong>Composteira:</strong> sem ajustar o filtro, a composteira não recebe a colheita inteira.",
            "<strong>Composteira:</strong> nova receita de fertilizante só de sementes na lista de receitas, com o ícone de uma semente.",
            "<strong>Composteira:</strong> com essa receita na composteira, os moradores levam as sementes direto para lá.",
            "<strong>Panela:</strong> nova receita \"Qualquer receita\" na lista de receitas dos moradores.",
            "<strong>Panela:</strong> com ela, os moradores cozinham qualquer prato da panela que tenha os ingredientes nos baús da vila, variando entre os pratos.",
            "<strong>Panela:</strong> os modos \"fazer X vezes\", \"até ter X\" e \"sempre\" funcionam como nas outras receitas, e no \"até ter X\" vale para cada prato.",
            "<strong>Panela:</strong> a \"Qualquer receita\" não aparece na sua bancada.",
            "<strong>Bônus de XP:</strong> dois multiplicadores novos na loja, 25x e 50x, com preço proporcional aos outros.",
            "<strong>Bônus de XP:</strong> dois atalhos novos para configurar nos controles.",
            "<strong>Janela dos moradores:</strong> felicidade, pensamentos e personalidades dos moradores aparecem em português, mesmo quando o jogo mostrava esses textos em inglês.",
            "<strong>Configuração:</strong> o máximo de blocos do Minerador de Veios, o alcance das estações de criação, o raio do empilhamento rápido, o raio do XP em equipe e o raio de ataque das invocações podem chegar a 500.",
            "<strong>Configuração:</strong> valores muito altos podem pesar em mundos grandes."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "Nos baús grandes e no inventário, cada clique da roda do mouse anda exatamente uma linha de slots, sem parar no meio.",
            "No touchpad, a rolagem vai somando até completar uma linha."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "A aura dos lacaios pesa menos no jogo.",
            "O ícone em cima dos baús pesa menos no jogo.",
            "A janela do baú deixa de pesar no jogo depois de fechada.",
            "Os moradores decidem mais rápido em qual estação guardar a colheita."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "O botão de cor do baú fica fixo logo à direita do botão de renomear."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O Alcance das Estações comprado na loja fica salvo no mundo e não volta mais para 15 ao reiniciar o jogo solo ou para quem hospeda o mundo.",
            "Bônus com nome ou descrição longos na aba Status, como o da Necromancia, não cortam mais o nome nem passam por cima do cartão de baixo.",
            "Quando não cabem lado a lado, o nome fica em cima e o valor embaixo, e o cartão cresce para caber tudo.",
            "O Minerador de Veios respeita o máximo de blocos também no minério.",
            "O modo avançado do Minerador de Veios não para mais em 20 blocos e 3 blocos de distância.",
            "A mineração vai até o número configurado, em qualquer modo.",
            "Atenção: no valor padrão de 20, veios maiores agora param em 20 blocos.",
            "Desligar Administração Rica remove o bônus de XP dos colonos.",
            "Desligar Administração Rica ou Especialista em Incursão tira essas passivas da lista.",
            "Multiplicador de XP removido da configuração fica indisponível na loja.",
            "O comando de administrador de slots de baú respeita o limite e o passo de slots da configuração.",
            "As mensagens desse comando mostram os números da configuração.",
            "A aura aparece em todos os lacaios, inclusive nos de corpo humano, dourada nos permanentes e branca nos temporários.",
            "Os moradores não ficam mais andando travados com o piso de felicidade do Mestre dos Reinos.",
            "A Aura de Liderança vale do mesmo jeito na tela e no jogo.",
            "O Mestre Gourmet come da Lancheira, do primeiro slot em diante, e só depois procura no inventário.",
            "O Mestre Gourmet ignora comidas que fazem mal, como carne e ovos crus.",
            "As mensagens do console do jogo no chat não mostram mais códigos estranhos.",
            "Os acentos das mensagens do console aparecem certos."
          ]
        },
        {
          "heading": "👑 Mestre dos Reinos",
          "items": [
            "A felicidade mínima dos moradores agora é 50, 60, 70, 80 e 100 nos níveis 1 a 5.",
            "A qualidade de vida para de cair já no nível 1.",
            "A qualidade de vida passa a subir no nível 4."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Inventory slots:</strong> new \"Inventory slots\" card in the shop.",
            "<strong>Inventory slots:</strong> each purchase gives +10 slots to your inventory, up to 500 in total.",
            "<strong>Inventory slots:</strong> the purchase is yours alone and stays with your character, including when the mod updates.",
            "<strong>Inventory slots:</strong> the price goes up a little with each purchase and shows on the card before you buy.",
            "<strong>Inventory slots:</strong> if the slot limit is lowered in the settings, items in the rows that would disappear move to empty spaces.",
            "<strong>Inventory slots:</strong> if there is no room, the inventory keeps the size it needs to hold everything, and no item is lost.",
            "<strong>Scrolling inventory:</strong> once it goes past the usual 50 slots, the inventory gets a scroll bar.",
            "<strong>Scrolling inventory:</strong> the hotbar stays where it always was, on the first row.",
            "<strong>Chest slots:</strong> the limit for extra chest slots went up from 400 to 500, the same as the inventory.",
            "<strong>Chest slots:</strong> if your settings had the 400 limit, it moves to 500 by itself, and a limit you changed by hand stays as it is.",
            "<strong>Chest slots:</strong> each chest has a button to turn the slots bought in the shop on or off.",
            "<strong>Chest slots:</strong> when off, the chest stays at the default size.",
            "<strong>Chest slots:</strong> if the chest is too full to shrink, nothing changes and no item is lost.",
            "<strong>Cooling boxes:</strong> cooling boxes also get the bought slots and the same button.",
            "<strong>Cooling boxes:</strong> the filters in their window show only food.",
            "<strong>Featured item:</strong> the item shown above a chest is picked in its own slot, just left of the frame button in the chest window.",
            "<strong>Featured item:</strong> click while holding the item: it stays with you and sits in the slot as a ghost item.",
            "<strong>Featured item:</strong> with an empty hand, the click takes the item out of the slot.",
            "<strong>Minion aura:</strong> the outline on Necromancy allies is now a soft aura around their body.",
            "<strong>Minion aura:</strong> the aura is gold on permanent ritual minions and white on the temporary ones from the Army of the Dead.",
            "<strong>Settlers supply your stations:</strong> when storing an item, including the harvest they carry, settlers put forges, compost bins and other stations with a recipe set up for it ahead of chests.",
            "<strong>Settlers supply your stations:</strong> whatever doesn't fit in the station goes to a chest, as usual.",
            "<strong>Settlers supply your stations:</strong> stations with no recipe for that item change nothing.",
            "<strong>Compost bin:</strong> the fertilizer ingredient filter has a new \"Seeds only\" button.",
            "<strong>Compost bin:</strong> with the filter adjusted, settlers take seeds straight to the compost bin.",
            "<strong>Compost bin:</strong> without adjusting the filter, the compost bin doesn't get your whole harvest.",
            "<strong>Compost bin:</strong> new seeds-only fertilizer recipe in the recipe list, with a seed icon.",
            "<strong>Compost bin:</strong> with that recipe on the compost bin, settlers take seeds straight there.",
            "<strong>Cooking pot:</strong> new \"Any recipe\" entry in the settlers' recipe list.",
            "<strong>Cooking pot:</strong> with it, settlers cook any cooking pot dish whose ingredients are in the settlement chests, switching between dishes.",
            "<strong>Cooking pot:</strong> the \"do X times\", \"until X\" and \"forever\" modes work like on other recipes, and \"until X\" counts for each dish.",
            "<strong>Cooking pot:</strong> \"Any recipe\" doesn't show up at your own crafting station.",
            "<strong>XP bonuses:</strong> two new multipliers in the shop, 25x and 50x, priced in proportion to the others.",
            "<strong>XP bonuses:</strong> two new hotkeys you can set in the controls.",
            "<strong>Settler window:</strong> settler happiness, thoughts and personalities show in Portuguese, even when the game showed these texts in English.",
            "<strong>Settings:</strong> the Vein Miner block limit, crafting station range, quick stack radius, team XP radius and summon attack radius can go up to 500.",
            "<strong>Settings:</strong> very high values can weigh on big worlds."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "In large chests and in the inventory, each mouse wheel click moves exactly one row of slots, never stopping halfway.",
            "On a touchpad, scrolling adds up until it completes a row."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "The minion aura weighs less on the game.",
            "The icon above chests weighs less on the game.",
            "The chest window no longer weighs on the game after you close it.",
            "Settlers decide faster which station to store their harvest in."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "The chest color button stays fixed right next to the rename button."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Crafting Station Range bought in the shop stays saved in the world and no longer goes back to 15 when the game restarts in single player or for whoever hosts the world.",
            "Bonuses with a long name or description in the Status tab, like Necromancy's, no longer cut the name short or run over the card below.",
            "When they don't fit side by side, the name goes on top and the value below, and the card grows to fit everything.",
            "Vein Miner follows the block limit on ore too.",
            "Vein Miner's advanced mode no longer stops at 20 blocks and 3 tiles apart.",
            "Mining goes up to the configured number in every mode.",
            "Note: at the default of 20, bigger veins now stop at 20 blocks.",
            "Turning off Rich Administration removes the settler XP bonus.",
            "Turning off Rich Administration or Incursion Specialist takes those passives off the list.",
            "An XP multiplier removed from the settings is unavailable in the shop.",
            "The admin chest slot command follows the slot limit and step from the settings.",
            "That command's messages show the numbers from the settings.",
            "The aura shows on every minion, including human-shaped ones, gold for permanent and white for temporary.",
            "Settlers no longer walk in a choppy way because of the Realm Master happiness floor.",
            "Leadership Aura works the same on screen and in the game.",
            "Master Gourmet eats from the Lunchbox, starting at the first slot, and only then looks in the inventory.",
            "Master Gourmet skips food that harms you, like raw meat and raw eggs.",
            "Game console messages in chat no longer show strange codes.",
            "Accents in console messages show up correctly."
          ]
        },
        {
          "heading": "👑 Realm Master",
          "items": [
            "The minimum settler happiness is now 50, 60, 70, 80 and 100 at levels 1 to 5.",
            "Quality of life stops dropping from level 1.",
            "Quality of life starts rising at level 4."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "4.3",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 4.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Aba Classes:</strong> nova aba no estilo grimório.",
            "<strong>Aba Classes:</strong> as classes ficam separadas por categoria: Combate, Sobrevivência, Movimento, Utilidade e Necromancia.",
            "<strong>Aba Classes:</strong> cada categoria mostra quantos pontos você já gastou nela.",
            "<strong>Aba Classes:</strong> cada classe aparece como uma carta com ícone, nome e os pontos já colocados.",
            "<strong>Bônus por nível:</strong> ao escolher uma classe, o painel ao lado mostra o bônus de todos os níveis de uma vez, do 1 ao 5.",
            "<strong>Bônus por nível:</strong> o painel também mostra o que cada nível desbloqueia.",
            "<strong>Bônus por nível:</strong> os níveis que você já tem ficam em dourado, e o próximo fica em destaque."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O Protetor do Mal invocado pelo ritual não abre mais portais que soltam inimigos contra você.",
            "Outros aliados que lançam criaturas ou deixam algo para trás, como os soldadinhos de brinquedo e os goblins do sobretudo, também não trazem mais inimigos para a luta.",
            "A Fênix aliada não deixa mais um ovo ao morrer.",
            "Seus aliados continuam lutando com todos os ataques normais.",
            "Os inimigos que você ou seus aliados derrotam continuam se comportando como sempre."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Classes tab:</strong> new grimoire-style tab.",
            "<strong>Classes tab:</strong> classes are split by category: Combat, Survival, Movement, Utility and Necromancy.",
            "<strong>Classes tab:</strong> each category shows how many points you have spent in it.",
            "<strong>Classes tab:</strong> every class shows up as a card with its icon, name and the points already placed.",
            "<strong>Bonus per level:</strong> when you pick a class, the side panel shows the bonus of every level at once, from 1 to 5.",
            "<strong>Bonus per level:</strong> the panel also shows what each level unlocks.",
            "<strong>Bonus per level:</strong> levels you already have are gold, and the next one is highlighted."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "An Evil's Protector summoned by the ritual no longer opens portals that release enemies against you.",
            "Other allies that launch creatures or leave something behind, like the toy soldiers and the trenchcoat goblins, also no longer bring enemies into the fight.",
            "An allied Phoenix no longer leaves an egg when it dies.",
            "Your allies keep fighting with all their usual attacks.",
            "Enemies that you or your allies defeat still behave as always."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "4.2",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 4.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🔧 Correções",
          "items": [
            "Com o Mestre do Loot, alguns objetos e pisos (como o baú de madeira) não voltam mais multiplicados ao serem colocados e quebrados de novo.",
            "O que você coloca volta sempre na mesma quantidade.",
            "Em baús com muitos slots, o botão de organizar ordenava os itens mas deixava cada pilha separada.",
            "Agora os itens iguais se juntam em pilhas cheias até o limite do stack comprado na Loja (por exemplo, 5x), como nos baús menores.",
            "A janela do RPG Skills volta a abrir pelo atalho e pelo botão, mesmo depois de um tempo de jogo.",
            "A janela deixava de abrir por causa de um erro ao montar a aba Loja."
          ]
        },
        {
          "heading": "💰 Mestre do Loot",
          "items": [
            "O loot agora vem no máximo em dobro (2x), em vez de chegar a 5x.",
            "A chance de dobrar sobe 20% por nível: 20%, 40%, 60%, 80% e 100% no nível 5.",
            "O dobro vale para inimigos, mineração, pesca, colheita e criação.",
            "Nova passiva Artesão Econômico no nível 5: criar itens tem 50% de chance de não gastar os ingredientes."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🔧 Fixes",
          "items": [
            "With the Loot Master, some objects and floors (like the wooden chest) no longer come back multiplied when placed and broken again.",
            "Whatever you place always comes back in the same amount.",
            "In chests with many slots, the sort button ordered the items but left each stack apart.",
            "Now matching items join into full stacks up to the stack limit bought in the Shop (for example, 5x), just like in smaller chests.",
            "The RPG Skills window opens again from the hotkey and the button, even after a while in game.",
            "The window stopped opening because of an error while building the Shop tab."
          ]
        },
        {
          "heading": "💰 Loot Master",
          "items": [
            "Loot now comes at most doubled (2x) instead of reaching 5x.",
            "The chance to double goes up 20% per level: 20%, 40%, 60%, 80% and 100% at level 5.",
            "Doubling applies to enemies, mining, fishing, harvesting and crafting.",
            "New Thrifty Artisan passive at level 5: crafting has a 50% chance to not use up the ingredients."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "4.1",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 4.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Ícone no baú:</strong> ao chegar perto, um ícone aparece em cima do baú, para você saber o que tem dentro sem abrir.",
            "<strong>Ícone no baú:</strong> dois botões novos no topo da janela do baú, ao lado dos de organizar, escolhem o ícone e o estilo.",
            "<strong>Ícone no baú:</strong> clique no botão segurando um item para usar aquele item.",
            "<strong>Ícone no baú:</strong> com a mão vazia, o botão alterna entre \"automático\" e \"nenhum\".",
            "<strong>Ícone no baú:</strong> o \"automático\" mostra o item que mais tem dentro do baú e se atualiza sozinho.",
            "<strong>Ícone no baú:</strong> são quatro estilos, cada um com sua animação, e cada baú escolhe o seu.",
            "<strong>Ícone no baú:</strong> Bolha surge com um pulinho.",
            "<strong>Ícone no baú:</strong> Placa de madeira fica presa na tampa, cresce e balança.",
            "<strong>Ícone no baú:</strong> Brasão RPG é roxo e dourado e pulsa de leve.",
            "<strong>Ícone no baú:</strong> Só o ícone deixa o item flutuando sozinho, sem fundo nem sombra.",
            "<strong>Ícone no baú:</strong> cada ícone cabe na largura do próprio baú, então baús vizinhos não cobrem o ícone um do outro.",
            "<strong>Ícone no baú:</strong> o ícone fica salvo no baú e todos os jogadores do mundo veem.",
            "<strong>Painel de XP:</strong> o painel acima do inventário agora tem um selo com o seu nível.",
            "<strong>Painel de XP:</strong> uma barra enche com o XP, com os números e a porcentagem dentro dela.",
            "<strong>Painel de XP:</strong> com o bônus de XP comprado na Loja, o multiplicador e o tempo que falta aparecem ao lado da barra.",
            "<strong>Aba Status:</strong> nível, barra de XP e pontos para gastar ficam num cartão só, no topo.",
            "<strong>Aba Status:</strong> bônus de XP, XP em equipe, qualidade da vila e lacaios em campo aparecem em selos coloridos logo abaixo.",
            "<strong>Aba Status:</strong> o tempo do bônus de XP conta sozinho com a janela aberta.",
            "<strong>Aba Status:</strong> o selo do bônus de XP aparece assim que você compra.",
            "<strong>Aba Status:</strong> em vez de uma lista enorme, os bônus aparecem em cartões: Combate, Sobrevivência, Efeitos nos inimigos, Movimento, Misticismo e invocações, Coleta e utilidades.",
            "<strong>Aba Status:</strong> embaixo ficam as habilidades e passivas que você já tem.",
            "<strong>Aba Status:</strong> embaixo também fica um resumo do que o mundo comprou na Loja (stack, slots dos baús e alcance das estações).",
            "<strong>Alcance das estações:</strong> novo cartão \"Alcance das Estações\" na Loja.",
            "<strong>Alcance das estações:</strong> com \"usar armazenamento próximo\" ligado, as estações de criação e a de melhoria passam a usar baús mais distantes.",
            "<strong>Alcance das estações:</strong> o jogo usa 15 blocos, e cada compra soma 5 blocos, até 50.",
            "<strong>Alcance das estações:</strong> a compra é do mundo, para todos os jogadores, e fica salva nele.",
            "<strong>Alcance das estações:</strong> o primeiro nível custa 2.000 moedas, e cada um seguinte custa 2.000 a mais.",
            "<strong>Alcance das estações:</strong> quem entra num servidor só usa o alcance comprado depois de receber o valor do servidor, então a estação nunca mostra uma receita que não daria para criar.",
            "<strong>Alcance das estações:</strong> custo, blocos por compra e alcance máximo (até 100) podem ser mudados no painel de configuração.",
            "<strong>Alcance das estações:</strong> administradores podem voltar o alcance ao do jogo, e as moedas não são devolvidas.",
            "<strong>Botão do inventário:</strong> o botão que abre o RPG Skills trocou a logo do mod por um ícone próprio: duas espadas cruzadas com cabos roxos e uma estrela dourada.",
            "<strong>Botão do inventário:</strong> o botão agora tem o mesmo tamanho e a mesma moldura dos outros botões da barra."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "Os ícones do filtro do baú ficam numa coluna vertical, colada à esquerda dos slots, em vez de um bloco à direita.",
            "Ao clicar num grupo do filtro, o baú se abre para a esquerda e mostra as subcategorias numa coluna ao lado dos ícones, em vez de embaixo deles.",
            "Com \"Tudo\" selecionado, a coluna fecha e o baú volta ao tamanho compacto, sem espaço vazio.",
            "O nome do baú ganhou uma linha só para ele, acima dos botões de organizar."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Quem já usava os rótulos de baú do Safe Haven ganha os mesmos ícones em cima dos baús automaticamente.",
            "O rótulo do Safe Haven fica desligado, para não aparecerem dois."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "A tecla de atalho e o botão do inventário voltam a abrir a janela do RPG Skills depois de sair de um mundo e entrar de novo.",
            "Agora a janela sempre abre na partida atual.",
            "Os nomes compridos de monstros no Grimório e nos slots do Ritual não ficam mais rolando aos pulos.",
            "O nome fica parado, e a letra diminui um pouco para caber.",
            "Se ainda for grande, o nome aparece inteiro em duas linhas.",
            "A opção do Safe Haven que desliga o que as classes do RPG Skills já dão ganhou nome traduzido no painel de configuração."
          ]
        },
        {
          "heading": "💰 Preços da Loja",
          "items": [
            "O preço do bônus de XP agora sobe devagar com o seu nível e tem limite.",
            "Antes, no nível 100, o bônus de 10x custava 1 milhão de moedas.",
            "Agora o bônus de 2x vai de 1.300 a no máximo 50.000 moedas.",
            "O bônus de 5x custa 2,5 vezes o preço do 2x, e o de 10x custa 5 vezes.",
            "O Minerador Explosivo continua custando 100.000 moedas.",
            "O Minerador Explosivo pede 250 barras de cobre, de ferro e de ouro (antes 1.000).",
            "O Minerador Explosivo pede 200 bastões de dinamite (antes 1.000).",
            "Cada nível de slots de baú agora encarece 2.500 moedas em vez de 5.000, e os últimos níveis ficam bem mais acessíveis.",
            "Quem nunca mexeu nesse valor na configuração recebe o novo automaticamente."
          ]
        },
        {
          "heading": "⛏️ Mestre das Cavernas",
          "items": [
            "Além da descoberta maior que já dava, cada ponto na classe agora revela mais 6 blocos do mapa em volta nas cavernas.",
            "Com a classe completa, são até 85 blocos."
          ]
        },
        {
          "heading": "🏗️ Mestre da Construção",
          "items": [
            "O bônus \"Biomas visíveis no mapa\" agora também revela mais mapa na superfície.",
            "São 6 blocos a mais por ponto na classe."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Chest icon:</strong> when you get close, an icon shows up above the chest, so you know what is inside without opening it.",
            "<strong>Chest icon:</strong> two new buttons at the top of the chest window, next to the sorting ones, pick the icon and the style.",
            "<strong>Chest icon:</strong> click the button while holding an item to use that item.",
            "<strong>Chest icon:</strong> with an empty hand, the button switches between \"automatic\" and \"none\".",
            "<strong>Chest icon:</strong> \"automatic\" shows the item there is most of in the chest and updates by itself.",
            "<strong>Chest icon:</strong> there are four styles, each with its own animation, and each chest picks its own.",
            "<strong>Chest icon:</strong> Bubble pops in with a little bounce.",
            "<strong>Chest icon:</strong> Wooden sign sits on the lid, grows and sways.",
            "<strong>Chest icon:</strong> RPG crest is purple and gold and gently pulses.",
            "<strong>Chest icon:</strong> Icon only leaves the item floating by itself, with no background or shadow.",
            "<strong>Chest icon:</strong> each icon fits within its own chest's width, so neighboring chests don't cover each other's icon.",
            "<strong>Chest icon:</strong> the icon is saved in the chest and every player in the world sees it.",
            "<strong>XP panel:</strong> the panel above the inventory now has a badge with your level.",
            "<strong>XP panel:</strong> a bar fills with your XP, with the numbers and the percentage inside it.",
            "<strong>XP panel:</strong> with the XP bonus bought in the Shop, the multiplier and the time left show up next to the bar.",
            "<strong>Status tab:</strong> level, XP bar and points to spend sit in a single card, on top.",
            "<strong>Status tab:</strong> XP bonus, team XP, settlement quality and minions in the field show up in colored badges right below.",
            "<strong>Status tab:</strong> the XP bonus time counts down by itself while the window is open.",
            "<strong>Status tab:</strong> the XP bonus badge shows up as soon as you buy it.",
            "<strong>Status tab:</strong> instead of one huge list, bonuses show up in cards: Combat, Survival, Effects on enemies, Movement, Mysticism and summons, Gathering and utility.",
            "<strong>Status tab:</strong> at the bottom are the abilities and passives you already have.",
            "<strong>Status tab:</strong> also at the bottom is a summary of what the world bought in the Shop (stack, chest slots and station range).",
            "<strong>Station range:</strong> new \"Crafting Station Range\" card in the Shop.",
            "<strong>Station range:</strong> with \"use nearby storage\" on, crafting stations and the upgrade station use chests farther away.",
            "<strong>Station range:</strong> the game uses 15 tiles, and each purchase adds 5 tiles, up to 50.",
            "<strong>Station range:</strong> the purchase belongs to the world, for every player, and is saved with it.",
            "<strong>Station range:</strong> the first level costs 2,000 coins, and each next one costs 2,000 more.",
            "<strong>Station range:</strong> when you join a server, the bought range only kicks in after the server sends it, so a station never shows a recipe you could not craft.",
            "<strong>Station range:</strong> cost, tiles per purchase and maximum range (up to 100) can be changed in the config panel.",
            "<strong>Station range:</strong> administrators can put the range back to the game's, and coins are not refunded.",
            "<strong>Inventory button:</strong> the button that opens RPG Skills swapped the mod logo for its own icon: two crossed swords with purple hilts and a golden star.",
            "<strong>Inventory button:</strong> the button now has the same size and frame as the other buttons on the bar."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "The chest filter icons sit in a vertical column right to the left of the slots, instead of a block on the right.",
            "Clicking a filter group widens the chest to the left and shows its subcategories in a column next to the icons, instead of below them.",
            "With \"All items\" selected, the column closes and the chest goes back to its compact size, with no empty space.",
            "The chest name now has its own line, above the sorting buttons."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "If you already used Safe Haven's chest labels, you get the same icons above chests automatically.",
            "Safe Haven's label is turned off, so you don't see two."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The shortcut key and the inventory button open the RPG Skills window again after leaving a world and joining again.",
            "Now the window always opens in the current game.",
            "Long monster names in the Grimoire and the Ritual slots no longer jump around while scrolling.",
            "The name stays still, and the letters get a bit smaller to fit.",
            "If it is still too long, the name shows in full on two lines.",
            "The Safe Haven option that turns off what RPG Skills classes already give now has a translated name in the config panel."
          ]
        },
        {
          "heading": "💰 Shop prices",
          "items": [
            "The XP bonus price now grows slowly with your level and has a cap.",
            "Before, the 10x bonus cost 1 million coins at level 100.",
            "Now the 2x bonus goes from 1,300 to at most 50,000 coins.",
            "The 5x bonus costs 2.5 times the 2x price, and the 10x costs 5 times.",
            "The Explosive Miner still costs 100,000 coins.",
            "The Explosive Miner asks for 250 copper, iron and gold bars (was 1,000).",
            "The Explosive Miner asks for 200 Dynamite Sticks (was 1,000).",
            "Each chest slot level now gets 2,500 coins more expensive instead of 5,000, and the last levels are much more affordable.",
            "If you never changed this value in the config, you get the new one automatically."
          ]
        },
        {
          "heading": "⛏️ Cavern Master",
          "items": [
            "On top of the bigger discovery it already gave, each point in the class now reveals 6 more tiles of the map around you in caves.",
            "With the class complete, that is up to 85 tiles."
          ]
        },
        {
          "heading": "🏗️ Construction Master",
          "items": [
            "The \"Biome map vision\" bonus now also reveals more of the map on the surface.",
            "That is 6 more tiles per point in the class."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "4.0",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 4.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Pontos nas atualizações:</strong> atualizar o RPG Skills não zera mais os pontos de classe.",
            "<strong>Pontos nas atualizações:</strong> nesta e nas próximas versões, pontos gastos, nível, XP e compras da Loja continuam como estavam, sem precisar distribuir de novo.",
            "<strong>Pontos nas atualizações:</strong> a opção \"Respec de classes nas atualizações\" saiu da configuração.",
            "<strong>Filtro do baú:</strong> o filtro dos baús com slots extras usa as categorias do próprio jogo, as mesmas do filtro de armazenamento dos colonos.",
            "<strong>Filtro do baú:</strong> primeiro você escolhe o grupo (Equipamento, Materiais, Consumíveis, Objetos, Pisos...) e depois desce nas subcategorias, por exemplo Equipamento, Armas e Armas corpo a corpo.",
            "<strong>Filtro do baú:</strong> cada grupo ganhou um ícone colorido próprio, fácil de reconhecer de relance.",
            "<strong>Filtro do baú:</strong> nas subcategorias, um botão Voltar leva de volta para a categoria de cima.",
            "<strong>Loja nova:</strong> a aba Loja foi refeita em cartões separados: Bônus de XP, Stack do mundo, Slots de Baús e Minerador Explosivo.",
            "<strong>Loja nova:</strong> cada cartão tem ícone, explicação do que a compra faz, situação atual e botões.",
            "<strong>Loja nova:</strong> o preço aparece com os ícones dos itens do próprio jogo (moedas, barras e dinamite) e o valor ao lado.",
            "<strong>Loja nova:</strong> passe o mouse no ícone para ver o nome do item.",
            "<strong>Loja nova:</strong> o cartão Stack do mundo explica que a compra aumenta quantos itens cabem em cada slot neste mundo, para todos os jogadores.",
            "<strong>Loja nova:</strong> em 2x, um slot de 100 itens passa a guardar 200.",
            "<strong>Loja nova:</strong> o cartão Slots de Baús diz que a compra adiciona slots aos baús do mundo para todos e quantos slots cada compra dá.",
            "<strong>Loja nova:</strong> o buff de XP ganhou um ícone próprio, um orbe verde com seta para cima.",
            "<strong>Expansão da vila:</strong> novo cartão na Loja que expande a vila onde você está, sem precisar abrir a bandeira.",
            "<strong>Expansão da vila:</strong> o cartão mostra o tamanho atual, o próximo e o custo com os ícones dos itens.",
            "<strong>Expansão da vila:</strong> só o dono da vila pode expandir.",
            "<strong>Expansão da vila:</strong> o cartão se atualiza sozinho quando você entra ou sai de uma vila com a Loja aberta.",
            "<strong>Vilas maiores:</strong> depois dos 7 níveis do jogo vêm mais 49, até 1.840x1.840 tiles.",
            "<strong>Vilas maiores:</strong> cada nível extra pede moedas e um conjunto de materiais de fim de jogo que vai mudando (barras, gemas e essências).",
            "<strong>Vilas maiores:</strong> os valores pedidos sobem a cada nível.",
            "<strong>Vilas maiores:</strong> esses níveis também aparecem na bandeira da vila.",
            "<strong>Vilas maiores:</strong> vilas muito grandes deixam o mundo mais pesado.",
            "<strong>Contorno dos aliados:</strong> os aliados invocados pelo ritual da Necromancia ganharam um contorno roxo brilhante, fácil de diferenciar dos inimigos no meio da luta.",
            "<strong>Contorno dos aliados:</strong> os aliados do Exército dos Mortos têm contorno dourado, para você saber quais vão sumir.",
            "<strong>Contorno dos aliados:</strong> o Exército dos Mortos é a chance de 50% no nível 5 de inimigos virarem aliados por 1 minuto.",
            "<strong>Poção de vida:</strong> por padrão, você e os colonos podem beber uma poção de vida atrás da outra, sem espera.",
            "<strong>Poção de vida:</strong> a \"Fadiga de poção de vida\" do jogo não é mais aplicada.",
            "<strong>Poção de vida:</strong> na aba Funcionalidades da configuração, seção Poções, dá para mudar a espera do jogador e a dos colonos.",
            "<strong>Poção de vida:</strong> -1 volta ao valor do jogo (30 segundos), e qualquer outro número vira a espera em segundos.",
            "<strong>Poção de vida:</strong> em servidor, vale a configuração do servidor para todos os jogadores."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "Mexer em itens, juntar pilhas e abrir baús ficou mais rápido, principalmente com muitos itens.",
            "Os colonos pesam menos no servidor em colônias grandes.",
            "Os bônus de Mestre das Máquinas, Mestre da Natureza e Mestre das Armadilhas custam menos para o jogo, mesmo em vilas muito grandes.",
            "Os aliados do ritual da Necromancia pesam menos enquanto andam.",
            "Com a aba Necromancia aberta durante uma luta, a janela do RPG Skills atualiza só o que mudou, sem refazer tudo várias vezes por segundo.",
            "A barra de XP na tela pesa menos a cada quadro.",
            "Jogadores e monstros com buffs (velocidade, dano, defesa) pesam menos para o jogo.",
            "O RPG Skills pesa menos no servidor para cada jogador conectado."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "O RPG Skills encontra a configuração do Safe Haven 5.0 na pasta nova dele.",
            "As suas opções do Safe Haven vêm junto do local antigo."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Ao trocar o idioma do jogo, a aba Necromancia, os nomes dos monstros no Grimório e o painel Ritual mudam de idioma na hora, sem precisar reiniciar.",
            "Tudo que você muda e salva na configuração do RPG Skills continua salvo ao reiniciar o jogo, mesmo depois de jogar num mundo e voltar ao menu.",
            "Nomes de monstro que não cabem no card ou no slot do Ritual andam como letreiro, em vez de ficarem cortados ou por cima da linha de baixo.",
            "Símbolos da configuração que apareciam como \"?\" (como a seta do Sono Acelerado e o traço de \"0-255\") foram trocados em todos os idiomas.",
            "Alguns textos da configuração foram corrigidos.",
            "Em servidor, os avisos do RPG Skills no chat (loja, mineração, reset, Necromancia) chegam no idioma do seu jogo, não no do servidor.",
            "Avisos da Necromancia que não apareciam no chat agora aparecem.",
            "Ao entrar num servidor, o RPG Skills usa as regras dele (XP, classes, custos da loja, opções ligadas).",
            "Seu arquivo de configuração não muda, e ao sair do servidor tudo volta a ser como no seu jogo.",
            "Fogos de nível, botão do inventário e linha de status continuam do seu jeito no servidor.",
            "O bônus de duração de poções do Mestre da Alquimia não estica mais a fadiga das poções de vida e de mana, que fazia o alquimista esperar mais para beber outra.",
            "Esse bônus agora só vale para os efeitos bons das poções.",
            "O bônus de duração das poções da Alquimia vale só para quem bebeu, sem passar para a mesma poção de outros jogadores.",
            "Se um bônus do RPG Skills der errado, a pesca e a colheita continuam funcionando normalmente.",
            "Aliados da Necromancia e o modo desenvolvedor não passam mais de um mundo para o outro.",
            "Se o jogo fechar no meio da gravação, a configuração anterior fica inteira em vez de corrompida."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Points across updates:</strong> updating RPG Skills no longer resets your class points.",
            "<strong>Points across updates:</strong> in this and future versions, spent points, level, XP and Shop purchases stay as they were, with no need to spend them again.",
            "<strong>Points across updates:</strong> the \"Class respec on updates\" option was removed from the config.",
            "<strong>Chest filter:</strong> the filter for chests with extra slots uses the game's own categories, the same ones as the settlers' storage filter.",
            "<strong>Chest filter:</strong> first you pick a group (Equipment, Materials, Consumable, Objects, Tiles...) and then go down into its subcategories, for example Equipment, Weapons and Melee weapons.",
            "<strong>Chest filter:</strong> each group has its own colored icon, easy to recognize at a glance.",
            "<strong>Chest filter:</strong> inside subcategories, a Back button takes you back to the category above.",
            "<strong>New Shop:</strong> the Shop tab was rebuilt as separate cards: XP bonus, World stack, Chest slots and Explosive Miner.",
            "<strong>New Shop:</strong> each card has an icon, an explanation of what the purchase does, the current state and its buttons.",
            "<strong>New Shop:</strong> prices show the game's own item icons (coins, bars and dynamite) with the amount next to them.",
            "<strong>New Shop:</strong> hover over an icon to see the item name.",
            "<strong>New Shop:</strong> the World stack card explains that the purchase raises how many items fit in each slot in this world, for every player.",
            "<strong>New Shop:</strong> at 2x, a 100-item slot holds 200.",
            "<strong>New Shop:</strong> the Chest slots card says the purchase adds slots to the world's chests for everyone and how many slots each purchase gives.",
            "<strong>New Shop:</strong> the XP buff has its own icon, a green orb with an up arrow.",
            "<strong>Settlement expansion:</strong> a new Shop card that expands the settlement you are standing in, without opening the flag.",
            "<strong>Settlement expansion:</strong> the card shows the current size, the next one and the cost with item icons.",
            "<strong>Settlement expansion:</strong> only the settlement owner can expand it.",
            "<strong>Settlement expansion:</strong> the card updates by itself when you walk into or out of a settlement with the Shop open.",
            "<strong>Bigger settlements:</strong> after the game's 7 levels come 49 more, up to 1,840x1,840 tiles.",
            "<strong>Bigger settlements:</strong> each extra level asks for coins and a rotating set of late-game materials (bars, gems and essences).",
            "<strong>Bigger settlements:</strong> the amounts asked grow every level.",
            "<strong>Bigger settlements:</strong> these levels also show up on the settlement flag.",
            "<strong>Bigger settlements:</strong> very large settlements make the world heavier to run.",
            "<strong>Ally outlines:</strong> allies summoned by the Necromancy ritual now have a glowing purple outline, easy to tell apart from enemies in the middle of a fight.",
            "<strong>Ally outlines:</strong> Army of the Dead allies have a gold outline, so you know which ones will disappear.",
            "<strong>Ally outlines:</strong> Army of the Dead is the 50% chance at level 5 that turns enemies into allies for 1 minute.",
            "<strong>Health potion:</strong> by default, you and your settlers can drink health potions back to back, with no wait.",
            "<strong>Health potion:</strong> the game's \"Health potion fatigue\" is no longer applied.",
            "<strong>Health potion:</strong> in the config's Features tab, Potions section, you can change the wait for the player and for settlers.",
            "<strong>Health potion:</strong> -1 goes back to the game value (30 seconds), and any other number becomes the wait in seconds.",
            "<strong>Health potion:</strong> on a server, the server's config applies to every player."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "Moving items, merging stacks and opening chests is faster, especially with many items.",
            "Settlers weigh less on the server in large colonies.",
            "The Machine Master, Nature Master and Trap Master bonuses cost the game less, even in very large settlements.",
            "Necromancy ritual allies weigh less while moving.",
            "With the Necromancy tab open during a fight, the RPG Skills window only updates what changed, instead of rebuilding everything several times per second.",
            "The on-screen XP bar costs less every frame.",
            "Players and monsters with buffs (speed, damage, defense) cost the game less.",
            "RPG Skills weighs less on the server for each connected player."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "RPG Skills finds the Safe Haven 5.0 config in its new folder.",
            "Your Safe Haven options are brought over from the old location."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "When you change the game language, the Necromancy tab, the monster names in the Grimoire and the Ritual panel switch language right away, with no restart needed.",
            "Everything you change and save in the RPG Skills config stays saved when restarting the game, even after playing a world and going back to the menu.",
            "Monster names that do not fit on the card or in a Ritual slot scroll like a marquee, instead of being cut or overlapping the line below.",
            "Config symbols that showed up as \"?\" (like the Accelerated Sleep arrow and the dash in \"0-255\") were replaced in every language.",
            "Some config texts were fixed.",
            "On a server, RPG Skills chat notices (shop, mining, reset, Necromancy) arrive in your game's language, not the server's.",
            "Necromancy notices that did not show up in chat now do.",
            "When you join a server, RPG Skills uses its rules (XP, classes, shop costs, enabled options).",
            "Your config file does not change, and when you leave the server everything goes back to your own settings.",
            "Level-up fireworks, the inventory button and the status line stay the way you set them on the server.",
            "The Alchemy Master's potion duration bonus no longer stretches health and mana potion fatigue, which made alchemists wait longer to drink another one.",
            "That bonus now only applies to the good potion effects.",
            "The Alchemy potion duration bonus only applies to whoever drank it, without carrying over to the same potion for other players.",
            "If an RPG Skills bonus goes wrong, fishing and harvesting keep working normally.",
            "Necromancy allies and developer mode no longer carry over from one world to another.",
            "If the game closes in the middle of saving, the previous config stays intact instead of corrupted."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "3.9",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 3.9 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Com a regra \"1 perda por ciclo de estrago\" do RPG Skills ligada, a opção igual do Safe Haven é desligada, para as duas não valerem ao mesmo tempo."
          ]
        },
        {
          "heading": "⚠️ Importante",
          "items": [
            "Em multiplayer, o servidor e todos os jogadores precisam estar na versão 3.9."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "A luz extra do Cinto Brilhante e do Fogo-Fátuo, na Ruína Sombria do Mestre das Cavernas, agora fica estável.",
            "Antes, essa luz piscava várias vezes por segundo.",
            "A fusão Hemorragia Congelada agora dá o bônus de dano que prometia.",
            "O bônus de loot ao colher frutas e sementes agora funciona.",
            "O desconto da loja do assentamento do Mestre dos Reinos agora vale também para as expedições.",
            "A aba Necromancia e a barra Ritual mostram seus dados corretamente em servidor dedicado.",
            "Em singleplayer e para quem hospeda o mundo, o XP e o nível não voltam mais para um valor antigo.",
            "Com só 1 backup configurado, restaurar o inventário não falha mais nem perde esse backup.",
            "Os slots de baú comprados não se perdem mais se o limite de slots for reduzido na configuração.",
            "Esses slots voltam quando o limite sobe de novo.",
            "A Loja cobra moedas e barras do inventário do mesmo jeito que a loja do jogo cobra.",
            "Se algo der errado no meio de uma compra, você recebe tudo de volta.",
            "O que não couber no inventário na devolução cai no chão.",
            "Os multiplicadores do buff de XP à venda seguem a configuração do servidor, em vez de serem sempre 2x, 5x e 10x.",
            "Sobrevivência Fatal e Espinhos agora funcionam de forma consistente em multiplayer.",
            "Os textos de desbloqueio de algumas classes que apareciam em inglês agora estão traduzidos em alemão, espanhol, francês, italiano, japonês, holandês, polonês, russo e chinês."
          ]
        },
        {
          "heading": "🔒 Multiplayer mais seguro",
          "items": [
            "Em mundo hospedado (aberto para amigos), só o dono do mundo e os admins do servidor usam os comandos de admin do mod.",
            "Antes, qualquer jogador conectado conseguia usar esses comandos.",
            "Em singleplayer nada muda.",
            "O <em>/rpgskills restore inventory</em> agora é só para administradores, porque podia ser usado para duplicar itens.",
            "Ver a lista de backups continua liberado para todos.",
            "O reset de slots de baú e de stack vale para o mundo inteiro, então agora exige admin, mesmo com a Loja liberada para todos.",
            "Não dá mais para tirar pontos de classe sem pagar o respec.",
            "Um jogador mal-intencionado não consegue mais travar o servidor."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.9 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "With RPG Skills' \"one loss per spoil cycle\" rule on, Safe Haven's matching option is turned off, so both do not apply at the same time."
          ]
        },
        {
          "heading": "⚠️ Important",
          "items": [
            "In multiplayer, the server and every player must be on version 3.9."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The extra light from the Shine Belt and the Will-o'-Wisp, in the Cavern Master's Dark Ruin, is now steady.",
            "Before, that light flickered several times per second.",
            "The Frozen Hemorrhage fusion now grants the damage bonus it promised.",
            "The loot bonus when harvesting fruit and seeds now works.",
            "The Realm Master's settlement shop discount now also applies to expeditions.",
            "The Necromancy tab and the Ritual bar show your data correctly on dedicated servers.",
            "In singleplayer and for whoever hosts the world, XP and level no longer jump back to an old value.",
            "With only 1 backup configured, restoring the inventory no longer fails or loses that backup.",
            "Bought chest slots are no longer lost if the slot limit is lowered in the config.",
            "Those slots come back when the limit is raised again.",
            "The Shop charges coins and bars from your inventory the same way the game's shop does.",
            "If something goes wrong in the middle of a purchase, you get everything back.",
            "Whatever does not fit in your inventory on the refund drops on the ground.",
            "The XP buff multipliers for sale follow the server's config, instead of always being 2x, 5x and 10x.",
            "Fatal Survival and Thorns now work consistently in multiplayer.",
            "Unlock texts for some classes that showed up in English are now translated into German, Spanish, French, Italian, Japanese, Dutch, Polish, Russian and Chinese."
          ]
        },
        {
          "heading": "🔒 Safer multiplayer",
          "items": [
            "In a hosted world (open to friends), only the world owner and server admins can use the mod's admin commands.",
            "Before, any connected player could use those commands.",
            "Nothing changes in singleplayer.",
            "<em>/rpgskills restore inventory</em> is now admins only, because it could be used to duplicate items.",
            "Viewing the backup list is still open to everyone.",
            "The chest slot and stack reset applies to the whole world, so it now requires admin, even when the Shop is open to everyone.",
            "Class points can no longer be removed without paying for the respec.",
            "A malicious player can no longer freeze the server."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "3.8",
    "tag": "fix",
    "tagClass": "fix",
    "tagKey": "changelog.tag.fix",
    "pt": {
      "title": "🌟 Atualização 3.8 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "A passiva Escriba Imortal do Mestre Arcano agora também funciona com o Safe Haven QOL.",
            "Com o Safe Haven, o pergaminho de encantamento abre a janela de encantamento múltiplo do Safe Haven.",
            "Antes, essa janela gastava o pergaminho por conta própria e ignorava a passiva.",
            "Agora o pergaminho de encantamento não é mais consumido."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.8 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "The Arcane Master's Immortal Scribe passive now also works with Safe Haven QOL.",
            "With Safe Haven, the enchant scroll opens Safe Haven's multi-enchant window.",
            "Before, that window spent the scroll on its own and ignored the passive.",
            "Now the enchant scroll is no longer consumed."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "3.7",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 3.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Mestre da Necromancia:</strong> a Necromancia agora é uma classe, o Mestre da Necromancia.",
            "<strong>Mestre da Necromancia:</strong> tudo traduzido para os 12 idiomas do mod.",
            "<strong>Mestre da Necromancia:</strong> para administradores, /rpgskills necro setlevel <slot 1-3> <nível 1-100> define o nível de um lacaio, útil para testes.",
            "<strong>Nível dos lacaios:</strong> a caçada de 150/300/500 vitórias acabou, e agora os lacaios crescem lutando ao seu lado, até o nível 100.",
            "<strong>Nível dos lacaios:</strong> para poder invocar um monstro, é preciso derrotá-lo 300 vezes se for comum, 150 se for elite e 50 se for chefe.",
            "<strong>Nível dos lacaios:</strong> o card no Grimório mostra o progresso (ex.: 120/300), e o chat avisa quando o monstro é liberado.",
            "<strong>Nível dos lacaios:</strong> o lacaio que derrota um inimigo ganha o XP inteiro.",
            "<strong>Nível dos lacaios:</strong> os outros lacaios chamados ganham metade, inclusive quando quem derrota é você.",
            "<strong>Nível dos lacaios:</strong> inimigos mais fortes dão mais XP.",
            "<strong>Nível dos lacaios:</strong> cada nível dá +1,5% de dano, chegando a +148,5% no nível 100.",
            "<strong>Nível dos lacaios:</strong> o chat avisa a cada 10 níveis.",
            "<strong>Nível dos lacaios:</strong> o lacaio solta faíscas douradas quando sobe de nível.",
            "<strong>Nível dos lacaios:</strong> trocar ou remover um lacaio não apaga o progresso dele, e invocado de novo ele volta com o nível que tinha.",
            "<strong>Maestria:</strong> no nível 100 aparece o botão Maestria no slot do lacaio.",
            "<strong>Maestria:</strong> ao aplicar, o lacaio volta para o nível 1 e ganha +10% de dano permanente.",
            "<strong>Maestria:</strong> dá para aplicar até 10 Maestrias no mesmo lacaio, somando +100% de dano permanente.",
            "<strong>Lacaios em combate:</strong> cada lacaio luta como o monstro de verdade, com os mesmos ataques, investidas, pulos, magias e habilidades que ele tem como inimigo.",
            "<strong>Lacaios em combate:</strong> o lacaio mira os inimigos perto de você em vez dos jogadores.",
            "<strong>Lacaios em combate:</strong> sem alvo, o lacaio volta para o seu lado em vez de vagar pelo mapa.",
            "<strong>Lacaios em combate:</strong> os projéteis e magias dos lacaios são teleguiados e perseguem o inimigo mais próximo até acertar.",
            "<strong>Lacaios em combate:</strong> os lacaios focam no inimigo que você está acertando ou que está te atacando.",
            "<strong>Lacaios em combate:</strong> os lacaios só escolhem inimigos a até 12 tiles de você.",
            "<strong>Lacaios em combate:</strong> se perseguirem algo para longe demais, os lacaios largam o alvo e voltam.",
            "<strong>Lacaios em combate:</strong> o lacaio preso no mesmo lugar por 10 segundos, longe de você e sem lutar, se teleporta para o seu lado com a animação do ritual.",
            "<strong>Aba Necromancia:</strong> novo visual no estilo do Grimório, com cabeçalho mostrando o emblema da classe, o nível (1 a 5), o poder atual e o próximo desbloqueio.",
            "<strong>Aba Necromancia:</strong> cada slot de ritual virou uma ficha do lacaio, com nível e Maestria.",
            "<strong>Aba Necromancia:</strong> a ficha tem uma barra de XP com quanto falta para o próximo nível.",
            "<strong>Aba Necromancia:</strong> a ficha mostra o dano por golpe com todos os bônus, o bônus total de dano e o tipo de ataque.",
            "<strong>Aba Necromancia:</strong> os botões Chamar/Guardar, Remover e Maestria ficam no próprio slot.",
            "<strong>Aba Necromancia:</strong> o slot invocado fica com moldura roxa.",
            "<strong>Aba Necromancia:</strong> o Grimório mostra quantos monstros você já derrotou.",
            "<strong>Aba Necromancia:</strong> cada card mostra o nível de classe exigido, as vitórias e o progresso guardado.",
            "<strong>Aba Necromancia:</strong> os textos não se sobrepõem mais.",
            "<strong>Aba Necromancia:</strong> monstros que estavam sem imagem (Escorpião Gigante, Mago Esqueleto, Bruxa Velha, Golem e Morcego Ascendidos...) agora aparecem com o desenho do próprio monstro.",
            "<strong>Barra Ritual:</strong> painel novo com a moldura dourada do mod.",
            "<strong>Barra Ritual:</strong> lacaio invocado tem moldura roxa brilhante, lacaio descansando tem moldura dourada e slot vazio tem moldura tracejada.",
            "<strong>Barra Ritual:</strong> a tecla de cada slot aparece num selo no canto.",
            "<strong>Barra Ritual:</strong> o nível do lacaio aparece embaixo do slot.",
            "<strong>Painel de configuração:</strong> as opções do painel RPG SKILLS CONFIG ficam em abas na lateral, com subtítulos dentro de cada aba, sem rolar uma lista gigante.",
            "<strong>Painel de configuração:</strong> as abas são Progressão e XP, Funcionalidades, Passivas, Classes, Economia e Loja, Qualidade de vida, Interface, Servidor e Compat.",
            "<strong>Painel de configuração:</strong> opção diferente do padrão fica dourada e ganha o botão Padrão.",
            "<strong>Painel de configuração:</strong> passar o mouse no valor mostra o padrão e a faixa permitida.",
            "<strong>Painel de configuração:</strong> mudança ainda não salva fica verde.",
            "<strong>Painel de configuração:</strong> a aba aberta fica amarela, e a aba com mudança ganha um *.",
            "<strong>Painel de configuração:</strong> o botão de salvar mostra quantas mudanças faltam, como Salvar (3).",
            "<strong>Painel de configuração:</strong> Desfazer descarta tudo, e Padrões da aba restaura a aba inteira.",
            "<strong>Painel de configuração:</strong> abas só de liga/desliga (Passivas, Classes) têm Ligar tudo e Desligar tudo.",
            "<strong>Painel de configuração:</strong> números com faixa grande ganham os botões -- e ++, com passo x10.",
            "<strong>Painel de configuração:</strong> a janela pode ser arrastada pelo título.",
            "<strong>Painel de configuração:</strong> a janela abre onde você a deixou da última vez, e centralizada na primeira vez.",
            "<strong>Painel de configuração:</strong> fechar a janela sem salvar não perde as mudanças, que ficam lá até você salvar ou desfazer."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Jogando com os dois mods, o RPG Skills desliga no Safe Haven só o que dá de graça o que as classes ensinam, para as classes continuarem valendo a pena.",
            "Fica desligado o dano 2x de armas de fogo (Mestre Atirador).",
            "Fica desligado o +2 invocações (Mestre Invocador).",
            "Fica desligado o botão \"3x\" das máquinas (Mestre das Máquinas).",
            "Fica desligado o Banco de Juros, porque moedas de graça todo dia atrapalhavam a loja e o Mestre da Riqueza.",
            "Ficam desligados os 3x de drops da Fênix e do Golem de Cinzas (Mestre do Loot).",
            "Fica desligado o +10 de felicidade por dividir quarto (Mestre dos Reinos).",
            "Fica desligado o início dos colonos já no nível 20 de qualidade de vida (Mestre dos Reinos).",
            "Ficam desligadas as abelhas fertilizando plantações (Mestre da Natureza).",
            "Ficam desligados os 40 slots de acessório (Mestre das Relíquias).",
            "Ficam desligados os acessórios repetidos somando bônus (Mestre das Relíquias).",
            "Fica desligado o minério sempre brilhando no escuro (Mestre das Cavernas).",
            "Continuam desligados como antes: pilhas extras, mineração em veio, incinerador instantâneo e loot triplo de animais.",
            "Todo o resto do Safe Haven continua funcionando normalmente (HUD, mapas, construção, baús, cores, plantas de construção etc.).",
            "Se o Safe Haven religar alguma dessas opções pelo menu dele durante o jogo, o RPG Skills desliga de novo em poucos segundos.",
            "O dono do servidor que preferir manter tudo do Safe Haven pode desligar essa trava com compat.safeHavenBalanceLock=false na configuração do RPG Skills."
          ]
        },
        {
          "heading": "⚠️ Importante",
          "items": [
            "Seus saves continuam funcionando.",
            "As vitórias da 3.6 continuam no Grimório, e os lacaios nos slots são mantidos.",
            "Um monstro que tinha 500 ou mais vitórias (Tier 3 da antiga caçada) começa no nível 15.",
            "Para invocar, agora é preciso ter a classe Mestre da Necromancia.",
            "Slots acima do nível da sua classe ficam descansando, sem perder o lacaio."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O jogo não trava mais ao entrar no mundo com o Safe Haven QOL.",
            "Esse travamento vinha de uma parte do jogo que mudou no Necesse 1.3.3, e o Safe Haven, ao ajustar os sets de equipamento, fazia o jogo passar por ela.",
            "Outros 4 pontos do mesmo tipo, que podiam travar a Fusão Elemental, a caçada dos Cavelings, a bolsa de moedas do Mestre e a recuperação de construção, também foram corrigidos.",
            "Foi removida uma parte antiga do bônus de colheita do Mestre das Relíquias que não fazia nada, e o bônus continua funcionando normalmente.",
            "Remover, invocar ou guardar um lacaio atualiza a aba Necromancia na hora, em vez de só mudar ao reabrir.",
            "O XP e as vitórias também se atualizam com a aba Necromancia aberta.",
            "Pedaços de outras telas não aparecem mais no meio da lista de monstros da aba Necromancia.",
            "O Grimório não lista mais partes de chefes, monstros sem nome ou que não podem ser invocados.",
            "O Grimório foi revisado contra a lista de monstros do jogo.",
            "Voltaram ao Grimório monstros que sumiam por engano: Lançador de Limo com Pernas, Limo Fantasma e as três Bruxas Malignas (frasco, arco e espadão).",
            "Também voltaram o Goblin Suspeitosamente Alto, os goblins do capacete, peitoral e sapatos, e o Mímico.",
            "Saíram do Grimório os monstros que só funcionam na água ou na lava (Tubarão e Flameling).",
            "Saíram do Grimório os chefes de vários corpos que ainda apareciam (Dragão de Cristal, Sábio e Grit).",
            "O Urso-pardo invocado não fica mais dormindo: ele nasce acordado e luta como o urso de verdade.",
            "Daqui para frente, um teste automático compara o mod com o jogo instalado antes de cada versão, para pegar esse tipo de erro antes de chegar até vocês."
          ]
        },
        {
          "heading": "💀 Mestre da Necromancia",
          "items": [
            "O nível 1 (Despertar) libera 1 slot de ritual e os monstros comuns.",
            "O nível 2 (Legião) libera o 2º slot de ritual e os monstros elite.",
            "O nível 2 também dá +25% de XP para os lacaios.",
            "O nível 3 (Elo Sombrio) libera o 3º slot de ritual.",
            "No nível 3, os lacaios recebem metade do seu bônus de dano de invocação.",
            "No nível 3, 3 lacaios do mesmo monstro causam +50% de dano contra aquele monstro.",
            "O nível 4 (Soberano dos Chefes) deixa invocar como lacaio 1 chefe que você já derrotou, com 40% do poder dele.",
            "No nível 5 (Exército dos Mortos), cada inimigo que você ou seus lacaios derrotam tem 50% de chance de se levantar como servo por 1 minuto.",
            "Até 3 servos ficam de pé ao mesmo tempo.",
            "No nível 5, os lacaios com Maestria recebem a Ascensão: +25% de dano."
          ]
        },
        {
          "heading": "📈 Progressão",
          "items": [
            "Com a classe nova (34 classes × 5 pontos), o nível máximo passa de 165 para 170, para ainda dar para completar todas as classes.",
            "Configurações que usavam o máximo antigo (165) passam para 170 sozinhas.",
            "A passiva Mestre das Classes continua exigindo todas as classes no máximo, o que agora inclui o Mestre da Necromancia."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Necromancy Master:</strong> Necromancy is now a class, the Necromancy Master.",
            "<strong>Necromancy Master:</strong> everything translated into the mod's 12 languages.",
            "<strong>Necromancy Master:</strong> for admins, /rpgskills necro setlevel <slot 1-3> <level 1-100> sets a minion's level, useful for testing.",
            "<strong>Minion levels:</strong> the 150/300/500-victory hunt is gone, and now minions grow by fighting at your side, up to level 100.",
            "<strong>Minion levels:</strong> to summon a monster you need to defeat it 300 times if it is common, 150 if it is elite and 50 if it is a boss.",
            "<strong>Minion levels:</strong> the Grimoire card shows your progress (e.g. 120/300), and the chat lets you know when the monster unlocks.",
            "<strong>Minion levels:</strong> the minion that defeats an enemy gets the full XP.",
            "<strong>Minion levels:</strong> the other summoned minions get half, including when you are the one who defeats it.",
            "<strong>Minion levels:</strong> stronger enemies give more XP.",
            "<strong>Minion levels:</strong> each level gives +1.5% damage, reaching +148.5% at level 100.",
            "<strong>Minion levels:</strong> the chat announces every 10 levels.",
            "<strong>Minion levels:</strong> the minion gives off golden sparks when it levels up.",
            "<strong>Minion levels:</strong> replacing or removing a minion does not erase its progress, and when summoned again it comes back at the level it had.",
            "<strong>Mastery:</strong> at level 100 a Mastery button appears on the minion's slot.",
            "<strong>Mastery:</strong> applying it sends the minion back to level 1 with +10% permanent damage.",
            "<strong>Mastery:</strong> you can apply up to 10 Masteries to the same minion, adding up to +100% permanent damage.",
            "<strong>Minions in combat:</strong> every minion fights like the real monster, with the same attacks, charges, jumps, spells and abilities it has as an enemy.",
            "<strong>Minions in combat:</strong> a minion targets the enemies near you instead of players.",
            "<strong>Minions in combat:</strong> with no target, a minion comes back to your side instead of wandering around the map.",
            "<strong>Minions in combat:</strong> minion projectiles and spells are homing and chase the nearest enemy until they hit.",
            "<strong>Minions in combat:</strong> minions focus on the enemy you are hitting or the one attacking you.",
            "<strong>Minions in combat:</strong> minions only pick enemies within 12 tiles of you.",
            "<strong>Minions in combat:</strong> if they chase something too far, minions drop it and come back.",
            "<strong>Minions in combat:</strong> a minion stuck in the same place for 10 seconds, away from you and not fighting, teleports to your side with the ritual animation.",
            "<strong>Necromancy tab:</strong> new Grimoire-style look, with a header showing the class emblem, level (1 to 5), your current power and the next unlock.",
            "<strong>Necromancy tab:</strong> each ritual slot is now a minion sheet, with level and Mastery.",
            "<strong>Necromancy tab:</strong> the sheet has an XP bar with how much is left to the next level.",
            "<strong>Necromancy tab:</strong> the sheet shows damage per hit with every bonus applied, the total damage bonus and the attack type.",
            "<strong>Necromancy tab:</strong> the Summon/Rest, Dismiss and Mastery buttons are right on the slot.",
            "<strong>Necromancy tab:</strong> the summoned slot gets a purple frame.",
            "<strong>Necromancy tab:</strong> the Grimoire shows how many monsters you have defeated.",
            "<strong>Necromancy tab:</strong> each card shows the required class level, victories and saved progress.",
            "<strong>Necromancy tab:</strong> texts no longer overlap.",
            "<strong>Necromancy tab:</strong> monsters that had no picture (Giant Scorpion, Skeleton Mage, Crone, Ascended Golem and Bat...) now show the monster's own sprite.",
            "<strong>Ritual bar:</strong> new panel with the mod's golden frame.",
            "<strong>Ritual bar:</strong> a summoned minion has a glowing purple frame, a resting minion has a golden frame and an empty slot has a dashed frame.",
            "<strong>Ritual bar:</strong> each slot's key shows on a badge in the corner.",
            "<strong>Ritual bar:</strong> the minion's level shows below the slot.",
            "<strong>Config panel:</strong> the RPG SKILLS CONFIG panel's options live in tabs on the side, with subtitles inside each tab, with no giant list to scroll.",
            "<strong>Config panel:</strong> the tabs are Progression & XP, Features, Passives, Classes, Economy & Shop, Quality of life, Interface, Server & Compat.",
            "<strong>Config panel:</strong> an option that differs from the default turns gold and gets a Default button.",
            "<strong>Config panel:</strong> hovering the value shows the default and the allowed range.",
            "<strong>Config panel:</strong> unsaved changes turn green.",
            "<strong>Config panel:</strong> the open tab is yellow, and a tab with changes gets a *.",
            "<strong>Config panel:</strong> the save button shows how many changes are left, like Save (3).",
            "<strong>Config panel:</strong> Undo drops everything, and Tab defaults restores the whole tab.",
            "<strong>Config panel:</strong> toggle-only tabs (Passives, Classes) have All on and All off.",
            "<strong>Config panel:</strong> numbers with a large range get -- and ++ buttons, with a x10 step.",
            "<strong>Config panel:</strong> the window can be dragged by its title.",
            "<strong>Config panel:</strong> the window opens where you left it last time, and centered the first time.",
            "<strong>Config panel:</strong> closing the window without saving does not lose your changes, which stay until you save or undo."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "When you play with both mods, RPG Skills turns off in Safe Haven only what gives away for free what the classes teach, so the classes stay worth it.",
            "2x gun damage is turned off (Marksman Master).",
            "+2 summons is turned off (Summon Master).",
            "The machines' \"3x\" button is turned off (Machine Master).",
            "The Interest Bank is turned off, because free coins every day broke the shop and the Wealth Master.",
            "Phoenix and Ash Golem 3x drops are turned off (Loot Master).",
            "+10 happiness for sharing a room is turned off (Realm Master).",
            "Settlers starting at quality of life 20 is turned off (Realm Master).",
            "Bees fertilizing crops is turned off (Nature Master).",
            "40 trinket slots is turned off (Relic Master).",
            "Repeated trinkets stacking their bonus is turned off (Relic Master).",
            "Ore always glowing in the dark is turned off (Cavern Master).",
            "Still off as before: extra stack sizes, vein mining, instant incinerator and triple animal loot.",
            "Everything else in Safe Haven keeps working normally (HUD, maps, building, chests, colors, blueprints and more).",
            "If Safe Haven turns one of these back on from its own menu during the game, RPG Skills turns it off again within a few seconds.",
            "A server owner who prefers to keep every Safe Haven feature can turn this lock off with compat.safeHavenBalanceLock=false in the RPG Skills config."
          ]
        },
        {
          "heading": "⚠️ Important",
          "items": [
            "Your saves keep working.",
            "Victories from 3.6 stay in the Grimoire, and minions in the slots are kept.",
            "A monster that had 500 or more victories (Tier 3 of the old hunt) starts at level 15.",
            "Summoning now requires the Necromancy Master class.",
            "Slots above your class level rest without losing the minion."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The game no longer crashes when joining a world with Safe Haven QOL.",
            "The crash came from a part of the game that changed in Necesse 1.3.3, and Safe Haven, by adjusting equipment sets, made the game go through it.",
            "4 more spots of the same kind, which could crash Elemental Fusion, the Caveling hunt, the Master's coin pouch and construction recovery, were also fixed.",
            "An old part of the Relic Master's harvest bonus that did nothing was removed, and the bonus keeps working normally.",
            "Dismissing, summoning or resting a minion updates the Necromancy tab right away, instead of only after reopening.",
            "XP and victories also update while the Necromancy tab is open.",
            "Pieces of other screens no longer show up in the middle of the Necromancy tab's monster list.",
            "The Grimoire no longer lists boss parts, nameless monsters or monsters that cannot be summoned.",
            "The Grimoire was checked against the game's monster list.",
            "Monsters hidden by mistake are back in the Grimoire: Legged Slime Thrower, Ghost Slime and the three Evil Witches (flask, bow and greatsword).",
            "The Suspiciously Tall Goblin, the Helmet, Chestplate and Shoes Goblins, and the Mimic are back too.",
            "Monsters that only work in water or lava (Shark and Flameling) were removed from the Grimoire.",
            "Multi-body bosses that still showed up (Crystal Dragon, Sage and Grit) were removed from the Grimoire.",
            "A summoned Grizzly Bear no longer stays asleep: it spawns awake and fights like the real bear.",
            "From now on, an automatic test checks the mod against the installed game before every version, to catch this kind of error before it reaches you."
          ]
        },
        {
          "heading": "💀 Necromancy Master",
          "items": [
            "Level 1 (Awakening) unlocks 1 ritual slot and common monsters.",
            "Level 2 (Legion) unlocks the 2nd ritual slot and elite monsters.",
            "Level 2 also gives +25% minion XP.",
            "Level 3 (Shadow Link) unlocks the 3rd ritual slot.",
            "At level 3, minions get half of your summon damage bonus.",
            "At level 3, 3 minions of the same monster deal +50% damage against that monster.",
            "Level 4 (Lord of Bosses) lets you summon as a minion 1 boss you have defeated, with 40% of its power.",
            "At level 5 (Army of the Dead), every enemy you or your minions defeat has a 50% chance to rise as a servant for 1 minute.",
            "Up to 3 servants stand at once.",
            "At level 5, minions with Mastery get Ascension: +25% damage."
          ]
        },
        {
          "heading": "📈 Progression",
          "items": [
            "With the new class (34 classes × 5 points), the max level goes from 165 to 170, so it is still possible to complete every class.",
            "Configs that used the old max (165) move to 170 automatically.",
            "The Master of Classes passive still requires every class maxed, which now includes the Necromancy Master."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "3.6",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 3.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Necromancia:</strong> derrote monstros para dominá-los e transformá-los em aliados que lutam ao seu lado.",
            "<strong>Necromancia:</strong> cada monstro que você derrota conta uma vitória para aquele tipo de monstro.",
            "<strong>Necromancia:</strong> vale para tudo que tenta te matar: monstros comuns de cada bioma, elites e chefes.",
            "<strong>Necromancia:</strong> com vitórias suficientes, o monstro sobe de Tier, de 0/3 até 3/3.",
            "<strong>Necromancia:</strong> cada Tier libera 1 aliado daquele monstro.",
            "<strong>Necromancia:</strong> para invocar, abra o Grimório, vá na aba Necromancia e clique em Invocar no monstro que você quer.",
            "<strong>Necromancia:</strong> o chat avisa quando um monstro sobe de Tier.",
            "<strong>Necromancia:</strong> se a invocação não puder ser feita, o chat explica o motivo, como vitórias insuficientes ou slots cheios.",
            "<strong>Necromancia:</strong> o aliado te segue e ataca os inimigos como uma invocação.",
            "<strong>Necromancia:</strong> o aliado é imortal e os inimigos o ignoram.",
            "<strong>Necromancia:</strong> tudo traduzido para os 12 idiomas do mod.",
            "<strong>Necromancia:</strong> para administradores, /rpgskills necro setkills <monstro> <vitórias> define as vitórias de um monstro, útil para testes.",
            "<strong>Vitórias:</strong> monstros comuns pedem 150 / 300 / 500 vitórias.",
            "<strong>Vitórias:</strong> monstros elite, mais fortes, pedem 300 / 600 / 1000 vitórias.",
            "<strong>Vitórias:</strong> chefes pedem 50 / 100 / 150 vitórias.",
            "<strong>Vitórias:</strong> os chefes já contam vitórias, mas ainda não podem ser invocados e chegam como miniaturas numa próxima atualização.",
            "<strong>Aliados de ritual:</strong> você pode ter até 3 aliados de ritual ao mesmo tempo.",
            "<strong>Aliados de ritual:</strong> eles não ocupam os espaços das suas invocações normais, e dá para usar os dois juntos.",
            "<strong>Aliados de ritual:</strong> ficam com você até você removê-los.",
            "<strong>Aliados de ritual:</strong> voltam sozinhos quando você entra no mundo de novo.",
            "<strong>Aliados de ritual:</strong> causam o dano de verdade daquele monstro.",
            "<strong>Aliados de ritual:</strong> andam na mesma velocidade das invocações do jogo e atravessam portas como elas.",
            "<strong>Aliados de ritual:</strong> com os 3 aliados do mesmo monstro e esse monstro no Tier 3/3, você causa o dobro de dano (+100%) contra aquele tipo de monstro.",
            "<strong>Barra de ritual:</strong> a barra Ritual, no lado direito da tela, mostra seus 3 aliados.",
            "<strong>Barra de ritual:</strong> slot destacado é aliado invocado, e slot normal é aliado descansando.",
            "<strong>Barra de ritual:</strong> cada slot tem sua própria tecla, escolhida em Configurações > Controles (procure por \"Aliado de ritual\").",
            "<strong>Barra de ritual:</strong> também dá para clicar no slot.",
            "<strong>Barra de ritual:</strong> apertar a tecla chama o aliado: você conjura um círculo mágico roxo e verde e ele surge numa explosão de energia.",
            "<strong>Barra de ritual:</strong> apertar de novo guarda o aliado, que se desfaz numa névoa sombria.",
            "<strong>Barra de ritual:</strong> os outros jogadores também veem os efeitos.",
            "<strong>Aba Necromancia:</strong> os monstros aparecem em cartões com ícone, vitórias e progresso.",
            "<strong>Aba Necromancia:</strong> os cartões ficam separados por bioma, na ordem em que você os encontra no jogo (Floresta, Ninho de aranhas, Cripta de vampiros, Planícies, Neve, Pântano, Deserto, Masmorra, Templo...).",
            "<strong>Aba Necromancia:</strong> filtros rápidos Todos, Comum, Elite e Chefe."
          ]
        },
        {
          "heading": "⚠️ Importante",
          "items": [
            "Seus saves continuam funcionando.",
            "A Necromancia começa do zero e nada do seu progresso atual muda.",
            "Os aliados nunca ficam gravados no mundo, então remover o mod não deixa nenhum monstro solto."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Jogando com amigos do mesmo time, o XP agora é dividido entre vocês.",
            "Antes, cada um recebia o valor inteiro, e jogar em dupla dava o dobro de XP de jogar sozinho.",
            "Abrir Configurações > Controles não enche mais o registro de erros do jogo.",
            "Atalhos do mod sem tecla agora aparecem como \"NOT SET\", igual aos do jogo."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Necromancy:</strong> defeat monsters to master them and turn them into allies that fight by your side.",
            "<strong>Necromancy:</strong> every monster you defeat counts one victory for that kind of monster.",
            "<strong>Necromancy:</strong> it works for everything that tries to kill you: common monsters of every biome, elites and bosses.",
            "<strong>Necromancy:</strong> with enough victories, the monster goes up a Tier, from 0/3 to 3/3.",
            "<strong>Necromancy:</strong> each Tier unlocks 1 ally of that monster.",
            "<strong>Necromancy:</strong> to summon, open the Grimoire, go to the Necromancy tab and click Invoke on the monster you want.",
            "<strong>Necromancy:</strong> the chat lets you know when a monster goes up a Tier.",
            "<strong>Necromancy:</strong> if an ally cannot be summoned, the chat explains why, like not enough victories or slots full.",
            "<strong>Necromancy:</strong> the ally follows you and attacks enemies like a summon.",
            "<strong>Necromancy:</strong> the ally is immortal and enemies ignore it.",
            "<strong>Necromancy:</strong> everything translated into the mod's 12 languages.",
            "<strong>Necromancy:</strong> for admins, /rpgskills necro setkills <monster> <victories> sets a monster's victories, handy for testing.",
            "<strong>Victories:</strong> common monsters need 150 / 300 / 500 victories.",
            "<strong>Victories:</strong> elite monsters, the stronger ones, need 300 / 600 / 1000 victories.",
            "<strong>Victories:</strong> bosses need 50 / 100 / 150 victories.",
            "<strong>Victories:</strong> bosses already count victories but can't be summoned yet, and will arrive as miniatures in a future update.",
            "<strong>Ritual allies:</strong> you can have up to 3 ritual allies at the same time.",
            "<strong>Ritual allies:</strong> they don't use your regular summon slots, and you can use both together.",
            "<strong>Ritual allies:</strong> they stay with you until you remove them.",
            "<strong>Ritual allies:</strong> they come back on their own when you join the world again.",
            "<strong>Ritual allies:</strong> they deal the real damage of that monster.",
            "<strong>Ritual allies:</strong> they move at the same speed as the game's summons and walk through doors like them.",
            "<strong>Ritual allies:</strong> with all 3 allies of the same monster and that monster at Tier 3/3, you deal double damage (+100%) against that kind of monster.",
            "<strong>Ritual bar:</strong> the Ritual bar, on the right side of the screen, shows your 3 allies.",
            "<strong>Ritual bar:</strong> a highlighted slot is a summoned ally, and a normal slot is a resting ally.",
            "<strong>Ritual bar:</strong> each slot has its own key, picked in Settings > Controls (look for \"Ritual ally\").",
            "<strong>Ritual bar:</strong> you can also click the slot.",
            "<strong>Ritual bar:</strong> pressing the key calls the ally: you cast a purple and green magic circle and it bursts into the world in a flash of energy.",
            "<strong>Ritual bar:</strong> pressing it again puts the ally away, and it fades into a dark mist.",
            "<strong>Ritual bar:</strong> other players see the effects too.",
            "<strong>Necromancy tab:</strong> monsters show up as cards with icon, victories and progress.",
            "<strong>Necromancy tab:</strong> cards are grouped by biome, in the order you meet them in the game (Forest, Spider nest, Vampire crypt, Plains, Snow, Swamp, Desert, Dungeon, Temple...).",
            "<strong>Necromancy tab:</strong> quick filters All, Common, Elite and Boss."
          ]
        },
        {
          "heading": "⚠️ Important",
          "items": [
            "Your saves keep working.",
            "Necromancy starts from zero and none of your current progress changes.",
            "Allies are never saved in the world, so removing the mod leaves no monsters behind."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "When playing with friends on the same team, XP is now split between you.",
            "Before, each player got the full amount, so playing as a pair gave double the XP of playing solo.",
            "Opening Settings > Controls no longer floods the game's error log.",
            "Mod hotkeys without a key now show as \"NOT SET\", like the game's."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "3.5",
    "tag": "fix",
    "tagClass": "fix",
    "tagKey": "changelog.tag.fix",
    "pt": {
      "title": "🌟 Atualização 3.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "⚡ Desempenho",
          "items": [
            "A Ruína da Escuridão reforça a luz do Cinto brilhante e da Lanterna de fogo-fátuo de um jeito mais leve e estável.",
            "O reforço de luz usa a mesma cor e o mesmo ritmo de atualização da luz do jogo, em vez de atualizar o tempo todo.",
            "O reforço de luz não fica mais conferindo os efeitos do personagem a cada quadro.",
            "O atalho de ligar e desligar o reforço de luz continua funcionando.",
            "O servidor trabalha menos: a luz não é mais calculada nele, onde não tinha efeito visual."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O XP em time volta a ser dividido com a opção ativada.",
            "O primeiro time criado no servidor, o mais comum entre amigos, era tratado como \"sem time\" e ficava de fora.",
            "Agora qualquer time compartilha XP de combate e de settlement com os colegas próximos, como configurado.",
            "O Cinto brilhante não fica mais brilhante para todo mundo só por ter o mod instalado.",
            "Sem a passiva Ruína da Escuridão (Mestre das Cavernas), a luz do Cinto brilhante é exatamente a do jogo.",
            "A Lanterna de fogo-fátuo não tem mais luz instável quando equipada.",
            "O reforço da Ruína da Escuridão brigava com a luz do fogo-fátuo e agora acompanha o próprio fogo-fátuo, na mesma cor dele.",
            "Dois backups de inventário criados ao mesmo tempo não se sobrescrevem mais.",
            "O backup \"mais recente\" usado em /restore inventory é sempre o último salvo.",
            "Novos testes automáticos, incluindo um \"robô sabotador\", atacam o mod com dados quebrados, valores extremos e vários acessos ao mesmo tempo para pegar bugs antes de chegarem ao jogo."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "⚡ Performance",
          "items": [
            "Dark Ruin boosts the light of the Shine belt and Will-o'-wisp lantern in a lighter, steadier way.",
            "The light boost uses the same color and refresh rhythm as the game's light, instead of refreshing all the time.",
            "The light boost no longer checks the character's effects every frame.",
            "The hotkey to turn the light boost on and off still works.",
            "The server does less work: light is no longer processed there, where it had no visual effect."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Team XP is shared again with the option enabled.",
            "The first team created on a server, the usual one among friends, was treated as \"no team\" and left out.",
            "Now every team shares combat and settlement XP with nearby teammates as configured.",
            "The Shine belt no longer gets brighter for everyone just because the mod is installed.",
            "Without the Dark Ruin passive (Caverns Master), the Shine belt's light is exactly the vanilla one.",
            "The Will-o'-wisp lantern no longer has unstable light while equipped.",
            "The Dark Ruin boost fought with the wisp's own light and now follows the wisp itself, in its own color.",
            "Two inventory backups created at the same time no longer overwrite each other.",
            "The \"latest\" backup used by /restore inventory is always the last one saved.",
            "New automated tests, including a \"saboteur robot\", attack the mod with broken data, extreme values and many accesses at once to catch bugs before they reach the game."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "3.4",
    "tag": "fix",
    "tagClass": "fix",
    "tagKey": "changelog.tag.fix",
    "pt": {
      "title": "🌟 Atualização 3.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🔧 Correções",
          "items": [
            "Com o Mestre das Relíquias, o jogo não trava mais ao passar o mouse sobre os slots de acessórios, armadura, cosméticos ou habilidade.",
            "O bônus de slots era aplicado por engano também nos inventários de armadura, cosméticos e habilidade, deixando-os maiores do que o jogo esperava.",
            "Agora só os slots de acessórios recebem o bônus.",
            "Saves já afetados se consertam sozinhos ao entrar no mundo.",
            "Os inventários de armadura, cosméticos e habilidade voltam ao tamanho normal.",
            "Itens que estavam nos slots extras voltam para a mochila, ou caem no chão se ela estiver cheia.",
            "Se algum item não puder ser devolvido, nada é removido e o conserto tenta de novo depois."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🔧 Fixes",
          "items": [
            "With Relic Master, the game no longer freezes when hovering over trinket, armor, cosmetic or ability slots.",
            "The slot bonus was wrongly applied to the armor, cosmetic and ability inventories too, making them larger than the game expected.",
            "Now only trinket slots get the bonus.",
            "Saves that were already affected repair themselves when you enter the world.",
            "Armor, cosmetic and ability inventories go back to their normal size.",
            "Items that were in the extra slots return to your inventory, or drop on the ground if it is full.",
            "If an item cannot be returned, nothing is removed and the repair tries again later."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "3.3",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 3.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Fusão Elemental:</strong> com dois mestres de efeito no nível 5, os ataques passam a combinar esses efeitos.",
            "<strong>Fusão Elemental:</strong> fogo e gelo estilhaçam.",
            "<strong>Fusão Elemental:</strong> veneno e sangue espalham praga.",
            "<strong>Fusão Elemental:</strong> fogo e veneno queimam mais forte.",
            "<strong>Fusão Elemental:</strong> sangue e gelo deixam o próximo golpe mais pesado.",
            "<strong>Fusão Elemental:</strong> o pesadelo com outro efeito pode causar medo.",
            "<strong>Tempestade Interior:</strong> com Sanguinário, Incendiário, Venenoso, Congelante e Pesadelo no nível 5, o dano dos efeitos contínuos aumenta em 50%."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "Cada classe mostra um item próprio na lista e no detalhe, no estilo do jogo.",
            "Novo visual Grimório na janela de habilidades, com fundo escuro e opaco e moldura dourada.",
            "As abas da janela de habilidades ficam na lateral.",
            "O nível de cada classe aparece em bolinhas douradas.",
            "Os textos ficam mais fáceis de ler.",
            "O mundo não aparece mais por trás da janela."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Com o Safe Haven QOL 4.8, os discos de vinil empilháveis passam a seguir o sistema de pilhas do RPG Skills.",
            "Opções removidas do Safe Haven não são mais recriadas na configuração dele."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "A Hemorragia Gelada agora realmente aumenta em 30% o próximo golpe direto.",
            "Classes desativadas na configuração não contam mais para a Fusão Elemental nem para a Tempestade Interior.",
            "Um Estilhaço que mata o alvo agora conta o abate para o jogador.",
            "Os pontos de cada classe (ex.: 0 / 5) não ficam mais cortados pelo botão do nome."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Elemental Fusion:</strong> with two damage-over-time masters at level 5, attacks start combining those effects.",
            "<strong>Elemental Fusion:</strong> fire and frost shatter.",
            "<strong>Elemental Fusion:</strong> poison and blood spread plague.",
            "<strong>Elemental Fusion:</strong> fire and poison burn harder.",
            "<strong>Elemental Fusion:</strong> blood and frost make the next hit heavier.",
            "<strong>Elemental Fusion:</strong> nightmare with another effect can cause fear.",
            "<strong>Inner Storm:</strong> with Bloodthirsty, Incendiary, Venomous, Freezing and Nightmare all at level 5, damage-over-time effects deal 50% more damage."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "Each class shows its own item in the list and in the class detail, in the game's style.",
            "New Grimoire look for the skills window, with an opaque dark background and a gold frame.",
            "The skills window's tabs sit on the side.",
            "Each class level shows as gold pips.",
            "Text is easier to read.",
            "The world no longer shows through the window."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "With Safe Haven QOL 4.8, stackable vinyls now follow RPG Skills stack sizes.",
            "Options Safe Haven removed are no longer recreated in its config."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Frozen Hemorrhage now really adds 30% to the next direct hit.",
            "Classes disabled in config no longer count toward Elemental Fusion or Inner Storm.",
            "A killing Shatter now credits the kill to the player.",
            "Each class's points (e.g. 0 / 5) are no longer cut off by the name button."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "3.1",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 3.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "A janela de habilidades passa a ter um visual próprio.",
            "Cada classe mostra um emblema próprio na lista e no detalhe.",
            "Os textos de Status, Classes e Loja cabem na moldura, sem cortar a última linha.",
            "Os botões da loja e os nomes das classes acompanham o visual escuro do painel.",
            "Ao passar o mouse, o texto dos botões do painel fica num dourado mais claro."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "The skills window now has its own look.",
            "Each class shows its own emblem in the list and in the class detail.",
            "Status, Classes and Shop text fits inside the frame, including the last line.",
            "Shop buttons and class names follow the panel's dark look.",
            "Hovering a panel button turns its text a brighter gold."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "3.0",
    "tag": "fix",
    "tagClass": "fix",
    "tagKey": "changelog.tag.fix",
    "pt": {
      "title": "🌟 Atualização 3.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🔧 Correções",
          "items": [
            "Um personagem novo, ou o mesmo nome num mundo novo, não herda mais o nível nem os pontos de habilidade de um personagem anterior.",
            "Resetar para o nível 0 continua valendo depois de sair e entrar de novo, sem o nível antigo voltar na próxima entrada.",
            "Quem já tem a progressão gravada naquele personagem continua com ela.",
            "O Golpe de Ouro volta a dar ouro no multiplayer para quem não está hospedando.",
            "O ouro do acerto chega no inventário ou na bolsa de moedas, também com projétil, magia e invocação.",
            "Pegar o Mestre das Relíquias e entrar numa caverna, ou reconectar, não trava mais o jogo.",
            "O personagem com o Mestre das Relíquias volta a carregar com o mod.",
            "O XP de combate do time volta a contar para quem está no mesmo time, no mesmo mapa e perto.",
            "O XP de combate do time também conta quando a morte vem de projétil, magia ou invocação.",
            "LB e RB voltam a rolar a barra de atalhos no controle, em qualquer layout, inclusive o padrão.",
            "O combo dos dois bumpers continua só abrindo a janela do mod.",
            "No controle, a barra de atalhos segue o layout de cada aparelho.",
            "A janela do mod abre ao segurar os dois botões dessa barra.",
            "Com a janela do mod aberta, o controle usa os botões de menu do jogo."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🔧 Fixes",
          "items": [
            "A new character, or the same name in a new world, no longer inherits level or skill points from a previous character.",
            "Resetting to level 0 stays that way after you leave and come back, without the old level returning on the next entry.",
            "A character that already has progression saved on that character keeps it.",
            "Gold Strike gives gold again in multiplayer for players who are not hosting.",
            "Hit gold reaches your inventory or coin pouch, including projectiles, magic and summons.",
            "Taking Relic Master and entering a cave, or reconnecting, no longer freezes the game.",
            "A character with Relic Master loads again with the mod.",
            "Team combat XP counts again for players on the same team, on the same map and nearby.",
            "Team combat XP also counts when the kill comes from projectiles, magic or summons.",
            "LB and RB scroll the hotbar again on a controller, on any layout, including the default.",
            "The two-bumper combo still only opens the mod window.",
            "On a controller, the hotbar follows each device's layout.",
            "The mod window opens when you hold both of those hotbar buttons.",
            "With the mod window open, the controller uses the game's menu buttons."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.9",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 2.9 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Raio de aggro:</strong> no Config você liga ou desliga o raio de aggro das invocações.",
            "<strong>Raio de aggro:</strong> você escolhe quantos tiles a partir de você, com padrão de 10.",
            "<strong>Raio de aggro:</strong> só monstros hostis dentro do raio puxam combate automático.",
            "<strong>Raio de aggro:</strong> Cavernídeos continuam podendo ser caçados à distância, e as invocações vão até eles e voltam.",
            "<strong>Raio de aggro:</strong> monstros fora do raio são ignorados no caminho.",
            "<strong>Caça a Cavernídeos:</strong> novo atalho em Controles para ligar ou desligar a caça pelas invocações.",
            "<strong>Caça a Cavernídeos:</strong> o atalho vale por jogador, e a opção geral no Config do servidor continua valendo."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "Auto Poção, passivas contínuas e a busca de hostis perto das invocações ficaram mais leves.",
            "Isso reduz travadinhas no servidor sem mudar nada no jogo."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "As invocações voltam a caçar Cavernídeos de forma confiável.",
            "Antes, um monstro longe no mapa ou um hostil perto de você podia impedir a caça por completo.",
            "Agora só hostis no raio de aggro competem com o Cavernídeo, sem travar a caça quando não há combate de verdade.",
            "Ao encolher os espaços do Mestre das Relíquias (reset da atualização ou de pontos), os acessórios dos espaços extras voltam para o inventário ou caem no chão.",
            "Se a devolução falhar, o encolhimento é cancelado e o acessório continua equipado, sem sumir.",
            "1 ponto no Mestre das Relíquias não faz mais os espaços de acessório aumentarem +4 a cada vez que você sai e entra no mapa."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.9 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Aggro radius:</strong> in Config you can turn the summon aggro radius on or off.",
            "<strong>Aggro radius:</strong> you choose how many tiles from you, with a default of 10.",
            "<strong>Aggro radius:</strong> only hostile monsters inside the radius pull automatic combat.",
            "<strong>Aggro radius:</strong> Cavelings can still be hunted from far away, and summons go to them and come back.",
            "<strong>Aggro radius:</strong> monsters outside the radius are ignored along the way.",
            "<strong>Caveling hunting:</strong> new hotkey in Controls to turn hunting by summons on or off.",
            "<strong>Caveling hunting:</strong> the hotkey is per player, and the global option in the server Config still applies."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "Auto Potion, ongoing passives and the check for hostiles near summons are lighter.",
            "This cuts server hitching without changing anything in the game."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Summons reliably hunt Cavelings again.",
            "Before, a far-away monster or a hostile near you could stop the hunt entirely.",
            "Now only hostiles in the aggro radius compete with the Caveling, without locking the hunt when there is no real fight.",
            "When Relic Master slots shrink (update reset or point reset), trinkets in the extra slots go to your inventory or drop on the ground.",
            "If that fails, the shrink is cancelled and the trinket stays equipped, without vanishing.",
            "1 point in Relic Master no longer makes trinket slots grow by +4 every time you leave and re-enter the map."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.8",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 2.8 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Caça a Cavernídeos:</strong> as invocações caçam Cavernídeos sozinhas, sem precisar travar alvo.",
            "<strong>Caça a Cavernídeos:</strong> com monstro hostil por perto, as invocações priorizam o combate.",
            "<strong>Caça a Cavernídeos:</strong> dá para desligar no menu de configuração."
          ]
        },
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Compatível com o Necesse 1.3.3.",
            "Hosts e clientes precisam atualizar o jogo juntos.",
            "Compatível com o Safe Haven QOL 4.0.",
            "A pilha universal e os sistemas compartilhados (pilha, veios, incinerador e triple loot) continuam com o RPG Skills.",
            "As traduções em pt-BR do RPG Skills não sobrescrevem mais os bons textos do Safe Haven.",
            "Os menus e as Blueprints usam o idioma do próprio Safe Haven."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Na mineração em veios, paredes de pedra (inclusive as profundas e de pântano), colunas e pilares entram na veia como as outras paredes.",
            "Troncos de bambu, pinheiro, palmeira, salgueiro, maçã e banana agora encadeiam certo na mineração em veios.",
            "Antes, só encadeavam os troncos com \"árvore\" no nome.",
            "Quebrar objetos e pisos com o Mestre do Loot e o XP de colheita continua estável na 1.3.3.",
            "O jogo mudou o jeito de destruir, e o mod acompanhou.",
            "Limpar ou trocar o buff de XP pelo comando não fica mais preso no valor antigo.",
            "No menu de configuração, as opções novas não aparecem mais em inglês nos outros idiomas.",
            "Essas opções são espaços de acessório pela configuração, excluir Tablets de Incursão do loot e forçar o triple loot do Safe Haven desligado."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.8 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Caveling hunting:</strong> summons hunt Cavelings on their own, with no need to lock a target.",
            "<strong>Caveling hunting:</strong> with a hostile monster nearby, summons prioritize combat.",
            "<strong>Caveling hunting:</strong> you can turn it off in the config menu."
          ]
        },
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Compatible with Necesse 1.3.3.",
            "Hosts and clients need to update the game together.",
            "Compatible with Safe Haven QOL 4.0.",
            "Universal stacks and shared systems (stack size, vein mining, incinerator and triple loot) stay with RPG Skills.",
            "RPG Skills pt-BR translations no longer overwrite good Safe Haven text.",
            "Menus and Blueprints use Safe Haven's own language."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "In vein mining, stone walls (including deep and swamp ones), columns and pillars join the vein like other walls.",
            "Bamboo, pine, palm, willow, apple and banana trunks now chain correctly in vein mining.",
            "Before, only trunks with \"tree\" in the name chained.",
            "Breaking objects and floors with Loot Master and harvest XP stays stable on 1.3.3.",
            "The game changed how destroying works, and the mod followed.",
            "Clearing or swapping the XP buff with the command no longer gets stuck on the old value.",
            "In the config menu, the newer options no longer show in English in other languages.",
            "Those options are trinket slots from settings, excluding Incursion Tablets from loot and forcing Safe Haven triple loot off."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.7",
    "tag": "fix",
    "tagClass": "fix",
    "tagKey": "changelog.tag.fix",
    "pt": {
      "title": "🌟 Atualização 2.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Espaços de acessório:</strong> a configuração permite um bônus fixo de espaços de acessório, até 255.",
            "<strong>Espaços de acessório:</strong> com essa opção ligada, o bônus de espaços do Mestre das Relíquias deixa de valer.",
            "<strong>Espaços de acessório:</strong> valores muito altos deixam a tela de equipamento bem larga, porque o jogo não tem rolagem nessa grade.",
            "<strong>Tablets de Incursão:</strong> opção na configuração para o Mestre do Loot não multiplicar Tablets de Incursão.",
            "<strong>Tablets de Incursão:</strong> a opção vem desligada por padrão, igual ao comportamento anterior.",
            "<strong>Reset das classes:</strong> opção na configuração para zerar só as classes uma vez por versão, nesta atualização e nas próximas se continuar ligada.",
            "<strong>Reset das classes:</strong> os pontos voltam livres.",
            "<strong>Reset das classes:</strong> nível, XP e Maestria da Loja não mudam.",
            "<strong>Reset das classes:</strong> acessórios extras do Mestre das Relíquias vão para o inventário ou para o chão.",
            "<strong>Reset das classes:</strong> um backup do inventário é feito antes.",
            "<strong>Reset das classes:</strong> se algo falhar, use o restore de inventário do comando do mod."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "Menos lag ao usar inventário e baús com a stack do mundo aumentada.",
            "Colonos e bônus de classe não recalculam mais o mesmo efeito o tempo todo, o que reduz travadinhas no servidor."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "O triple loot forçado do Safe Haven vem desligado por padrão, para não somar com o Mestre do Loot."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Nos bônus das classes, o nome do efeito não se repete no valor (ex.: a duração de poção mostra só +25%).",
            "As dicas da janela do RPG Skills (Classes e Loja) não quebram mais no meio da frase.",
            "A dica do traço Maior Fã, em português, não mistura mais texto interno.",
            "A descrição do Maior Fã não força mais o tratamento masculino.",
            "Itens de outros mods que aumentam os espaços de acessório passam a funcionar com o Mestre das Relíquias.",
            "Acessórios não somem mais ao reduzir os espaços do Mestre das Relíquias.",
            "Móveis e máquinas colocados não são mais multiplicados pelo Mestre do Loot ao destruir.",
            "Quebrar piso ou parede devolve a quantidade original, sem multiplicar.",
            "Mineração, árvores, plantas, loot de inimigos, pesca e craft continuam iguais no Mestre do Loot.",
            "Na Loja, os bônus de XP 2x, 5x e 10x não mostram mais um ponto de interrogação no nome.",
            "No Golpe de Ouro, o ouro entra na Bolsa de Moedas se você tiver uma.",
            "Sem Bolsa de Moedas, as moedas do Golpe de Ouro vão para o inventário.",
            "Os upgrades de pilha e de baús do mundo salvam na hora após a compra, não só no salvamento automático.",
            "Colonos não andam mais aos trancos por atualizações repetidas de movimento."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Trinket slots:</strong> the settings allow a fixed trinket slot bonus, up to 255.",
            "<strong>Trinket slots:</strong> while that option is on, Relic Master's slot bonus no longer applies.",
            "<strong>Trinket slots:</strong> very high values make the equipment screen very wide, because the game has no scrolling on that grid.",
            "<strong>Incursion Tablets:</strong> settings option to stop Loot Master from multiplying Incursion Tablets.",
            "<strong>Incursion Tablets:</strong> the option is off by default, same as before.",
            "<strong>Class reset:</strong> settings option to reset only classes once per version, on this update and later ones if it stays on.",
            "<strong>Class reset:</strong> points come back as free points.",
            "<strong>Class reset:</strong> level, XP and Shop Mastery do not change.",
            "<strong>Class reset:</strong> extra Relic Master trinkets go to the inventory or the ground.",
            "<strong>Class reset:</strong> an inventory backup is made first.",
            "<strong>Class reset:</strong> if something fails, use the mod command's inventory restore."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "Less lag when using the inventory and chests with an upgraded world stack.",
            "Settlers and class bonuses no longer recalculate the same effect all the time, which cuts server hitching."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "Safe Haven's forced triple loot is off by default, so it does not stack with Loot Master."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "In class bonuses, the effect name no longer repeats in the value (e.g. potion duration shows just +25%).",
            "RPG Skills window tooltips (Classes and Shop) no longer break mid-sentence.",
            "The Biggest Fan trait tooltip, in Portuguese, no longer mixes in internal text.",
            "The Biggest Fan description no longer forces masculine wording.",
            "Items from other mods that add trinket slots now work with Relic Master.",
            "Trinkets are no longer lost when Relic Master slots shrink.",
            "Placed furniture and machines are no longer multiplied by Loot Master when destroyed.",
            "Breaking a floor or wall returns the original amount, with no multiplier.",
            "Mining, trees, plants, enemy loot, fishing and crafting stay the same with Loot Master.",
            "In the Shop, the 2x, 5x and 10x XP bonuses no longer show a question mark in the name.",
            "With Gold Strike, gold goes into your Coin Pouch if you have one.",
            "Without a Coin Pouch, Gold Strike coins go into your inventory.",
            "World stack and chest upgrades save right after purchase, not only on autosave.",
            "Settlers no longer stutter while walking because of repeated movement updates."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.6",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 2.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Auto-Seleção de Arma:</strong> recurso gratuito que escolhe sozinho o espaço certo da hotbar (corpo a corpo, à distância, magia ou invocação).",
            "<strong>Auto-Seleção de Arma:</strong> a troca acontece quando há inimigo ou boneco de treino a até 12 tiles.",
            "<strong>Auto-Seleção de Arma:</strong> sem monstro por perto, não troca o que você está usando, e picareta, machado, pá e outras ferramentas ficam no lugar.",
            "<strong>Auto-Seleção de Arma:</strong> nunca escolhe TNT, bombas ou itens explosivos no lugar de uma arma.",
            "<strong>Auto-Seleção de Arma:</strong> só troca a arma, e você continua atacando normalmente.",
            "<strong>Auto-Seleção de Arma:</strong> liga e desliga pelo atalho nas opções de controles.",
            "<strong>Sono Acelerado:</strong> ao dormir na cama entre 20h e 3h, a noite passa quase na hora.",
            "<strong>Sono Acelerado:</strong> dormindo antes da meia-noite, você acorda na manhã do dia seguinte, e o calendário do jogo muda junto.",
            "<strong>Sono Acelerado:</strong> dormindo depois da meia-noite, até 3h, você acorda por volta das 8h do mesmo dia.",
            "<strong>Sono Acelerado:</strong> fora desse horário, o sono continua normal.",
            "<strong>Sono Acelerado:</strong> liga e desliga no menu de configuração do RPG Skills."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Ao salvar as opções do Safe Haven QOL e reiniciar, as escolhas não são mais sobrescritas pelo RPG Skills.",
            "A mineração de veios compartilhada continua com o RPG Skills por padrão, para evitar conflito.",
            "Dá para mudar isso na seção Servidor / Compat do menu do RPG Skills."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O bônus do Mestre do Loot na forja, na fornalha e em outras máquinas continua valendo quando você tem pontos na classe.",
            "O bônus agora conta para a pessoa certa: você no craft manual, o dono do assentamento da máquina ou quem abriu a máquina por último.",
            "A forja não multiplica mais sem pontos por causa de um perfil antigo, offline ou de outro jogador online.",
            "Na colheita automática dos colonos e na quebra de blocos, o bônus de loot usa o dono do assentamento da área quando não há jogador direto.",
            "Antes, esse bônus pegava o melhor perfil carregado no servidor.",
            "No menu de configuração do RPG Skills, salvar vazio não finge mais que gravou.",
            "Ao reabrir, o menu de configuração mostra os valores atuais.",
            "Os intervalos de backup batem com os limites reais."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Auto Weapon Select:</strong> free feature that picks the right hotbar slot on its own (melee, ranged, magic or summon).",
            "<strong>Auto Weapon Select:</strong> it switches when a hostile mob or training dummy is within 12 tiles.",
            "<strong>Auto Weapon Select:</strong> with no monster nearby, it leaves your current item alone, and pickaxe, axe, shovel and other tools stay selected.",
            "<strong>Auto Weapon Select:</strong> it never picks TNT, bombs or other explosives instead of a weapon.",
            "<strong>Auto Weapon Select:</strong> it only switches the weapon, and you still attack as usual.",
            "<strong>Auto Weapon Select:</strong> turn it on or off with the hotkey in the controls options.",
            "<strong>Accelerated Sleep:</strong> when you sleep in a bed between 8 PM and 3 AM, the night passes almost instantly.",
            "<strong>Accelerated Sleep:</strong> sleep before midnight and you wake on the next morning, and the in-game calendar moves along.",
            "<strong>Accelerated Sleep:</strong> sleep after midnight, until 3 AM, and you wake around 8 AM the same day.",
            "<strong>Accelerated Sleep:</strong> outside that window, sleep stays normal.",
            "<strong>Accelerated Sleep:</strong> turn it on or off in the RPG Skills config menu."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "Saving Safe Haven QOL options and restarting no longer gets your choices overwritten by RPG Skills.",
            "Shared vein mining stays with RPG Skills by default, to avoid conflicts.",
            "You can change that in the Server / Compat section of the RPG Skills menu."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Loot Master's bonus on forges, furnaces and other machines still applies when you have points in the class.",
            "The bonus now counts for the right person: you on a manual craft, the settlement owner of the machine or whoever opened the machine last.",
            "The forge no longer multiplies with zero points because of an old or offline profile or another online player.",
            "For settlers' automatic harvest and block breaking, the loot bonus uses the settlement owner of the area when there is no direct player.",
            "Before, that bonus took the best profile loaded on the server.",
            "In the RPG Skills config menu, an empty save no longer pretends it saved.",
            "When reopened, the config menu shows the current values.",
            "Backup intervals match the real limits."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.5",
    "tag": "major",
    "tagClass": "major",
    "tagKey": "changelog.tag.major",
    "pt": {
      "title": "🌟 Atualização 2.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Configuração:</strong> o arquivo de configuração do mod ficou bem mais completo, com seções claras.",
            "<strong>Configuração:</strong> cada opção tem comentários em português explicando o que faz, o valor padrão e os limites.",
            "<strong>Configuração:</strong> liga e desliga os fogos no level up, o botão no inventário, a mensagem de boas-vindas e o Minerador Explosivo na Loja.",
            "<strong>Configuração:</strong> liga e desliga a linha de XP em equipe no Status, o comando de restaurar inventário e a compra de buff de XP.",
            "<strong>Configuração:</strong> cada passiva nomeada pode ser ligada ou desligada (Vein Mining, Auto Poção, Bênção Vital, Deus do Dano e as demais).",
            "<strong>Configuração:</strong> as classes podem ser ligadas ou desligadas por aba.",
            "<strong>Configuração:</strong> um resumo opcional ao iniciar o jogo mostra o que saiu do padrão.",
            "<strong>Economia da Loja:</strong> o custo e o tamanho dos upgrades de baú são ajustáveis, até 1000 espaços.",
            "<strong>Economia da Loja:</strong> a duração do buff de XP é ajustável.",
            "<strong>Economia da Loja:</strong> o ritmo de XP do assentamento, o tamanho do Vein Mining e a escala dos fogos de level up são ajustáveis.",
            "<strong>Menu RPG SKILLS CONFIG:</strong> novo botão no menu inicial que abre uma janela com todas essas opções.",
            "<strong>Menu RPG SKILLS CONFIG:</strong> depois de salvar, reinicie o jogo para aplicar tudo.",
            "<strong>Menu RPG SKILLS CONFIG:</strong> os textos do menu estão traduzidos em todos os idiomas do mod, com as mesmas opções e o mesmo significado.",
            "<strong>Menu RPG SKILLS CONFIG:</strong> admins podem usar /rpgskills config reload para recarregar as opções, mas reiniciar ainda é o caminho mais seguro.",
            "<strong>Multiplayer:</strong> opção para exigir admin nas compras de stack do mundo e de espaços de baú na Loja.",
            "<strong>Multiplayer:</strong> o buff de XP da Loja continua separado dessa opção.",
            "<strong>Limite de progressão:</strong> no máximo 5 pontos por classe.",
            "<strong>Limite de progressão:</strong> nível máximo de 165 (33 classes × 5).",
            "<strong>Reflexo do Pescador:</strong> nova passiva do Mestre dos Mares no nível 1.",
            "<strong>Reflexo do Pescador:</strong> quando o peixe morde, a captura é automática.",
            "<strong>Reflexo do Pescador:</strong> a vara é lançada de novo no mesmo ponto, para pescar AFK.",
            "<strong>Reflexo do Pescador:</strong> respeita as linhas extras e os bônus de pesca."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "A Loja ficou mais compacta e organizada (bônus de XP, pilha, baús e Minerador Explosivo).",
            "Os botões de reset da aba Status agora se chamam Resetar pontos de classe e Zerar progressão.",
            "Assim fica claro que eles afetam o personagem, e não a pilha ou os espaços de baú da Loja.",
            "A aba Status tem mais espaço entre as linhas.",
            "A barra de XP, os botões e as dicas seguem os idiomas do mod de forma consistente.",
            "Comida e itens que estragam perdem 1 por ciclo, em vez da pilha inteira de uma vez.",
            "A última unidade vira comida estragada.",
            "Dá para desligar a perda aos poucos no RPG SKILLS CONFIG.",
            "O comando /rpgskills status mostra nível, XP, pontos livres e buff de XP.",
            "A ajuda dos comandos marca o que é de admin e o que é de jogador.",
            "O comando de pilha de admin aceita de 1x a 1000x.",
            "O idioma coreano do mod foi traduzido de verdade.",
            "Os textos dos comandos seguem o idioma do jogo.",
            "Em português do Brasil, o mod não sobrescreve mais textos que o Necesse já traduz.",
            "Em português do Brasil, o mod completa só o que o jogo ainda deixa em inglês (dicas, controles e poucas frases).",
            "As descrições das classes de combate explicam melhor o Deus do Dano, que vale com Guerra, Atirador, Magia e Invocador no nível 5.",
            "As descrições explicam melhor o dano ao longo do tempo de Congelante e Pesadelo.",
            "Os textos de Vitalidade, Colossal e Resistência Elemental estão mais claros (Bênção Vital, recarga de 30s, imunidades e redução a fogo).",
            "O Mestre das Cavernas deixa claro que o nível 5 libera a compra do Minerador Explosivo na Loja.",
            "A Ruína da Escuridão descreve o aumento de luz certo, de 250 para 350.",
            "Natureza, Auto Poção, Barriga Sempre Cheia e Colheita do Rancho estão mais claros na interface e nas passivas.",
            "O Mestre das Máquinas explica o incinerador: mais rápido e queimando um pack inteiro por ciclo."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "Acabaram os travamentos e picos de lag no servidor, inclusive no singleplayer, causados por uma gravação no disco que não parava.",
            "O tamanho de pilha ficou mais leve e evita trabalho pesado sem necessidade."
          ]
        },
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Compatível com o Necesse 1.3.2.",
            "Hosts e clientes precisam atualizar o jogo juntos.",
            "Deixe o RPG Skills no topo da lista de mods, acima de todos os outros.",
            "Compatível com o Safe Haven QOL 3.5.",
            "Com os dois ativos, o RPG Skills cuida do tamanho de pilha, do incinerador, da mineração em veia e dos estandartes empilháveis.",
            "O Safe Haven continua com o resto da qualidade de vida dele.",
            "Com o Safe Haven, o RPG Skills cuida do incinerador por padrão, e dá para mudar isso na configuração.",
            "O incinerador instantâneo do Safe Haven fica desligado.",
            "Os textos do Safe Haven aparecem em português do Brasil pelo RPG Skills (menu e opções do Safe Haven)."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O painel de Classes tem mais espaço entre os bônus atuais e o próximo ponto, sem textos longos sobrepostos.",
            "Sanguinário, Congelante e Pesadelo não mostram mais, nos bônus por ponto, efeitos que só existem no nível 5 (armadura quebrada, congelar e hitkill).",
            "Esses efeitos continuam só no desbloqueio máximo.",
            "A Resistência Elemental, no nível certo, bloqueia debuffs de verdade, e não só remove depois.",
            "O Colossal não aumenta mais a regeneração de resiliência por engano.",
            "A defesa do Colossal continua sendo a proteção ao tomar dano.",
            "A Bênção Vital funciona só com a classe Vitalidade e não depende mais do Sangrento.",
            "A sobrevivência a dano fatal da Vitalidade agora pode salvar de um golpe letal, com intervalo entre usos.",
            "O alcance de interação do Mestre da Construção agora afeta colocar, quebrar e usar objetos e NPCs.",
            "O Mestre da Construção não aumenta mais a coleta de itens, que fica com as Relíquias.",
            "O poder de pesca do Mestre dos Mares reduz a espera sem deixar a pesca quase instantânea só por ter linhas extras.",
            "A Auto Poção da Alquimia deixa claro que, com até 50% de vida, usa poções até encher.",
            "Em servidor dedicado, os comandos de admin do RPG Skills exigem permissão real.",
            "Ser o único jogador online não basta mais para usar comandos de admin.",
            "Baixar o nível com /rpgskills set level não funciona se você tiver mais pontos de classe gastos do que o novo nível permite.",
            "Nesse caso, resete os pontos antes.",
            "Depois de morrer, os bônus de classe voltam a funcionar sem precisar de reset completo.",
            "Vermes (areia, slime e parecidos) não dão mais XP por cada pedaço do corpo, só pela cabeça.",
            "Pescar volta a dar XP de trabalho: 5 por lançamento da vara.",
            "Um ou vários peixes no mesmo lançamento contam como um.",
            "O XP de pesca vale dentro ou fora do assentamento, pescando na mão ou com o Reflexo do Pescador.",
            "Bumerangues e a adaga de carapaça podem ser aprimorados e encantados mesmo com a stack do mundo aumentada.",
            "No menu inicial, trocar o idioma do jogo atualiza na hora os textos da janela RPG SKILLS CONFIG.",
            "A perda de XP ao morrer respeita de verdade a configuração (ligar ou desligar e a fração escolhida).",
            "As compras de stack do mundo e de espaços de baú na Loja cobram e aplicam o upgrade juntas.",
            "Assim você não perde moedas ou barras se algo falhar no meio da compra.",
            "O bônus do Mestre das Máquinas vale pelas máquinas do assentamento, e não pelo maior nível de classe entre os jogadores online."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Settings:</strong> the mod's config file is much richer, with clear sections.",
            "<strong>Settings:</strong> each option has Portuguese comments explaining what it does, its default and its limits.",
            "<strong>Settings:</strong> turn level-up fireworks, the inventory button, the welcome message and the Explosive Miner in the Shop on or off.",
            "<strong>Settings:</strong> turn the team XP line in Status, the inventory restore command and XP buff purchases on or off.",
            "<strong>Settings:</strong> each named passive can be turned on or off (Vein Mining, Auto Potion, Vital Blessing, Damage God and the rest).",
            "<strong>Settings:</strong> classes can be turned on or off by tab.",
            "<strong>Settings:</strong> an optional summary at game start shows what differs from the defaults.",
            "<strong>Shop economy:</strong> chest upgrade cost and size are adjustable, up to 1000 slots.",
            "<strong>Shop economy:</strong> XP buff duration is adjustable.",
            "<strong>Shop economy:</strong> settlement XP pacing, Vein Mining size and level-up fireworks scale are adjustable.",
            "<strong>RPG SKILLS CONFIG menu:</strong> new main menu button that opens a window with all of these options.",
            "<strong>RPG SKILLS CONFIG menu:</strong> after saving, restart the game to apply everything.",
            "<strong>RPG SKILLS CONFIG menu:</strong> the menu text is translated into every language the mod supports, with the same options and meaning.",
            "<strong>RPG SKILLS CONFIG menu:</strong> admins can use /rpgskills config reload to reload the options, but restarting is still the safest path.",
            "<strong>Multiplayer:</strong> option to require admin for world stack and chest slot purchases in the Shop.",
            "<strong>Multiplayer:</strong> the Shop XP buff stays separate from that option.",
            "<strong>Progression cap:</strong> at most 5 points per class.",
            "<strong>Progression cap:</strong> max level 165 (33 classes × 5).",
            "<strong>Angler's Reflex:</strong> new Sea Master passive at level 1.",
            "<strong>Angler's Reflex:</strong> when a fish bites, the catch is automatic.",
            "<strong>Angler's Reflex:</strong> the rod is cast again at the same spot, for AFK fishing.",
            "<strong>Angler's Reflex:</strong> extra lines and fishing bonuses still apply."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "The Shop is more compact and organized (XP bonuses, stack, chests and Explosive Miner).",
            "The Status tab reset buttons are now called Reset class points and Reset progression.",
            "This makes it clear they affect your character, not the stack or chest slots in the Shop.",
            "The Status tab has more space between lines.",
            "The XP bar, buttons and tooltips follow the mod languages consistently.",
            "Spoiling food and items lose 1 per cycle instead of the whole stack at once.",
            "The last unit becomes spoiled food.",
            "You can turn the gradual loss off in RPG SKILLS CONFIG.",
            "The /rpgskills status command shows level, XP, free points and XP buff.",
            "Command help marks what is for admins and what is for players.",
            "The admin stack command accepts 1x to 1000x.",
            "The mod's Korean language is fully translated.",
            "Command text follows the game language.",
            "In Brazilian Portuguese, the mod no longer overrides texts Necesse already translates.",
            "In Brazilian Portuguese, the mod only fills what the game still leaves in English (tooltips, controls and a few phrases).",
            "Combat class descriptions better explain Damage God, which applies with War Master, Marksman, Magic Master and Summon Master at level 5.",
            "Descriptions better explain Congelante and Pesadelo damage over time.",
            "Vitality, Colossal and Elemental Resistance texts are clearer (Vital Blessing, 30s cooldown, immunities and fire reduction).",
            "Cavern Master makes it clear that level 5 unlocks the Explosive Miner purchase in the Shop.",
            "Dark Ruin describes the correct light boost, from 250 to 350.",
            "Nature, Auto Potion, Always Full and Ranch Harvest are clearer in the interface and passives.",
            "Machine Master explains the incinerator: faster and burning one full pack per cycle."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "No more server freezes and lag spikes, including singleplayer, caused by nonstop writing to disk.",
            "Stack size handling is lighter and skips heavy work when it is not needed."
          ]
        },
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Compatible with Necesse 1.3.2.",
            "Hosts and clients need to update the game together.",
            "Keep RPG Skills at the top of your mod list, above every other mod.",
            "Compatible with Safe Haven QOL 3.5.",
            "With both active, RPG Skills handles stack size, the incinerator, vein mining and stackable banners.",
            "Safe Haven keeps the rest of its quality of life.",
            "With Safe Haven, RPG Skills handles the incinerator by default, and you can change that in the settings.",
            "Safe Haven's instant incinerator is turned off.",
            "Safe Haven texts show in Brazilian Portuguese through RPG Skills (Safe Haven menu and options)."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The Classes panel has more space between current bonuses and the next point, so long texts do not overlap.",
            "Sanguinario, Congelante and Pesadelo no longer list, in per-point bonuses, effects that only exist at level 5 (broken armor, freeze and hitkill).",
            "Those effects stay on the max-level unlock only.",
            "Elemental Resistance at the right level truly blocks debuffs, instead of only removing them later.",
            "Colossal no longer boosts resilience regen by mistake.",
            "Colossal's defense is still the protection when taking damage.",
            "Vital Blessing works with Vitality Master alone and no longer depends on Blood Master.",
            "Vitality Master fatal damage survival can now save you from a lethal hit, with a cooldown between uses.",
            "Construction Master interaction range now affects placing, breaking and using objects and NPCs.",
            "Construction Master no longer boosts item pickup, which stays with Relics.",
            "Sea Master fishing power shortens the wait without making fishing nearly instant just from extra lines.",
            "Alchemy's Auto Potion makes it clear that, at or below 50% health, it uses potions until full.",
            "On dedicated servers, RPG Skills admin commands require real admin permission.",
            "Being the only player online is no longer enough to use admin commands.",
            "Lowering your level with /rpgskills set level does not work if you have more spent class points than the new level allows.",
            "In that case, reset your points first.",
            "After dying, class bonuses work again without a full reset.",
            "Worms (sand, slime and similar) no longer give XP for every body segment, only for the head.",
            "Fishing gives work XP again: 5 per rod cast.",
            "One or many fish on the same cast count as one.",
            "Fishing XP applies inside or outside a settlement, fishing by hand or with Angler's Reflex.",
            "Boomerangs and the carapace dagger can be upgraded and enchanted even with an increased world stack.",
            "On the main menu, changing the game language updates the RPG SKILLS CONFIG window text right away.",
            "XP loss on death truly follows the settings (on or off and the chosen fraction).",
            "World stack and chest slot purchases in the Shop charge and apply the upgrade together.",
            "This way you do not lose coins or bars if something fails mid-purchase.",
            "Machine Master bonuses count the settlement's machines, not the highest class level among online players."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.4",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 2.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>XP em equipe:</strong> o XP de trabalho dos aldeões do assentamento também pode ser dividido com o time por perto, como o XP de combate.",
            "<strong>XP em equipe:</strong> dá para ligar ou desligar no arquivo de configuração geral do mod."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "As configurações do mod ficam num único arquivo geral, organizado por seções.",
            "Esse arquivo reúne progressão, classes, pilhas, qualidade de vida, cópia do inventário e interface.",
            "Continuam separados a mensagem de boas-vindas de cada mundo, os perfis de jogador e as cópias de inventário."
          ]
        },
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Continua compatível com o Necesse 1.3.1.",
            "Deixe o RPG Skills no topo da lista de mods, acima de todos os outros."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Tábuas de portal com níveis ou biomas diferentes não se misturam mais na stack do mundo.",
            "Cada tábua de portal mantém suas propriedades.",
            "Dinamite, bombas e quebras em massa não multiplicam mais o mesmo drop várias vezes com o Mestre do Loot.",
            "Acabaram os milhões de recursos de uma vez.",
            "A qualidade de vida dos aldeões com o Mestre dos Reinos fica no limite normal do jogo.",
            "Os aldeões não ficam mais com velocidade absurda nem se teleportam.",
            "No controle, os atalhos do mod não atrapalham mais o botão de correr (habilidade do acessório)."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Team XP:</strong> settlement villager work XP can also be shared with nearby teammates, like combat XP.",
            "<strong>Team XP:</strong> you can turn it on or off in the mod's general config file."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "Mod settings live in a single general file, organized by sections.",
            "That file covers progression, classes, stacks, quality of life, inventory backup and interface.",
            "The per-world welcome message, player profiles and inventory copies stay separate."
          ]
        },
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Still compatible with Necesse 1.3.1.",
            "Keep RPG Skills at the top of your mod list, above every other mod."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Gateway Tablets with different levels or biomes no longer merge in the world stack.",
            "Each Gateway Tablet keeps its own properties.",
            "Dynamite, bombs and mass breaks no longer multiply the same drop over and over with Loot Master.",
            "No more millions of resources at once.",
            "Villager quality of life with Realm Master stays at the game's normal cap.",
            "Villagers no longer get absurd speed or teleport.",
            "On controller, mod hotkeys no longer interfere with the sprint button (trinket ability)."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.3",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 2.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Cópia do inventário:</strong> o jogo guarda cópias do seu inventário e equipamento a cada 10 minutos enquanto você está online.",
            "<strong>Cópia do inventário:</strong> ficam guardadas até 5 cópias.",
            "<strong>Cópia do inventário:</strong> /rpgskills restore inventory volta para a cópia mais recente.",
            "<strong>Cópia do inventário:</strong> /rpgskills restore inventory list mostra as datas salvas."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "A aba Classes foi redesenhada.",
            "A lista de classes fica à esquerda, com ícones de itens do jogo e o nível.",
            "À direita aparecem os bônus atuais, uma seta e o ganho do próximo ponto, incluindo desbloqueios de nível.",
            "Um botão adiciona ponto na classe.",
            "Só a lista rola.",
            "A aba Status ficou dividida em dois painéis.",
            "À esquerda, o Manual de Magia mostra os dados do personagem.",
            "À direita, o Livro de Magias Proibidas mostra os bônus e as passivas ativas.",
            "As ideias de [url=https://steamcommunity.com/id/megafrigaa]MegaFriga foram ajustadas e aperfeiçoadas para as novas abas Status e Classes.",
            "No controle, LB e RB trocam as abas.",
            "No controle, o D-pad navega pela lista e pelo painel de detalhe.",
            "A janela do RPG Skills fecha sozinha quando o menu de pausa (ESC) abre."
          ]
        },
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Continua compatível com o Necesse 1.3.1.",
            "Deixe o RPG Skills no topo da lista de mods, acima de todos os outros."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O dano e a proteção de aliados do Mestre das Armadilhas ficaram mais seguros.",
            "As preferências da janela de status e da barra de XP não se misturam mais com a progressão de nível.",
            "Pergaminhos de encantamento diferentes não se misturam mais ao organizar o inventário com a stack do mundo.",
            "Os pergaminhos só empilham se tiverem o mesmo encantamento.",
            "Os espaços extras do Mestre das Relíquias não encolhem mais sozinhos no meio do jogo.",
            "Ao reduzir os espaços de propósito, os amuletos de todos os conjuntos de equipamento são recuperados em vez de sumirem.",
            "Textos que estavam fixos em português (bônus de classes, avisos de mineração avançada e nomes de auras) agora seguem o idioma do jogo.",
            "O mod ganhou suporte básico ao coreano."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Inventory copy:</strong> the game saves copies of your inventory and equipment every 10 minutes while you are online.",
            "<strong>Inventory copy:</strong> up to 5 copies are kept.",
            "<strong>Inventory copy:</strong> /rpgskills restore inventory goes back to the newest copy.",
            "<strong>Inventory copy:</strong> /rpgskills restore inventory list shows the saved dates."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "The Classes tab was redesigned.",
            "The class list is on the left, with game item icons and the level.",
            "On the right you see current bonuses, an arrow and what the next point gives, including level unlocks.",
            "One button adds a point to the class.",
            "Only the list scrolls.",
            "The Status tab is now split into two panels.",
            "On the left, the Magic Manual shows your character info.",
            "On the right, the Forbidden Spellbook shows active bonuses and passives.",
            "Ideas from [url=https://steamcommunity.com/id/megafrigaa]MegaFriga were refined and shaped into the new Status and Classes tabs.",
            "On controller, LB and RB switch tabs.",
            "On controller, the D-pad moves through the list and the detail panel.",
            "The RPG Skills window closes on its own when the pause menu (ESC) opens."
          ]
        },
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Still compatible with Necesse 1.3.1.",
            "Keep RPG Skills at the top of your mod list, above every other mod."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Trap Master damage and ally protection are now safer.",
            "Status window and XP bar preferences no longer mix with level progression.",
            "Different enchantment scrolls no longer merge when sorting the inventory with the world stack.",
            "Scrolls only stack if they have the same enchantment.",
            "Relic Master extra slots no longer shrink on their own mid-game.",
            "When slots are reduced on purpose, trinkets from every equipment preset are recovered instead of vanishing.",
            "Texts that were stuck in Portuguese (class bonuses, advanced vein mining notices and aura names) now follow the game language.",
            "The mod got basic Korean support."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.2",
    "tag": "fix",
    "tagClass": "fix",
    "tagKey": "changelog.tag.fix",
    "pt": {
      "title": "🌟 Atualização 2.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Continua compatível com o Necesse 1.3.1.",
            "Deixe o RPG Skills no topo da lista de mods, acima de todos os outros.",
            "Isso evita conflitos de idioma, de alterações no jogo e nas lojas de colonos."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Abrir a loja do Mago não fecha mais o jogo com erro.",
            "O mesmo vale para as outras lojas de colonos com itens especiais.",
            "As traduções do mod seguem o idioma escolhido no jogo.",
            "O português do Brasil só entra quando o jogo está em pt-BR."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Still compatible with Necesse 1.3.1.",
            "Keep RPG Skills at the top of your mod list, above every other mod.",
            "This avoids language conflicts, game change clashes and settler shop issues."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Opening the Mage shop no longer crashes the game.",
            "The same goes for other settler shops with special items.",
            "The mod's translations follow the language selected in the game.",
            "Brazilian Portuguese only applies when the game is in pt-BR."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.1",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 2.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Compatível com o Necesse 1.3.1 (atualização de manutenção do Rust & Romance).",
            "Continua funcionando com o conteúdo da 1.3.0.",
            "Anfitriões e servidores precisam estar na 1.3.1 junto com o jogo.",
            "As partes mais importantes do mod foram conferidas no Necesse 1.3.1.",
            "A 1.3.1 do Necesse traz ajustes nas abelhas e no Hive Scepter, na Pyromancy e no dano dos invasores.",
            "A 1.3.1 também corrige travamentos de colonos e personalidades e melhora os Story Objectives.",
            "Essas mudanças são do jogo base.",
            "O RPG Skills não copia essas armas nem os Story Objectives.",
            "Progressão, classes, assentamento e XP continuam como na 2.0."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Compatible with Necesse 1.3.1 (Rust & Romance maintenance update).",
            "Still works with 1.3.0 content.",
            "Hosts and servers need to be on 1.3.1 along with the game.",
            "The mod's most important parts were checked against Necesse 1.3.1.",
            "Necesse 1.3.1 brings changes to bees and the Hive Scepter, Pyromancy and raider damage.",
            "1.3.1 also fixes settler and personality crashes and improves Story Objectives.",
            "These changes are from the base game.",
            "RPG Skills does not copy those weapons or Story Objectives.",
            "Progression, classes, settlement and XP stay as in 2.0."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "2.0",
    "tag": "major",
    "tagClass": "major",
    "tagKey": "changelog.tag.major",
    "pt": {
      "title": "🌟 Atualização 2.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Personalidades:</strong> colonos com 6 ou mais personalidades rendem XP de assentamento extra.",
            "<strong>Personalidades:</strong> colonos Fastworker e Gardener aceleram um pouco as expedições, com teto.",
            "<strong>Personalidades:</strong> Voyager continua só com o efeito do jogo base.",
            "<strong>Aura de Liderança:</strong> fica mais forte em colonos com personalidade de combate igual à sua classe (Warrior, Ranger, Magician ou Summoner).",
            "<strong>Lazer:</strong> colonos em lazer (olhar o mar, conversar, música etc.) dão um pouco de XP de assentamento, com limite diário.",
            "<strong>Parceiro de vida:</strong> com um Life Partner no grupo de aventura, dá para ligar um pequeno bônus de XP de combate e regeneração.",
            "<strong>Parceiro de vida:</strong> esse bônus vem desligado por padrão no arquivo de configuração.",
            "<strong>XP de zona:</strong> a Floresta Carbonizada tem XP de zona próprio e não conta mais como outro bioma genérico.",
            "<strong>XP de zona:</strong> o bioma de superfície do Scrapyard não usa mais o mesmo XP da incursão Scrapyard.",
            "<strong>XP de zona:</strong> a incursão Scrapyard continua dando mais XP.",
            "<strong>Aba Status:</strong> mostra a qualidade de vida média do assentamento.",
            "<strong>Aba Status:</strong> mostra se o compartilhamento de XP de time está ligado.",
            "<strong>Passivas informativas:</strong> novas passivas Líder do Assentamento, Administração Rica e Especialista de Incursão."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "Recrutar especialistas e colonos resgatados dá mais XP de assentamento.",
            "O filtro de baú reconhece melhor as essências novas (cristal e radiada), os Ascended Shards e os pós de altar e de melhoria.",
            "Divorce Papers e Pretty Bouquet não recebem o multiplicador de pilha do mod e continuam com pilha 1.",
            "As estações de Upgrade, Salvage e Transmutation não aplicam o multiplicador de pilha do mod."
          ]
        },
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Continua compatível com o Necesse 1.3.0 (Rust & Romance)."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "A Mutant Hydra conta como chefe no XP de combate.",
            "A cabeça e o pescoço da Mutant Hydra não dão XP extra: um abate, um pagamento de XP.",
            "A morte das suas próprias invocações e montarias (Makeshift, Junk Mech, abelhas, morcegos etc.) não dá mais XP de combate a você.",
            "No controle, a janela do RPG Skills foca direito os botões de pilha e os botões de ligar passivas e ativas na Loja.",
            "O D-pad não troca mais de aba quando um desses botões está em foco."
          ]
        },
        {
          "heading": "👑 Mestre dos Reinos",
          "items": [
            "No nível 5, a classe força a qualidade de vida Unrivaled nos colonos.",
            "No nível 5, os colonos não entram mais em greve por humor.",
            "No nível 5, o XP das tarefas do assentamento triplica, com limite por minuto."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 2.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Personalities:</strong> settlers with 6 or more personalities give extra settlement XP.",
            "<strong>Personalities:</strong> Fastworker and Gardener settlers speed up expeditions a bit, with a cap.",
            "<strong>Personalities:</strong> Voyager keeps only the base game effect.",
            "<strong>Leadership Aura:</strong> is stronger on settlers whose combat personality matches your class (Warrior, Ranger, Magician or Summoner).",
            "<strong>Recreation:</strong> settlers doing recreation (gazing at the sea, chatting, music, etc.) give a little settlement XP, with a daily cap.",
            "<strong>Life Partner:</strong> with a Life Partner in the adventure party, you can turn on a small combat XP and regeneration bonus.",
            "<strong>Life Partner:</strong> this bonus is off by default in the config file.",
            "<strong>Zone XP:</strong> the Charred Forest has its own zone XP and no longer counts as a generic other biome.",
            "<strong>Zone XP:</strong> the Scrapyard surface biome no longer uses the same XP as the Scrapyard incursion.",
            "<strong>Zone XP:</strong> the Scrapyard incursion still gives more XP.",
            "<strong>Status tab:</strong> shows the settlement's average quality of life.",
            "<strong>Status tab:</strong> shows whether team XP sharing is on.",
            "<strong>Informational passives:</strong> new Settlement Leader, Rich Administration and Incursion Specialist passives."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "Recruiting specialists and rescued settlers gives more settlement XP.",
            "The chest filter better recognizes new essences (crystal and radiated), Ascended Shards and altar and upgrade dusts.",
            "Divorce Papers and Pretty Bouquet do not get the mod's stack multiplier and stay at stack 1.",
            "Upgrade, Salvage and Transmutation stations do not apply the mod's stack multiplier."
          ]
        },
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Still compatible with Necesse 1.3.0 (Rust & Romance)."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The Mutant Hydra counts as a boss for combat XP.",
            "The Mutant Hydra's head and neck give no extra XP: one kill, one XP payout.",
            "The death of your own summons and mounts (Makeshift, Junk Mech, bees, bats, etc.) no longer gives you combat XP.",
            "On controller, the RPG Skills window properly focuses the stack buttons and the passive and active toggles on the Shop.",
            "The D-pad no longer switches tabs while one of those buttons is focused."
          ]
        },
        {
          "heading": "👑 Realm Master",
          "items": [
            "At level 5, the class forces Unrivaled quality of life on settlers.",
            "At level 5, settlers no longer go on strike from mood.",
            "At level 5, settlement task XP triples, with a per-minute cap."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.9.4",
    "tag": "fix",
    "tagClass": "fix",
    "tagKey": "changelog.tag.fix",
    "pt": {
      "title": "🌟 Atualização 1.9.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>XP de time:</strong> no multijogador, o XP de combate é compartilhado com o seu time quando vocês estão no mesmo mapa e perto um do outro (padrão: 24 blocos).",
            "<strong>XP de time:</strong> se a invocação ou o golpe de um jogador mata o inimigo, os colegas de time por perto também ganham XP.",
            "<strong>XP de time:</strong> cada jogador recebe o XP calculado para o próprio nível e o próprio buff de XP, se tiver.",
            "<strong>XP de time:</strong> quem não está em time, está longe ou está em outro mapa ou ilha continua ganhando XP só dos próprios abates.",
            "<strong>XP de time:</strong> no arquivo de configuração de progressão dá para ligar ou desligar o compartilhamento e ajustar o raio."
          ]
        },
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Compatível com o Necesse 1.3.0 (atualização Rust & Romance).",
            "Ajustes para o mod continuar funcionando com as mudanças de assentamento e de loja do jogo.",
            "Textos novos do Necesse 1.3.0 que estavam em inglês no pt-BR do jogo passam a aparecer em português pelo RPG Skills.",
            "Isso inclui pets de incursão, romance, personalidades, qualidade de vida, newsletter e mais.",
            "Também vale para menus como Assinar a Newsletter."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "A mensagem de boas-vindas mostra a versão certa do mod, em vez de 1.0.",
            "Os ícones de filtro do baú voltam a aparecer normalmente, sem o quadrado vermelho.",
            "O piso de felicidade do Mestre dos Reinos volta a valer para os colonos, depois que o jogo mudou o cálculo da felicidade.",
            "Os descontos de loja e de expedição do assentamento voltam a valer ao abrir o menu do colono.",
            "O XP de combate na nova incursão Scrapyard não é mais tratado como o da Caverna de Slime.",
            "A Floresta Carbonizada não conta mais como floresta comum no XP de zona."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.9.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Team XP:</strong> in multiplayer, combat XP is shared with your team when you are on the same map and near each other (default: 24 tiles).",
            "<strong>Team XP:</strong> if a player's summon or hit kills the enemy, nearby teammates also gain XP.",
            "<strong>Team XP:</strong> each player gets XP calculated for their own level and their own XP buff, if any.",
            "<strong>Team XP:</strong> players not on a team, too far away or on another map or island still only get XP from their own kills.",
            "<strong>Team XP:</strong> in the progression config file you can turn the sharing on or off and change the radius."
          ]
        },
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Compatible with Necesse 1.3.0 (Rust & Romance update).",
            "Adjustments so the mod keeps working with the game's settlement and shop changes.",
            "New Necesse 1.3.0 text that was still in English in the game's pt-BR now shows in Portuguese through RPG Skills.",
            "This includes incursion pets, romance, personalities, quality of life, newsletter and more.",
            "It also covers menus like Subscribe to Newsletter."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The welcome message shows the correct mod version, instead of 1.0.",
            "Chest filter icons show normally again, without the red square.",
            "The Realm Master happiness floor applies to settlers again, after the game changed how happiness is calculated.",
            "Settlement shop and expedition discounts apply again when opening a settler's menu.",
            "Combat XP in the new Scrapyard incursion is no longer treated like the Slime Cave.",
            "The Charred Forest no longer counts as a normal forest for zone XP."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.9.3",
    "tag": "fix",
    "tagClass": "fix",
    "tagKey": "changelog.tag.fix",
    "pt": {
      "title": "🌟 Atualização 1.9.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "Com duas ou mais classes de debuff ativas no mesmo inimigo, o número azul mostra a soma total, em vez de vários números separados.",
            "Com só um debuff de classe, o visual continua igual.",
            "A aba Classes volta a mostrar a descrição completa ao passar o mouse no nome da classe e no botão +.",
            "A grade da aba Classes ficou mais compacta e fácil de ler."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O LB+RB do controle e a tecla configurada (padrão K) voltam a abrir e fechar a janela do RPG Skills sem falhar.",
            "Isso funciona mesmo sem a barra de XP ativa.",
            "Com a janela aberta no controle, o D-pad troca de aba quando nenhum botão está em foco.",
            "B/Circle fecha a janela, e A/Cross confirma o botão em foco.",
            "Na aba Loja, A/X/Y e RB continuam como atalhos de compra quando nenhum botão está em foco.",
            "Os botões de ombro e o D-pad do jogo base não ficam mais presos pelos atalhos do mod.",
            "Os botões do controle são acertados de novo quando um controle é conectado no meio do jogo.",
            "Os atalhos de teclado da Loja, do minerador de veios avançado, do minerador explosivo e do reforço de luz continuam ativos com teclado e mouse.",
            "Esses atalhos continuam desligados enquanto o controle está em uso, para não conflitar com o jogo.",
            "/rpgskills help volta a mostrar a lista de comandos.",
            "No multijogador, set level, maxskills e reset zero exigem permissão de admin.",
            "reset points continua disponível ao jogador, com custo em moedas quando aplicável.",
            "Foi fechado um atalho que deixava maximizar nível e classes sem ser admin."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.9.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "With two or more debuff classes active on the same enemy, the blue number shows the combined total instead of several separate numbers.",
            "With only one class debuff, the visual stays the same.",
            "The Classes tab shows the full description again when you hover the class name and the + button.",
            "The Classes tab grid is more compact and easier to read."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The controller's LB+RB and the bound key (default K) open and close the RPG Skills window reliably again.",
            "This works even without the XP bar active.",
            "With the window open on a controller, the D-pad switches tabs when no button is focused.",
            "B/Circle closes the window, and A/Cross confirms the focused button.",
            "On the Shop tab, A/X/Y and RB stay as buy shortcuts when no button is focused.",
            "The base game's shoulder buttons and D-pad no longer get stuck on the mod's shortcuts.",
            "Controller buttons are set up again when a controller connects mid-game.",
            "Keyboard hotkeys for the Shop, advanced vein miner, explosive miner and light boost stay active with mouse and keyboard.",
            "These hotkeys stay off while a controller is in use, to avoid conflicts with the game.",
            "/rpgskills help shows the command list again.",
            "In multiplayer, set level, maxskills and reset zero require admin permission.",
            "reset points stays available to players, with the coin cost when applicable.",
            "Closed a shortcut that let players max level and classes without being admin."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.9.2",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 1.9.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Configuração de progressão:</strong> novo arquivo na pasta de configurações do mod.",
            "<strong>Configuração de progressão:</strong> ajusta o multiplicador geral de XP, o XP fixo do mundo e a pena de morte.",
            "<strong>Configuração de progressão:</strong> ajusta a curva de nível, o nível máximo, os pontos por classe e os custos de reset.",
            "<strong>Configuração de classes:</strong> novo arquivo para ligar ou desligar classes.",
            "<strong>Configuração de classes:</strong> as classes desligadas não aparecem no jogo, não recebem pontos novos e não dão bônus.",
            "<strong>Configuração de classes:</strong> a passiva Mestre das Classes considera só as classes ligadas."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "A janela do RPG Skills tem um visual mais limpo.",
            "A lista de classes tem menos cortes.",
            "A rolagem fica mais estável ao trocar de aba.",
            "A Loja aparece com a altura certa."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "Minerar veios em área grande ficou mais estável.",
            "Organizar um inventário cheio ficou mais estável.",
            "Jogar com todas as classes no máximo ficou mais estável, sem travadinhas no uso normal."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Compatível com o Safe Haven QOL 1.2.0 a 2.6.",
            "Os menus e as dicas do Safe Haven aparecem em pt-BR.",
            "O tamanho das pilhas do RPG Skills continua valendo, sem conflito com os cosméticos e bugigangas do Safe Haven."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Proteção reforçada contra o bug em que aprender uma classe fazia os inimigos causarem só 1 de dano.",
            "Proteção reforçada para os debuffs de classe pegarem nos Cavernídeos, que podem ser caçados e não são hostis.",
            "O progresso salvo, os espaços de bugiganga e a sincronia entre jogadores ficaram mais seguros e consistentes.",
            "No multijogador, ao sair e entrar de novo, classes, buff de XP, maestria e espaços de bugiganga voltam iguais aos do servidor.",
            "Bônus de classe, debuffs e passivas são conferidos com mais rigor, evitando valores que mudam sem ninguém perceber.",
            "A passiva Mestre das Classes continua alcançável no nível máximo, com todas as classes ligadas no limite.",
            "Resistências elementais, dano contínuo, dano de uma vez e combinações de várias classes ficaram mais consistentes.",
            "Gastar pontos, resetar, comprar e o comando maxskills ficam protegidos contra pedidos inválidos ou feitos por outro jogador.",
            "Comandos de administrador sensíveis exigem permissão de admin, com uma recusa clara para quem não pode usar.",
            "Mais proteção automática para partes e itens importantes do mod não pararem de funcionar depois de atualizações do jogo.",
            "Os espaços de bugiganga do jogo base, inclusive os de itens que aumentam o total, continuam separados do bônus do RPG Skills ao salvar e carregar."
          ]
        },
        {
          "heading": "🧪 Qualidade",
          "items": [
            "O mod passa por conferência automática antes de cada atualização, para evitar problemas que voltam sem ninguém perceber.",
            "Mais testes para salvar e carregar, para a conversão de dados antigos e para a comunicação em rede.",
            "Mais testes automáticos de combate, progressão, pesca, assentamento, produção e exploração.",
            "O total de classes, os pontos e o nível máximo são conferidos automaticamente e não podem mudar sem aviso.",
            "Mais conferência automática da comunicação em rede, dos comandos e da sincronia entre jogador e servidor.",
            "Menos risco de situações impossíveis, como pontos negativos ou gasto sem saldo, passarem despercebidas.",
            "O mod ficou mais organizado por dentro, facilitando a manutenção e evitando problemas em atualizações futuras.",
            "Checklist de qualidade mais claro antes de cada publicação, testando como anfitrião e como convidado e a compatibilidade com outros mods."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.9.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Progression config:</strong> new file in the mod's settings folder.",
            "<strong>Progression config:</strong> sets the global XP multiplier, fixed world XP and death penalty.",
            "<strong>Progression config:</strong> sets the level curve, max level, points per class and reset costs.",
            "<strong>Class config:</strong> new file to turn classes on or off.",
            "<strong>Class config:</strong> disabled classes do not appear in the game, get no new points and give no bonuses.",
            "<strong>Class config:</strong> the Master of Classes passive only counts enabled classes."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "The RPG Skills window has a cleaner look.",
            "The class list has less clipping.",
            "Scrolling is more stable when switching tabs.",
            "The Shop shows at the right height."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "Vein mining over a large area is more stable.",
            "Sorting a full inventory is more stable.",
            "Playing with all classes maxed is more stable, with no hitching in normal use."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "Compatible with Safe Haven QOL 1.2.0 to 2.6.",
            "Safe Haven menus and tooltips show in pt-BR.",
            "RPG Skills stack sizes still apply, with no conflict with Safe Haven cosmetics and trinkets."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Stronger protection against the bug where learning a class made enemies deal only 1 damage.",
            "Stronger protection so class debuffs apply to Cavelings, which can be hunted and are not hostile.",
            "Progress saves, trinket slots and player sync are safer and more consistent.",
            "In multiplayer, after leaving and rejoining, classes, XP buff, mastery and trinket slots match the server again.",
            "Class bonuses, debuffs and passives are checked more strictly, avoiding values that change unnoticed.",
            "The Master of Classes passive stays reachable at max level, with all enabled classes maxed.",
            "Elemental resistances, ongoing damage, burst damage and multi-class combos are more consistent.",
            "Spending points, resetting, buying and the maxskills command are protected against invalid requests or requests from another player.",
            "Sensitive admin commands require admin permission, with a clear refusal for players who cannot use them.",
            "More automatic protection so important parts and items of the mod keep working after game updates.",
            "Base game trinket slots, including those from items that raise the total, stay separate from the RPG Skills bonus across save and load."
          ]
        },
        {
          "heading": "🧪 Quality",
          "items": [
            "The mod goes through automatic checks before each update, to avoid problems coming back unnoticed.",
            "More tests for saving and loading, converting old data and network communication.",
            "More automatic tests for combat, progression, fishing, settlements, production and exploration.",
            "Class count, points and max level are checked automatically and cannot change without warning.",
            "More automatic checks of network communication, commands and sync between player and server.",
            "Less risk of impossible situations, like negative points or spending without balance, going unnoticed.",
            "The mod is better organized inside, making maintenance easier and avoiding problems in future updates.",
            "Clearer quality checklist before each release, testing as host and as guest and compatibility with other mods."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.9.1",
    "tag": "fix",
    "tagClass": "fix",
    "tagKey": "changelog.tag.fix",
    "pt": {
      "title": "🌟 Atualização 1.9.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "As traduções do Safe Haven QOL 1.2 que vêm no RPG Skills foram atualizadas.",
            "Valem para o menu, as bandeiras novas, o filtro de lixo, a proteção da base, a busca de itens, o rastreador de missões e as dicas ao passar o mouse.",
            "O pt-BR está completo."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.9.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "The Safe Haven QOL 1.2 translations included in RPG Skills were updated.",
            "They cover the menu, new flags, trash filter, base protection, item finder, quest tracker and tooltips.",
            "pt-BR is complete."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.9",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 1.9 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🔧 Correções",
          "items": [
            "Os debuffs de classe (sangramento, fogo, veneno, gelo etc.) também pegam nos Cavernídeos, que não são hostis mas podem ser caçados.",
            "Aprender qualquer classe não faz mais os inimigos causarem só 1 de dano.",
            "O dano recebido volta ao normal ao atualizar o bônus de classe, em vez de ser zerado."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.9 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🔧 Fixes",
          "items": [
            "Class debuffs (bleed, fire, poison, frost, etc.) also apply to Cavelings, which are not hostile but can be hunted.",
            "Learning any class no longer makes enemies deal only 1 damage.",
            "Incoming damage goes back to normal when the class bonus updates, instead of being zeroed."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.8",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 1.8 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Reforço de luz:</strong> novo atalho configurável liga e desliga o reforço de luz das bugigangas luminosas, como o Cinto brilhante e a Lanterna de fogo-fátuo.",
            "<strong>Reforço de luz:</strong> desligado, vale a luz padrão do jogo.",
            "<strong>Reforço de luz:</strong> ligado, o mod aplica o alcance e a intensidade reforçados, incluindo o bônus da Ruína da Escuridão.",
            "<strong>Reforço de luz:</strong> a tecla é definida em Controles do jogo.",
            "<strong>Controle:</strong> segure LB+RB para abrir e fechar a janela de skills.",
            "<strong>Controle:</strong> com a janela aberta, o D-pad troca de aba e navega.",
            "<strong>Controle:</strong> A/Cross confirma e B/Circle fecha.",
            "<strong>Controle:</strong> na aba Loja, A/X/Y compram bônus de XP e RB compra mineração explosiva.",
            "<strong>Controle:</strong> os atalhos de teclado da Loja funcionam só com mouse e teclado e ficam desligados com o controle, para não conflitar com o jogo."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "A Lanterna de fogo-fátuo e outras bugigangas que emitem luz não piscam mais perto do personagem.",
            "A luz das bugigangas luminosas, como o Cinto brilhante, só vale com a bugiganga equipada e com o buff ativo, não só no inventário.",
            "O reforço da passiva Ruína da Escuridão também só vale com a bugiganga equipada e com o buff ativo.",
            "O Mestre das Relíquias não dá mais espaços de bugiganga a mais (ex.: 12 no primeiro ponto ou 255 depois de um reset).",
            "Resetar o Mestre das Relíquias remove o bônus inteiro, e não só 4 espaços.",
            "Usar itens do jogo que aumentam os espaços de bugiganga (pendente, bainha etc.) não apaga mais os acessórios equipados.",
            "O bônus da classe agora soma com o dos itens do jogo, e as bugigangas são recuperadas antes de os espaços diminuírem.",
            "O alcance de coleta do Mestre das Relíquias não fica mais ativo depois de resetar a classe para 0 pontos.",
            "Os baús não ficam mais com espaços diferentes em servidor dedicado: ao entrar no mundo, você recebe o nível real de espaços antes de abrir ou encolher baús.",
            "Isso evita perder itens por baú do tamanho errado.",
            "Em LAN e servidor dedicado, o personagem não é mais puxado de volta nem sofre lag quando os bônus de classe já estão estáveis."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.8 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Light boost:</strong> new configurable hotkey turns the light boost of luminous trinkets on and off, like the Shine belt and the Will-o'-wisp lantern.",
            "<strong>Light boost:</strong> when off, the game's normal light applies.",
            "<strong>Light boost:</strong> when on, the mod applies the boosted range and intensity, including the Dark Ruin bonus.",
            "<strong>Light boost:</strong> the key is set in the game's Controls.",
            "<strong>Controller:</strong> hold LB+RB to open and close the skills window.",
            "<strong>Controller:</strong> with the window open, the D-pad switches tabs and navigates.",
            "<strong>Controller:</strong> A/Cross confirms and B/Circle closes.",
            "<strong>Controller:</strong> on the Shop tab, A/X/Y buy XP boosts and RB buys explosive mining.",
            "<strong>Controller:</strong> Shop keyboard hotkeys only work with mouse and keyboard and are off with a controller, to avoid conflicts with the game."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The Will-o'-wisp lantern and other light-emitting trinkets no longer flicker near your character.",
            "Light from luminous trinkets, like the Shine belt, only applies with the trinket equipped and its buff active, not just in the inventory.",
            "The Dark Ruin passive boost also only applies with the trinket equipped and its buff active.",
            "Relic Master no longer gives too many trinket slots (e.g. 12 on the first point or 255 after a reset).",
            "Resetting Relic Master removes the whole bonus, not just 4 slots.",
            "Using game items that add trinket slots (pendant, sheath, etc.) no longer deletes equipped accessories.",
            "The class bonus now adds on top of the game items' bonus, and trinkets are recovered before slots shrink.",
            "Relic Master pickup range no longer stays active after resetting the class to 0 points.",
            "Chests no longer have mismatched slots on dedicated servers: joining a world gives you the real slot level before chests open or shrink.",
            "This prevents losing items from wrongly sized chests.",
            "In LAN and dedicated servers, your character no longer gets pulled back or lags when class bonuses are already stable."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.7",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 1.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Visual dos debuffs:</strong> as bolhas roxas e verdes do jogo base nos debuffs elementais foram removidas.",
            "<strong>Visual dos debuffs:</strong> cada tipo tem partículas coloridas: fogo laranja, veneno verde, gelo azul, pesadelo roxo e sangue vermelho.",
            "<strong>Visual dos debuffs:</strong> as partículas pulsam enquanto o debuff dura e param quando ele acaba.",
            "<strong>Dano azul:</strong> o dano contínuo dos debuffs de classe aparece em números azuis, diferente do dano direto.",
            "<strong>Dano azul:</strong> o dano contínuo de classe passa a usar o sistema de dano do jogo.",
            "<strong>Boneco de treino:</strong> os debuffs de classe funcionam no boneco de treino (DPS Dummy).",
            "<strong>Boneco de treino:</strong> ao acertar, o debuff é aplicado e o dano contínuo aparece em azul, separado do dano normal do ataque.",
            "<strong>Boneco de treino:</strong> o dano contínuo de classe conta no boneco de treino.",
            "<strong>Cura em verde:</strong> roubo de vida, cura ao matar e outras curas diretas do mod mostram um texto verde com o valor recuperado.",
            "<strong>Barra de buffs:</strong> o indicador de dano contínuo do mod aparece na barra de buffs, mostrando quando o efeito ainda está ativo."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Com o Safe Haven QOL instalado, o RPG Skills traz as traduções dele.",
            "Menu, bandeiras, economia, grade de construção e os outros textos dele aparecem no idioma do jogo.",
            "O pt-BR está completo, e os outros idiomas usam o inglês como base.",
            "O RPG Skills desliga sozinho os acúmulos de cosméticos e bugigangas do Safe Haven QOL 1.2, além dos de pergaminhos, invocações e moedas.",
            "Assim o RPG Skills continua definindo o tamanho das pilhas."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Os danos contínuos de classes diferentes não se substituem mais no mesmo alvo.",
            "Sangramento, queimadura, veneno, gelo e escuridão acumulam separados (ex.: cinco classes no 5 dão até 125/s de dano azul).",
            "O dano contínuo dos debuffs entra no medidor de DPS do boneco de treino do jogo, com 1 leitura por segundo.",
            "O boneco de treino não mostra mais vários números azuis e várias contagens separadas.",
            "Debuffs e danos contínuos voltam a renovar a duração nos acertos seguintes enquanto o efeito está ativo.",
            "Os debuffs elementais voltam a somar duração ao acertar o mesmo alvo de novo, até o limite máximo do mod.",
            "Os debuffs do jogo base, como o sangramento vermelho, não causam mais dano duplicado.",
            "Só o dano contínuo do mod, que cresce com a classe e aparece em azul, continua valendo."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Debuff visuals:</strong> the base game's purple and green blobs on elemental debuffs were removed.",
            "<strong>Debuff visuals:</strong> each type has colored particles: orange fire, green poison, blue frost, purple nightmare and red bleed.",
            "<strong>Debuff visuals:</strong> the particles pulse while the debuff lasts and stop when it ends.",
            "<strong>Blue damage:</strong> ongoing damage from class debuffs shows in blue numbers, apart from direct damage.",
            "<strong>Blue damage:</strong> class ongoing damage now uses the game's damage system.",
            "<strong>Training dummy:</strong> class debuffs work on the training dummy (DPS Dummy).",
            "<strong>Training dummy:</strong> hits apply the debuff and the ongoing damage shows in blue, apart from normal attack damage.",
            "<strong>Training dummy:</strong> class ongoing damage counts on the training dummy.",
            "<strong>Green heals:</strong> lifesteal, kill heals and other direct mod heals show green text with the amount recovered.",
            "<strong>Buff bar:</strong> the mod's ongoing damage indicator shows on the buff bar, so you can tell when the effect is still active."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "With Safe Haven QOL installed, RPG Skills brings its translations.",
            "Its menu, flags, economy, build grid and other text follow your game language.",
            "pt-BR is complete, and other languages use English as the base.",
            "RPG Skills automatically turns off Safe Haven QOL 1.2's cosmetic and trinket stacking, along with scrolls, summons and coins.",
            "This way RPG Skills keeps deciding stack sizes."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Ongoing damage from different classes no longer replaces each other on the same target.",
            "Bleed, burn, poison, frost and darkness stack separately (e.g. five classes at 5 deal up to 125/s of blue damage).",
            "Debuff ongoing damage feeds the game's training dummy DPS meter, with 1 reading per second.",
            "The training dummy no longer shows many blue numbers and separate counts.",
            "Debuffs and ongoing damage refresh their duration again on later hits while the effect is active.",
            "Elemental debuffs stack duration again when you hit the same target, up to the mod's maximum.",
            "Base game debuffs, like the red bleed, no longer deal duplicate damage.",
            "Only the mod's ongoing damage, which scales with the class and shows in blue, still applies."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.6",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 1.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Melhor compatibilidade com mods que repassam os bônus do líder aos colonos.",
            "Os colonos podem receber uma versão segura dos bônus de classe do líder.",
            "Efeitos feitos só para o jogador não são copiados para os colonos."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Os efeitos passivos do jogador não são mais conferidos vezes demais ao atualizar os bônus de classe.",
            "Companheiros utilitários, como o Wisp que revela armadilhas, não somem e reaparecem mais durante o jogo.",
            "O mod não reenvia mais o mesmo bônus de classe quando nada mudou no personagem.",
            "Colocar o primeiro ponto no Mestre das Relíquias não trava mais o jogo.",
            "O bônus de espaços do Mestre das Relíquias não se aplica mais várias vezes seguidas, criando espaços de bugiganga demais.",
            "Jogadores em outro idioma não veem mais textos em português ou espanhol.",
            "O idioma padrão de reserva agora é o inglês.",
            "A descrição no menu de mods agora fica em inglês, para mais jogadores entenderem."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Better compatibility with mods that share the leader's bonuses with settlers.",
            "Settlers can receive a safe version of the leader's class bonuses.",
            "Effects meant only for the player are not copied to settlers."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The player's passive effects are no longer checked too often while class bonuses update.",
            "Utility companions, like the trap-revealing Wisp, no longer disappear and reappear during play.",
            "The mod no longer resends the same class bonus when nothing changed on the character.",
            "Placing the first point into Relic Master no longer freezes the game.",
            "Relic Master's slot bonus no longer applies several times in a row, creating too many trinket slots.",
            "Players using another language no longer see Portuguese or Spanish text.",
            "The default fallback language is now English.",
            "The mod menu description is now in English, so more players can read it."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.5",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 1.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Configuração:</strong> nova opção para mover a barra de XP do RPG Skills.",
            "<strong>Configuração:</strong> com a opção ligada, a posição da barra de XP fica salva e não volta sozinha para o lugar automático.",
            "<strong>Configuração:</strong> nova opção para ligar ou desligar a perda de XP ao morrer.",
            "<strong>Configuração:</strong> os arquivos de configuração ficam em %APPDATA%\\Necesse\\cfg\\mods\\rpgskills\\settings."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "Administradores definem ou removem o bônus de XP temporário pelo comando do RPG Skills, sem editar arquivos do servidor."
          ]
        },
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Com mods que passam os bônus do líder para os colonos, só os bônus do RPG Skills que funcionam bem neles são passados.",
            "Compatibilidade opcional com o Safe Haven QOL."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Os slots de bugigangas voltam melhor quando o nível ou os pontos do RPG Skills são resetados.",
            "O mod reconhece melhor os slots de bugigangas dados pelo jogo e por outros mods, sem a quantidade ficar presa num valor menor.",
            "O comando maxskills não cria mais slots de bugigangas demais.",
            "O reset de pontos e o reset do zero removem certo os slots extras de bugigangas do RPG Skills.",
            "Os slots de bugigangas ganhos com itens do Necesse ficam separados dos ganhos pelo Mestre das Relíquias.",
            "Os slots extras de baú funcionam melhor com as diferentes formas de criar os baús do jogo.",
            "O botão de organizar junta melhor stacks iguais nos slots extras dos baús."
          ]
        },
        {
          "heading": "🛒 Loja",
          "items": [
            "Os bônus de XP 2x, 5x e 10x duram 10 minutos."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Settings:</strong> new option to move the RPG Skills XP bar.",
            "<strong>Settings:</strong> with the option on, the XP bar position is saved and no longer snaps back to the automatic spot.",
            "<strong>Settings:</strong> new option to turn XP loss on death on or off.",
            "<strong>Settings:</strong> the settings files are in %APPDATA%\\Necesse\\cfg\\mods\\rpgskills\\settings."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "Administrators set or clear the temporary XP bonus with the RPG Skills command, without editing server files."
          ]
        },
        {
          "heading": "🤝 Compatibility",
          "items": [
            "With mods that share the leader's buffs with settlers, only the RPG Skills bonuses that work well on them are passed on.",
            "Optional compatibility with Safe Haven QOL."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Trinket slots come back better when RPG Skills level or points are reset.",
            "The mod better recognizes trinket slots given by the game and other mods, so the count does not get stuck too low.",
            "The maxskills command no longer creates too many trinket slots.",
            "Point reset and start-from-zero reset correctly remove RPG Skills extra trinket slots.",
            "Trinket slots from Necesse items are kept separate from Relic Master slots.",
            "Extra chest slots work better with the different ways the game creates chests.",
            "The organize button merges matching stacks better in extra chest slots."
          ]
        },
        {
          "heading": "🛒 Shop",
          "items": [
            "The 2x, 5x and 10x XP bonuses last 10 minutes."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.4",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 1.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Idiomas:</strong> alemão, espanhol, francês, italiano, japonês, holandês, polonês, russo e chinês simplificado foram revisados para tirar textos que ainda apareciam em inglês.",
            "<strong>Idiomas:</strong> a tradução em chinês foi completada na interface, loja, classes, passivas, atributos, comandos e filtros de baú.",
            "<strong>Idiomas:</strong> as traduções são conferidas com mais rigor para não passarem só repetindo o texto em inglês."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "A janela do RPG Skills abre e fecha com o combo LB + RB no controle.",
            "Não é mais preciso deixar a tela de equipamento aberta para isso.",
            "LB e RB apertados separados continuam com as ações normais do jogo."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "O RPG Skills desliga os stacks alterados pelo Safe Haven QOL 1.3 para pergaminhos de encantamento, itens de invocar chefes e moedas.",
            "Assim, o tamanho dos stacks continua seguindo o RPG Skills."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "Quem joga no controle não depende mais da tela de equipamento aberta para usar os atalhos do RPG Skills.",
            "Nível, XP e progresso das classes também ficam gravados no save do personagem.",
            "Isso ajuda a manter o progresso ao trocar de dispositivo com o save sincronizado.",
            "Corrigida uma falha rara em que o Mestre das Relíquias voltava para 0, reduzindo slots de trinket e arriscando os itens equipados.",
            "Os slots de trinket não diminuem mais sozinhos durante o jogo; só diminuem num reset de pontos."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Languages:</strong> German, Spanish, French, Italian, Japanese, Dutch, Polish, Russian and Simplified Chinese were reviewed to remove text still showing in English.",
            "<strong>Languages:</strong> the Chinese translation was completed for the interface, shop, classes, passives, attributes, commands and chest filters.",
            "<strong>Languages:</strong> translations are checked more strictly so they cannot pass by just repeating the English text."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "The RPG Skills window opens and closes with the LB + RB controller combo.",
            "You no longer need to keep the equipment screen open for that.",
            "LB and RB pressed separately keep the game's normal actions."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "RPG Skills turns off Safe Haven QOL 1.3's altered stacks for enchanting scrolls, boss-summon items and coins.",
            "This way, stack sizes keep following RPG Skills."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Controller players no longer need the equipment screen open to use RPG Skills shortcuts.",
            "Level, XP and class progress are also stored in the character save.",
            "This helps keep progress when switching devices with a synced save.",
            "Fixed a rare issue where Relic Master dropped back to 0, reducing trinket slots and putting equipped items at risk.",
            "Trinket slots no longer shrink on their own during play; they only shrink on a point reset."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.3",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 1.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Mestre das Armadilhas:</strong> nova classe com 5 níveis.",
            "<strong>Mestre das Armadilhas:</strong> aumenta o dano das armadilhas dentro dos assentamentos.",
            "<strong>Mestre das Armadilhas:</strong> reduz o dano de armadilhas fora dos assentamentos para jogadores e colonos.",
            "<strong>Mestre das Armadilhas:</strong> bloqueia o dano de armadilhas em jogadores e colonos dentro dos assentamentos.",
            "<strong>Mestre das Armadilhas:</strong> no nível 5, as armadilhas do assentamento aplicam sangramento nos inimigos atingidos.",
            "<strong>Mestre das Máquinas:</strong> nova classe com 5 níveis.",
            "<strong>Mestre das Máquinas:</strong> acelera todas as máquinas.",
            "<strong>Mestre das Máquinas:</strong> o combustível dura mais nas máquinas que usam combustível.",
            "<strong>Mestre das Máquinas:</strong> cada nível tem tempos definidos para fornalha, prensa de queijo, composteira e moinho.",
            "<strong>Mestre das Máquinas:</strong> no nível 5, fornalha, prensa de queijo, composteira e moinho processam em 2 segundos.",
            "<strong>Mestre das Máquinas:</strong> o tronco na fornalha dura 80s, 120s, 240s, 360s e 600s, conforme o nível.",
            "<strong>Mestre da Natureza:</strong> nova classe com 5 níveis.",
            "<strong>Mestre da Natureza:</strong> acelera plantações, árvores, árvores frutíferas, arbustos com frutinhas e cogumelos nos assentamentos do jogador ou do time.",
            "<strong>Mestre da Natureza:</strong> o crescimento fica 25%, 50%, 75%, 100% e 300% mais rápido, conforme o nível.",
            "<strong>Administração Eficiente:</strong> nova passiva do Mestre dos Reinos no nível 5.",
            "<strong>Administração Eficiente:</strong> os colonos trabalham mais rápido.",
            "<strong>Administração Eficiente:</strong> as expedições levam menos tempo.",
            "<strong>Filtros de baú:</strong> baús expandidos têm um painel fixo de filtros por categoria ao lado da grade.",
            "<strong>Filtros de baú:</strong> o painel ajuda a achar consumíveis, materiais, equipamentos e outros itens.",
            "<strong>Comandos:</strong> administradores ajustam direto o limite de slots de baús e o stack do mundo."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "Organizar baús grandes ficou mais leve, com menos travadas no botão ou atalho de organizar."
          ]
        },
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Com o Safe Haven QOL ativo, as dicas de sementes, mudas e árvores frutíferas mostram o tempo de crescimento com o bônus do Mestre da Natureza.",
            "O RPG Skills corrige a tradução pt-BR de textos do Necesse 1.2.0 que ainda estavam em inglês."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O comando maxskills atualiza certo os bônus do jogador, inclusive na tela de estatísticas.",
            "Quem tem bônus de vida e mana máximas entra no mundo com elas cheias, se estavam cheias antes.",
            "Os itens do jogo que aumentam slots de acessórios funcionam junto com o bônus do Mestre das Relíquias."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Trap Master:</strong> new 5-level class.",
            "<strong>Trap Master:</strong> increases trap damage inside settlements.",
            "<strong>Trap Master:</strong> reduces trap damage outside settlements for players and colonists.",
            "<strong>Trap Master:</strong> blocks trap damage to players and colonists inside settlements.",
            "<strong>Trap Master:</strong> at level 5, settlement traps apply bleeding to enemies they hit.",
            "<strong>Machine Master:</strong> new 5-level class.",
            "<strong>Machine Master:</strong> speeds up all machines.",
            "<strong>Machine Master:</strong> fuel lasts longer in fueled machines.",
            "<strong>Machine Master:</strong> each level has fixed times for forge, cheese press, compost bin and grain mill.",
            "<strong>Machine Master:</strong> at level 5, forge, cheese press, compost bin and grain mill process in 2 seconds.",
            "<strong>Machine Master:</strong> logs in the forge last 80s, 120s, 240s, 360s and 600s, by level.",
            "<strong>Nature Master:</strong> new 5-level class.",
            "<strong>Nature Master:</strong> speeds up crops, trees, fruit trees, berry bushes and mushrooms in player or team settlements.",
            "<strong>Nature Master:</strong> growth becomes 25%, 50%, 75%, 100% and 300% faster, by level.",
            "<strong>Efficient Administration:</strong> new Realm Master passive at level 5.",
            "<strong>Efficient Administration:</strong> colonists work faster.",
            "<strong>Efficient Administration:</strong> expeditions take less time.",
            "<strong>Chest filters:</strong> expanded chests have a fixed category filter panel beside the grid.",
            "<strong>Chest filters:</strong> the panel helps find consumables, materials, equipment and other items.",
            "<strong>Commands:</strong> administrators directly adjust the chest slot limit and world stack."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "Sorting large chests is lighter, with fewer stutters from the sort button or shortcut."
          ]
        },
        {
          "heading": "🤝 Compatibility",
          "items": [
            "With Safe Haven QOL on, seed, sapling and fruit tree tooltips show growth time with the Nature Master bonus.",
            "RPG Skills fixes the pt-BR translation of Necesse 1.2.0 texts that were still in English."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "The maxskills command correctly updates the player's bonuses, including on the stats screen.",
            "Players with max health and max mana bonuses enter the world with them full, if they were full before.",
            "The game's trinket slot upgrade items work alongside the Relic Master bonus."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.2",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 1.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Mestre Gourmet:</strong> nova classe com 5 níveis.",
            "<strong>Mestre Gourmet:</strong> aumenta a duração dos buffs de comida em 25%, 50%, 75%, 100% e 300%.",
            "<strong>Mestre Gourmet:</strong> no nível 5, Barriga Sempre Cheia faz você comer sozinho quando a fome fica abaixo de 95%.",
            "<strong>Mestre da Alquimia:</strong> nova classe com 5 níveis.",
            "<strong>Mestre da Alquimia:</strong> aumenta a duração dos buffs de poções e do Frasco Fedorento em 25%, 50%, 75%, 100% e 300%.",
            "<strong>Mestre da Alquimia:</strong> no nível 5, Auto Poção usa poções de vida sozinha quando a vida fica baixa.",
            "<strong>Mestre do Rancho:</strong> nova classe com 5 níveis.",
            "<strong>Mestre do Rancho:</strong> acelera a domesticação, a procriação e o crescimento dos filhotes.",
            "<strong>Mestre do Rancho:</strong> no nível 5, animais de rancho mortos na zona de criação dropam 5x mais itens.",
            "<strong>Aura de Liderança:</strong> nova passiva do Mestre dos Reinos no nível 5.",
            "<strong>Aura de Liderança:</strong> os colonos recebem bônus de dano, vida, redução de dano e velocidade de movimento.",
            "<strong>Nível máximo:</strong> sobe para 150 para caber as novas classes.",
            "<strong>Configuração:</strong> o raio do envio rápido para baús pode ser ajustado."
          ]
        },
        {
          "heading": "🛠️ Qualidade de vida",
          "items": [
            "O envio rápido de itens do inventário para baús e barris próximos alcança mais longe."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "Menos trabalho repetido em segundo plano, evitando travadas e quedas fortes de FPS.",
            "Os animais de rancho do Mestre do Rancho pesam menos no jogo, evitando pequenas travadas em mundos com muitos mobs."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Com o Safe Haven QOL instalado junto, o RPG Skills ajuda a criar e aplicar a configuração dele.",
            "Com o Safe Haven QOL 0.9, o RPG Skills completa as opções novas da configuração sem apagar as escolhas já feitas."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O Golpe de Ouro do Mestre da Riqueza dá ouro ao acertar inimigos desde o primeiro nível da classe.",
            "Usar montarias não trava mais o jogo enquanto os bônus do personagem são atualizados.",
            "A tela de status não trava mais ao receber dados do servidor durante o jogo."
          ]
        },
        {
          "heading": "💰 Mestre da Riqueza",
          "items": [
            "O ouro por acerto do Golpe de Ouro aumenta com os níveis da classe, até 50 ouro por acerto no nível 5."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Gourmet Master:</strong> new 5-level class.",
            "<strong>Gourmet Master:</strong> increases food buff duration by 25%, 50%, 75%, 100% and 300%.",
            "<strong>Gourmet Master:</strong> at level 5, Always Full Belly makes you eat automatically when hunger drops below 95%.",
            "<strong>Alchemy Master:</strong> new 5-level class.",
            "<strong>Alchemy Master:</strong> increases potion buff and Stink Flask duration by 25%, 50%, 75%, 100% and 300%.",
            "<strong>Alchemy Master:</strong> at level 5, Auto Potion uses health potions automatically when health gets low.",
            "<strong>Ranch Master:</strong> new 5-level class.",
            "<strong>Ranch Master:</strong> speeds up taming, breeding and baby growth.",
            "<strong>Ranch Master:</strong> at level 5, ranch animals killed in the husbandry zone drop 5x more items.",
            "<strong>Leadership Aura:</strong> new Realm Master passive at level 5.",
            "<strong>Leadership Aura:</strong> colonists get bonuses to damage, health, damage reduction and movement speed.",
            "<strong>Max level:</strong> raised to 150 to fit the new classes.",
            "<strong>Settings:</strong> the quick stack to chests range can be adjusted."
          ]
        },
        {
          "heading": "🛠️ Quality of life",
          "items": [
            "Quick stacking inventory items to nearby chests and barrels reaches farther."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "Less repeated background work, avoiding freezes and heavy FPS drops.",
            "Ranch Master's ranch animals weigh less on the game, avoiding small freezes in worlds with many mobs."
          ]
        },
        {
          "heading": "🤝 Compatibility with Safe Haven QOL",
          "items": [
            "With Safe Haven QOL installed alongside, RPG Skills helps create and apply its settings.",
            "With Safe Haven QOL 0.9, RPG Skills fills in new settings options without erasing choices already made."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Wealth Master's Gold Strike gives gold when hitting enemies from the first class level.",
            "Using mounts no longer freezes the game while character bonuses are updated.",
            "The status screen no longer freezes when receiving server data during gameplay."
          ]
        },
        {
          "heading": "💰 Wealth Master",
          "items": [
            "Gold Strike's gold per hit grows with class levels, up to 50 gold per hit at level 5."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.1",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 1.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "⚡ Desempenho",
          "items": [
            "O mod faz menos trabalho repetido durante o jogo.",
            "Isso reduz travadas e lag sem mudar as regras das classes."
          ]
        },
        {
          "heading": "🤝 Compatibilidade",
          "items": [
            "Mundos e personagens antigos continuam funcionando."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "O reset de pontos não consome mais moedas quando você não tem o suficiente.",
            "A cobrança do reset só acontece quando pode ser feita corretamente.",
            "Compras na Loja que usam moedas e itens ficaram mais seguras.",
            "Se faltar um item no final da compra, as moedas não somem por engano.",
            "Comandos e botões do menu seguem as mesmas regras de segurança para moedas."
          ]
        },
        {
          "heading": "📈 Progressão",
          "items": [
            "Subir de nível pede mais XP.",
            "O nível 1 precisa de 10.000 XP, o nível 2 de 20.000 XP, e assim por diante.",
            "Para ir do nível 134 ao 135 são precisos 1.350.000 XP.",
            "A jornada até o nível máximo fica mais longa e mais estável.",
            "Resetar pontos custa 1.000 moedas por nível do jogador.",
            "Um personagem no nível 25, por exemplo, paga 25.000 moedas."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "⚡ Performance",
          "items": [
            "The mod does less repeated work while you play.",
            "This reduces stutters and lag without changing class rules."
          ]
        },
        {
          "heading": "🤝 Compatibility",
          "items": [
            "Old worlds and characters keep working."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "Point reset no longer consumes coins when you do not have enough.",
            "The reset charge only happens when it can be completed correctly.",
            "Shop purchases that use coins and items are safer.",
            "If an item is missing at the end of a purchase, coins no longer disappear by mistake.",
            "Commands and menu buttons follow the same coin safety rules."
          ]
        },
        {
          "heading": "📈 Progression",
          "items": [
            "Leveling up needs more XP.",
            "Level 1 needs 10,000 XP, level 2 needs 20,000 XP, and so on.",
            "Going from level 134 to 135 takes 1,350,000 XP.",
            "The road to max level is longer and steadier.",
            "Resetting points costs 1,000 coins per player level.",
            "A level 25 character, for example, pays 25,000 coins."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "1.0",
    "tag": "release",
    "tagClass": "major",
    "tagKey": "changelog.tag.release",
    "pt": {
      "title": "🌟 Atualização 1.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Versão oficial:</strong> o RPG Skills chegou à versão oficial 1.0.",
            "<strong>Versão oficial:</strong> as versões anteriores serviram de teste, ajuste e aprendizado até o mod chegar aqui.",
            "<strong>Versão oficial:</strong> o mod passou por uma grande reformulação para ficar mais organizado, mais claro e pronto para continuar evoluindo.",
            "<strong>Versão oficial:</strong> o mod deixa de ser um conjunto de testes e bônus soltos e vira uma camada RPG completa para o Necesse.",
            "<strong>Versão oficial:</strong> o foco é dar mais profundidade ao personagem sem tirar o estilo original do jogo.",
            "<strong>Progressão:</strong> o personagem evolui com níveis, XP e pontos de habilidade.",
            "<strong>Progressão:</strong> você ganha XP jogando normalmente: derrotando inimigos, enfrentando chefes, minerando, colhendo, pescando, plantando, explorando e interagindo com assentamentos.",
            "<strong>Progressão:</strong> ao subir de nível, você ganha pontos para investir nas classes.",
            "<strong>Progressão:</strong> explorar, lutar, minerar, pescar, construir e cuidar do mundo alimentam uma progressão maior.",
            "<strong>Progressão:</strong> mais motivo para continuar no mesmo personagem e sentir evolução real pelo mundo.",
            "<strong>Classes:</strong> o sistema de classes foi refeito com 27 classes.",
            "<strong>Classes:</strong> os estilos são corpo a corpo, distância, magia, invocação, sobrevivência, defesa, mobilidade, mineração, pesca, loot, ouro, construção, trinkets e assentamentos.",
            "<strong>Classes:</strong> cada classe fortalece uma parte diferente do jogo, para você montar builds do seu jeito.",
            "<strong>Classes:</strong> algumas classes liberam efeitos especiais, como visão, mineração em veios, efeitos elementais, cura, defesa, mobilidade e bônus de utilidade.",
            "<strong>Classes:</strong> o Mestre das Cavernas libera o Minerador de Veios para melhorar a mineração.",
            "<strong>Janela do RPG Skills:</strong> organizada em três abas: Status, Classes e Loja.",
            "<strong>Janela do RPG Skills:</strong> a aba Status mostra nível, XP, pontos livres e informações gerais do personagem.",
            "<strong>Janela do RPG Skills:</strong> a aba Classes mostra as classes e deixa investir os pontos de habilidade.",
            "<strong>Janela do RPG Skills:</strong> a aba Loja reúne bônus temporários de XP, melhorias de stack do mundo e slots extras para baús.",
            "<strong>Janela do RPG Skills:</strong> o atalho padrão para abrir e fechar é K.",
            "<strong>Loja:</strong> bônus temporários de XP aceleram a evolução.",
            "<strong>Loja:</strong> atalhos configuráveis para os bônus de XP 2x, 5x e 10x.",
            "<strong>Loja:</strong> melhoria do stack do mundo, que ajuda na organização e no farm.",
            "<strong>Slots de baú:</strong> a Loja vende melhorias globais de slots para os baús do mundo.",
            "<strong>Slots de baú:</strong> cada compra adiciona +10 slots, começando em 5.000 moedas, até o limite de 400 slots.",
            "<strong>Slots de baú:</strong> baús grandes ganham rolagem para manter os slots acessíveis.",
            "<strong>Slots de baú:</strong> a Loja tem um reset que volta os baús ao padrão de 40 slots.",
            "<strong>Slots de baú:</strong> antes de resetar, tire os itens dos slots extras.",
            "<strong>Slots de baú:</strong> o mod tenta jogar os itens dos slots extras no chão ao redor do baú, mas ainda pode haver perda.",
            "<strong>Slots de baú:</strong> o reset não devolve as moedas.",
            "<strong>Minerador Explosivo:</strong> nova habilidade na Loja, comprada por jogador.",
            "<strong>Minerador Explosivo:</strong> exige Mestre das Cavernas nível 5 para comprar e para usar.",
            "<strong>Minerador Explosivo:</strong> se os pontos forem resetados e o requisito cair, fica bloqueado até voltar ao nível certo.",
            "<strong>Minerador Explosivo:</strong> ligado pelo atalho configurável, faz qualquer picareta quebrar os blocos ao redor com efeito de explosão.",
            "<strong>Minerador Explosivo:</strong> não machuca jogadores nem mobs e não dá XP nas quebras extras.",
            "<strong>Minerador Explosivo:</strong> só funciona com picaretas e respeita o poder da picareta usada.",
            "<strong>Minerador Explosivo:</strong> tem limites para evitar travamentos em áreas muito cheias.",
            "<strong>Minerador Explosivo:</strong> não funciona junto com o modo avançado do Minerador de Veios.",
            "<strong>Comandos:</strong> /rpgskills set level <1-135> define o nível do jogador e zera a experiência atual.",
            "<strong>Comandos:</strong> /rpgskills maxskills coloca o jogador no nível máximo e maximiza todas as classes.",
            "<strong>Comandos:</strong> /rpgskills reset points devolve os pontos de classe, cobrando o custo correto quando necessário.",
            "<strong>Comandos:</strong> /rpgskills reset zero zera todo o progresso e devolve moedas de reset."
          ]
        },
        {
          "heading": "⚠️ Importante",
          "items": [
            "É recomendado criar um personagem novo para jogar a 1.0 corretamente.",
            "Personagens antigos podem não combinar com a progressão atual, porque o sistema mudou bastante.",
            "Um personagem novo evita progresso estranho, pontos fora do lugar e bônus antigos misturados.",
            "Comece em um mundo novo se quiser sentir a progressão do zero.",
            "A 1.0 é o ponto de partida oficial, feita para ser limpa, equilibrada e crescer desde o início."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 1.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Official release:</strong> RPG Skills has reached its official 1.0 release.",
            "<strong>Official release:</strong> previous versions were tests, adjustments and learning steps until the mod got here.",
            "<strong>Official release:</strong> the mod went through a big rework to be cleaner, clearer and ready to keep evolving.",
            "<strong>Official release:</strong> the mod is no longer a set of tests and loose bonuses and becomes a complete RPG layer for Necesse.",
            "<strong>Official release:</strong> the focus is to give your character more depth without removing the game's original style.",
            "<strong>Progression:</strong> your character grows with levels, XP and skill points.",
            "<strong>Progression:</strong> you earn XP by playing normally: defeating enemies, fighting bosses, mining, harvesting, fishing, planting, exploring and interacting with settlements.",
            "<strong>Progression:</strong> when you level up, you gain points to invest in classes.",
            "<strong>Progression:</strong> exploring, fighting, mining, fishing, building and taking care of the world feed a larger progression.",
            "<strong>Progression:</strong> more reason to keep the same character and feel real growth across the world.",
            "<strong>Classes:</strong> the class system was rebuilt with 27 classes.",
            "<strong>Classes:</strong> the styles are melee, ranged, magic, summon, survival, defense, mobility, mining, fishing, loot, gold, building, trinkets and settlements.",
            "<strong>Classes:</strong> each class strengthens a different part of the game, so you can build your character your way.",
            "<strong>Classes:</strong> some classes unlock special effects such as vision, vein mining, elemental effects, healing, defense, mobility and utility bonuses.",
            "<strong>Classes:</strong> Cavern Master unlocks Vein Miner to improve mining.",
            "<strong>RPG Skills window:</strong> organized into three tabs: Status, Classes and Shop.",
            "<strong>RPG Skills window:</strong> the Status tab shows level, XP, free points and general character info.",
            "<strong>RPG Skills window:</strong> the Classes tab shows the classes and lets you spend skill points.",
            "<strong>RPG Skills window:</strong> the Shop tab brings together temporary XP bonuses, world stack upgrades and extra chest slots.",
            "<strong>RPG Skills window:</strong> the default shortcut to open and close it is K.",
            "<strong>Shop:</strong> temporary XP bonuses speed up progression.",
            "<strong>Shop:</strong> configurable hotkeys for the 2x, 5x and 10x XP bonuses.",
            "<strong>Shop:</strong> world stack upgrade, which helps with storage and farming.",
            "<strong>Chest slots:</strong> the Shop sells global slot upgrades for the world's chests.",
            "<strong>Chest slots:</strong> each purchase adds +10 slots, starting at 5,000 coins, up to 400 slots.",
            "<strong>Chest slots:</strong> large chests get scrolling to keep slots accessible.",
            "<strong>Chest slots:</strong> the Shop has a reset that returns chests to the default 40 slots.",
            "<strong>Chest slots:</strong> before resetting, remove items from the extra slots.",
            "<strong>Chest slots:</strong> the mod tries to drop items from extra slots on the ground around the chest, but something may still be lost.",
            "<strong>Chest slots:</strong> the reset does not refund coins.",
            "<strong>Explosive Miner:</strong> new Shop ability, bought per player.",
            "<strong>Explosive Miner:</strong> requires Cavern Master level 5 to buy and to use.",
            "<strong>Explosive Miner:</strong> if points are reset and the requirement drops, it stays blocked until the right level is reached again.",
            "<strong>Explosive Miner:</strong> turned on with its configurable hotkey, it makes any pickaxe break nearby blocks with an explosion effect.",
            "<strong>Explosive Miner:</strong> it does not hurt players or mobs and gives no XP for extra breaks.",
            "<strong>Explosive Miner:</strong> it only works with pickaxes and respects the power of the pickaxe used.",
            "<strong>Explosive Miner:</strong> it has limits to avoid freezes in very crowded areas.",
            "<strong>Explosive Miner:</strong> it does not work together with Advanced Vein Miner mode.",
            "<strong>Commands:</strong> /rpgskills set level <1-135> sets the player level and clears current experience.",
            "<strong>Commands:</strong> /rpgskills maxskills sets the player to max level and maxes every class.",
            "<strong>Commands:</strong> /rpgskills reset points refunds class points, charging the correct cost when needed.",
            "<strong>Commands:</strong> /rpgskills reset zero fully resets progression and refunds reset coins."
          ]
        },
        {
          "heading": "⚠️ Important",
          "items": [
            "Creating a new character is recommended to play 1.0 properly.",
            "Old characters may not fit the current progression, because the system changed a lot.",
            "A new character avoids strange progress, misplaced points and old bonuses mixed in.",
            "Start in a new world if you want to feel the progression from zero.",
            "1.0 is the official starting point, made to be clean, balanced and grow from the start."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  }
];
