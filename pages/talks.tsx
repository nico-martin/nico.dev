import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Card, CardGrid } from '@theme';
import PageContent from '@comps/PageContent';
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
    </PageContent>
  );
};
