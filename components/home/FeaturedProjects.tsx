import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Selected work"
        title="Featured Projects"
        description="A few systems I've built end-to-end — from research and modelling to production deployment."
      />

      <AnimatedSection stagger className="mt-12 grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <AnimatedItem key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </AnimatedItem>
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-12 flex justify-center">
        <Button href="/projects" variant="secondary" size="lg">
          View all projects
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </AnimatedSection>
    </section>
  );
}
