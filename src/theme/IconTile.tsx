import cn from "@/utils/classnames";

const tones = {
  teal: "bg-brand-tint text-brand",
  yellow: "bg-yellow-tint text-yellow-ink",
  pink: "bg-pink-tint text-pink",
  peri: "bg-peri-tint text-peri",
} as const;

interface IconTileProps {
  glyph: string;
  tone?: keyof typeof tones;
  className?: string;
}

export default function IconTile({
  glyph,
  tone = "teal",
  className,
}: IconTileProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-15 shrink-0 place-items-center rounded-tile font-heading text-2xl font-black",
        tones[tone],
        className,
      )}
    >
      {glyph}
    </span>
  );
}
