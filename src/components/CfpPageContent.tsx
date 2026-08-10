"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { AboutResponse, CfpPortrait, CfpResponse } from "@/lib/wp-api";
import { Badge, Blob, Card, Eyebrow } from "@/theme";

import CfpBioSelector from "./CfpBioSelector";
import CfpTalkSelector from "./CfpTalkSelector";
import CopyTextButton from "./CopyTextButton";
import PageHeader from "./PageHeader";

function CfpHeader({ portrait }: { portrait?: CfpPortrait }) {
  return (
    <PageHeader
      eyebrow="Speaker resources"
      title="Talk abstracts, bios and everything CFP"
      lead="Ready-to-use proposals and speaker material for conference organisers. Pick the length that fits your form and copy what you need."
      buttons={[
        {
          href: "mailto:mail@nico.dev",
          children: "mail@nico.dev",
          chevron: true,
        },
        { href: "/speaking/", children: "past talks", secondary: true },
      ]}
      media={
        portrait ? (
          <Blob className="size-[min(23rem,82vw)] bg-yellow">
            <Image
              src={portrait.url}
              alt={portrait.alt || "Nico Martin"}
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
  const [bios, setBios] = useState<AboutResponse["bio"] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCfp() {
      try {
        const [cfpResponse, aboutResponse] = await Promise.all([
          fetch("https://wp.nico.dev/wp-json/nico/v1/cfp", {
            cache: "no-store",
            signal: controller.signal,
          }),
          fetch("https://wp.nico.dev/wp-json/nico/v2/about", {
            cache: "no-store",
            signal: controller.signal,
          }),
        ]);

        if (!cfpResponse.ok)
          throw new Error(`CFP request failed: ${cfpResponse.status}`);
        if (!aboutResponse.ok)
          throw new Error(`About request failed: ${aboutResponse.status}`);

        const [cfpData, aboutData] = (await Promise.all([
          cfpResponse.json(),
          aboutResponse.json(),
        ])) as [CfpResponse, AboutResponse];
        setCfp(cfpData);
        setBios(aboutData.bio);
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

  if (!cfp || !bios) {
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

  const preferredPortrait =
    cfp.portrait.find((portrait) => portrait.preferred) ?? cfp.portrait[0];

  return (
    <>
      <CfpHeader portrait={preferredPortrait} />

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
          <CfpBioSelector bios={bios} />
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
                  key={portrait.url}
                  className="group overflow-hidden rounded-card border-3 border-ink bg-white shadow-[7px_7px_0_var(--color-brand-tint-strong)] hover:no-underline"
                >
                  <a href={portrait.url} className="block hover:no-underline">
                    <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                      <Image
                        src={portrait.url}
                        alt={
                          portrait.alt || `Nico Martin portrait ${index + 1}`
                        }
                        fill
                        className="object-cover object-top transition-transform group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 220px"
                      />
                    </div>
                  </a>
                  <div className="grid gap-3 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <a
                        href={portrait.url}
                        className="font-heading text-sm text-ink"
                      >
                        {portrait.label || `Photo ${index + 1}`}
                      </a>
                      {portrait.preferred && <Badge>Preferred</Badge>}
                    </div>
                    <div className="font-mono text-xs text-muted capitalize">
                      {portrait.orientation} · {portrait.width} ×{" "}
                      {portrait.height}
                    </div>
                    {portrait.credit && (
                      <div className="font-mono text-xs text-muted">
                        Credit: {portrait.credit}
                      </div>
                    )}
                    <div>
                      <CopyTextButton text={portrait.url} label="Copy link" />
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
