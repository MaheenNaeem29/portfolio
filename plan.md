# Portfolio Website — Implementation Plan

> **For:** Maheen Naeem — AI Engineer (Agentic AI, Multimodal Deep Learning)
> **Goal:** A professional, job-application-ready, multi-page portfolio with a dark AI/tech theme and polished animations.
> **Current state:** Fresh `create-next-app` (Next.js 16, React 19, Tailwind CSS v4, TypeScript, App Router). Only default `app/layout.tsx`, `app/page.tsx`, `app/globals.css` exist. Everything below must be built.

---

## 1. Tech Stack & Dependencies

Keep the existing stack. Install:

```bash
npm install framer-motion lucide-react
```

- **framer-motion** — all animations (scroll reveals, page transitions, hover effects)
- **lucide-react** — icons (GitHub, Linkedin, Mail, ExternalLink, section icons)
- No UI library needed — build components with Tailwind v4. Do NOT add localStorage-dependent theming libs; the site is dark-only.

---

## 2. Design System

### 2.1 Colors (define as CSS variables in `globals.css` via Tailwind v4 `@theme`)

| Token | Value | Use |
|---|---|---|
| `--color-background` | `#0a0a0f` | Page background (near-black, slight blue tint) |
| `--color-surface` | `#12121a` | Cards, panels |
| `--color-surface-hover` | `#1a1a26` | Card hover state |
| `--color-border` | `#26263a` | Card/section borders (use at 50–60% opacity) |
| `--color-primary` | `#8b5cf6` | Violet — primary accent, CTAs, links |
| `--color-secondary` | `#22d3ee` | Cyan — gradient partner, highlights |
| `--color-text` | `#e5e7eb` | Body text |
| `--color-text-muted` | `#9ca3af` | Secondary text |
| `--color-text-dim` | `#6b7280` | Captions, metadata |

- Signature gradient: `linear-gradient(135deg, #8b5cf6, #22d3ee)` — use for hero name, section heading underlines, primary buttons, and card hover borders.
- Subtle background texture: a faint radial gradient glow (violet, ~8% opacity) behind the hero, and an optional dotted-grid pattern at very low opacity. Keep it tasteful — no busy backgrounds.

### 2.2 Typography

- **Headings:** `Space Grotesk` (via `next/font/google`) — techy but professional.
- **Body:** `Inter` (via `next/font/google`).
- **Code/labels (tech tags):** `JetBrains Mono` for small tech-stack chips.
- Scale: hero name ~`text-5xl/6xl`, section titles `text-3xl/4xl`, body `text-base/lg`, generous `leading-relaxed`.

### 2.3 Components style rules

- Cards: `bg-surface` + `border border-border/50` + `rounded-2xl` + subtle glassmorphism (`backdrop-blur`) where layered over glows. On hover: lift `-translate-y-1`, border transitions to violet, soft violet shadow.
- Buttons: primary = gradient fill; secondary = outlined with border that glows on hover.
- Tech tags: small mono-font pills, `bg-primary/10 text-primary` style per category color.
- Consistent max width: `max-w-6xl mx-auto px-6` for all sections.
- Focus-visible rings everywhere (accessibility).

### 2.4 Animation guidelines (framer-motion)

- **Scroll reveals:** every section fades in + slides up 24px (`whileInView`, `viewport={{ once: true }}`, stagger children by 0.08–0.12s). Subtle — duration ~0.5s, ease-out.
- **Hero:** staggered entrance (greeting → name → role → summary → CTAs → socials), plus a typewriter/rotating-text effect cycling roles: "Agentic AI Engineer" / "Deep Learning Engineer" / "ML Engineer".
- **Page transitions:** fade/slide via a `template.tsx` with framer-motion.
- **Micro-interactions:** button/card hovers (scale 1.02, glow), animated skill tags, nav link underline slide.
- **Nice-to-have (only if it stays performant):** faint animated particle/starfield or gradient-orb blobs in the hero using pure CSS animations.
- Respect `prefers-reduced-motion` — disable non-essential animation.

---

## 3. Site Structure (Multi-page, App Router)

```
app/
├── layout.tsx          # fonts, metadata, Navbar, Footer
├── template.tsx        # page-transition wrapper (framer-motion)
├── page.tsx            # HOME
├── projects/
│   ├── page.tsx        # PROJECTS index (all 5 projects, filterable)│
│   └── [slug]/page.tsx # PROJECT case study (generateStaticParams)
├── about/page.tsx      # ABOUT (bio, skills, education, certifications)
├── contact/page.tsx    # CONTACT
├── globals.css
├── sitemap.ts
└── robots.ts
components/
├── layout/  Navbar.tsx, Footer.tsx
├── home/    Hero.tsx, FeaturedProjects.tsx, SkillsPreview.tsx, StatsBar.tsx, CTASection.tsx
├── projects/ ProjectCard.tsx, ProjectFilter.tsx, CaseStudyLayout.tsx
├── about/   SkillsGrid.tsx, EducationCard.tsx, CertificationList.tsx
├── contact/ ContactCard.tsx
└── ui/      SectionHeading.tsx, Button.tsx, Tag.tsx, AnimatedSection.tsx, GradientText.tsx, TypewriterText.tsx
lib/
└── data.ts             # ALL content lives here (single source of truth — see §5)
```

