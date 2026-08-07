import Link from "next/link";

import Doodles from "@/components/Doodles";
import EventBand from "@/components/EventBand";
import { WhatsUpEntryCard } from "@/components/WhatsUpStream";
import { talksToEvents } from "@/lib/talks";
import {
  type TalksResponse,
  type WhatsUpParams,
  type WhatsUpResponse,
  wpApiGet,
} from "@/lib/wp-api";
import { Card, Eyebrow, IconTile, TablerIcon } from "@/theme";
import Portrait from "@/components/Portrait";

const introCards = [
  {
    icon: "user",
    title: "About me",
    text: "WebML at Hugging Face, Google Developer Expert, and a few years of conference stages behind me. The long version, plus what came before.",
    shadow: "teal" as const,
    tone: "teal" as const,
    href: "/about/",
    cta: "Who I am",
  },
  {
    icon: "presentation",
    title: "Talks",
    text: "AI agents in the browser, K.I.T.T. in JavaScript, robots over Bluetooth, ... Every one with on-device live demos along the way.",
    shadow: "yellow" as const,
    tone: "yellow" as const,
    href: "/speaking/",
    cta: "See the talks",
  },
  {
    icon: "activity",
    title: "What's up",
    text: "Side projects, articles, videos, pictures and podcast appearances. Whatever I am currently building and exploring.",
    shadow: "pink" as const,
    tone: "pink" as const,
    href: "/whats-up/",
    cta: "Have a look",
  },
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
      <section className="relative py-18">
        <Doodles />
        <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise">
            <Eyebrow>Machine learning engineer</Eyebrow>
            <h1 className="display mt-6">
              Hello, my name
              <br />
              is <span className="text-brand">Nico</span>.
            </h1>
            <p className="lead mt-5 max-w-xl">
              I am an open source machine learning engineer with focus on WebML
              at Hugging Face and Google Developer Expert in AI and web
              technologies, from Switzerland.
            </p>
          </div>
          <Portrait />
        </div>
      </section>
      <section className="wrap pt-16">
        <div className="grid gap-7 md:grid-cols-3">
          {introCards.map((item, index) => (
            <Card
              key={item.title}
              shadow={item.shadow}
              className="flex animate-rise flex-col"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <IconTile icon={item.icon} tone={item.tone} />
              <h2 className="mt-5 text-2xl">{item.title}</h2>
              <p className="mt-2 mb-4">{item.text}</p>
              <Link
                href={item.href}
                className="mt-auto inline-flex items-center gap-1 font-mono text-sm"
              >
                {item.cta}
                <TablerIcon icon="chevrons-right" className="size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>
      <EventBand
        events={events}
        description="Over the past few years, I’ve spoken at conferences and meetups across Europe, meeting brilliant people and happily nerding out about what browsers can do."
        upcomingOnly
        showAll
      />
      <section className="wrap section">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>What&apos;s new</Eyebrow>
            <h2 className="section-title mt-5">Latest things I&apos;ve done</h2>
          </div>
          <Link
            href="/whats-up/"
            className="inline-flex items-center gap-1 font-mono text-sm"
          >
            Everything I&apos;m up to
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
