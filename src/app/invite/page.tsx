import type { Metadata } from "next";
import Image from "next/image";

import InviteBioSelector from "@/components/InviteBioSelector";
import InviteFacts from "@/components/InviteFacts";
import OrganizerEmailTemplate from "@/components/OrganizerEmailTemplate";
import PageHeader from "@/components/PageHeader";
import PressPhotoSelector from "@/components/PressPhotoSelector";
import StagePhoto from "@/components/StagePhoto";
import TalkSelector from "@/components/TalkSelector";
import { getPressImages } from "@/lib/press-images";
import { getPageMetadata } from "@/lib/shareable";
import {
  type AboutResponse,
  type CfpResponse,
  type TalksResponse,
  wpApiGet,
} from "@/lib/wp-api";
import { Button, Card, Eyebrow, TablerIcon } from "@/theme";

export const metadata: Metadata = getPageMetadata("/invite/");

const needs = [
  "A projector or screen with HDMI input",
  "Venue Wi-Fi is optional; please confirm availability in advance",
  "I need to present from my own device",
  "I might bring additional hardware devices :)",
];

const facts = [
  ["Formats", "Conference talks, keynotes, panels, podcasts, and meetups"],
  ["Delivery", "In person only. I don't do remote talks"],
  ["Length", "20 to 45 minutes, agreed with you up front"],
  ["Languages", "English or German"],
  ["Travelling from", "Thun, Switzerland"],
  ["Slides", "Available online after the talk"],
  ["Recording", "Always welcome"],
  ["Requirements", needs],
] as const;

export default async function InvitePage() {
  const [cfp, about, talks, pressImages] = await Promise.all([
    wpApiGet<CfpResponse>("nico/v1/cfp"),
    wpApiGet<AboutResponse>("nico/v2/about"),
    wpApiGet<TalksResponse>("nico/v2/talks"),
    getPressImages(),
  ]);
  const activePapers = cfp.papers.filter((paper) => paper.isActive);
  const organizerQuotes = talks.organizerQuotes ?? [];

  return (
    <>
      <PageHeader
        eyebrow="Invite me"
        title="Find the right talk for your audience"
        lead="Practical browser AI, explained clearly and without the hype."
        buttons={[
          {
            href: "#invitation",
            children: "Draft an invitation",
            chevron: true,
          },
          {
            href: "/speaking/",
            children: "Watch a talk first",
            secondary: true,
          },
        ]}
        media={<StagePhoto />}
      />
      <nav
        aria-label="On this page"
        className="wrap flex flex-wrap gap-x-7 gap-y-3 border-y border-ink/10 py-4 font-mono text-xs"
      >
        <span className="text-muted">Jump to</span>
        <a href="#talks">Talks</a>
        <a href="#logistics">Logistics</a>
        <a href="#reviews">Reviews</a>
        <a href="#speaker-kit">Speaker kit</a>
      </nav>
      <section className="wrap pt-12 lg:pt-16">
        <Eyebrow>Working with me</Eyebrow>
        <h2 className="section-title mt-5">Built for curious audiences</h2>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
          <div className="space-y-5 text-lg">
            <p>
              I&apos;m Nico, an open-source machine learning engineer at Hugging
              Face, a maintainer of Transformers.js, and a Google Developer
              Expert in AI and Web Technologies. After more than a decade of
              building for the web, I now explore what happens when modern AI
              meets the browser.
            </p>
            <p>
              I&apos;ve spoken at developer conferences across Europe since
              2018. I match the technical depth to the room, explain the
              trade-offs without the hype, and leave people with ideas they can
              actually try.
            </p>
            <Button href="#speaker-kit" secondary small chevron>
              Need copy for your programme?
            </Button>
          </div>
          <Card shadow="yellow">
            <h3 className="text-2xl">What organisers can expect</h3>
            <div className="mt-5 border-t border-ink/15 py-4">
              <strong className="font-heading text-ink">Audience first</strong>
              <p className="mt-1 mb-0">
                I adapt the focus, depth, and length to your event and the
                people in the room.
              </p>
            </div>
            <div className="border-t border-ink/15 py-4">
              <strong className="font-heading text-ink">
                Live and practical
              </strong>
              <p className="mt-1 mb-0">
                Working code, clear takeaways, and demos that serve the story.
              </p>
            </div>
            <div className="border-t border-ink/15 pt-4">
              <strong className="font-heading text-ink">
                Straightforward planning
              </strong>
              <p className="mt-1 mb-0">
                Clear communication before the event, simple requirements, and
                no surprises for your production team.
              </p>
            </div>
          </Card>
        </div>
      </section>
      <section id="talks" className="wrap pt-16 lg:pt-20">
        <div>
          <Eyebrow>The talks</Eyebrow>
          <h2 className="section-title mt-5">What I can bring to your stage</h2>
          <p className="mt-3 max-w-xl">
            English or German, 20 to 45 minutes, adapted to your format and
            audience.
          </p>
        </div>
        <div className="mt-7">
          <TalkSelector papers={activePapers} />
        </div>
      </section>
      <section id="reviews" className="wrap section">
        <Eyebrow>Kind words</Eyebrow>
        <h2 className="section-title mt-5">What organisers said</h2>
        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {organizerQuotes.map((quote, index) => (
            <Card
              key={`${quote.organizer}-${quote.conference}`}
              shadow={index % 2 === 0 ? "teal" : "peri"}
              className="flex h-full flex-col"
            >
              <TablerIcon icon="quote" className="size-10 text-brand" />
              <p className="lead mt-3">{quote.text}</p>
              <div className="mt-auto flex items-end justify-between gap-5 pt-5">
                <div>
                  <strong className="font-heading text-ink">
                    {quote.organizer}
                  </strong>
                  <div className="font-mono text-xs text-muted">
                    {quote.conference}
                  </div>
                </div>
                {quote.logo && (
                  <Image
                    src={quote.logo.url}
                    width={quote.logo.width}
                    height={quote.logo.height}
                    alt={quote.logo.alt || `${quote.conference} logo`}
                    className="max-h-14 max-w-32 object-contain"
                  />
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
      <InviteFacts id="logistics" facts={facts} />
      <OrganizerEmailTemplate />
      <section id="speaker-kit" className="wrap section mt-24 mb-24 pt-0">
        <Eyebrow>Speaker kit</Eyebrow>
        <h2 className="section-title mt-5">Bio, pictures and links</h2>
        <p className="mt-3 max-w-2xl">
          Everything you need for your programme, speaker page, or event
          announcement.
        </p>
        <div className="mt-8 grid items-start gap-7 lg:grid-cols-2">
          <InviteBioSelector
            bios={about.bio}
            links={cfp.links.filter((link) => link.title !== "Talks")}
          />
          <Card shadow="peri">
            <h3 className="text-2xl">Photos</h3>
            <PressPhotoSelector images={pressImages} />
          </Card>
        </div>
      </section>
    </>
  );
}
