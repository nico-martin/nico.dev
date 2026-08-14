import type { Metadata } from "next";

import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Legal notice - Nico Martin" },
  description: "Legal notice for nico.dev.",
};

export default function LegalPageContent() {
  return (
    <LegalPage
      title="Legal notice"
      intro="Responsible for the content of this website"
    >
      <p>
        sandkopf GmbH
        <br />
        c/o Nicolas Martin
      </p>
      <p>
        <strong>UID:</strong> CHE-176.762.083
      </p>
      <p>
        <a href="mailto:mail@nico.dev">mail@nico.dev</a>
      </p>
      <h2>Disclaimer</h2>
      <p>
        The texts and contents of this site were created with great care.
        Nevertheless, I cannot give any guarantee with regard to the
        correctness, accuracy, up-to-dateness, reliability and completeness of
        the information.
      </p>
      <h2>Copyrights</h2>
      <p>
        This project is published under an open source license:{" "}
        <a target="_blank" href="https://github.com/nico-martin/nico.dev">
          github.com/nico-martin/nico.dev
        </a>
      </p>
      <p>
        Portrait by{" "}
        <a target="_blank" href="https://www.janfrattini.ch/">
          Jan Frattini
        </a>
        .
      </p>
    </LegalPage>
  );
}
