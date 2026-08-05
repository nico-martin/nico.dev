import Image from "next/image";

import EventBand from "@/components/EventBand";
import PageHeader from "@/components/PageHeader";
import TalkMap from "@/components/TalkMap";
import { Blob, Button, Eyebrow, TablerIcon } from "@/theme";
import stage from "../../../new-design/assets/nico-on-stage-codetalks.jpg";

const videos = [
  [
    "NaXILG12weY",
    "Nordic.js",
    "Stockholm",
    "2025",
    "Look ma, no hands! Multimodal AI agents in the browser",
  ],
  [
    "yUr5718r0pQ",
    "Devfest Nantes",
    "Nantes",
    "2025",
    "Let's build K.I.T.T. with JavaScript",
  ],
  [
    "HpbMZX1yOKc",
    "React Paris",
    "Paris",
    "2025",
    "Let's build K.I.T.T. with JavaScript",
  ],
  [
    "O07LXed5y_Q",
    "Uphill Conf",
    "Bern",
    "2025",
    "Let's build K.I.T.T. with JavaScript",
  ],
  [
    "R2sC9GUkTpQ",
    "Voxxed Days",
    "Zürich",
    "2022",
    "WebBluetooth - the missing link",
  ],
] as const;

const conferences = [
  "Nordic.js",
  "React Advanced London",
  "JSNation",
  "React Summit",
  "React Paris",
  "Devfest Nantes",
  "Codemotion",
  "CityJS London",
  "code.talks",
  "HalfStack London",
  "Build Stuff",
  "Full Stack Europe",
  "Voxxed Days",
  "Front Conference",
  "Uphill Conf",
  "webinale",
  "Developer Week",
  "programmier.con",
  "DevFest",
  "Dev<Talks/>",
  "Frontendconf",
  "WordCamp",
  "Infobip Shift",
  "Social Developers",
];

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking"
        title="Conferences, meetups, live demos"
        lead="Over the past few years I've had the pleasure of speaking at many different conferences and meetups. And I'm always happy about new opportunities as well: mail@nico.dev"
        media={
          <Blob className="size-[min(23.75rem,82vw)] bg-yellow">
            <Image
              src={stage}
              alt="Nico Martin on stage at code.talks Hamburg"
              fill
              priority
              className="object-cover object-[58%_30%]"
              sizes="380px"
            />
          </Blob>
        }
      />
      <section className="wrap">
        <div className="flex flex-wrap gap-4">
          <Button href="/invite/" chevron>
            Invite me to speak
          </Button>
          <Button
            href="https://www.youtube.com/@nicodotdev"
            secondary
            className="shadow-none"
          >
            Watch recordings
          </Button>
        </div>
      </section>
      <section className="wrap section">
        <Eyebrow>On stage</Eyebrow>
        <h2 className="section-title mt-5">Recordings from past conferences</h2>
        <p className="mt-3 max-w-xl">
          Every recording the organisers published. The demos are live in all of
          them.
        </p>
        <div className="mt-8 flex snap-x gap-6 overflow-x-auto pb-5">
          {videos.map(([id, event, city, year, talk]) => (
            <a
              key={id}
              href={`https://www.youtube.com/watch?v=${id}`}
              className="grid w-72 shrink-0 snap-start gap-4 no-underline hover:no-underline sm:w-84"
            >
              <div className="relative aspect-video overflow-hidden rounded-tile border-3 border-ink bg-ink shadow-[8px_8px_0_var(--color-brand-tint-strong)]">
                <Image
                  src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="336px"
                />
                <span className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-full border-3 border-ink bg-brand text-white">
                  <TablerIcon icon="player-play" className="size-5" />
                </span>
              </div>
              <div>
                <span className="font-mono text-xs tracking-wide text-muted uppercase">
                  {city} · {year}
                </span>
                <h3 className="mt-1 text-lg">{event}</h3>
                <p className="mt-1 text-sm text-body">{talk}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <EventBand
        eyebrow="Upcoming"
        title="Next up"
        description="More dates in the making - mail@nico.dev if you want one of them to be yours."
        events={[
          {
            date: "14.09.2026",
            event: "Infobip Shift",
            talk: "coming soon..",
            href: "https://shift.infobip.com/",
            accent: "brand",
          },
        ]}
      />
      <section className="wrap section">
        <Eyebrow>Archive</Eyebrow>
        <h2 className="section-title mt-5">Stages I&apos;ve been on</h2>
        <p className="mt-3 max-w-xl">
          Conferences and meetups across Europe since 2018 - slides for all of
          them live on slides.nico.dev.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {conferences.map((conference) => (
            <div key={conference} className="placeholder min-h-23 px-3">
              {conference}
            </div>
          ))}
        </div>
      </section>
      <section className="wrap section">
        <div className="grid items-center gap-12 lg:grid-cols-[21rem_1fr]">
          <div>
            <Eyebrow>Where</Eyebrow>
            <h2 className="section-title mt-5">Every trip starts in Thun</h2>
            <p className="mt-3">
              Home is a small town on a lake in the Swiss Alps. From there
              it&apos;s a train or a short flight to most of Europe - which is
              where the talks happen.
            </p>
            <div className="mt-6 grid gap-2 font-mono text-xs">
              <span className="flex items-center gap-2">
                <i className="size-3 rounded-full border-2 border-ink bg-yellow" />
                Thun, Switzerland
              </span>
              <span className="flex items-center gap-2">
                <i className="size-3 rounded-full border-2 border-ink bg-pink" />
                15 cities
              </span>
            </div>
          </div>
          <TalkMap />
        </div>
      </section>
    </>
  );
}
