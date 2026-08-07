"use client";

import { useEffect, useRef, useState } from "react";

import { Badge } from "@/theme";

interface CopyTextPanelProps {
  title: string;
  text: string;
  maxHeight?: boolean;
}

export default function CopyTextPanel({
  title,
  text,
  maxHeight = false,
}: CopyTextPanelProps) {
  const [copied, setCopied] = useState(false);
  const resetTimeout = useRef<number | null>(null);
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  useEffect(
    () => () => {
      if (resetTimeout.current) window.clearTimeout(resetTimeout.current);
    },
    [],
  );

  return (
    <button
      type="button"
      className="block w-full cursor-pointer rounded-card border-3 border-ink bg-white p-6 text-left shadow-[7px_7px_0_var(--color-brand-tint-strong)] transition hover:-translate-y-0.5 hover:bg-surface-muted"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (resetTimeout.current) window.clearTimeout(resetTimeout.current);
        resetTimeout.current = window.setTimeout(() => setCopied(false), 3000);
      }}
    >
      <span className="flex flex-wrap items-center justify-between gap-3">
        <strong className="font-heading text-lg text-ink">{title}</strong>
        <span className="flex flex-wrap gap-2">
          <Badge>{text.length} characters</Badge>
          <Badge>{wordCount} words</Badge>
          <Badge className="[color:white] [background:var(--color-brand)]">
            {copied ? "Copied" : "Click to copy"}
          </Badge>
        </span>
      </span>
      <span
        className={`mt-5 block whitespace-pre-wrap text-body ${maxHeight ? "max-h-96 overflow-y-auto pr-3" : ""}`}
      >
        {text}
      </span>
    </button>
  );
}
