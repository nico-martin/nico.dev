import type { Metadata } from "next";
import type { ReactNode } from "react";

import Portrait from "@/components/Portrait";
import { TablerIcon, type TablerIconName } from "@/theme";

export const metadata: Metadata = {
  title: "Website launch stories | nico.dev",
  robots: { index: false, follow: false },
};

const storyCount = 6;

function Story({
  number,
  url = "nico.dev",
  className,
  children,
}: {
  number: number;
  url?: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`relative mx-auto h-dvh w-[min(100vw,56.25dvh)] snap-start overflow-hidden ${className}`}
    >
      {children}
      <div className="absolute right-[7%] bottom-[3.5%] left-[7%] z-20 flex items-center justify-between font-mono text-[clamp(0.65rem,1.35dvh,0.95rem)] font-bold tracking-wide">
        <span>{url}</span>
        <span>
          {number} / {storyCount}
        </span>
      </div>
    </section>
  );
}

function Sticker({
  icon,
  children,
  className = "bg-white shadow-[0.35rem_0.35rem_0_var(--color-yellow)]",
}: {
  icon: TablerIconName;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex w-fit -rotate-2 items-center gap-2 rounded-full border-[clamp(2px,0.3dvh,4px)] border-ink px-[clamp(0.8rem,1.8dvh,1.2rem)] py-[clamp(0.45rem,1dvh,0.75rem)] font-mono text-[clamp(0.65rem,1.35dvh,0.95rem)] font-bold tracking-[0.1em] uppercase ${className}`}
    >
      <TablerIcon icon={icon} className="size-[1.2em]" />
      {children}
    </div>
  );
}

const feedItems = [
  ["code", "Building", "Browser experiments"],
  ["article", "Writing", "Articles & notes"],
  ["video", "Recording", "Videos & demos"],
  ["microphone", "Speaking", "Talks & podcasts"],
] as const satisfies readonly (readonly [TablerIconName, string, string])[];

const inviteItems = ["Talks & formats", "Logistics", "Reviews", "Bio & photos"];

export default function StoriesPage() {
  return (
    <div className="stories-page fixed inset-0 z-[100] snap-y snap-mandatory overflow-y-auto bg-ink text-ink">
      <Story number={1} className="bg-surface-muted">
        <div className="absolute -top-[8%] -right-[28%] size-[65%] rounded-full bg-brand-tint" />
        <div className="absolute top-[38%] -left-[18%] size-[45%] rounded-full bg-yellow-tint" />
        <div className="relative z-10 flex h-full flex-col px-[7%] pt-[7%] pb-[11%]">
          <div className="font-heading text-[clamp(1.3rem,2.7dvh,2.1rem)] font-black tracking-display text-brand">
            nico<span className="text-ink">.dev</span>
          </div>
          <div className="mt-[12%]">
            <Sticker icon="home-heart">Website update</Sticker>
            <div className="mt-[7%] font-heading text-[clamp(3.8rem,10.5dvh,7.5rem)] leading-[0.75] font-black tracking-display text-pink">
              NEW.
            </div>
            <h1 className="mt-[7%] max-w-[90%] text-[clamp(2rem,5.2dvh,4rem)] leading-[0.98]">
              I rebuilt my corner of the internet.
            </h1>
          </div>
          <Portrait className="absolute right-[-8%] bottom-[5%] [&>div]:size-[clamp(12rem,32dvh,23rem)] [&>div]:border-[clamp(3px,0.45dvh,6px)] [&>div]:border-ink" />
          <div className="absolute bottom-[17%] left-[7%] z-10 max-w-[42%] rotate-2 rounded-card border-[clamp(2px,0.35dvh,4px)] border-ink bg-yellow px-[5%] py-[4%] font-heading text-[clamp(0.95rem,2dvh,1.5rem)] leading-tight font-extrabold shadow-[0.45rem_0.45rem_0_var(--color-pink)]">
            build. write.
            <br />
            break. fix.
          </div>
        </div>
      </Story>

      <Story number={2} className="bg-yellow-tint">
        <div className="absolute -top-[9%] -left-[22%] size-[55%] rotate-12 rounded-[28%] bg-pink" />
        <div className="absolute top-[8%] right-[-24%] size-[48%] rounded-full bg-brand-tint-strong" />
        <div className="relative z-10 flex h-full flex-col px-[7%] pt-[10%] pb-[11%]">
          <Sticker
            icon="sparkles"
            className="bg-white shadow-[0.35rem_0.35rem_0_var(--color-peri)]"
          >
            The design
          </Sticker>
          <h1 className="mt-[15%] text-[clamp(2.6rem,7.2dvh,5.3rem)] leading-[0.9]">
            Colorful,
            <br />
            not busy.
          </h1>
          <p className="mt-[7%] max-w-[90%] text-[clamp(1rem,2.45dvh,1.8rem)] leading-[1.25] font-medium text-body">
            One strong typeface and a set of loud but surprisingly compatible
            colors.
          </p>
          <div className="mt-auto mb-[10%] grid rotate-[-2deg] grid-cols-2 gap-[4%]">
            {[
              ["#00796b", "TEAL"],
              ["#f5c842", "YELLOW"],
              ["#ee5fa7", "PINK"],
              ["#7c82e8", "PERI"],
            ].map(([color, label], index) => (
              <div
                key={color}
                className="rounded-card border-[clamp(2px,0.35dvh,4px)] border-ink bg-white p-[7%] shadow-[0.4rem_0.4rem_0_var(--color-ink)]"
              >
                <div
                  className="aspect-[1.6] rounded-tile border-[clamp(2px,0.28dvh,3px)] border-ink"
                  style={{ backgroundColor: color }}
                />
                <div className="mt-[7%] font-mono text-[clamp(0.55rem,1.2dvh,0.85rem)] font-bold tracking-wider">
                  0{index + 1} / {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Story>

      <Story number={3} className="bg-ink text-white">
        <div className="absolute -top-[15%] right-[-30%] size-[70%] rounded-full bg-brand-deep" />
        <div className="absolute -bottom-[12%] -left-[35%] size-[70%] rounded-full bg-peri/25" />
        <div className="relative z-10 flex h-full flex-col px-[7%] pt-[10%] pb-[11%]">
          <Sticker
            icon="code"
            className="bg-yellow text-ink shadow-[0.35rem_0.35rem_0_var(--color-pink)]"
          >
            Under the hood
          </Sticker>
          <h1 className="mt-[12%] text-[clamp(2.2rem,5.7dvh,4.3rem)] leading-[0.95] text-white">
            Content in.
            <br />
            Static files out.
          </h1>
          <div className="my-auto grid gap-[2.2dvh]">
            {[
              ["01", "Headless WordPress", "Manage the content"],
              ["02", "Next.js build", "Pull everything together"],
              ["03", "HTML · CSS · JS", "Serve the finished files"],
            ].map(([number, title, text], index) => (
              <div key={number}>
                <div className="flex items-center gap-[4%] rounded-card border-[clamp(2px,0.35dvh,4px)] border-white bg-white/10 p-[5%] shadow-[0.45rem_0.45rem_0_var(--color-brand)]">
                  <span className="grid size-[clamp(2.4rem,5.5dvh,4rem)] shrink-0 place-items-center rounded-full bg-yellow font-mono text-[clamp(0.75rem,1.6dvh,1.1rem)] font-black text-ink">
                    {number}
                  </span>
                  <div>
                    <div className="font-heading text-[clamp(1rem,2.3dvh,1.7rem)] font-black text-white">
                      {title}
                    </div>
                    <div className="font-mono text-[clamp(0.58rem,1.2dvh,0.85rem)] text-white/65">
                      {text}
                    </div>
                  </div>
                </div>
                {index < 2 && (
                  <TablerIcon
                    icon="chevrons-right"
                    className="mx-auto mt-[2.2dvh] size-[clamp(1.1rem,2.5dvh,1.8rem)] rotate-90 text-pink"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mb-[8%] flex items-center gap-[4%] rounded-card bg-brand-tint px-[5%] py-[4%] text-ink">
            <TablerIcon
              icon="bolt"
              className="size-[clamp(1.5rem,3.5dvh,2.5rem)]"
            />
            <span className="font-heading text-[clamp(0.9rem,2dvh,1.4rem)] leading-tight font-extrabold">
              The server has one job: serve files. Very fast.
            </span>
          </div>
        </div>
      </Story>

      <Story number={4} url="nico.dev/latest" className="bg-pink-tint">
        <div className="absolute top-[5%] right-[-14%] size-[36%] rotate-12 rounded-card bg-pink" />
        <div className="absolute bottom-[4%] left-[-18%] size-[45%] rounded-full bg-yellow-tint" />
        <div className="relative z-10 flex h-full flex-col px-[7%] pt-[10%] pb-[11%]">
          <Sticker
            icon="activity"
            className="bg-white shadow-[0.35rem_0.35rem_0_var(--color-pink)]"
          >
            /latest
          </Sticker>
          <h1 className="mt-[12%] text-[clamp(2.5rem,6.8dvh,5rem)] leading-[0.9]">
            A changelog
            <br />
            for me.
          </h1>
          <p className="mt-[6%] text-[clamp(0.95rem,2.2dvh,1.6rem)] leading-snug font-medium text-body">
            Everything I am building, writing, and talking about in one running
            feed.
          </p>
          <div className="mt-[4%] ml-auto rotate-3 rounded-full border-[clamp(2px,0.3dvh,3px)] border-ink bg-yellow px-[4%] py-[2.5%] font-mono text-[clamp(0.6rem,1.25dvh,0.9rem)] font-bold shadow-[0.3rem_0.3rem_0_var(--color-ink)]">
            RSS included
          </div>
          <div className="mt-auto mb-[8%] grid grid-cols-2 gap-[2dvh]">
            {feedItems.map(([icon, eyebrow, title], index) => (
              <div
                key={eyebrow}
                className={`flex flex-col items-start gap-[1.5dvh] rounded-card border-[clamp(2px,0.35dvh,4px)] border-ink bg-white p-[9%] ${
                  index === 0
                    ? "-rotate-1 shadow-[0.45rem_0.45rem_0_var(--color-brand-tint-strong)]"
                    : index === 1
                      ? "rotate-1 shadow-[0.45rem_0.45rem_0_var(--color-yellow)]"
                      : index === 2
                        ? "rotate-1 shadow-[0.45rem_0.45rem_0_var(--color-pink)]"
                        : "-rotate-1 shadow-[0.45rem_0.45rem_0_var(--color-peri)]"
                }`}
              >
                <span className="grid size-[clamp(2.4rem,5dvh,3.7rem)] shrink-0 place-items-center rounded-tile border-[clamp(2px,0.3dvh,3px)] border-ink bg-surface-muted">
                  <TablerIcon
                    icon={icon}
                    className="size-[clamp(1.15rem,2.5dvh,1.8rem)]"
                  />
                </span>
                <div>
                  <div className="font-mono text-[clamp(0.5rem,1.1dvh,0.8rem)] font-bold tracking-wider text-brand uppercase">
                    {eyebrow}
                  </div>
                  <div className="font-heading text-[clamp(0.9rem,2dvh,1.45rem)] leading-tight font-black">
                    {title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Story>

      <Story number={5} url="nico.dev/invite" className="bg-peri-tint">
        <div className="absolute -top-[12%] -right-[28%] size-[65%] rounded-full bg-peri/30" />
        <div className="absolute bottom-[6%] -left-[25%] size-[55%] rotate-12 rounded-[35%] bg-brand-tint" />
        <div className="relative z-10 flex h-full flex-col px-[7%] pt-[10%] pb-[11%]">
          <Sticker
            icon="microphone"
            className="bg-pink text-white shadow-[0.35rem_0.35rem_0_var(--color-yellow)]"
          >
            /invite
          </Sticker>
          <h1 className="mt-[12%] text-[clamp(2.35rem,6.3dvh,4.7rem)] leading-[0.92]">
            Everything an organizer needs.
          </h1>
          <p className="mt-[6%] text-[clamp(0.95rem,2.2dvh,1.6rem)] leading-snug font-medium text-body">
            The usual dozen questions, answered in one place.
          </p>
          <div className="my-auto rounded-card border-[clamp(2px,0.4dvh,5px)] border-ink bg-white p-[7%] shadow-[0.7rem_0.7rem_0_var(--color-peri)]">
            <div className="font-mono text-[clamp(0.6rem,1.3dvh,0.95rem)] font-bold tracking-wider text-muted uppercase">
              Speaker kit
            </div>
            <div className="mt-[7%] grid gap-[2.5dvh]">
              {inviteItems.map((item) => (
                <div key={item} className="flex items-center gap-[5%]">
                  <span className="grid size-[clamp(1.8rem,4dvh,2.8rem)] shrink-0 place-items-center rounded-full border-[clamp(2px,0.3dvh,3px)] border-ink bg-yellow">
                    <TablerIcon
                      icon="check"
                      className="size-[clamp(0.9rem,2dvh,1.4rem)]"
                    />
                  </span>
                  <span className="font-heading text-[clamp(1rem,2.35dvh,1.7rem)] font-extrabold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-[10%] rotate-1 rounded-card border-[clamp(2px,0.35dvh,4px)] border-ink bg-brand px-[6%] py-[5%] text-white shadow-[0.45rem_0.45rem_0_var(--color-yellow)]">
            <div className="font-heading text-[clamp(1rem,2.25dvh,1.65rem)] font-black">
              It even drafts the invitation.
            </div>
            <div className="mt-1 font-mono text-[clamp(0.55rem,1.15dvh,0.8rem)] text-white/75">
              Delightfully recursive.
            </div>
          </div>
        </div>
      </Story>

      <Story number={6} className="bg-brand-tint">
        <div className="absolute -top-[18%] -left-[30%] size-[75%] rounded-full bg-yellow" />
        <div className="absolute right-[-25%] bottom-[4%] size-[60%] rounded-full bg-pink/35" />
        <div className="relative z-10 flex h-full flex-col px-[7%] pt-[10%] pb-[11%]">
          <Sticker
            icon="sparkles"
            className="bg-white shadow-[0.35rem_0.35rem_0_var(--color-pink)]"
          >
            Your turn
          </Sticker>
          <div className="my-auto">
            <div className="relative rotate-[-1deg] rounded-card border-[clamp(3px,0.5dvh,6px)] border-ink bg-white p-[8%] shadow-[0.8rem_0.8rem_0_var(--color-ink)]">
              <TablerIcon
                icon="quote"
                className="size-[clamp(2.5rem,6dvh,4.5rem)] text-pink"
              />
              <h1 className="mt-[8%] text-[clamp(2.7rem,7.2dvh,5.3rem)] leading-[0.9]">
                What do you think?
              </h1>
              <p className="mt-[8%] text-[clamp(1rem,2.35dvh,1.7rem)] leading-snug font-medium text-body">
                Click around and tell me what works, what is confusing, or what
                I missed.
              </p>
            </div>
            <div className="mt-[12%] flex flex-wrap justify-center gap-[2dvh] font-mono text-[clamp(0.65rem,1.45dvh,1rem)] font-bold">
              {[
                ["BUGS", "bg-pink text-white"],
                ["IDEAS", "bg-yellow"],
                ["FEEDBACK", "bg-peri text-white"],
                ["COMPLIMENTS", "bg-white"],
              ].map(([label, color], index) => (
                <span
                  key={label}
                  className={`rounded-full border-[clamp(2px,0.3dvh,3px)] border-ink px-[5%] py-[3%] shadow-[0.3rem_0.3rem_0_var(--color-ink)] ${color} ${index % 2 === 0 ? "-rotate-2" : "rotate-2"}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Story>
    </div>
  );
}
