import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Card, CardGrid } from '@theme';
import PageContent from '@comps/PageContent';
import ShareableTemplate from '@comps/ShareableTemplate';
import TalkCategories from '@comps/talks/TalkCategories';
import VideoSlider from '@comps/talks/VideoSlider';
import cn from '@utils/classnames';
import dayjs from '@utils/dayjs';
import { convertTalkLinks, formatDate, getTalksProps } from '@utils/helpers';
import { ApiTalksCategoriesI, ApiTalksSingleI, TALK_LINK } from '@utils/types';
import styles from './talks.module.css';

export const getStaticProps = async () => await getTalksProps();

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const {
    upcomingTalks,
    talksCategories,
  }: {
    upcomingTalks: Array<ApiTalksSingleI>;
    talksCategories: Array<ApiTalksCategoriesI>;
  } = React.useMemo(
    () =>
      pageData.categories.reduce(
        (acc, category) => ({
          upcomingTalks: [
            ...acc.upcomingTalks,
            ...category.items.filter((talk) =>
              dayjs(talk.date).isSameOrAfter(dayjs())
            ),
          ].map((talk) => ({
            ...talk,
            links: talk.links.filter((link) => link.key === TALK_LINK.INFOS),
          })),
          talksCategories: [
            ...acc.talksCategories,
            {
              ...category,
              items: category.items
                .filter((talk) => !dayjs(talk.date).isSameOrAfter(dayjs()))
                .map((talk) => ({
                  ...talk,
                  links: talk.links.filter(
                    (link) => link.key !== TALK_LINK.INFOS
                  ),
                })),
            },
          ],
        }),
        {
          upcomingTalks: [],
          talksCategories: [],
        }
      ),
    [pageData.categories]
  );

  return (
    <PageContent intro={pageData.intro}>
      <Head>
        <title key="title">Talks - Nico Martin</title>
        <meta
          name="description"
          content={pageData.metaDescription}
          key="description"
        />
        <meta property="og:title" content="Talks - Nico Martin" />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta
          property="og:image"
          content="https://shareable.nico.dev/render?url=https://nico.dev/talks"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Talks - Nico Martin" />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <meta
          name="twitter:image"
          content="https://shareable.nico.dev/render?url=https://nico.dev/talks&format=twitter"
        />
      </Head>
      <VideoSlider videos={pageData.videos} className={styles.videos} />
      {upcomingTalks.length !== 0 && (
        <React.Fragment>
          <h2 className={styles.heading}>Upcoming Talks</h2>
          <CardGrid className={cn(styles.pastTalks, styles.content)}>
            {upcomingTalks
              .sort((a, b) =>
                dayjs(a.date).isSameOrAfter(dayjs(b.date)) ? 1 : -1
              )
              .map(({ date, venue, title, links }) => (
                <Card
                  suptitle={formatDate(date)}
                  title={venue}
                  content={title}
                  links={
                    links.length !== 0
                      ? convertTalkLinks(links, title, venue)
                      : []
                  }
                />
              ))}
          </CardGrid>
          <h2 className={styles.heading}>Past Talks</h2>
        </React.Fragment>
      )}
      <TalkCategories categories={talksCategories} className={styles.content} />
      <ShareableTemplate
        content="<p>I speak at conferences and meetups around the world about WebML, Transformers.js, and making AI accessible in the browser. Here's where I've been recently.</p>"
        link="nico.dev/talks"
      />
    </PageContent>
  );
};
