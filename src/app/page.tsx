import Link from "next/link";

import EventBand from "@/components/EventBand";
import PageHeader from "@/components/PageHeader";
import Portrait from "@/components/Portrait";
import { WhatsUpEntryCard } from "@/components/WhatsUpStream";
import { talksToEvents } from "@/lib/talks";
import {
  type TalksResponse,
  type WhatsUpParams,
  type WhatsUpResponse,
  wpApiGet,
} from "@/lib/wp-api";
import { Eyebrow, IconTile, TablerIcon } from "@/theme";

const introCards = [
  {
    icon: "user",
    title: "About me",
    text: "WebML at Hugging Face, Google Developer Expert, and a few years of conference stages behind me. The long version, plus what came before.",
    shadow: "shadow-[9px_9px_0_var(--color-brand-tint-strong)]",
    hoverShadow:
      "hover:shadow-[11px_11px_0_var(--color-brand-tint-strong)] focus-within:shadow-[11px_11px_0_var(--color-brand-tint-strong)]",
    tone: "teal" as const,
    href: "/about/",
    cta: "Who I am",
  },
  {
    icon: "presentation",
    title: "Talks",
    text: "AI agents in the browser, K.I.T.T. in JavaScript, robots over Bluetooth, ... Every one with on-device live demos along the way.",
    shadow: "shadow-[9px_9px_0_var(--color-yellow)]",
    hoverShadow:
      "hover:shadow-[11px_11px_0_var(--color-yellow)] focus-within:shadow-[11px_11px_0_var(--color-yellow)]",
    tone: "yellow" as const,
    href: "/speaking/",
    cta: "See the talks",
  },
  {
    icon: "activity",
    title: "Changelog",
    text: "Side projects, articles, videos, pictures and podcast appearances. Whatever I am currently building and exploring.",
    shadow: "shadow-[9px_9px_0_var(--color-pink)]",
    hoverShadow:
      "hover:shadow-[11px_11px_0_var(--color-pink)] focus-within:shadow-[11px_11px_0_var(--color-pink)]",
    tone: "pink" as const,
    href: "/changelog/",
    cta: "Have a look",
  },
] as const;

const socialLinks = [
  ["X", "https://x.com/nicodotdev", "brand-x"],
  ["LinkedIn", "https://www.linkedin.com/in/nicodotdev/", "brand-linkedin"],
  ["GitHub", "https://github.com/nico-martin", "brand-github"],
  ["YouTube", "https://www.youtube.com/@nicodotdev", "brand-youtube"],
  ["Instagram", "https://www.instagram.com/nicodotdev/", "brand-instagram"],
] as const;

export default async function Home() {
  const [{ talks }, { entries }] = await Promise.all([
    wpApiGet<TalksResponse>("nico/v2/talks"),
    wpApiGet<WhatsUpResponse, WhatsUpParams>("nico/v2/whats-up", {
      limit: 3,
    }),
  ]);
  const events = talksToEvents(talks);
  const latestEntries = [...entries]
    .sort((first, second) => second.date.localeCompare(first.date))
    .slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Machine learning engineer"
        title={
          <>
            Hello, my name
            <br />
            is <span className="text-brand">Nico</span>.
          </>
        }
        lead="I am an open source machine learning engineer with focus on WebML at Hugging Face and Google Developer Expert in AI and web technologies, from Switzerland."
        actions={
          <div className="mt-7 flex flex-wrap gap-3">
            {socialLinks.map(([label, href, icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="inline-grid size-11 place-items-center rounded-full border-2 border-ink bg-white text-ink shadow-[3px_3px_0_var(--color-yellow)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-yellow)]"
              >
                <TablerIcon icon={icon} className="size-5" />
              </a>
            ))}
          </div>
        }
        media={<Portrait />}
        displayTitle
      />
      <section className="wrap pt-16">
        <div className="grid gap-7 md:grid-cols-3">
          {introCards.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group flex animate-rise flex-col rounded-card border-3 border-ink bg-white p-7 text-body no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:text-body hover:no-underline focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand ${item.shadow} ${item.hoverShadow}`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <IconTile icon={item.icon} tone={item.tone} />
                <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-white text-ink shadow-[3px_3px_0_var(--color-yellow)] transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0_var(--color-yellow)] group-focus-visible:-translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:shadow-[5px_5px_0_var(--color-yellow)]">
                  <TablerIcon icon="chevrons-right" className="size-4" />
                </span>
              </div>
              <h2 className="mt-5 text-2xl">{item.title}</h2>
              <p className="mt-2 mb-4">{item.text}</p>
              <span className="mt-auto inline-flex w-fit items-center gap-1 border-b-2 border-brand pb-1 font-mono text-sm font-medium text-brand">
                {item.cta}
                <TablerIcon icon="chevrons-right" className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <EventBand
        events={events}
        description="Over the past few years, I’ve spoken at conferences and meetups across Europe, meeting brilliant people and happily nerding out about what browsers can do."
        showAll
      />
      <section className="wrap section">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>What&apos;s new</Eyebrow>
            <h2 className="section-title mt-5">Latest things I&apos;ve done</h2>
          </div>
          <Link
            href="/changelog/"
            className="inline-flex items-center gap-1 font-mono text-sm"
          >
            View the changelog
            <TablerIcon icon="chevrons-right" className="size-4" />
          </Link>
        </div>
        <div className="mt-8 mb-24 grid gap-7 lg:grid-cols-3">
          {latestEntries.map((entry) => (
            <WhatsUpEntryCard
              key={`${entry.type}-${entry.date}-${entry.title}`}
              entry={entry}
            />
          ))}
        </div>
      </section>
    </>
  );
}
