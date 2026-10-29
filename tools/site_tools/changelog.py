"""release-notes/<versão>.md (BBCode da Steam, PT --- EN) -> js/generated/changelog-data.js.

Também atualiza nas páginas o número de versões (data-total-versoes) e a última versão (data-versao-atual).
"""
import json
import re

from .caminhos import NOTAS, GERADO, RAIZ, ler, gravar

# Tipo de cada versão (filtro "Principais / Correções" da página).
TIPO_POR_VERSAO = {
    '2.9': 'update', '2.8': 'new', '2.7': 'fix', '2.6': 'new', '2.5': 'major',
    '2.4': 'update', '2.3': 'new', '2.2': 'fix', '2.1': 'update', '2.0': 'major',
    '1.9.4': 'fix', '1.9.3': 'fix', '1.9.2': 'update', '1.9.1': 'fix', '1.9': 'update',
    '1.8': 'update', '1.7': 'update', '1.6': 'update', '1.5': 'update', '1.4': 'update',
    '1.3': 'update', '1.2': 'new', '1.1': 'update', '1.0': 'release',
}
CLASSE_DA_TAG = {'fix': 'fix', 'new': 'major', 'major': 'major', 'update': 'minor', 'release': 'major'}


def _chave_versao(v):
    partes = [int(p) if p.isdigit() else 0 for p in v.split('.')]
    return tuple(partes + [0] * (3 - len(partes)))


def _inline(texto):
    texto = re.sub(r'\[b\](.*?)\[/b\]', r'<strong>\1</strong>', texto.strip(), flags=re.I | re.S)
    texto = re.sub(r'\[i\](.*?)\[/i\]', r'<em>\1</em>', texto, flags=re.I | re.S)
    texto = re.sub(r'\[u\](.*?)\[/u\]', r'<u>\1</u>', texto, flags=re.I | re.S)
    return re.sub(r'\[/?[a-z0-9]+\]', '', texto, flags=re.I).strip()


def _bloco_idioma(bloco):
    m = re.search(r'\[h1\](.*?)\[/h1\]', bloco, flags=re.I | re.S)
    titulo = _inline(m.group(1)) if m else ''
    secoes = []
    for m in re.finditer(r'\[h2\](.*?)\[/h2\]\s*\[list\](.*?)\[/list\]', bloco, flags=re.I | re.S):
        itens = [_inline(i.group(1)) for i in re.finditer(r'\[\*\]\s*(.*?)(?=\[\*\]|\Z)', m.group(2), flags=re.S)]
        itens = [i for i in itens if i]
        titulo_secao = _inline(m.group(1))
        if titulo_secao or itens:
            secoes.append({'heading': titulo_secao, 'items': itens})
    # Agradecimento em negrito depois da última lista
    nota = ''
    cauda = re.split(r'\[/list\]', bloco, flags=re.I)[-1]
    for m in re.finditer(r'\[b\](.*?)\[/b\]', cauda, flags=re.I | re.S):
        texto = _inline('[b]%s[/b]' % m.group(1))
        if len(texto) > 10:
            nota = texto
    return {'title': titulo, 'sections': secoes, 'note': nota}


def _separar_pt_en(bruto):
    partes = re.split(r'\r?\n---\s*\r?\n', bruto, maxsplit=1)
    if len(partes) == 2:
        return partes[0].strip(), partes[1].strip()
    return bruto.strip(), bruto.strip()


# Seções que não trazem conteúdo novo: versão só com elas é "Correções".
SECOES_DE_MANUTENCAO = ('correç', 'melhoria', 'desempenho', 'compatibilidade', 'tradu', 'importante')


def _tipo(versao, pt):
    if versao in TIPO_POR_VERSAO:
        return TIPO_POR_VERSAO[versao]
    titulos = [s['heading'].lower() for s in pt['sections']]
    if any('novidade' in t for t in titulos):
        return 'new'
    if titulos and all(any(p in t for p in SECOES_DE_MANUTENCAO) for t in titulos):
        return 'fix'
    return 'update'


def montar_entradas():
    entradas = []
    for caminho in NOTAS.glob('*.md'):
        versao = caminho.stem
        pt_bruto, en_bruto = _separar_pt_en(ler(caminho))
        pt, en = _bloco_idioma(pt_bruto), _bloco_idioma(en_bruto)
        if not en['sections']:
            en = json.loads(json.dumps(pt))
        tipo = _tipo(versao, pt)
        entradas.append({
            'version': versao,
            'tag': tipo,
            'tagClass': CLASSE_DA_TAG.get(tipo, 'minor'),
            'tagKey': 'changelog.tag.' + tipo,
            'pt': pt,
            'en': en,
        })
    entradas.sort(key=lambda e: _chave_versao(e['version']), reverse=True)
    return entradas


def _atualizar_selos(qtd, ultima):
    """Atualiza em todas as páginas os elementos marcados com data-versao-atual e data-total-versoes."""
    for pagina in [RAIZ / 'index.html'] + sorted((RAIZ / 'html').glob('*.html')):
        html = ler(pagina)
        novo = re.sub(r'(<[^<>]*\bdata-total-versoes\b[^<>]*>)\d+(<)', r'\g<1>%d\2' % qtd, html)
        novo = re.sub(r'(<[^<>]*\bdata-versao-atual\b[^<>]*>)v[\d.]+(<)', r'\g<1>v%s\2' % ultima, novo)
        if novo != html:
            gravar(pagina, novo)


def gerar():
    entradas = montar_entradas()
    dados = json.dumps(entradas, ensure_ascii=False, indent=2)
    gravar(GERADO / 'changelog-data.js',
           '/* Gerado por tools/build.py a partir de release-notes/*.md. Não edite à mão. */\n'
           'window.RPG_CHANGELOG = ' + dados + ';\n')
    if entradas:
        _atualizar_selos(len(entradas), entradas[0]['version'])
    sem_en = [e['version'] for e in entradas if e['en'] == e['pt']]
    return {'versoes': len(entradas), 'ultima': entradas[0]['version'] if entradas else '-', 'sem_ingles': sem_en}
