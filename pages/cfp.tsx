import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import PageContent from '@comps/PageContent';
import CopyP from '@comps/cfp/CopyP';
import Papers from '@comps/cfp/Papers';
import VersionsSelect from '@comps/cfp/VersionsSelect';
import { getCfp } from '@utils/helpers';
import styles from './cfp.module.css';

export const getStaticProps = async () => await getCfp();

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => (
  <React.Fragment>
    <Head>
      <title key="title">CFP - Nico Martin</title>
      <meta
        name="description"
        //content={pageData.metaDescription}
        key="description"
      />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
    <PageContent
      title="CFP"
      //html={pageData.content}
      //intro={pageData.intro}
      classNameContent={styles.content}
    >
      <h2>About</h2>
      <VersionsSelect
        options={pageData.about.map((version) => ({
          title: version.title,
          content: version.text,
        }))}
      />
      <h2>Links</h2>
      <div className={styles.links}>
        {pageData.links.map((link) => (
          <div className={styles.link}>
            <span>{link.title}</span>
            <CopyP content={link.url} />
          </div>
        ))}
      </div>
      <h2>Images</h2>
      <div className={styles.images}>
        {pageData.portrait.map((image, i) => (
          <div className={styles.image}>
            <img src={image} className={styles.img} />
            <CopyP content={image} key={i} />
          </div>
        ))}
      </div>
      <h2>Papers</h2>
      <Papers papers={pageData.papers} />
    </PageContent>
  </React.Fragment>
);
