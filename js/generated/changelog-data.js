/* Gerado por tools/build.py a partir de release-notes/*.md. Não edite à mão. */
window.RPG_CHANGELOG = [
  {
    "version": "4.2",
    "tag": "new",
    "tagClass": "major",
    "tagKey": "changelog.tag.new",
    "pt": {
      "title": "🌟 Atualização 4.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ Novidades",
          "items": [
            "<strong>Mestre do Loot reformulado:</strong> o loot agora vem no máximo em dobro (2x), em vez de chegar a 5x. A chance de dobrar sobe 20% por nível: 20%, 40%, 60%, 80% e 100% no nível 5. Vale para inimigos, mineração, pesca, colheita e criação.",
            "<strong>Artesão Econômico:</strong> no nível 5 do Mestre do Loot, criar itens tem 50% de chance de não gastar os ingredientes."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "<strong>Colocar e quebrar não duplica mais:</strong> com o Mestre do Loot, alguns objetos e pisos (como o baú de madeira) voltavam multiplicados ao serem colocados e quebrados de novo. Agora o que você coloca volta sempre na mesma quantidade.",
            "<strong>Baús grandes organizam no stack do mundo:</strong> em baús com muitos slots, o botão de organizar ordenava os itens mas deixava cada pilha separada, sem juntar até o limite do stack comprado na Loja (por exemplo, 5x). Agora os itens iguais se juntam em pilhas cheias, como nos baús menores.",
            "<strong>Janela do RPG Skills abre sempre:</strong> em alguns casos, depois de um tempo de jogo, a janela não abria mais nem pelo atalho nem pelo botão, por causa de um erro ao montar a aba Loja. Agora ela abre normalmente."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "✨ What's new",
          "items": [
            "<strong>Loot Master reworked:</strong> loot now comes at most doubled (2x) instead of reaching 5x. The chance to double goes up 20% per level: 20%, 40%, 60%, 80% and 100% at level 5. It applies to enemies, mining, fishing, harvesting and crafting.",
            "<strong>Thrifty Artisan:</strong> at Loot Master level 5, crafting has a 50% chance to not use up the ingredients."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "<strong>Placing and breaking no longer duplicates:</strong> with the Loot Master, some objects and floors (like the wooden chest) came back multiplied when placed and broken again. Now whatever you place always comes back in the same amount.",
            "<strong>Large chests sort to the world stack:</strong> in chests with many slots, the sort button ordered the items but left each stack apart, without filling up to the stack limit bought in the Shop (for example, 5x). Now matching items join into full stacks, just like in smaller chests.",
            "<strong>The RPG Skills window always opens:</strong> in some cases, after a while in game, the window would no longer open from the hotkey or the button, because of an error while building the Shop tab. Now it opens normally."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "4.1",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 4.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "📦 Ícone em cima do baú",
          "items": [
            "<strong>Saiba o que tem em cada baú sem abrir:</strong> ao chegar perto, um ícone aparece em cima do baú. Na janela do baú, dois botões novos no topo, ao lado dos de organizar, escolhem o ícone e o estilo.",
            "<strong>Escolha o ícone:</strong> clique no botão segurando um item para usar aquele item. Com a mão vazia, o botão alterna entre \"automático\" (mostra o item que mais tem dentro do baú e se atualiza sozinho) e \"nenhum\".",
            "<strong>Quatro estilos, cada um com sua animação:</strong> Bolha (surge com um pulinho), Placa de madeira (presa na tampa, cresce e balança), Brasão RPG (roxo e dourado, pulsa de leve) e Só o ícone (o item flutua sozinho, sem fundo nem sombra). Cada baú escolhe o seu.",
            "<strong>Baús lado a lado:</strong> cada ícone cabe na largura do próprio baú, então baús vizinhos não cobrem o ícone um do outro.",
            "<strong>Para todo mundo:</strong> o ícone fica salvo no baú e todos os jogadores do mundo veem. Quem já usava os rótulos de baú do Safe Haven ganha os mesmos ícones aqui automaticamente, e o rótulo do Safe Haven fica desligado para não aparecerem dois."
          ]
        },
        {
          "heading": "📊 Painel de XP novo",
          "items": [
            "<strong>Barra de verdade:</strong> o painel acima do inventário agora tem um selo com o seu nível e uma barra que enche com o XP, com os números e a porcentagem dentro dela.",
            "<strong>Bônus de XP à vista:</strong> com o bônus de XP comprado na Loja, aparece ao lado da barra o multiplicador e o tempo que falta."
          ]
        },
        {
          "heading": "📜 Aba Status reorganizada",
          "items": [
            "<strong>Ficha do personagem no topo:</strong> nível, barra de XP e pontos para gastar num cartão só.",
            "<strong>Selos do que está ativo:</strong> bônus de XP, XP em equipe, qualidade da vila e lacaios em campo aparecem em selos coloridos logo abaixo. O tempo do bônus de XP conta sozinho com a janela aberta e o selo aparece assim que você compra.",
            "<strong>Bônus separados por tipo:</strong> em vez de uma lista enorme, os bônus aparecem em cartões: Combate, Sobrevivência, Efeitos nos inimigos, Movimento, Misticismo e invocações, Coleta e utilidades.",
            "<strong>Habilidades e o seu mundo:</strong> embaixo, as habilidades e passivas que você já tem e um resumo do que o mundo comprou na Loja (stack, slots dos baús e alcance das estações)."
          ]
        },
        {
          "heading": "🗺️ Mais mapa descoberto",
          "items": [
            "<strong>Mestre das Cavernas:</strong> além da descoberta maior que já dava, agora cada ponto na classe revela mais 6 blocos do mapa em volta nas cavernas (até 85 blocos com a classe completa).",
            "<strong>Mestre da Construção:</strong> o bônus \"Biomas visíveis no mapa\" agora também revela mais mapa na superfície: 6 blocos a mais por ponto na classe."
          ]
        },
        {
          "heading": "🔨 Alcance das estações na Loja",
          "items": [
            "<strong>Baús mais longe:</strong> a Loja ganhou o cartão \"Alcance das Estações\". Com \"usar armazenamento próximo\" ligado, as estações de criação e a de melhoria passam a usar baús mais distantes. O jogo usa 15 blocos; cada compra soma 5 blocos, até 50.",
            "<strong>Vale para o mundo todo:</strong> a compra é do mundo, para todos os jogadores, e fica salva nele. O primeiro nível custa 2.000 moedas e cada um seguinte custa 2.000 a mais.",
            "<strong>Sempre certo no multijogador:</strong> quem entra num servidor só usa o alcance comprado depois de receber o valor do servidor, então a estação nunca mostra uma receita que não daria para criar.",
            "<strong>Do seu jeito:</strong> custo, blocos por compra e alcance máximo (até 100) podem ser mudados no painel de configuração. Administradores podem voltar o alcance ao do jogo; as moedas não são devolvidas."
          ]
        },
        {
          "heading": "⚖️ Preços da Loja mais justos",
          "items": [
            "<strong>Bônus de XP:</strong> o preço agora sobe devagar com o seu nível e tem limite. Antes, no nível 100 o bônus de 10x custava 1 milhão de moedas; agora o 2x vai de 1.300 a no máximo 50.000 moedas, o 5x custa 2,5 vezes isso e o 10x, 5 vezes.",
            "<strong>Minerador Explosivo:</strong> continua custando 100.000 moedas, mas pede bem menos material: 250 barras de cobre, de ferro e de ouro (antes 1.000) e 200 bastões de dinamite (antes 1.000).",
            "<strong>Slots de baú:</strong> cada nível agora encarece 2.500 moedas em vez de 5.000, então os últimos níveis ficam bem mais acessíveis. Quem nunca mexeu nesse valor na configuração recebe o novo automaticamente."
          ]
        },
        {
          "heading": "🧰 Filtro do baú na lateral",
          "items": [
            "<strong>Ícones em coluna:</strong> os ícones do filtro agora ficam numa coluna vertical, colada à esquerda dos slots do baú, em vez de um bloco à direita.",
            "<strong>Subcategorias só quando precisa:</strong> ao clicar num grupo, o baú se abre para a esquerda e mostra as subcategorias numa coluna ao lado dos ícones, em vez de descer embaixo deles. Com \"Tudo\" selecionado, a coluna fecha e o baú volta ao tamanho compacto, sem espaço vazio.",
            "<strong>Nome do baú no topo:</strong> o nome do baú ganhou uma linha só para ele, acima dos botões de organizar."
          ]
        },
        {
          "heading": "🛡️ Botão novo no inventário",
          "items": [
            "<strong>Ícone próprio:</strong> o botão que abre o RPG Skills no inventário trocou a logo do mod por um ícone próprio: duas espadas cruzadas com cabos roxos e uma estrela dourada.",
            "<strong>Do tamanho dos outros:</strong> o botão agora tem o mesmo tamanho e a mesma moldura dos outros botões da barra."
          ]
        },
        {
          "heading": "🔧 Correções",
          "items": [
            "<strong>Atalho e botão voltam a abrir a janela:</strong> depois de sair de um mundo e entrar de novo, às vezes a tecla de atalho e o botão do inventário paravam de abrir a janela do RPG Skills. Agora a janela sempre abre na partida atual.",
            "<strong>Nomes da Necromancia sem letreiro:</strong> os nomes compridos de monstros no Grimório e nos slots do Ritual não ficam mais rolando aos pulos. Agora o nome fica parado: a letra diminui um pouco para caber e, se ainda for grande, ele aparece inteiro em duas linhas.",
            "<strong>Texto da configuração:</strong> a opção do Safe Haven que desliga o que as classes do RPG Skills já dão ganhou nome traduzido no painel de configuração."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "📦 Icon above the chest",
          "items": [
            "<strong>Know what is in each chest without opening it:</strong> when you get close, an icon shows up above the chest. In the chest window, two new buttons at the top, next to the sorting ones, pick the icon and the style.",
            "<strong>Pick the icon:</strong> click the button while holding an item to use that item. With an empty hand, the button switches between \"automatic\" (shows the item there is most of in the chest and updates by itself) and \"none\".",
            "<strong>Four styles, each with its own animation:</strong> Bubble (pops in with a little bounce), Wooden sign (sits on the lid, grows and sways), RPG crest (purple and gold, gently pulses) and Icon only (the item floats by itself, with no background or shadow). Each chest picks its own.",
            "<strong>Chests side by side:</strong> each icon fits within its own chest's width, so neighboring chests don't cover each other's icon.",
            "<strong>For everyone:</strong> the icon is saved in the chest and every player in the world sees it. If you already used Safe Haven's chest labels, you get the same icons here automatically, and Safe Haven's label is turned off so you don't see two."
          ]
        },
        {
          "heading": "📊 New XP panel",
          "items": [
            "<strong>A real bar:</strong> the panel above the inventory now has a badge with your level and a bar that fills with your XP, with the numbers and the percentage inside it.",
            "<strong>XP bonus in sight:</strong> with the XP bonus bought in the Shop, the multiplier and the time left show up next to the bar."
          ]
        },
        {
          "heading": "📜 Reorganized Status tab",
          "items": [
            "<strong>Character sheet on top:</strong> level, XP bar and points to spend in a single card.",
            "<strong>Badges for what is active:</strong> XP bonus, team XP, settlement quality and minions in the field show up in colored badges right below. The XP bonus time counts down by itself while the window is open, and the badge shows up as soon as you buy it.",
            "<strong>Bonuses split by type:</strong> instead of one huge list, bonuses show up in cards: Combat, Survival, Effects on enemies, Movement, Mysticism and summons, Gathering and utility.",
            "<strong>Abilities and your world:</strong> at the bottom, the abilities and passives you already have and a summary of what the world bought in the Shop (stack, chest slots and station range)."
          ]
        },
        {
          "heading": "🗺️ More of the map revealed",
          "items": [
            "<strong>Cavern Master:</strong> on top of the bigger discovery it already gave, each point in the class now reveals 6 more tiles of the map around you in caves (up to 85 tiles with the class complete).",
            "<strong>Construction Master:</strong> the \"Biome map vision\" bonus now also reveals more of the map on the surface: 6 more tiles per point in the class."
          ]
        },
        {
          "heading": "🔨 Station range in the Shop",
          "items": [
            "<strong>Chests farther away:</strong> the Shop has a new \"Crafting Station Range\" card. With \"use nearby storage\" on, crafting stations and the upgrade station use chests farther away. The game uses 15 tiles; each purchase adds 5 tiles, up to 50.",
            "<strong>For the whole world:</strong> the purchase belongs to the world, for every player, and is saved with it. The first level costs 2,000 coins and each next one costs 2,000 more.",
            "<strong>Always right in multiplayer:</strong> when you join a server, the bought range only kicks in after the server sends it, so a station never shows a recipe you could not craft.",
            "<strong>Your way:</strong> cost, tiles per purchase and maximum range (up to 100) can be changed in the config panel. Administrators can put the range back to the game's; coins are not refunded."
          ]
        },
        {
          "heading": "⚖️ Fairer Shop prices",
          "items": [
            "<strong>XP Bonus:</strong> the price now grows slowly with your level and has a cap. Before, the 10x bonus cost 1 million coins at level 100; now the 2x goes from 1,300 to at most 50,000 coins, the 5x costs 2.5 times that and the 10x costs 5 times that.",
            "<strong>Explosive Miner:</strong> still costs 100,000 coins, but asks for far fewer materials: 250 copper, iron and gold bars (was 1,000) and 200 Dynamite Sticks (was 1,000).",
            "<strong>Chest slots:</strong> each level now gets 2,500 coins more expensive instead of 5,000, so the last levels are much more affordable. If you never changed this value in the config, you get the new one automatically."
          ]
        },
        {
          "heading": "🧰 Chest filter on the side",
          "items": [
            "<strong>Icons in a column:</strong> the filter icons now sit in a vertical column right to the left of the chest slots, instead of a block on the right.",
            "<strong>Subcategories only when needed:</strong> clicking a group widens the chest to the left and shows its subcategories in a column next to the icons, instead of below them. With \"All items\" selected, the column closes and the chest goes back to its compact size, with no empty space.",
            "<strong>Chest name on top:</strong> the chest name now has its own line, above the sorting buttons."
          ]
        },
        {
          "heading": "🛡️ New inventory button",
          "items": [
            "<strong>Its own icon:</strong> the inventory button that opens RPG Skills swapped the mod logo for its own icon: two crossed swords with purple hilts and a golden star.",
            "<strong>Same size as the others:</strong> the button now has the same size and frame as the other buttons on the bar."
          ]
        },
        {
          "heading": "🔧 Fixes",
          "items": [
            "<strong>Shortcut and button open the window again:</strong> after leaving a world and joining again, the shortcut key and the inventory button sometimes stopped opening the RPG Skills window. Now the window always opens in the current game.",
            "<strong>Necromancy names without the ticker:</strong> long monster names in the Grimoire and the Ritual slots no longer jump around while scrolling. The name now stays still: the letters get a bit smaller to fit and, if it is still too long, it shows in full on two lines.",
            "<strong>Config text:</strong> the Safe Haven option that turns off what RPG Skills classes already give now has a translated name in the config panel."
          ]
        }
      ],
      "note": "<strong>Have fun! 🎮</strong>"
    }
  },
  {
    "version": "4.0",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 4.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "📌 Seus pontos ficam nas atualizações",
          "items": [
            "<strong>Sem reset de classes:</strong> atualizar o RPG Skills não zera mais os pontos de classe. Nesta e nas próximas versões, pontos gastos, nível, XP e compras da Loja continuam como estavam, sem precisar distribuir de novo.",
            "<strong>Opção removida:</strong> a opção \"Respec de classes nas atualizações\" saiu da configuração."
          ]
        },
        {
          "heading": "🧰 Filtro do baú novo",
          "items": [
            "<strong>Mesmas categorias dos colonos:</strong> o filtro dos baús com slots extras agora usa as categorias do próprio jogo, as mesmas do filtro de armazenamento dos colonos. Primeiro você escolhe o grupo (Equipamento, Materiais, Consumíveis, Objetos, Pisos...) e depois desce nas subcategorias, por exemplo Equipamento, Armas e Armas corpo a corpo.",
            "<strong>Ícones novos:</strong> cada grupo ganhou um ícone colorido próprio, fácil de reconhecer de relance.",
            "<strong>Botão Voltar:</strong> nas subcategorias, um botão leva de volta para a categoria de cima."
          ]
        },
        {
          "heading": "🛒 Loja nova",
          "items": [
            "<strong>Cartões:</strong> a aba Loja foi refeita em cartões separados (Bônus de XP, Stack do mundo, Slots de Baús e Minerador Explosivo), cada um com ícone, explicação do que a compra faz, situação atual e botões.",
            "<strong>Custos com ícones:</strong> o preço aparece com os ícones dos itens do próprio jogo (moedas, barras e dinamite) e o valor ao lado. Passe o mouse no ícone para ver o nome do item.",
            "<strong>Stack do mundo explicado:</strong> o cartão explica que a compra aumenta quantos itens cabem em cada slot neste mundo, para todos os jogadores (em 2x, um slot de 100 itens passa a guardar 200).",
            "<strong>Slots de Baús explicado:</strong> o cartão diz que a compra adiciona slots aos baús do mundo para todos e quantos slots cada compra dá.",
            "<strong>Expansão da vila:</strong> cartão novo que expande a vila onde você está, sem precisar abrir a bandeira. Mostra o tamanho atual, o próximo e o custo com os ícones dos itens. Só o dono da vila pode expandir. O cartão se atualiza sozinho quando você entra ou sai de uma vila com a Loja aberta.",
            "<strong>Vilas maiores que o limite do jogo:</strong> depois dos 7 níveis do jogo vêm mais 49, até 1.840x1.840 tiles. Cada nível extra pede moedas e um conjunto de materiais de fim de jogo que vai mudando (barras, gemas e essências), com valores que sobem a cada nível. Esses níveis também aparecem na bandeira da vila. Vilas muito grandes deixam o mundo mais pesado.",
            "<strong>Ícone do Bônus de XP:</strong> o buff de XP ganhou um ícone próprio, um orbe verde com seta para cima."
          ]
        },
        {
          "heading": "💀 Aliados da Necromancia com contorno",
          "items": [
            "<strong>Contorno roxo:</strong> os aliados invocados pelo ritual ganharam um contorno roxo brilhante, fácil de diferenciar dos inimigos no meio da luta.",
            "<strong>Contorno dourado:</strong> os aliados do Exército dos Mortos (a chance de 50% no nível 5, que viram aliados por 1 minuto) têm contorno dourado, para você saber quais vão sumir."
          ]
        },
        {
          "heading": "🧪 Espera da poção de vida",
          "items": [
            "<strong>Sem espera por padrão:</strong> dá para beber uma poção de vida atrás da outra, você e os colonos (a \"Fadiga de poção de vida\" do jogo não é mais aplicada).",
            "<strong>Configurável:</strong> na aba Funcionalidades da configuração, seção Poções, dá para mudar a espera do jogador e a dos colonos. -1 volta ao valor do jogo (30 segundos) e qualquer outro número vira a espera em segundos.",
            "<strong>Em servidor:</strong> vale a configuração do servidor para todos os jogadores."
          ]
        },
        {
          "heading": "⚡ Desempenho",
          "items": [
            "<strong>Inventário e baús mais leves:</strong> mexer em itens, juntar pilhas e abrir baús ficou mais rápido, principalmente com muitos itens.",
            "<strong>Colônias grandes:</strong> os colonos pesam menos no servidor.",
            "<strong>Máquinas, plantações e armadilhas:</strong> os bônus de Mestre das Máquinas, Mestre da Natureza e Mestre das Armadilhas custam menos para o jogo, mesmo em vilas muito grandes.",
            "<strong>Aliados da Necromancia:</strong> os aliados do ritual pesam menos enquanto andam.",
            "<strong>Janela do RPG Skills em combate:</strong> com a aba Necromancia aberta durante uma luta, a janela atualiza só o que mudou, sem refazer tudo várias vezes por segundo.",
            "<strong>Barra de XP:</strong> a barra de XP na tela pesa menos a cada quadro.",
            "<strong>Combate mais leve:</strong> jogadores e monstros com buffs (velocidade, dano, defesa) pesam menos para o jogo.",
            "<strong>Servidor com muitos jogadores:</strong> o RPG Skills pesa menos no servidor para cada jogador conectado."
          ]
        },
        {
          "heading": "🛠️ Correções",
          "items": [
            "<strong>Troca de idioma:</strong> ao trocar o idioma do jogo, a aba Necromancia, os nomes dos monstros no Grimório e o painel Ritual mudam de idioma na hora. Antes, alguns textos ficavam no idioma antigo até reiniciar.",
            "<strong>Configuração que não salvava:</strong> depois de jogar num mundo e voltar ao menu, parte do que você mudava na configuração do RPG Skills voltava ao valor antigo ao reiniciar o jogo. Agora tudo que é salvo fica salvo.",
            "<strong>Nomes longos na Necromancia:</strong> nomes de monstro que não cabem no card ou no slot do Ritual andam como letreiro, em vez de ficarem cortados ou por cima da linha de baixo.",
            "<strong>Textos da configuração:</strong> símbolos que apareciam como \"?\" (como a seta do Sono Acelerado e o traço de \"0-255\") foram trocados em todos os idiomas, e alguns textos foram corrigidos.",
            "<strong>Mensagens no seu idioma:</strong> em servidor, os avisos do RPG Skills no chat (loja, mineração, reset, Necromancia) chegam no idioma do seu jogo, não no do servidor. Avisos da Necromancia que não apareciam no chat agora aparecem.",
            "<strong>Config do servidor:</strong> ao entrar num servidor, o RPG Skills usa as regras dele (XP, classes, custos da loja, opções ligadas). Seu arquivo de configuração não muda, e ao sair tudo volta a ser como no seu jogo. Fogos de nível, botão do inventário e linha de status continuam do seu jeito.",
            "<strong>Mestre da Alquimia e poções de vida:</strong> o bônus de duração de poções esticava a fadiga das poções de vida e de mana, fazendo o alquimista esperar mais para beber outra. Agora ele só vale para os efeitos bons das poções.",
            "<strong>Poções da Alquimia:</strong> o bônus de duração vale só para quem bebeu. Antes, a duração extra podia passar para a mesma poção de outros jogadores.",
            "<strong>Pesca e colheita mais seguras:</strong> se um bônus do RPG Skills der errado, a pesca e a colheita continuam funcionando normalmente.",
            "<strong>Trocar de mundo:</strong> aliados da Necromancia e o modo desenvolvedor não passam mais de um mundo para o outro.",
            "<strong>Safe Haven 5.0:</strong> o RPG Skills encontra o arquivo de configuração do Safe Haven na pasta nova dele e leva junto as suas opções do local antigo.",
            "<strong>Arquivos de configuração:</strong> se o jogo fechar no meio da gravação, a configuração anterior fica inteira em vez de corrompida."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 4.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "📌 Your points stay across updates",
          "items": [
            "<strong>No class reset:</strong> updating RPG Skills no longer resets your class points. In this and future versions, spent points, level, XP and Shop purchases stay as they were, with no need to spend them again.",
            "<strong>Option removed:</strong> the \"Class respec on updates\" option was removed from the config."
          ]
        },
        {
          "heading": "🧰 New chest filter",
          "items": [
            "<strong>Same categories as settlers:</strong> the filter for chests with extra slots now uses the game's own categories, the same ones as the settlers' storage filter. First you pick a group (Equipment, Materials, Consumable, Objects, Tiles...) and then go down into its subcategories, for example Equipment, Weapons and Melee weapons.",
            "<strong>New icons:</strong> each group has its own colored icon, easy to recognize at a glance.",
            "<strong>Back button:</strong> inside subcategories, a button takes you back to the category above."
          ]
        },
        {
          "heading": "🛒 New shop",
          "items": [
            "<strong>Cards:</strong> the Shop tab was rebuilt as separate cards (XP bonus, World stack, Chest slots and Explosive Miner), each with an icon, an explanation of what the purchase does, the current state and its buttons.",
            "<strong>Costs with icons:</strong> prices show the game's own item icons (coins, bars and dynamite) with the amount next to them. Hover over an icon to see the item name.",
            "<strong>World stack explained:</strong> the card explains that the purchase raises how many items fit in each slot in this world, for every player (at 2x, a 100-item slot holds 200).",
            "<strong>Chest slots explained:</strong> the card says the purchase adds slots to the world's chests for everyone and how many slots each purchase gives.",
            "<strong>Settlement expansion:</strong> a new card that expands the settlement you are standing in, without opening the flag. It shows the current size, the next one and the cost with item icons. Only the settlement owner can expand it. The card updates by itself when you walk into or out of a settlement with the Shop open.",
            "<strong>Settlements bigger than the game limit:</strong> after the game's 7 levels come 49 more, up to 1,840x1,840 tiles. Each extra level asks for coins and a rotating set of late-game materials (bars, gems and essences), with amounts that grow every level. These levels also show up on the settlement flag. Very large settlements make the world heavier to run.",
            "<strong>XP bonus icon:</strong> the XP buff has its own icon, a green orb with an up arrow."
          ]
        },
        {
          "heading": "💀 Outlined Necromancy allies",
          "items": [
            "<strong>Purple outline:</strong> allies summoned by the ritual now have a glowing purple outline, easy to tell apart from enemies in the middle of a fight.",
            "<strong>Gold outline:</strong> Army of the Dead allies (the 50% chance at level 5 that turns enemies into allies for 1 minute) have a gold outline, so you know which ones will disappear."
          ]
        },
        {
          "heading": "🧪 Health potion wait",
          "items": [
            "<strong>No wait by default:</strong> you and your settlers can drink health potions back to back (the game's \"Health potion fatigue\" is no longer applied).",
            "<strong>Configurable:</strong> in the config's Features tab, Potions section, you can change the wait for the player and for settlers. -1 goes back to the game value (30 seconds) and any other number becomes the wait in seconds.",
            "<strong>On a server:</strong> the server's config applies to every player."
          ]
        },
        {
          "heading": "⚡ Performance",
          "items": [
            "<strong>Lighter inventory and chests:</strong> moving items, merging stacks and opening chests is faster, especially with many items.",
            "<strong>Large colonies:</strong> settlers weigh less on the server.",
            "<strong>Machines, crops and traps:</strong> the Machine Master, Nature Master and Trap Master bonuses cost the game less, even in very large settlements.",
            "<strong>Necromancy allies:</strong> ritual allies weigh less while moving.",
            "<strong>RPG Skills window in combat:</strong> with the Necromancy tab open during a fight, the window only updates what changed instead of rebuilding everything several times per second.",
            "<strong>XP bar:</strong> the on-screen XP bar costs less every frame.",
            "<strong>Lighter combat:</strong> players and monsters with buffs (speed, damage, defense) cost the game less.",
            "<strong>Servers with many players:</strong> RPG Skills weighs less on the server for each connected player."
          ]
        },
        {
          "heading": "🛠️ Fixes",
          "items": [
            "<strong>Language change:</strong> when you change the game language, the Necromancy tab, the monster names in the Grimoire and the Ritual panel switch language right away. Before, some texts stayed in the old language until a restart.",
            "<strong>Config that did not save:</strong> after playing a world and going back to the menu, some of what you changed in the RPG Skills config went back to the old value when restarting the game. Now everything you save stays saved.",
            "<strong>Long names in Necromancy:</strong> monster names that do not fit on the card or in a Ritual slot scroll like a marquee instead of being cut or overlapping the line below.",
            "<strong>Config texts:</strong> symbols that showed up as \"?\" (like the Accelerated Sleep arrow and the dash in \"0-255\") were replaced in every language, and some texts were fixed.",
            "<strong>Messages in your language:</strong> on a server, RPG Skills chat notices (shop, mining, reset, Necromancy) arrive in your game's language, not the server's. Necromancy notices that did not show up in chat now do.",
            "<strong>Server config:</strong> when you join a server, RPG Skills uses its rules (XP, classes, shop costs, enabled options). Your config file does not change, and when you leave everything goes back to your own settings. Level-up fireworks, the inventory button and the status line stay the way you set them.",
            "<strong>Alchemy Master and health potions:</strong> the potion duration bonus stretched health and mana potion fatigue, making alchemists wait longer to drink another one. Now it only applies to the good potion effects.",
            "<strong>Alchemy potions:</strong> the duration bonus only applies to whoever drank it. Before, the extra duration could carry over to the same potion for other players.",
            "<strong>Safer fishing and harvesting:</strong> if an RPG Skills bonus goes wrong, fishing and harvesting keep working normally.",
            "<strong>Switching worlds:</strong> Necromancy allies and developer mode no longer carry over from one world to another.",
            "<strong>Safe Haven 5.0:</strong> RPG Skills finds Safe Haven's config file in its new folder and brings your options over from the old location.",
            "<strong>Config files:</strong> if the game closes in the middle of saving, the previous config stays intact instead of corrupted."
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
          "heading": "🔒 Multiplayer mais seguro",
          "items": [
            "<strong>Comandos de admin só para administradores:</strong> em mundo hospedado (aberto para amigos), qualquer jogador conectado conseguia usar os comandos de admin do mod. Agora só o dono do mundo e os admins do servidor conseguem. Em singleplayer nada muda.",
            "<strong>Restaurar inventário só para administradores:</strong> o <em>/rpgskills restore inventory</em> podia ser usado para duplicar itens. Ver a lista de backups continua liberado para todos.",
            "<strong>Reset de slots de baú e de stack só para administradores:</strong> o reset vale para o mundo inteiro, então agora exige admin, mesmo com a loja liberada para todos.",
            "<strong>Sem respec de graça:</strong> não dá mais para tirar pontos de classe sem pagar o respec.",
            "<strong>Servidor mais protegido:</strong> um jogador mal-intencionado não consegue mais travar o servidor."
          ]
        },
        {
          "heading": "🛠️ Correções",
          "items": [
            "<strong>Ruína Sombria sem pisca-pisca (Mestre das Cavernas):</strong> a luz extra do Cinto Brilhante e do Fogo-Fátuo agora fica estável. Antes ela piscava várias vezes por segundo.",
            "<strong>Hemorragia Congelada:</strong> a fusão agora dá o bônus de dano que prometia.",
            "<strong>Bônus de loot na colheita:</strong> o bônus de loot ao colher frutas e sementes agora funciona.",
            "<strong>Desconto de expedição (Mestre dos Reinos):</strong> o desconto da loja do assentamento agora vale também para as expedições.",
            "<strong>Necromancia em servidor dedicado:</strong> a aba Necromancia e a barra Ritual agora mostram seus dados corretamente em servidor dedicado.",
            "<strong>Progresso de quem hospeda:</strong> em singleplayer e para quem hospeda o mundo, o XP e o nível não voltam mais para um valor antigo.",
            "<strong>Restaurar inventário com 1 backup:</strong> com só 1 backup configurado, o restore falhava e perdia esse backup.",
            "<strong>Slots de baú comprados:</strong> se o limite de slots for reduzido na configuração, os slots que você comprou não se perdem mais. Eles voltam quando o limite sobe de novo.",
            "<strong>Compras na loja:</strong> moedas e barras agora são cobradas do inventário do mesmo jeito que a loja do jogo cobra. Se algo der errado no meio da compra, você recebe tudo de volta, e o que não couber no inventário cai no chão.",
            "<strong>Buff de XP:</strong> os multiplicadores à venda agora seguem a configuração do servidor (antes eram sempre 2x, 5x e 10x).",
            "<strong>Sobrevivência Fatal e Espinhos:</strong> agora funcionam de forma consistente em multiplayer.",
            "<strong>Safe Haven QOL:</strong> com a regra \"1 perda por ciclo de estrago\" do RPG Skills ligada, a opção igual do Safe Haven é desligada, para as duas não valerem ao mesmo tempo."
          ]
        },
        {
          "heading": "🌍 Traduções",
          "items": [
            "Os textos de desbloqueio de algumas classes que apareciam em inglês agora estão traduzidos em alemão, espanhol, francês, italiano, japonês, holandês, polonês, russo e chinês."
          ]
        },
        {
          "heading": "⚠️ Importante",
          "items": [
            "Em multiplayer, o servidor e todos os jogadores precisam estar na versão 3.9."
          ]
        }
      ],
      "note": "<strong>Bom jogo! 🎮</strong>"
    },
    "en": {
      "title": "🌟 Update 3.9 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🔒 Safer multiplayer",
          "items": [
            "<strong>Admin commands for admins only:</strong> in a hosted world (open to friends), any connected player could use the mod's admin commands. Now only the world owner and server admins can. Nothing changes in singleplayer.",
            "<strong>Inventory restore for admins only:</strong> <em>/rpgskills restore inventory</em> could be used to duplicate items. Viewing the backup list is still open to everyone.",
            "<strong>Chest slot and stack reset for admins only:</strong> the reset applies to the whole world, so it now requires admin, even when the shop is open to everyone.",
            "<strong>No free respec:</strong> class points can no longer be removed without paying for the respec.",
            "<strong>Better protected server:</strong> a malicious player can no longer freeze the server."
          ]
        },
        {
          "heading": "🛠️ Fixes",
          "items": [
            "<strong>Dark Ruin no longer flickers (Cavern Master):</strong> the extra light from the Shine Belt and the Will-o'-Wisp is now steady. It used to flicker several times per second.",
            "<strong>Frozen Hemorrhage:</strong> the fusion now grants the damage bonus it promised.",
            "<strong>Harvest loot bonus:</strong> the loot bonus when harvesting fruit and seeds now works.",
            "<strong>Expedition discount (Realm Master):</strong> the settlement shop discount now also applies to expeditions.",
            "<strong>Necromancy on dedicated servers:</strong> the Necromancy tab and the Ritual bar now show your data correctly on dedicated servers.",
            "<strong>Host progress:</strong> in singleplayer and for whoever hosts the world, XP and level no longer jump back to an old value.",
            "<strong>Inventory restore with 1 backup:</strong> with only 1 backup configured, restore failed and lost that backup.",
            "<strong>Bought chest slots:</strong> if the slot limit is lowered in the config, the slots you bought are no longer lost. They come back when the limit is raised again.",
            "<strong>Shop purchases:</strong> coins and bars are now charged from your inventory the same way the game's shop does it. If something goes wrong in the middle of a purchase, you get everything back, and whatever does not fit in your inventory drops on the ground.",
            "<strong>XP buff:</strong> the multipliers for sale now follow the server's config (they used to always be 2x, 5x and 10x).",
            "<strong>Fatal Survival and Thorns:</strong> now work consistently in multiplayer.",
            "<strong>Safe Haven QOL:</strong> with RPG Skills' \"one loss per spoil cycle\" rule on, Safe Haven's matching option is turned off so both do not apply at the same time."
          ]
        },
        {
          "heading": "🌍 Translations",
          "items": [
            "Unlock texts for some classes that showed up in English are now translated into German, Spanish, French, Italian, Japanese, Dutch, Polish, Russian and Chinese."
          ]
        },
        {
          "heading": "⚠️ Important",
          "items": [
            "In multiplayer, the server and every player must be on version 3.9."
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
          "heading": "🛠️ Correções",
          "items": [
            "<strong>Escriba Imortal (Mestre Arcano) com o Safe Haven QOL:</strong> a passiva agora também funciona com o Safe Haven: o pergaminho de encantamento não é mais consumido. Com o Safe Haven, o pergaminho abre a janela de encantamento múltiplo do Safe Haven, que gastava o pergaminho por conta própria e ignorava a passiva."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 3.8 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "🛠️ Fixes",
          "items": [
            "<strong>Immortal Scribe (Arcane Master) with Safe Haven QOL:</strong> the passive now also works with Safe Haven: the enchant scroll is no longer consumed. With Safe Haven, the scroll opens Safe Haven's multi-enchant window, which spent the scroll on its own and ignored the passive."
          ]
        }
      ],
      "note": ""
    }
  },
  {
    "version": "3.7",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 3.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "💀 Mestre da Necromancia: o que cada nível libera",
          "items": [
            "<strong>Nível 1 - Despertar:</strong> 1 slot de ritual e os monstros comuns. Seus lacaios sobem de nível até o 100.",
            "<strong>Nível 2 - Legião:</strong> 2º slot de ritual, monstros <strong>elite</strong> e +25% de XP para os lacaios.",
            "<strong>Nível 3 - Elo Sombrio:</strong> 3º slot de ritual. Os lacaios recebem metade do seu bônus de dano de invocação. <strong>Bônus de grupo:</strong> 3 lacaios do mesmo monstro causam +50% de dano contra aquele monstro.",
            "<strong>Nível 4 - Soberano dos Chefes:</strong> invoque <strong>1 chefe</strong> que você já derrotou como lacaio, com 40% do poder dele.",
            "<strong>Nível 5 - Exército dos Mortos:</strong> cada inimigo que você ou seus lacaios derrotam tem 50% de chance de se levantar como servo por 1 minuto (até 3 ao mesmo tempo). Lacaios com Maestria recebem a <strong>Ascensão</strong>: +25% de dano."
          ]
        },
        {
          "heading": "⚔️ Lacaios sobem de nível (1 a 100)",
          "items": [
            "Para poder invocar um monstro é preciso derrotá-lo muitas vezes: <strong>300 vitórias</strong> para monstros comuns, <strong>150</strong> para elites e <strong>50</strong> para chefes. O card no Grimório mostra o progresso (ex.: 120/300) e o chat avisa quando ele é liberado.",
            "O lacaio que derrota um inimigo ganha o XP inteiro. Os outros lacaios chamados ganham metade, inclusive quando quem derrota é você. Inimigos mais fortes dão mais XP.",
            "Cada nível dá <strong>+1,5% de dano</strong> (+148,5% no nível 100).",
            "O chat avisa a cada 10 níveis, e o lacaio solta faíscas douradas quando sobe.",
            "Trocar ou remover um lacaio não apaga o progresso dele: quando você invoca aquele monstro de novo, ele volta com o nível que tinha."
          ]
        },
        {
          "heading": "🌀 Maestria",
          "items": [
            "No nível 100 aparece o botão <strong>Maestria</strong> no slot do lacaio. Ao aplicar, ele volta para o nível 1 e ganha <strong>+10% de dano permanente</strong>.",
            "Dá para aplicar até <strong>10 Maestrias</strong> no mesmo lacaio (+100% de dano permanente). Quanto mais Maestrias, mais forte ele fica."
          ]
        },
        {
          "heading": "🗂️ Aba Necromancia redesenhada",
          "items": [
            "Novo visual no estilo do Grimório: cabeçalho com o emblema da classe, nível (1 a 5), o poder atual e o próximo desbloqueio.",
            "Cada slot de ritual virou uma <strong>ficha do lacaio</strong>: nível e Maestria, <strong>barra de XP</strong> com quanto falta para o próximo nível, <strong>dano por golpe</strong> (já com todos os bônus), o bônus total de dano e o tipo de ataque. Botões <strong>Chamar/Guardar</strong>, <strong>Remover</strong> e <strong>Maestria</strong> no próprio slot. O slot invocado fica com moldura roxa.",
            "O Grimório mostra quantos monstros você já derrotou e, em cada card, o nível de classe exigido, as vitórias e o progresso guardado. Os textos não se sobrepõem mais.",
            "Monstros que estavam sem imagem (Escorpião Gigante, Mago Esqueleto, Bruxa Velha, Golem e Morcego Ascendidos...) agora aparecem com o desenho do próprio monstro."
          ]
        },
        {
          "heading": "⌨️ Barra Ritual (HUD) nova",
          "items": [
            "Painel com a moldura dourada do mod. Lacaio invocado: moldura roxa brilhante. Lacaio descansando: moldura dourada. Slot vazio: moldura tracejada.",
            "A tecla de cada slot aparece num selo no canto, e o nível do lacaio aparece embaixo."
          ]
        },
        {
          "heading": "🏹 Lacaios lutam como o monstro de verdade",
          "items": [
            "Cada lacaio agora usa a <strong>IA original do monstro</strong>, com os mesmos ataques, investidas, pulos, magias e habilidades que ele tem como inimigo. A diferença é que ele mira os inimigos perto de você em vez dos jogadores e, sem alvo, volta para o seu lado em vez de vagar pelo mapa.",
            "Os <strong>projéteis e magias</strong> dos lacaios são <strong>teleguiados</strong>: perseguem o inimigo mais próximo até acertar.",
            "<strong>Foco:</strong> os lacaios atacam o inimigo que você está acertando ou que está te atacando.",
            "<strong>Coleira:</strong> eles só escolhem inimigos a até 12 tiles de você e, se perseguirem algo para longe demais, largam o alvo e voltam.",
            "<strong>Destravar:</strong> lacaio preso no mesmo lugar por 10 segundos, longe de você e sem lutar, se teleporta para o seu lado com a animação do ritual."
          ]
        },
        {
          "heading": "⚙️ Painel RPG SKILLS CONFIG redesenhado",
          "items": [
            "As opções agora ficam em <strong>abas na lateral</strong> (Progressão e XP, Funcionalidades, Passivas, Classes, Economia e Loja, Qualidade de vida, Interface, Servidor e Compat.), com subtítulos dentro de cada aba. Nada de rolar uma lista gigante.",
            "Opção diferente do padrão fica <strong>dourada</strong> e ganha o botão <strong>Padrão</strong>. Passe o mouse no valor para ver o padrão e a faixa permitida.",
            "Mudança ainda não salva fica <strong>verde</strong>, a aba aberta fica amarela, a aba com mudança ganha um <strong>*</strong> e o botão mostra quantas faltam: <strong>Salvar (3)</strong>. <strong>Desfazer</strong> descarta tudo e <strong>Padrões da aba</strong> restaura a aba inteira.",
            "Abas só de liga/desliga (Passivas, Classes) têm <strong>Ligar tudo</strong> e <strong>Desligar tudo</strong>. Números com faixa grande ganham os botões <strong>--</strong> e <strong>++</strong> (passo x10).",
            "A janela pode ser <strong>arrastada pelo título</strong> e <strong>abre onde você a deixou</strong> da última vez. Na primeira vez ela abre centralizada.",
            "Fechar a janela sem salvar não perde as mudanças: elas continuam lá até você salvar ou desfazer."
          ]
        },
        {
          "heading": "🤝 Compatibilidade com o Safe Haven QOL",
          "items": [
            "Jogando com os dois mods, o RPG Skills desliga no Safe Haven só o que dá de graça o que as classes ensinam. Assim as classes continuam valendo a pena:",
            "<strong>Dano 2x de armas de fogo</strong> (Mestre Atirador) e <strong>+2 invocações</strong> (Mestre Invocador).",
            "<strong>Botão \"3x\" das máquinas</strong> (Mestre das Máquinas) e <strong>Banco de Juros</strong> (moedas de graça todo dia atrapalhavam a loja e o Mestre da Riqueza).",
            "<strong>Fênix e Golem de Cinzas com 3x de drops</strong> (Mestre do Loot).",
            "<strong>+10 de felicidade por dividir quarto</strong> e <strong>colonos já no nível 20 de qualidade de vida</strong> (Mestre dos Reinos).",
            "<strong>Abelhas fertilizando plantações</strong> (Mestre da Natureza).",
            "<strong>40 slots de acessório</strong> e <strong>acessórios repetidos somando bônus</strong> (Mestre das Relíquias).",
            "<strong>Minério sempre brilhando no escuro</strong> (Mestre das Cavernas).",
            "Continuam desligados como antes: pilhas extras, mineração em veio, incinerador instantâneo e loot triplo de animais.",
            "Todo o resto do Safe Haven continua funcionando normalmente (HUD, mapas, construção, baús, cores, plantas de construção etc.).",
            "Se o Safe Haven religar alguma dessas opções pelo menu dele durante o jogo, o RPG Skills desliga de novo em poucos segundos.",
            "Dono de servidor: quem preferir manter tudo do Safe Haven pode desligar essa trava em <strong>compat.safeHavenBalanceLock=false</strong> na config do RPG Skills."
          ]
        },
        {
          "heading": "🛠️ Correções",
          "items": [
            "<strong>Compatibilidade com o Safe Haven QOL:</strong> corrigido o travamento ao entrar no mundo (<em>NoSuchMethodError: addItemsDropRemaining</em>). O RPG Skills chamava uma versão antiga desse método do jogo, que mudou no Necesse 1.3.3, e o Safe Haven, ao ajustar os sets de equipamento, fazia o jogo passar por esse caminho.",
            "Corrigidas outras 4 chamadas antigas do mesmo tipo, que podiam travar a <strong>Fusão Elemental</strong>, a caçada dos <strong>Cavelings</strong>, a <strong>bolsa de moedas</strong> do Mestre e a recuperação de construção.",
            "Removido um gancho antigo do bônus de colheita do Mestre das Relíquias, que não fazia nada. O bônus continua funcionando normalmente.",
            "Aba Necromancia: remover, invocar ou guardar um lacaio atualiza a aba na hora (antes só mudava ao reabrir), e o XP e as vitórias também aparecem enquanto ela está aberta.",
            "Aba Necromancia: pedaços de outras telas não aparecem mais no meio da lista de monstros.",
            "O Grimório não lista mais partes de chefes, monstros sem nome ou que não podem ser invocados.",
            "Grimório revisado contra a lista de monstros do jogo. Voltaram monstros que sumiam por engano: <strong>Lançador de Limo com Pernas</strong>, <strong>Limo Fantasma</strong>, as três <strong>Bruxas Malignas</strong> (frasco, arco e espadão), o <strong>Goblin Suspeitosamente Alto</strong> e os goblins do capacete, peitoral e sapatos, e o <strong>Mímico</strong>.",
            "Saíram do Grimório os monstros que só funcionam na água ou na lava (<strong>Tubarão</strong> e <strong>Flameling</strong>) e os chefes de vários corpos que ainda apareciam (Dragão de Cristal, Sábio e Grit).",
            "O <strong>Urso-pardo</strong> invocado não fica mais dormindo: ele nasce acordado e luta como o urso de verdade.",
            "Daqui para frente, um teste automático compara o mod com o jogo instalado antes de cada versão, para pegar esse tipo de erro antes de chegar até vocês."
          ]
        },
        {
          "heading": "📈 Progressão",
          "items": [
            "Com a classe nova (34 classes × 5 pontos), o <strong>nível máximo passa de 165 para 170</strong>, para ainda ser possível completar todas as classes. Configurações que usavam o máximo antigo (165) passam para 170 automaticamente.",
            "A passiva <strong>Mestre das Classes</strong> continua exigindo todas as classes no máximo, o que agora inclui o Mestre da Necromancia."
          ]
        },
        {
          "heading": "✅ Compatibilidade",
          "items": [
            "Seus saves continuam funcionando. As vitórias da 3.6 continuam no Grimório e os lacaios nos slots são mantidos. Um monstro que tinha 500 ou mais vitórias (Tier 3 da antiga caçada) começa no <strong>nível 15</strong>.",
            "Para invocar, agora é preciso ter a classe Mestre da Necromancia. Slots acima do nível da sua classe ficam descansando, sem perder o lacaio.",
            "Tudo traduzido para os 12 idiomas do mod.",
            "Para administradores: <strong>/rpgskills necro setlevel <slot 1-3> <nível 1-100></strong> define o nível de um lacaio (útil para testes)."
          ]
        }
      ],
      "note": "<strong>Que seus lacaios cresçam fortes, necromante! 💀</strong>"
    },
    "en": {
      "title": "🌟 Update 3.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "💀 Necromancy Master: what each level unlocks",
          "items": [
            "<strong>Level 1 - Awakening:</strong> 1 ritual slot and common monsters. Your minions level up to 100.",
            "<strong>Level 2 - Legion:</strong> 2nd ritual slot, <strong>elite</strong> monsters and +25% minion XP.",
            "<strong>Level 3 - Shadow Link:</strong> 3rd ritual slot. Minions get half of your summon damage bonus. <strong>Group bonus:</strong> 3 minions of the same monster deal +50% damage against that monster.",
            "<strong>Level 4 - Lord of Bosses:</strong> summon <strong>1 boss</strong> you have defeated as a minion, with 40% of its power.",
            "<strong>Level 5 - Army of the Dead:</strong> every enemy you or your minions defeat has a 50% chance to rise as a servant for 1 minute (up to 3 at once). Minions with Mastery get <strong>Ascension</strong>: +25% damage."
          ]
        },
        {
          "heading": "⚔️ Minions level up (1 to 100)",
          "items": [
            "To summon a monster you need to defeat it many times: <strong>300 victories</strong> for common monsters, <strong>150</strong> for elites and <strong>50</strong> for bosses. The Grimoire card shows your progress (e.g. 120/300) and the chat lets you know when it unlocks.",
            "The minion that defeats an enemy gets the full XP. The other summoned minions get half, including when you are the one who defeats it. Stronger enemies give more XP.",
            "Each level gives <strong>+1.5% damage</strong> (+148.5% at level 100).",
            "The chat announces every 10 levels, and the minion gives off golden sparks when it levels up.",
            "Replacing or removing a minion does not erase its progress: when you summon that monster again, it comes back at the level it had."
          ]
        },
        {
          "heading": "🌀 Mastery",
          "items": [
            "At level 100 a <strong>Mastery</strong> button appears on the minion's slot. Applying it sends the minion back to level 1 with <strong>+10% permanent damage</strong>.",
            "You can apply up to <strong>10 Masteries</strong> to the same minion (+100% permanent damage). The more Masteries, the stronger it gets."
          ]
        },
        {
          "heading": "🗂️ Redesigned Necromancy tab",
          "items": [
            "New Grimoire-style look: a header with the class emblem, level (1 to 5), your current power and the next unlock.",
            "Each ritual slot is now a <strong>minion sheet</strong>: level and Mastery, an <strong>XP bar</strong> with how much is left to the next level, <strong>damage per hit</strong> (with every bonus applied), the total damage bonus and the attack type. <strong>Summon/Rest</strong>, <strong>Dismiss</strong> and <strong>Mastery</strong> buttons right on the slot. The summoned slot gets a purple frame.",
            "The Grimoire shows how many monsters you have defeated and, on each card, the required class level, victories and saved progress. Texts no longer overlap.",
            "Monsters that had no picture (Giant Scorpion, Skeleton Mage, Crone, Ascended Golem and Bat...) now show the monster's own sprite."
          ]
        },
        {
          "heading": "⌨️ New Ritual bar (HUD)",
          "items": [
            "A panel with the mod's golden frame. Summoned minion: glowing purple frame. Resting minion: golden frame. Empty slot: dashed frame.",
            "Each slot's key is shown on a badge in the corner, and the minion's level below it."
          ]
        },
        {
          "heading": "🏹 Minions fight like the real monster",
          "items": [
            "Every minion now uses the <strong>monster's original AI</strong>, with the same attacks, charges, jumps, spells and abilities it has as an enemy. The difference is that it targets the enemies near you instead of players and, with no target, comes back to your side instead of wandering around the map.",
            "Minion <strong>projectiles and spells</strong> are <strong>homing</strong>: they chase the nearest enemy until they hit.",
            "<strong>Focus:</strong> minions attack the enemy you are hitting or the one attacking you.",
            "<strong>Leash:</strong> they only pick enemies within 12 tiles of you and, if they chase something too far, they drop it and come back.",
            "<strong>Unstuck:</strong> a minion stuck in the same place for 10 seconds, away from you and not fighting, teleports to your side with the ritual animation."
          ]
        },
        {
          "heading": "⚙️ Redesigned RPG SKILLS CONFIG panel",
          "items": [
            "Options now live in <strong>tabs on the side</strong> (Progression & XP, Features, Passives, Classes, Economy & Shop, Quality of life, Interface, Server & Compat.), with subtitles inside each tab. No more scrolling a giant list.",
            "An option that differs from the default turns <strong>gold</strong> and gets a <strong>Default</strong> button. Hover the value to see the default and the allowed range.",
            "Unsaved changes turn <strong>green</strong>, the open tab is yellow, a tab with changes gets a <strong>*</strong> and the button shows how many are left: <strong>Save (3)</strong>. <strong>Undo</strong> drops everything and <strong>Tab defaults</strong> restores the whole tab.",
            "Toggle-only tabs (Passives, Classes) have <strong>All on</strong> and <strong>All off</strong>. Numbers with a large range get <strong>--</strong> and <strong>++</strong> buttons (x10 step).",
            "The window can be <strong>dragged by its title</strong> and <strong>opens where you left it</strong> last time. The first time it opens centered.",
            "Closing the window without saving does not lose your changes: they stay until you save or undo."
          ]
        },
        {
          "heading": "🤝 Safe Haven QOL compatibility",
          "items": [
            "When you play with both mods, RPG Skills turns off in Safe Haven only what gives away for free what the classes teach, so the classes stay worth it:",
            "<strong>2x gun damage</strong> (Marksman Master) and <strong>+2 summons</strong> (Summon Master).",
            "The machines' <strong>\"3x\" button</strong> (Machine Master) and the <strong>Interest Bank</strong> (free coins every day broke the shop and the Wealth Master).",
            "<strong>Phoenix and Ash Golem 3x drops</strong> (Loot Master).",
            "<strong>+10 happiness for sharing a room</strong> and <strong>settlers starting at quality of life 20</strong> (Realm Master).",
            "<strong>Bees fertilizing crops</strong> (Nature Master).",
            "<strong>40 trinket slots</strong> and <strong>repeated trinkets stacking their bonus</strong> (Relic Master).",
            "<strong>Ore always glowing in the dark</strong> (Cavern Master).",
            "Still off as before: extra stack sizes, vein mining, instant incinerator and triple animal loot.",
            "Everything else in Safe Haven keeps working normally (HUD, maps, building, chests, colors, blueprints and more).",
            "If Safe Haven turns one of these back on from its own menu during the game, RPG Skills turns it off again within a few seconds.",
            "Server owners: if you prefer to keep every Safe Haven feature, set <strong>compat.safeHavenBalanceLock=false</strong> in the RPG Skills config."
          ]
        },
        {
          "heading": "🛠️ Fixes",
          "items": [
            "<strong>Safe Haven QOL compatibility:</strong> fixed the crash when joining a world (<em>NoSuchMethodError: addItemsDropRemaining</em>). RPG Skills called an old version of this game method, which changed in Necesse 1.3.3, and Safe Haven, by adjusting equipment sets, made the game go through that path.",
            "Fixed 4 more old calls of the same kind that could crash <strong>Elemental Fusion</strong>, the <strong>Caveling</strong> hunt, the Master's <strong>coin pouch</strong> and construction recovery.",
            "Removed an old hook for the Relic Master's harvest bonus that did nothing. The bonus keeps working normally.",
            "Necromancy tab: dismissing, summoning or resting a minion updates the tab right away (before it only changed after reopening), and XP and victories also update while it is open.",
            "Necromancy tab: pieces of other screens no longer show up in the middle of the monster list.",
            "The Grimoire no longer lists boss parts, nameless monsters or monsters that cannot be summoned.",
            "The Grimoire was checked against the game's monster list. Monsters that were hidden by mistake are back: <strong>Legged Slime Thrower</strong>, <strong>Ghost Slime</strong>, the three <strong>Evil Witches</strong> (flask, bow and greatsword), the <strong>Suspiciously Tall Goblin</strong> and the Helmet, Chestplate and Shoes Goblins, and the <strong>Mimic</strong>.",
            "Monsters that only work in water or lava (<strong>Shark</strong> and <strong>Flameling</strong>) and multi-body bosses that still showed up (Crystal Dragon, Sage and Grit) were removed from the Grimoire.",
            "A summoned <strong>Grizzly Bear</strong> no longer stays asleep: it spawns awake and fights like the real bear.",
            "From now on, an automatic test checks the mod against the installed game before every version, to catch this kind of error before it reaches you."
          ]
        },
        {
          "heading": "📈 Progression",
          "items": [
            "With the new class (34 classes × 5 points), the <strong>max level goes from 165 to 170</strong>, so it is still possible to complete every class. Configs that used the old max (165) move to 170 automatically.",
            "The <strong>Master of Classes</strong> passive still requires every class maxed, which now includes the Necromancy Master."
          ]
        },
        {
          "heading": "✅ Compatibility",
          "items": [
            "Your saves keep working. Victories from 3.6 stay in the Grimoire and minions in the slots are kept. A monster that had 500 or more victories (Tier 3 of the old hunt) starts at <strong>level 15</strong>.",
            "Summoning now requires the Necromancy Master class. Slots above your class level rest without losing the minion.",
            "Everything translated into the mod's 12 languages.",
            "For admins: <strong>/rpgskills necro setlevel <slot 1-3> <level 1-100></strong> sets a minion's level (useful for testing)."
          ]
        }
      ],
      "note": "<strong>May your minions grow strong, necromancer! 💀</strong>"
    }
  },
  {
    "version": "3.6",
    "tag": "update",
    "tagClass": "minor",
    "tagKey": "changelog.tag.update",
    "pt": {
      "title": "🌟 Atualização 3.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "💀 Necromancia: como funciona",
          "items": [
            "<strong>1. Cace monstros.</strong> Cada monstro que você derrota conta uma vitória para aquele tipo de monstro. Vale para tudo que tenta te matar: monstros comuns de cada bioma, elites e chefes.",
            "<strong>2. Suba de nível na caçada.</strong> Com vitórias suficientes, o monstro sobe de <strong>Tier</strong> (de 0/3 até 3/3). Cada Tier libera <strong>1 aliado</strong> daquele monstro.",
            "<strong>3. Invoque seu aliado.</strong> Abra o Grimório, vá na aba <strong>Necromancia</strong> e clique em <strong>Invocar</strong> no monstro que você quer.",
            "Quando um monstro sobe de Tier, uma mensagem no chat avisa. Se a invocação não puder ser feita, o chat explica o motivo (vitórias insuficientes, slots cheios...).",
            "<strong>4. Lute junto.</strong> O aliado te segue e ataca os inimigos como uma invocação. Ele é <strong>imortal</strong> e os inimigos o ignoram."
          ]
        },
        {
          "heading": "📊 Quantas vitórias são precisas",
          "items": [
            "<strong>Monstros comuns:</strong> 150 / 300 / 500 vitórias.",
            "<strong>Monstros elite (mais fortes):</strong> 300 / 600 / 1000 vitórias.",
            "<strong>Chefes:</strong> 50 / 100 / 150 vitórias. Os chefes já contam vitórias, mas ainda não podem ser invocados: eles chegam como <strong>miniaturas</strong> numa próxima atualização."
          ]
        },
        {
          "heading": "🔮 Seus 3 aliados de ritual",
          "items": [
            "Você pode ter até <strong>3 aliados de ritual</strong> ao mesmo tempo. Eles <strong>não ocupam</strong> os espaços das suas invocações normais: dá para usar os dois juntos.",
            "Os aliados ficam com você até você removê-los e voltam sozinhos quando você entra no mundo de novo.",
            "Eles causam o <strong>dano de verdade</strong> daquele monstro e andam na mesma velocidade das invocações do jogo, atravessando portas como elas.",
            "<strong>Bônus de grupo:</strong> com os 3 aliados do mesmo monstro e esse monstro no Tier 3/3, você causa <strong>o dobro de dano (+100%)</strong> contra aquele tipo de monstro."
          ]
        },
        {
          "heading": "⌨️ Barra de ritual e teclas de atalho",
          "items": [
            "No lado direito da tela aparece a barra <strong>Ritual</strong> com seus 3 aliados. Slot destacado = aliado invocado. Slot normal = aliado descansando.",
            "Cada slot tem sua própria tecla. Escolha as teclas em <strong>Configurações > Controles</strong> (procure por \"Aliado de ritual\"). Também dá para clicar no slot.",
            "Apertar a tecla <strong>chama</strong> o aliado: você conjura um círculo mágico roxo e verde e ele surge numa explosão de energia. Apertar de novo <strong>guarda</strong> o aliado, que se desfaz numa névoa sombria. Os outros jogadores também veem os efeitos."
          ]
        },
        {
          "heading": "🗂️ Aba Necromancia organizada",
          "items": [
            "Os monstros aparecem em cartões com ícone, vitórias e progresso, separados por <strong>bioma</strong> na ordem em que você os encontra no jogo (Floresta, Ninho de aranhas, Cripta de vampiros, Planícies, Neve, Pântano, Deserto, Masmorra, Templo...).",
            "Filtros rápidos: <strong>Todos</strong>, <strong>Comum</strong>, <strong>Elite</strong> e <strong>Chefe</strong>."
          ]
        },
        {
          "heading": "🛠️ Correções",
          "items": [
            "<strong>XP em time:</strong> jogando junto com amigos do mesmo time, o XP agora é <strong>dividido</strong> entre vocês. Antes, cada um recebia o valor inteiro, e jogar em dupla dava o dobro de XP de jogar sozinho.",
            "<strong>Tela de Controles:</strong> abrir Configurações > Controles não enche mais o arquivo de log de erros. Atalhos do mod sem tecla agora aparecem como \"NOT SET\", igual aos do jogo."
          ]
        },
        {
          "heading": "✅ Compatibilidade",
          "items": [
            "Seus saves continuam funcionando: a Necromancia começa do zero e nada do seu progresso atual muda.",
            "Os aliados nunca ficam gravados no mundo. Se você remover o mod, nenhum monstro fica solto.",
            "Tudo traduzido para os 12 idiomas do mod.",
            "Para administradores: <strong>/rpgskills necro setkills <monstro> <vitórias></strong> define as vitórias de um monstro (útil para testes)."
          ]
        }
      ],
      "note": "<strong>Boa caçada, necromante! 💀</strong>"
    },
    "en": {
      "title": "🌟 Update 3.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "💀 Necromancy: how it works",
          "items": [
            "<strong>1. Hunt monsters.</strong> Every monster you defeat counts one victory for that kind of monster. It works for everything that tries to kill you: common monsters of every biome, elites and bosses.",
            "<strong>2. Level up your hunt.</strong> With enough victories, the monster goes up a <strong>Tier</strong> (from 0/3 to 3/3). Each Tier unlocks <strong>1 ally</strong> of that monster.",
            "<strong>3. Summon your ally.</strong> Open the Grimoire, go to the <strong>Necromancy</strong> tab and click <strong>Invoke</strong> on the monster you want.",
            "When a monster goes up a Tier, a chat message lets you know. If an ally cannot be summoned, the chat explains why (not enough victories, slots full...).",
            "<strong>4. Fight together.</strong> The ally follows you and attacks enemies like a summon. It is <strong>immortal</strong> and enemies ignore it."
          ]
        },
        {
          "heading": "📊 How many victories you need",
          "items": [
            "<strong>Common monsters:</strong> 150 / 300 / 500 victories.",
            "<strong>Elite monsters (stronger ones):</strong> 300 / 600 / 1000 victories.",
            "<strong>Bosses:</strong> 50 / 100 / 150 victories. Bosses already count victories but can't be summoned yet: they will arrive as <strong>miniatures</strong> in a future update."
          ]
        },
        {
          "heading": "🔮 Your 3 ritual allies",
          "items": [
            "You can have up to <strong>3 ritual allies</strong> at the same time. They <strong>don't use</strong> your regular summon slots: you can use both together.",
            "Allies stay with you until you remove them and come back on their own when you join the world again.",
            "They deal the <strong>real damage</strong> of that monster and move at the same speed as the game's summons, walking through doors like them.",
            "<strong>Group bonus:</strong> with all 3 allies of the same monster and that monster at Tier 3/3, you deal <strong>double damage (+100%)</strong> against that kind of monster."
          ]
        },
        {
          "heading": "⌨️ Ritual bar and hotkeys",
          "items": [
            "On the right side of the screen you'll see the <strong>Ritual</strong> bar with your 3 allies. Highlighted slot = ally summoned. Normal slot = ally resting.",
            "Each slot has its own key. Pick them in <strong>Settings > Controls</strong> (look for \"Ritual ally\"). You can also click the slot.",
            "Pressing the key <strong>calls</strong> the ally: you cast a purple and green magic circle and it bursts into the world in a flash of energy. Press again to <strong>put it away</strong>, and it fades into a dark mist. Other players see the effects too."
          ]
        },
        {
          "heading": "🗂️ An organized Necromancy tab",
          "items": [
            "Monsters show up as cards with icon, victories and progress, grouped by <strong>biome</strong> in the order you meet them in the game (Forest, Spider nest, Vampire crypt, Plains, Snow, Swamp, Desert, Dungeon, Temple...).",
            "Quick filters: <strong>All</strong>, <strong>Common</strong>, <strong>Elite</strong> and <strong>Boss</strong>."
          ]
        },
        {
          "heading": "🛠️ Fixes",
          "items": [
            "<strong>Team XP:</strong> when playing with friends on the same team, XP is now <strong>split</strong> between you. Before, each player got the full amount, so playing as a pair gave double the XP of playing solo.",
            "<strong>Controls screen:</strong> opening Settings > Controls no longer floods the log file with errors. Mod hotkeys without a key now show as \"NOT SET\", like the game's."
          ]
        },
        {
          "heading": "✅ Compatibility",
          "items": [
            "Your saves keep working: Necromancy starts from zero and none of your current progress changes.",
            "Allies are never saved in the world. If you remove the mod, no monsters are left behind.",
            "Everything translated into the mod's 12 languages.",
            "For admins: <strong>/rpgskills necro setkills <monster> <victories></strong> sets a monster's victories (handy for testing)."
          ]
        }
      ],
      "note": "<strong>Happy hunting, necromancer! 💀</strong>"
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
          "heading": "Correções",
          "items": [
            "<strong>Compartilhamento de XP em time</strong>: corrigido o XP que não era dividido mesmo com a opção ativada. O primeiro time criado no servidor (o mais comum entre amigos) era tratado como \"sem time\" e ficava de fora. Agora qualquer time compartilha XP de combate e de settlement com os colegas próximos, como configurado.",
            "<strong>Cinto brilhante</strong>: o mod deixou de deixar o cinto mais brilhante para todo mundo só por estar instalado. Sem a passiva <strong>Ruína da Escuridão</strong> (Mestre das Cavernas), a luz é exatamente a do jogo.",
            "<strong>Lanterna de fogo-fátuo</strong>: corrigida a luz instável quando equipada. O reforço da Ruína da Escuridão era aplicado de forma irregular na posição do personagem e \"brigava\" com a luz do fogo-fátuo. Agora o reforço acompanha o próprio fogo-fátuo, na mesma cor dele.",
            "Backups de inventário: dois backups criados ao mesmo tempo não se sobrescrevem mais, e o \"mais recente\" usado em <strong>/restore inventory</strong> é sempre o último salvo."
          ]
        },
        {
          "heading": "Melhorias",
          "items": [
            "Reforço de luz mais leve e estável: a <strong>Ruína da Escuridão</strong> agora reforça a luz do Cinto brilhante e da Lanterna de fogo-fátuo usando a mesma cor e o mesmo ritmo de atualização do jogo (a cada 5 ticks em vez de todo tick), sem varrer buffs a cada quadro. O atalho de ligar/desligar o reforço continua funcionando.",
            "Menos trabalho no servidor: a luz deixou de ser processada na sincronização de slots do servidor, onde não tinha efeito visual.",
            "Novos testes automáticos, incluindo um \"robô sabotador\" que ataca o mod com dados quebrados, valores extremos e acessos simultâneos para pegar bugs antes de chegarem ao jogo."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 3.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Fixes",
          "items": [
            "<strong>Team XP sharing</strong>: fixed XP not being shared even with the option enabled. The first team created on a server (the usual one among friends) was treated as \"no team\" and left out. Now every team shares combat and settlement XP with nearby teammates as configured.",
            "<strong>Shine belt</strong>: the mod no longer makes the belt brighter for everyone just by being installed. Without the <strong>Dark Ruin</strong> passive (Caverns Master), the light is exactly the vanilla one.",
            "<strong>Will-o'-wisp lantern</strong>: fixed unstable light while equipped. The Dark Ruin boost was applied irregularly at the character's position and fought with the wisp's own light. The boost now follows the wisp itself, in its own color.",
            "Inventory backups: two backups created at the same time no longer overwrite each other, and the \"latest\" used by <strong>/restore inventory</strong> is always the last one saved."
          ]
        },
        {
          "heading": "Improvements",
          "items": [
            "Lighter, steadier light boost: <strong>Dark Ruin</strong> now boosts the Shine belt and Will-o'-wisp lantern with the same color and refresh rhythm as the game (every 5 ticks instead of every tick), without scanning buffs every frame. The boost toggle hotkey still works.",
            "Less server work: light is no longer processed during the server's slot sync, where it had no visual effect.",
            "New automated tests, including a \"saboteur robot\" that attacks the mod with broken data, extreme values and concurrent access to catch bugs before they reach the game."
          ]
        }
      ],
      "note": ""
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
          "heading": "Correções",
          "items": [
            "<strong>Mestre das Relíquias</strong>: corrigido o travamento do jogo ao passar o mouse sobre os slots de acessórios, armadura, cosméticos ou habilidade. O bônus de slots era aplicado por engano também nesses inventários, deixando-os maiores do que o jogo esperava. Agora só os slots de acessórios recebem o bônus.",
            "Saves já afetados são reparados sozinhos ao entrar no mundo: os inventários de armadura, cosméticos e habilidade voltam ao tamanho normal, e qualquer item que estivesse nos slots extras volta para a mochila (ou cai no chão se ela estiver cheia). Se algum item não puder ser devolvido, nada é removido e o reparo tenta de novo depois."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 3.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Fixes",
          "items": [
            "<strong>Relic Master</strong>: fixed the game freezing when hovering over trinket, armor, cosmetic, or ability slots. The slot bonus was wrongly applied to those inventories too, making them larger than the game expected. Now only trinket slots get the bonus.",
            "Saves that were already affected repair themselves when you enter the world: armor, cosmetic, and ability inventories go back to their normal size, and any item in the extra slots returns to your inventory (or drops on the ground if it is full). If an item cannot be returned, nothing is removed and the repair tries again later."
          ]
        }
      ],
      "note": ""
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
          "heading": "Novidades",
          "items": [
            "<strong>Fusão Elemental</strong>: com dois mestres de efeito no nível 5, os ataques passam a combinar esses efeitos. Fogo e gelo estilhaçam, veneno e sangue espalham praga, fogo e veneno queimam mais forte, sangue e gelo deixam o próximo golpe mais pesado, e o pesadelo com outro efeito pode causar medo.",
            "<strong>Tempestade Interior</strong>: com Sanguinário, Incendiário, Venenoso, Congelante e Pesadelo no nível 5, o dano dos efeitos contínuos aumenta em 50%."
          ]
        },
        {
          "heading": "Qualidade de vida",
          "items": [
            "Cada classe mostra um item próprio na lista e no detalhe, no estilo do jogo.",
            "Novo visual Grimório na janela de habilidades: fundo escuro e opaco com moldura dourada, abas na lateral e o nível de cada classe mostrado em bolinhas douradas. Os textos ficam mais fáceis de ler e o mundo não aparece mais por trás da janela."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Hemorragia Gelada agora realmente aumenta em 30% o próximo golpe direto.",
            "Classes desativadas na configuração não contam mais para Fusão Elemental nem para Tempestade Interior.",
            "Um Estilhaço que mata o alvo agora conta o abate para o jogador.",
            "Os pontos de cada classe (ex.: 0 / 5) não ficam mais cortados pelo botão do nome.",
            "Compatibilidade com Safe Haven QOL 4.8: discos de vinil empilháveis passam a seguir o sistema de pilhas do RPG Skills, e opções removidas do Safe Haven não são mais recriadas no arquivo de configuração."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 3.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "What's new",
          "items": [
            "<strong>Elemental Fusion</strong>: with two damage-over-time masters at level 5, attacks start combining those effects. Fire and frost shatter, poison and blood spread plague, fire and poison burn harder, blood and frost make the next hit heavier, and nightmare with another effect can cause fear.",
            "<strong>Inner Storm</strong>: with Bloodthirsty, Incendiary, Venomous, Freezing, and Nightmare all at level 5, damage-over-time effects deal 50% more damage."
          ]
        },
        {
          "heading": "Quality of life",
          "items": [
            "Each class shows its own item in the list and in the class detail, in the game's style.",
            "New Grimoire look for the skills window: an opaque dark background with a gold frame, tabs on the side, and each class level shown as gold pips. Text is easier to read, and the world no longer shows through the window."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Frozen Hemorrhage now really adds 30% to the next direct hit.",
            "Classes disabled in config no longer count toward Elemental Fusion or Inner Storm.",
            "A killing Shatter now credits the kill to the player.",
            "Each class's points (e.g. 0 / 5) are no longer cut off by the name button.",
            "Safe Haven QOL 4.8 compatibility: stackable vinyls now follow RPG Skills stack sizes, and options Safe Haven removed are no longer recreated in its config file."
          ]
        }
      ],
      "note": ""
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
          "heading": "Qualidade de vida",
          "items": [
            "A janela de habilidades passa a ter um visual próprio.",
            "Cada classe mostra um emblema próprio na lista e no detalhe.",
            "Os textos de Status, Classes e Loja cabem na moldura, sem cortar a última linha.",
            "Os botões da loja e os nomes das classes acompanham o visual escuro do painel.",
            "Ao passar o mouse, o texto dos botões do painel fica num dourado mais claro."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 3.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Quality of life",
          "items": [
            "The skills window now has its own look.",
            "Each class shows its own emblem in the list and in the class detail.",
            "Status, Classes, and Shop text fits inside the frame, including the last line.",
            "Shop buttons and class names follow the panel's dark look.",
            "Hovering a panel button turns its text a brighter gold."
          ]
        }
      ],
      "note": ""
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
          "heading": "Correções",
          "items": [
            "Um personagem novo, ou o mesmo nome num mundo novo, não herda mais o nível nem os pontos de habilidade de um personagem anterior.",
            "Resetar para o nível 0 permanece depois de sair e entrar de novo. Antes, o nível antigo podia voltar na próxima entrada.",
            "Quem já tem a progressão gravada naquele personagem continua com ela.",
            "<strong>Golpe de Ouro</strong> volta a dar ouro no multiplayer para quem não está hospedando. O ouro do acerto chega no inventário ou na bolsa de moedas, também com projétil, magia e invocação.",
            "Pegar o <strong>Mestre das Relíquias</strong> e entrar numa caverna, ou reconectar, não trava mais o jogo. O personagem volta a carregar com o mod.",
            "O <strong>XP de combate do time</strong> volta a contar para quem está no mesmo time, no mesmo mapa e perto, inclusive quando a morte vem de projétil, magia ou invocação.",
            "<strong>LB</strong> e <strong>RB</strong> voltam a rolar a barra de atalhos no controle, em qualquer layout, inclusive o padrão. O combo dos dois bumpers continua só para abrir a janela do mod.",
            "No controle, a barra de atalhos segue o layout de cada aparelho. A janela do mod abre ao segurar os dois botões dessa barra e, aberta, usa os botões de menu do jogo."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 3.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Fixes",
          "items": [
            "A new character, or the same name in a new world, no longer inherits level or skill points from a previous character.",
            "Resetting to level 0 stays that way after you leave and come back. Before, the old level could return on the next entry.",
            "A character that already has progression saved on that character keeps it.",
            "<strong>Gold Strike</strong> gives gold again in multiplayer for players who are not hosting. Hit gold reaches your inventory or coin pouch, including projectiles, magic, and summons.",
            "Taking <strong>Relic Master</strong> and entering a cave, or reconnecting, no longer freezes the game. That character loads again with the mod.",
            "<strong>Team combat XP</strong> counts again for players on the same team, on the same map, and nearby, including kills from projectiles, magic, or summons.",
            "<strong>LB</strong> and <strong>RB</strong> scroll the hotbar again on a controller, on any layout, including the default. The two-bumper combo still only opens the mod window.",
            "On a controller, the hotbar follows each device's layout. The mod window opens when you hold both of those hotbar buttons and, once open, uses the game's menu buttons."
          ]
        }
      ],
      "note": ""
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
          "heading": "Qualidade de vida",
          "items": [
            "<strong>Raio de aggro das invocações</strong>: no Config você liga/desliga e escolhe quantos tiles (padrão 10) a partir de você. Só monstros hostis dentro desse raio puxam combate automático. Cavernídeos continuam podendo ser caçados à distância — as invocações vão até eles e voltam. Monstros fora do raio são ignorados no caminho.",
            "Atalho em <strong>Controles</strong> para ligar/desligar a caça a <strong>Cavernídeos</strong> pelas invocações (por jogador; no Config do servidor a opção global continua valendo)."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Invocações voltam a caçar <strong>Cavernídeos</strong> de forma confiável. Antes, um monstro longe no mapa (ou um hostil perto de você) podia impedir a caça por completo; agora só hostis no raio de aggro competem com o cavernídeo, sem travar a caça quando não há combate real.",
            "Ao encolher slots da <strong>Mestre das Relíquias</strong> (respec de atualização ou reset de pontos), acessórios nos slots extras voltam para o inventário ou caem no chão — não somem mais se a devolução falhar (o encolhimento é cancelado e o item permanece equipado).",
            "Corrigido o bug em que 1 ponto em <strong>Mestre das Relíquias</strong> fazia os slots de acessórios aumentarem de +4 a cada vez que você saía e entrava no mapa."
          ]
        },
        {
          "heading": "Desempenho",
          "items": [
            "Menos travadinhas no servidor: Auto Poção, passivas de tick e checagem de hostis perto das invocações ficaram mais leves, sem mudar o comportamento no jogo."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.9 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Quality of life",
          "items": [
            "<strong>Summon aggro radius</strong>: in Config you can turn it on/off and set how many tiles (default 10) from you. Only hostile monsters inside that radius pull automatic combat. Cavelings can still be hunted from far away — summons go to them and return. Hostiles outside the radius are ignored along the way.",
            "<strong>Controls</strong> hotkey to turn <strong>Caveling</strong> hunting by summons on/off (per player; the server Config global option still applies)."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Summons reliably hunt <strong>Cavelings</strong> again. Before, a far-away hostile (or a hostile near you) could stop the hunt entirely; now only hostiles in the aggro radius compete with the caveling, without locking hunting when there is no real fight.",
            "When <strong>Relic Master</strong> slots shrink (update respec or point reset), trinkets in the extra slots go to your inventory or drop on the ground — they no longer vanish if recovery fails (shrink is cancelled and the item stays equipped).",
            "Fixed a bug where 1 point in <strong>Relic Master</strong> made trinket slots grow by +4 every time you left and re-entered the map."
          ]
        },
        {
          "heading": "Performance",
          "items": [
            "Fewer server hitch moments: Auto Potion, tick passives, and nearby-hostile checks for summons are lighter, with the same in-game behavior."
          ]
        }
      ],
      "note": ""
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
          "heading": "Novidades",
          "items": [
            "Invocações passam a caçar <strong>Cavernídeos</strong> sozinhas (sem precisar travar alvo). Se houver monstro hostil por perto, priorizam o combate. Dá para desligar no menu de configuração."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "Compatível com o Necesse <strong>1.3.3</strong>. Hosts e clientes precisam atualizar o jogo juntos.",
            "Compatível com <strong>Safe Haven QOL 4.0</strong>: pilha universal e sistemas compartilhados (pilha, veios, incinerador, triple loot) continuam sob a autoridade do RPG Skills.",
            "Traduções pt-BR do overlay deixam de sobrescrever textos bons do Safe Haven (menus e Blueprints usam o idioma do próprio Safe Haven)."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Mineração em veios: paredes de pedra (e variantes profundas/pântano), colunas e pilares passam a entrar na veia como as outras paredes.",
            "Mineração em veios: troncos como bambu, pinheiro, palmeira, salgueiro, maçã e banana passam a encadear corretamente (antes só as versões com “árvore” no nome).",
            "Quebrar objetos e pisos com o Mestre do Loot / XP de colheita continua estável na 1.3.3 (o jogo mudou o caminho de destruição; o mod acompanhou).",
            "Comando de buff de XP: limpar ou trocar o buff (off / outro multiplicador) deixa de ficar “preso” no valor antigo em alguns casos.",
            "Menu de configuração: textos novos (slots de trinket pelo Config, excluir Tablets de Incursão do loot, forçar triple loot do Safe Haven off) deixam de aparecer em inglês nos outros idiomas."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.8 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "New",
          "items": [
            "Summons now hunt <strong>Cavelings</strong> on their own (no need to lock a target). If a hostile is nearby, they prioritize combat. You can turn this off in the config menu."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "Compatible with Necesse <strong>1.3.3</strong>. Hosts and clients need to update the game together.",
            "Compatible with <strong>Safe Haven QOL 4.0</strong>: universal stacks and shared systems (stack size, vein mining, incinerator, triple loot) stay under RPG Skills authority.",
            "pt-BR overlay translations no longer overwrite good Safe Haven text (menus and Blueprints use Safe Haven’s own locale)."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Vein mining: stone walls (including deep/swamp variants), columns, and pillars now join the vein like other walls.",
            "Vein mining: trunks such as bamboo, pine, palm, willow, apple, and banana now chain correctly (before, only ids with “tree” in the name did).",
            "Breaking objects and floors with Loot Master / harvest XP stays stable on 1.3.3 (the game changed the destroy path; the mod followed).",
            "XP buff command: clearing or swapping the buff (off / another multiplier) no longer gets stuck on the old value in some cases.",
            "Config menu: newer options (Config trinket slots, exclude Incursion Tablets from loot, force Safe Haven triple loot off) no longer stay in English in other languages."
          ]
        }
      ],
      "note": ""
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
          "heading": "Novidades",
          "items": [
            "Config: dá para definir um bônus fixo de slots de acessórios (até 255). Com essa opção ligada, o bônus de slots da Mestre das Relíquias deixa de valer. Valores muito altos deixam a tela de equipamento bem larga (o jogo não tem rolagem nessa grade).",
            "Config: opção para a Mestre do Loot não multiplicar Tablets de Incursão (desligada por padrão, igual ao comportamento anterior).",
            "Config: opção para, nesta atualização (e nas próximas, se continuar ligada), zerar só as classes uma vez por versão. Os pontos voltam livres. Nível, XP e Maestria da Loja não mudam. Acessórios extras da Mestre das Relíquias vão para o inventário ou para o chão. Um backup de inventário é feito antes; se algo falhar, use o restore de inventário do comando do mod."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Textos de bônus das classes: o nome do efeito não se repete no valor (ex.: duração de poção mostra só +25%).",
            "Tooltips da janela do RPG Skills (Classes e Loja): textos longos deixam de quebrar no meio da frase.",
            "Traço Maior Fã (português): a tooltip deixa de misturar chave interna no texto; descrição sem tratamento masculino forçado.",
            "Mestre das Relíquias: itens de outros mods que aumentam slots de acessórios passam a funcionar; acessórios não somem ao reduzir slots.",
            "Mestre do Loot: móveis e máquinas colocados deixam de ser multiplicados ao destruir; mineração/árvores/plantas continuam elegíveis.",
            "Mestre do Loot: quebrar piso ou parede devolve a quantidade original (não multiplica). Mineração, árvores, plantas, loot de inimigos, pesca e craft continuam iguais.",
            "Loja: os bônus de XP 2x, 5x e 10x deixam de mostrar um ponto de interrogação no nome.",
            "Golpe de Ouro: se você tiver Bolsa de Moedas, o ouro entra nela; se não tiver, as moedas vão para o inventário.",
            "Upgrades de pilha e baús do mundo: salvam na hora após a compra (não só no autosave).",
            "Menos lag ao usar inventário/baús com pilha do mundo aumentada.",
            "Compatibilidade Safe Haven: triple loot forçado desligado por padrão para não somar com a Mestre do Loot.",
            "Colonos deixam de andar aos trancos por atualizações repetidas de movimento."
          ]
        },
        {
          "heading": "Desempenho",
          "items": [
            "Colonos e bônus de classe deixam de recalcular o mesmo efeito o tempo todo, o que reduz travadinhas no servidor."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "What's New",
          "items": [
            "Config: you can set a fixed accessory-slot bonus (up to 255). While that option is on, Relic Master's slot bonus no longer applies. Very high values make the equipment panel very wide (vanilla has no scroll on that grid).",
            "Config: option to stop Loot Master from multiplying Incursion Tablets (off by default, same as before).",
            "Config: option that, on this update (and later ones if it stays on), resets only classes once per version. Spent points come back as free points. Level, XP, and Shop Mastery stay. Extra Relic Master accessory slots go to inventory or the ground. An inventory backup runs first; if something goes wrong, use the mod command inventory restore."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Class bonus text: the effect name no longer repeats in the value (e.g. potion duration shows just +25%).",
            "RPG Skills window tooltips (Classes and Shop): long text no longer breaks awkwardly mid-sentence.",
            "Biggest Fan trait (Portuguese): tooltip no longer mixes an internal key into the text; description avoids forced masculine wording.",
            "Relic Master: third-party trinket-slot items work correctly; equipped trinkets are no longer lost when slots shrink.",
            "Loot Master: placed furniture/machines are no longer multiplied on destroy; mining/trees/plants stay eligible.",
            "Loot Master: breaking a floor or wall returns the original amount (no multiplier). Mining, trees, plants, enemy loot, fishing, and crafting stay the same.",
            "Shop: the 2x, 5x, and 10x XP bonuses no longer show a question mark in the name.",
            "Gold Strike: if you have a Coin Pouch, gold goes into it; otherwise coins go into your inventory.",
            "World stack and chest upgrades: save immediately after purchase (not only on autosave).",
            "Less lag when using inventory/chests with an upgraded world stack size.",
            "Safe Haven compat: triple loot forced off by default so it does not stack with Loot Master.",
            "Settlers no longer hitch while walking because of repeated movement updates."
          ]
        },
        {
          "heading": "Performance",
          "items": [
            "Settlers and class bonuses stop recalculating the same effect every moment, which cuts server hitching."
          ]
        }
      ],
      "note": ""
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
          "heading": "Novidades",
          "items": [
            "<strong>Auto-Seleção de Arma</strong>: recurso de qualidade de vida gratuito que escolhe automaticamente o slot certo da hotbar (corpo a corpo, à distância, magia ou invocação) quando há inimigo ou boneco de treino a até 12 tiles. Sem monstro por perto, não troca o que você está usando — picareta, machado, pá e outras ferramentas ficam no lugar. Nunca escolhe TNT, bombas ou itens explosivos no lugar de uma arma. Só troca a arma — você continua atacando normalmente. Ative ou desative pelo atalho nas opções de controles.",
            "<strong>Sono Acelerado</strong>: ao dormir na cama entre 20h e 3h, a noite passa quase na hora. Se dormir antes da meia-noite, você acorda na manhã do dia seguinte (o calendário do jogo muda junto). Se dormir depois da meia-noite (até 3h), acorda por volta das 8h no mesmo dia. Fora desse horário, o sono continua normal. Dá para ligar ou desligar no menu de configuração do RPG Skills."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Mestre do Loot na forja, fornalha e outras máquinas: o bônus continua valendo quando você tem pontos na classe, mas agora usa a atribuição correta — seu craft manual, o dono do assentamento da máquina ou quem abriu a máquina por último. Corrigido o caso em que a forja multiplicava sem pontos por causa de perfil antigo/offline ou de outro jogador online.",
            "Colheita automática (colonos) e quebra de blocos: o bônus de loot passa a usar o dono do assentamento da área quando não há jogador direto, em vez de puxar o melhor perfil carregado no servidor.",
            "Configuração do Safe Haven QOL: ao salvar opções e reiniciar, as escolhas deixam de ser sobrescritas pelo RPG Skills. A mineração de veios compartilhada continua sob o RPG Skills por padrão (evita conflito); dá para ajustar isso na seção Servidor / Compat do menu do RPG Skills.",
            "Menu de configuração do RPG Skills: salvar vazio não finge gravação; ao reabrir, o menu mostra os valores atuais; intervalos de backup batem com os limites reais."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "New",
          "items": [
            "<strong>Auto Weapon Select</strong>: free quality-of-life that picks the right hotbar slot (melee, ranged, magic, or summon) when a hostile mob or training dummy is within 12 tiles. With no monster nearby, it leaves your current item alone — pickaxe, axe, shovel, and other tools stay selected. It never picks TNT, bombs, or other explosives instead of a real weapon. It only switches weapons — you still attack as usual. Toggle it with the control binding in the options menu.",
            "<strong>Accelerated Sleep</strong>: when you sleep in a bed between 8 PM and 3 AM, night passes almost instantly. Sleep before midnight and you wake on the next morning (the in-game calendar day advances with it). Sleep after midnight (until 3 AM) and you wake around 8 AM the same day. Outside that window, sleep stays normal. You can turn it on or off in the RPG Skills config menu."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Loot Master on forges, furnaces, and other machines: the multiplier still applies when you have points in the class, but now uses the correct attribution — your manual craft, the settlement owner of the machine, or whoever opened the machine last. Fixed cases where the forge multiplied with zero points because of an old/offline profile or another online player.",
            "Automated harvest (settlers) and block breaking: loot bonus now uses the settlement owner of the area when there is no direct player, instead of pulling the best profile loaded on the server.",
            "Safe Haven QOL settings: saving options and restarting no longer gets overwritten by RPG Skills. Shared vein mining stays under RPG Skills by default (avoids conflicts); you can change that in the RPG Skills Server / Compat config section.",
            "RPG Skills config menu: empty save no longer pretends it wrote; reopening shows current values; backup interval limits match the real caps."
          ]
        }
      ],
      "note": ""
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
          "heading": "Novidades",
          "items": [
            "Arquivo de configuração do mod bem mais completo, com seções claras e comentários em português explicando cada opção, o valor padrão e os limites.",
            "Dá para ligar ou desligar recursos do mod: fogos no level up, botão no inventário, mensagem de boas-vindas, Minerador Explosivo na Loja, linha de XP em equipe no Status, comando de restaurar inventário e compra de buff de XP.",
            "Cada passiva nomeada também pode ser ligada ou desligada na configuração (Vein Mining, Auto Poção, Bênção Vital, Deus do Dano e as demais).",
            "Economia da Loja ajustável: custo e tamanho dos upgrades de baú (até 1000 slots), duração do buff de XP, ritmo de XP de settlement, tamanho do Vein Mining e escala dos fogos de level up.",
            "Classes podem ser habilitadas ou desabilitadas por aba na configuração.",
            "No menu inicial, o botão <strong>RPG SKILLS CONFIG</strong> abre uma janela com todas essas opções; ao salvar, reinicie o jogo para aplicar de ponta a ponta.",
            "Textos do menu de configuração traduzidos em todos os idiomas do mod (mesmas opções, mesmo significado).",
            "Admins podem usar <strong>/rpgskills config reload</strong> para releitura na memória (o restart completo ainda é o caminho mais seguro).",
            "Em multiplayer, opção para exigir admin nas compras de stack do mundo e de slots de baú na Loja (buff de XP da Loja continua separado).",
            "Limite de progressão protegido: no máximo 5 pontos por classe e nível máximo de 165 (33 classes × 5).",
            "Com Safe Haven / Torvians, o RPG Skills continua mandando no incinerador por padrão (dá para mudar na configuração se quiser).",
            "Opção de log resumido na inicialização mostrando o que saiu do padrão.",
            "Nova passiva <strong>Reflexo do Pescador</strong> (Mestre dos Mares nível 1): quando o peixe morde, a captura é automática e a vara é lançada de novo no mesmo ponto — pesca AFK, respeitando linhas extras e bônus de pesca."
          ]
        },
        {
          "heading": "Qualidade de vida",
          "items": [
            "Janela de skills mais limpa: a Loja ficou mais compacta e organizada (bônus de XP, stack, baús e Minerador Explosivo).",
            "Botões de reset na aba Status deixam claro que afetam o personagem: <strong>Resetar pontos de classe</strong> e <strong>Zerar progressão</strong> — sem confundir com redefinir stack ou slots na Loja.",
            "Textos da interface (barra de XP, botões e tooltips) passam pelos idiomas do mod de forma consistente.",
            "Descrições das classes de combate explicam melhor o <strong>Deus do Dano</strong> (quando Guerra, Atirador, Magia e Invocador estão no nível 5) e o dano ao longo do tempo de Congelante e Pesadelo.",
            "Textos de Vitalidade, Colossal e Resistência Elemental ficam mais claros (Bênção Vital, cooldown de 30s, imunidades e redução a fogo).",
            "Mestre das Cavernas deixa claro no nível 5 que libera a compra do Minerador Explosivo na Loja.",
            "Ruína da Escuridão descreve o aumento de luz certo (de 250 para 350).",
            "Natureza, Auto Poção, Barriga Sempre Cheia e Colheita do Rancho ficam mais claros na interface e nas passivas.",
            "Mestre das Máquinas documenta o incinerador: mais rápido e queima um pack inteiro por ciclo. Com Safe Haven, quem manda é o RPG Skills (incinerador instantâneo do outro mod fica desligado).",
            "Comando <strong>/rpgskills status</strong> mostra nível, XP, pontos livres e buff de XP.",
            "Ajuda dos comandos marca o que é <strong>admin</strong> e o que é <strong>jogador</strong>; stack admin aceita de 1x a 1000x.",
            "Idioma coreano do mod traduzido de verdade; textos de comando seguem o idioma do jogo.",
            "Aba Status com mais espaço entre as linhas (textos menos grudados).",
            "Em português do Brasil, o mod deixa de sobrescrever textos que o próprio Necesse já traduz — e completa só o que o jogo ainda deixa em inglês (tooltips, controles e poucas frases).",
            "Comida e itens que estragam: em vez de perder a pilha inteira de uma vez, some <strong>1 por ciclo</strong>; a última unidade vira comida estragada. Dá para desligar em <strong>RPG SKILLS CONFIG</strong>."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Painel de Classes com mais espaço entre os bônus atuais e o próximo ponto, para textos longos não se sobreporem.",
            "Sanguinário, Congelante e Pesadelo deixam de mostrar na lista de bônus por ponto efeitos que só existem no nível 5 (armadura quebrada, congelar e hitkill) — esses efeitos continuam só no desbloqueio máximo.",
            "Resistência Elemental no nível certo <strong>bloqueia</strong> debuffs de verdade (não só remove depois).",
            "Colossal não aumenta mais regeneração de resiliência por engano; a defesa continua sendo a proteção ao tomar dano.",
            "Bênção Vital funciona só com a classe Vitalidade (não depende mais do Sangrento).",
            "Sobrevivência a dano fatal da Vitalidade agora pode salvar de um golpe letal (com intervalo entre usos).",
            "Mestre da Construção: alcance de interação agora afeta colocar, quebrar e usar objetos/NPCs — não aumenta mais a coleta de itens (isso fica com Relíquias).",
            "Mestre dos Mares: o poder de pesca reduz o tempo de espera sem tornar a pesca quase instantânea só por ter linhas extras.",
            "Auto Poção da Alquimia deixa claro: em até 50% de vida, usa poções até encher.",
            "Em servidor dedicado, comandos de admin do RPG Skills exigem permissão real (não basta ser o único jogador online).",
            "Baixar o nível com <strong>/rpgskills set level</strong> não passa se você tiver mais pontos de classe gastos do que o novo nível permite — use reset de pontos antes.",
            "Depois de morrer, os bônus de classe voltam a funcionar sem precisar de reset completo.",
            "Vermes (areia, slime e similares) não dão mais XP por cada pedaço do corpo — só a cabeça conta.",
            "Pescar peixe volta a dar XP de trabalho: <strong>5 por lançamento</strong> da vara (1 ou vários peixes no mesmo lançamento contam como um), dentro ou fora do assentamento — manual ou com Reflexo do Pescador.",
            "Boomerangs e a adaga de carapaça dão para aprimorar e encantar mesmo com o tamanho de pilha do mundo aumentado.",
            "No menu inicial, ao trocar o idioma do jogo, a janela <strong>RPG SKILLS CONFIG</strong> atualiza os textos na hora (não fica presa no idioma anterior).",
            "A perda de XP ao morrer passa a respeitar de verdade a configuração (ligar/desligar e a fração escolhida em <strong>RPG SKILLS CONFIG</strong> / arquivo de config).",
            "Compras na Loja (stack do mundo e slots de baú) ficam mais seguras: a cobrança e o upgrade acontecem juntos, sem perder moedas/barras se algo falhar no meio.",
            "Bônus do Mestre das Máquinas vale pelas máquinas do <strong>assentamento</strong> (não pelo maior nível de classe entre todos os jogadores online)."
          ]
        },
        {
          "heading": "Desempenho",
          "items": [
            "Corrigidos travamentos e picos de lag no servidor (incluindo singleplayer) causados por um registro de depuração que escrevia no disco o tempo todo.",
            "O sistema de tamanho de pilha ficou mais leve: evita trabalho pesado quando não é necessário."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "Compatível com o Necesse <strong>1.3.2</strong>. Hosts e clientes precisam atualizar o jogo juntos.",
            "<strong>Prioridade máxima:</strong> deixe o RPG Skills no topo da lista de mods (acima de todos os outros).",
            "Compatível com <strong>Safe Haven QOL 3.5</strong>: com os dois ativos, o RPG Skills manda em tamanho de pilha, incinerador, mineração em veia e banners empilháveis (o Safe Haven continua com o resto do QoL).",
            "Textos do Safe Haven em português do Brasil pela ponte de localização do RPG Skills (menu e flags do Torvians)."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "What's new",
          "items": [
            "Much richer mod config file, with clear sections and Portuguese comments explaining each option, its default, and its limits.",
            "Toggle mod features on or off: level-up fireworks, inventory button, welcome message, Explosive Miner in the Shop, team XP status line, inventory restore command, and XP buff purchases.",
            "Each named passive can also be toggled in the config (Vein Mining, Auto Potion, Vital Blessing, Damage God, and the rest).",
            "Shop economy is adjustable: chest upgrade cost and size (up to 1000 slots), XP buff duration, settlement XP pacing, Vein Mining burst size, and level-up fireworks scale.",
            "Classes can be enabled or disabled by tab in the config.",
            "On the main menu, the <strong>RPG SKILLS CONFIG</strong> button opens a window with all of these options; after saving, restart the game to apply everything end to end.",
            "Config menu text is translated in every language the mod supports (same options, same meaning).",
            "Admins can run <strong>/rpgskills config reload</strong> to reload into memory (a full restart is still the safest path).",
            "In multiplayer, an option can require admin for world stack and chest-slot Shop upgrades (Shop XP buff stays separate).",
            "Progression caps protected: at most 5 points per class and max level 165 (33 classes × 5).",
            "With Safe Haven / Torvians, RPG Skills still owns the incinerator by default (you can change that in the config if you want).",
            "Optional boot summary log showing what differs from the defaults.",
            "New passive <strong>Angler's Reflex</strong> (Sea Master level 1): when a fish bites, the catch is automatic and the rod is cast again at the same spot — AFK fishing, with extra lines and fishing bonuses still applying."
          ]
        },
        {
          "heading": "Quality of life",
          "items": [
            "Cleaner skills window: the Shop tab is more compact and organized (XP bonuses, stack, chests, and Explosive Miner).",
            "Status-tab reset buttons make it clear they affect your character: <strong>Reset class points</strong> and <strong>Reset progression</strong> — so they are not confused with resetting stack or chest slots in the Shop.",
            "Interface text (XP bar, buttons, and tooltips) goes through the mod languages consistently.",
            "Combat class descriptions better explain <strong>Damage God</strong> (when War Master, Marksman, Magic Master, and Summon Master are all at level 5) and Congelante/Pesadelo damage over time.",
            "Vitality, Colossal, and Elemental Resistance texts are clearer (Vital Blessing, 30s cooldown, immunities and fire reduction).",
            "Cavern Master at level 5 clearly unlocks Explosive Miner purchase in the Shop.",
            "Dark Ruin describes the correct light boost (from 250 to 350).",
            "Nature, Auto Potion, Always Full, and Ranch Harvest texts are clearer in the UI and passives.",
            "Machine Master documents the incinerator: faster and burns one full pack per cycle. With Safe Haven, RPG Skills is in charge (the other mod's instant incinerator is turned off).",
            "<strong>/rpgskills status</strong> shows level, XP, free points, and XP buff.",
            "Command help marks what is <strong>admin</strong> vs <strong>player</strong>; admin stack accepts 1x to 1000x.",
            "Korean mod language fully translated; command text follows the game language.",
            "Status tab has more space between lines (less cramped text).",
            "In Brazilian Portuguese, the mod no longer overrides texts the game already translates — it only fills what Necesse still leaves in English (tooltips, controls, and a few phrases).",
            "Spoiling food and items: instead of losing a whole stack at once, you lose <strong>1 per cycle</strong>; the last unit becomes spoiled food. Toggle it in <strong>RPG SKILLS CONFIG</strong>."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Classes panel has more space between current bonuses and the next point, so long texts do not overlap.",
            "Sanguinario, Congelante, and Pesadelo no longer list per-point bonuses for effects that only exist at level 5 (broken armor, freeze, and hitkill) — those stay on the max-level unlock only.",
            "Elemental Resistance at the right level truly <strong>blocks</strong> debuffs (not only removes them later).",
            "Colossal no longer boosts resilience regen by mistake; defense remains the on-hit protection.",
            "Vital Blessing works from Vitality Master alone (no longer depends on Blood Master).",
            "Vitality Master fatal survival can now save you from a lethal hit (with a cooldown between procs).",
            "Construction Master: interaction range now affects placing, breaking, and using objects/NPCs — it no longer boosts item pickup (that stays with Relics).",
            "Seas Master: fishing power shortens wait time without making fishing nearly instant just from extra lines.",
            "Alchemy Auto Potion is clear: at or below 50% HP, uses potions until full.",
            "On dedicated servers, RPG Skills admin commands require real admin permission (being the only online player is not enough).",
            "Lowering level with <strong>/rpgskills set level</strong> is blocked if spent class points exceed the new level budget — reset points first.",
            "After death, class bonuses work again without needing a full reset.",
            "Worms (sand, slime, and similar) no longer grant XP for every body segment — only the head counts.",
            "Catching fish grants work XP again: <strong>5 per cast</strong> (one or many fish on the same cast count as one), inside or outside a settlement — manual or with Angler's Reflex.",
            "Boomerangs and the carapace dagger can be upgraded and enchanted even when world stack size is increased.",
            "On the main menu, changing the game language updates the <strong>RPG SKILLS CONFIG</strong> window text right away (it no longer sticks to the previous language).",
            "XP loss on death now truly follows the config (toggle and fraction in <strong>RPG SKILLS CONFIG</strong> / config file).",
            "Shop purchases (world stack and chest slots) are safer: payment and upgrade happen together, so you do not lose coins/bars if something fails mid-purchase.",
            "Machine Master bonuses apply to machines in the <strong>settlement</strong> (not the highest class level among all online players)."
          ]
        },
        {
          "heading": "Performance",
          "items": [
            "Fixed server freezes and lag spikes (including singleplayer) caused by leftover debug logging that kept writing to disk.",
            "Stack-size handling is lighter: it skips heavy work when it is not needed."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "Compatible with Necesse <strong>1.3.2</strong>. Hosts and clients need to update the game together.",
            "<strong>Maximum priority:</strong> keep RPG Skills at the top of your mod list (above every other mod).",
            "Compatible with <strong>Safe Haven QOL 3.5</strong>: when both are active, RPG Skills owns stack size, incinerator, vein mining, and stackable banners (Safe Haven keeps its other QoL).",
            "Safe Haven Brazilian Portuguese texts via the RPG Skills localization bridge (Torvians menu and flags)."
          ]
        }
      ],
      "note": ""
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
          "heading": "Qualidade de vida",
          "items": [
            "XP de trabalho dos aldeões do settlement também pode ser compartilhado com o time perto (igual ao XP de combate). Dá para ligar ou desligar no arquivo de configuração geral do mod.",
            "Configurações do mod (progressão, classes, pilhas, QoL, backup de inventário e interface) ficam em um único arquivo geral, organizado por seções. Continuam separados: mensagem de boas-vindas por mundo, perfis de jogador e cópias de inventário."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "World Stack: tábuas de portal (Gateway Tablets) com níveis ou biomas diferentes não se misturam mais — cada uma mantém suas propriedades.",
            "Mestre do Loot: dinamite, bombas e quebras em massa não multiplicam o mesmo drop várias vezes (fim dos milhões de recursos de uma vez).",
            "Mestre dos Reinos: qualidade de vida dos aldeões fica no teto normal do jogo — sem velocidade absurda / teleporte.",
            "Controle: hotkeys do mod não interferem mais no botão de sprint (habilidade de trinket)."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "Continua compatível com o Necesse <strong>1.3.1</strong>.",
            "<strong>Prioridade máxima:</strong> deixe o RPG Skills no topo da lista de mods (acima de todos os outros)."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Quality of life",
          "items": [
            "Settlement villager work XP can also be shared with nearby teammates (same idea as combat XP). You can turn it on or off in the mod's general config file.",
            "Mod settings (progression, classes, stacks, QoL, inventory backup settings, and UI) live in one general config file organized by sections. Still separate: per-world welcome message, player profiles, and inventory backup copies."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "World Stack: Gateway Tablets with different levels or biomes no longer merge — each keeps its own properties.",
            "Loot Master: dynamite, bombs, and mass breaks no longer multiply the same drop over and over (no more millions of resources at once).",
            "Realm Master: settler quality of life stays at the normal game cap — no absurd speed / teleporting villagers.",
            "Controller: mod hotkeys no longer interfere with the sprint button (trinket ability)."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "Still compatible with Necesse <strong>1.3.1</strong>.",
            "<strong>Maximum priority:</strong> keep RPG Skills at the top of your mod list (above every other mod)."
          ]
        }
      ],
      "note": ""
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
          "heading": "Qualidade de vida",
          "items": [
            "O jogo guarda automaticamente até 5 cópias do seu inventário e equipamento a cada 10 minutos enquanto você está online.",
            "Use <strong>/rpgskills restore inventory</strong> para voltar à cópia mais recente, ou <strong>/rpgskills restore inventory list</strong> para ver as datas salvas.",
            "Aba Classes redesenhada: lista à esquerda com ícones de itens do jogo e nível; à direita, bônus atuais, seta e o ganho do próximo ponto (incluindo desbloqueios de nível); um botão para adicionar ponto. Só a lista rola.",
            "Aba Status em dois painéis: Manual de Magia com dados do personagem à esquerda; Livro de Magias Proibidas com bônus e passivas ativas à direita.",
            "No controle, LB/RB trocam as abas; o D-pad navega a lista e o painel de detalhe.",
            "A janela do RPG Skills fecha sozinha quando o menu de pause (ESC) abre."
          ]
        },
        {
          "heading": "Agradecimentos",
          "items": [
            "Ideias trazidas por [url=https://steamcommunity.com/id/megafrigaa]MegaFriga foram ajustadas e aperfeiçoadas para a nova interface do RPG Skills (abas Status e Classes)."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Ajuste fino na progressão de armadilhas (Mestre das Armadilhas): a lógica de dano e proteção de aliados ficou isolada e testada de forma mais segura.",
            "Preferências da janela de status e da barra de XP separadas das regras de nível — evita misturar configuração de interface com progressão.",
            "World Stack: pergaminhos de encantamento diferentes não se misturam mais ao organizar o inventário (só empilham se forem o mesmo encantamento).",
            "Mestre das Relíquias: slots extras não encolhem sozinhos no meio do jogo; ao reduzir slots de propósito, amuletos de todos os presets são recuperados em vez de sumirem.",
            "Textos que estavam fixos em português (bônus de classes, avisos de mineração avançada, nomes de auras) passam pelos arquivos de idioma; adicionado suporte base para coreano."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "Continua compatível com o Necesse <strong>1.3.1</strong>.",
            "<strong>Prioridade máxima:</strong> deixe o RPG Skills no topo da lista de mods (acima de todos os outros)."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Quality of life",
          "items": [
            "The game automatically keeps up to 5 copies of your inventory and equipment every 10 minutes while you are online.",
            "Use <strong>/rpgskills restore inventory</strong> to return to the newest copy, or <strong>/rpgskills restore inventory list</strong> to see the saved dates.",
            "Classes tab redesigned: left list with game item icons and level; on the right, current bonuses, an arrow, and what you gain with the next point (including level unlocks); one button to add a point. Only the list scrolls.",
            "Status tab split in two panels: Magic Manual with character info on the left; Forbidden Spellbook with active bonuses and passives on the right.",
            "On controller, LB/RB switch tabs; the D-pad navigates the list and detail panel.",
            "The RPG Skills window closes automatically when the pause menu (ESC) opens."
          ]
        },
        {
          "heading": "Thanks",
          "items": [
            "Ideas from [url=https://steamcommunity.com/id/megafrigaa]MegaFriga were refined and shaped into the new RPG Skills UI (Status and Classes tabs)."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Trap Master damage/ally protection logic is isolated and tested more safely.",
            "Status window and XP bar preferences are separated from level rules — UI settings no longer mix with progression.",
            "World Stack: different enchantment scrolls no longer merge when sorting inventory (they only stack if they share the same enchantment).",
            "Relic Master: extra trinket slots no longer shrink on their own mid-game; when slots are reduced on purpose, trinkets from every equipment preset are recovered instead of vanishing.",
            "Player-facing strings that were hardcoded in Portuguese (class bonus text, advanced vein mining notices, aura names) now use language files; basic Korean locale support added."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "Still compatible with Necesse <strong>1.3.1</strong>.",
            "<strong>Maximum priority:</strong> keep RPG Skills at the top of your mod list (above every other mod)."
          ]
        }
      ],
      "note": ""
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
          "heading": "Compatibilidade",
          "items": [
            "Continua compatível com o Necesse <strong>1.3.1</strong>.",
            "<strong>Prioridade máxima:</strong> deixe o RPG Skills no topo da lista de mods (acima de todos os outros). Isso evita conflito de idioma, patches e lojas de colonos."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Abrir a loja do <strong>Mago</strong> (e outras lojas de colonos com itens especiais) não deve mais fechar o jogo com erro de gerador de item incompatível.",
            "Conferência dos arquivos de idioma: as traduções do mod seguem o idioma escolhido no jogo; o português do Brasil só entra quando o jogo está em pt-BR."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Compatibility",
          "items": [
            "Still compatible with Necesse <strong>1.3.1</strong>.",
            "<strong>Maximum priority:</strong> keep RPG Skills at the top of your mod list (above every other mod). This avoids language conflicts, patch clashes, and settler shop issues."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Opening the <strong>Mage</strong> shop (and other settler shops with special items) should no longer crash from an incompatible shop item generator.",
            "Language files checked: the mod follows the language selected in-game; Brazilian Portuguese overlays only apply when the game language is pt-BR."
          ]
        }
      ],
      "note": ""
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
          "heading": "Compatibilidade",
          "items": [
            "Compatível com o Necesse <strong>1.3.1</strong> (atualização de manutenção do Rust & Romance).",
            "Continua funcionando com o conteúdo da <strong>1.3.0</strong>; hosts/servidores precisam estar na 1.3.1 junto com o jogo."
          ]
        },
        {
          "heading": "O que mudou no jogo (e no mod)",
          "items": [
            "A 1.3.1 do Necesse traz ajustes de balance (abelhas/Hive Scepter, Pyromancy, dano de raiders), correções de crash de settlers/personalidades e melhorias de Story Objectives — tudo isso é do jogo base.",
            "O RPG Skills <strong>não</strong> copia essas armas nem o sistema de Story Objectives; a progressão, classes, settlement e XP seguem como na 2.0.",
            "Confirmação de compat: hooks críticos e assinaturas validados contra o Necesse 1.3.1."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Compatibility",
          "items": [
            "Compatible with Necesse <strong>1.3.1</strong> (Rust & Romance maintenance update).",
            "Still works with <strong>1.3.0</strong> content; hosts/servers should update to 1.3.1 with the game."
          ]
        },
        {
          "heading": "What changed in the game (and in the mod)",
          "items": [
            "Necesse 1.3.1 brings balance tweaks (bee/Hive Scepter, Pyromancy, raider damage), settler/personality crash fixes, and Story Objective improvements — all base-game.",
            "RPG Skills does <strong>not</strong> copy those weapons or Story Objectives; progression, classes, settlement, and XP stay as in 2.0.",
            "Compatibility confirmed: critical hooks and signatures validated against Necesse 1.3.1."
          ]
        }
      ],
      "note": ""
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
          "heading": "Compatibilidade",
          "items": [
            "Continua compatível com o Necesse <strong>1.3.0</strong> (Rust & Romance)."
          ]
        },
        {
          "heading": "Novidades",
          "items": [
            "<strong>Mestre dos Reinos nível 5</strong>: força Qualidade de Vida Unrivaled nos colonos, bloqueia greve por humor e triplica o XP das tarefas do assentamento (com limite por minuto).",
            "Settlers com <strong>6 ou mais personalidades</strong> rendem XP de settlement extra.",
            "A <strong>Aura de Liderança</strong> fica mais forte em colonos com personalidade de combate alinhada à sua classe (Warrior/Ranger/Magician/Summoner).",
            "A aba Status mostra o QoL médio do assentamento e se o compartilhamento de XP de time está ligado.",
            "A <strong>Floresta Carbonizada</strong> passa a ter XP de zona próprio (não conta mais como “outro bioma” genérico).",
            "O bioma de superfície do <strong>Scrapyard</strong> deixa de usar o mesmo XP da incursão Scrapyard (incursão continua mais forte).",
            "Colonos em <strong>recreation</strong> (olhar o mar, conversar, música, etc.) dão um pouco de XP de assentamento, com limite diário.",
            "Colonos <strong>Fastworker</strong> e <strong>Gardener</strong> aceleram expedições um pouco (com teto; Voyager continua só no efeito vanilla).",
            "Com <strong>Life Partner</strong> na party de aventura, dá para ligar um micro-bônus de XP de combate e regeneração (desligado por padrão no arquivo de config)."
          ]
        },
        {
          "heading": "Qualidade de vida",
          "items": [
            "Novas passivas informativas: Líder do Assentamento, Administração Rica e Especialista de Incursão.",
            "Recrutamento de especialistas e settlers resgatados concede mais XP de settlement.",
            "Filtro de baú reconhece melhor essências novas (cristal / radiada), Ascended Shards e dusts de altar/upgrade.",
            "Divorce Papers e Pretty Bouquet não recebem multiplicador de stack do mod (permanecem stack 1).",
            "Estações de Upgrade, Salvage e Transmutation não aplicam o multiplicador de stack do mod no contexto delas."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "A <strong>Mutant Hydra</strong> conta como boss no XP de combate; cabeça e pescoço não geram XP extra (um kill = um payout).",
            "Morte de summons/mounts seus (Makeshift, Junk Mech, abelhas, morcegos, etc.) não gera XP de combate ao dono.",
            "No <strong>controle</strong>, a janela do RPG Skills passa a focar direito os botões de stack e os toggles de passivas/ativas na Loja (o D-pad não troca de aba no meio quando um desses botões está focado)."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 2.0 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Compatibility",
          "items": [
            "Still compatible with Necesse <strong>1.3.0</strong> (Rust & Romance)."
          ]
        },
        {
          "heading": "What's new",
          "items": [
            "<strong>Realm Master level 5</strong>: forces Unrivaled quality of life on colonists, blocks mood strikes, and triples settlement task XP (with a per-minute cap).",
            "Settlers with <strong>6+ personalities</strong> grant extra settlement XP.",
            "<strong>Leadership Aura</strong> is stronger on colonists whose combat personality matches your class (Warrior/Ranger/Magician/Summoner).",
            "The Status tab shows average settlement QoL and whether team XP sharing is on.",
            "The <strong>Charred Forest</strong> now has its own zone XP (no longer treated as a generic “other” surface).",
            "Scrapyard <strong>surface</strong> biome XP is no longer the same as Scrapyard <strong>incursion</strong> XP (incursion stays stronger).",
            "Colonists doing <strong>recreation</strong> (gazing, chatting, music, etc.) grant a little settlement XP, with a daily cap.",
            "<strong>Fastworker</strong> and <strong>Gardener</strong> colonists speed up expeditions a bit (capped; Voyager stays vanilla-only).",
            "With a <strong>Life Partner</strong> in the adventure party, you can enable a tiny combat XP and regen bonus (off by default in the config file)."
          ]
        },
        {
          "heading": "Quality of life",
          "items": [
            "New informational passives: Settlement Leader, Rich Administration, and Incursion Specialist.",
            "Recruiting specialists and rescued settlers grants more settlement XP.",
            "Chest filters better recognize new essences (crystal / radiated), Ascended Shards, and altar/upgrade dusts.",
            "Divorce Papers and Pretty Bouquet are not multiplied by the mod stack upgrade (stay stack 1).",
            "Upgrade, Salvage, and Transmutation stations do not apply the mod stack multiplier in their station context."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "<strong>Mutant Hydra</strong> counts as a combat XP boss; head/neck parts no longer grant extra XP (one kill = one payout).",
            "Death of your own summons/mounts (Makeshift, Junk Mech, bees, bats, etc.) no longer grants combat XP to the owner.",
            "On <strong>controller</strong>, the RPG Skills window now properly focuses stack buttons and passive/active toggles on the Shop tab (D-pad no longer switches tabs while one of those buttons is focused)."
          ]
        }
      ],
      "note": ""
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
          "heading": "Compatibilidade",
          "items": [
            "Compatível com o Necesse <strong>1.3.0</strong> (atualização Rust & Romance).",
            "Ajustes internos para o mod continuar funcionando com as mudanças de assentamento e de loja do jogo.",
            "Textos novos do Necesse 1.3.0 que ainda estavam em inglês no pt-BR do jogo (pets de incursão, romance, personalidades, qualidade de vida, newsletter e mais) passam a aparecer em português pelo RPG Skills — inclusive menus que usam LocalMessage (como Assinar a Newsletter)."
          ]
        },
        {
          "heading": "Novidades",
          "items": [
            "No multijogador, o <strong>XP de combate</strong> é compartilhado com o seu <strong>time</strong> quando vocês estão no <strong>mesmo mapa</strong> e <strong>perto um do outro</strong> (padrão: 24 tiles). Se a invocação (ou o golpe) de um jogador mata o inimigo, os outros do time próximos também ganham XP.",
            "Dá para <strong>ligar ou desligar</strong> esse compartilhamento e <strong>ajustar o raio</strong> no arquivo de configuração de progressão do mod.",
            "Cada jogador do time recebe o XP calculado para o <strong>próprio nível</strong> (e o próprio buff de XP, se tiver).",
            "Quem não está em time, está longe, ou está em outro mapa/ilha, continua ganhando XP só das próprias kills."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "A mensagem de boas-vindas passa a mostrar a <strong>versão correta</strong> do mod (em vez de ficar em 1.0).",
            "Os ícones de filtro do baú voltam a aparecer normalmente (sem o quadrado vermelho).",
            "O piso de felicidade do <strong>Mestre dos Reinos</strong> volta a ser aplicado corretamente nos settlers (o jogo mudou a forma de calcular felicidade).",
            "Descontos de loja/expedição do assentamento voltam a ser aplicados na abertura do menu do settler.",
            "XP de combate na nova incursion <strong>Scrapyard</strong> deixa de ser tratado como se fosse a Caverna de Slime.",
            "A Floresta Carbonizada (Charred Forest) deixa de ser contada como floresta comum no cálculo de XP de zona."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.9.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Compatibility",
          "items": [
            "Compatible with Necesse <strong>1.3.0</strong> (Rust & Romance update).",
            "Internal fixes so the mod keeps working with settlement and settler shop changes in the base game.",
            "New Necesse 1.3.0 strings that were still English in the game's pt-BR (incursion pets, romance, personalities, quality of life, newsletter, and more) now show in Portuguese through RPG Skills — including LocalMessage menus (such as Subscribe to Newsletter)."
          ]
        },
        {
          "heading": "What's new",
          "items": [
            "In multiplayer, <strong>combat XP</strong> is shared with your <strong>team</strong> when you are on the <strong>same map</strong> and <strong>near each other</strong> (default: 24 tiles). If one player's summon (or hit) gets the kill, nearby teammates also gain XP.",
            "You can <strong>turn this sharing on/off</strong> and <strong>change the radius</strong> in the mod progression config file.",
            "Each teammate gets XP calculated for their <strong>own level</strong> (and their own XP buff, if any).",
            "Players not on a team, too far away, or on a different map/island, still only get XP from their own kills."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "The welcome message now shows the <strong>correct mod version</strong> (instead of staying stuck on 1.0).",
            "Chest filter icons show normally again (no red error square).",
            "The <strong>Realm Master</strong> happiness floor applies correctly to settlers again (the game changed how happiness is calculated).",
            "Settlement shop/expedition discounts apply again when opening a settler menu.",
            "Combat XP in the new <strong>Scrapyard</strong> incursion is no longer treated like the Slime Cave.",
            "The Charred Forest is no longer counted as a normal forest for zone XP."
          ]
        }
      ],
      "note": ""
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
          "heading": "Correções",
          "items": [
            "Corrigido o <strong>controle</strong> e o atalho de abrir/fechar a janela do RPG Skills: o combo <strong>LB+RB</strong> e a tecla configurada (padrão <strong>K</strong>) voltam a responder de forma estável, sem depender da barra de XP estar ativa.",
            "Com a janela aberta no controle, o <strong>D-pad</strong> troca de aba quando nenhum botão está em foco, <strong>B/Circle</strong> fecha, <strong>A/Cross</strong> confirma o botão em foco e, na aba Loja, <strong>A/X/Y</strong> e <strong>RB</strong> continuam como atalhos rápidos de compra quando nenhum botão está em foco.",
            "Os ombros e o D-pad do jogo base deixam de ficar “presos” pelos atalhos do mod; a limpeza dos binds do controle é refeita quando um controle conecta no meio da sessão.",
            "Atalhos de teclado da loja, minerador de veios avançado, minerador explosivo e reforço de luz continuam ativos no modo teclado/mouse e continuam desligados enquanto o controle está em uso, para não conflitar com o jogo.",
            "<strong>/rpgskills help</strong> volta a mostrar a lista de comandos. Em multiplayer, <strong>set level</strong>, <strong>maxskills</strong> e <strong>reset zero</strong> exigem permissão de admin; <strong>reset points</strong> continua disponível ao jogador (com custo em moedas quando aplicável).",
            "Fechado um atalho que permitia maximizar nível e classes sem ser admin."
          ]
        },
        {
          "heading": "Qualidade de vida",
          "items": [
            "Com <strong>duas ou mais</strong> classes de debuff ativas no mesmo inimigo, o número azul de dano mostra a <strong>soma total</strong> em vez de vários números separados na tela. Com só um debuff de classe, o visual continua igual.",
            "A aba <strong>Classes</strong> voltou a mostrar a descrição completa ao passar o mouse no nome da classe (e no botão <strong>+</strong>), e o grid ficou mais compacto e legível."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.9.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Fixes",
          "items": [
            "Fixed <strong>controller</strong> and hotkey open/close for the RPG Skills window: the <strong>LB+RB</strong> combo and the bound key (default <strong>K</strong>) respond reliably again, without depending on the XP bar being active.",
            "With the window open on a controller, the <strong>D-pad</strong> switches tabs when no button is focused, <strong>B/Circle</strong> closes, <strong>A/Cross</strong> confirms the focused button, and on the Shop tab <strong>A/X/Y</strong> and <strong>RB</strong> remain quick-buy shortcuts when no button is focused.",
            "Base-game shoulders and D-pad no longer get stuck on mod shortcuts; controller bind cleanup runs again when a controller connects mid-session.",
            "Keyboard hotkeys for the shop, advanced vein miner, explosive miner, and light boost stay active in mouse/keyboard mode and stay disabled while a controller is in use, to avoid conflicts with the base game.",
            "<strong>/rpgskills help</strong> shows the command list again. In multiplayer, <strong>set level</strong>, <strong>maxskills</strong>, and <strong>reset zero</strong> require admin permission; <strong>reset points</strong> stays available to players (with the coin cost when applicable).",
            "Closed a shortcut that let players max level and classes without admin permission."
          ]
        },
        {
          "heading": "Quality of life",
          "items": [
            "With <strong>two or more</strong> debuff classes active on the same enemy, the blue damage number shows the <strong>combined total</strong> instead of several separate numbers on screen. With only one class debuff, the visual stays the same.",
            "The <strong>Classes</strong> tab shows the full class description again when you hover the class name (and the <strong>+</strong> button), and the grid is more compact and readable."
          ]
        }
      ],
      "note": ""
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
          "heading": "Novidades",
          "items": [
            "Arquivo de configuração de progressão: ajuste multiplicador global de XP, XP fixo do mundo, pena de morte, curva de nível, nível máximo, pontos por classe e custos de reset (pasta de settings do mod).",
            "Arquivo de configuração de classes: ligue ou desligue classes; as desligadas <strong>não aparecem</strong> no jogo, não recebem pontos novos e não dão bônus.",
            "A passiva <strong>Mestre das Classes</strong> considera só as <strong>classes ativas</strong> (as que estão ligadas na config)."
          ]
        },
        {
          "heading": "Qualidade de vida",
          "items": [
            "Janela do RPG Skills com layout mais limpo: menos cortes na lista de classes, scroll mais estável ao trocar de aba e loja com altura correta."
          ]
        },
        {
          "heading": "Estabilidade",
          "items": [
            "Proteção reforçada contra o bug em que <strong>aprender uma classe</strong> podia fazer inimigos causarem só 1 de dano.",
            "Proteção reforçada para <strong>debuffs de classe</strong> em <strong>Cavernídeos</strong> (caçáveis e não hostis).",
            "Saves de progresso, slots de bugigangas e sincronização entre jogadores ficaram mais seguros e consistentes.",
            "Em multiplayer, ao <strong>sair e entrar de novo</strong>, classes, buff de XP, maestria e slots de bugigangas voltam iguais ao servidor.",
            "Bônus de classe, debuffs e passivas passam por validação mais rígida, reduzindo drift silencioso de fórmulas.",
            "A passiva <strong>Mestre das Classes</strong> continua alcançável no nível máximo (todas as classes ativas no limite).",
            "Resistências elementais, DOT/burst e combinações de várias classes ativas ficaram mais consistentes.",
            "Ações pela rede (gastar pontos, reset, compras e maxskills) ficam mais protegidas contra pedidos inválidos ou de outro jogador.",
            "Comandos administrativos sensíveis exigem permissão de admin quando for o caso, com rejeição clara para quem não pode usar.",
            "Mais proteção automática contra quebras silenciosas após atualizações do jogo (hooks e itens críticos).",
            "Slots de bugigangas do jogo base (incluindo itens que sobem o total) continuam separados do bônus do RPG Skills no save e no reload."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "Compatibilidade confirmada com <strong>Safe Haven QOL 1.2.0-2.6</strong>: menus e tooltips em <strong>pt-BR</strong>, e o <strong>stack size</strong> do RPG Skills continua mandando sem briga com cosméticos/trinkets do Safe Haven."
          ]
        },
        {
          "heading": "Desempenho",
          "items": [
            "Vein mining em área grande, organizar inventário cheio e jogar com <strong>todas as classes no máximo</strong> ficaram mais estáveis, sem travadinhas óbvias no uso normal."
          ]
        },
        {
          "heading": "Qualidade",
          "items": [
            "O mod passa por validação automática antes de cada atualização, reduzindo o risco de regressões silenciosas.",
            "Mais testes cobrindo save/load, migração de dados e pacotes de rede.",
            "Mais testes automáticos de combate, progressão, pesca, settlement, produção e exploração.",
            "Contrato canônico reforçado: total de classes, pontos e nível máximo não podem divergir sem falhar no CI.",
            "Mais validação automática de pacotes, comandos e sincronização entre cliente e servidor.",
            "Menos risco de estado impossível (como pontos negativos ou gasto sem saldo) passar despercebido.",
            "Organização interna do código reforçada para facilitar manutenção e reduzir regressões em atualizações futuras.",
            "Processo de atualização e checklist de qualidade mais claros antes de cada publicação (incluindo host + client e compatibilidade com outros mods)."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.9.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "New",
          "items": [
            "Progression config file: tune global XP multiplier, fixed world XP, death penalty, level curve, max level, points per class, and respec costs (mod settings folder).",
            "Class config file: enable or disable classes; disabled ones <strong>do not appear</strong> in-game, accept no new points, and grant no bonuses.",
            "The <strong>Master of Classes</strong> passive only checks <strong>enabled classes</strong>."
          ]
        },
        {
          "heading": "Quality of life",
          "items": [
            "Cleaner RPG Skills window layout: less clipping in the class list, more stable scroll when switching tabs, and a correctly sized shop panel."
          ]
        },
        {
          "heading": "Stability",
          "items": [
            "Stronger protection against the bug where <strong>learning a class</strong> could make enemies deal only 1 damage.",
            "Stronger protection so <strong>class debuffs</strong> also apply to <strong>Cavelings</strong> (huntable, non-hostile).",
            "Progress saves, trinket slot tracking, and player sync are more reliable and consistent.",
            "In multiplayer, after <strong>disconnect and reconnect</strong>, classes, XP buff, mastery, and trinket slots match the server again.",
            "Class bonuses, debuffs, and passives now go through stricter validation, reducing silent formula drift.",
            "The <strong>Master of Classes</strong> passive remains reachable at max level (all enabled classes maxed).",
            "Elemental resistances, DOT/burst, and multi-class combinations are more consistent.",
            "Network actions (spending points, resets, purchases, and maxskills) are better protected against invalid or spoofed requests.",
            "Sensitive admin commands require admin permission where applicable, with a clear rejection for players who cannot use them.",
            "Stronger automatic protection against silent breakage after game updates (hooks and critical items).",
            "Base-game trinket slots (including items that raise the total) stay separated from the RPG Skills bonus across save and reload."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "Confirmed compatibility with <strong>Safe Haven QOL 1.2.0-2.6</strong>: menus and tooltips in <strong>pt-BR</strong>, and RPG Skills <strong>stack size</strong> still takes priority without fighting Safe Haven cosmetics/trinkets."
          ]
        },
        {
          "heading": "Performance",
          "items": [
            "Large-area vein mining, sorting a full inventory, and playing with <strong>all classes maxed</strong> feel more stable, without obvious hitching in normal use."
          ]
        },
        {
          "heading": "Quality",
          "items": [
            "The mod now goes through automatic validation before each update, reducing silent regressions.",
            "More coverage for save/load, data migration, and network packets.",
            "More automated tests for combat, progression, fishing, settlements, production, and exploration.",
            "Stronger canonical contract: class count, points, and max level cannot drift without failing CI.",
            "More automated validation of packets, commands, and client/server sync.",
            "Lower risk of impossible states (like negative points or spending without balance) slipping through.",
            "Stronger internal code organization to ease maintenance and reduce regressions in future updates.",
            "Clearer update process and quality checklist before each publication (including host + client and third-party mod compatibility)."
          ]
        }
      ],
      "note": ""
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
          "heading": "Compatibilidade",
          "items": [
            "<strong>Safe Haven QOL 1.2:</strong> atualizadas as traduções embutidas (menu, flags novas, filtro de lixo, proteção da base, busca de itens, rastreador de missões e tooltips), com <strong>pt-BR</strong> completo."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.9.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Compatibility",
          "items": [
            "<strong>Safe Haven QOL 1.2:</strong> refreshed the bundled locale strings (menu, new flags, trash filter, base protection, item finder, quest tracker, and tooltips), with full <strong>pt-BR</strong>."
          ]
        }
      ],
      "note": ""
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
          "heading": "Correções",
          "items": [
            "Debuffs de classe (sangramento, fogo, veneno, gelo, etc.) agora também aplicam nos <strong>Cavernídeos</strong>, que no jogo não são hostis mas são caçáveis.",
            "Corrigido bug em que aprender qualquer classe fazia <strong>inimigos causarem só 1 de dano</strong>: ao atualizar o buff de bônus, o modificador de dano recebido era zerado (x0) em vez de voltar ao valor normal (x1)."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.9 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Fixes",
          "items": [
            "Class debuffs (bleed, fire, poison, frost, etc.) now also apply to <strong>Cavelings</strong>, which are non-hostile but huntable in the base game.",
            "Fixed a bug where learning any class made <strong>enemies deal only 1 damage</strong>: when refreshing the class bonus buff, incoming damage was cleared to x0 instead of the normal x1 identity."
          ]
        }
      ],
      "note": ""
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
          "heading": "Correções",
          "items": [
            "Corrigido o piscar da <strong>Lanterna de fogo-fátuo</strong> e de trinkets que emitem luz: o mod deixou de reaplicar os buffs de equipamento em loop curto, o que fazia o item e a animação sumirem e voltarem perto do personagem.",
            "Luz de trinkets luminosos (como o <strong>Cinto brilhante</strong>) e o reforço da passiva <strong>Ruína da Escuridão</strong> agora só entram em ação quando o trinket está <strong>equipado e com buff ativo</strong>, não só por estar no inventário.",
            "Corrigido o <strong>Mestre das Relíquias</strong> dando slots de bugiganga a mais (ex.: 12 no primeiro ponto ou 255 após reset): o mod não absorve mais o bônus da classe como se fosse progressão vanilla.",
            "Corrigido reset/respec do Mestre das Relíquias removendo só 4 slots em vez do bônus inteiro quando o perfil estava inflado.",
            "Corrigido o uso de itens vanilla que aumentam slots de bugiganga (pendente, bainha, etc.) <strong>apagando acessórios equipados</strong>: o mod agora soma o bônus da classe ao alvo vanilla e recupera trinkets antes de encolher.",
            "Corrigido o alcance de coleta do Mestre das Relíquias <strong>continuar ativo após reset</strong> quando a classe volta a 0 pontos (o buff de classe agora zera o modificador em vez de manter o valor antigo).",
            "Corrigidos baús com slots <strong>inconsistentes em servidor dedicado</strong>: ao entrar no mundo, o cliente agora pede e recebe o nível real de slots do mundo antes de abrir ou encolher baús (evita perda de itens por tamanho errado).",
            "Corrigido <strong>rubberband/lag</strong> em LAN e servidor dedicado quando os bônus de classe já estavam estáveis: o mod deixou de reenviar pacotes de vida e mana sem necessidade."
          ]
        },
        {
          "heading": "Qualidade de vida",
          "items": [
            "Novo atalho configurável para <strong>ligar/desligar o reforço de luz</strong> de trinkets luminosos (Cinto brilhante, Lanterna de fogo-fátuo, etc.). Com o reforço desligado, vale a luz padrão do jogo; com ele ligado, o mod aplica o alcance e a intensidade reforçados (incluindo o bônus da Ruína da Escuridão). Defina a tecla em Controles do jogo."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "<strong>Suporte a controle</strong> na janela de skills: segure <strong>LB+RB</strong> para abrir/fechar; com a janela aberta use o <strong>D-pad</strong> para trocar abas e navegar, <strong>A/Cross</strong> para confirmar e <strong>B/Circle</strong> para fechar. Na aba Loja, <strong>A/X/Y</strong> compram bônus de XP e <strong>RB</strong> compra mineração explosiva.",
            "Atalhos de teclado para compras na loja continuam só com mouse/teclado; com controle ativo eles ficam desativados para não conflitar com o jogo."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.8 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Fixes",
          "items": [
            "Fixed flickering on the <strong>Will-o'-wisp lantern</strong> and other light-emitting trinkets: the mod no longer reapplies equipment buffs in a tight loop, which made the item and its animation blink near your character.",
            "Light from luminous trinkets (such as the <strong>Shine belt</strong>) and the <strong>Dark Ruin</strong> passive boost now only apply when the trinket is <strong>equipped with an active buff</strong>, not merely present in inventory.",
            "Fixed <strong>Relic Master</strong> granting too many trinket slots (e.g. 12 on the first point or 255 after reset): the mod no longer treats class bonus slots as vanilla baseline growth.",
            "Fixed Relic Master reset/respec only removing 4 slots instead of the full bonus when the profile baseline was inflated.",
            "Fixed vanilla trinket slot upgrade items <strong>deleting equipped accessories</strong>: the mod now adds the class bonus on top of the vanilla target and recovers trinkets before shrinking.",
            "Fixed Relic Master pickup range <strong>staying active after reset</strong> when the class returns to 0 points (the class buff now clears the modifier instead of keeping the old value).",
            "Fixed <strong>inconsistent chest slots on dedicated servers</strong>: joining a world now requests and applies the real world chest level before opening or shrinking chests (prevents item loss from wrong sizes).",
            "Fixed <strong>rubberband/lag</strong> in LAN and dedicated multiplayer when class bonuses were already stable: the mod no longer resends health and mana packets unnecessarily."
          ]
        },
        {
          "heading": "Quality of life",
          "items": [
            "New configurable hotkey to <strong>toggle the light boost</strong> for luminous trinkets (Shine belt, Will-o'-wisp lantern, etc.). With the boost off, vanilla light applies; with it on, the mod uses its reinforced range and intensity (including Dark Ruin). Bind the key in the game Controls menu."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "<strong>Controller support</strong> in the skills window: hold <strong>LB+RB</strong> to open/close; with the window open use the <strong>D-pad</strong> to switch tabs and navigate, <strong>A/Cross</strong> to confirm, and <strong>B/Circle</strong> to close. On the Shop tab, <strong>A/X/Y</strong> buy XP boosts and <strong>RB</strong> buys explosive mining.",
            "Keyboard shop hotkeys remain mouse/keyboard only; they are disabled while using a controller to avoid conflicts with the base game."
          ]
        }
      ],
      "note": ""
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
          "heading": "Qualidade de vida",
          "items": [
            "Debuffs elementais: blobs roxo/verde do vanilla removidos; partículas coloridas por tipo (fogo laranja, veneno verde, gelo azul, pesadelo roxo, sangue vermelho) pulsam continuamente enquanto o debuff durar e param ao acabar; dano DoT em <strong>números azuis</strong>.",
            "DoTs de classe agora passam pelo sistema de dano do jogo, exibindo <strong>números azuis</strong> para diferenciar do dano direto, e contando no boneco de treino (DPS Dummy).",
            "Debuffs de classe passam a funcionar no <strong>boneco de treino</strong>: ao acertar, o debuff é aplicado e o dano contínuo aparece em azul, separado do dano normal do ataque.",
            "Removido dano duplicado dos debuffs vanilla (ex.: sangramento vermelho) — só o DoT do mod escala com a classe e usa feedback azul.",
            "Debuffs elementais voltam a acumular duração ao bater de novo no alvo, até o limite máximo já usado pelo mod.",
            "Roubo de vida, cura ao matar e outras curas diretas do mod mostram um texto verde com o valor recuperado.",
            "O indicador interno de DoT do mod ficou visível na barra de buffs, para saber quando o efeito ainda está ativo."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "Com Safe Haven QOL instalado, o RPG Skills passa a incluir as traduções desse mod: menu, flags, economia, grade de construção e demais textos aparecem no idioma do jogo (com pt-BR completo; demais idiomas usam inglês como base)."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Corrigido DoTs de classes diferentes se substituírem no mesmo alvo: sangramento, queimadura, veneno, gelo e escuridão agora acumulam separados (ex.: cinco classes no 5 = até 125/s de dano azul).",
            "Corrigido spam de DPS no boneco de treino: dano contínuo de debuffs agora entra no medidor vanilla (1 leitura por segundo) em vez de gerar vários números azuis e várias contagens separadas.",
            "Compatibilidade Safe Haven QOL 1.2: desativa automaticamente stacks de cosméticos e trinkets desse mod (além de pergaminhos, summons e moedas), para o RPG Skills continuar mandando no stack size.",
            "Corrigido um caso em que debuffs e DoTs não renovavam duração em hits seguintes, mesmo quando o efeito ainda estava ativo."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.7 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Quality of life",
          "items": [
            "Class debuffs: vanilla blob particles removed; color-coded particles (orange fire, green poison, blue frost, purple nightmare, red bleed) pulse continuously while the debuff lasts and stop when it ends; DoT damage in <strong>blue numbers</strong>.",
            "Class DoTs now go through the game's damage system, showing <strong>blue numbers</strong> to tell them apart from direct damage, and counting on the training dummy (DPS Dummy).",
            "Class debuffs now work on the <strong>training dummy</strong>: hits apply the debuff and ongoing damage shows in blue, separate from normal attack damage.",
            "Removed duplicate vanilla debuff damage (e.g. red bleed ticks) — only the mod's class-scaled DoT runs, with blue feedback.",
            "Elemental debuffs stack duration again when you hit the same target, up to the mod's existing maximum.",
            "Lifesteal, kill heals, and other direct mod heals show green floating text with the amount recovered.",
            "The mod's internal DoT indicator is now visible on the buff bar so you can tell when the effect is still running."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "With Safe Haven QOL installed, RPG Skills now bundles that mod's locale strings: menus, flags, economy, build grid, and other UI text follow your game language (full pt-BR; other languages fall back to English)."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Fixed class DoTs of different types replacing each other on the same target: bleed, burn, poison, frost, and darkness now stack separately (e.g. five classes at 5 = up to 125/s blue damage).",
            "Fixed DPS spam on the training dummy: debuff DoT now feeds the vanilla DPS meter (one reading per second) instead of spawning many blue numbers and separate counts.",
            "Safe Haven QOL 1.2 compatibility: automatically disables that mod's cosmetic and trinket stacks (along with scrolls, summons, and coins) so RPG Skills remains stack-size authority.",
            "Fixed a case where debuffs and DoTs did not refresh their duration on later hits, even while the effect was still active."
          ]
        }
      ],
      "note": ""
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
          "heading": "Compatibilidade",
          "items": [
            "Melhorada a compatibilidade com [url=https://steamcommunity.com/sharedfiles/filedetails/?id=3739062775]Settler Leader Buffs Share.",
            "Colonos agora podem receber uma versão segura dos bônus de classe do líder, sem copiar efeitos feitos apenas para o jogador."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Corrigido um problema em que efeitos passivos do jogador podiam ser reavaliados com frequência demais durante a atualização dos bônus de classe.",
            "Companheiros utilitários, como o Wisp que revela armadilhas, não devem mais ficar desaparecendo e reaparecendo durante o jogo.",
            "O RPG Skills agora evita reenviar o mesmo bônus de classe quando nada mudou no personagem.",
            "Corrigido um travamento crítico ao colocar o primeiro ponto no Mestre das Relíquias.",
            "O bônus de slots do Mestre das Relíquias não deve mais se aplicar várias vezes em sequência e criar espaços demais para bugigangas.",
            "Corrigido um caso em que o mod podia mostrar textos em português ou espanhol para jogadores usando outro idioma. Agora o fallback padrão é inglês.",
            "A descrição no menu de mods agora fica em inglês para ser legível para mais jogadores."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.6 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Compatibility",
          "items": [
            "Improved compatibility with [url=https://steamcommunity.com/sharedfiles/filedetails/?id=3739062775]Settler Leader Buffs Share.",
            "Settlers can now receive a safe version of the leader's class bonuses, without copying effects that are meant only for the player."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Fixed an issue where player passive effects could be checked too often while class bonuses were being updated.",
            "Utility companions, such as the trap-revealing Wisp, should no longer disappear and reappear during gameplay.",
            "RPG Skills now avoids resending the same class bonus when nothing changed on the character.",
            "Fixed a critical freeze when placing the first point into Relic Master.",
            "Relic Master's trinket slot bonus should no longer apply several times in a row and create too many trinket slots.",
            "Fixed a case where the mod could show Portuguese or Spanish text to players using another language. The default fallback is now English.",
            "The mod menu description is now in English so more players can read it."
          ]
        }
      ],
      "note": ""
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
          "heading": "Correções",
          "items": [
            "Melhorada a restauração dos slots de bugigangas quando o nível ou os pontos do RPG Skills são resetados.",
            "O mod agora reconhece melhor os slots de bugigangas aplicados pelo próprio jogo e por outros mods, evitando que a quantidade fique presa em um valor menor.",
            "Corrigido um caso em que o comando maxskills podia criar slots de bugigangas demais.",
            "Corrigido o reset de pontos e o reset do zero para remover corretamente os slots extras de bugigangas do RPG Skills.",
            "Os slots de bugigangas ganhos por itens do próprio Necesse agora ficam separados dos slots ganhos pelo Mestre das Relíquias.",
            "Melhorada a compatibilidade dos slots extras de baú com diferentes formas de criação dos baús vanilla.",
            "Corrigido o botão de organizar dos baús para juntar melhor stacks iguais nos slots extras."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "Adicionada compatibilidade com [url=https://steamcommunity.com/sharedfiles/filedetails/?id=3739062775]Settler Leader Buffs Share para compartilhar com colonos os bônus do RPG Skills que funcionam bem em NPCs.",
            "Marcada compatibilidade opcional com [url=https://steamcommunity.com/sharedfiles/filedetails/?id=3731244177]Safe Haven QOL."
          ]
        },
        {
          "heading": "Qualidade de vida",
          "items": [
            "Adicionada uma opção no arquivo de configuração para permitir mover a barra de XP do RPG Skills.",
            "Quando essa opção estiver ativada, a posição da barra de XP fica salva e não volta sozinha para o lugar automático.",
            "Os bônus de XP 2x, 5x e 10x da loja agora duram 10 minutos.",
            "Administradores agora podem definir ou remover o bônus de XP temporário pelo comando do RPG Skills, sem precisar editar arquivos do servidor manualmente.",
            "Adicionada uma opção no arquivo de configuração para ativar ou desativar a perda de XP ao morrer.",
            "Os arquivos de configuração do RPG Skills ficam em: %APPDATA%\\Necesse\\cfg\\mods\\rpgskills\\settings"
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.5 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Fixes",
          "items": [
            "Improved trinket slot restoration when RPG Skills level or points are reset.",
            "The mod now better recognizes trinket slots applied by the base game and other mods, preventing the slot count from getting stuck too low.",
            "Fixed a case where the maxskills command could create too many trinket slots.",
            "Fixed point reset and start from zero reset so they correctly remove RPG Skills extra trinket slots.",
            "Trinket slots gained from base Necesse items are now tracked separately from Relic Master slots.",
            "Improved extra chest slot compatibility with different vanilla chest creation paths.",
            "Fixed the chest organize button so matching stacks merge better in extra chest slots."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "Added compatibility with [url=https://steamcommunity.com/sharedfiles/filedetails/?id=3739062775]Settler Leader Buffs Share to share RPG Skills bonuses that work well on NPCs with settlers.",
            "Marked optional compatibility with [url=https://steamcommunity.com/sharedfiles/filedetails/?id=3731244177]Safe Haven QOL."
          ]
        },
        {
          "heading": "Quality of Life",
          "items": [
            "Added a config file option to allow moving the RPG Skills XP bar.",
            "When that option is enabled, the XP bar position is saved and no longer snaps back to the automatic position.",
            "The 2x, 5x, and 10x XP shop buffs now last 10 minutes.",
            "Administrators can now set or clear the temporary XP buff through the RPG Skills command, without manually editing server files.",
            "Added a config file option to enable or disable XP loss on death.",
            "RPG Skills config files are stored at: %APPDATA%\\Necesse\\cfg\\mods\\rpgskills\\settings"
          ]
        }
      ],
      "note": ""
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
          "heading": "Qualidade de vida",
          "items": [
            "<strong>Controles:</strong> agora é possível abrir e fechar a janela do RPG Skills com o combo <strong>LB + RB</strong> no controle, sem precisar deixar a tela de equipamento aberta.",
            "Os botões LB e RB continuam livres para as ações normais do jogo quando usados separadamente."
          ]
        },
        {
          "heading": "Idiomas",
          "items": [
            "As traduções de alemão, espanhol, francês, italiano, japonês, holandês, polonês, russo e chinês simplificado foram revisadas para remover textos que ainda apareciam em inglês.",
            "A tradução chinesa foi completada para a interface, loja, classes, passivas, atributos, comandos e filtros de baú.",
            "O RPG Skills agora valida melhor os arquivos de idioma para evitar que uma tradução passe apenas por repetir o texto em inglês."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "Corrigido um problema em que jogadores usando controle podiam depender da tela de equipamento aberta para acessar atalhos do RPG Skills.",
            "O nível, XP e progresso de classes agora também são gravados no save do personagem, ajudando a manter o progresso ao trocar de dispositivo quando o save é sincronizado.",
            "Corrigida uma falha rara em que o Mestre das Relíquias podia voltar para 0 por um snapshot de progresso inconsistente, reduzindo slots de trinket e colocando itens equipados em risco.",
            "A reconciliação automática de slots de trinket agora nunca encolhe slots durante ticks normais; reduções de slots ficam restritas a reset/respec explícito.",
            "Compatibilidade com SafeHavenQOL/TorvianQOL 1.3: RPG Skills agora desativa os stacks alterados de pergaminhos de encantamento, itens de invocação de chefes e moedas desse mod para manter o sistema de stack do RPG Skills como autoridade."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.4 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Quality of Life",
          "items": [
            "<strong>Controls:</strong> you can now open and close the RPG Skills window with the <strong>LB + RB</strong> controller combo without keeping the equipment screen open.",
            "LB and RB remain available for the game's normal actions when pressed separately."
          ]
        },
        {
          "heading": "Languages",
          "items": [
            "German, Spanish, French, Italian, Japanese, Dutch, Polish, Russian, and Simplified Chinese translations were reviewed to remove text that was still appearing in English.",
            "The Chinese translation was completed for the interface, shop, classes, passives, attributes, commands, and chest filters.",
            "RPG Skills now validates language files more strictly so a translation cannot pass by only repeating the English text."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "Fixed an issue where controller players could depend on the equipment screen being open to access RPG Skills shortcuts.",
            "Level, XP, and class progress are now also stored in the character save, helping progress carry over between devices when the save is synced.",
            "Fixed a rare case where Relic Master could drop back to 0 from an inconsistent progress snapshot, reducing trinket slots and putting equipped items at risk.",
            "Automatic trinket slot reconciliation no longer shrinks slots during normal ticks; slot reductions are limited to explicit reset/respec actions.",
            "SafeHavenQOL/TorvianQOL 1.3 compatibility: RPG Skills now disables that mod's altered stacks for enchanting scrolls, boss-summon items, and coins so RPG Skills remains the stack-size authority."
          ]
        }
      ],
      "note": ""
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
          "heading": "Novidades",
          "items": [
            "<strong>Mestre das Armadilhas:</strong> nova classe com 5 níveis. Ela aumenta o dano das armadilhas dentro dos assentamentos, reduz o dano de armadilhas fora deles para jogadores e colonos, bloqueia esse dano dentro dos assentamentos e, no nível 5, aplica sangramento nos inimigos atingidos por armadilhas do assentamento.",
            "<strong>Mestre das Máquinas:</strong> nova classe com 5 níveis. Ela acelera todas as máquinas e faz o combustível durar mais em máquinas que usam combustível.",
            "<strong>Mestre da Natureza:</strong> nova classe com 5 níveis. Ela acelera plantações, árvores, árvores frutíferas, arbustos com frutinhas e cogumelos dentro dos assentamentos do jogador ou do time."
          ]
        },
        {
          "heading": "Qualidade de vida",
          "items": [
            "Cada nível tem tempos definidos para fornalha, prensa de queijo, composteira e moinho. No nível 5, todas elas processam em 2 segundos.",
            "O tronco usado na fornalha dura mais por nível: 80s, 120s, 240s, 360s e 600s.",
            "O crescimento da natureza nos assentamentos fica 25%, 50%, 75%, 100% e 300% mais rápido conforme o nível da classe.",
            "Mestre dos Reinos nível 5 agora libera Administração Eficiente: colonos trabalham mais rápido e expedições levam menos tempo.",
            "Baús expandidos agora têm um painel fixo de filtros por categoria ao lado da grade, ajudando a encontrar consumíveis, materiais, equipamentos e outros itens.",
            "Administradores agora podem ajustar diretamente o limite de slots de baús e o stack do mundo por comando."
          ]
        },
        {
          "heading": "Desempenho",
          "items": [
            "Organizar baús grandes agora fica mais leve, reduzindo travadas ao usar o botão ou atalho de organizar."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "O comando maxskills agora atualiza corretamente os bônus aplicados ao jogador, incluindo a tela de estatísticas.",
            "Jogadores com bônus de vida e mana máximas agora entram no mundo já com os valores cheios quando estavam cheios antes."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "Com o Torvians-QoL ativo, os tooltips de sementes, mudas e árvores frutíferas passam a mostrar o tempo de crescimento já considerando o bônus de Mestre da Natureza.",
            "Os itens do jogo que aumentam slots de acessórios agora funcionam corretamente junto com o bônus de Mestre das Relíquias.",
            "O RPG Skills adiciona correções de tradução pt-BR para textos do Necesse que ainda estavam em inglês na versão 1.2.0."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.3 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "New Features",
          "items": [
            "<strong>Trap Master:</strong> new 5-level class. It increases trap damage inside settlements, reduces trap damage outside settlements for players and colonists, blocks that damage inside settlements, and at level 5 makes settlement traps apply bleeding to enemies.",
            "<strong>Machine Master:</strong> new 5-level class. It speeds up all machines and makes fuel last longer in fueled machines.",
            "<strong>Nature Master:</strong> new 5-level class. It speeds up crops, trees, fruit trees, berry bushes, and mushrooms inside player or team settlements."
          ]
        },
        {
          "heading": "Quality of Life",
          "items": [
            "Each level has fixed times for forge, cheese press, compost bin, and grain mill. At level 5, all of them process in 2 seconds.",
            "Logs used in the forge last longer by level: 80s, 120s, 240s, 360s, and 600s.",
            "Nature growth inside settlements becomes 25%, 50%, 75%, 100%, and 300% faster by class level.",
            "Realm Master level 5 now unlocks Efficient Administration: colonists work faster and expeditions take less time.",
            "Expanded chests now have a fixed category filter panel beside the grid, making consumables, materials, equipment, and other items easier to find.",
            "Administrators can now directly adjust the chest slot limit and world stack by command."
          ]
        },
        {
          "heading": "Performance",
          "items": [
            "Sorting large chests is now lighter, reducing stutters when using the sort button or shortcut."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "The maxskills command now correctly updates the bonuses applied to the player, including the stats screen.",
            "Players with max health and max mana bonuses now enter the world already full when they were full before."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "With Torvians-QoL enabled, seed, sapling, and fruit tree tooltips now show growth times that include the Nature Master bonus.",
            "The game's trinket slot upgrade items now work correctly alongside the Relic Master bonus.",
            "RPG Skills adds pt-BR translation fixes for Necesse texts that were still in English in version 1.2.0."
          ]
        }
      ],
      "note": ""
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
          "heading": "Lançamento",
          "items": [
            "A atualização 1.2 está fechada e pronta para jogar."
          ]
        },
        {
          "heading": "Novidades",
          "items": [
            "<strong>Mestre Gourmet:</strong> nova classe com 5 níveis. Ela aumenta a duração dos buffs de comida em 25%, 50%, 75%, 100% e 300%; no nível 5, também ativa Barriga Sempre Cheia para comer automaticamente quando a fome fica abaixo de 95%.",
            "<strong>Mestre da Alquimia:</strong> nova classe com 5 níveis. Ela aumenta a duração dos buffs de poções e do Frasco Fedorento em 25%, 50%, 75%, 100% e 300%; no nível 5, também ativa Auto Poção para usar poções de vida automaticamente quando a vida fica baixa.",
            "<strong>Mestre do Rancho:</strong> nova classe com 5 níveis. Ela acelera domesticação, procriação e crescimento de filhotes; no nível 5, animais de rancho mortos na zona de criação dropam 5x mais itens.",
            "<strong>Nível máximo:</strong> aumentado para 150 para acomodar as novas classes.",
            "<strong>Aura de Liderança:</strong> nova passiva do Mestre dos Reinos no nível 5. Colonos recebem bônus de dano, vida, redução de dano e velocidade de movimento."
          ]
        },
        {
          "heading": "Qualidade de vida",
          "items": [
            "<strong>Envio rápido para baús:</strong> o raio para enviar itens do inventário aos baús e barris próximos foi aumentado e agora pode ser ajustado na configuração do RPG Skills."
          ]
        },
        {
          "heading": "Compatibilidade",
          "items": [
            "<strong>Torvians QOL:</strong> quando estiver instalado junto, o RPG Skills ajuda a criar e aplicar o arquivo de configuração dele na pasta de mods do Necesse.",
            "<strong>Torvians QOL 0.9:</strong> o RPG Skills agora completa opções novas do arquivo de configuração sem apagar escolhas já feitas."
          ]
        },
        {
          "heading": "Correções",
          "items": [
            "<strong>Mestre da Riqueza:</strong> Golpe de Ouro agora concede ouro ao acertar inimigos desde o primeiro nível da classe.",
            "O ouro por acerto aumenta com os níveis da classe, chegando a 50 ouro por acerto no nível 5.",
            "<strong>Montarias:</strong> corrigido um travamento que podia acontecer ao usar montarias enquanto o jogo atualizava bônus do personagem.",
            "<strong>Estabilidade:</strong> corrigido um travamento que podia acontecer quando a tela de status recebia dados do servidor durante o jogo."
          ]
        },
        {
          "heading": "Desempenho",
          "items": [
            "<strong>Menos travadas:</strong> reduzido trabalho repetido em segundo plano para evitar travadas e quedas fortes de FPS.",
            "<strong>Mestre do Rancho:</strong> reduzido o trabalho interno feito pelos animais de rancho para evitar pequenas travadas em mundos com muitos mobs."
          ]
        }
      ],
      "note": ""
    },
    "en": {
      "title": "🌟 Update 1.2 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Release",
          "items": [
            "Update 1.2 is closed and ready to play."
          ]
        },
        {
          "heading": "New Features",
          "items": [
            "<strong>Gourmet Master:</strong> new 5-level class. It increases food buff duration by 25%, 50%, 75%, 100%, and 300%; at level 5, it also activates Always Full Belly to automatically eat when hunger drops below 95%.",
            "<strong>Alchemy Master:</strong> new 5-level class. It increases potion buff duration and Stink Flask duration by 25%, 50%, 75%, 100%, and 300%; at level 5, it also activates Auto Potion to automatically use health potions when health gets low.",
            "<strong>Ranch Master:</strong> new 5-level class. It speeds up taming, breeding and baby growth; at level 5, ranch animals killed in the husbandry zone drop 5x more items.",
            "<strong>Max level:</strong> increased to 150 to support the new classes.",
            "<strong>Leadership Aura:</strong> new Realm Master passive at level 5. Colonists receive bonuses to damage, health, damage reduction and movement speed."
          ]
        },
        {
          "heading": "Quality of Life",
          "items": [
            "<strong>Quick stack to chests:</strong> the range for sending inventory items to nearby chests and barrels has been increased and can now be adjusted in the RPG Skills config."
          ]
        },
        {
          "heading": "Compatibility",
          "items": [
            "<strong>Torvians QOL:</strong> when installed alongside RPG Skills, RPG Skills helps create and apply its config file in the Necesse mods config folder.",
            "<strong>Torvians QOL 0.9:</strong> RPG Skills now completes new config options without erasing existing choices."
          ]
        },
        {
          "heading": "Fixes",
          "items": [
            "<strong>Wealth Master:</strong> Gold Strike now gives gold when hitting enemies starting from the first class level.",
            "Gold per hit increases with class levels, up to 50 gold per hit at level 5.",
            "<strong>Mounts:</strong> fixed a freeze that could happen when using mounts while the game updated character bonuses.",
            "<strong>Stability:</strong> fixed a freeze that could happen when the status screen received server data during gameplay."
          ]
        },
        {
          "heading": "Performance",
          "items": [
            "<strong>Fewer freezes:</strong> reduced repeated background work to avoid freezes and heavy FPS drops.",
            "<strong>Ranch Master:</strong> reduced the internal work done by ranch animals to avoid small freezes in worlds with many mobs."
          ]
        }
      ],
      "note": ""
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
          "heading": "Resumo",
          "items": [
            "<strong>Progressão:</strong> subir de nível agora pede mais XP. O nível 1 precisa de 10.000 XP, o nível 2 precisa de 20.000 XP, e assim por diante.",
            "<strong>Nível máximo:</strong> para sair do nível 134 e chegar ao nível 135, o jogador precisa de 1.350.000 XP.",
            "<strong>Reset de pontos:</strong> corrigido um problema em que moedas podiam ser consumidas mesmo quando o jogador não tinha moedas suficientes para resetar. O custo agora é simples: 1.000 moedas por nível do jogador.",
            "<strong>Loja:</strong> compras que usam moedas e itens ficaram mais seguras. Se faltar item no final da compra, as moedas não devem sumir por engano.",
            "<strong>Desempenho:</strong> o mod faz menos trabalho repetido durante o jogo, ajudando a reduzir travadas e lag sem mudar as regras das classes."
          ]
        },
        {
          "heading": "O que muda para o jogador",
          "items": [
            "A jornada até o nível máximo fica mais longa e mais estável.",
            "Resetar pontos continua cobrando moedas quando houver custo: um personagem no nível 25 paga 25.000 moedas, por exemplo. A cobrança só acontece quando puder ser feita corretamente.",
            "Comandos e botões do menu seguem as mesmas regras de segurança para moedas.",
            "Mundos e personagens antigos continuam funcionando."
          ]
        }
      ],
      "note": "<strong>Bom jogo!</strong>"
    },
    "en": {
      "title": "🌟 Update 1.1 - RPG Skills 🌟",
      "sections": [
        {
          "heading": "Summary",
          "items": [
            "<strong>Progression:</strong> leveling now asks for more XP. Level 1 needs 10,000 XP, level 2 needs 20,000 XP, and so on.",
            "<strong>Max level:</strong> to go from level 134 to level 135, the player needs 1,350,000 XP.",
            "<strong>Point reset:</strong> fixed an issue where coins could be consumed even when the player did not have enough coins to reset. The cost is now simple: 1,000 coins per player level.",
            "<strong>Shop:</strong> purchases that use both coins and items are safer. If an item is missing at the final step, coins should not disappear by mistake.",
            "<strong>Performance:</strong> the mod does less repeated work while playing, helping reduce stutters and lag without changing class rules."
          ]
        },
        {
          "heading": "What changes for players",
          "items": [
            "The road to max level is longer and steadier.",
            "Resetting points still charges coins when there is a cost: a level 25 character pays 25,000 coins, for example. The charge only happens when it can be completed correctly.",
            "Commands and menu buttons follow the same coin safety rules.",
            "Old worlds and characters keep working."
          ]
        }
      ],
      "note": "<strong>Have fun out there!</strong>"
    }
  },
  {
    "version": "1.0",
    "tag": "release",
    "tagClass": "major",
    "tagKey": "changelog.tag.release",
    "pt": {
      "title": "🌟 RPG Skills 1.0 - Versão Oficial 🌟",
      "sections": [
        {
          "heading": "Resumo",
          "items": [
            "O RPG Skills chegou à sua <strong>versão oficial 1.0</strong>.",
            "As versões anteriores serviram como testes, melhorias, ajustes e aprendizado até o mod chegar neste formato mais completo.",
            "O mod passou por uma <strong>extensa reformulação</strong> para ficar mais organizado, mais claro e mais preparado para continuar evoluindo.",
            "Esta versão adiciona uma progressão RPG mais forte ao Necesse, com níveis, XP, pontos de habilidade, classes, atributos, loja e atalhos.",
            "A Loja agora também inclui melhorias globais de slots para baús do mundo.",
            "<strong>Importante:</strong> é recomendado criar um <strong>novo personagem</strong> para jogar a versão 1.0 corretamente."
          ]
        },
        {
          "heading": "Novo Começo",
          "items": [
            "A versão 1.0 reorganiza a base do RPG Skills e marca uma nova fase do mod.",
            "Personagens antigos podem não representar bem a progressão atual, porque o sistema mudou bastante.",
            "Para evitar progresso estranho, pontos fora do lugar ou bônus antigos misturados, começa com um novo personagem.",
            "A ideia é que a experiência da versão 1.0 seja limpa, equilibrada e feita para crescer desde o início."
          ]
        },
        {
          "heading": "Progressão RPG",
          "items": [
            "Agora o personagem evolui com <strong>níveis</strong>, <strong>XP</strong> e <strong>pontos de habilidade</strong>.",
            "Você ganha XP jogando normalmente: derrotando inimigos, enfrentando chefes, minerando, colhendo, pescando, plantando, explorando e interagindo com assentamentos.",
            "Ao subir de nível, você ganha pontos para investir nas classes.",
            "A progressão dá mais motivo para continuar jogando no mesmo personagem e sentir evolução real ao longo do mundo."
          ]
        },
        {
          "heading": "Classes e Builds",
          "items": [
            "O sistema de classes foi reconstruído com <strong>27 classes</strong>.",
            "As classes cobrem vários estilos: corpo a corpo, à distância, magia, invocação, sobrevivência, defesa, mobilidade, mineração, pesca, loot, ouro, construção, trinkets e assentamentos.",
            "Cada classe fortalece uma parte diferente da gameplay, permitindo montar builds do seu jeito.",
            "Algumas classes também liberam efeitos especiais, como visão, mineração em veios, efeitos elementais, cura, defesa, mobilidade e bônus de utilidade."
          ]
        },
        {
          "heading": "Interface Nova",
          "items": [
            "A janela do RPG Skills foi organizada em três abas principais.",
            "<strong>Status:</strong> acompanha nível, XP, pontos livres e informações gerais do personagem.",
            "<strong>Classes:</strong> mostra as classes e permite investir os pontos de habilidade.",
            "<strong>Loja:</strong> reúne bônus temporários de XP, melhorias de stack do mundo e slots extras para baús.",
            "O atalho padrão para abrir e fechar a janela é <strong>K</strong>."
          ]
        },
        {
          "heading": "Loja e Qualidade de Vida",
          "items": [
            "A Loja permite comprar bônus temporários de XP para acelerar a evolução.",
            "Também permite melhorar o stack do mundo, ajudando na organização e no farm.",
            "Agora também é possível comprar slots extras para baús: cada compra adiciona <strong>+10 slots</strong>, começando em <strong>5.000 moedas</strong>, até o limite de <strong>400 slots</strong>.",
            "Baús grandes usam rolagem na interface para manter os slots acessíveis.",
            "A Loja também tem reset de slots de baú para voltar ao padrão de 40 slots.",
            "Antes de resetar, remova os itens dos slots extras. O mod tenta jogar esses itens no chão ao redor do baú, mas não há reembolso de moedas e ainda pode haver risco de perda.",
            "A Loja agora também tem a habilidade <strong>Minerador Explosivo</strong>, comprada por jogador.",
            "Minerador Explosivo exige <strong>Mestre das Cavernas nível 5</strong> para comprar e para usar. Se os pontos forem resetados e o requisito cair, ela fica bloqueada até voltar ao nível certo.",
            "Ao ativar pelo atalho configurável, minerar com qualquer picareta quebra blocos ao redor com efeito de explosão, sem machucar jogadores ou mobs e sem dar XP nas quebras extras.",
            "A habilidade só funciona com picaretas, respeita o poder da picareta usada e tem limites internos para evitar travamentos em áreas muito cheias.",
            "Ela não funciona junto com o modo avançado do Minerador de Veios.",
            "Existem atalhos configuráveis para bônus de XP 2x, 5x e 10x.",
            "O Mestre das Cavernas também libera o Minerador de Veios para melhorar a mineração."
          ]
        },
        {
          "heading": "Comandos Visíveis",
          "items": [
            "<strong>/rpgskills set level <1-135></strong>: define o nível do jogador e zera a experiência atual.",
            "<strong>/rpgskills maxskills</strong>: coloca o jogador no nível máximo e maximiza todas as classes.",
            "<strong>/rpgskills reset points</strong>: devolve os pontos de classe, cobrando o custo correto quando necessário.",
            "<strong>/rpgskills reset zero</strong>: zera o progresso completo e devolve moedas de reset."
          ]
        },
        {
          "heading": "O Que Mudou na Ideia do Mod",
          "items": [
            "O RPG Skills deixou de ser apenas um conjunto de testes e bônus soltos.",
            "Agora ele funciona como uma camada RPG completa para Necesse.",
            "O foco é dar mais profundidade para o personagem sem remover o estilo original do jogo.",
            "Explorar, lutar, minerar, pescar, construir e cuidar do mundo agora alimenta uma progressão maior."
          ]
        },
        {
          "heading": "Aviso Final",
          "items": [
            "Cria um novo personagem para aproveitar melhor a versão 1.0.",
            "Começa em um mundo novo se quiser sentir a progressão do zero.",
            "As versões antigas ajudaram a testar e melhorar o caminho; a 1.0 é o ponto de partida oficial."
          ]
        }
      ],
      "note": "<strong>Obrigado por jogar RPG Skills. Boa aventura! ⚔️</strong>"
    },
    "en": {
      "title": "🌟 RPG Skills 1.0 - Official Release 🌟",
      "sections": [
        {
          "heading": "Summary",
          "items": [
            "RPG Skills has reached its <strong>official 1.0 release</strong>.",
            "Previous versions worked as tests, improvements, adjustments, and learning steps until the mod reached this more complete form.",
            "The mod went through an <strong>extensive rework</strong> to become cleaner, clearer, and better prepared for future updates.",
            "This version adds stronger RPG progression to Necesse, with levels, XP, skill points, classes, attributes, a shop, and hotkeys.",
            "The Shop now also includes global chest slot upgrades for the world.",
            "<strong>Important:</strong> it is recommended to create a <strong>new character</strong> to play version 1.0 properly."
          ]
        },
        {
          "heading": "A Fresh Start",
          "items": [
            "Version 1.0 reorganizes the foundation of RPG Skills and marks a new phase for the mod.",
            "Old characters may not represent the current progression well, because the system changed a lot.",
            "To avoid strange progress, misplaced points, or old bonuses mixed in, start with a new character.",
            "The goal is for version 1.0 to feel clean, balanced, and made to grow from the beginning."
          ]
        },
        {
          "heading": "RPG Progression",
          "items": [
            "Your character now progresses with <strong>levels</strong>, <strong>XP</strong>, and <strong>skill points</strong>.",
            "You earn XP by playing normally: defeating enemies, fighting bosses, mining, harvesting, fishing, planting, exploring, and interacting with settlements.",
            "When you level up, you gain points to invest in classes.",
            "Progression gives you more reasons to keep playing the same character and feel real growth across the world."
          ]
        },
        {
          "heading": "Classes and Builds",
          "items": [
            "The class system was rebuilt with <strong>27 classes</strong>.",
            "Classes cover many styles: melee, ranged, magic, summons, survival, defense, mobility, mining, fishing, loot, gold, building, trinkets, and settlements.",
            "Each class strengthens a different part of gameplay, letting you build your character your way.",
            "Some classes also unlock special effects such as vision, vein mining, elemental effects, healing, defense, mobility, and utility bonuses."
          ]
        },
        {
          "heading": "New Interface",
          "items": [
            "The RPG Skills window is organized into three main tabs.",
            "<strong>Status:</strong> tracks level, XP, free points, and general character information.",
            "<strong>Classes:</strong> shows classes and lets you spend skill points.",
            "<strong>Shop:</strong> brings together temporary XP bonuses, world stack upgrades, and extra chest slots.",
            "The default shortcut to open and close the window is <strong>K</strong>."
          ]
        },
        {
          "heading": "Shop and Quality of Life",
          "items": [
            "The Shop lets you buy temporary XP bonuses to speed up progression.",
            "It also lets you improve world stack size, helping with farming and storage.",
            "You can now buy extra chest slots: each purchase adds <strong>+10 slots</strong>, starting at <strong>5,000 coins</strong>, up to <strong>400 slots</strong>.",
            "Large chests use scrolling in the interface to keep slots accessible.",
            "The Shop also has a chest slot reset option to return chests to the default 40 slots.",
            "Before resetting, remove items from extra slots. The mod tries to drop those items on the ground around the chest, but coins are not refunded and there may still be a risk of losing something.",
            "The Shop now also has the <strong>Explosive Miner</strong> ability, bought per player.",
            "Explosive Miner requires <strong>Cavern Master level 5</strong> to buy and to use. If points are reset and the requirement drops, it stays blocked until the requirement is met again.",
            "When activated with its configurable hotkey, mining with any pickaxe breaks nearby blocks with an explosion effect, without hurting players or mobs and without giving XP from extra breaks.",
            "The ability only works with pickaxes, respects the power of the pickaxe used and has internal limits to avoid freezes in very crowded areas.",
            "It does not work together with Advanced Vein Miner mode.",
            "There are configurable hotkeys for 2x, 5x, and 10x XP bonuses.",
            "Cavern Master also unlocks Vein Miner to improve mining."
          ]
        },
        {
          "heading": "Visible Commands",
          "items": [
            "<strong>/rpgskills set level <1-135></strong>: sets the player level and clears current experience.",
            "<strong>/rpgskills maxskills</strong>: sets the player to max level and maxes every class.",
            "<strong>/rpgskills reset points</strong>: refunds class points, charging the correct cost when needed.",
            "<strong>/rpgskills reset zero</strong>: fully resets progression and refunds reset coins."
          ]
        },
        {
          "heading": "What Changed in the Mod's Direction",
          "items": [
            "RPG Skills is no longer just a set of tests and loose bonuses.",
            "It now works as a complete RPG layer for Necesse.",
            "The focus is to give more depth to your character without removing the original style of the game.",
            "Exploring, fighting, mining, fishing, building, and taking care of the world now feed a larger progression system."
          ]
        },
        {
          "heading": "Final Notice",
          "items": [
            "Create a new character to enjoy version 1.0 properly.",
            "Start in a new world if you want to feel the progression from zero.",
            "Older versions helped test and improve the path; 1.0 is the official starting point."
          ]
        }
      ],
      "note": "<strong>Thank you for playing RPG Skills. Have a great adventure! ⚔️</strong>"
    }
  }
];
