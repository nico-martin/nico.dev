import "server-only";

const manifestUrl = "https://uploads.nico.dev/gen/images.json";
const manifestBuildCacheKey =
  process.env.PRESS_IMAGES_CACHE_KEY ?? Date.now().toString(36);

export interface PressImageFormat {
  format: string;
  filename: string;
  width: number;
  height: number;
  filesize: number;
}

export interface PressImageSize {
  size: string;
  formats: PressImageFormat[];
}

export interface PressImageRatio {
  aspectRatio: string;
  source: string;
  width: number;
  height: number;
  sizes: PressImageSize[];
}

export interface PressImage {
  name: string;
  aspectRatios: PressImageRatio[];
}

export async function getPressImages() {
  const url = new URL(manifestUrl);
  url.searchParams.set("_build", manifestBuildCacheKey);

  const response = await fetch(url, { cache: "force-cache" });
  if (!response.ok) {
    throw new Error(
      `Press image manifest request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<PressImage[]>;
}
