import type { ElementType, ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/** Applies the signature violet → cyan gradient to its text. */
export function GradientText({ children, as: Component = "span", className = "" }: GradientTextProps) {
  return <Component className={`gradient-text ${className}`}>{children}</Component>;
}
