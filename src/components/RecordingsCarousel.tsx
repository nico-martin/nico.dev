"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import type { WpVideo } from "@/lib/wp-api";
import { Eyebrow, TablerIcon } from "@/theme";

interface RecordingsCarouselProps {
  videos: WpVideo[];
}

function getVideoMedia(video: WpVideo) {
  const parsedUrl = new URL(video.url);
  const cover = video.cover?.sizes.large.url;

  if (parsedUrl.hostname === "youtu.be") {
    const id = parsedUrl.pathname.slice(1);
    return {
      thumbnail: cover ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      embed: `https://www.youtube.com/embed/${id}?autoplay=1`,
    };
  }

  if (parsedUrl.hostname.endsWith("youtube.com")) {
    const id = parsedUrl.searchParams.get("v");
    return id
      ? {
          thumbnail: cover ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          embed: `https://www.youtube.com/embed/${id}?autoplay=1`,
        }
      : { thumbnail: cover ?? null, embed: video.url };
  }

  if (parsedUrl.hostname === "videopress.com") {
    const id = parsedUrl.pathname.split("/").filter(Boolean).at(-1);
    return {
      thumbnail: cover ?? null,
      embed: `https://videopress.com/embed/${id}?autoplay=1`,
    };
  }

  if (parsedUrl.hostname === "cdn.jwplayer.com") {
    parsedUrl.searchParams.set("autostart", "true");
  }

  return { thumbnail: cover ?? null, embed: parsedUrl.toString() };
}

export default function RecordingsCarousel({
  videos,
}: RecordingsCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  function scroll(direction: -1 | 1) {
    const scroller = scrollerRef.current;
    const firstCard = scroller?.firstElementChild as HTMLElement | null;
    if (!scroller || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(scroller).columnGap) || 0;
    scroller.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <section className="section overflow-hidden">
      <div className="wrap">
        <Eyebrow>On stage</Eyebrow>
        <div className="mt-5 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-8">
          <div>
            <h2 className="section-title">Recordings from past conferences</h2>
            <p className="mt-3 max-w-xl">
              Some recordings the organisers published.
              <br />
              And yes, the demos are live. In all of them.
            </p>
          </div>
          <div className="flex shrink-0 gap-3 pb-1">
            <button
              type="button"
              className="grid size-14 cursor-pointer place-items-center rounded-full border-3 border-ink bg-white text-ink transition-transform hover:-translate-y-1 sm:size-16"
              aria-label="Previous recording"
              onClick={() => scroll(-1)}
            >
              <TablerIcon icon="chevrons-right" className="size-6 rotate-180" />
            </button>
            <button
              type="button"
              className="grid size-14 cursor-pointer place-items-center rounded-full border-3 border-ink bg-white text-ink transition-transform hover:-translate-y-1 sm:size-16"
              aria-label="Next recording"
              onClick={() => scroll(1)}
            >
              <TablerIcon icon="chevrons-right" className="size-6" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="recordings-scroller mt-9 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5"
      >
        {videos.map((video) => {
          const media = getVideoMedia(video);
          const isActive = activeVideo === video.url;

          return (
            <article
              key={video.url}
              className="grid w-[min(82vw,30rem)] shrink-0 snap-start gap-4"
            >
              <div className="relative aspect-video overflow-hidden rounded-tile border-3 border-ink bg-ink shadow-[8px_8px_0_var(--color-brand-tint-strong)]">
                {isActive ? (
                  <iframe
                    src={media.embed}
                    title={video.title}
                    className="absolute inset-0 size-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="absolute inset-0 size-full cursor-pointer text-left"
                    aria-label={`Play ${video.title}`}
                    onClick={() => setActiveVideo(video.url)}
                  >
                    {media.thumbnail && (
                      <Image
                        src={media.thumbnail}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 640px) 82vw, 480px"
                      />
                    )}
                    <span className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-full border-3 border-ink bg-brand text-white">
                      <TablerIcon icon="player-play" className="size-5" />
                    </span>
                  </button>
                )}
              </div>
              <h3 className="text-xl">{video.title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}
