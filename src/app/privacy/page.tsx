import type { Metadata } from "next";

import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Privacy - Nico Martin" },
  description: "Privacy information for nico.dev.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      intro="How analytics and personal data are handled on nico.dev."
    >
      <h2>Analytics</h2>
      <p>
        This website uses Matomo to understand, in aggregate, how visitors use
        the site. Matomo runs on my own infrastructure and is configured for
        non-personalized, cookieless analytics.
      </p>
      <p>
        No analytics cookies are stored in your browser. The collected data is
        not used to create personal profiles, for advertising, or shared with
        third-party analytics providers. Browser Do Not Track settings are
        respected.
      </p>
      <h2>Contact</h2>
      <p>
        sandkopf GmbH
        <br />
        c/o Nicolas Martin
        <br />
        <a href="mailto:mail@nico.dev">mail@nico.dev</a>
      </p>
    </LegalPage>
  );
}
