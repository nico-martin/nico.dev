import type { ReactNode } from "react";

import PageHeader from "@/components/PageHeader";

export default function LegalPage({
  title,
  intro,
  eyebrow = "Legal",
  children,
}: {
  title: string;
  intro: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lead={intro} />
      <article className="legal-content wrap mb-24 max-w-4xl">
        {children}
      </article>
    </>
  );
}
