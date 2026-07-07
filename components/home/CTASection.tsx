import { Mail } from "lucide-react";
import { identity } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-4">
      <AnimatedSection className="relative overflow-hidden rounded-3xl border border-border/50 bg-surface px-6 py-16 text-center sm:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="grid-backdrop absolute inset-0 opacity-40" />
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-1.5 text-xs font-medium text-text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for opportunities
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">
          Open to <GradientText>AI / ML engineering</GradientText> roles
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
          Full-time positions and internships where deep learning and autonomy can make a measurable
          difference. Let&apos;s talk.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={`mailto:${identity.email}`} external variant="primary" size="lg">
            <Mail size={18} />
            {identity.email}
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            More ways to connect
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
