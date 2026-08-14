import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import WhatsUpStream from "@/components/WhatsUpStream";
import { getPageMetadata } from "@/lib/shareable";
import { type WhatsUpResponse, wpApiGet } from "@/lib/wp-api";
import { TablerIcon } from "@/theme";

export const metadata: Metadata = {
  ...getPageMetadata("/latest/"),
  alternates: {
    canonical: "/latest/",
    types: { "application/rss+xml": "/latest/feed.xml" },
  },
};

export default async function WhatsUpPage() {
  const { entries } = await wpApiGet<WhatsUpResponse>("nico/v2/whats-up");
  const sortedEntries = [...entries].sort((first, second) =>
    second.date.localeCompare(first.date),
  );

  return (
    <>
      <PageHeader
        eyebrow="Latest"
        title="What I’ve been working on"
        lead="I love exploring new technologies, testing ideas and seeing what the browser can do. This is where those experiments end up, alongside articles, videos, podcast appearances and everything else I share along the way."
      />
      <section className="wrap mb-24">
        <WhatsUpStream entries={sortedEntries} />
        <a
          href="/latest/feed.xml"
          className="mt-12 inline-flex items-center gap-2 font-mono text-sm"
          type="application/rss+xml"
        >
          <TablerIcon icon="rss" className="size-4" />
          Subscribe via RSS
        </a>
      </section>
    </>
  );
}
