r"""Build do site RPG Skills (sem dependências: só Python 3.8+).

    python tools/build.py               gera os dados, atualiza as páginas e confere tudo
    python tools/build.py --conferir    só confere (sai com erro se algo estiver errado)
    python tools/build.py --podar-i18n  também remove do i18n/*.json as chaves sem uso
    python tools/build.py --mod D:\RPG-Skills   relê classes e passivas do código do mod

Rode depois de mexer em i18n/*.json, release-notes/*.md, tools/site_tools/manifesto.py
ou nos moldes do menu/rodapé. Sem --mod, usa a pasta ../RPG-Skills se ela existir.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from site_tools import cabecalhos, changelog, conferencias, i18n, mod  # noqa: E402


def main(args):
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    so_conferir = '--conferir' in args
    dicts = i18n.carregar()

    if not so_conferir:
        if '--podar-i18n' in args:
            removidas = i18n.podar(dicts)
            print('i18n: %d chaves sem uso removidas' % len(removidas))
        i18n.gerar(dicts)
        pasta_mod = args[args.index('--mod') + 1] if '--mod' in args else Path(__file__).resolve().parents[2] / 'RPG-Skills'
        if Path(pasta_mod).is_dir():
            print('mod: %(classes)d classes, %(passivas)d passivas' % mod.gerar(pasta_mod))
        else:
            print('mod: pasta %s não encontrada, mod-data.js mantido' % pasta_mod)
        info = changelog.gerar()
        print('changelog: %(versoes)d versões, última v%(ultima)s' % info)
        if info['sem_ingles']:
            print('  aviso: sem texto em inglês: ' + ', '.join(info['sem_ingles']))
        mudaram = cabecalhos.atualizar()
        print('páginas atualizadas: %s' % (', '.join(mudaram) or 'nenhuma'))

    problemas = (i18n.conferir(dicts) + conferencias.linhas_demais()
                 + conferencias.fora_do_manifesto() + conferencias.links_quebrados())
    sem_uso = i18n.sem_uso(dicts)
    if sem_uso:
        print('i18n: %d chaves sem uso (use --podar-i18n): %s' % (len(sem_uso), ', '.join(sem_uso[:20])))
    for p in problemas:
        print('ERRO: ' + p)
    print('ok' if not problemas else '%d problema(s)' % len(problemas))
    return 1 if problemas else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
