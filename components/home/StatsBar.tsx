"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { stats, type Stat } from "@/lib/data";

function CountUp({ value, decimals = 0, prefix = "", suffix = "" }: Omit<Stat, "label">) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  // Under reduced motion, jump straight to the final value once in view.
  const shown = reduceMotion ? (inView ? value : 0) : display;

  return (
    <span ref={ref}>
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="border-y border-border/40 bg-surface/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-6 py-10 sm:gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 py-4 text-center sm:px-4">
            <div className="font-heading text-3xl font-bold sm:text-4xl">
              <span className="gradient-text">
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-text-muted sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
