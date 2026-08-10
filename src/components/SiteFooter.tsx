import Link from "next/link";

import { TablerIcon } from "@/theme";

const links = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Speaking", "/speaking/"],
  ["What's up", "/whats-up/"],
  ["Invite me", "/invite/"],
  ["CV", "/cv/"],
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-ink py-16 text-white">
      <div className="wrap grid gap-12 md:grid-cols-[1fr_auto_auto]">
        <div>
          <div className="font-heading text-3xl font-black tracking-display">
            Nico Martin
          </div>
          <p className="mt-4 max-w-sm text-faint">
            Open source machine learning engineer at Hugging Face, Google
            Developer Expert for AI &amp; web technologies. Switzerland.
          </p>
          <a
            href="mailto:mail@nico.dev"
            className="mt-2 inline-block font-mono text-sm text-white"
          >
            mail@nico.dev
          </a>
        </div>
        <div className="grid content-start gap-3">
          <span className="font-heading text-xs font-bold tracking-eyebrow text-faint uppercase">
            Elsewhere
          </span>
          <a
            href="https://x.com/nicodotdev"
            target="_blank"
            className="flex items-center gap-2 font-mono text-sm text-white"
          >
            <TablerIcon icon="brand-x" className="size-4" />X
          </a>
          <a
            href="https://github.com/nico-martin"
            target="_blank"
            className="flex items-center gap-2 font-mono text-sm text-white"
          >
            <TablerIcon icon="brand-github" className="size-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicodotdev/"
            target="_blank"
            className="flex items-center gap-2 font-mono text-sm text-white"
          >
            <TablerIcon icon="brand-linkedin" className="size-4" />
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@nicodotdev"
            target="_blank"
            className="flex items-center gap-2 font-mono text-sm text-white"
          >
            <TablerIcon icon="brand-youtube" className="size-4" />
            YouTube
          </a>
          <a
            href="https://www.instagram.com/nicodotdev/"
            target="_blank"
            className="flex items-center gap-2 font-mono text-sm text-white"
          >
            <TablerIcon icon="brand-instagram" className="size-4" />
            Instagram
          </a>
        </div>
        <div className="grid content-start gap-3">
          <span className="font-heading text-xs font-bold tracking-eyebrow text-faint uppercase">
            Pages
          </span>
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-sm text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
