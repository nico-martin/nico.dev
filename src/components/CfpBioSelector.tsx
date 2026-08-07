"use client";

import { useState } from "react";

import type { CfpTextVariant } from "@/lib/wp-api";
import { Card } from "@/theme";

import CopyTextPanel from "./CopyTextPanel";

interface CfpBioSelectorProps {
  bios: CfpTextVariant[];
}

export default function CfpBioSelector({ bios }: CfpBioSelectorProps) {
  const [bioIndex, setBioIndex] = useState(0);
  const bio = bios[bioIndex];

  if (!bio) return <Card>No biographies are currently available.</Card>;

  return (
    <div className="grid gap-7">
      <Card shadow="pink">
        <label className="grid max-w-xl gap-2 font-heading text-xs font-bold tracking-eyebrow text-muted uppercase">
          Biography
          <select
            value={bioIndex}
            onChange={(event) => setBioIndex(Number(event.target.value))}
            className="rounded-tile border-3 border-ink bg-white px-4 py-3 font-sans text-base font-normal tracking-normal text-ink normal-case"
          >
            {bios.map((item, index) => (
              <option key={`${item.title}-${index}`} value={index}>
                {item.title}
              </option>
            ))}
          </select>
        </label>
      </Card>
      <CopyTextPanel title={bio.title} text={bio.text} />
    </div>
  );
}
