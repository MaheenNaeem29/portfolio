import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-primary to-secondary text-white shadow-[0_4px_20px_-6px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 hover:shadow-[0_10px_34px_-8px_rgba(139,92,246,0.7)]",
  secondary:
    "border border-border/70 bg-surface/40 text-text hover:-translate-y-0.5 hover:border-primary hover:text-white hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.6)]",
  ghost: "text-text-muted hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: Variant;
  size?: Size;
  className?: string;
  "aria-label"?: string;
}

/** Polymorphic action element: internal Link, external <a>, or plain <button>. */
export function Button({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
