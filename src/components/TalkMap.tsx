import WorldMap from "@/assets/world.svg";

export default function TalkMap() {
  return (
    <div
      className="relative aspect-[1561/746] overflow-hidden rounded-card border-3 border-ink bg-surface-muted shadow-[9px_9px_0_var(--color-brand-tint-strong)]"
      role="img"
      aria-label="World map of countries where Nico has spoken"
    >
      <WorldMap className="talk-map absolute inset-0 size-full" aria-hidden />
    </div>
  );
}
