# RPG Skills — Arquitetura Completa do Site

## Visão Geral

Site estático de uma página (landing page) para o mod "RPG Skills" do jogo **Necesse**.  
Tecnologias: HTML5, CSS3 puro (sem frameworks), JavaScript vanilla (sem dependências externas).  
Estilo visual inspirado no site do **Forbidden Legacy** — tema RPG escuro com tons dourados.

**Arquivo principal:** `index.html` (single-page application)  
**Não usa:** servidor local, build tools, npm, preprocessadores CSS

---

## Estrutura de Arquivos

```
RPGSKILLS-SITE/
├── index.html              ← Página principal (965 linhas)
├── .nojekyll               ← Desabilita Jekyll no GitHub Pages
├── assets/
│   └── .gitkeep            ← Placeholder vazio
├── css/
│   ├── tokens.css          ← Variáveis de design (114 linhas)
│   ├── base.css            ← Reset e estilos base (171 linhas)
│   ├── components.css      ← Componentes UI (422 linhas)
│   ├── layout.css          ← Layout e grids (570 linhas)
│   ├── animations.css      ← Keyframes e utilitários (128 linhas)
│   ├── rpg-effects.css     ← Efeitos visuais RPG (335 linhas)
│   └── mobile.css          ← Navegação mobile (70 linhas)
├── js/
│   └── main.js             ← Lógica principal (557 linhas)
└── i18n/
    ├── pt-BR.json           ← Traduções português (214 linhas)
    └── en.json              ← Traduções inglês (214 linhas)
```

**Total: 12 arquivos. Sem imagens, sem fontes locais, sem assets externos.**

---

## CSS — Sistema de Design

### Ordem de Carregamento (importância)
```
tokens.css → base.css → components.css → layout.css → animations.css → rpg-effects.css → mobile.css
```

### tokens.css — Variáveis de Design

| Categoria | Variáveis | Valores |
|-----------|-----------|---------|
| **Gold (primária)** | `--gold`, `--gold-light`, `--gold-dim`, `--gold-rgb` | `#d4881c`, `#e8a030`, `#8a5a10`, `212,136,28` |
| **Blue (secundária)** | `--blue`, `--blue-light`, `--blue-dim`, `--blue-rgb` | `#60a5fa`, `#93c5fd`, `#1e3a5f`, `96,165,250` |
| **Red (acento)** | `--red`, `--red-light`, `--red-dim`, `--red-rgb` | `#ef4444`, `#f87171`, `#7f1d1d`, `239,68,68` |
| **Purple (acento)** | `--purple`, `--purple-light`, `--purple-dim`, `--purple-rgb` | `#a78bfa`, `#c4b5fd`, `#4c1d95`, `167,139,250` |
| **Fundo escuro** | `--dark` a `--dark4` | `#09080a` → `#1a1418` |
| **Texto** | `--text-body`, `--text-muted`, `--text-dim`, `--text-faint` | `#e0e0e0`, `#999`, `#666`, `#444` |
| **Bordas** | `--border`, `--border-hover`, `--border-active` | `rgba(212,136,28, .13/.28/.4)` |
| **Categorias** | `--cat-combat/defense/mobility/utility/settler` | Vermelho, azul, roxo, dourado |
| **Espaçamento** | `--space-xs` a `--space-3xl` | 4px → 96px |
| **Tipografia** | `--font-heading`, `--font-body`, `--font-mono` | Rajdhani, Exo 2, JetBrains Mono |
| **Tamanhos** | `--fs-xs` a `--fs-hero` | 0.75rem → clamp(2.5rem,6vw,5rem) |
| **Sombras** | `--shadow-sm/md/lg/glow` | Diversas opacidades |
| **Transições** | `--transition-fast/base/slow` | 0.15s, 0.25s, 0.4s |
| **Z-index** | `--z-nav/modal/tooltip` | 100, 200, 300 |

### base.css — Reset e Elementos Base

- **Reset universal:** `margin:0; padding:0; box-sizing:border-box`
- **Body:** font-family Exo 2, background `--dark`, overflow-x hidden
- **Noise overlay:** `body::before` com SVG fractalNoise em opacity 1% (textura sutil)
- **Headings:** h1-h4 com Rajdhani, cor `#fff`
- **Links:** cor `--gold`, hover `--gold-light`
- **Selection:** fundo dourado semi-transparente
- **Scrollbar:** customizada WebKit (track escuro, thumb `--dark4`)
- **Utilities:** `.text-green/blue/red/gold/muted/dim`, `.font-heading/mono`
- **Section patterns:** `.section-label` (eyebrow), `.section-title` (com underline dourado via `::after`), `.section-subtitle`

