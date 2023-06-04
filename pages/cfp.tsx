import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import PageContent from '@comps/PageContent';
import { getPageProps } from '@utils/helpers';

export const getStaticProps = async () => ({});

export default ({}: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <React.Fragment>
    <Head>
      <title key="title">CFP - Nico Martin</title>
      <meta
        name="description"
        //content={pageData.metaDescription}
        key="description"
      />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <PageContent
      title="CFP"
      //html={pageData.content}
      //intro={pageData.intro}
    />
  </React.Fragment>
);
