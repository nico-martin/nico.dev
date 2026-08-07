import Image from "next/image";

import ConferenceCarousel from "@/components/ConferenceCarousel";
import EventBand from "@/components/EventBand";
import PageHeader from "@/components/PageHeader";
import RecordingsCarousel from "@/components/RecordingsCarousel";
import TalkMap from "@/components/TalkMap";
import { talksToEvents } from "@/lib/talks";
import {
  type ConferencesResponse,
  type TalksResponse,
  wpApiGet,
} from "@/lib/wp-api";
import { Blob, Button, Eyebrow } from "@/theme";
import stage from "../../assets/nico-on-stage-codetalks.jpg";

export default async function SpeakingPage() {
  const [{ talks, videos }, { conferences, cities }] = await Promise.all([
    wpApiGet<TalksResponse>("nico/v2/talks"),
    wpApiGet<ConferencesResponse>("nico/v2/conferences"),
  ]);
  const events = talksToEvents(talks);

  return (
    <>
      <PageHeader
        eyebrow="Speaking"
        title="Conferences, meetups, live demos"
        lead="Over the past few years, I've had the pleasure of speaking at conferences and meetups around the world, connecting with incredible developer communities along the way."
        buttons={[{ href: "/invite/", children: "Invite me", chevron: true }]}
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
      <RecordingsCarousel videos={videos} />
      <EventBand
        eyebrow="Upcoming"
        title="Next up"
        events={events}
        upcomingOnly
      />
      <section className="wrap section">
        <Eyebrow>Archive</Eyebrow>
        <h2 className="section-title mt-5">Stages I&apos;ve been on</h2>
        <p className="mt-3 max-w-xl">
          Since 2018, I&apos;ve had the privilege of speaking on some
          <br />
          of the coolest stages in the tech world.
        </p>
        <ConferenceCarousel conferences={conferences} />
      </section>
      <section className="wrap section mb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[21rem_1fr]">
          <div>
            <Eyebrow>Where</Eyebrow>
            <h2 className="section-title mt-5">Every trip starts in Thun</h2>
            <p className="mt-3">
              Home is a small town on a lake in the Swiss Alps, but I&apos;m
              always happy to board a train or plane for the next conference.
            </p>
            <div className="mt-6 grid gap-2 font-mono text-xs">
              <span className="flex items-center gap-2">
                <i className="size-3 rounded-full border-2 border-ink bg-yellow" />
                Thun, Switzerland
              </span>
              <span className="flex items-center gap-2">
                <i className="size-3 rounded-full border-2 border-ink bg-pink" />
                {cities.length} cities
              </span>
            </div>
          </div>
          <TalkMap cities={cities} />
        </div>
      </section>
      <section className="mt-24 bg-brand py-18">
        <div className="wrap flex flex-wrap items-center justify-between gap-10">
          <div className="max-w-2xl">
            <Eyebrow className="bg-white/90">Invite me</Eyebrow>
            <h2 className="section-title mt-5 text-white">
              Bring browser AI to your stage.
            </h2>
            <p className="lead mt-3 text-white/85">
              Talks, formats, logistics, bio and press photos: everything you
              need to invite me to your event.
            </p>
          </div>
          <Button
            href="/invite/"
            secondary
            chevron
            className="shadow-[6px_6px_0_var(--color-ink)]"
          >
            Invite me
          </Button>
        </div>
      </section>
    </>
  );
}
