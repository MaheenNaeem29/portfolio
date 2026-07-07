import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProject, projects, siteUrl } from "@/lib/data";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const url = `${siteUrl}/projects/${slug}`;
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.tagline,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.tagline,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const adjacent = getAdjacentProjects(slug);
  if (!adjacent) {
    notFound();
  }

  return <CaseStudyLayout project={project} prev={adjacent.prev} next={adjacent.next} />;
}
