import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import PageContent from '@comps/PageContent';
import { getPageProps } from '@utils/helpers';

export const getStaticProps = async () => await getPageProps('home');

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <PageContent html={pageData.content} />
);
