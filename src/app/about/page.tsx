import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import Portrait from "@/components/Portrait";
import { getPageMetadata } from "@/lib/shareable";
import { type AboutResponse, wpApiGet } from "@/lib/wp-api";
import { Badge, Button, Card, Eyebrow, IconTile, ListRow } from "@/theme";
import type { TablerIconName } from "@/theme";

export const metadata: Metadata = getPageMetadata("/about/");

const historyStyles = {
  community: {
    accent: "yellow",
    badge: "bg-yellow-tint text-yellow-ink",
  },
  professional: {
    accent: "teal",
    badge: "bg-brand-tint text-brand-deep",
  },
} as const;

export default async function AboutPage() {
  const { history } = await wpApiGet<AboutResponse>("nico/v2/about");
  const timeline = [...history].sort(
    (first, second) => Number(second.year) - Number(first.year),
  );

  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="Hello, my name is Nico."
        lead={
          <div className="space-y-4">
            <p>
              I am a machine learning engineer focused on WebML at Hugging Face
              and a Google Developer Expert in AI and Web Technologies from
              Switzerland.
            </p>
            <p>
              At Hugging Face, I work on{" "}
              <a href="https://github.com/huggingface/transformers.js">
                Transformers.js
              </a>
              , bringing state-of-the-art AI models directly to the browser. My
              work combines WebGPU, WebAssembly and modern browser APIs to build
              private, offline AI, autonomous agents and even browser-controlled
              hardware.
            </p>
            <p>
              With more than a decade of web development behind me, I focus on
              browser AI that works for real users and devices. I share what I
              learn through conference talks and hands-on workshops, usually
              with live demos and occasionally robots.
            </p>
          </div>
        }
        buttons={[
          { href: "/cv", children: "Read the CV", chevron: true },
          {
            href: "mailto:mail@nico.dev",
            children: "mail@nico.dev",
            secondary: true,
          },
        ]}
        media={<Portrait />}
      />
      <section className="wrap section">
        <Eyebrow>A little more about me</Eyebrow>
        <h2 className="section-title mt-5 mb-8">What keeps me busy</h2>
        <div className="grid gap-7 md:grid-cols-3">
          {[
            [
              "code",
              "Engineering",
              "I build open source machine learning tools for the web, turn new browser capabilities into practical products, and share what I learn along the way.",
              "teal",
            ],
            [
              "home-heart",
              "Family",
              "My wife, our three kids and I live in a small city by a beautiful lake, surrounded by the Swiss mountains. They keep my life busy, joyful, and full of surprises.",
              "yellow",
            ],
            [
              "mountain",
              "Wind and mountains",
              "Whenever there is wind, I try to be on the water. Otherwise, you will find me on skis in the terrain park, hiking in the mountains, or checking the wind forecast again.",
              "pink",
            ],
          ].map(([icon, title, text, tone]) => (
            <Card key={title} shadow={tone as "teal" | "yellow" | "pink"}>
              <IconTile
                icon={icon as TablerIconName}
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
          {timeline.map((entry) => {
            const style = historyStyles[entry.tag];

            return (
              <ListRow
                key={`${entry.year}-${entry.title}`}
                accent={style.accent}
                className="relative"
                lead={
                  <Badge className={`mt-0.5 w-fit shrink-0 ${style.badge}`}>
                    {entry.year}
                  </Badge>
                }
              >
                <Badge className={`absolute top-4 right-5 ${style.badge}`}>
                  {entry.tag}
                </Badge>
                <h3 className="pr-28 text-lg">{entry.title}</h3>
                <p className="mt-2 mb-0 max-w-3xl">{entry.description}</p>
              </ListRow>
            );
          })}
        </div>
      </section>
      <section className="mt-24 bg-brand py-18">
        <div className="wrap flex flex-wrap items-center justify-between gap-10">
          <div className="max-w-2xl">
            <Eyebrow className="bg-white/90">Curriculum vitae</Eyebrow>
            <h2 className="section-title mt-5 text-white">
              There&apos;s more to the story.
            </h2>
            <p className="lead mt-3 text-white/85">
              For the complete timeline, roles, projects and experience, take a
              look at my CV.
            </p>
          </div>
          <Button
            href="/cv"
            secondary
            chevron
            className="shadow-[6px_6px_0_var(--color-ink)]"
          >
            Read the CV
          </Button>
        </div>
      </section>
    </>
  );
}
