import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import WhatsUpStream from "@/components/WhatsUpStream";
import { getPageMetadata } from "@/lib/shareable";
import { type WhatsUpResponse, wpApiGet } from "@/lib/wp-api";

export const metadata: Metadata = getPageMetadata("/whats-up/");

export default async function WhatsUpPage() {
  const { entries } = await wpApiGet<WhatsUpResponse>("nico/v2/whats-up");
  const sortedEntries = [...entries].sort((first, second) =>
    second.date.localeCompare(first.date),
  );

  return (
    <>
      <PageHeader
        eyebrow="What's up"
        title="Things I build, write and post"
        lead="I love exploring new technologies, testing ideas and seeing what the browser can do. This is where those experiments end up, alongside articles, videos, podcast appearances and everything else I share along the way."
      />
      <section className="wrap mb-24">
        <WhatsUpStream entries={sortedEntries} />
      </section>
    </>
  );
}
