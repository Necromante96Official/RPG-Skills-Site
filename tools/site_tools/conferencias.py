"""Conferências de organização: limite de linhas, arquivos fora do manifesto e links locais quebrados."""
import re

from .caminhos import RAIZ, ler
from .cabecalhos import arquivos_do_manifesto

LIMITE_LINHAS = 500
LINK_LOCAL = re.compile(r'(?:href|src)="(?!https?:|mailto:|#|data:|//)([^"#?]+)')


def linhas_demais():
    """Código (CSS/JS/PY) com mais de 500 linhas; os dados gerados ficam de fora."""
    problemas = []
    for padrao in ('css/**/*.css', 'js/**/*.js', 'tools/**/*.py'):
        for p in RAIZ.glob(padrao):
            if 'generated' in p.parts:
                continue
            n = ler(p).count('\n')
            if n > LIMITE_LINHAS:
                problemas.append('%s tem %d linhas (máx. %d)' % (p.relative_to(RAIZ).as_posix(), n, LIMITE_LINHAS))
    return problemas


def fora_do_manifesto():
    usados = arquivos_do_manifesto()
    problemas = []
    for padrao in ('css/**/*.css', 'js/**/*.js'):
        for p in RAIZ.glob(padrao):
            rel = p.relative_to(RAIZ).as_posix()
            if rel not in usados:
                problemas.append('%s não é carregado por nenhuma página' % rel)
    for rel in sorted(usados):
        if not (RAIZ / rel).exists():
            problemas.append('manifesto cita arquivo inexistente: %s' % rel)
    return problemas


def links_quebrados():
    problemas = []
    for pagina in [RAIZ / 'index.html'] + sorted((RAIZ / 'html').glob('*.html')):
        for alvo in LINK_LOCAL.findall(ler(pagina)):
            if not (pagina.parent / alvo).resolve().exists():
                problemas.append('%s aponta para %s (não existe)' % (pagina.relative_to(RAIZ).as_posix(), alvo))
    return problemas
