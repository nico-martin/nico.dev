import React from 'react';
import Head from 'next/head';
import PageLayout from '@comps/PageLayout';
import { TranslationsProvider } from '@utils/cvTranslations';
import '../styles/app.css';

/**
 * TODO:
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
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="./favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="./favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="./favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="./favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="./favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="./favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="./favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="./favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="./favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="./manifest.json" />
        <meta name="msapplication-TileColor" content="#009d89" />
        <meta name="theme-color" content="#009d89" />
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </TranslationsProvider>
  );
};
