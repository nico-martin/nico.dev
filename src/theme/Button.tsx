import type { AnchorHTMLAttributes, ReactNode } from "react";

import cn from "@/lib/classnames";

import TablerIcon from "./tabler/TablerIcon";

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  secondary?: boolean;
  small?: boolean;
  chevron?: boolean;
  className?: string;
}

export default function Button({
  children,
  secondary = false,
  small = false,
  chevron = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full border-3 border-ink px-6 font-heading font-extrabold no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:no-underline active:translate-x-0.5 active:translate-y-0.5",
        small ? "min-h-10 px-4 text-sm" : "min-h-13",
        secondary
          ? "bg-white text-ink shadow-[5px_5px_0_var(--color-yellow)] hover:bg-surface-muted hover:text-ink hover:shadow-[7px_7px_0_var(--color-yellow)]"
          : "bg-brand text-white shadow-[6px_6px_0_var(--color-brand-tint-strong)] hover:bg-brand-deep hover:text-white hover:shadow-[8px_8px_0_var(--color-brand-tint-strong)]",
        className,
      )}
      {...props}
    >
      {children}
      {chevron && <TablerIcon icon="chevrons-right" className="ml-2 size-4" />}
    </a>
  );
}
