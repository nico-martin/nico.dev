"use client";

import { useState } from "react";

import type { CfpLink, CfpTextVariant } from "@/lib/wp-api";
import { Badge, Card, SegmentedControl, TablerIcon } from "@/theme";

import CopyTextButton from "./CopyTextButton";

interface InviteBioSelectorProps {
  bios: CfpTextVariant[];
  links: CfpLink[];
}

function countWords(text: string) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

export default function InviteBioSelector({
  bios,
  links,
}: InviteBioSelectorProps) {
  const [bioIndex, setBioIndex] = useState(0);
  const tagline = bios[0];
  const biographies = bios.slice(1);
  const bio = biographies[bioIndex];

  if (!tagline && !bio) {
    return <Card>No biographies are currently available.</Card>;
  }

  const wordCount = bio ? countWords(bio.text) : 0;

  return (
    <Card shadow="pink" className="p-5 sm:p-7">
      {tagline && (
        <div>
          <h3 className="text-2xl">Tagline</h3>
          <p className="mt-2">A one-line introduction for your programme.</p>
          <div className="mt-5 rounded-tile bg-surface-muted p-5">
            <p className="m-0 text-ink">{tagline.text}</p>
            <div className="mt-4 text-right">
              <CopyTextButton text={tagline.text} label="Copy tagline" />
            </div>
          </div>
        </div>
      )}

      <div className={tagline ? "mt-8 border-t border-ink/10 pt-8" : ""}>
        <h3 className="text-2xl">Bio</h3>
        <p className="mt-2">Choose a length and copy it into your programme.</p>
        {biographies.length > 1 && (
          <SegmentedControl
            label="Biography length"
            value={String(bioIndex)}
            setValue={(nextValue) => setBioIndex(Number(nextValue))}
            className="mt-5"
            options={biographies.map((item, index) => ({
              value: String(index),
              label: (
                <span className="min-w-0 capitalize">
                  {item.title}{" "}
                  <span className="block font-mono text-[0.65rem] font-normal text-muted normal-case sm:inline">
                    {countWords(item.text)}
                  </span>
                </span>
              ),
            }))}
          />
        )}

        {bio ? (
          <>
            <div
              id="invite-bio-content"
              aria-live="polite"
              className="mt-7 leading-relaxed whitespace-pre-wrap text-body"
            >
              {bio.text}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-4">
              <div className="flex flex-wrap gap-2">
                <Badge>{bio.text.length} characters</Badge>
                <Badge>{wordCount} words</Badge>
              </div>
              <CopyTextButton text={bio.text} label="Copy bio" />
            </div>
          </>
        ) : (
          <p className="mb-0">No full biographies are currently available.</p>
        )}
      </div>

      {links.length > 0 && (
        <div className="mt-8 border-t border-ink/10 pt-8">
          <h3 className="text-2xl">Profile links</h3>
          <div className="mt-3 grid gap-x-8 sm:grid-cols-2">
            {links.map((link) => (
              <div
                key={link.title}
                className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-ink/10 py-3 font-mono text-xs"
              >
                <a
                  href={link.url}
                  target="_blank"
                  className="inline-flex min-w-0 items-center gap-1"
                >
                  <span className="truncate">{link.title}</span>
                  <TablerIcon
                    icon="chevrons-right"
                    className="size-4 shrink-0"
                  />
                </a>
                <CopyTextButton text={link.url} label="Copy" quiet />
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
