import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Card, CardGrid } from '@theme';
import PageContent from '@comps/PageContent';
import { getCodeProps } from '@utils/helpers';

export const getStaticProps = async () => await getCodeProps();

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <PageContent>
    <Head>
      <title key="title">Code - Nico Martin</title>
      <meta name="description" content={pageData.excerpt} key="description" />
    </Head>
    <CardGrid>
      {pageData.items.map(
        ({ title, tags, description, codeTitle, code, demo }) => (
          <Card
            title={title}
            subtitle={tags}
            content={description}
            links={[
              ...(code !== ''
                ? [
                    {
                      url: code,
                      label: codeTitle,
                      title: `View the code of "${title}" on ${codeTitle}}`,
                    },
                  ]
                : []),
              ...(demo !== ''
                ? [
                    {
                      url: demo,
                      label: 'Demo',
                      title: `View the demo of "${title}"`,
                    },
                  ]
                : []),
            ]}
          />
        )
      )}
    </CardGrid>
  </PageContent>
);
