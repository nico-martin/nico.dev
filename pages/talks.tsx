import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import { Card, CardGrid } from '@theme';
import PageContent from '@comps/PageContent';
import dayjs from '@utils/dayjs';
import { formatDate, getTalkProps } from '@utils/helpers';

export const getStaticProps = async () => await getTalkProps();

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const upcomingTalks = React.useMemo(
    () => pageData.filter(({ date }) => dayjs(date).isSameOrAfter(dayjs())),
    [pageData]
  );

  const pastTalks = React.useMemo(
    () => pageData.filter(({ date }) => !dayjs(date).isSameOrAfter(dayjs())),
    [pageData]
  );

  const cardElement = ({ date, venue, title, infos, slides, video }) => (
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
    <PageContent>
      {upcomingTalks.length >= 1 && (
        <React.Fragment>
          <h2>Upcoming Talks</h2>
          <CardGrid>{upcomingTalks.map((talk) => cardElement(talk))}</CardGrid>
          <h2>Past Talks</h2>
        </React.Fragment>
      )}
      <CardGrid>{pastTalks.map((talk) => cardElement(talk))}</CardGrid>
    </PageContent>
  );
};
