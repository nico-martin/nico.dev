import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import PageContent from '@comps/PageContent';
import { LANGUAGES, useLanguage, __ } from '@utils/cvTranslations';
import { getCVProps } from '@utils/helpers';

export const getStaticProps = async () => await getCVProps();

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [language, setLanguage] = useLanguage();
  return (
    <PageContent title="Curriculum Vitae">
      {__('language')}:{' '}
      {Object.keys(LANGUAGES).map((lang) => (
        <button onClick={() => setLanguage(lang)}>
          {__(`language.${lang}`)}
        </button>
      ))}
    </PageContent>
  );
};
