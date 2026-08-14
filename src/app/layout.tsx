import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Nunito, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import Matomo from "@/components/Matomo";
import ShareableTemplate from "@/components/ShareableTemplate";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getPageMetadata, SHAREABLE_URL } from "@/lib/shareable";

import "../index.css";

const headingFont = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const sansFont = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = getPageMetadata("/");

export const viewport: Viewport = { themeColor: "#009d89" };

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const matomoUrl = process.env.MATOMO_URL?.trim().replace(/\/+$/, "");
  const matomoSiteId = process.env.MATOMO_SITE_ID?.trim();

  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        {matomoUrl && matomoSiteId && (
          <Matomo url={`${matomoUrl}/`} siteId={matomoSiteId} />
        )}
        <Script
          src={`${SHAREABLE_URL}/library.min.js`}
          strategy="afterInteractive"
        />
        <ShareableTemplate />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
