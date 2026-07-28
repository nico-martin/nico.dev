import type { HTMLAttributes, ReactNode } from "react";

import cn from "@/utils/classnames";

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

export default function Eyebrow({
  children,
  className,
  ...props
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-brand-tint px-5 py-2 font-heading text-xs font-bold tracking-eyebrow text-brand uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
