import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Card, CardGrid } from '@theme';
import PageContent from '@comps/PageContent';
import { formatDate, getBlogProps } from '@utils/helpers';

export const getStaticProps = async () => await getBlogProps();

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <PageContent intro={pageData.intro}>
    <Head>
      <title key="title">Blog - Nico Martin</title>
      <meta
        name="description"
        content={pageData.metaDescription}
        key="description"
      />
    </Head>
    <CardGrid>
      {pageData.items.map(({ title, abstract, link, date, publisher }) => (
        <Card
          title={title}
          suptitle={`${formatDate(date)} on ${publisher}`}
          content={abstract}
          links={[
            {
              url: link,
              label: 'continue',
              title: `Continue reading "${title}" by Nico Martin on ${publisher}`,
            },
          ]}
        />
      ))}
    </CardGrid>
  </PageContent>
);
