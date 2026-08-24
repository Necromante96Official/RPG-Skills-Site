# Forbidden Legacy — Arquitetura CSS Completa

> Guia de referencia para manutencao e criacao de estilos no projeto.
> Baseado na auditoria de todos os HTMLs do repositorio `forbidden-legacy-releases`.

---

## 1. Tokens de Cor (Design Tokens)

### 1.1 Paleta Principal

```css
:root {
  /* OURO (Cor Primaria) */
  --gold:       #c8973a;   /* Titulos, CTAs, bordas ativas, destaques */
  --gold-light: #e8b840;   /* Hover states, titulos secundarios, badges */
  --gold-dim:   #7a5a18;   /* Labels, stats secundarios, texto mais leve */
  --gold3:      #ffe49a;   /* Brilho maximo (usado na Loja para Souls) */

  /* FUNDOS (Escala de Escuro) */
  --dark:       #09080a;   /* Background principal do body */
  --dark2:      #0d0b0e;   /* Cards, paineis, modais */
  --dark3:      #120e12;   /* Secoes alternadas, fundos de grid */

  /* BORDAS */
  --border:     rgba(200,151,58,.13);  /* Bordas gerais, separadores */

  /* TEXTO */
  --text-muted: #6a5830;   /* Texto secundario, descricoes, meta info */
  --text-body:  #9a8050;   /* Texto principal do body */
}
```

### 1.2 Acentos Pontuais (nao generalizados)

```css
/* Usados em contextos especificos — NAO sao tokens globais */
--crimson:    #6a1008;   /* Hero do index — fundo avermelhado escuro */
--red:        #c83010;   /* Hero — acento vermelho */
--red-light:  #e86020;   /* Hero — acento vermelho claro */
--verde:      #00A060;   /* Status online, sucesso, pagamento confirmado */
--yt-red:     #C00000;   /* Secao YouTube — vermelho da marca */
```

### 1.3 Tokens de Compatibilidade (Legado)

Variaveis com nomes em portugues que existem para retrocompatibilidade.
**Nao criar novas com esses nomes — usar os nomes em ingles.**

```css
:root {
  --ouro:      #c8973a;   /* sinonimo de --gold */
  --ouro-brt:  #e8b840;   /* sinonimo de --gold-light */
  --ouro-esc:  #7a5a18;   /* sinonimo de --gold-dim */
  --fundo:     #09080a;   /* sinonimo de --dark */
  --painel:    #0d0b0e;   /* sinonimo de --dark2 */
  --painel2:   #120e12;   /* sinonimo de --dark3 */
  --texto:     #c8b888;   /* antigo — usar --text-body */
  --texto-dim: #7a6a48;   /* antigo — usar --text-muted */
}
```

---

## 2. Cores por Contexto

### 2.1 Discord

```css
--dc-color:       #7289da;   /* Cor da marca Discord */
--dc-bg:          rgba(88,101,242,0.08);
--dc-bg-hover:    rgba(88,101,242,0.18);
--dc-border:      rgba(88,101,242,0.3);
--dc-text:        #99aaf5;   /* Hover text */
--dc-online:      #3ba55c;   /* Ponto verde — online */
--dc-offline:     #747f8d;   /* Ponto cinza — offline */
```

### 2.2 YouTube

```css
--yt-red:         #C00000;   /* Cor da marca YouTube */
--yt-red-hover:   #E00000;   /* Hover */
--yt-border:      #E00000;   /* Borda do play icon */
```

### 2.3 Status / Feedback

```css
--success:        #20C870;   /* Pagamento confirmado, licenca */
--success-bg:     rgba(0,160,90,0.16);
--success-border: #00A060;
--success-glow:   rgba(0,160,90,0.18);

--error:          #E04040;   /* Erros */
--warning:        #8a6040;   /* Avisos */
```

### 2.4 Stripe (Pagamento Internacional)

```css
--stripe-color:   #635bff;
--stripe-text:    #a29bff;
--stripe-bg:      rgba(99,91,255,0.10);
--stripe-hover:   rgba(99,91,255,0.22);
--stripe-glow:    rgba(99,91,255,0.12);
```

### 2.5 Regiao / Internacionalizacao

```css
--region-br-border: rgba(124,199,255,.2);
--region-br-text:   #8dc8e0;
--region-br-bg:     rgba(20,60,90,.1);
```

