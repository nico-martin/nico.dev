import "server-only";

const configuredWpApiUrl =
  process.env.WP_API_URL ?? "https://wp.nico.dev/wp-json/";
const wpApiUrl = configuredWpApiUrl.endsWith("/")
  ? configuredWpApiUrl
  : `${configuredWpApiUrl}/`;
const apiBuildCacheKey =
  process.env.WP_API_CACHE_KEY ?? Date.now().toString(36);

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

export interface WpOrganizerQuote {
  text: string;
  organizer: string;
  conference: string;
  logo: {
    url: string;
    width: number;
    height: number;
    alt: string;
  } | null;
}

export interface TalksResponse {
  talks: WpTalk[];
  videos: WpVideo[];
  organizerQuotes: WpOrganizerQuote[];
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
  bio: CfpTextVariant[];
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
  image: ApiImage;
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

export interface CfpTextVariant {
  title: string;
  text: string;
}

export interface CfpPaper {
  title: string;
  isActive: boolean;
  abstract: string;
  idealAudience: string;
  tags: string[];
  content: CfpTextVariant[];
  notes: string;
}

export interface CfpLink {
  title: string;
  url: string;
}

export interface CfpPortrait {
  url: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  orientation: "portrait" | "landscape" | "square";
  preferred: boolean;
  credit: string;
}

export interface CfpResponse {
  papers: CfpPaper[];
  links: CfpLink[];
  portrait: CfpPortrait[];
}

export async function wpApiGet<Response, Params extends object = object>(
  path: string,
  params?: Params,
): Promise<Response> {
  const url = new URL(path.replace(/^\//, ""), wpApiUrl);
  // Static exports require cacheable fetches, so vary the URL once per build
  // instead of reusing Next's persisted response from an earlier build.
  url.searchParams.set("_build", apiBuildCacheKey);

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
