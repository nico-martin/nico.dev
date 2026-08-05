import Image from "next/image";
import Link from "next/link";

import Doodles from "@/components/Doodles";
import EventBand from "@/components/EventBand";
import {
  Badge,
  Blob,
  Button,
  Card,
  Eyebrow,
  IconTile,
  TablerIcon,
} from "@/theme";
import portrait from "../../new-design/assets/nico-portrait.jpg";

const events = [
  {
    date: "14.09.2026",
    event: "Infobip Shift",
    talk: "coming soon..",
    accent: "brand" as const,
    href: "https://shift.infobip.com/",
  },
  {
    date: "05.06.2026",
    event: "React Norway",
    talk: "Look ma, no hands! Multimodal AI agents in the browser",
    accent: "yellow" as const,
    href: "https://reactnorway.com/",
  },
  {
    date: "03.06.2026",
    event: "Dev<Talks/>",
    talk: "Look ma, no hands! Multimodal AI agents in the browser",
    accent: "pink" as const,
    href: "https://www.devtalks.ro/speakers/688-nico-martin",
  },
];

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
    text: "AI agents in the browser, K.I.T.T. in JavaScript, robots over Bluetooth - every one with a live demo that runs on-device.",
    shadow: "yellow" as const,
    tone: "yellow" as const,
    href: "/speaking/",
    cta: "See the talks",
  },
  {
    icon: "activity",
    title: "What's up",
    text: "Side projects, articles, recorded talks and podcast appearances. Whatever I am currently building or explaining.",
    shadow: "pink" as const,
    tone: "pink" as const,
    href: "/whats-up/",
    cta: "Have a look",
  },
] as const;

const projects = [
  {
    name: "Ask my PDF",
    repo: "nico-martin/ask-my-pdf",
    desc: "Retrieval Augmented Generation and large language models to interact with a PDF, entirely in the browser.",
    tags: ["RAG", "WebGPU"],
    tone: "teal" as const,
    icon: "file-text",
    live: "https://pdf.nico.dev",
    source: "https://github.com/nico-martin/ask-my-pdf",
  },
  {
    name: "[md.edit]",
    repo: "nico-martin/markdown-editor",
    desc: "A web based markdown editor showcasing the File System Access API: files open and save straight in the browser.",
    tags: ["PWA", "File System"],
    tone: "yellow" as const,
    icon: "markdown",
    live: "https://md.nico.dev/",
    source: "https://github.com/nico-martin/markdown-editor/",
  },
  {
    name: "SpeedWheels BLE Car",
    repo: "nico-martin/speed-wheels-ble-ui",
    desc: "An Arduino toy car that talks Bluetooth Low Energy, driven by a web app over the Web Bluetooth API.",
    tags: ["WebBluetooth", "Arduino"],
    tone: "pink" as const,
    icon: "car",
    live: "https://speed-wheels.nico.dev/",
    source: "https://github.com/nico-martin/speed-wheels-ble-arduino",
  },
] as const;

export default function Home() {
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
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/speaking/" chevron>
                See where I speak
              </Button>
              <Button href="mailto:mail@nico.dev" secondary>
                Invite me to your event
              </Button>
            </div>
          </div>
          <div className="grid animate-rise place-items-center [animation-delay:90ms]">
            <Blob>
              <Image
                src={portrait}
                alt="Nico Martin"
                fill
                priority
                className="[transform-origin:50%_0] scale-[1.6] object-cover object-top"
                sizes="(max-width: 980px) 82vw, 400px"
              />
            </Blob>
          </div>
        </div>
      </section>
      <section className="wrap pt-16">
        <div className="grid gap-7 md:grid-cols-3">
          {introCards.map((item, index) => (
            <Card
              key={item.title}
              shadow={item.shadow}
              className="animate-rise"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <IconTile icon={item.icon} tone={item.tone} />
              <h2 className="mt-5 text-2xl">{item.title}</h2>
              <p className="mt-2">{item.text}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 font-mono text-sm"
              >
                {item.cta}
                <TablerIcon icon="chevrons-right" className="size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>
      <EventBand events={events} showAll />
      <section className="wrap section">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>What&apos;s new</Eyebrow>
            <h2 className="section-title mt-5">Latest things I built</h2>
          </div>
          <Link
            href="/whats-up/"
            className="inline-flex items-center gap-1 font-mono text-sm"
          >
            Everything I&apos;m up to
            <TablerIcon icon="chevrons-right" className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name} shadow={project.tone}>
              <div className="flex gap-4">
                <IconTile icon={project.icon} tone={project.tone} />
                <div className="min-w-0">
                  <h3 className="text-xl">{project.name}</h3>
                  <div className="mt-1 font-mono text-xs break-all text-muted">
                    {project.repo}
                  </div>
                  <p className="mt-3">{project.desc}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                    <Badge className="bg-brand-tint text-brand">
                      ● live demo
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button small href={project.live} chevron>
                      Launch app
                    </Button>
                    <Button
                      small
                      secondary
                      href={project.source}
                      className="shadow-none"
                    >
                      Source code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