### 2.6 Raridade de Cartas

```css
--rarity-N:  #999999;
--rarity-R:  #88aadd;
--rarity-SR: #bb88ee;
--rarity-UR: #e8b840;   /* Usa --gold-light */
```

### 2.7 Tiers da Loja (Souls)

```css
/* Essencial (Bronze) */
--tier1:      #b87332;
--tier1-soul: rgba(184,115,50,.9);
--tier1-glow: rgba(255,180,100,.3);

/* Duelista (Azul Gelo) */
--tier2:      #8ab4cc;
--tier2-soul: rgba(124,199,255,.9);
--tier2-glow: rgba(180,230,255,.3);

/* Templo (Ouro) */
--tier3:      #e8b840;
--tier3-soul: rgba(232,184,48,.95);
--tier3-glow: rgba(255,240,160,.4);

/* Faraó (Amatista) */
--tier4:      #a06cc0;
--tier4-soul: rgba(155,89,182,.9);
--tier4-glow: rgba(210,150,255,.35);
```

---

## 3. Tipografia

### 3.1 Fontes

```css
--font-heading: 'Bebas Neue', sans-serif;   /* Titulos, CTAs, numeros grandes */
--font-body:    'Inter', 'Segoe UI', sans-serif;  /* Texto corrido */
```

### 3.2 Hierarquia de Tamanhos

| Elemento | Tamanho | Fonte | Peso | Cor |
|---|---|---|---|---|
| Logo fallback | 18px | Bebas Neue | 400 | `--gold` |
| Hero title (landing) | `clamp(44px, 9vw, 88px)` | Bebas Neue | 400 | `--gold` |
| Hero title (store) | `clamp(50px, 9vw, 100px)` | Bebas Neue | 400 | `--gold` |
| Page hero title | `clamp(36px, 6vw, 72px)` | Bebas Neue | 400 | `--gold` |
| Section title | 32-36px | Bebas Neue | 400 | `--gold` |
| Feature title | 14px | Inter | 600 | `--gold-light` |
| Statement text | `clamp(22px, 3.5vw, 42px)` | Bebas Neue | 400 | `--gold` |
| Feature number | 52px | Bebas Neue | 400 | `rgba(212,168,67,.07)` |
| Price amount | 42px | Bebas Neue | 400 | `--gold` |
| Souls count (store) | 52px | Bebas Neue | 400 | tier color |
| Nav links | 10px | Inter | 400 | `--text-muted` |
| Labels / Eyebrow | 10px | Inter | 400 | `--gold-dim` |
| Body text | 13-15px | Inter | 300-400 | `--text-body` |
| Muted text | 11-13px | Inter | 400 | `--text-muted` |

### 3.3 Letter-Spacing Padrao

```css
--ls-tight:    1px;      /* Titulos de secao */
--ls-normal:   1.5px;    /* Links de nav */
--ls-wide:     2px;      /* Botoes CTA */
--ls-wider:    3px;      /* Labels small caps */
--ls-widest:   4-5px;    /* Eyebrows, labels de secao */
```

---

## 4. Gradientes

### 4.1 Backgrounds de Secao

```css
/* Hero (landing) */
background: radial-gradient(ellipse 80% 60% at 50% 30%, #1a0808 0%, var(--dark) 70%);

/* Hero (loja) */
background:
  radial-gradient(ellipse 70% 55% at 50% 20%, rgba(100,40,10,.35) 0%, transparent 70%),
  radial-gradient(ellipse 40% 40% at 80% 70%, rgba(60,20,80,.2) 0%, transparent 60%),
  radial-gradient(ellipse 50% 50% at 20% 60%, rgba(10,30,60,.15) 0%, transparent 60%),
  var(--dark);

/* Statement / Campaign */
background: linear-gradient(180deg, var(--dark) 0%, #120808 50%, var(--dark) 100%);

/* Page hero (subpages) */
background:
  linear-gradient(to bottom, rgba(9,8,10,0) 40%, var(--dark) 100%),
  radial-gradient(ellipse at 50% 30%, rgba(200,151,58,.10) 0%, transparent 70%);

/* Discord card */
background: linear-gradient(135deg, rgba(212,168,67,.03) 0%, rgba(10,12,32,.9) 100%);

/* Founder card */
background: linear-gradient(135deg, rgba(196,58,16,.05) 0%, rgba(10,8,20,.95) 60%, rgba(212,168,67,.04) 100%);

/* Cards de feature / booster */
background: linear-gradient(135deg, #150a08, #0e0808);
```

