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

export async function wpApiGet<Response>(path: string): Promise<Response> {
  const url = new URL(path.replace(/^\//, ""), wpApiUrl);
  const response = await fetch(url, { cache: "force-cache" });

  if (!response.ok) {
    throw new Error(
      `WordPress API request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<Response>;
}
