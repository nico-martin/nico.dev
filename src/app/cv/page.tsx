import type { Metadata } from "next";

import CvDocument from "@/components/CvDocument";
import { type CvResponse, wpApiGet } from "@/lib/wp-api";

export const metadata: Metadata = {
  title: "Curriculum vitae",
  description:
    "Professional experience, education and community work of Nicolas Martin.",
};

export default async function CvPage() {
  const cv = await wpApiGet<CvResponse>("nico/v1/cv");
  const sortedCv: CvResponse = {
    ...cv,
    professional: [...cv.professional].sort(
      (first, second) => Number(second.from) - Number(first.from),
    ),
  };

  return <CvDocument cv={sortedCv} />;
}
