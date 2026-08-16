import type { Metadata } from "next";

import HeaderCompositions from "@/components/HeaderCompositions";

export const metadata: Metadata = {
  title: "Social assets | nico.dev",
  robots: { index: false, follow: false },
};

export default function HeaderPage() {
  return <HeaderCompositions />;
}
