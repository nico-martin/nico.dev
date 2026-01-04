import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Card, CardGrid } from '@theme';
import PageContent from '@comps/PageContent';
import ShareableTemplate from '@comps/ShareableTemplate';
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
      <meta property="og:title" content="Blog - Nico Martin" />
      <meta property="og:description" content={pageData.metaDescription} />
      <meta
        property="og:image"
        content="https://shareable.nico.dev/render?url=https://nico.dev/blog"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog - Nico Martin" />
      <meta name="twitter:description" content={pageData.metaDescription} />
      <meta
        name="twitter:image"
        content="https://shareable.nico.dev/render?url=https://nico.dev/blog&format=twitter"
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
    <ShareableTemplate
      content="<p>Some of the posts and articles I've written over the past years. I don't blog often, but when I do, it's usually about WebML, Transformers.js, or building AI features for the browser.</p>"
      link="nico.dev/blog"
    />
  </PageContent>
);
