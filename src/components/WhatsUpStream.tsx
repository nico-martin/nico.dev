"use client";

import { useState } from "react";

import { Badge, Button, Card, IconTile } from "@/theme";
import cn from "@/utils/classnames";

interface StreamEntry {
  type: "Project" | "Article";
  title: string;
  subtitle: string;
  tone: "teal" | "yellow" | "pink" | "peri";
  date: string;
  description: string;
  tags: string[];
  links: [string, string][];
}

const entries: StreamEntry[] = [
  {
    type: "Project",
    title: "Ask my PDF",
    subtitle: "nico-martin/ask-my-pdf",
    tone: "teal",
    date: "2024",
    description:
      "A webapp that uses Retrieval Augmented Generation and large language models to interact with a PDF directly in the browser.",
    tags: ["RAG", "Transformers.js", "WebGPU"],
    links: [
      ["Launch app", "https://pdf.nico.dev"],
      ["Source code", "https://github.com/nico-martin/ask-my-pdf"],
    ],
  },
  {
    type: "Project",
    title: "[md.edit]",
    subtitle: "nico-martin/markdown-editor",
    tone: "yellow",
    date: "2021",
    description:
      "A web based markdown editor showcasing the File System Access API: files are opened and saved directly in the browser.",
    tags: ["PWA", "File System Access"],
    links: [
      ["Launch app", "https://md.nico.dev/"],
      ["Source code", "https://github.com/nico-martin/markdown-editor/"],
    ],
  },
  {
    type: "Article",
    title: "Creating Bluetooth robots with progressive web apps",
    subtitle: "codemotion.com",
    tone: "pink",
    date: "2022",
    description:
      "How a web app pairs with an Arduino over Bluetooth Low Energy and drives it around the room.",
    tags: ["WebBluetooth"],
    links: [
      [
        "Read the article",
        "https://www.codemotion.com/magazine/backend/iot/web-progressive-apps-creating-bluetooth-robots/",
      ],
    ],
  },
  {
    type: "Project",
    title: "SpeedWheels BLE Car",
    subtitle: "nico-martin/speed-wheels-ble-ui",
    tone: "peri",
    date: "2022",
    description:
      "A toy car based on an Arduino Nano RP2040 that communicates over Bluetooth Low Energy and is controlled by a web app.",
    tags: ["WebBluetooth", "Arduino"],
    links: [
      ["Launch app", "https://speed-wheels.nico.dev/"],
      [
        "Source code",
        "https://github.com/nico-martin/speed-wheels-ble-arduino",
      ],
    ],
  },
  {
    type: "Project",
    title: "WebUSB Matrix",
    subtitle: "nico-martin/webusb-rgb-matrix",
    tone: "teal",
    date: "2022",
    description:
      "A Raspberry Pi Pico powered Neopixel RGB matrix controlled over USB, with images downsampled to 16x16px in the browser.",
    tags: ["WebUSB", "Raspberry Pi Pico"],
    links: [
      ["Launch app", "https://webusb-rgb-matrix.nico.dev/"],
      ["Source code", "https://github.com/nico-martin/webusb-rgb-matrix"],
    ],
  },
  {
    type: "Article",
    title: "How to create a progressive audio player with React hooks",
    subtitle: "dev.to",
    tone: "yellow",
    date: "2020",
    description:
      "The build log behind YTAudio: hooks, a ServiceWorker and an app-like audio experience in the browser.",
    tags: ["PWA", "React"],
    links: [
      [
        "Read the article",
        "https://dev.to/nicomartin/how-to-create-a-progressive-audio-player-with-react-hooks-31l1",
      ],
    ],
  },
  {
    type: "Project",
    title: "YTAudio",
    subtitle: "nico-martin/yt-audio",
    tone: "pink",
    date: "2020",
    description:
      "A progressive web app that lets you listen to YouTube videos in the background with modern media and sharing APIs.",
    tags: ["PWA", "MediaSession API"],
    links: [
      ["Launch app", "https://ytaud.io/"],
      ["Source code", "https://github.com/nico-martin/yt-audio"],
    ],
  },
  {
    type: "Article",
    title: "Media Session API",
    subtitle: "dev.to",
    tone: "teal",
    date: "2020",
    description:
      "How to give a web audio player real media controls on lock screens and notification shades.",
    tags: ["MediaSession API"],
    links: [
      ["Read the article", "https://dev.to/nicomartin/media-session-api-c1j"],
    ],
  },
  {
    type: "Project",
    title: "Git Installer",
    subtitle: "nico-martin/git-installer",
    tone: "peri",
    date: "2019",
    description:
      "An open source WordPress plugin to install and update themes and plugins directly from a Git repository.",
    tags: ["WordPress", "PHP"],
    links: [
      ["Visit the site", "https://www.git-installer.com/"],
      ["Source code", "https://github.com/nico-martin/git-installer"],
    ],
  },
];

const filters = ["Everything", "Project", "Article", "Podcast"] as const;

export default function WhatsUpStream() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Everything");
  const visibleEntries = entries.filter(
    (entry) => filter === "Everything" || entry.type === filter,
  );
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              "cursor-pointer rounded-full border-3 border-ink bg-white px-5 py-2 font-heading text-sm font-extrabold text-ink hover:bg-surface-muted",
              filter === item && "bg-ink text-white hover:bg-ink",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid items-start gap-7 xl:grid-cols-2">
        {visibleEntries.map((entry) => (
          <Card key={entry.title} shadow={entry.tone}>
            <div className="grid gap-5 sm:grid-cols-[8.25rem_1fr]">
              <div className="placeholder">
                <IconTile
                  icon={entry.type === "Project" ? "code" : "article"}
                  tone={entry.tone}
                />
                <span>{entry.type}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{entry.type}</Badge>
                  <Badge>EN</Badge>
                  <span className="font-mono text-xs text-muted">
                    {entry.date}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl">{entry.title}</h2>
                <div className="mt-1 font-mono text-xs break-all text-muted">
                  {entry.subtitle}
                </div>
                <p className="mt-3">{entry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {entry.links.map(([label, href], index) => (
                    <Button
                      key={href}
                      href={href}
                      small
                      chevron={index === 0}
                      secondary={index > 0}
                      className={index > 0 ? "shadow-none" : undefined}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
        {visibleEntries.length === 0 && (
          <Card shadow="peri" className="xl:col-span-2">
            <h2 className="text-2xl">No podcast episodes on file</h2>
            <p className="mt-2 mb-0">
              Looking for a guest?{" "}
              <a href="mailto:mail@nico.dev">mail@nico.dev</a>
            </p>
          </Card>
        )}
      </div>
    </>
  );
}
