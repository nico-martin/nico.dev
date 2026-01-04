import React from 'react';
import PageContent from '@comps/PageContent';

export default () => {
  return (
    <PageContent title="404: Page not found">
      <>
        <h1 style={{ fontSize: '2rem', margin: '0 0 1.5rem 0' }}>
          Page not found
        </h1>
        <p>
          The page you're looking for doesn't exist. You might have followed an
          old link or typed the address incorrectly.
        </p>
        <p style={{ marginTop: '1.5rem' }}>
          <a href="/" style={{ fontWeight: 'bold' }}>
            Go back to the homepage
          </a>
        </p>
      </>
    </PageContent>
  );
};