### 4.2 Bordes Decorativas (Top Line)

```css
/* Padrao para cards e paineis */
::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(200,151,58,.25), transparent);
}

/* Founder card — mais dramatico */
::before {
  background: linear-gradient(90deg, transparent, rgba(212,168,67,.5), rgba(196,58,16,.4), transparent);
}

/* Section divider */
background: linear-gradient(90deg, transparent, rgba(200,151,58,.15), transparent);
```

### 4.3 Fade-Outs

```css
/* Hero -> conteudo */
background: linear-gradient(180deg, transparent, var(--dark));

/* Stars twinkling */
animation: twinkle 5s ease-in-out infinite alternate;
```

---

## 5. Sombras

### 5.1 Box Shadows

```css
/* Cards gerais */
box-shadow: 0 8px 32px rgba(0,0,0,.7);

/* Cards da loja */
box-shadow: inset 0 0 0 1px rgba(200,151,58,.12);

/* Modais */
box-shadow: 0 12px 40px rgba(0,0,0,.6);

/* Plataformas de download (hover) */
box-shadow: 0 0 18px rgba(212,168,67,0.15);

/* Discord card */
box-shadow: 0 4px 20px rgba(0,0,0,0.4);

/* Founder card */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
```

### 5.2 Text Shadows

```css
/* Logo / Titulo hero */
text-shadow:
  0 0 40px rgba(212,168,67,.5),
  0 0 80px rgba(196,58,16,.2),
  -2px -2px 0 #3a1a00, 2px -2px 0 #3a1a00,
  -2px  2px 0 #3a1a00, 2px  2px 0 #3a1a00;

/* Titulo da loja (mais sutil) */
text-shadow:
  0 0 40px rgba(200,151,58,.3),
  0 0 80px rgba(200,151,58,.15),
  0 0 160px rgba(155,89,182,.1);

/* Nav logo fallback */
text-shadow: 0 0 16px rgba(200,151,58,.4);

/* Statement / Titles */
text-shadow: 0 0 30px rgba(212,168,67,.2);
```

### 5.3 Drop Shadows (Filtros)

```css
/* Logo do hero */
filter: drop-shadow(0 0 30px rgba(212,168,67,.3)) drop-shadow(0 4px 8px rgba(0,0,0,.8));
```

---

## 6. Bordas

### 6.1 Borda Padrao

```css
border: 1px solid var(--border);                    /* Cards, grids, separadores */
border: 1px solid rgba(212,168,67,.22);             /* Cards destacados */
border: 1px solid rgba(212,168,67,.35);             /* Botoes outline */
border: 1px solid rgba(212,168,67,.14);             /* Tags, badges menores */
```

### 6.2 Bordas Ativas / Hover

```css
border-color: var(--gold);                          /* Hover de card */
border-color: rgba(212,168,67,.28);                /* Hover sutil */
border-color: rgba(212,168,67,.5);                 /* Hover forte */
```

### 6.3 Border-Radius

```css
border-radius: 2px;    /* Botoes CTA, nav-cta */
border-radius: 3px;    /* Badges, tags, inputs */
border-radius: 4px;    /* Feature cards, notices */
border-radius: 6px;    /* Cards de pack, float cards */
border-radius: 8px;    /* Cards de screenshot, feature visual */
border-radius: 12px;   /* Cards grandes (Discord, Founder) */
border-radius: 20px;   /* Badges arredondados (Founder badge, region chip) */
border-radius: 50%;    /* Avatares, icones circulares */
```

---

## 7. Animacoes

### 7.1 Animacoes Existentes

