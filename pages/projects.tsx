import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Card, CardBig, CardGrid } from '@theme';
import PageContent from '@comps/PageContent';
import { getProjectsProps } from '@utils/helpers';

export const getStaticProps = async () => await getProjectsProps();

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <PageContent>
    <Head>
      <title key="title">Projects - Nico Martin</title>
      <meta name="description" content={pageData.excerpt} key="description" />
    </Head>
    <CardGrid onePerRow>
      {pageData.items.map(({ title, description, image, links }) => (
        <CardBig
          title={title}
          image={image}
          content={description}
          links={links}
        />
      ))}
    </CardGrid>
  </PageContent>
);
