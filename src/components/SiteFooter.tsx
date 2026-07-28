import Link from "next/link";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

const links = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Speaking", "/speaking/"],
  ["What's up", "/whats-up/"],
  ["Invite me", "/invite/"],
] as const;

export default function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink py-16 text-white">
      <div className="wrap grid gap-12 md:grid-cols-[1fr_auto_auto]">
        <div>
          <div className="font-heading text-3xl font-black tracking-display">
            nico.dev
          </div>
          <p className="mt-4 max-w-sm text-faint">
            Open source machine learning engineer at Hugging Face, Google
            Developer Expert for AI &amp; web technologies. Switzerland.
          </p>
          <a
            href="mailto:mail@nico.dev"
            className="font-mono text-sm text-white"
          >
            mail@nico.dev
          </a>
        </div>
        <div className="grid gap-3">
          <span className="font-heading text-xs font-bold tracking-eyebrow text-faint uppercase">
            Elsewhere
          </span>
          <a
            href="https://github.com/nico-martin"
            className="flex items-center gap-2 font-mono text-sm text-white"
          >
            <Github size={17} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicodotdev/"
            className="flex items-center gap-2 font-mono text-sm text-white"
          >
            <Linkedin size={17} />
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@nicodotdev"
            className="flex items-center gap-2 font-mono text-sm text-white"
          >
            <Youtube size={17} />
            YouTube
          </a>
          <a
            href="https://www.instagram.com/nicodotdev/"
            className="flex items-center gap-2 font-mono text-sm text-white"
          >
            <Instagram size={17} />
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
