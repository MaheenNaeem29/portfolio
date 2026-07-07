import type { Metadata } from "next";
import { bio } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { EducationCard } from "@/components/about/EducationCard";
import { CertificationList } from "@/components/about/CertificationList";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maheen Naeem — Artificial Intelligence graduate specializing in Multimodal Deep Learning and Agentic AI. Skills, education, and certifications.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      {/* Bio */}
      <SectionHeading as="h1" align="left" eyebrow="About" title="About Me" />
      <AnimatedSection className="mt-8 max-w-3xl space-y-5">
        {bio.long.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-text-muted sm:text-lg">
            {paragraph}
          </p>
        ))}
      </AnimatedSection>

      {/* Skills */}
      <section className="mt-20">
        <SectionHeading
          align="left"
          title="Skills"
          description="A categorized view of the tools and techniques I work with day to day."
        />
        <SkillsGrid />
      </section>

      {/* Education */}
      <section className="mt-20">
        <SectionHeading align="left" title="Education" />
        <EducationCard />
      </section>

      {/* Certifications */}
      <section className="mt-20">
        <SectionHeading align="left" title="Certifications" />
        <CertificationList />
      </section>
    </div>
  );
}
