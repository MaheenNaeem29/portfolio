import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
  Icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export function ContactCard({ Icon, label, value, href, external }: ContactCardProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex h-full flex-col rounded-2xl border border-border/50 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-surface-hover hover:shadow-[0_18px_50px_-20px_rgba(139,92,246,0.5)]"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
          <Icon size={22} />
        </span>
        <ArrowUpRight size={18} className="text-text-dim transition-colors group-hover:text-primary" />
      </div>
      <p className="mt-5 text-sm text-text-dim">{label}</p>
      <p className="mt-1 break-words font-medium text-white">{value}</p>
    </a>
  );
}
