"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

import { Modal, TablerIcon } from "@/theme";

export interface Event {
  date: string;
  isoDate?: string;
  event: string;
  talk: string;
  href: string;
  links: Array<{
    key: "infos" | "slides" | "video";
    href: string;
  }>;
  accent: "brand" | "yellow" | "pink";
}
interface EventBandProps {
  events: Event[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showAll?: boolean;
}

const dateColors = {
  brand: "text-brand",
  yellow: "text-yellow",
  pink: "text-pink",
} as const;

const darkDateColors = {
  ...dateColors,
  brand: "text-brand-tint-strong",
} as const;

const linkLabels = {
  infos: "Info",
  slides: "Slides",
  video: "Video",
} as const;

const linkIcons = {
  infos: "info-circle",
  slides: "presentation",
  video: "video",
} as const;

function getStartOfToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.getTime();
}

function newestFirst(a: Event, b: Event) {
  return (b.isoDate ?? "").localeCompare(a.isoDate ?? "");
}

function oldestFirst(a: Event, b: Event) {
  return (a.isoDate ?? "").localeCompare(b.isoDate ?? "");
}

function subscribeToDateChange(onStoreChange: () => void) {
  const interval = window.setInterval(onStoreChange, 60_000);
  return () => window.clearInterval(interval);
}

export default function EventBand({
  events,
  eyebrow = "Up next",
  title = "Where you can catch me",
  description = "",
  showAll = false,
}: EventBandProps) {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const today = useSyncExternalStore(
    subscribeToDateChange,
    getStartOfToday,
    () => 0,
  );
  const visibleEvents = events
    .filter((event) => {
      if (!today || !event.isoDate) return false;

      const [year, month, day] = event.isoDate.split("-").map(Number);
      return new Date(year, month - 1, day).getTime() >= today;
    })
    .sort(oldestFirst);
  const pastEvents = events
    .filter((event) => {
      if (!today || !event.isoDate) return false;

      const [year, month, day] = event.isoDate.split("-").map(Number);
      return new Date(year, month - 1, day).getTime() < today;
    })
    .sort(newestFirst);

  return (
    <section className="dark-band">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-10">
          <div>
            <span className="font-mono text-xs tracking-[0.16em] text-brand-tint-strong uppercase">
              {eyebrow}
            </span>
            <h2 className="section-title mt-3">{title}</h2>
          </div>
          <p className="m-0 max-w-md text-white/60">{description}</p>
        </div>
        <div className="border-t border-white/15">
          {visibleEvents.map((item) => (
            <a
              key={`${item.event}-${item.date}`}
              href={item.href}
              className="event-row"
              target="_blank"
            >
              <span
                className={`font-mono text-xs ${darkDateColors[item.accent]}`}
              >
                {item.date}
              </span>
              <strong className="font-heading text-xl font-extrabold text-white">
                {item.event}
              </strong>
              <span className="text-sm text-white/60">{item.talk}</span>
              <TablerIcon
                icon="chevrons-right"
                className="ml-auto size-5 text-brand"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between md:flex-row">
          {showAll && (
            <Link
              href="/speaking/"
              className="mt-9 inline-block border-b-2 border-brand pb-1 font-mono text-sm text-white transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-brand focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2">
                All talks and recordings
                <TablerIcon icon="chevrons-right" className="size-4" />
              </span>
            </Link>
          )}
          {!showAll && (
            <button
              type="button"
              onClick={() => setArchiveOpen(true)}
              className="mt-9 inline-flex cursor-pointer items-center gap-2 border-b-2 border-brand pb-1 font-mono text-sm text-white transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-brand focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5"
            >
              Event archive
              <TablerIcon icon="chevrons-right" className="size-4" />
            </button>
          )}
          <Link
            href="/invite/"
            className="mt-9 inline-block border-b-2 border-brand pb-1 font-mono text-sm text-white transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-brand focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5"
          >
            <span className="inline-flex items-center gap-2">
              Find a talk for your event
              <TablerIcon icon="chevrons-right" className="size-4" />
            </span>
          </Link>
        </div>
      </div>
      {!showAll && (
        <Modal
          open={archiveOpen}
          onClose={() => setArchiveOpen(false)}
          title="Event archive"
        >
          <p className="mb-6 max-w-2xl text-muted">
            Conferences and meetups where I&apos;ve shared ideas, demos, and
            plenty of browser experiments over the years.
          </p>
          <div className="border-t border-ink/15">
            {pastEvents.map((item) => (
              <div
                key={`${item.event}-${item.date}`}
                className="grid gap-2 border-b border-ink/15 px-1 py-5 sm:grid-cols-[8.125rem_minmax(11rem,auto)_1fr_auto] sm:items-baseline sm:gap-5"
              >
                <span
                  className={`font-mono text-xs ${dateColors[item.accent]}`}
                >
                  {item.date}
                </span>
                <strong className="font-heading text-lg font-extrabold text-ink">
                  {item.event}
                </strong>
                <span className="text-sm text-muted">{item.talk}</span>
                <span className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs">
                  {item.links.map((link) => (
                    <a
                      key={link.key}
                      href={link.href}
                      target="_blank"
                      aria-label={linkLabels[link.key]}
                      title={linkLabels[link.key]}
                      className="inline-grid size-8 place-items-center rounded-full border border-ink/20 text-brand transition hover:border-brand hover:bg-brand-tint"
                    >
                      <TablerIcon
                        icon={linkIcons[link.key]}
                        className="size-4"
                      />
                    </a>
                  ))}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-sm text-muted">
            ...and probably a few I forgot :D.
          </p>
        </Modal>
      )}
    </section>
  );
}
