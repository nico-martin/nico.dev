"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";

import cn from "@/lib/classnames";

import TablerIcon from "./tabler/TablerIcon";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!open) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      className={cn(
        "m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-4xl overflow-hidden rounded-card border-3 border-ink bg-white p-0 text-body shadow-[12px_12px_0_var(--color-brand-tint-strong)] backdrop:bg-ink/70 backdrop:backdrop-blur-xs",
        className,
      )}
    >
      <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
        <header className="flex shrink-0 items-center justify-between gap-6 border-b-3 border-ink bg-yellow-tint px-5 py-4 sm:px-7">
          <h2 id={titleId} className="text-xl text-black sm:text-2xl">
            {title}
          </h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close modal"
            className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border-2 border-ink bg-white text-ink transition hover:-translate-y-0.5 hover:bg-surface-muted"
          >
            <TablerIcon icon="x" className="size-5" />
          </button>
        </header>
        <div className="min-h-0 overflow-y-auto p-5 sm:p-7">{children}</div>
      </div>
    </dialog>
  );
}
