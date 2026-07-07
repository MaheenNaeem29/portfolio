import type { ReactNode } from "react";

type Accent = "primary" | "secondary" | "muted";

const styles: Record<Accent, string> = {
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/10 text-secondary border-secondary/25",
  muted: "bg-surface-hover text-text-muted border-border/60",
};

interface TagProps {
  children: ReactNode;
  accent?: Accent;
  className?: string;
}

/** Small mono-font pill used for tech-stack chips. */
export function Tag({ children, accent = "muted", className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs leading-none ${styles[accent]} ${className}`}
    >
      {children}
    </span>
  );
}
