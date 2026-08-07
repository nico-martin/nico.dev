import type { ReactNode } from "react";

import { Button, Eyebrow, type ButtonProps } from "@/theme";

import Doodles from "./Doodles";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  media?: ReactNode;
  buttons?: ButtonProps[];
  actions?: ReactNode;
  displayTitle?: boolean;
}

export default function PageHeader({
  eyebrow,
  title,
  lead,
  media,
  buttons,
  actions,
  displayTitle = false,
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
          <h1
            className={
              displayTitle ? "display mt-6" : "page-title mt-6 max-w-3xl"
            }
          >
            {title}
          </h1>
          {typeof lead === "string" ? (
            <p className="lead mt-4 max-w-2xl">{lead}</p>
          ) : (
            <div className="lead mt-4 max-w-2xl">{lead}</div>
          )}
          {buttons && buttons.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <Button key={`${button.href}-${index}`} {...button} />
              ))}
            </div>
          )}
          {actions}
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
