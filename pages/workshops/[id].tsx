import React from 'react';
import Head from 'next/head';
import { Card, CardBig, CardGrid, Icon, Video } from '@theme';
import PageContent from '@comps/PageContent';
import cn from '@utils/classnames';
import dayjs from '@utils/dayjs';
import { formatDate, getWorkshopsProps, nl2br } from '@utils/helpers';
import { Workshop, WorkshopPublic } from '@utils/types';
import styles from './[id].module.css';

export const getStaticProps = async ({ params }) => {
  const workshopsPage = await getWorkshopsProps();
  const workshop = workshopsPage.props.pageData.workshops.find(
    (w) => w.slug === params.id
  );
  if (!workshop) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      workshop,
    },
  };
};

export async function getStaticPaths() {
  const page = await getWorkshopsProps();

  const paths = page.props.pageData.workshops.map((workshop) => ({
    params: { id: workshop.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default ({ workshop }: { workshop: Workshop }) => {
  const upcomingWorkshops: Array<WorkshopPublic> = React.useMemo(
    () => workshop.publics.filter((p) => dayjs(p.date).isSameOrAfter(dayjs())),
    []
  );
  return (
    <PageContent
      //intro={workshop.intro}
      title={workshop.title}
      suptitle="Workshop"
    >
      <Head>
        <title key="title">{workshop.title} - Workshops - Nico Martin</title>
        <meta name="description" content={workshop.intro} key="description" />
      </Head>
      {Boolean(workshop.video.url) && (
        <Video
          className={cn(styles.video, {
            //[styles.videoActive]: i === activeElement,
          })}
          url={workshop.video.url}
          poster={workshop.video.poster}
          videoWidth={workshop.video.width || undefined}
          videoHeight={workshop.video.height || undefined}
          title={workshop.video.title}
        />
      )}
      <p
        className={styles.goalsIntro}
        dangerouslySetInnerHTML={{ __html: nl2br(workshop.intro) }}
      />
      <div className={styles.cover}>
        <p className={styles.coverTitle}>
          After this workshop, you will be able to...
        </p>
        <ol className={styles.coverList}>
          {workshop.covers.map(({ title, description }) => (
            <li>
              <b>{title}</b> {description}
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.contentTitle}>Who is this workshop for?</h3>
          <div
            className={styles.contentElement}
            dangerouslySetInnerHTML={{ __html: workshop.audience }}
          />
        </div>
        <div>
          <h3 className={styles.contentTitle}>Requirements</h3>
          <div
            className={styles.contentElement}
            dangerouslySetInnerHTML={{ __html: workshop.requirements }}
          />
        </div>
        <div>
          {workshop.facts.map(({ title, description }) => (
            <p>
              <b>{title}:</b> {description}
            </p>
          ))}
        </div>
      </div>
      {upcomingWorkshops.length !== 0 && (
        <div className={styles.publicWorkshops}>
          <h2 className={styles.heading}>Upcoming public workshops</h2>
          <CardGrid className={styles.publicWorkshopsList}>
            {upcomingWorkshops
              .sort((a, b) =>
                dayjs(a.date).isSameOrAfter(dayjs(b.date)) ? 1 : -1
              )
              .map(({ date, venue, title, url }) => (
                <Card
                  suptitle={formatDate(date)}
                  title={venue}
                  content={title}
                  links={[
                    {
                      label: 'Register here',
                      title: `More informations about Nico's workshop at ${venue}`,
                      icon: 'informationSlabCircleOutline',
                      url,
                    },
                  ]}
                />
              ))}
          </CardGrid>
        </div>
      )}
      {Boolean(workshop.cta) && (
        <div className={styles.getInTouch}>
          <p dangerouslySetInnerHTML={{ __html: nl2br(workshop.cta) }} />
          <p>
            <a
              title={`get in touch to have "${workshop.title}" at your company`}
              className={styles.getInTouchLink}
              href="mailto:mail@nico.dev"
            >
              <Icon icon="arrow" className={styles.getInTouchIcon} />
              mail@nico.dev
            </a>
          </p>
        </div>
      )}
      <h2></h2>
    </PageContent>
  );
};
