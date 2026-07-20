# Zaaboub Zineddine Yanis — Portfolio

A premium personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **TailwindCSS v4**, **Framer Motion**, **shadcn/ui-style components** and **Lucide icons**. Warm cream/amber design with dark mode, smooth animations, and full SEO (OpenGraph image, JSON-LD, sitemap, robots).

## Getting started

```bash
npm install
npm run dev   # runs on http://localhost:3100
```

## Replace the placeholders

| What | Where |
| --- | --- |
| Portrait photo | Drop your photo in `public/` (e.g. `portrait.jpg`) and update `portraitSrc` in [`src/lib/site.ts`](src/lib/site.ts) |
| CV / Resume | Replace `public/cv.pdf` with your real resume |
| GitHub / LinkedIn / Instagram links | `socials` in `src/lib/site.ts` |
| Phone number | `phone` in `src/lib/site.ts` |
| Deployed domain | `url` in `src/lib/site.ts` (used by sitemap, robots, OpenGraph) |

All page content (roles, skills, services, projects, education, certificates) lives in [`src/lib/data.ts`](src/lib/data.ts).

## Structure

```
src/
├── app/          # layout, page, globals.css, SEO (sitemap, robots, og-image, icon)
├── components/   # one file per section + navbar, footer, shared pieces
│   └── ui/       # shadcn-style primitives (button, card, badge, input, textarea)
└── lib/          # site.ts (config), data.ts (content), utils.ts
```

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — zero config needed. Then update `url` in `src/lib/site.ts`.
