import type { HTMLAttributes, ReactNode } from "react";

import cn from "@/lib/classnames";

const shadows = {
  teal: "shadow-[9px_9px_0_var(--color-brand-tint-strong)]",
  yellow: "shadow-[9px_9px_0_var(--color-yellow)]",
  pink: "shadow-[9px_9px_0_var(--color-pink)]",
  peri: "shadow-[9px_9px_0_var(--color-peri)]",
} as const;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  shadow?: keyof typeof shadows;
  className?: string;
}

export default function Card({
  children,
  shadow = "teal",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border-3 border-ink bg-white p-7",
        shadows[shadow],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
