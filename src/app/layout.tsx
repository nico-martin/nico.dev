import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import ShareableTemplate from "@/components/ShareableTemplate";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getPageMetadata, SHAREABLE_URL } from "@/lib/shareable";

import "../index.css";

export const metadata: Metadata = getPageMetadata("/");

export const viewport: Viewport = { themeColor: "#009d89" };

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          src={`${SHAREABLE_URL}/library.min.js`}
          strategy="afterInteractive"
        />
        <ShareableTemplate />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
