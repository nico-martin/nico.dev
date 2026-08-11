"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import portrait800Webp from "@/assets/generated/nico-martin-800.webp";
import stage800Webp from "@/assets/generated/nico-on-stage-codetalks-800.webp";
import { type ShareablePath, shareablePages } from "@/lib/shareable";

const pageDetails = {
  "/": {
    sticker: "Thun, Switzerland",
    stickerClass: "bg-yellow shadow-[5px_5px_0_var(--color-pink)]",
    accentClass: "shadow-[4px_4px_0_var(--color-brand-tint-strong)]",
    frameClass: "shadow-[-14px_14px_0_var(--color-brand-tint-strong)]",
    image: "portrait",
  },
  "/about/": {
    sticker: "About Nico",
    stickerClass: "bg-brand text-white shadow-[5px_5px_0_var(--color-ink)]",
    accentClass: "shadow-[4px_4px_0_var(--color-yellow)]",
    frameClass: "shadow-[-14px_14px_0_var(--color-yellow)]",
    image: "portrait",
  },
  "/speaking/": {
    sticker: "Live on stage",
    stickerClass: "bg-pink text-white shadow-[5px_5px_0_var(--color-ink)]",
    accentClass: "shadow-[4px_4px_0_var(--color-pink)]",
    frameClass: "shadow-[-14px_14px_0_var(--color-pink)]",
    image: "stage",
  },
  "/whats-up/": {
    sticker: "A living notebook",
    stickerClass: "bg-pink text-white shadow-[5px_5px_0_var(--color-yellow)]",
    accentClass: "shadow-[4px_4px_0_var(--color-pink)]",
    frameClass: "shadow-[-14px_14px_0_var(--color-pink)]",
    image: "portrait",
  },
  "/invite/": {
    sticker: "English & German",
    stickerClass: "bg-yellow shadow-[5px_5px_0_var(--color-pink)]",
    accentClass: "shadow-[4px_4px_0_var(--color-yellow)]",
    frameClass: "shadow-[-14px_14px_0_var(--color-yellow)]",
    image: "stage",
  },
  "/cfp/": {
    sticker: "Ready to copy",
    stickerClass: "bg-peri text-white shadow-[5px_5px_0_var(--color-ink)]",
    accentClass: "shadow-[4px_4px_0_var(--color-peri)]",
    frameClass: "shadow-[-14px_14px_0_var(--color-peri)]",
    image: "portrait",
  },
  "/cv/": {
    sticker: "Available in EN / DE",
    stickerClass: "bg-brand text-white shadow-[5px_5px_0_var(--color-ink)]",
    accentClass: "shadow-[4px_4px_0_var(--color-surface-border)]",
    frameClass: "shadow-[-14px_14px_0_var(--color-brand)]",
    image: "portrait",
  },
} as const;

export default function ShareableTemplate() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const shareablePath = (
    normalizedPath in shareablePages ? normalizedPath : "/"
  ) as ShareablePath;
  const page = shareablePages[shareablePath];
  const details = pageDetails[shareablePath];
  const image = details.image === "stage" ? stage800Webp : portrait800Webp;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <template data-shareable>
      <div className="relative flex h-screen min-h-150 w-300 overflow-hidden bg-surface-muted text-ink">
        <div className="absolute -top-28 -left-28 size-80 rounded-full bg-brand-tint" />
        <div className="absolute -bottom-36 left-128 size-80 rounded-full bg-yellow-tint" />
        <div className="relative z-10 flex w-190 flex-col px-20 py-14">
          <div className="font-heading text-[46px] font-black tracking-display text-brand">
            nico<span className="text-ink">.dev</span>
          </div>
          <div className="my-auto max-w-120">
            <div
              className={`mb-7 inline-flex -rotate-1 rounded-full border-3 border-ink bg-white px-5 py-2 font-mono text-[18px] font-bold tracking-[0.12em] uppercase ${details.accentClass}`}
            >
              {page.eyebrow}
            </div>
            <h1 className="m-0 font-heading text-[68px] leading-[0.98] font-black tracking-display text-ink">
              {page.title}
            </h1>
          </div>
          <div className="font-mono text-[17px] font-medium text-brand-deep">
            https://nico.dev{shareablePath}
          </div>
        </div>
        <div
          className={`absolute top-20 right-8 size-120 rotate-3 overflow-hidden rounded-blob border-[6px] border-ink bg-[#060709] ${details.frameClass}`}
        >
          <Image
            src={image}
            alt={
              details.image === "stage"
                ? "Nico Martin speaking on stage"
                : "Nico Martin"
            }
            priority
            className="size-full object-cover"
          />
        </div>
        <div
          className={`absolute right-20 bottom-13 rotate-2 rounded-full border-3 border-ink px-6 py-3 font-heading text-[19px] font-black ${details.stickerClass}`}
        >
          {details.sticker}
        </div>
      </div>
    </template>
  );
}
