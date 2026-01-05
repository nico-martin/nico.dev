import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import PageContent from '@comps/PageContent';
import ShareableTemplate from '@comps/ShareableTemplate';
import { getPageProps } from '@utils/helpers';

export const getStaticProps = async () => await getPageProps('home');

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <React.Fragment>
    <Head>
      <title key="title">Nico Martin</title>
      <meta
        name="description"
        content={pageData.metaDescription}
        key="description"
      />
      <meta property="og:title" content="Nico Martin" />
      <meta property="og:description" content={pageData.metaDescription} />
      <meta
        property="og:image"
        content="https://shareable.nico.dev/render?url=https://nico.dev"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Nico Martin" />
      <meta name="twitter:description" content={pageData.metaDescription} />
      <meta
        name="twitter:image"
        content="https://shareable.nico.dev/render?url=https://nico.dev&format=twitter"
      />
    </Head>
    <PageContent html={pageData.content} intro={pageData.intro} />
    <ShareableTemplate content={pageData.metaDescription} link="nico.dev" />
  </React.Fragment>
);
