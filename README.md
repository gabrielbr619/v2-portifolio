# Gabriel Lara — Portfolio v2

Portfolio pessoal redesenhado do zero com **Bento Grid**, glassmorphism e gradient mesh animado.

**Live:** [gabrielbr619.vercel.app](https://gabrielbr619.vercel.app) <!-- atualizar após deploy -->

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS v4** (CSS-first config)
- **Framer Motion** — animações de entrada e hover
- **Static Export** → deploy na Vercel

## Design

- Bento Grid assimétrico (12 colunas)
- Glassmorphism: `backdrop-blur-xl` + bordas translúcidas
- Gradient mesh animado no fundo (5 blobs CSS)
- Tipografia: Bricolage Grotesque + Plus Jakarta Sans + JetBrains Mono
- Micro-interações: clip-path reveal, blur entrada, stagger por categoria

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # gera export estático em /out
```

---

Feito por [Gabriel Lara](https://github.com/gabrielbr619)
