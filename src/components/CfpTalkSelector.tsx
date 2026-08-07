"use client";

import { useState } from "react";

import type { CfpPaper } from "@/lib/wp-api";
import { Card } from "@/theme";

import CopyTextButton from "./CopyTextButton";
import CopyTextPanel from "./CopyTextPanel";

interface CfpTalkSelectorProps {
  papers: CfpPaper[];
}

export default function CfpTalkSelector({ papers }: CfpTalkSelectorProps) {
  const [paperIndex, setPaperIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0);
  const paper = papers[paperIndex];
  const variant = paper?.content[variantIndex];

  if (!paper) {
    return <Card>No talk proposals are currently available.</Card>;
  }

  return (
    <div className="grid gap-7">
      <Card shadow="yellow">
        <div className="grid gap-5 md:grid-cols-[1fr_15rem]">
          <label className="grid gap-2 font-heading text-xs font-bold tracking-eyebrow text-muted uppercase">
            Talk
            <select
              value={paperIndex}
              onChange={(event) => {
                setPaperIndex(Number(event.target.value));
                setVariantIndex(0);
              }}
              className="rounded-tile border-3 border-ink bg-white px-4 py-3 font-sans text-base font-normal tracking-normal text-ink normal-case"
            >
              {papers.map((item, index) => (
                <option key={item.title} value={index}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 font-heading text-xs font-bold tracking-eyebrow text-muted uppercase">
            Abstract version
            <select
              value={variantIndex}
              onChange={(event) => setVariantIndex(Number(event.target.value))}
              className="rounded-tile border-3 border-ink bg-white px-4 py-3 font-sans text-base font-normal tracking-normal text-ink normal-case"
            >
              {paper.content.map((item, index) => (
                <option key={`${item.title}-${index}`} value={index}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl">{paper.title}</h2>
          <CopyTextButton text={paper.title} label="Copy title" />
        </div>
      </Card>

      {variant && (
        <CopyTextPanel
          title={`Abstract: ${variant.title}`}
          text={variant.text}
        />
      )}
      {paper.notes && (
        <CopyTextPanel title="Submission notes" text={paper.notes} maxHeight />
      )}
    </div>
  );
}
