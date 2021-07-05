import React from 'react';
import PageLayout from '@comps/PageLayout';
import { TranslationsProvider } from '@utils/cvTranslations';
import '../styles/app.css';

export default ({ Component, pageProps }) => {
  return (
    <TranslationsProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </TranslationsProvider>
  );
};