| Nome | Duracao | Uso |
|---|---|---|
| `twinkle` | 5s / 3.5s | Estrelas do fundo |
| `shimmer` | 3s | Efeito de brilho em botoes dourados |
| `logoGlow` | 3s | Pulsacao do logo no hero |
| `scrollBounce` | 2s | Indicador de scroll |
| `floatA/B/C/D` | 5.5s - 7.5s | Cards flutuantes do hero |
| `portalPulse` | 4s | Portal da loja |
| `ringExpand` | 5s | Aneis do portal |
| `drift` | variavel | Particulas de almas (loja) |
| `soulFloat` | 3.5s | Corpo da alma animado |
| `coreGlow` | 2.5s | Brilho interior da alma |
| `auraBreath` | 3.5s | Aura externa |
| `wispSway` | 2.5s | Tentaculos da alma |
| `eyeBlink` | 4s | Olhos da alma |
| `orbitParticle` | 2.5s-3.5s | Particulas orbitais |
| `titleBreath` | 4s | Pulsacao do titulo (loja) |
| `greenPulse` | 2s | Ponto verde de status |
| `spin` | 0.7-0.8s | Spinners de loading |

### 7.2 Transicoes Padrao

```css
transition: color .2s;                /* Links, texto */
transition: background .2s;           /* Botoes, fundos */
transition: border-color .2s;         /* Cards, inputs */
transition: background .35s, border-color .35s;  /* Nav scroll */
transition: opacity .6s ease, transform .6s ease; /* Reveal */
```

---

## 8. Componentes Padrao

### 8.1 Nav

```css
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 300;
  padding: 12px 40px;
  background: rgba(7,8,15,0);  /* transparente -> scrolled */
  border-bottom: 1px solid transparent;
}
nav.scrolled {
  background: rgba(7,8,15,.97);
  border-bottom-color: var(--border);
}
```

### 8.2 Botoes

```css
/* Primario (dourado) */
.btn-gold {
  font-family: 'Bebas Neue'; font-size: 14px; letter-spacing: 2px;
  color: var(--dark); background: var(--gold);
  padding: 14px 36px; border-radius: 2px;
  position: relative; overflow: hidden;
}
.btn-gold::after { /* shimmer effect */ }

/* Outline */
.btn-outline {
  color: var(--gold); background: transparent;
  border: 1px solid rgba(212,168,67,.35);
  padding: 14px 36px; border-radius: 2px;
}

/* Loja — clip-path angular */
.btn-primary {
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
  background: linear-gradient(135deg, var(--gold2), var(--gold));
}
```

### 8.3 Cards

```css
.feature-card {
  background: var(--dark2);
  border: 1px solid var(--border);
  border-radius: 4px; padding: 26px 22px;
  position: relative; overflow: hidden;
}
.feature-card::before { /* top gradient line */ }
.feature-card:hover { border-color: rgba(200,151,58,.28); }
```

### 8.4 Labels / Eyebrows

```css
.sec-label, .label, .section-eyebrow {
  font-size: 10px; letter-spacing: 4px;
  color: var(--gold-dim); text-transform: uppercase;
}
```

### 8.5 Section Title

```css
.sec-title, .section-title {
  font-family: 'Bebas Neue'; font-size: clamp(22px, 3vw, 36px);
  color: var(--gold); letter-spacing: 1px;
}
.sec-title::after {
  content: ''; display: block; width: 48px; height: 2px;
  background: var(--gold); margin-top: 10px;
}
.sec-title.center::after { margin: 10px auto 0; }
```

### 8.6 Ornament Divider

```css
.ornament-div, .section-sep {
  text-align: center; letter-spacing: 14px; font-size: 12px;
  color: rgba(212,168,67,.12); padding: 16px 0;
}
```

### 8.7 Reveal (Scroll Animation)

```css
.reveal {
  opacity: 0; transform: translateY(22px);
  transition: opacity .6s ease, transform .6s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
```

---

## 9. Estrutura de Secoes (Padrao de Layout)

### 9.1 Pagina Tipo (Subpaginas)

```
nav (fixed)
+-- page-hero (padding: 120px 20px 60px)
|   +-- stars (absolute)
|   +-- page-hero-label
|   +-- page-hero-title
|   +-- page-hero-sub
|   +-- page-hero-desc
+-- page-content (max-width: 1100px, padding: 72px 20px 80px)
|   +-- features-grid / features-grid-2
|   |   +-- feature-card (repeated)
|   +-- section-specific content
+-- footer
```

### 9.2 Landing Page

```
nav (fixed)
+-- hero (min-height: 100vh)
|   +-- stars
|   +-- float-card x 6 (absolute)
|   +-- hero-logo
|   +-- hero-pills
|   +-- hero-btns
+-- statement
+-- ss-section (screenshots grid)
+-- feat-section (features alternadas)
+-- campaign-section (NPCs)
+-- pages-section (links internos)
+-- discord-section
+-- founder-section
+-- yt-bg (YouTube)
+-- download-bg
+-- #novidades (updates)
+-- footer
```

