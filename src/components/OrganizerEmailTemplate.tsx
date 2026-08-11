"use client";

import { useEffect, useState } from "react";

import { Eyebrow, Modal, TablerIcon } from "@/theme";

import CopyTextButton from "./CopyTextButton";

interface EmailDetails {
  name: string;
  conference: string;
  eventUrl: string;
  location: string;
  date: string;
  attendance: string;
  format: string;
  topic: string;
  travel: string;
  compensation: string;
}

const inputClassName =
  "mx-1 inline-block border-0 border-b border-dotted border-ink/35 bg-transparent px-0.5 py-0 align-baseline font-sans text-base leading-[inherit] font-light text-body outline-none transition placeholder:text-muted focus:border-brand focus:bg-yellow-tint/40";

function valueOrPlaceholder(value: string, placeholder: string) {
  return value.trim() || `[${placeholder}]`;
}

function inputWidth(value: string, placeholder: string, max: number) {
  return `${Math.min(Math.max(value.length, placeholder.length), max) + 1}ch`;
}

export default function OrganizerEmailTemplate() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<EmailDetails>({
    name: "",
    conference: "",
    eventUrl: "",
    location: "",
    date: "",
    attendance: "",
    format: "",
    topic: "",
    travel: "",
    compensation: "",
  });

  const name = valueOrPlaceholder(details.name, "your name");
  const conference = valueOrPlaceholder(details.conference, "conference name");
  const eventUrl = valueOrPlaceholder(details.eventUrl, "conference website");
  const location = valueOrPlaceholder(details.location, "location");
  const date = valueOrPlaceholder(details.date, "date");
  const attendance = valueOrPlaceholder(
    details.attendance,
    "expected attendance",
  );
  const topic = valueOrPlaceholder(
    details.topic,
    "what the conference is about",
  );
  const format = valueOrPlaceholder(
    details.format,
    "a talk, keynote, panel, podcast, or meetup",
  );
  const travel = valueOrPlaceholder(
    details.travel,
    "are covered / can be discussed",
  );
  const compensation = valueOrPlaceholder(
    details.compensation,
    "is available / is not offered / can be discussed",
  );
  const subject = `${conference} would love to invite you to speak`;
  const email = `Hi Nico,

I'm ${name}, and I'm part of the team behind ${conference}. We're planning the conference in ${location} on ${date}, with around ${attendance} people expected.

You can find the event at ${eventUrl}, and we'd like to invite you for ${format}.

The conference is about ${topic}.

Travel and accommodation ${travel}, and speaker compensation ${compensation}.

Would you be interested and available? I'm happy to share more details about the audience, format, and logistics.

Best,
${name}`;
  const mailto = `mailto:mail@nico.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(email)}`;

  function update(field: keyof EmailDetails, value: string) {
    setDetails((current) => ({ ...current, [field]: value }));
  }

  useEffect(() => {
    function openFromHash() {
      if (window.location.hash === "#invitation") setOpen(true);
    }

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  function close() {
    setOpen(false);
    if (window.location.hash === "#invitation") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }

  return (
    <section id="invitation" className="wrap section">
      <div className="relative overflow-hidden rounded-card border-3 border-ink bg-peri-tint p-7 shadow-[9px_9px_0_var(--color-peri)] sm:p-10">
        <TablerIcon
          icon="mail"
          className="absolute -top-5 -right-5 size-36 rotate-12 text-peri/15 sm:size-48"
        />
        <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <Eyebrow>Your turn</Eyebrow>
            <h2 className="section-title mt-5">
              An email, minus the blank page
            </h2>
            <p className="lead mt-3 mb-0">
              No contact form and no message sent into a void. Fill in a few
              details and get a ready-to-copy invitation you can still make your
              own.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-13 cursor-pointer items-center justify-center rounded-full border-3 border-ink bg-brand px-6 font-heading font-extrabold text-white shadow-[6px_6px_0_var(--color-brand-tint-strong)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-[8px_8px_0_var(--color-brand-tint-strong)] active:translate-x-0.5 active:translate-y-0.5"
          >
            Draft your invitation
            <TablerIcon icon="pencil" className="ml-2 size-4" />
          </button>
        </div>
      </div>

      <Modal open={open} onClose={close} title="Draft an invitation">
        <p className="mt-0 mb-4 text-sm text-muted">
          Fill in the underlined gaps. Nothing is submitted or stored here.
        </p>

        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-y border-ink/15 py-3 font-mono text-sm">
          <span className="text-muted">To</span>
          <strong className="truncate text-ink">mail@nico.dev</strong>
          <span className="text-muted">Subject</span>
          <strong className="min-w-0 text-ink">{subject}</strong>
        </div>

        <div className="space-y-4 pt-6 leading-7">
          <p className="m-0">Hi Nico,</p>
          <p className="m-0">
            I&apos;m
            <label>
              <span className="sr-only">Your name</span>
              <input
                type="text"
                autoFocus
                value={details.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="your name"
                style={{ width: inputWidth(details.name, "your name", 20) }}
                className={inputClassName}
              />
            </label>
            , and I&apos;m part of the team behind
            <label>
              <span className="sr-only">Conference name</span>
              <input
                type="text"
                value={details.conference}
                onChange={(event) => update("conference", event.target.value)}
                placeholder="conference name"
                style={{
                  width: inputWidth(details.conference, "conference name", 28),
                }}
                className={inputClassName}
              />
            </label>
            . We&apos;re planning the conference in
            <label>
              <span className="sr-only">Conference location</span>
              <input
                type="text"
                value={details.location}
                onChange={(event) => update("location", event.target.value)}
                placeholder="city or venue"
                style={{
                  width: inputWidth(details.location, "city or venue", 24),
                }}
                className={inputClassName}
              />
            </label>
            on
            <label>
              <span className="sr-only">Conference date</span>
              <input
                type="text"
                value={details.date}
                onChange={(event) => update("date", event.target.value)}
                placeholder="date"
                style={{ width: inputWidth(details.date, "date", 20) }}
                className={inputClassName}
              />
            </label>
            , with around
            <label>
              <span className="sr-only">Expected attendance</span>
              <input
                type="text"
                inputMode="numeric"
                value={details.attendance}
                onChange={(event) => update("attendance", event.target.value)}
                placeholder="people"
                style={{
                  width: inputWidth(details.attendance, "people", 12),
                }}
                className={inputClassName}
              />
            </label>
            people expected.
          </p>

          <p className="m-0">
            You can find the event at
            <label>
              <span className="sr-only">Conference website</span>
              <input
                type="url"
                value={details.eventUrl}
                onChange={(event) => update("eventUrl", event.target.value)}
                placeholder="conference website"
                style={{
                  width: inputWidth(details.eventUrl, "conference website", 32),
                }}
                className={inputClassName}
              />
            </label>
            , and we&apos;d like to invite you for
            <label>
              <span className="sr-only">Desired session format</span>
              <input
                type="text"
                value={details.format}
                onChange={(event) => update("format", event.target.value)}
                placeholder="a talk, keynote, panel..."
                style={{
                  width: inputWidth(
                    details.format,
                    "a talk, keynote, panel...",
                    30,
                  ),
                }}
                className={inputClassName}
              />
            </label>
            .
          </p>

          <div>
            <label htmlFor="organizer-email-topic">
              The conference is about
            </label>
            <textarea
              id="organizer-email-topic"
              value={details.topic}
              onChange={(event) => update("topic", event.target.value)}
              placeholder="the audience, themes, and what makes the event special"
              rows={2}
              className="block w-full resize-none border-0 border-b border-dotted border-ink/35 bg-transparent px-0.5 py-0 font-sans text-base leading-7 font-light text-body transition outline-none placeholder:text-muted focus:border-brand focus:bg-yellow-tint/40"
            />
          </div>

          <p className="m-0">
            Travel and accommodation
            <label>
              <span className="sr-only">Travel and accommodation coverage</span>
              <input
                type="text"
                value={details.travel}
                onChange={(event) => update("travel", event.target.value)}
                placeholder="are covered / can be discussed"
                style={{
                  width: inputWidth(
                    details.travel,
                    "are covered / can be discussed",
                    32,
                  ),
                }}
                className={inputClassName}
              />
            </label>
            , and speaker compensation
            <label>
              <span className="sr-only">Speaker compensation</span>
              <input
                type="text"
                value={details.compensation}
                onChange={(event) => update("compensation", event.target.value)}
                placeholder="is available / is not offered / can be discussed"
                style={{
                  width: inputWidth(
                    details.compensation,
                    "is available / is not offered / can be discussed",
                    42,
                  ),
                }}
                className={inputClassName}
              />
            </label>
            .
          </p>

          <p className="m-0">
            Would you be interested and available? I&apos;m happy to share more
            details about the audience, format, and logistics.
          </p>
          <p className="m-0">
            Best,
            <br />
            <span className="font-medium text-ink">{name}</span>
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-5">
          <p className="m-0 font-mono text-xs text-muted">
            Unfilled details remain marked in [square brackets].
          </p>
          <div className="flex flex-wrap gap-3">
            <CopyTextButton
              text={`Subject: ${subject}\n\n${email}`}
              label="Copy email"
              primary
            />
            <a
              href={mailto}
              className="inline-flex min-h-11 items-center justify-center rounded-full border-3 border-ink bg-white px-5 font-heading text-sm font-extrabold text-ink shadow-[5px_5px_0_var(--color-yellow)] transition hover:-translate-y-0.5 hover:bg-surface-muted hover:text-ink hover:no-underline"
            >
              Open email app
              <TablerIcon icon="mail" className="ml-2 size-4" />
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}
