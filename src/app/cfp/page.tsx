import type { Metadata } from "next";

import CfpPageContent from "@/components/CfpPageContent";
import { getPressImages } from "@/lib/press-images";
import { getPageMetadata } from "@/lib/shareable";

export const metadata: Metadata = getPageMetadata("/cfp/");

export default async function CfpPage() {
  const pressImages = await getPressImages();

  return <CfpPageContent pressImages={pressImages} />;
}
