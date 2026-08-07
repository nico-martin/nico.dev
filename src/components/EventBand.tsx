"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import { TablerIcon } from "@/theme";

export interface Event {
  date: string;
  isoDate?: string;
  event: string;
  talk: string;
  href: string;
  accent: "brand" | "yellow" | "pink";
}
interface EventBandProps {
  events: Event[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showAll?: boolean;
  upcomingOnly?: boolean;
}

const dateColors = {
  brand: "text-brand",
  yellow: "text-yellow",
  pink: "text-pink",
} as const;

function getStartOfToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.getTime();
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
  upcomingOnly = false,
}: EventBandProps) {
  const today = useSyncExternalStore(
    subscribeToDateChange,
    getStartOfToday,
    () => 0,
  );
  const visibleEvents = upcomingOnly
    ? events.filter((event) => {
        if (!today || !event.isoDate) return false;

        const [year, month, day] = event.isoDate.split("-").map(Number);
        const eventDate = new Date(year, month - 1, day);
        return eventDate.getTime() >= today;
      })
    : events;

  return (
    <section className="dark-band">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-10">
          <div>
            <span className="font-mono text-xs tracking-[0.16em] text-brand uppercase">
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
              <span className={`font-mono text-xs ${dateColors[item.accent]}`}>
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
        {showAll && (
          <Link
            href="/speaking/"
            className="mt-9 inline-block border-b-2 border-brand pb-1 font-mono text-sm text-white hover:text-brand"
          >
            <span className="inline-flex items-center gap-2">
              All talks and recordings
              <TablerIcon icon="chevrons-right" className="size-4" />
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
