"""Escreve nas páginas os blocos gerados a partir do manifesto.

Cada bloco fica entre marcadores; o resto da página não é tocado:
    <!-- css:inicio --> ... <!-- css:fim -->       <link> do CSS
    <!-- topo:inicio --> ... <!-- topo:fim -->     menu (moldes/topo.html)
    <!-- rodape:inicio --> ... <!-- rodape:fim --> rodapé (moldes/rodape.html)
    <!-- js:inicio --> ... <!-- js:fim -->         <script>

Também (re)cria as páginas antigas que só redirecionam (manifesto.REDIRECIONAMENTOS).
"""
import posixpath
import re
from pathlib import Path

from . import manifesto
from .caminhos import RAIZ, ler, gravar

MOLDES = Path(__file__).resolve().parent / 'moldes'

REDIRECIONA = '''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <title>RPG Skills</title>
  <link rel="canonical" href="{alvo}">
  <script>location.replace('{alvo_base}' + (location.hash || '{hash}'));</script>
</head>
<body><p><a href="{alvo}">RPG Skills</a></p></body>
</html>
'''


def _relativo(pagina, alvo):
    base = posixpath.dirname(pagina)
    return posixpath.relpath(alvo, base) if base else alvo


def _bloco(nome, linhas, indent, nl):
    corpo = nl.join((indent + l) if l else '' for l in linhas)
    return '%s<!-- %s:inicio -->%s%s%s%s<!-- %s:fim -->' % (indent, nome, nl, corpo, nl, indent, nome)


def _substituir(texto, nome, novo):
    padrao = re.compile(r'[ \t]*<!-- %s:inicio -->.*?<!-- %s:fim -->' % (nome, nome), re.S)
    if not padrao.search(texto):
        raise SystemExit('marcador <!-- %s:inicio --> ausente' % nome)
    return padrao.sub(lambda m: novo, texto, count=1)


def _menu(pagina, indent):
    itens = []
    for alvo, pt, en in manifesto.MENU:
        atual = ' aria-current="page"' if alvo == pagina else ''
        itens.append('%s<li><a href="%s"%s><span lang="pt-BR">%s</span><span lang="en">%s</span></a></li>'
                     % (indent, _relativo(pagina, alvo), atual, pt, en))
    return '\n'.join(itens)


def _molde(nome, pagina):
    raiz = _relativo(pagina, 'index.html')[:-len('index.html')]
    texto = ler(MOLDES / nome).replace('\r\n', '\n').rstrip('\n')
    texto = re.sub(r'^([ \t]*)\{MENU\}$', lambda m: _menu(pagina, m.group(1)), texto, flags=re.M)
    return texto.replace('{R}', raiz).replace('{STEAM}', manifesto.STEAM).split('\n')


def _redirecionamentos():
    mudaram = []
    for pagina, alvo in manifesto.REDIRECIONAMENTOS.items():
        base, _, hash_ = alvo.partition('#')
        texto = REDIRECIONA.format(alvo=alvo, alvo_base=base, hash=('#' + hash_) if hash_ else '')
        caminho = RAIZ / pagina
        if not caminho.exists() or ler(caminho) != texto:
            gravar(caminho, texto)
            mudaram.append(pagina)
    return mudaram


def atualizar():
    """Reescreve os blocos de todas as páginas; devolve as que mudaram."""
    mudaram = []
    for pagina in manifesto.PAGINAS:
        caminho = RAIZ / pagina
        texto = ler(caminho)
        nl = '\r\n' if '\r\n' in texto else '\n'
        css = ['<link rel="stylesheet" href="%s">' % _relativo(pagina, c) for c in manifesto.css_da_pagina(pagina)]
        js = ['<script src="%s"></script>' % _relativo(pagina, j) for j in manifesto.js_da_pagina(pagina)]
        novo = _substituir(texto, 'css', _bloco('css', css, '  ', nl))
        novo = _substituir(novo, 'topo', _bloco('topo', _molde('topo.html', pagina), '  ', nl))
        novo = _substituir(novo, 'rodape', _bloco('rodape', _molde('rodape.html', pagina), '  ', nl))
        novo = _substituir(novo, 'js', _bloco('js', js, '  ', nl))
        if novo != texto:
            gravar(caminho, novo)
            mudaram.append(pagina)
    return mudaram + _redirecionamentos()


def arquivos_do_manifesto():
    todos = set()
    for pagina in manifesto.PAGINAS:
        todos.update(manifesto.css_da_pagina(pagina))
        todos.update(manifesto.js_da_pagina(pagina))
    return todos
