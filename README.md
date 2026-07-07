# Maheen Naeem — Portfolio

Personal portfolio for **Maheen Naeem**, an AI Engineer specializing in Agentic AI and
Multimodal Deep Learning. A multi-page site with a dark AI/tech theme and polished motion.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (theme tokens in `app/globals.css`)
- **Framer Motion** — scroll reveals, page transitions, micro-interactions
- **lucide-react** — icons (brand icons are custom SVGs in `components/ui/BrandIcons.tsx`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Structure

- `app/` — routes: `/`, `/projects`, `/projects/[slug]`, `/about`, `/contact`, plus `sitemap.ts` & `robots.ts`
- `components/` — `layout/`, `home/`, `projects/`, `about/`, `contact/`, and shared `ui/` primitives
- `lib/data.ts` — **single source of truth** for all site content (identity, projects, skills, etc.)

To update content, edit `lib/data.ts`.

## Notes

- The navbar **Resume** button links to `/resume.pdf` — drop a `resume.pdf` into `public/` to make it live.
- Set the production URL via `siteUrl` in `lib/data.ts` (used for metadata, sitemap, and robots).
