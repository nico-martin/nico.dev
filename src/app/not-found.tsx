import type { Metadata } from "next";
import Link from "next/link";

import Doodles from "@/components/Doodles";
import { Button, Eyebrow, TablerIcon } from "@/theme";

export const metadata: Metadata = {
  title: "Page not found | nico.dev",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-5.75rem)] items-center overflow-hidden py-16 sm:py-24">
      <Doodles />
      <div className="wrap relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>404 · Page not found</Eyebrow>
          <p
            aria-hidden="true"
            className="mt-7 font-heading text-[clamp(7rem,28vw,16rem)] leading-[0.75] font-black tracking-display text-brand"
          >
            404
          </p>
          <h1 className="page-title mt-10">This page wandered off.</h1>
          <p className="lead mx-auto mt-5 max-w-xl">
            The URL might be wrong, or the page may have moved. Let&apos;s get
            you back to somewhere that exists.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/" chevron>
              Back to home
            </Button>
            <Link
              href="/speaking/"
              className="inline-flex min-h-13 items-center gap-2 px-3 font-mono text-sm"
            >
              Browse my talks
              <TablerIcon icon="chevrons-right" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
