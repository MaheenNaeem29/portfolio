import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { identity, type Project, type ProjectCategory } from "@/lib/data";
import { Tag } from "@/components/ui/Tag";
import { GithubIcon } from "@/components/ui/BrandIcons";

const categoryAccent: Record<ProjectCategory, "primary" | "secondary"> = {
  "Agentic AI": "primary",
  "Deep Learning": "secondary",
  "Computer Vision": "primary",
  "AI Navigation": "secondary",
  "Data Engineering": "primary",
};

const MAX_TECH = 4;

export function ProjectCard({ project }: { project: Project }) {
  const { slug, title, category, tagline, tech, badge } = project;
  const extra = tech.length - MAX_TECH;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border/50 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-surface-hover hover:shadow-[0_18px_50px_-20px_rgba(139,92,246,0.55)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Tag accent={categoryAccent[category]}>{category}</Tag>
          {badge && <Tag accent="muted">{badge}</Tag>}
        </div>
        {/* Sits above the stretched title link so it stays independently clickable. */}
        <a
          href={identity.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} — GitHub`}
          className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/50 text-text-muted transition-colors hover:border-primary/60 hover:text-white"
        >
          <GithubIcon size={16} />
        </a>
      </div>

      <h3 className="mt-5 font-heading text-xl font-semibold text-white">
        <Link href={`/projects/${slug}`} className="after:absolute after:inset-0 after:content-['']">
          {title}
        </Link>
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{tagline}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.slice(0, MAX_TECH).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        {extra > 0 && <Tag accent="muted">+{extra}</Tag>}
      </div>

      <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-secondary">
        View case study
        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </article>
  );
}
