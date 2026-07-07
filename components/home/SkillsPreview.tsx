import Link from "next/link";
import { ArrowUpRight, Brain, Layers, Sparkles, Wrench, type LucideIcon } from "lucide-react";
import { skillsPreview } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { Tag } from "@/components/ui/Tag";

const icons: LucideIcon[] = [Sparkles, Brain, Layers, Wrench];

export function SkillsPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & Expertise"
        description="The stack I reach for across agentic AI, deep learning, and production ML."
      />

      <AnimatedSection stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillsPreview.map((category, i) => {
          const Icon = icons[i % icons.length];
          return (
            <AnimatedItem key={category.name} className="h-full">
              <Link
                href="/about"
                className="group flex h-full flex-col rounded-2xl border border-border/50 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-surface-hover hover:shadow-[0_18px_50px_-20px_rgba(139,92,246,0.5)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon size={20} />
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-text-dim transition-colors group-hover:text-primary"
                  />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{category.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Link>
            </AnimatedItem>
          );
        })}
      </AnimatedSection>
    </section>
  );
}
