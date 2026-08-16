import type { ReactNode } from "react";

import cn from "@/lib/classnames";

interface BlobProps {
  children: ReactNode;
  className?: string;
}

export default function Blob({ children, className }: BlobProps) {
  return (
    <div
      className={cn(
        "relative size-[min(25rem,82vw)] overflow-hidden rounded-blob bg-brand-tint",
        className,
      )}
    >
      {children}
    </div>
  );
}
