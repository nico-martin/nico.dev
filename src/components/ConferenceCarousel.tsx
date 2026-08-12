"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { WpConference } from "@/lib/wp-api";

interface ConferenceCarouselProps {
  conferences: WpConference[];
}

function shuffle<T>(items: T[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export default function ConferenceCarousel({
  conferences,
}: ConferenceCarouselProps) {
  const [shuffledConferences, setShuffledConferences] = useState(conferences);

  useEffect(() => {
    setShuffledConferences(shuffle(conferences));
  }, [conferences]);

  function renderConferences(duplicate = false) {
    return shuffledConferences.map((conference) => (
      <a
        key={`${duplicate ? "duplicate-" : ""}${conference.title}`}
        href={conference.link}
        target="_blank"
        tabIndex={duplicate ? -1 : undefined}
        className="placeholder h-32 w-56 shrink-0 px-5 transition-transform hover:-translate-y-1 hover:no-underline"
      >
        <Image
          src={conference.image.url}
          width={conference.image.width}
          height={conference.image.height}
          alt={conference.image.alt || conference.title}
          className="max-h-16 w-auto max-w-full object-contain opacity-40"
        />
      </a>
    ));
  }

  return (
    <div
      className="conference-carousel mt-8 overflow-hidden py-2"
      aria-label="Conferences where Nico has spoken"
    >
      <div className="conference-carousel-track flex w-max">
        <div className="flex shrink-0 gap-4 pr-4">{renderConferences()}</div>
        <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
          {renderConferences(true)}
        </div>
      </div>
    </div>
  );
}
