import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import { Card, CardGrid } from '@theme';
import PageContent from '@comps/PageContent';
import { getBlogProps } from '@utils/helpers';

export const getStaticProps = async () => await getBlogProps();

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <PageContent>
      <CardGrid>
        {pageData.map(({ title, abstract, link, date, publisher }) => (
          <Card
            title={title}
            suptitle={`${date} on ${publisher}`}
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
};
