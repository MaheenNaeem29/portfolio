import Link from "next/link";
import { Mail } from "lucide-react";
import { identity, navLinks } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const socials = [
  { label: "GitHub", href: identity.socials.github, Icon: GithubIcon, external: true },
  { label: "LinkedIn", href: identity.socials.linkedin, Icon: LinkedinIcon, external: true },
  { label: "Email", href: `mailto:${identity.email}`, Icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="font-heading text-lg font-bold text-white">
            Maheen <span className="gradient-text">Naeem</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">{identity.tagline}</p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-surface text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/40">
        <p className="mx-auto max-w-6xl px-6 py-5 text-center text-xs text-text-dim sm:text-left">
          © 2026 Maheen Naeem. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
