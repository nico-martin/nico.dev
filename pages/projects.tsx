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
  <PageContent intro={pageData.intro}>
    <Head>
      <title key="title">Projects - Nico Martin</title>
      <meta
        name="description"
        content={pageData.metaDescription}
        key="description"
      />
    </Head>
    <CardGrid onePerRow gap="big">
      {pageData.items.map(
        ({ title, description, image, imagePosition, links }) => (
          <CardBig
            title={title}
            image={image}
            imagePosition={imagePosition}
            content={description}
            links={links}
          />
        )
      )}
    </CardGrid>
  </PageContent>
);
