import React from 'react';
import Head from 'next/head';
import PageContent from '@comps/PageContent';

export default () => (
  <React.Fragment>
    <Head>
      <title key="title">Facebook Apps data deletion - Nico Martin</title>
      <meta
        name="description"
        content="data deletion for Facebook apps"
        key="description"
      />
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
    </Head>
    <PageContent
      title="Facebook data deletion"
      intro="data deletion for Facebook applications developed by Nico Martin"
    >
      <h1 id="how-to-delete-your-data">How to Delete Your Data</h1>
      <p>
        <strong>Last Updated:</strong> 19.07.2025
      </p>
      <h2 id="quick-actions">Quick Actions</h2>
      <h3 id="remove-app-access-from-facebook">
        Remove App Access from Facebook
      </h3>
      <ol>
        <li>
          <strong>Go to Facebook Settings:</strong> Visit{' '}
          <a href="https://www.facebook.com/settings?tab=applications">
            Facebook App Settings
          </a>
        </li>
        <li>
          <strong>Find Our App:</strong> Look for the app in your app list
        </li>
        <li>
          <strong>Remove Access:</strong> Click &quot;Remove&quot; or the
          &quot;X&quot; button next to our app
        </li>
        <li>
          <strong>Confirm:</strong> Click &quot;Remove&quot; when prompted
        </li>
      </ol>
      <h2 id="what-gets-deleted">What Gets Deleted</h2>
      <p>When you delete your data, we remove:</p>
      <ul>
        <li>Your profile information</li>
        <li>All content you created in our app</li>
        <li>Your app preferences and settings</li>
        <li>Usage history and analytics data</li>
        <li>Any messages or communications</li>
      </ul>
      <h2 id="data-deletion-timeline">Data Deletion Timeline</h2>
      <ul>
        <li>
          <strong>Immediate:</strong> Your account becomes inaccessible
        </li>
        <li>
          <strong>Within 7 days:</strong> Your data is removed from our active
          systems
        </li>
        <li>
          <strong>Within 30 days:</strong> All data is permanently deleted from
          our backups
        </li>
        <li>
          <strong>Exceptions:</strong> Some data may be retained if required by
          law
        </li>
      </ul>
      <h2 id="alternative-options">Alternative Options</h2>
      <h3 id="temporarily-deactivate">Temporarily Deactivate</h3>
      <p>If you&#39;re not ready to permanently delete everything:</p>
      <ol>
        <li>Go to app settings</li>
        <li>Select &quot;Deactivate Account&quot;</li>
        <li>Your data remains but account becomes inactive</li>
        <li>You can reactivate anytime within 90 days</li>
      </ol>
      <h3 id="download-your-data-first">Download Your Data First</h3>
      <p>Before deleting, you can download your data:</p>
      <ol>
        <li>Go to app settings</li>
        <li>Click &quot;Download My Data&quot;</li>
        <li>Select what data to include</li>
        <li>We&#39;ll email you a download link within 48 hours</li>
      </ol>
      <h2 id="need-help-">Need Help?</h2>
      <h3 id="contact-support">Contact Support</h3>
      <p>If you can&#39;t delete your data through the app:</p>
      <ul>
        <li>
          <strong>Email:</strong> privacy@nico.dev
        </li>
        <li>
          <strong>Subject:</strong> &quot;Data Deletion Request&quot;
        </li>
        <li>
          <strong>Include:</strong> Your Facebook user ID or email address
        </li>
      </ul>
      <h3 id="manual-deletion-request">Manual Deletion Request</h3>
      <p>Send us an email with:</p>
      <ul>
        <li>Your full name</li>
        <li>Email address associated with the account</li>
        <li>Facebook profile URL (if available)</li>
        <li>Reason for deletion (optional)</li>
      </ul>
      <p>We&#39;ll process manual requests within 7 business days.</p>
      <h2 id="verification-process">Verification Process</h2>
      <p>For security, we may ask you to verify your identity by:</p>
      <ul>
        <li>Logging into your Facebook account</li>
        <li>Providing your registered email address</li>
        <li>Answering a security question</li>
      </ul>
      <h2 id="what-happens-after-deletion">What Happens After Deletion</h2>
      <ul>
        <li>You&#39;ll receive a confirmation email</li>
        <li>All app permissions are automatically revoked</li>
        <li>You won&#39;t receive any further communications</li>
        <li>Your data cannot be recovered after deletion</li>
      </ul>
      <h2 id="data-we-cannot-delete">Data We Cannot Delete</h2>
      <p>Some information may be retained for legal compliance:</p>
      <ul>
        <li>Financial transaction records (if applicable)</li>
        <li>Security logs for fraud prevention</li>
        <li>Data required by law enforcement</li>
        <li>Aggregated, anonymized analytics data</li>
      </ul>
      <h2 id="facebook-s-role">Facebook&#39;s Role</h2>
      <p>Remember that Facebook may also have:</p>
      <ul>
        <li>Basic profile information you shared</li>
        <li>App installation records</li>
        <li>Usage analytics</li>
      </ul>
      <p>
        To delete this data, you must also remove our app from your Facebook
        settings.
      </p>
      <h2 id="questions-and-support">Questions and Support</h2>
      <h3 id="frequently-asked-questions">Frequently Asked Questions</h3>
      <p>
        <strong>Q: Can I recover my data after deletion?</strong>
      </p>
      <p>A: No, deletion is permanent and cannot be undone.</p>
      <p>
        <strong>Q: How long does deletion take?</strong>
      </p>
      <p>
        A: Your account is immediately deactivated, but complete deletion takes
        up to 30 days.
      </p>
      <p>
        <strong>Q: What if I change my mind?</strong>
      </p>
      <p>A: You have 7 days to contact us to cancel the deletion request.</p>
      <h3 id="still-need-help-">Still Need Help?</h3>
      <p>Contact our support team:</p>
      <ul>
        <li>
          <strong>Email:</strong> privacy@nico.dev
        </li>
        <li>
          <strong>Response Time:</strong> Within 48 hours
        </li>
        <li>
          <strong>Available:</strong> Monday-Friday, 9 AM - 5 PM EST
        </li>
      </ul>
    </PageContent>
  </React.Fragment>
);
