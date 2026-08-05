"use client";

import { useState } from "react";

import { Badge, Card, IconTile } from "@/theme";

const talks = [
  {
    title: "Look ma, no hands! Multimodal AI agents in the browser",
    topic: "AI / ML",
    tone: "teal" as const,
    blurb:
      "Agents that see, hear and act - running entirely on-device with Transformers.js.",
    length: "30-45 min",
  },
  {
    title: "Let's build K.I.T.T. with JavaScript",
    topic: "AI / ML",
    tone: "yellow" as const,
    blurb:
      "A talking car, live on stage: speech, language models and hardware, all from the browser.",
    length: "30-45 min",
  },
  {
    title: "From ML to LLM: on-device AI in the browser",
    topic: "AI / ML",
    tone: "pink" as const,
    blurb:
      "How client-side inference went from image classifiers to language models.",
    length: "20-40 min",
  },
  {
    title: "Beyond the browser - how to talk with robots",
    topic: "Hardware APIs",
    tone: "peri" as const,
    blurb:
      "WebBluetooth, WebUSB and a robot that does what the web app tells it.",
    length: "30-45 min",
  },
  {
    title: "WebBluetooth - the missing link",
    topic: "Hardware APIs",
    tone: "teal" as const,
    blurb: "The API that lets a website connect to the physical world.",
    length: "20-40 min",
  },
  {
    title: "Rethinking desktop applications with progressive web apps",
    topic: "PWA",
    tone: "yellow" as const,
    blurb:
      "File System Access, window controls, protocol handlers - the desktop-class web.",
    length: "30-45 min",
  },
];

export default function TalkSelector() {
  const [topic, setTopic] = useState("All topics");
  const visibleTalks = talks.filter(
    (talk) => topic === "All topics" || talk.topic === topic,
  );
  return (
    <>
      <label className="flex w-full max-w-56 flex-col gap-2 font-heading text-xs font-bold tracking-eyebrow text-muted uppercase">
        Topic
        <select
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className="rounded-tile border-3 border-ink bg-white px-4 py-3 font-sans text-base font-normal tracking-normal text-ink normal-case"
        >
          <option>All topics</option>
          <option>AI / ML</option>
          <option>Hardware APIs</option>
          <option>PWA</option>
        </select>
      </label>
      <div className="mt-8 grid gap-7 md:grid-cols-2">
        {visibleTalks.map((talk) => (
          <Card key={talk.title} shadow={talk.tone}>
            <div className="flex gap-4">
              <IconTile icon="microphone" tone={talk.tone} />
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{talk.topic}</Badge>
                  <Badge>{talk.length}</Badge>
                </div>
                <h3 className="mt-3 text-xl">{talk.title}</h3>
                <p className="mt-2 mb-0">{talk.blurb}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
