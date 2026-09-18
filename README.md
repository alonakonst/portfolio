# Portfolio

Personal portfolio site — UX Engineer / AI Product.

## Stack

| Piece | Choice | Why |
|---|---|---|
| Frontend | Vite + React 19 + TypeScript | Builds to static files — free on Render, no cold starts |
| Styling | Plain CSS + custom properties | Design tokens in one file, no framework to learn |
| Hosting | Render Static Site | Free tier, CDN, automatic TLS, custom domain |
| Chat API (later) | Python + FastAPI, separate Render Web Service | Keeps the API key server-side |

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands:

```bash
npm run build      # typecheck + production build into dist/
npm run preview    # serve the built dist/ locally to check it
npm run typecheck  # typecheck only
```

## Where things live

```
src/
  content/site.ts     ← all site copy. Edit text HERE, not in components.
  styles/tokens.css   ← colors, fonts, spacing. Change the design HERE.
  styles/global.css   ← shared classes (.btn, .chip, .container, ...)
  components/         ← one file per section of the page
  App.tsx             ← the page shell: which sections render, in what order
  main.tsx            ← entry point, mounts React into index.html
design/
  portfolio-mockup.html ← the original design export, kept for reference
```

## Deploying

Pushing to `main` triggers a deploy automatically. `render.yaml` holds the
build config, so Render needs no manual dashboard setup.
