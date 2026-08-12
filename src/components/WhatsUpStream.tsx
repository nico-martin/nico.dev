"use client";

import { useState } from "react";

import type { ApiImage, WhatsUpEntry } from "@/lib/wp-api";
import { Badge, Card, TablerIcon } from "@/theme";
import cn from "@/utils/classnames";

interface WhatsUpStreamProps {
  entries: WhatsUpEntry[];
}

type EntryFilter = "all" | WhatsUpEntry["type"];

const filters: Array<{ value: EntryFilter; label: string }> = [
  { value: "all", label: "Everything" },
  { value: "project", label: "Projects" },
  { value: "podcast", label: "Podcasts" },
  { value: "blogpost", label: "Blog posts" },
  { value: "video", label: "Videos" },
  { value: "instagram", label: "Instagram" },
];

const typeStyles = {
  project: {
    label: "Project",
    icon: "code",
    badge: "[background:var(--color-brand)] text-white",
    shadow: "shadow-[9px_9px_0_var(--color-brand-tint-strong)]",
  },
  podcast: {
    label: "Podcast",
    icon: "microphone",
    badge: "[background:var(--color-pink)] text-ink",
    shadow: "shadow-[9px_9px_0_var(--color-pink-tint)]",
  },
  blogpost: {
    label: "Blogpost",
    icon: "pencil",
    badge: "[background:var(--color-yellow)] text-ink",
    shadow: "shadow-[9px_9px_0_var(--color-yellow-tint)]",
  },
  video: {
    label: "Video",
    icon: "video",
    badge: "[background:#ff0033] text-ink",
    shadow: "shadow-[9px_9px_0_var(--color-brand-tint-strong)]",
  },
  instagram: {
    label: "Instagram",
    icon: "brand-instagram",
    badge: "[background:#405de6] text-white",
    shadow: "shadow-[9px_9px_0_var(--color-peri-tint)]",
  },
} as const;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(`${date}T00:00:00Z`))
    .toUpperCase();
}

function EntryBadge({ type }: Pick<WhatsUpEntry, "type">) {
  const style = typeStyles[type];

  return (
    <Badge
      className={`gap-2 border-3 border-ink px-4 py-2 text-sm font-extrabold! ${style.badge}`}
    >
      <TablerIcon icon={style.icon} className="size-4" />
      {style.label}
    </Badge>
  );
}

