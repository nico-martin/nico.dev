import React from 'react';
import Head from 'next/head';
import PageLayout from '@comps/PageLayout';
import { TranslationsProvider } from '@utils/cvTranslations';
import '../styles/app.css';

/**
 * TODO:
 * add favicon
 * add manifest.json: https://github.com/shadowwalker/next-pwa#step-2-add-manifest-file-example
 * add additional metas theme-color
 * create and add og:image and twiter:image
 **/

export default ({ Component, pageProps }) => {
  return (
    <TranslationsProvider>
      <Head>
        <title key="title">Nico Martin</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=yes"
          key="viewport"
        />
        <meta name="robots" content="all" key="robots" />
        <link href="./font/stylesheet.css" rel="stylesheet" />
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </TranslationsProvider>
  );
};
