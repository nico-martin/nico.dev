import React from 'react';
import Head from 'next/head';
import PageContent from '@comps/PageContent';

export default () => (
  <React.Fragment>
    <Head>
      <title key="title">Facebook Apps Privacy Policy - Nico Martin</title>
      <meta
        name="description"
        content="Privacy policy for Facebook apps"
        key="description"
      />
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
    </Head>
    <PageContent
      title="Facebook privacy policy"
      intro="Privacy policy for Facebook applications developed by Nico Martin"
    >
      <p>
        <strong>Last Updated:</strong> 19.07.2025
      </p>
      <h2 id="1-information-we-collect">1. Information We Collect</h2>
      <h3 id="from-facebook">From Facebook</h3>
      <ul>
        <li>Basic profile information (name, profile picture, user ID)</li>
        <li>Email address (with permission)</li>
        <li>Friend list (with permission)</li>
        <li>Posts and content (with permission)</li>
      </ul>
      <h3 id="from-you">From You</h3>
      <ul>
        <li>Account settings and preferences</li>
        <li>Content you create in our app</li>
        <li>Support communications</li>
      </ul>
      <h3 id="automatically">Automatically</h3>
      <ul>
        <li>Device and browser information</li>
        <li>Usage data and app interactions</li>
        <li>IP address and access logs</li>
      </ul>
      <h2 id="2-how-we-use-your-information">2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and improve our app functionality</li>
        <li>Personalize your experience</li>
        <li>Communicate updates and support</li>
        <li>Ensure security and prevent fraud</li>
        <li>Comply with legal requirements</li>
      </ul>
      <h2 id="3-information-sharing">3. Information Sharing</h2>
      <p>
        <strong>We do not sell your data.</strong>
      </p>
      <p>We may share information only when:</p>
      <ul>
        <li>Required by law or legal process</li>
        <li>Necessary to protect safety or security</li>
        <li>With service providers who help operate our app</li>
        <li>You provide explicit consent</li>
        <li>During business transfers (mergers, acquisitions)</li>
      </ul>
      <h2 id="4-your-rights">4. Your Rights</h2>
      <p>You can:</p>
      <ul>
        <li>Manage Facebook permissions in your Facebook settings</li>
        <li>Access, correct, or delete your personal information</li>
        <li>Request data portability or restrict processing</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p>To exercise these rights, contact us at privacy@nico.dev.</p>
      <h2 id="5-data-security">5. Data Security</h2>
      <p>
        We protect your information using encryption, access controls, and
        security monitoring. However, no internet transmission is completely
        secure.
      </p>
      <h2 id="6-data-retention">6. Data Retention</h2>
      <p>
        We keep your information only as long as necessary to provide services
        or comply with legal obligations. Account data is deleted within 30 days
        of account deletion.
      </p>
      <h2 id="7-international-transfers">7. International Transfers</h2>
      <p>
        Your data may be processed in other countries with appropriate legal
        safeguards in place.
      </p>
      <h2 id="8-children-s-privacy">8. Children&#39;s Privacy</h2>
      <p>
        Our app is not for users under 13. We do not knowingly collect
        information from children under 13.
      </p>
      <h2 id="9-changes-to-this-policy">9. Changes to This Policy</h2>
      <p>
        We may update this policy and will notify users of material changes.
        Continued use means acceptance of updates.
      </p>
      <h2 id="10-contact-us">10. Contact Us</h2>
      <p>Questions about this policy? Contact us:</p>
      <ul>
        <li>
          <strong>Email:</strong> privacy@nico.dev
        </li>
        <li>
          <strong>Address:</strong>
          <br />
          sandkopf GmbH
          <br />
          c/o Nicolas Martin
          <br />
          Marquard-Wocher Strasse 11
          <br />
          3600 Thun
        </li>
      </ul>
    </PageContent>
  </React.Fragment>
);
