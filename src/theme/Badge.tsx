import type { HTMLAttributes, ReactNode } from "react";

import cn from "@/lib/classnames";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-body",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
