"""i18n/pt-BR.json + i18n/en.json -> js/generated/i18n-data.js, com conferências.

- As duas línguas precisam ter as mesmas chaves.
- Toda chave usada nas páginas (data-i18n*) ou citada no JS precisa existir.
- Chaves que ninguém usa são listadas (e removidas com --podar-i18n).
"""
import json
import re
from collections import OrderedDict

from .caminhos import RAIZ, I18N, GERADO, ler, gravar

IDIOMAS = ['pt-BR', 'en']
# Montadas em tempo de execução ('class.' + id, 'meta.title.' + página, tagKey do changelog).
PREFIXOS_DINAMICOS = ('meta.', 'class.', 'changelog.tag.')
ATRIBUTO = re.compile(r'data-i18n(?:-aria|-placeholder)?="([^"]+)"')
LITERAL = re.compile(r"""['"]([a-z0-9_-]+(?:\.[a-zA-Z0-9_-]+)+)['"]""")


def carregar():
    return {lang: json.loads(ler(I18N / ('%s.json' % lang)), object_pairs_hook=OrderedDict) for lang in IDIOMAS}


def _fontes():
    paginas = [RAIZ / 'index.html'] + sorted((RAIZ / 'html').glob('*.html'))
    scripts = [p for p in (RAIZ / 'js').rglob('*.js') if 'generated' not in p.parts]
    return paginas, scripts


def chaves_usadas():
    paginas, scripts = _fontes()
    usadas = set()
    for p in paginas:
        usadas.update(ATRIBUTO.findall(ler(p)))
    for s in scripts:
        texto = ler(s)
        usadas.update(ATRIBUTO.findall(texto))
        usadas.update(LITERAL.findall(texto))
    return usadas


def conferir(dicts):
    problemas = []
    pt, en = dicts['pt-BR'], dicts['en']
    for k in sorted(set(pt) - set(en)):
        problemas.append('falta em en.json: %s' % k)
    for k in sorted(set(en) - set(pt)):
        problemas.append('falta em pt-BR.json: %s' % k)
    paginas, _ = _fontes()
    for p in paginas:
        for k in sorted(set(ATRIBUTO.findall(ler(p))) - set(pt)):
            problemas.append('%s usa chave inexistente: %s' % (p.relative_to(RAIZ).as_posix(), k))
    return problemas


def sem_uso(dicts):
    usadas = chaves_usadas()
    return [k for k in dicts['pt-BR'] if k not in usadas and not k.startswith(PREFIXOS_DINAMICOS)]


def _gravar_json(lang, dados):
    texto = json.dumps(dados, ensure_ascii=False, indent=2) + '\n'
    gravar(I18N / ('%s.json' % lang), texto)


def podar(dicts):
    remover = set(sem_uso(dicts))
    for lang in IDIOMAS:
        dicts[lang] = OrderedDict((k, v) for k, v in dicts[lang].items() if k not in remover)
        _gravar_json(lang, dicts[lang])
    return sorted(remover)


def gerar(dicts):
    dados = json.dumps({lang: dicts[lang] for lang in IDIOMAS}, ensure_ascii=False, separators=(',', ':'))
    gravar(GERADO / 'i18n-data.js',
           '/* Gerado por tools/build.py a partir de i18n/*.json. Não edite à mão. */\n'
           'window.RPG_I18N = ' + dados + ';\n')
