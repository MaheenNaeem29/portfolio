import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { identity } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";
import { ContactCard } from "@/components/contact/ContactCard";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Maheen Naeem — open to full-time AI/ML engineering roles and internships. Email, LinkedIn, and GitHub.",
};

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    value: identity.email,
    href: `mailto:${identity.email}`,
    external: false,
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: `linkedin.com/in/${identity.socials.linkedinHandle}`,
    href: identity.socials.linkedin,
    external: true,
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: `github.com/${identity.socials.githubHandle}`,
    href: identity.socials.github,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <SectionHeading
        as="h1"
        title={
          <>
            Let&apos;s build something <GradientText>intelligent</GradientText> together.
          </>
        }
        description="Have a role, a project, or an idea worth exploring? I'd love to hear about it."
      />

      {/* Availability */}
      <AnimatedSection className="mt-8 flex justify-center">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-surface/60 px-4 py-2 text-sm text-text-muted">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          Open to full-time AI/ML roles and internships
        </span>
      </AnimatedSection>

      {/* Contact cards */}
      <AnimatedSection stagger className="mt-12 grid gap-6 sm:grid-cols-3">
        {contacts.map((contact) => (
          <AnimatedItem key={contact.label} className="h-full">
            <ContactCard {...contact} />
          </AnimatedItem>
        ))}
      </AnimatedSection>

      {/* Phone */}
      <AnimatedSection className="mt-8 flex justify-center">
        <a
          href={`tel:${identity.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white"
        >
          <Phone size={16} />
          {identity.phone}
        </a>
      </AnimatedSection>
    </div>
  );
}
