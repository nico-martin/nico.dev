"use client";

import { toPng } from "html-to-image";
import Image from "next/image";
import { useState } from "react";

import { TablerIcon } from "@/theme";

interface DownloadButtonProps {
  targetId: string;
  fileName: string;
  width: number;
}

function DownloadButton({ targetId, fileName, width }: DownloadButtonProps) {
  const [downloading, setDownloading] = useState(false);

  async function download() {
    const target = document.getElementById(targetId);
    if (!target) return;

    setDownloading(true);
    try {
      const dataUrl = await toPng(target, {
        cacheBust: true,
        pixelRatio: width / target.getBoundingClientRect().width,
      });
      const link = document.createElement("a");
      link.download = fileName;
      link.href = dataUrl;
      link.click();
    } finally {
      setDownloading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={download}
      disabled={downloading}
      className="absolute top-4 right-4 z-20 inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 font-mono text-xs font-bold text-ink shadow-[4px_4px_0_var(--color-yellow)] disabled:cursor-wait disabled:opacity-70"
    >
      <TablerIcon icon="download" className="size-4" />
      {downloading ? "Rendering..." : "Download PNG"}
    </button>
  );
}

export default function HeaderCompositions() {
  return (
    <div className="fixed inset-0 z-[100] snap-y snap-mandatory overflow-y-auto bg-ink">
      <section className="relative grid min-h-dvh snap-start place-items-center">
        <DownloadButton
          targetId="x-header"
          fileName="nico-x-header.png"
          width={1500}
        />
        <div
          id="x-header"
          className="[container-type:inline-size] relative h-[min(100dvh,33.333vw)] w-[min(100vw,300dvh)] overflow-hidden bg-ink"
        >
          <Image
            src="/react-advanced.jpg"
            alt="Nico Martin speaking at React Advanced London"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_64%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,23,28,0.04)_0%,rgba(21,23,28,0.08)_46%,rgba(21,23,28,0.94)_73%,#15171c_100%)]" />

          <div className="absolute top-[10%] right-[4%] bottom-[10%] flex w-[40%] flex-col justify-center rounded-[2.3cqw] border-[0.22cqw] border-ink bg-white px-[3.2cqw] shadow-[0.7cqw_0.7cqw_0_var(--color-brand-tint-strong)]">
            <div className="absolute -top-[1.2cqw] -right-[0.7cqw] size-[2.5cqw] rotate-12 rounded-[0.55cqw] border-[0.16cqw] border-ink bg-pink" />
            <h1 className="text-[3.25cqw] leading-[0.95] font-black tracking-display">
              Hello, my name is <span className="text-brand">Nico</span>.
            </h1>
            <div className="mt-[1.5cqw] font-heading text-[2.15cqw] leading-none font-black tracking-display text-brand">
              nico<span className="text-ink">.dev</span>
            </div>
            <div className="mt-[1.7cqw] flex items-center justify-between">
              <div className="flex gap-[0.7cqw]">
                <span className="h-[0.75cqw] w-[4.2cqw] -rotate-2 rounded-full bg-yellow" />
                <span className="h-[0.75cqw] w-[2.7cqw] rotate-2 rounded-full bg-brand" />
                <span className="h-[0.75cqw] w-[1.5cqw] -rotate-3 rounded-full bg-peri" />
              </div>
              <TablerIcon
                icon="sparkles"
                className="size-[2cqw] rotate-12 text-pink"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative grid min-h-dvh snap-start place-items-center">
        <DownloadButton
          targetId="linkedin-header"
          fileName="nico-linkedin-header.png"
          width={1584}
        />
        <div
          id="linkedin-header"
          className="[container-type:inline-size] relative h-[min(100dvh,25vw)] w-[min(100vw,400dvh)] overflow-hidden bg-white"
        >
          <div className="absolute -top-[28%] right-[22%] size-[24%] rounded-full bg-yellow-tint" />
          <div className="absolute right-[-2%] -bottom-[60%] size-[30%] rounded-full bg-brand-tint" />

          <div className="absolute top-[7%] bottom-[7%] left-[2.5%] w-[58%] -rotate-[0.6deg] overflow-hidden rounded-[2cqw] border-[0.2cqw] border-ink bg-ink shadow-[0.65cqw_0.65cqw_0_var(--color-brand-tint-strong)]">
            <Image
              src="/react-advanced.jpg"
              alt="Nico Martin speaking at React Advanced London"
              fill
              sizes="60vw"
              className="object-cover object-[50%_65%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/5 via-transparent to-ink/20" />
          </div>

          <div className="absolute top-[10%] right-[3.2%] bottom-[10%] flex w-[34%] flex-col justify-center">
            <h2 className="text-[2.7cqw] leading-[0.95] font-black tracking-display">
              Hello, my name is <span className="text-brand">Nico</span>.
            </h2>
            <div className="mt-[1.15cqw] font-heading text-[1.9cqw] leading-none font-black tracking-display text-brand">
              nico<span className="text-ink">.dev</span>
            </div>
            <div className="mt-[1.5cqw] flex items-center justify-between">
              <div className="flex gap-[0.65cqw]">
                <span className="h-[0.7cqw] w-[3.7cqw] -rotate-2 rounded-full bg-yellow" />
                <span className="h-[0.7cqw] w-[2.5cqw] rotate-2 rounded-full bg-pink" />
                <span className="h-[0.7cqw] w-[1.4cqw] -rotate-3 rounded-full bg-peri" />
              </div>
              <TablerIcon
                icon="sparkles"
                className="size-[1.7cqw] rotate-12 text-peri"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative grid min-h-dvh snap-start place-items-center">
        <DownloadButton
          targetId="profile-image"
          fileName="nico-profile.png"
          width={1000}
        />
        <div
          id="profile-image"
          className="[container-type:inline-size] relative size-[min(100vw,100dvh)] overflow-hidden bg-[#060709]"
        >
          <div className="absolute inset-[0.8%] rounded-full bg-[conic-gradient(from_225deg,var(--color-brand)_0_88%,var(--color-yellow)_88%_94%,var(--color-pink)_94%_100%)] p-[2%]">
            <div className="relative size-full overflow-hidden rounded-full border-[0.2cqw] border-[#060709] bg-[#060709]">
              <Image
                src="/profile.png"
                alt="Nico Martin"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
