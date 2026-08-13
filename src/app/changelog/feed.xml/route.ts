import type { WhatsUpEntry, WhatsUpResponse } from "@/lib/wp-api";
import { wpApiGet } from "@/lib/wp-api";

const SITE_URL = "https://beta.nico.dev";
const CHANGELOG_URL = `${SITE_URL}/changelog/`;

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function getEntryUrl(entry: WhatsUpEntry) {
  switch (entry.type) {
    case "project":
      return entry.appUrl || entry.githubUrl || CHANGELOG_URL;
    case "podcast":
    case "blogpost":
      return entry.link;
    case "video":
      return entry.youtubeUrl;
    case "instagram":
      return entry.link || CHANGELOG_URL;
  }
}

export async function GET() {
  const { entries } = await wpApiGet<WhatsUpResponse>("nico/v2/whats-up");
  const items = [...entries]
    .sort((first, second) => second.date.localeCompare(first.date))
    .map((entry) => {
      const url = getEntryUrl(entry);
      const guid = `${entry.type}:${entry.date}:${entry.title}`;

      return `    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="false">${escapeXml(guid)}</guid>
      <pubDate>${new Date(`${entry.date}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(entry.type)}</category>
      <description>${escapeXml(entry.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Changelog | nico.dev</title>
    <link>${CHANGELOG_URL}</link>
    <description>Projects, articles, videos, pictures and podcast appearances from Nico Martin.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${CHANGELOG_URL}feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
