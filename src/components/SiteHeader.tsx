"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import cn from "@/utils/classnames";
import { TablerIcon } from "@/theme";

const NAVIGATION = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Speaking", "/speaking/"],
  ["What's up", "/whats-up/"],
  //["Invite me", "/invite/"],
] as const;

const accents = [
  "shadow-brand-tint-strong",
  "shadow-yellow",
  "shadow-pink",
  "shadow-peri",
  "shadow-brand-tint-strong",
] as const;

const rotations = [
  "-rotate-[1.2deg]",
  "rotate-[1deg]",
  "-rotate-[1deg]",
  "rotate-[1.2deg]",
  "-rotate-[1deg]",
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
    <>
      <div className="pointer-events-none relative z-50 h-23">
        <div className="wrap flex h-full items-center">
          <Link
            href="/"
            aria-label="nico.dev home"
            className="pointer-events-auto rounded-full py-2 font-heading text-[2.5rem] font-black tracking-display text-brand no-underline backdrop-blur-sm hover:no-underline"
          >
            nico<span className="text-ink">.dev</span>
          </Link>
        </div>
      </div>
      <div className="pointer-events-none sticky top-0 z-50 -mt-23 h-23 md:hidden">
        <div className="wrap flex h-full items-center justify-end">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="pointer-events-auto grid size-13 cursor-pointer place-items-center rounded-tile border-3 border-ink bg-ink font-heading text-2xl font-black text-white shadow-[4px_4px_0_var(--color-brand-tint-strong)]"
          >
            <TablerIcon
              icon={open ? "x" : "menu"}
              className={cn(
                "size-6 transition-transform duration-200",
                open && "rotate-90",
              )}
            />
          </button>
        </div>
        <button
          type="button"
          aria-label="Close menu"
          aria-hidden={!open}
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={cn(
            "fixed inset-0 -z-10 border-0 bg-ink/25 transition-opacity duration-200",
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
        />
        <nav
          aria-hidden={!open}
          inert={!open}
          className={cn(
            "absolute top-21 right-6 left-6 ml-auto flex max-w-sm origin-top-right flex-col gap-2 rounded-card border-3 border-ink bg-white p-4 shadow-[8px_8px_0_var(--color-brand-tint-strong)] transition-[opacity,transform] duration-200 ease-[cubic-bezier(.2,.85,.25,1)]",
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0",
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
                  "rounded-full px-5 py-3 font-heading text-lg font-extrabold no-underline hover:no-underline",
                  active
                    ? "bg-ink text-white hover:bg-ink hover:text-white"
                    : "bg-surface-muted text-ink hover:bg-brand-tint hover:text-ink",
                )}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="mailto:mail@nico.dev"
            className="px-1 pt-2 font-mono text-sm"
          >
            mail@nico.dev
          </a>
        </nav>
      </div>
      <header className="pointer-events-none sticky top-0 z-40 -mt-23 hidden h-23 md:block">
        <div className="wrap flex h-full items-center justify-end">
          <nav className="pointer-events-auto flex items-center gap-2">
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
                    "rounded-full px-4 py-2 font-heading text-[0.9375rem] font-extrabold no-underline backdrop-blur-sm transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:rotate-0 hover:no-underline",
                    rotations[index],
                    active
                      ? cn(
                          "border-3 border-ink bg-ink py-[0.3125rem] text-white shadow-[3px_3px_0_currentColor] hover:bg-ink hover:text-white",
                          accents[index],
                        )
                      : "bg-white/80 text-ink shadow-none hover:bg-white hover:text-ink",
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
