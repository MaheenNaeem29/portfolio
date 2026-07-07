# 🌐 Maheen Naeem — Portfolio

Personal portfolio for **Maheen Naeem**, an AI Engineer specializing in **Agentic AI** and
**Multimodal Deep Learning**. A multi-page site with a dark AI/tech theme and polished motion.

🔗 **Live:** [portfolio-beryl-tau-31.vercel.app](https://portfolio-beryl-tau-31.vercel.app)

## ✨ Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (theme tokens in `app/globals.css`)
- **Framer Motion** — scroll reveals, page transitions, micro-interactions
- **lucide-react** — icons (brand icons are custom SVGs in `components/ui/BrandIcons.tsx`)

## 📄 Pages

- **Home** — hero, headline stats, skills preview, featured projects
- **Projects** — filterable project grid with individual case-study pages
- **About** — extended bio, skills breakdown
- **Contact** — direct contact info & socials

## 🧠 Featured Projects

| Project | Description |
|---|---|
| **ASHEN** | LLM-driven automated penetration-testing framework — cuts manual reporting time by 65%. |
| **Multimodal Cancer Prognosis** | Deep-learning model fusing histopathology, genomics & clinical data for prognosis prediction. |
| **GlowCelestia** | Interactive 3D web experience with real-time hand-tracking (MediaPipe) and an animated Three.js celestial scene. [Live demo →](https://glowcelestia.vercel.app) |

Full list of projects with case studies is on the [`/projects`](https://portfolio-beryl-tau-31.vercel.app/projects) page.

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## 📁 Structure

- `app/` — routes: `/`, `/projects`, `/projects/[slug]`, `/about`, `/contact`, plus `sitemap.ts` & `robots.ts`
- `components/` — `layout/`, `home/`, `projects/`, `about/`, `contact/`, and shared `ui/` primitives
- `lib/data.ts` — **single source of truth** for all site content (identity, projects, skills, etc.)

To update content (add/edit projects, bio, skills), edit `lib/data.ts`.

## ☁️ Deployment

Deployed on **Vercel** — every push to `main` triggers an automatic redeploy.

## 📝 Notes

- The navbar **Resume** button links to `/resume.pdf` — drop a `resume.pdf` into `public/` to make it live.
- Set the production URL via `siteUrl` in `lib/data.ts` (used for metadata, sitemap, and robots).