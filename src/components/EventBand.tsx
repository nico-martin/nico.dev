import Link from "next/link";

interface Event {
  date: string;
  event: string;
  talk: string;
  href: string;
  accent: "brand" | "yellow" | "pink";
}
interface EventBandProps {
  events: Event[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showAll?: boolean;
}

const dateColors = {
  brand: "text-brand",
  yellow: "text-yellow",
  pink: "text-pink",
} as const;

export default function EventBand({
  events,
  eyebrow = "Up next",
  title = "Where you can catch me",
  description = "Over the past few years I’ve had the pleasure of speaking at many different conferences and meetups. And I’m always happy about new opportunities.",
  showAll = false,
}: EventBandProps) {
  return (
    <section className="dark-band">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-10">
          <div>
            <span className="font-mono text-xs tracking-[0.16em] text-brand uppercase">
              {eyebrow}
            </span>
            <h2 className="section-title mt-3">{title}</h2>
          </div>
          <p className="m-0 max-w-md text-white/60">{description}</p>
        </div>
        <div className="border-t border-white/15">
          {events.map((item) => (
            <a
              key={`${item.event}-${item.date}`}
              href={item.href}
              className="event-row"
            >
              <span className={`font-mono text-xs ${dateColors[item.accent]}`}>
                {item.date}
              </span>
              <strong className="font-heading text-xl font-extrabold text-white">
                {item.event}
              </strong>
              <span className="text-sm text-white/60">{item.talk}</span>
              <span className="text-right font-heading font-black text-brand">
                »
              </span>
            </a>
          ))}
        </div>
        {showAll && (
          <Link
            href="/speaking/"
            className="mt-9 inline-block border-b-2 border-brand pb-1 font-mono text-sm text-white hover:text-brand"
          >
            All talks, slides and recordings »
          </Link>
        )}
      </div>
    </section>
  );
}