### 9.3 Loja

```
nav (fixed)
+-- store-hero (min-height: 100vh)
|   +-- hero-bg (gradient layers)
|   +-- portal-ring x 4
|   +-- soul-particles
|   +-- hero-content
+-- packs-section
|   +-- packs-grid (4 columns)
|   |   +-- pack-card x 4 (t-1 a t-4)
|   +-- how-grid (3 columns)
|   +-- checkout-wrap (form + summary)
+-- pix-modal
+-- pay-choice-overlay
+-- footer
```

---

## 10. Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) {
  .packs-grid { grid-template-columns: repeat(2, 1fr); }
  .checkout-wrap { grid-template-columns: 1fr; }
}

/* Mobile */
@media (max-width: 700px) {
  nav { padding: 12px 20px; }
  .nav-links, .nav-cta { display: none !important; }
  .mobile-nav-bar { display: flex; }
  .features-grid { grid-template-columns: 1fr; }
  .ss-grid { grid-template-columns: 1fr; height: auto; }
  .feat-row { grid-template-columns: 1fr; }
  .fc-l2, .fc-r2, .fc-l3, .fc-r3 { display: none; }
  .steps { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile small */
@media (max-width: 640px) {
  .packs-grid { grid-template-columns: 1fr 1fr; }
  .how-grid { grid-template-columns: 1fr; }
  .fields-row { grid-template-columns: 1fr; }
}

/* Mobile tiny */
@media (max-width: 480px) {
  .packs-grid { grid-template-columns: 1fr; }
  .nav-logo { margin: 0 auto; }
}
```

---

## 11. Mobile Nav

```css
.mobile-nav-bar {
  display: none; position: fixed; top: 52px; left: 0; right: 0; z-index: 198;
  background: rgba(5,3,1,.97);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}
.mobile-discord-bar {
  background: rgba(88,101,242,.07);
  border-bottom: 1px solid rgba(88,101,242,.15);
  color: #7289da; font-size: 11px;
}
.mobile-nav-links a {
  padding: 10px 16px; font-size: 11px; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--text-muted);
  border-right: 1px solid var(--border);
}
```

---

## 12. Footer

```css
footer {
  background: #04050d;
  border-top: 1px solid var(--border);
  padding: 40px;
}
.footer-brand .footer-logo {
  font-family: 'Bebas Neue'; font-size: 18px; color: var(--gold);
}
.footer-brand p { font-size: 11px; color: #3a3020; }
.footer-col h4 {
  font-size: 10px; letter-spacing: 2px; color: var(--gold-dim);
  text-transform: uppercase;
}
.footer-col a { font-size: 12px; color: #3a3020; }
.footer-col a:hover { color: var(--gold); }
.footer-bottom {
  border-top: 1px solid rgba(212,168,67,.06);
}
.footer-bottom span { font-size: 11px; color: #2a2018; }
```

---

## 13. Bilingual (PT/EN)

```css
/* Regra base — esconder EN */
[data-lang="en"] { display: none !important; }
span[data-lang="en"] { display: none !important; }

/* Quando body tem classe .en — inverter */
body.en [data-lang="pt"] { display: none !important; }
body.en span[data-lang="pt"] { display: none !important; }
body.en [data-lang="en"] { display: block !important; }
body.en span[data-lang="en"] { display: inline !important; }
body.en li[data-lang="en"] { display: flex !important; }

/* Casos especiais */
body.en td[data-lang="en"] { display: table-cell !important; }
body.en .cycle-step[data-lang="en"] { display: block !important; }
body.en .pack-select-hint[data-lang="en"] { display: flex !important; }
```

---

## 14. Enumeracao de Cores Hardcoded (Fora de Tokens)

Cores usadas diretamente no CSS sem variavel — candidatas a tokenizacao:

| Cor | Ocorrencia | Sugestao |
|---|---|---|
| `#3a1a00` | Text-shadow outline do logo | Manter hardcoded (outline decorativo) |
| `#3a3020` | Texto de footer, hero-scroll, fine print | Criar `--text-faint` |
| `#2d2820` | Placeholder de screenshot | Criar `--text-ghost` |
| `#2a2018` | Footer bottom | Usar `--text-faint` |
| `#04050d` | Background do footer | Criar `--dark-footer` |
| `#7a6a48` | Texto hero-sub | Usar `--text-muted` |
| `#8a7450` | Perk text | Usar `--text-muted` |
| `#c8b888` | Token legado `--texto` | Manter como legado |
| `rgba(212,168,67,.X)` | ~200+ ocorrencias | Criar `--gold-rgb: 212,168,67` e usar `rgba(var(--gold-rgb), .X)` |

---

## 15. Checklist para Novas Paginas

Ao criar uma nova pagina HTML para o Forbidden Legacy:

- [ ] Copiar bloco `:root` com todos os tokens (secao 1.1 + 1.2)
- [ ] Incluir Google Fonts: `Bebas Neue` + `Inter`
- [ ] Incluir Tabler Icons CSS
- [ ] Adicionar reset: `*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }`
- [ ] Estilos de nav (com mobile nav bar)
- [ ] Estilos de footer
- [ ] Regras bilingual `[data-lang]`
- [ ] Classe `.reveal` + JS do IntersectionObserver
- [ ] Usar **apenas variaveis** — nunca cores hardcoded fora de contexto decorativo
- [ ] Manter responsive breakpoints (700px / 480px)
- [ ] Testar PT e EN
- [ ] Verificar contraste (texto em fundo escuro precisa de pelo menos WCAG AA)

---

## 16. Nota sobre loja_preview.html

Este arquivo divergiu dos tokens principais:

| Diferenca | index.html (padrao) | loja_preview.html |
|---|---|---|
| `--dark` | `#09080a` | `#08070a` |
| `--dark3` | `#120e12` | `#121018` |
| Text muted | `--text-muted: #6a5830` | `--muted: #6a5830` |
| Text body | `--text-body: #9a8050` | `--body: #9a8050` |
| Token extra | (nao existe) | `--gold3: #ffe49a` |

**Recomendacao**: Unificar tokens. O loja_preview deve usar os mesmos nomes de variaveis do index.html. A diferenca de `#09080a` vs `#08070a` e imperceptivel visualmente e causa confusao.

---

## 17. Inconsistencias Encontradas entre Arquivos

| Problema | Arquivos Afetados |
|---|---|
| Nomes de variaveis diferentes para o mesmo proposito | `--text-muted` vs `--muted`; `--text-body` vs `--body` |
| Valores de background diferentes para `--dark` | `index.html`=`#09080a`; `loja_preview.html`=`#08070a` |
| Tokens faltando em algumas paginas | `--verde` e `--yt-red` so existem em `index.html` |
| CSS do nav duplicado ~15 vezes com variacoes sutis | Todas as paginas |
| Stars animation duplicada inteiramente | index, boosters, features |
| Footer duplicado com estrutura quase identica | Todas as paginas |
| Mobile nav bar duplicada | Todas as paginas |
| Bilingual rules `[data-lang="en"]` duplicadas | Todas as paginas |
| Reveal animation duplicada | Todas as paginas |
| Cookie banner duplicada com mesmo JS | features, boosters |

---

## 18. Mapa de Cores por Entidade Visual

```
OURO (primario)
  #c8973a  --gold          Titulos, CTAs, bordas ativas
  #e8b840  --gold-light    Hover, badges, raridade UR
  #7a5a18  --gold-dim      Labels, eyebrows
  #ffe49a  --gold3         Brilho maximo (Souls)
  #c8b888  --texto         Legado (nao usar mais)

FUNDO (escala escura)
  #09080a  --dark          Body
  #0d0b0e  --dark2         Cards, paineis
  #120e12  --dark3         Secoes alternadas
  #04050d  (hardcoded)     Footer

TEXTO
  #9a8050  --text-body     Texto principal
  #6a5830  --text-muted    Texto secundario
  #3a3020  (hardcoded)     Texto mais leve (footer links)
  #2a2018  (hardcoded)     Footer bottom

ACENTOS EXTERNOS
  #7289da  Discord         Links, badges, nav
  #3ba55c  Verde           Online, sucesso
  #C00000  YouTube         Vermelho da marca
  #635bff  Stripe          Pagamento internacional
  #8dc8e0  Regiao BR       Chip de regiao
```

---

*Documento gerado em 2026-08-20. Atualizar sempre que novos tokens forem adicionados ao projeto.*
