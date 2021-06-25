import React from 'react';
import PageLayout from '@comps/PageLayout';
import '../styles/app.css';

export default ({ Component, pageProps }) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};
