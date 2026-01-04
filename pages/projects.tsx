import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Card, CardBig, CardGrid } from '@theme';
import PageContent from '@comps/PageContent';
import ShareableTemplate from '@comps/ShareableTemplate';
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
      <meta property="og:title" content="Projects - Nico Martin" />
      <meta property="og:description" content={pageData.metaDescription} />
      <meta
        property="og:image"
        content="https://shareable.nico.dev/render?url=https://nico.dev/projects"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Projects - Nico Martin" />
      <meta name="twitter:description" content={pageData.metaDescription} />
      <meta
        name="twitter:image"
        content="https://shareable.nico.dev/render?url=https://nico.dev/projects&format=twitter"
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
    <ShareableTemplate
      content="<p>I love writing software. And whenever I see something exciting, I build a little side project to familiarise myself with the technology.</p>"
      link="nico.dev/projects"
    />
  </PageContent>
);
