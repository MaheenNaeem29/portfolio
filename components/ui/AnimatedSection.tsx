"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Fade-in + 24px slide-up. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Orchestrates staggered reveal of AnimatedItem children. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** Extra delay (seconds) for a single reveal — ignored when stagger is set. */
  delay?: number;
  /** When true, acts as a stagger container for AnimatedItem children. */
  stagger?: boolean;
}

export function AnimatedSection({ children, className, delay = 0, stagger = false }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={stagger ? staggerContainer : fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={stagger ? undefined : { duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

/** A single fade-up child; place inside an AnimatedSection with `stagger`. */
export function AnimatedItem({ children, className }: AnimatedItemProps) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
