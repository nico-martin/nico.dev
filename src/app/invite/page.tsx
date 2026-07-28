import EventBand from "@/components/EventBand";
import PageHeader from "@/components/PageHeader";
import TalkSelector from "@/components/TalkSelector";
import { Button, Card, Eyebrow } from "@/theme";
import portrait from "../../../new-design/assets/nico-portrait.jpg";

const facts = [
  [
    "Formats",
    "Conference talk, meetup talk, or a half- to two-day team workshop",
  ],
  ["Length", "20 to 45 minutes for a talk, agreed with you up front"],
  ["Languages", "English or German"],
  ["Travelling from", "Thun, Switzerland - anywhere in Europe works"],
  ["Slides", "Published openly on slides.nico.dev after the event"],
  ["Recording", "Always welcome - I link it from this site"],
] as const;

const needs = [
  "A stage and a beamer that accepts HDMI",
  "Internet is nice, not required - the demos run offline",
  "A table if the talk involves the car or the robot",
  "I bring the hardware",
];

export default function InvitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Invite me"
        title="Everything you need to book me"
        lead="Topics, formats, logistics and what I need on site. If something is missing, just ask: mail@nico.dev"
      />
      <section className="wrap">
        <div className="flex flex-wrap gap-4">
          <Button href="mailto:mail@nico.dev">mail@nico.dev&nbsp; »</Button>
          <Button href="/speaking/" secondary>
            Watch a talk first
          </Button>
        </div>
      </section>
      <section className="wrap section">
        <div>
          <Eyebrow>The talks</Eyebrow>
          <h2 className="section-title mt-5">What I can bring to your stage</h2>
          <p className="mt-3 max-w-xl">
            Each one comes with a live demo that runs entirely in the browser.
            English or German, 20 to 45 minutes.
          </p>
        </div>
        <div className="mt-7">
          <TalkSelector />
        </div>
      </section>
      <EventBand
        eyebrow="The facts"
        title="Formats, languages, logistics"
        description="The short version for your CFP sheet or programme document."
        events={[]}
      />
      <section className="-mt-[5.5rem] bg-ink pb-22 text-white">
        <div className="wrap border-t border-white/15">
          {facts.map(([key, value]) => (
            <div
              key={key}
              className="grid gap-2 border-b border-white/15 py-5 md:grid-cols-[12.5rem_1fr]"
            >
              <span className="font-mono text-xs tracking-[0.12em] text-brand uppercase">
                {key}
              </span>
              <span className="text-white/80">{value}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="wrap section">
        <Eyebrow>Kind words</Eyebrow>
        <h2 className="section-title mt-5">What organisers said</h2>
        <p className="mt-3 mb-8 max-w-xl">
          Two placeholder quotes - send me the real ones and I&apos;ll drop them
          in.
        </p>
        <div className="grid gap-7 md:grid-cols-2">
          {[
            "Placeholder - send me a line from an organiser you worked with and I'll set it here.",
            "Placeholder - a second quote works well next to the first.",
          ].map((quote, index) => (
            <Card key={quote} shadow={index === 0 ? "teal" : "peri"}>
              <span className="font-heading text-4xl font-black text-brand">
                »
              </span>
              <p className="lead mt-3">{quote}</p>
              <strong className="font-heading text-ink">Organiser name</strong>
              <div className="font-mono text-xs text-muted">
                Conference, year
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="wrap section">
        <div className="grid items-start gap-7 md:grid-cols-2">
          <Card shadow="yellow">
            <Eyebrow>On site</Eyebrow>
            <h2 className="mt-4 text-2xl">What I need from you</h2>
            <p className="mt-2">
              A stage, a beamer that accepts HDMI, and internet is nice but not
              required. I bring the car.
            </p>
            <div className="my-5 grid gap-2">
              {needs.map((need) => (
                <div key={need} className="flex gap-3">
                  <span className="font-heading font-black text-brand">✓</span>
                  <span>{need}</span>
                </div>
              ))}
            </div>
            <Button href="mailto:mail@nico.dev" small>
              mail@nico.dev&nbsp; »
            </Button>
          </Card>
          <Card shadow="pink">
            <Eyebrow>Speaker kit</Eyebrow>
            <h2 className="mt-4 text-2xl">Bio and photo</h2>
            <p className="mt-2">Copy this straight into your programme:</p>
            <p className="rounded-tile bg-surface-muted p-5">
              Nico Martin is an open source machine learning engineer with focus
              on WebML at Hugging Face and Google Developer Expert in AI and web
              technologies, from Switzerland.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 font-mono text-xs">
              <a href={portrait.src}>Portrait photo »</a>
              <a href="https://github.com/nico-martin">GitHub »</a>
              <a href="https://x.com/nicodotdev">X »</a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
