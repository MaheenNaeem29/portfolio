import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";

export function CertificationList() {
  return (
    <AnimatedSection stagger className="mt-8 grid gap-4 sm:grid-cols-2">
      {certifications.map((cert) => (
        <AnimatedItem key={cert.name} className="h-full">
          <div className="flex h-full items-start gap-4 rounded-2xl border border-border/50 bg-surface p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Award size={22} />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading font-semibold text-white">{cert.name}</h3>
                {cert.inProgress && (
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
                    In Progress
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-text-muted">{cert.issuer}</p>
            </div>
          </div>
        </AnimatedItem>
      ))}
    </AnimatedSection>
  );
}
