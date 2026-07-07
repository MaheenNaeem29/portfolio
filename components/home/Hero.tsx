"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { bio, identity } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socials = [
  { label: "GitHub", href: identity.socials.github, Icon: GithubIcon, external: true },
  { label: "LinkedIn", href: identity.socials.linkedin, Icon: LinkedinIcon, external: true },
  { label: "Email", href: `mailto:${identity.email}`, Icon: Mail, external: false },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-6">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[15%] top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl [animation:var(--animate-blob)]" />
        <div className="absolute bottom-16 right-[12%] h-80 w-80 rounded-full bg-secondary/15 blur-3xl [animation:var(--animate-blob)] [animation-delay:-7s]" />
        <div className="grid-backdrop absolute inset-0 opacity-60" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl py-20"
      >
        <motion.p variants={item} className="font-mono text-sm text-primary">
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <GradientText>Maheen Naeem</GradientText>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 font-heading text-2xl font-medium text-text sm:text-3xl"
        >
          <TypewriterText words={identity.roles} />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
        >
          {bio.summary}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
          <Button href="/projects" variant="primary" size="lg">
            View Projects
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-9 flex items-center gap-3">
          {socials.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-surface/60 text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-white"
            >
              <Icon size={19} />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