### components.css — Componentes UI

#### Nav
- Fixo no topo (`position: fixed; z-index: 100`)
- Transparente → `rgba(7,8,15,.97)` com backdrop-filter blur no scroll
- Brand: Rajdhani bold branco com ícone dourado
- Links: 10px uppercase, cor `--text-muted` → branco no hover
- Botão Steam Workshop dentro do nav força `color: #000` via `.nav-links a.btn`

#### Botões
- `.btn` base: inline-flex, Rajdhani, uppercase, letter-spacing 2px
- `.btn-primary`: fundo `--gold`, texto `#000`, shimmer via `::after` animado (`shimmer` keyframe: `left: -100% → 150%`)
- `.btn-outline`: transparente, borda dourada, texto branco
- `.btn-steam`: gradiente azul escuro Steam, texto cinza claro
- `.btn-lg`: padding maior

#### Language Switcher
- Pill-shaped (border-radius full) com 2 botões lado a lado
- Flags via CDN `lipis/flag-icons@7.3.2` (SVGs reais 🇧🇷 🇺🇸)
- Ativo: fundo `--gold`, texto escuro
- Inativo: fundo transparente, borda sutil

#### Cards
- `.card`: fundo `--dark2`, borda `--border`, border-radius 12px
- Top-line dourada via `::before` (2px gradient)
- Hover: borda mais visível + shadow
- `.card-magic`: efeito hover radial dourado via `::after`

#### Outros Componentes
- `.class-card`: layout horizontal (ícone + texto)
- `.stat-card`: número grande dourado + label
- `.tag`: badge com cor por variante (gold/blue/red)
- `.feature-row`: ícone + título + descrição
- `.category-header`: borda colorida por categoria

### layout.css — Layout Estrutural

#### Container
- `.container`: max-width 1200px, padding 40px lateral
- `.container-narrow`: max-width 900px

#### Hero (100vh)
- `overflow: visible` (para efeitos não cortarem)
- Background: `var(--dark)` + radial-gradient quente sutil
- **3 gradient layers:** `.hero-bg::before`, `.g1`, `.g2`, `.g3` — todos com `rgba(212,136,28,.04-.08)`
- **Stars:** 2 pseudo-elementos com 15+ radial-gradient dots (dourados + brancos), animação `twinkle` 5s/3.5s
- **clip-path: inset(0)** em todos os filhos do hero para manter overflow controlado
- **Content:** z-index 10
- **Title:** branco, `-webkit-text-stroke: 0.5px #000`, animação `letterWave` por letra
- **Subtitle:** peso 300, cor `--text-body`
- **Stats:** 7 contadores dourados com glow

#### Hero Title — Animação de Onda
- JS envolve cada letra em `<span class="letter">`
- CSS: cada `.letter` tem `animation: letterWave 2.5s ease-in-out infinite` com delay escalonado (0s → 1.05s)
- Keyframe: `translateY(0) → translateY(-6px)` — efeito onda suave

#### Grids
- `.grid-2/3/4`: CSS Grid com repeat
- `.grid-classes`: auto-fill minmax(280px, 1fr)

#### Features Split
- 2 colunas lado a lado, `.reverse` usa `direction: rtl`

#### Loop Diagram
- Flex horizontal com step icons (64px, borda circular) + setas

#### Window Mockup
- Simulação de janela do jogo: header (dots + título), tabs, body
- Tabs usam `data-tab` para mostrar/esconder painéis via JS

#### Footer
- Grid 4 colunas, fundo `#04050d`
- Brand, 3 colunas de links, bottom bar

#### Responsive
- **1024px:** grid-4 → 2 colunas
- **700px:** nav desktop → hidden, mobile toggle → flex, grids → 1 coluna, hero stats wrap
- **480px:** padding reduzido

### animations.css — Keyframes e Utilitários

| Keyframe | Uso | Timing |
|----------|-----|--------|
| `twinkle` | Estrelas do hero | 5s / 3.5s, alternate |
| `float` | Elementos flutuantes | 4s |
| `pulse-glow` | Box-shadow pulsante | 3s |
| `shimmer` | Brilho nos botões | 3s, `left: -100% → 150%` |
| `slide-up` | Reveal scroll | 0.6s |
| `fade-in` | Fade simples | — |
| `scale-in` | Scale up | — |
| `border-glow` | Borda pulsante | 3s |
| `spin` | Rotação contínua | — |

- **Reveal system:** `.reveal` (opacity 0, translateY 24px) → `.reveal.visible` (visível)
- **Delays:** `.reveal-delay-1` a `.reveal-delay-4` (0.1s → 0.4s)
- **Hover:** `.hover-lift` (translateY -4px), `.hover-glow` (shadow glow)

