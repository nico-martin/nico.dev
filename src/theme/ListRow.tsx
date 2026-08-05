import type { HTMLAttributes, ReactNode } from "react";

import cn from "@/utils/classnames";

const accents = {
  teal: "shadow-[6px_6px_0_var(--color-brand)]",
  yellow: "shadow-[6px_6px_0_var(--color-yellow)]",
  pink: "shadow-[6px_6px_0_var(--color-pink)]",
  peri: "shadow-[6px_6px_0_var(--color-peri)]",
} as const;

interface ListRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  lead?: ReactNode;
  accent?: keyof typeof accents;
  className?: string;
}

export default function ListRow({
  children,
  lead,
  accent = "teal",
  className,
  ...props
}: ListRowProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-card border-3 border-ink bg-white px-6 py-5 text-ink",
        accents[accent],
        className,
      )}
      {...props}
    >
      {lead}
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
