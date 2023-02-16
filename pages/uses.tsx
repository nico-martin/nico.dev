import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import PageContent from '@comps/PageContent';
import { getPageProps } from '@utils/helpers';

export const getStaticProps = async () => await getPageProps('uses');

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <React.Fragment>
    <Head>
      <title key="title">{pageData.title} - Nico Martin</title>
      <meta
        name="description"
        content={pageData.metaDescription}
        key="description"
      />
    </Head>
    <PageContent
      title={pageData.title}
      html={pageData.content}
      intro={pageData.intro}
    />
  </React.Fragment>
);
