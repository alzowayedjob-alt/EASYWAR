# EASYWAR Next Starter + UI Patch (v1)

This repo is a **complete Next.js app** that boots on Vercel without extra steps.
It includes the UI patch (centered chat, inner scroll, Cairo 10px, SVG icons, sticky sidebar user card).

## Run locally
```bash
npm i
npm run dev
```

## Deploy to Vercel
- Push all files to GitHub in a new repo.
- In Vercel: import the repo. Framework should auto-detect **Next.js**.
- No extra build command needed (uses `next build`).

## Files
- `app/` with `layout.tsx` and `page.tsx`
- `components/` (patched UI)
- `styles/chat-patch.css`
- `public/brand/logo.png`
- `package.json`, `next.config.mjs`, `tsconfig.json`

You can now integrate your existing API/chat logic into `ChatContainerPatched` or replace it with your current chat page.
