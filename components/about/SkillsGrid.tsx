import { skillCategories } from "@/lib/data";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { Tag } from "@/components/ui/Tag";

export function SkillsGrid() {
  return (
    <AnimatedSection stagger className="mt-8 grid gap-6 sm:grid-cols-2">
      {skillCategories.map((category) => (
        <AnimatedItem key={category.name} className="h-full">
          <div className="h-full rounded-2xl border border-border/50 bg-surface p-6">
            <h3 className="font-heading text-lg font-semibold text-white">{category.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Tag key={skill} accent={category.accent}>
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        </AnimatedItem>
      ))}
    </AnimatedSection>
  );
}
