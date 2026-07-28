import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

import "../index.css";

export const metadata: Metadata = {
  title: {
    default: "Nico Martin - open source ML engineer & speaker",
    template: "%s | nico.dev",
  },
  description:
    "Open source machine learning engineer with focus on WebML at Hugging Face and Google Developer Expert in AI and web technologies.",
};

export const viewport: Viewport = { themeColor: "#009d89" };

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
