import React from 'react';
import PageContent from '@comps/PageContent';
import { apiGet } from '@utils/apiFetch';
import { ApiPageI } from '@utils/types';

export default (props) => {
  return (
    <PageContent title={props.title}>
      <p>Content</p>
    </PageContent>
  );
};

export const getServerSideProps = async () => {
  const api = await apiGet<ApiPageI>(
    'https://wp.nico.dev/wp-json/nico/v1/page/home'
  );

  return {
    props: {
      title: api.title,
    },
  };
};
