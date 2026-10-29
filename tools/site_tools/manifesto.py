"""Manifesto do site: páginas, menu e quais CSS e JS cada página carrega, na ordem.

A ordem do CSS é a cascata: base -> layout -> componentes -> página.
Caminhos relativos à raiz do site.
"""

CSS_BASE = [
    'css/base/tokens.css',
    'css/base/reset.css',
    'css/layout/shell.css',
    'css/components/ui.css',
    'css/components/blocos.css',
]
CSS_FIM = ['css/layout/responsivo.css']

JS_INICIO = ['js/generated/i18n-data.js', 'js/core/i18n.js', 'js/core/ui.js']
JS_FIM = ['js/core/boot.js']
JS_MOD = ['js/generated/mod-data.js', 'js/core/mod.js']

# página -> (css da página, js da página)
PAGINAS = {
    'index.html': (['css/pages/inicio.css'], JS_MOD + ['js/pages/inicio.js']),
    'html/classes.html': (['css/pages/classes.css'], JS_MOD + ['js/pages/classes.js']),
    'html/progressao.html': (['css/pages/progressao.css'], ['js/pages/progressao.js']),
    'html/passivas.html': (['css/pages/passivas.css'], JS_MOD + ['js/pages/passivas.js']),
    'html/necromancia.html': (['css/pages/necromancia.css'], []),
    'html/loja.html': (['css/pages/loja.css'], ['js/pages/loja.js']),
    'html/qol.html': ([], []),
    'html/configuracao.html': (['css/pages/configuracao.css'], []),
    'html/changelog.html': (['css/pages/changelog.css'],
                            ['js/generated/changelog-data.js', 'js/features/changelog.js']),
    'html/discussoes.html': (['css/pages/discussoes.css'], ['js/features/form-discussoes.js']),
}

# Menu principal: (página, texto pt, texto en). A ordem é a do menu.
MENU = [
    ('html/classes.html', 'Classes', 'Classes'),
    ('html/progressao.html', 'XP e Níveis', 'XP &amp; Levels'),
    ('html/passivas.html', 'Passivas', 'Passives'),
    ('html/necromancia.html', 'Necromancia', 'Necromancy'),
    ('html/loja.html', 'Loja', 'Shop'),
    ('html/qol.html', 'Extras', 'Extras'),
    ('html/configuracao.html', 'Config', 'Config'),
    ('html/changelog.html', 'Novidades', 'Updates'),
    ('html/discussoes.html', 'Ajuda', 'Help'),
]

# Páginas antigas que só redirecionam (links velhos da Steam e do YouTube continuam valendo).
REDIRECIONAMENTOS = {
    'html/universo-xp.html': 'progressao.html#zonas',
    'html/fontes-xp.html': 'progressao.html#fontes',
    'html/funcionalidades.html': 'progressao.html',
    'html/janela.html': 'classes.html',
    'html/atalhos.html': 'configuracao.html#atalhos',
}

STEAM = 'https://steamcommunity.com/sharedfiles/filedetails/?id=3694501995'


def css_da_pagina(pagina):
    return CSS_BASE + PAGINAS[pagina][0] + CSS_FIM


def js_da_pagina(pagina):
    return JS_INICIO + PAGINAS[pagina][1] + JS_FIM
