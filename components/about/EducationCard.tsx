import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Tag } from "@/components/ui/Tag";

export function EducationCard() {
  return (
    <AnimatedSection className="mt-8">
      <div className="rounded-2xl border border-border/50 bg-surface p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap size={24} />
          </span>
          <div className="flex-1">
            <h3 className="font-heading text-xl font-semibold text-white">{education.degree}</h3>
            <p className="mt-1 text-text-muted">
              {education.institution} · {education.location}
            </p>
            <p className="mt-1 font-mono text-sm text-primary">{education.period}</p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-text-dim">Relevant coursework</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <Tag key={course} accent="secondary">
                    {course}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
