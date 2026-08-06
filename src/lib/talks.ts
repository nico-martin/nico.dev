import type { Event } from "@/components/EventBand";
import type { WpTalk } from "@/lib/wp-api";

const eventAccents = ["brand", "yellow", "pink"] as const;

export function talksToEvents(talks: WpTalk[]): Event[] {
  return talks.map((talk, index) => ({
    date: talk.date.split("-").reverse().join("."),
    isoDate: talk.date,
    event: talk.venue,
    talk: talk.title,
    accent: eventAccents[index % eventAccents.length],
    href:
      talk.links.find((link) => link.key === "infos")?.value ?? "/speaking/",
  }));
}
