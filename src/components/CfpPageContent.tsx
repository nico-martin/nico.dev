"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { CfpResponse } from "@/lib/wp-api";
import { Blob, Button, Card, Eyebrow } from "@/theme";

import CfpBioSelector from "./CfpBioSelector";
import CfpTalkSelector from "./CfpTalkSelector";
import CopyTextButton from "./CopyTextButton";
import PageHeader from "./PageHeader";

function CfpHeader({ portrait }: { portrait?: string }) {
  return (
    <PageHeader
      eyebrow="Speaker resources"
      title="Talk abstracts, bios and everything CFP"
      lead="Ready-to-use proposals and speaker material for conference organisers. Pick the length that fits your form and copy what you need."
      actions={
        <div className="mt-7 flex flex-wrap gap-4">
          <Button href="mailto:mail@nico.dev" chevron>
            mail@nico.dev
          </Button>
          <Button href="/speaking/" secondary>
            past talks
          </Button>
        </div>
      }
      media={
        portrait ? (
          <Blob className="size-[min(23rem,82vw)] bg-yellow">
            <Image
              src={portrait}
              alt="Nico Martin"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 980px) 82vw, 368px"
            />
          </Blob>
        ) : undefined
      }
    />
  );
}

export default function CfpPageContent() {
  const [cfp, setCfp] = useState<CfpResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCfp() {
      try {
        const response = await fetch(
          "https://wp.nico.dev/wp-json/nico/v1/cfp",
          { cache: "no-store", signal: controller.signal },
        );

        if (!response.ok)
          throw new Error(`CFP request failed: ${response.status}`);
        setCfp((await response.json()) as CfpResponse);
      } catch (requestError) {
        if (!controller.signal.aborted) {
          console.error(requestError);
          setError(true);
        }
      }
    }

    void loadCfp();
    return () => controller.abort();
  }, []);

  if (!cfp) {
    return (
      <>
        <CfpHeader />
        <section className="wrap pb-24">
          <Card shadow={error ? "pink" : "teal"}>
            <h2 className="text-2xl">
              {error ? "Could not load the CFP kit" : "Loading the CFP kit"}
            </h2>
            <p className="mt-2 mb-0">
              {error
                ? "Please refresh the page or email mail@nico.dev."
                : "Fetching the latest abstracts and speaker resources..."}
            </p>
          </Card>
        </section>
      </>
    );
  }

  return (
    <>
      <CfpHeader portrait={cfp.portrait[1]} />

      <section className="wrap">
        <Eyebrow>Talk proposals</Eyebrow>
        <h2 className="section-title mt-5">Choose a talk</h2>
        <p className="mt-3 max-w-2xl">
          Each proposal includes one or more abstract lengths. The submission
          notes contain audience assumptions, takeaways and additional context.
        </p>
        <div className="mt-8">
          <CfpTalkSelector papers={cfp.papers} />
        </div>
      </section>

      <section className="wrap section">
        <Eyebrow>Speaker biography</Eyebrow>
        <h2 className="section-title mt-5">About Nico</h2>
        <p className="mt-3 max-w-2xl">
          Several lengths and languages, ready to paste into a schedule or
          speaker profile.
        </p>
        <div className="mt-8">
          <CfpBioSelector bios={cfp.about} />
        </div>
      </section>

      <section className="wrap section pb-24">
        <div className="grid items-start gap-7 lg:grid-cols-[1fr_1.35fr]">
          <Card shadow="peri">
            <Eyebrow>Profile links</Eyebrow>
            <h2 className="mt-5 text-2xl">Find me online</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {cfp.links.map((link) => (
                <div
                  key={link.title}
                  className="grid gap-2 rounded-tile bg-surface-muted p-4"
                >
                  <strong className="font-heading text-sm text-ink">
                    {link.title}
                  </strong>
                  <a href={link.url} className="font-mono text-xs break-all">
                    {link.url}
                  </a>
                  <div>
                    <CopyTextButton text={link.url} label="Copy link" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div>
            <Eyebrow>Press photos</Eyebrow>
            <h2 className="mt-5 text-2xl">Portraits to download</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {cfp.portrait.map((portrait, index) => (
                <div
                  key={portrait}
                  className="group overflow-hidden rounded-card border-3 border-ink bg-white shadow-[7px_7px_0_var(--color-brand-tint-strong)] hover:no-underline"
                >
                  <a href={portrait} className="block hover:no-underline">
                    <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                      <Image
                        src={portrait}
                        alt={`Nico Martin portrait ${index + 1}`}
                        fill
                        className="object-cover object-top transition-transform group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 220px"
                      />
                    </div>
                  </a>
                  <div className="grid gap-3 p-4">
                    <a href={portrait} className="font-mono text-xs break-all">
                      {portrait}
                    </a>
                    <div>
                      <CopyTextButton text={portrait} label="Copy link" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
