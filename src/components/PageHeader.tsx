import type { ReactNode } from "react";

import { Eyebrow } from "@/theme";

import Doodles from "./Doodles";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead: string;
  media?: ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  lead,
  media,
}: PageHeaderProps) {
  return (
    <section className="relative py-18">
      <Doodles />
      <div
        className={
          media
            ? "wrap relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
            : "wrap relative z-10 animate-rise"
        }
      >
        <div className="animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="page-title mt-6 max-w-3xl">{title}</h1>
          <p className="lead mt-4 max-w-2xl">{lead}</p>
        </div>
        {media && (
          <div className="grid animate-rise place-items-center [animation-delay:90ms]">
            {media}
          </div>
        )}
      </div>
    </section>
  );
}
