import type { ReactNode } from "react";
import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}

/** Section title with an eyebrow label, gradient underline, and optional description. */
export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "center",
  as: Heading = "h2",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <AnimatedSection className={`${isCenter ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      )}
      <Heading
        className={`font-heading font-bold tracking-tight text-white ${
          Heading === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {title}
      </Heading>
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
