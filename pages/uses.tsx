import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import PageContent from '@comps/PageContent';
import { getPageProps } from '@utils/helpers';

export const getStaticProps = async () => await getPageProps('uses');

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return <PageContent title={pageData.title} html={pageData.content} />;
};
