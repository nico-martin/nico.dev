import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const SHAREABLE_URL = "https://shareable.nico.dev";

const SHAREABLE_VERSION = "5";

export const shareablePages = {
  "/": {
    eyebrow: "Machine learning engineer",
    title: "Hello, my name is Nico.",
    metadataTitle: "Nico Martin - open source ML engineer & speaker",
    metadataDescription:
      "Open source machine learning engineer with focus on WebML at Hugging Face and Google Developer Expert in AI and web technologies.",
  },
  "/about/": {
    eyebrow: "About me",
    title: "Hello, my name is Nico.",
    metadataTitle: "About",
    metadataDescription:
      "Open source machine learning engineer, Google Developer Expert, speaker and WebML enthusiast from Switzerland.",
  },
  "/speaking/": {
    eyebrow: "Speaking",
    title: "Conferences, meetups, live demos",
    metadataTitle: "Speaking",
    metadataDescription:
      "Conference talks about browser AI, WebML and modern web technologies, complete with practical live demos.",
  },
  "/latest/": {
    eyebrow: "Latest",
    title: "What I’ve been working on",
    metadataTitle: "Latest",
    metadataDescription:
      "Projects, articles, videos, pictures and podcast appearances from Nico Martin.",
  },
  "/invite/": {
    eyebrow: "Invite me",
    title: "Find the right talk for your audience",
    metadataTitle: "Invite me to speak",
    metadataDescription:
      "Talks, formats, logistics, reviews and speaker material for inviting Nico Martin to your conference or meetup.",
  },
  "/cfp/": {
    eyebrow: "Speaker material",
    title: "Everything for your call for papers",
    metadataTitle: "Call for papers",
    metadataDescription:
      "Talk abstracts, speaker biographies, links and portrait photos for conference organisers.",
  },
  "/cv/": {
    eyebrow: "Experience",
    title: "Curriculum vitae",
    metadataTitle: "Curriculum vitae",
    metadataDescription:
      "Professional experience, education and community work of Nicolas Martin.",
  },
} as const;

export type ShareablePath = keyof typeof shareablePages;

function getImageUrl(pageUrl: URL, format: "og" | "twitter") {
  const imageUrl = new URL("/render", SHAREABLE_URL);
  imageUrl.searchParams.set("url", pageUrl.toString());
  imageUrl.searchParams.set("format", format);
  imageUrl.searchParams.set("version", SHAREABLE_VERSION);
  return imageUrl.toString();
}

export function getPageMetadata(pathname: ShareablePath): Metadata {
  const page = shareablePages[pathname];
  const pageUrl = new URL(pathname, SITE_URL);
  const title = `${page.metadataTitle} | nico.dev`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description: page.metadataDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      url: pageUrl,
      type: "website",
      siteName: "nico.dev",
      title,
      description: page.metadataDescription,
      images: [
        {
          url: getImageUrl(pageUrl, "og"),
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.metadataDescription,
      images: [getImageUrl(pageUrl, "twitter")],
    },
  };
}
