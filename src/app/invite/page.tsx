import Image from "next/image";

import CopyTextButton from "@/components/CopyTextButton";
import InviteFacts from "@/components/InviteFacts";
import PageHeader from "@/components/PageHeader";
import TalkSelector from "@/components/TalkSelector";
import { type CfpResponse, wpApiGet } from "@/lib/wp-api";
import { Card, Eyebrow, TablerIcon } from "@/theme";

const needs = [
  "A stage and a beamer that accepts HDMI",
  "Internet is nice, not required (I need to know it upfront)",
  "I need to present from my own device",
  "I might bring additional hardware devices :)",
];

const facts = [
  ["Formats", "Conference talk, keynote"],
  ["Length", "20 to 45 minutes, agreed with you up front"],
  ["Languages", "English or German"],
  ["Travelling from", "Thun, Switzerland"],
  ["Slides", "Published openly on slides.nico.dev after the event"],
  ["Recording", "Always welcome"],
  ["requirements", needs],
] as const;

export default async function InvitePage() {
  const cfp = await wpApiGet<CfpResponse>("nico/v1/cfp");
  const activePapers = cfp.papers.filter((paper) => paper.isActive);
  const speakerBio = cfp.about[0];

  return (
    <>
      <PageHeader
        eyebrow="Invite me"
        title="Everything you need to book me"
        lead="Topics, formats, logistics and what I need on site. If something is missing, just ask: mail@nico.dev"
        buttons={[
          {
            href: "mailto:mail@nico.dev",
            children: "mail@nico.dev",
            chevron: true,
          },
          {
            href: "/speaking/",
            children: "Watch a talk first",
            secondary: true,
          },
        ]}
      />
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
          <TalkSelector papers={activePapers} />
        </div>
      </section>
      <InviteFacts facts={facts} />
      {/*<section className="wrap section">
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
              <TablerIcon icon="quote" className="size-10 text-brand" />
              <p className="lead mt-3">{quote}</p>
              <strong className="font-heading text-ink">Organiser name</strong>
              <div className="font-mono text-xs text-muted">
                Conference, year
              </div>
            </Card>
          ))}
        </div>
      </section>*/}
      <section className="wrap section mt-24 mb-24 pt-0">
        <Eyebrow>Speaker kit</Eyebrow>
        <h2 className="section-title mt-5">Bio, pictures and links</h2>
        <p className="mt-3 max-w-2xl">
          Everything you need for your programme, speaker page, or event
          announcement.
        </p>
        <div className="mt-8 grid items-start gap-7 lg:grid-cols-2">
          <Card shadow="pink">
            <h3 className="text-2xl">Bio</h3>
            <p className="mt-2">Copy this straight into your programme:</p>
            {speakerBio && (
              <div className="mt-5 rounded-tile bg-surface-muted p-5">
                <p className="whitespace-pre-line">{speakerBio.text}</p>
                <div className="mt-3 text-right">
                  <CopyTextButton
                    text={speakerBio.text}
                    label="Copy bio"
                    quiet
                  />
                </div>
              </div>
            )}
          </Card>
          <Card shadow="peri">
            <h3 className="text-2xl">Pictures and links</h3>
            <h4 className="mt-6 font-heading text-lg text-ink">Press photos</h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {cfp.portrait.map((portrait, index) => (
                <div
                  key={portrait}
                  className="overflow-hidden rounded-tile bg-surface-muted"
                >
                  <a
                    href={portrait}
                    target="_blank"
                    className="relative block aspect-4/5 overflow-hidden bg-ink hover:no-underline"
                  >
                    <Image
                      src={portrait}
                      alt={`Nico Martin portrait ${index + 1}`}
                      fill
                      className="object-cover object-top transition-transform hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                  </a>
                  <div className="flex items-center justify-between gap-2 p-3 font-mono text-xs">
                    <a href={portrait} target="_blank">
                      Photo {index + 1}
                    </a>
                    <CopyTextButton text={portrait} label="Copy" quiet />
                  </div>
                </div>
              ))}
            </div>
            <h4 className="mt-7 font-heading text-lg text-ink">
              Profile links
            </h4>
            <div className="mt-2 grid gap-x-15 sm:grid-cols-2">
              {cfp.links.map((link) => (
                <div
                  key={link.title}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-ink/10 py-3 font-mono text-xs"
                >
                  <a
                    href={link.url}
                    className="inline-flex min-w-0 items-center gap-1"
                  >
                    <span className="truncate">{link.title}</span>
                    <TablerIcon
                      icon="chevrons-right"
                      className="size-4 shrink-0"
                    />
                  </a>
                  <CopyTextButton text={link.url} label="Copy" quiet />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
