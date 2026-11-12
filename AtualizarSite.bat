@echo off
setlocal EnableExtensions
title Atualizar RPG Skills Site
cd /d "%~dp0"

set "REPO=https://github.com/Necromante96Official/RPG-Skills-Site.git"
set "RAMO=main"

echo ============================================
echo   Atualizar RPG Skills Site
echo   Pasta: %CD%
echo ============================================
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo [ERRO] O Git nao esta instalado ou nao esta no PATH.
  echo Baixe em https://git-scm.com/download/win e rode este arquivo de novo.
  goto :fim
)

rem --- Pasta sem Git (ex.: baixada em .zip): liga ao repositorio e baixa tudo ---
if not exist ".git" (
  echo Esta pasta ainda nao esta ligada ao GitHub. Ligando agora...
  git init -q || goto :falhou
  git remote add origin "%REPO%" || goto :falhou
  git fetch origin %RAMO% || goto :falhou
  git checkout -f -B %RAMO% origin/%RAMO% || goto :falhou
  git branch -q --set-upstream-to=origin/%RAMO% %RAMO%
  echo.
  echo [OK] Arquivos atualizados e os que faltavam foram baixados.
  goto :resumo
)

rem --- Garante o endereco do repositorio ---
git remote get-url origin >nul 2>nul
if errorlevel 1 git remote add origin "%REPO%"

echo Buscando atualizacoes no GitHub...
git fetch origin --prune || goto :falhou
echo.

rem --- Alteracoes locais nao salvas ---
set "GUARDOU=0"
git diff --quiet
if errorlevel 1 goto :tem_mudancas
git diff --cached --quiet
if errorlevel 1 goto :tem_mudancas
goto :sem_mudancas

:tem_mudancas
echo [AVISO] Voce tem alteracoes locais ainda nao enviadas:
git status --short
echo.
echo   1 = Guardar minhas alteracoes, atualizar e devolver elas depois
echo   2 = Cancelar
choice /c 12 /n /m "Escolha 1 ou 2: "
if errorlevel 2 goto :fim
git stash push -m "AtualizarSite.bat" || goto :falhou
set "GUARDOU=1"

:sem_mudancas
rem --- Vai para o ramo principal ---
for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set "ATUAL=%%b"
if /i not "%ATUAL%"=="%RAMO%" (
  echo Trocando do ramo "%ATUAL%" para "%RAMO%"...
  git checkout %RAMO% 2>nul || git checkout -b %RAMO% origin/%RAMO% || goto :falhou
)

rem --- Puxa as atualizacoes sem misturar historico ---
git merge --ff-only origin/%RAMO%
if errorlevel 1 (
  echo.
  echo [ERRO] Seu ramo "%RAMO%" tem commits locais que nao estao no GitHub,
  echo e por isso nao da para atualizar automaticamente sem risco.
  echo Envie seus commits ^(git push^) ou peca ajuda antes de rodar de novo.
  goto :devolver
)
echo.
echo [OK] Projeto atualizado com o GitHub.

:devolver
if "%GUARDOU%"=="1" (
  echo Devolvendo suas alteracoes locais...
  git stash pop
  if errorlevel 1 (
    echo [AVISO] Houve conflito ao devolver suas alteracoes.
    echo Elas continuam guardadas em seguranca: veja com "git stash list".
  )
)

:resumo
echo.
echo Ultimas atualizacoes:
git log -5 --format="  %%h  %%ad  %%s" --date=format:"%%d/%%m/%%Y"
goto :fim

:falhou
echo.
echo [ERRO] A atualizacao falhou. Veja a mensagem acima.
echo Confira a internet e o acesso ao GitHub e rode de novo.

:fim
echo.
pause
endlocal
