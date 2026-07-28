"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import cn from "@/utils/classnames";

const NAVIGATION = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Speaking", "/speaking/"],
  ["What's up", "/whats-up/"],
  ["Invite me", "/invite/"],
] as const;

const accents = [
  "shadow-brand-tint-strong",
  "shadow-yellow",
  "shadow-pink",
  "shadow-peri",
  "shadow-brand-tint-strong",
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="relative z-50 h-23">
      <div className="wrap flex h-full items-center justify-between">
        <Link
          href="/"
          aria-label="nico.dev home"
          className="rounded-full bg-white/80 px-4 py-2 font-heading text-[1.65rem] font-black tracking-display text-brand no-underline backdrop-blur-sm hover:no-underline"
        >
          nico<span className="text-ink">.dev</span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {NAVIGATION.map(([label, href], index) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href.slice(0, -1));
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 font-heading text-[0.9375rem] font-extrabold text-ink no-underline transition hover:bg-white hover:text-ink hover:no-underline",
                  active &&
                    "border-3 border-ink bg-ink py-[0.3125rem] text-white shadow-[3px_3px_0_currentColor] hover:bg-ink hover:text-white",
                  active && accents[index],
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid size-13 cursor-pointer place-items-center rounded-tile border-3 border-ink bg-ink font-heading text-2xl font-black text-white shadow-[4px_4px_0_var(--color-brand-tint-strong)] md:hidden"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 border-0 bg-ink/25 md:hidden"
        />
      )}
      <nav
        className={cn(
          "absolute top-21 right-6 left-6 ml-auto hidden max-w-sm flex-col gap-2 rounded-card border-3 border-ink bg-white p-4 shadow-[8px_8px_0_var(--color-brand-tint-strong)] md:hidden",
          open && "flex",
        )}
      >
        {NAVIGATION.map(([label, href]) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href.slice(0, -1));
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-full bg-surface-muted px-5 py-3 font-heading text-lg font-extrabold text-ink no-underline hover:bg-brand-tint hover:no-underline",
                active && "bg-ink text-white hover:bg-ink hover:text-white",
              )}
            >
              {label}
            </Link>
          );
        })}
        <a href="mailto:mail@nico.dev" className="px-1 pt-2 font-mono text-sm">
          mail@nico.dev
        </a>
      </nav>
    </header>
  );
}
