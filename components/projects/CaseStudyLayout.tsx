import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { identity, type Project } from "@/lib/data";
import { Tag } from "@/components/ui/Tag";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/BrandIcons";

function SubHeading({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-3 font-heading text-2xl font-semibold text-white">
      <span className="h-6 w-1 rounded-full bg-gradient-to-b from-primary to-secondary" />
      {children}
    </h2>
  );
}

interface CaseStudyLayoutProps {
  project: Project;
  prev: Project;
  next: Project;
}

export function CaseStudyLayout({ project, prev, next }: CaseStudyLayoutProps) {
  const { title, category, badge, tagline, overview, achievements, tech } = project;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      {/* Header */}
      <AnimatedSection className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <Tag accent="primary">{category}</Tag>
          {badge && <Tag accent="muted">{badge}</Tag>}
        </div>
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-text-muted">{tagline}</p>
        <div className="mt-6">
          <Button href={identity.socials.github} external variant="secondary" size="sm">
            <GithubIcon size={16} />
            View on GitHub
          </Button>
        </div>
      </AnimatedSection>

      {/* Overview */}
      <AnimatedSection className="mt-14">
        <SubHeading>Overview</SubHeading>
        <div className="mt-5 space-y-4">
          {overview.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </AnimatedSection>

      {/* Key achievements */}
      <AnimatedSection className="mt-12">
        <SubHeading>Key achievements</SubHeading>
        <ul className="mt-5 space-y-4">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-base leading-relaxed text-text">{achievement}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Tech stack */}
      <AnimatedSection className="mt-12">
        <SubHeading>Tech stack</SubHeading>
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </AnimatedSection>

      {/* Prev / next navigation */}
      <nav
        className="mt-16 grid gap-4 border-t border-border/50 pt-8 sm:grid-cols-2"
        aria-label="Project navigation"
      >
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex flex-col gap-1 rounded-xl border border-border/50 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60"
        >
          <span className="inline-flex items-center gap-1.5 text-xs text-text-dim">
            <ArrowLeft size={14} /> Previous
          </span>
          <span className="font-heading font-medium text-text group-hover:text-white">{prev.title}</span>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="group flex flex-col gap-1 rounded-xl border border-border/50 bg-surface p-5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 sm:items-end"
        >
          <span className="inline-flex items-center gap-1.5 text-xs text-text-dim">
            Next <ArrowRight size={14} />
          </span>
          <span className="font-heading font-medium text-text group-hover:text-white">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