### 3.1 Navbar
Sticky, translucent (`backdrop-blur`), border-bottom appears on scroll. Links: Home, Projects, About, Contact + a gradient "Resume" button (links to `/resume.pdf` in `public/` — add a placeholder note if PDF not provided). Active route highlighted. Mobile: animated hamburger → full-screen overlay menu with staggered link entrance.

### 3.2 Footer
Name + one-line tagline, quick links, social icons (GitHub, LinkedIn, Email), "© 2026 Maheen Naeem".

---

## 4. Page-by-Page Spec

### 4.1 Home (`/`)
1. **Hero** — "Hi, I'm" → **Maheen Naeem** (gradient text) → typewriter roles → 2-sentence summary (from §5 bio) → CTAs: "View Projects" (gradient) + "Get in Touch" (outline) → social icon row. Background: violet/cyan gradient orbs, subtle.
2. **Stats bar** — 4 animated count-up stats: `5+ AI Projects`, `65% reporting time reduced (ASHEN)`, `0.89 AUC-ROC (cancer prognosis)`, `95% remediation accuracy`.
3. **Featured Projects** — top 3 (ASHEN, Multimodal Cancer Prognosis, Smart City Surveillance) as large cards with tech tags + "View case study" link. "View all projects →" button.
4. **Skills preview** — compact grid of the 4 headline categories (Agentic & GenAI, ML/DL, Frameworks, Tools) linking to About.
5. **CTA section** — "Open to AI/ML engineering roles" + email button.

### 4.2 Projects (`/projects`)
- Heading + one-liner. Filter chips: All / Agentic AI / Deep Learning / Computer Vision / Data Engineering (animate re-flow with framer-motion `layout`).
- Grid of all 5 project cards (data from §5). Each card: category tag, title, one-line impact, tech chips, links (GitHub icon → `github.com/MaheenNaeem29`, case study →).

### 4.3 Project case study (`/projects/[slug]`)
Statically generated from `lib/data.ts`. Layout: back link, category + title + tech chips, **Overview**, **Key achievements** (the CV bullet points, styled as an icon list), **Tech stack** grid, prev/next project navigation. No fabricated content — use only CV bullets; write short neutral overview paragraphs derived from them.

### 4.4 About (`/about`)
1. **Bio** — expanded from CV summary (3–4 sentences, first person, professional).
2. **Skills** — full categorized grid from §5.3, each category a card with mono-font tags.
3. **Education** — FAST-NUCES card: BS Artificial Intelligence, 09/2022 – 06/2026 (expected), Chiniot-Faisalabad, Pakistan + relevant coursework tags.
4. **Certifications** — Machine Learning Specialization (Stanford Online / DeepLearning.AI); AWS Certified Cloud Practitioner (In Progress — show a subtle "In Progress" badge).

### 4.5 Contact (`/contact`)
No backend/form-service — keep it static and reliable:
- Heading: "Let's build something intelligent together."
- Three contact cards: **Email** (`maheennaeem94@gmail.com`, mailto), **LinkedIn** (`linkedin.com/in/maheen-naeem`), **GitHub** (`github.com/MaheenNaeem29`). Optional phone: `+92 309 0054878`.
- "Open to full-time AI/ML roles and internships" availability note with a pulsing green dot.

---

## 5. Content (single source of truth: `lib/data.ts`)

### 5.1 Identity
- **Name:** Maheen Naeem
- **Roles (typewriter):** Agentic AI Engineer · Deep Learning Engineer · ML Engineer
- **Email:** maheennaeem94@gmail.com · **Phone:** +92 309 0054878
- **LinkedIn:** linkedin.com/in/maheen-naeem · **GitHub:** github.com/MaheenNaeem29

### 5.2 Bio (base on this, may lightly polish)
"Artificial Intelligence graduate specializing in Multimodal Deep Learning and Agentic AI systems. Experienced in building intelligent automation with LLMs, RAG pipelines, and computer vision models. Proficient in Python, PyTorch, LangChain, and LangGraph, with a track record of AI-driven security frameworks, transformer-based models, and production deployments with FastAPI and Docker."

### 5.3 Skills (exact categories)
- **Agentic & Generative AI:** Agentic AI, Generative AI, RAG, Prompt Engineering, MCP, LangChain, LangGraph, Agno
- **AI / Machine Learning:** CNNs, RNNs, LSTMs, Transformers, YOLOv8, NLP, Multimodal Learning, SHAP, LIME
- **Frameworks & Libraries:** PyTorch, TensorFlow, Scikit-Learn, Hugging Face, OpenCV, Pandas, NumPy
- **Languages:** Python, C++, SQL, JavaScript, React, Bash
- **Tools & Platforms:** Docker, FastAPI, Redis, AWS (EC2, S3), Git, GitHub
- **Security:** Nmap, Metasploit, OpenVAS