### rpg-effects.css — Efeitos Visuais RPG

#### Efeitos Globais (position: fixed, cobrem toda a tela)

| Elemento | Quantidade | Descrição |
|----------|------------|-----------|
| `.global-particles` | 30 divs | 3 tipos: `.g` (dourado), `.w` (branco), `.d` (poeira) |
| `.global-runes` | 10 spans | Unicode runes com animação flutuante |
| `.global-circles` | 4 divs | Anéis rotacionando com borda dashed |
| `.global-vignette` | 1 | Vinheta escura radial nas bordas |

**Partículas (`.gp`):**
- 30 elementos espalhados via `left: 3%-95%`
- 3 tipos visuais: dourado (`.g`), branco sparkle (`.w`), poeira sutil (`.d`)
- Tamanhos: 1px, 2px, 3px
- Durações: 14s → 35s (cada uma individual)
- Delays negativos (desiniciam em momentos diferentes)
- Keyframe `gpFloat`: sobe de baixo para cima com sway lateral e scale

**Runas (`.gr`):**
- 10 caracteres Unicode (&#5765;, &#5792;, &#5816;, &#5828;)
- Opacidade 4-7%, text-shadow sutil
- Animação `grFloat`: translateY + rotate em 16s

**Círculos Mágicos (`.gc`):**
- 4 anéis com borda sólida + pseudo `::before` dashed
- Rotação `gcSpin` 30s-50s, alguns em reverse
- Opacidade 2-4%

#### Efeitos do Hero (position: absolute, dentro do hero)

| Elemento | Descrição |
|----------|-----------|
| `.rpg-vignette` | Vinheta radial escura (opacity 60%) |
| `.hero-particles` | 12 partículas heróicas com `particleDrift` |
| `.hero-fade` | Gradiente inferior para footer |

#### Efeitos de Seção

| Elemento | Descrição |
|----------|-----------|
| `.section-divider` | Linha dourada + 3 diamantes `◆ ◆ ◆` |
| `.section-glow-line` | Linha gradiente dourada no topo |
| `.section-texture` | Padrão SVG diamante (opacity 2.5%) |
| `.card-magic` | Glow radial dourado no hover |

### mobile.css — Navegação Mobile

- `.mobile-toggle`: botão hamburger, display none → flex em ≤700px
- `.mobile-nav`: overlay fullscreen, backdrop-filter blur 16px, opacity 0→1
- `.mobile-nav.open`: display flex + opacity 1 + pointer-events all
- Links grandes (fs-2xl), hover branco
- Botão X para fechar
- Language switcher com botões maiores (touch-friendly)

---

## JavaScript — main.js

### Inicialização (IIFE)
```javascript
(function() {
  // Toda a lógica envolvida em IIFE para evitar vazamento de escopo
})();
```

### Sistema de Tradução (i18n)
- **Arquivos JSON:** `i18n/pt-BR.json` e `i18n/en.json` (214 chaves cada)
- **Detecção automática:** `navigator.language` → padrão pt-BR
- **Armazenamento:** `localStorage` com chave `rpgskills_lang`
- **Aplicação:** `querySelectorAll('[data-i18n]')` → substitui `textContent`
- **Elementos especiais:** `[data-i18n-html]` substitui `innerHTML`
- **Traduções embutidas:** JSONs são importados inline no JS (não usa fetch, compatível com `file://`)

### Language Switcher
- Dois botões `.lang-option` com `data-lang="pt-BR"` e `data-lang="en"`
- `.active` toggle baseado no idioma atual
- Flags via CDN `flag-icons` (`.fi.fi-br`, `.fi.fi-us`)

### Nav Scroll
- Observer: `.nav.scrolled` quando `scrollY > 40`
- Adiciona fundo escuro + backdrop blur + borda

### Scroll Reveal
- `IntersectionObserver` com threshold 0.12
- Adiciona `.visible` quando intersecta, depois para de observar
- Root margin: `0px 0px -40px 0px`

### Mobile Nav
- Toggle: `.mobile-toggle` abre `.mobile-nav`
- Close: `.mobile-nav-close` ou clicar em qualquer link fecha
- Previne scroll do body quando aberto

### Hero Title Letter Wave
- Encontra `.hero-title`, extrai texto
- Cria `<span class="letter">` para cada caractere
- Espaços recebem classe `.space` (width: 0.35em)
- CSS aplica delay escalonado por `nth-child`

### Window Tab Switch
- Tabs com `data-tab` que mostra/esconde painéis
- Remove `active` de todas, adiciona na clicada
- Esconde todos os painéis, mostra o correspondente

---

## HTML — Estrutura da Página

### Head
- Meta charset, viewport, theme-color, description
- Google Fonts: Exo 2 (300-600) + Rajdhani (400-700)
- Flag Icons CDN: `lipis/flag-icons@7.3.2`
- 7 CSS files na ordem correta

### Seções (em ordem)
1. **Global BG Effects** — particles, runes, circles, vignette (position: fixed)
2. **Nav** — brand, links, lang switcher, Steam CTA
3. **Mobile Nav** — overlay fullscreen
4. **Hero** — badge, title (wave animation), subtitle, buttons, 7 stats
5. **Section Divider** — diamonds
6. **Features** — 6 cards com ícones e textos
7. **Section Divider**
8. **Progression Loop** — diagrama 5 etapas + 2 cards (XP sources + Config)
9. **Section Divider**
10. **Classes** — 33 classes organizadas por 5 categorias (Combat, Defense, Mobility, Utility, Settler)
11. **Section Divider**
12. **Window UI** — mockup com 3 abas (Status, Classes, Shop)
13. **Section Divider**
14. **QoL Features** — 6 cards de qualidade de vida
15. **Section Divider**
16. **Config & Commands** — menu de config + comandos
17. **Section Divider**
18. **Hotkeys** — atalhos teclado e controle
19. **Section Divider**
20. **CTA Final** — chamada para ação (Steam Workshop + YouTube)
21. **Section Divider**
22. **Footer** — brand, links, copyright

### Atributos de Tradução
- `data-i18n="chave"` — substitui texto
- `data-i18n-html="chave"` — substitui HTML
- Chaves seguem padrão: `seção.elemento.propriedade`

---

## Paleta de Cores (Final)

| Nome | Hex | Uso |
|------|-----|-----|
| **Gold** | `#d4881c` | Botões, badges, títulos, links, destaques |
| **Gold Light** | `#e8a030` | Hover, brilho |
| **Gold Dim** | `#8a5a10` | Texto secundário dourado |
| **White** | `#fff` | Headings, texto principal |
| **Text Body** | `#e0e0e0` | Parágrafos |
| **Text Muted** | `#999` | Labels, nav links |
| **Text Dim** | `#666` | Footer, texto discreto |
| **Dark** | `#09080a` | Fundo principal |
| **Dark 2** | `#0d0b0e` | Cards, seções alternadas |
| **Dark 3** | `#120e12` | Window mockup,深层 |
| **Dark 4** | `#1a1418` | Scrollbar, header mockup |
| **Blue** | `#60a5fa` | Categoria Defesa, links mágicos |
| **Red** | `#ef4444` | Categoria Combate, erro |
| **Purple** | `#a78bfa` | Categoria Mobilidade, raro |

---

## Animações (Resumo)

| Animação | Elemento | Efeito |
|----------|----------|--------|
| `letterWave` | Hero title (por letra) | Onda vertical Y ±6px |
| `gpFloat` | 30 partículas globais | Sobe + sway lateral |
| `grFloat` | 10 runas | Flutua + rotaciona |
| `gcSpin` | 4 círculos mágicos | Rotação 30-50s |
| `twinkle` | Estrelas do hero | Pulsa opacidade |
| `shimmer` | Botão primário | Brilho diagonal |
| `particleDrift` | 12 partículas hero | Sobe com sway |
| `scrollBounce` | (removido) | — |

---

## Funcionalidades JavaScript

1. **i18n bilateral** (PT-BR ↔ EN-US) com detecção automática
2. **Persistência** de idioma via localStorage
3. **Scroll reveal** com IntersectionObserver
4. **Nav sticky** com mudança de visual
5. **Mobile nav** fullscreen com blur
6. **Hero title** com letras animadas individualmente
7. **Window tabs** de demonstração interativa

---

## Compatibilidade

- **Navegadores:** Chrome, Firefox, Safari, Edge (modernos)
- **Protocolo:** Funciona via `file://` (sem fetch)
- **Mobile:** Responsivo com breakpoints 1024px, 700px, 480px
- **GitHub Pages:** `.nojekyll` presente
- **Sem dependências externas:** exceto Google Fonts e Flag Icons CDN

---

## Decisões de Design

1. **Sem framework CSS** — código leve, controle total
2. **Posições fixed para efeitos globais** — partículas/runas visíveis durante scroll
3. **clip-path: inset(0)** — impede que efeitos do hero sejam cortados
4. **Gold como cor primária** — associação com RPG/progressão/ouro
5. **Textos em branco** — legibilidade máxima em fundo escuro
6. **Dourado apenas em destaques** — hierarquia visual clara
7. **Animações sutis** — efeitos RPG sem serem intrusivos
8. **JSON embutido no JS** — compatibilidade com file:// protocol
