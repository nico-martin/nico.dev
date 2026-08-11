import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nico Martin",
    short_name: "nico.dev",
    description:
      "Open source machine learning engineer, speaker and WebML enthusiast.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#009d89",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
