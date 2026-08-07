import PageHeader from "@/components/PageHeader";
import Portrait from "@/components/Portrait";
import { type AboutResponse, wpApiGet } from "@/lib/wp-api";
import { Badge, Button, Card, Eyebrow, IconTile, ListRow } from "@/theme";
import type { TablerIconName } from "@/theme";

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
              I am an open source machine learning engineer with focus on WebML
              at Hugging Face and Google Developer Expert in AI and web
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
        <Eyebrow>What I do</Eyebrow>
        <h2 className="section-title mt-5 mb-8">Three things, most days</h2>
        <div className="grid gap-7 md:grid-cols-3">
          {[
            [
              "brain",
              "On-device machine learning",
              "Models that run client-side: quantisation, WebGPU, worker pipelines, and the demos that prove it works.",
              "teal",
            ],
            [
              "microphone",
              "Speaking & teaching",
              "Conference talks and team workshops. I like a live demo that could fail on stage - it usually does not.",
              "yellow",
            ],
            [
              "bolt",
              "Progressive web apps",
              "Installable, offline-capable web apps that feel at home on any device, powered by service workers and modern browser APIs.",
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
