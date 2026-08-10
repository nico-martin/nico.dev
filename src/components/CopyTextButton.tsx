"use client";

import { useEffect, useRef, useState } from "react";

interface CopyTextButtonProps {
  text: string;
  label?: string;
  quiet?: boolean;
  primary?: boolean;
  subtle?: boolean;
}

export default function CopyTextButton({
  text,
  label = "Copy text",
  quiet = false,
  primary = false,
  subtle = false,
}: CopyTextButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimeout = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (resetTimeout.current) window.clearTimeout(resetTimeout.current);
    },
    [],
  );

  return (
    <button
      type="button"
      className={
        quiet
          ? "cursor-pointer font-mono text-xs text-brand hover:underline"
          : primary
            ? "cursor-pointer rounded-full border-3 border-ink bg-brand px-4 py-2 font-heading text-sm font-extrabold text-white shadow-[5px_5px_0_var(--color-brand-tint-strong)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
            : subtle
              ? "min-h-11 cursor-pointer rounded-lg border border-ink/15 bg-white px-3 font-mono text-xs font-medium text-body transition hover:border-ink/30 hover:bg-surface-muted"
              : "cursor-pointer rounded-full border-3 border-ink bg-white px-4 py-2 font-heading text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-surface-muted"
      }
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (resetTimeout.current) window.clearTimeout(resetTimeout.current);
        resetTimeout.current = window.setTimeout(() => setCopied(false), 3000);
      }}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