function ApiMedia({ image, alt }: { image: ApiImage; alt: string }) {
  const source = image.sizes.large;
  const sizesByWidth = new Map(
    Object.values(image.sizes)
      .filter((size) => size.width <= source.width)
      .map((size) => [size.width, size]),
  );
  const srcSet = [...sizesByWidth.values()]
    .sort((first, second) => first.width - second.width)
    .map((size) => `${size.url} ${size.width}w`)
    .join(", ");

  return (
    <div
      className="bg-cover bg-center"
      style={
        image.placeholder
          ? { backgroundImage: `url("${image.placeholder}")` }
          : undefined
      }
    >
      {/* The static export relies on the API-generated responsive variants. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={source.url}
        srcSet={srcSet}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25rem"
        width={source.width}
        height={source.height}
        alt={image.alt || alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </div>
  );
}

function MediaPlaceholder({ label }: { label: string }) {
  return (
    <div className="grid min-h-56 w-full place-items-center bg-surface-muted font-mono text-xs text-muted">
      {label}
    </div>
  );
}

function ActionLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 font-mono text-sm font-medium"
      target="_blank"
    >
      {children}
      <TablerIcon icon="chevrons-right" className="size-4" />
    </a>
  );
}

function EntryMedia({ entry }: { entry: WhatsUpEntry }) {
  if (entry.type === "blogpost") return null;

  return (
    <div className="relative overflow-hidden border-b-3 border-ink bg-surface-muted">
      {entry.image?.sizes?.large ? (
        <ApiMedia image={entry.image} alt={entry.title} />
      ) : (
        <MediaPlaceholder label={`${typeStyles[entry.type].label} image`} />
      )}
      <div className="absolute top-4 right-4">
        <EntryBadge type={entry.type} />
      </div>
    </div>
  );
}

function EntryDetails({ entry }: { entry: WhatsUpEntry }) {
  switch (entry.type) {
    case "project": {
      const repository = entry.githubUrl
        ? new URL(entry.githubUrl).pathname.replace(/^\//, "")
        : null;

      return (
        <>
          {(repository || entry.stars) && (
            <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
              {repository && <span>{repository}</span>}
              {entry.stars && (
                <span className="inline-flex h-4 items-center gap-1 leading-none">
                  <TablerIcon icon="star" className="size-3.5" />
                  <span className="leading-none">{entry.stars}</span>
                </span>
              )}
            </div>
          )}
          <p className="mt-4 line-clamp-4">{entry.description}</p>
          <div className="mt-6 flex flex-wrap gap-5">
            {entry.appUrl && (
              <ActionLink href={entry.appUrl}>Launch app</ActionLink>
            )}
            {entry.githubUrl && (
              <ActionLink href={entry.githubUrl}>Source code</ActionLink>
            )}
          </div>
        </>
      );
    }
    case "podcast":
      return (
        <>
          <div className="mt-1 font-mono text-xs text-muted">
            {entry.podcastName}
          </div>
          <p className="mt-4 line-clamp-4">{entry.description}</p>
          <div className="mt-6">
            <ActionLink href={entry.link}>Listen to the episode</ActionLink>
          </div>
        </>
      );
    case "blogpost":
      return (
        <>
          <div className="mt-1 font-mono text-xs text-muted">
            {entry.publisher}
          </div>
          <p className="mt-4 line-clamp-4">
            {entry.summary || entry.description}
          </p>
          <div className="mt-6">
            <ActionLink href={entry.link}>Read the article</ActionLink>
          </div>
        </>
      );
    case "video":
      return (
        <>
          <p className="mt-4 line-clamp-4">{entry.description}</p>
          <div className="mt-6">
            <ActionLink href={entry.youtubeUrl}>Watch on YouTube</ActionLink>
          </div>
        </>
      );
    case "instagram":
      return (
        <>
          {entry.link && (
            <div className="mt-5">
              <ActionLink href={entry.link}>View on Instagram</ActionLink>
            </div>
          )}
        </>
      );
  }
}

export function WhatsUpEntryCard({ entry }: { entry: WhatsUpEntry }) {
  const hasMedia = entry.type !== "blogpost";

  return (
    <article
      className={`w-full overflow-hidden rounded-card border-3 border-ink bg-white ${typeStyles[entry.type].shadow}`}
    >
      <EntryMedia entry={entry} />
      <div className="p-7">
        {!hasMedia && (
          <div className="mb-6">
            <EntryBadge type={entry.type} />
          </div>
        )}
        <div className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
          {formatDate(entry.date)}
        </div>
        <h2 className="mt-3 text-2xl">{entry.title}</h2>
        <EntryDetails entry={entry} />
      </div>
    </article>
  );
}

function MasonryColumns({
  entries,
  count,
}: WhatsUpStreamProps & { count: number }) {
  return Array.from({ length: count }, (_, column) => (
    <div key={column} className="grid content-start gap-7">
      {entries.map((entry, index) =>
        index % count === column ? (
          <WhatsUpEntryCard
            key={`${entry.type}-${entry.date}-${entry.title}`}
            entry={entry}
          />
        ) : null,
      )}
    </div>
  ));
}

export default function WhatsUpStream({ entries }: WhatsUpStreamProps) {
  const [filter, setFilter] = useState<EntryFilter>("all");
  const visibleEntries =
    filter === "all"
      ? entries
      : entries.filter((entry) => entry.type === filter);

  if (entries.length === 0) {
    return (
      <Card shadow="peri">
        <h2 className="text-2xl">More things are on their way</h2>
        <p className="mt-2 mb-0">
          Projects, articles, videos and appearances will show up here soon.
        </p>
      </Card>
    );
  }

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3" aria-label="Filter entries">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            aria-pressed={filter === item.value}
            onClick={() => setFilter(item.value)}
            className={cn(
              "cursor-pointer rounded-full border-3 border-ink bg-white px-5 py-2 font-heading text-sm font-extrabold text-ink transition-colors hover:bg-surface-muted",
              filter === item.value &&
                "bg-ink! text-white hover:bg-ink hover:text-white",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {visibleEntries.length === 0 && (
        <Card shadow="peri">
          <h2 className="text-2xl">No matching entries yet</h2>
          <p className="mt-2 mb-0">Try another content type.</p>
        </Card>
      )}
      <div className="grid gap-7 md:hidden">
        {visibleEntries.map((entry) => (
          <WhatsUpEntryCard
            key={`${entry.type}-${entry.date}-${entry.title}`}
            entry={entry}
          />
        ))}
      </div>
      <div className="hidden items-start gap-7 md:grid md:grid-cols-2 xl:hidden">
        <MasonryColumns entries={visibleEntries} count={2} />
      </div>
      <div className="hidden items-start gap-7 xl:grid xl:grid-cols-3">
        <MasonryColumns entries={visibleEntries} count={3} />
      </div>
    </>
  );
}
