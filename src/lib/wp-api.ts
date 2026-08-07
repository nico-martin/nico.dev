import "server-only";

const configuredWpApiUrl =
  process.env.WP_API_URL ?? "https://wp.nico.dev/wp-json/";
const wpApiUrl = configuredWpApiUrl.endsWith("/")
  ? configuredWpApiUrl
  : `${configuredWpApiUrl}/`;

export interface WpTalk {
  title: string;
  venue: string;
  date: string;
  links: Array<{
    key: string;
    value: string;
  }>;
}

export interface WpVideo {
  url: string;
  width: string;
  height: string;
  title: string;
}

export interface TalksResponse {
  talks: WpTalk[];
  videos: WpVideo[];
}

export interface WpConference {
  title: string;
  link: string;
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

export interface WpConferenceCity {
  name: string;
  upcoming: boolean;
  position: {
    x: number;
    y: number;
  };
}

export interface ConferencesResponse {
  conferences: WpConference[];
  cities: WpConferenceCity[];
}

export interface WpHistoryEntry {
  year: string;
  title: string;
  description: string;
  tag: "community" | "professional";
}

export interface AboutResponse {
  history: WpHistoryEntry[];
}

export interface ApiImageSize {
  url: string;
  width: number;
  height: number;
}

export interface ApiImage {
  placeholder: string;
  alt: string;
  title: string;
  sizes: {
    page: ApiImageSize;
    large: ApiImageSize;
    medium: ApiImageSize;
    small: ApiImageSize;
  };
}

export interface WhatsUpEntryBase {
  title: string;
  description: string;
  date: string;
}

export interface WhatsUpProject extends WhatsUpEntryBase {
  type: "project";
  image: ApiImage | null;
  githubUrl: string | null;
  appUrl: string | null;
  stars: string;
}

export interface WhatsUpPodcast extends WhatsUpEntryBase {
  type: "podcast";
  image: ApiImage | null;
  podcastName: string;
  link: string;
}

export interface WhatsUpBlogPost extends WhatsUpEntryBase {
  type: "blogpost";
  publisher: string;
  summary: string;
  link: string;
}

export interface WhatsUpVideo extends WhatsUpEntryBase {
  type: "video";
  image: ApiImage | null;
  youtubeUrl: string;
}

export interface WhatsUpInstagramPost extends WhatsUpEntryBase {
  type: "instagram";
  id: string;
  publishedAt: string;
  link: string | null;
  mediaType: "image" | "video" | "carousel_album";
  image: {
    url: string;
  };
}

export type WhatsUpEntry =
  | WhatsUpProject
  | WhatsUpPodcast
  | WhatsUpBlogPost
  | WhatsUpVideo
  | WhatsUpInstagramPost;

export interface WhatsUpResponse {
  entries: WhatsUpEntry[];
}

export interface WhatsUpParams {
  limit?: number;
  offset?: number;
}

export interface CvContact {
  name: string;
  dob: string;
  address: string;
  email: string;
  phone: string;
  web: string;
  twitter: string;
  linkedin: string;
  github: string;
  image: string;
}

export interface CvProfessionalEntry {
  from: string;
  to: string;
  title_de: string;
  title_en: string;
  desc_de: string;
  desc_en: string;
}

export interface CvEducationEntry {
  from: string;
  to: string;
  title_de: string;
  title_en: string;
}

export interface CvLanguageEntry {
  lang_de: string;
  desc_de: string;
  lang_en: string;
  desc_en: string;
}

export interface CvResponse {
  contact: CvContact;
  community: {
    de: string;
    en: string;
  };
  professional: CvProfessionalEntry[];
  education: CvEducationEntry[];
  language: CvLanguageEntry[];
}

export async function wpApiGet<Response, Params extends object = object>(
  path: string,
  params?: Params,
): Promise<Response> {
  const url = new URL(path.replace(/^\//, ""), wpApiUrl);

  for (const [key, value] of Object.entries(params ?? {})) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }

  const response = await fetch(url, { cache: "force-cache" });

  if (!response.ok) {
    throw new Error(
      `WordPress API request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<Response>;
}
