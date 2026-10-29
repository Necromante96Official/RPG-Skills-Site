"""Caminhos e leitura/gravação de texto (UTF-8, mantendo o fim de linha do arquivo)."""
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
I18N = RAIZ / 'i18n'
NOTAS = RAIZ / 'release-notes'
GERADO = RAIZ / 'js' / 'generated'


def ler(caminho):
    with open(caminho, encoding='utf-8', newline='') as f:
        return f.read()


def gravar(caminho, texto):
    caminho.parent.mkdir(parents=True, exist_ok=True)
    with open(caminho, 'w', encoding='utf-8', newline='') as f:
        f.write(texto)
