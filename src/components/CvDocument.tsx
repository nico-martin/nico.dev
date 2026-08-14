"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import type { CvResponse } from "@/lib/wp-api";
import { Badge, Blob, Card, Eyebrow, ListRow } from "@/theme";
import cn from "@/utils/classnames";

import PageHeader from "./PageHeader";

interface CvDocumentProps {
  cv: CvResponse;
}

type Language = "en" | "de";

const translations = {
  en: {
    eyebrow: "Curriculum vitae",
    contact: "Contact",
    born: "Born",
    languages: "Languages",
    education: "Education",
    community: "Community",
    experience: "Professional experience",
    workHistory: "Work history",
    present: "present",
    download: "Download CV",
  },
  de: {
    eyebrow: "Lebenslauf",
    contact: "Kontakt",
    born: "Geboren",
    languages: "Sprachen",
    education: "Ausbildung",
    community: "Community",
    experience: "Berufserfahrung",
    workHistory: "Beruflicher Werdegang",
    present: "heute",
    download: "CV herunterladen",
  },
} as const;

function formatDate(date: string, language: Language) {
  return new Intl.DateTimeFormat(language === "en" ? "en-GB" : "de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function CvDocument({ cv }: CvDocumentProps) {
  const [language, setLanguage] = useState<Language>("en");
  const contentRef = useRef<HTMLDivElement>(null);
  const copy = translations[language];
  const currentRole = cv.professional.find((entry) => !entry.to);
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `Nicolas-Martin-CV-${language.toUpperCase()}`,
    pageStyle: "@page { size: A4; margin: 8mm 0; } body { margin: 0; }",
  });

  return (
    <>
      <div ref={contentRef} className="cv-print">
        <div className="cv-print-header">
          <PageHeader
            eyebrow={copy.eyebrow}
            title={cv.contact.name}
            lead={
              currentRole?.[language === "en" ? "title_en" : "title_de"] ??
              "Machine learning engineer, open source maintainer and speaker."
            }
            actions={
              <div className="cv-controls mt-6 flex flex-wrap gap-3">
                <div className="flex overflow-hidden rounded-full border-3 border-ink bg-white">
                  {(["en", "de"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={language === item}
                      onClick={() => setLanguage(item)}
                      className={cn(
                        "cursor-pointer px-4 py-2 font-mono text-xs font-bold uppercase",
                        language === item && "bg-ink text-white",
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => handlePrint()}
                  className="cursor-pointer rounded-full border-3 border-ink bg-brand px-5 py-2 font-heading text-sm font-extrabold text-white shadow-[4px_4px_0_var(--color-brand-tint-strong)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
                >
                  {copy.download}
                </button>
              </div>
            }
            media={
              <Blob className="size-[min(23rem,82vw)] bg-yellow">
                <Image
                  src={cv.contact.image}
                  alt={cv.contact.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 980px) 82vw, 368px"
                />
              </Blob>
            }
          />
        </div>

        <section className="cv-print-layout wrap grid items-start gap-10 pb-24 lg:grid-cols-[19rem_1fr]">
          <aside className="cv-print-sidebar grid gap-7 lg:sticky lg:top-6">
            <Card shadow="peri" className="cv-print-card">
              <Eyebrow className="cv-print-section-title">
                {copy.contact}
              </Eyebrow>
              <div className="mt-5 grid gap-4 text-sm">
                <div>
                  <div className="font-mono text-xs text-muted uppercase">
                    {copy.born}
                  </div>
                  <div className="mt-1">
                    {formatDate(cv.contact.dob, language)}
                  </div>
                </div>
                <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
                <a href={`tel:${cv.contact.phone.replace(/\s/g, "")}`}>
                  {cv.contact.phone}
                </a>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                {[
                  cv.contact.web,
                  cv.contact.github,
                  cv.contact.linkedin,
                  cv.contact.twitter,
                ].map((href) => (
                  <a key={href} href={href} target="_blank">
                    {href.replace("https://", "")}
                  </a>
                ))}
              </div>
            </Card>

            <Card shadow="yellow" className="cv-print-card">
              <Eyebrow className="cv-print-section-title">
                {copy.languages}
              </Eyebrow>
              <div className="mt-5 grid gap-4">
                {cv.language.map((entry) => (
                  <div key={entry.lang_en}>
                    <h2 className="text-base">
                      {entry[language === "en" ? "lang_en" : "lang_de"]}
                    </h2>
                    <div className="mt-1 font-mono text-xs text-muted">
                      {entry[language === "en" ? "desc_en" : "desc_de"]}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card shadow="pink" className="cv-print-card">
              <Eyebrow className="cv-print-section-title">
                {copy.education}
              </Eyebrow>
              <div className="mt-5 grid gap-4">
                {cv.education.map((entry) => (
                  <div key={`${entry.from}-${entry.title_en}`}>
                    <Badge>
                      {entry.from}–{entry.to}
                    </Badge>
                    <h2 className="mt-3 text-base">
                      {entry[language === "en" ? "title_en" : "title_de"]}
                    </h2>
                  </div>
                ))}
              </div>
            </Card>
          </aside>

          <div className="cv-print-main min-w-0">
            <section>
              <Eyebrow className="cv-print-section-title">
                {copy.community}
              </Eyebrow>
              <Card shadow="yellow" className="cv-print-community mt-5">
                <div
                  className="cv-rich-text lead"
                  dangerouslySetInnerHTML={{ __html: cv.community[language] }}
                />
              </Card>
            </section>

            <section className="cv-print-experience mt-14">
              <Eyebrow className="cv-print-section-title">
                {copy.experience}
              </Eyebrow>
              <h2 className="section-title mt-5 mb-8">{copy.workHistory}</h2>
              <div className="grid gap-5">
                {cv.professional.map((entry, index) => (
                  <ListRow
                    key={`${entry.from}-${entry.title_en}`}
                    accent={index % 2 === 0 ? "teal" : "peri"}
                    className="cv-print-entry flex-col sm:flex-row"
                    lead={
                      <Badge className="w-fit shrink-0">
                        {entry.from}–{entry.to || copy.present}
                      </Badge>
                    }
                  >
                    <h3 className="text-xl">
                      {entry[language === "en" ? "title_en" : "title_de"]}
                    </h3>
                    {entry[language === "en" ? "desc_en" : "desc_de"] && (
                      <div
                        className="cv-rich-text mt-3"
                        dangerouslySetInnerHTML={{
                          __html:
                            entry[language === "en" ? "desc_en" : "desc_de"],
                        }}
                      />
                    )}
                  </ListRow>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
