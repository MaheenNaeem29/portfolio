import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFilter } from "@/components/projects/ProjectFilter";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI and machine learning projects by Maheen Naeem — agentic AI, multimodal deep learning, computer vision, and data engineering.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <SectionHeading
        as="h1"
        align="left"
        eyebrow="Portfolio"
        title="Projects"
        description="From LLM-driven security automation to multimodal deep learning — a selection of systems I've designed, built, and shipped."
      />
      <ProjectFilter />
    </div>
  );
}
