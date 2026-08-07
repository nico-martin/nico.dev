import type { Metadata } from "next";

import CfpPageContent from "@/components/CfpPageContent";

export const metadata: Metadata = {
  title: "Call for papers",
  description:
    "Talk abstracts, speaker biographies, links and portrait photos for conference organisers.",
};

export default function CfpPage() {
  return <CfpPageContent />;
}
