import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Card, CardGrid, Video } from '@theme';
import PageContent from '@comps/PageContent';
import TalkCategories from '@comps/talks/TalkCategories';
import VideoSlider from '@comps/talks/VideoSlider';
import dayjs from '@utils/dayjs';
import { formatDate, getTalksProps } from '@utils/helpers';
import { ApiTalksCategoriesI, ApiTalksSingleI } from '@utils/types';
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
          ],
          talksCategories: [
            ...acc.talksCategories,
            {
              ...category,
              items: category.items.filter(
                (talk) => !dayjs(talk.date).isSameOrAfter(dayjs())
              ),
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
      <VideoSlider videos={pageData.videos} />
      {upcomingTalks.length !== 0 && (
        <React.Fragment>
          <h2 className={styles.heading}>Upcoming Talks</h2>
          <CardGrid>
            {upcomingTalks.map(({ date, venue, title, links }) => (
              <Card
                suptitle={formatDate(date)}
                title={venue}
                content={title}
                links={links.map((link) => ({
                  url: link.value,
                  ...(link.key === 'video'
                    ? {
                        label: 'Video',
                        title: `Nico's Video for "${title}" at ${venue}`,
                      }
                    : link.key === 'infos'
                    ? {
                        label: 'Infos',
                        title: `More informations about Nico's Talk at ${venue}`,
                      }
                    : link.key === 'slides'
                    ? {
                        label: 'Slides',
                        title: `Nico's Slides for "${title}" at ${venue}`,
                      }
                    : { label: '', title: '' }),
                }))}
              />
            ))}
          </CardGrid>
          <h2 className={styles.heading}>Past Talks</h2>
        </React.Fragment>
      )}
      <TalkCategories categories={talksCategories} />
    </PageContent>
  );
  /*
  const upcomingTalks = React.useMemo(
    () =>
      pageData.items.filter(({ date }) => dayjs(date).isSameOrAfter(dayjs())),
    [pageData]
  );

  const pastTalks = React.useMemo(
    () =>
      pageData.items.filter(({ date }) => !dayjs(date).isSameOrAfter(dayjs())),
    [pageData]
  );

  const CardElement = ({ date, venue, title, infos, slides, video }) => (
    <Card
      suptitle={formatDate(date)}
      title={venue}
      content={title}
      links={[
        ...(infos !== ''
          ? [
              {
                url: infos,
                label: 'Infos',
                title: `More informations about Nico's Talk at ${venue}`,
              },
            ]
          : []),
        ...(slides !== ''
          ? [
              {
                url: slides,
                label: 'Slides',
                title: `Nico's Slides for "${title}" at ${venue}`,
              },
            ]
          : []),
        ...(video !== ''
          ? [
              {
                url: video,
                label: 'Video',
                title: `Nico's Slides for "${title}" at ${venue}`,
              },
            ]
          : []),
      ]}
    />
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
      {upcomingTalks.length >= 1 && (
        <React.Fragment>
          <h2>Upcoming Talks</h2>
          <CardGrid>
            {upcomingTalks.map(
              ({ date, venue, title, infos, slides, video }) => (
                <CardElement
                  date={date}
                  venue={venue}
                  title={title}
                  infos={infos}
                  slides={slides}
                  video={video}
                />
              )
            )}
          </CardGrid>
          <h2>Past Talks</h2>
        </React.Fragment>
      )}
      <CardGrid>
        {pastTalks.map(({ date, venue, title, infos, slides, video }) => (
          <CardElement
            date={date}
            venue={venue}
            title={title}
            infos={infos}
            slides={slides}
            video={video}
          />
        ))}
      </CardGrid>
    </PageContent>
  );*/
};
