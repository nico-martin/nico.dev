import cn from "@/lib/classnames";

import TablerIcon from "./tabler/TablerIcon";
import type { TablerIconName } from "./tabler/TablerIcon";

const tones = {
  teal: "bg-brand-tint text-brand",
  yellow: "bg-yellow-tint text-yellow-ink",
  pink: "bg-pink-tint text-pink",
  peri: "bg-peri-tint text-peri",
} as const;

interface IconTileProps {
  icon: TablerIconName;
  tone?: keyof typeof tones;
  className?: string;
}

export default function IconTile({
  icon,
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
      <TablerIcon icon={icon} className="size-7" />
    </span>
  );
}
