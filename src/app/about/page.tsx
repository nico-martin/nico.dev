import Image from "next/image";

import Doodles from "@/components/Doodles";
import { Badge, Blob, Button, Card, Eyebrow, IconTile } from "@/theme";
import portrait from "../../../new-design/assets/nico-portrait.jpg";

const timeline = [
  [
    "now",
    "Transformers.js at Hugging Face",
    "Open source machine learning engineer with a focus on WebML - bringing state-of-the-art models directly to the browser.",
    "border-brand",
  ],
  [
    "now",
    "Google Developer Expert",
    "For AI and web technologies. Interactive demos, technical content and open source tools for privacy-preserving, on-device inference.",
    "border-peri",
  ],
  [
    "2025",
    "The K.I.T.T. tour",
    "Let's build K.I.T.T. with JavaScript and Look ma, no hands! at Nordic.js, React Advanced London, Devfest Nantes, JSNation, React Paris, Codemotion Rome, CityJS London.",
    "border-yellow",
  ],
  [
    "2024",
    "Ask my PDF",
    "RAG and LLMs against a PDF, fully in the browser. Plus From ML to LLM: on-device AI in the browser at HalfStack London.",
    "border-pink",
  ],
  [
    "2023",
    "Desktop-class web apps",
    "Rethinking desktop applications with progressive web apps at Build Stuff and Full Stack Europe; test automation with Playwright at WordCamp Switzerland.",
    "border-brand",
  ],
  [
    "2022",
    "Talking to hardware",
    "WebBluetooth - the missing link at JSNation and Voxxed Days Zürich, robots at Front Conference Zürich - and the SpeedWheels BLE car and WebUSB matrix to go with them.",
    "border-peri",
  ],
  [
    "2019",
    "Accessibility & WordPress",
    "A brief introduction to a11y at WordCamp Zürich, and Git Installer - a plugin to deploy WordPress themes straight from a Git repository.",
    "border-yellow",
  ],
  [
    "2018",
    "#PWAforEveryone",
    "My first conference stages: DevFest Switzerland and Frontendconf Zürich.",
    "border-pink",
  ],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="relative py-18">
        <Doodles />
        <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-rise">
            <Eyebrow>About me</Eyebrow>
            <h1 className="page-title mt-6">Hello, my name is Nico.</h1>
            <div className="lead mt-5 space-y-4">
              <p>
                I am an open source machine learning engineer with focus on
                WebML at Hugging Face and Google Developer Expert in AI and web
                technologies, from Switzerland.
              </p>
              <p>
                I work on{" "}
                <a href="https://github.com/huggingface/transformers.js">
                  Transformers.js
                </a>
                , bringing state-of-the-art machine learning models directly to
                the web browser. My focus is on making AI accessible through
                interactive demos, technical content and open source tools.
              </p>
              <p>
                Beyond code, I&apos;m passionate about developer relations:
                sharing knowledge through conference talks, blog posts and
                community engagement.
              </p>
              <p>
                When I&apos;m not in front of a computer, I spend my days in the
                mountains, on skis, or waiting for the wind.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="https://nico.dev/cv">Read the CV&nbsp; »</Button>
              <Button href="mailto:mail@nico.dev" secondary>
                mail@nico.dev
              </Button>
            </div>
          </div>
          <div className="grid place-items-center">
            <Blob className="size-[min(22.5rem,82vw)]">
              <Image
                src={portrait}
                alt="Nico Martin"
                fill
                className="[transform-origin:50%_0] scale-[1.6] object-cover object-top"
                sizes="360px"
              />
            </Blob>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <Eyebrow>What I do</Eyebrow>
        <h2 className="section-title mt-5 mb-8">Three things, most days</h2>
        <div className="grid gap-7 md:grid-cols-3">
          {[
            [
              "✓",
              "On-device machine learning",
              "Models that run client-side: quantisation, WebGPU, worker pipelines, and the demos that prove it works.",
              "teal",
            ],
            [
              "»",
              "Speaking & teaching",
              "Conference talks and team workshops. I like a live demo that could fail on stage - it usually does not.",
              "yellow",
            ],
            [
              "⌁",
              "Browser hardware APIs",
              "WebBluetooth, WebUSB, File System Access. If the browser can talk to a device, I have probably tried it.",
              "pink",
            ],
          ].map(([glyph, title, text, tone]) => (
            <Card key={title} shadow={tone as "teal" | "yellow" | "pink"}>
              <IconTile
                glyph={glyph}
                tone={tone as "teal" | "yellow" | "pink"}
              />
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 mb-0">{text}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="wrap section">
        <Eyebrow>What I&apos;ve done</Eyebrow>
        <h2 className="section-title mt-5 mb-8">A short history</h2>
        <div className="grid gap-4">
          {timeline.map(([year, title, text, border]) => (
            <div
              key={title}
              className={`grid gap-4 rounded-tile border-l-4 bg-surface-muted px-6 py-5 md:grid-cols-[6rem_1fr] ${border}`}
            >
              <Badge className="w-fit self-start">{year}</Badge>
              <div>
                <h3 className="text-lg">{title}</h3>
                <p className="mt-1 mb-0 max-w-3xl">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-3">
          <Card>
            <div className="font-heading text-5xl font-black text-brand">
              30+
            </div>
            <div className="mt-2 font-heading font-bold text-ink">
              Conference talks
            </div>
            <div className="font-mono text-xs text-muted">since 2018</div>
          </Card>
          <Card shadow="peri">
            <div className="font-heading text-5xl font-black text-ink">
              2018
            </div>
            <div className="mt-2 font-heading font-bold text-ink">
              Speaking since
            </div>
            <div className="font-mono text-xs text-muted">
              conferences & meetups
            </div>
          </Card>
          <Card shadow="yellow">
            <div className="font-heading text-5xl font-black text-yellow-ink">
              MIT
            </div>
            <div className="mt-2 font-heading font-bold text-ink">
              Side projects
            </div>
            <div className="font-mono text-xs text-muted">all open source</div>
          </Card>
        </div>
      </section>
      <section className="mt-24 bg-brand py-18">
        <div className="wrap flex flex-wrap items-center justify-between gap-10">
          <div className="max-w-2xl">
            <Eyebrow className="bg-white/90">Say hi</Eyebrow>
            <h2 className="section-title mt-5 text-white">
              Looking for a speaker?
            </h2>
            <p className="lead mt-3 text-white/85">
              I&apos;m always happy about new opportunities - conferences,
              meetups or an internal team session.
            </p>
          </div>
          <Button
            href="mailto:mail@nico.dev"
            secondary
            className="shadow-[6px_6px_0_var(--color-ink)]"
          >
            mail@nico.dev&nbsp; »
          </Button>
        </div>
      </section>
    </>
  );
}