### 5.4 Projects (all 5; first 3 featured)

1. **ASHEN — AI-Driven Automated Penetration Testing** (`slug: ashen`, category: Agentic AI, Final Year Project)
   Tech: Python, FastAPI, Redis, Celery, LLMs, Docker, Nmap, OpenVAS, Metasploit
   - Engineered an automated security framework using LLMs to analyze vulnerability scans, reducing manual reporting time by 65%.
   - Architected a distributed backend using FastAPI and Redis, enabling concurrent host exploitation and real-time monitoring.
   - Implemented automated remediation generation, achieving 95% accuracy in actionable security patches.

2. **Multimodal Cancer Prognosis System** (`slug: multimodal-cancer-prognosis`, category: Deep Learning)
   Tech: Python, PyTorch, Multimodal Learning, CNNs, SHAP, LIME
   - Developed a Late-Fusion Neural Network integrating histopathology, genomic, and clinical data — 0.89 AUC-ROC.
   - Leveraged Explainable AI (XAI) to visualize feature importance for clinical interpretability.
   - Optimized PyTorch preprocessing pipelines for heterogeneous data across multiple cancer types.

3. **Smart City Urban Surveillance** (`slug: smart-city-surveillance`, category: Computer Vision)
   Tech: Python, YOLOv8, OpenCV, TensorRT
   - Fine-tuned YOLOv8 for real-time pedestrian detection — 83% precision on custom-annotated urban datasets.
   - Deployed with TensorRT for optimized inference at 30+ FPS on edge hardware.

4. **Autonomous Delivery Robot** (`slug: autonomous-delivery-robot`, category: AI Navigation)
   Tech: Python, Heuristic Search (A*), Path Planning
   - Designed autonomous navigation using A* heuristic search for optimized path planning.
   - Implemented dynamic obstacle detection/avoidance with real-time re-routing.

5. **Crypto Data Pipeline** (`slug: crypto-data-pipeline`, category: Data Engineering)
   Tech: Python, Pandas, REST APIs, SQL
   - Built a real-time cryptocurrency data pipeline automating collection, processing, and analysis of live market data.
   - Structured ingestion/transformation workflows for downstream analytics and trend monitoring.

### 5.5 Education & Certifications
- **BS Artificial Intelligence**, FAST-NUCES, Chiniot-Faisalabad, Pakistan — 09/2022 – 06/2026 (Expected). Coursework: Deep Learning, Computer Vision, Probabilistic Graphical Models, Big Data Analytics.
- Machine Learning Specialization — Stanford Online (DeepLearning.AI)
- AWS Certified Cloud Practitioner — In Progress

---

## 6. SEO, Metadata & Quality

- `layout.tsx` metadata: title template `"%s | Maheen Naeem — AI Engineer"`, description from bio, Open Graph + Twitter card tags, `metadataBase` set to production URL (`https://portfolio-beryl-tau-31.vercel.app` or new domain).
- Per-page `metadata` exports for Projects/About/Contact; `generateMetadata` for case studies.
- Add `sitemap.ts` and `robots.ts`.
- Semantic HTML (`main`, `section`, `nav`, `h1` once per page), alt text, color contrast ≥ 4.5:1 for body text.
- Delete unused default assets in `public/` (file.svg, globe.svg, etc.); replace README content with a short project description.

---

## 7. Implementation Phases (execute in order)

**Phase 1 — Foundation:** install deps; set up `globals.css` theme tokens + fonts; build `lib/data.ts` with all §5 content; build ui primitives (Button, Tag, SectionHeading, GradientText, AnimatedSection, TypewriterText).

**Phase 2 — Shell:** Navbar (desktop + mobile menu), Footer, `template.tsx` page transitions, metadata/SEO files.

**Phase 3 — Home page:** Hero, StatsBar, FeaturedProjects, SkillsPreview, CTASection.

**Phase 4 — Projects:** index with filters, ProjectCard, case-study route with `generateStaticParams`.

**Phase 5 — About + Contact pages.**

**Phase 6 — Polish & verify:** responsive pass (375px / 768px / 1440px), reduced-motion support, hover states, `npm run build` must pass with zero errors, `npm run lint` clean, check every internal link and all 5 case-study routes render.

---

## 8. Acceptance Checklist

- [ ] `npm run build` succeeds; no TypeScript or ESLint errors
- [ ] All routes work: `/`, `/projects`, `/projects/[slug]` ×5, `/about`, `/contact`
- [ ] Fully responsive (mobile-first; test 375px, 768px, 1440px)
- [ ] All content matches §5 exactly — no invented projects, metrics, or employers
- [ ] Animations smooth (60fps), subtle, and disabled under `prefers-reduced-motion`
- [ ] Dark theme consistent; gradient accent used sparingly and consistently
- [ ] SEO metadata, sitemap, robots present; OG tags set
- [ ] Navbar Resume button present (placeholder link if `resume.pdf` not yet added to `public/`)
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
