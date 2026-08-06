import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "wp.nico.dev" },
    ],
  },
  trailingSlash: true,
  webpack(config) {
    const assetRule = config.module.rules.find(
      (rule: unknown) =>
        typeof rule === "object" &&
        rule !== null &&
        "test" in rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg"),
    ) as { exclude?: RegExp } | undefined;

    if (assetRule && typeof assetRule === "object") {
      assetRule.exclude = /world\.svg$/i;
    }

    config.module.rules.push({
      test: /world\.svg$/i,
      use: [{ loader: "@svgr/webpack", options: { svgo: false } }],
    });

    return config;
  },
};

export default nextConfig;
