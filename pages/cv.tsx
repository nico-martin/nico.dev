import React from 'react';
import { useReactToPrint } from 'react-to-print';
import { InferGetServerSidePropsType } from 'next';
import { Button } from '@theme';
import PageContent from '@comps/PageContent';
import LanguageSwitcher from '@comps/translations/LanguageSwitcher';
import cn from '@utils/classnames';
import { useLanguage, __ } from '@utils/cvTranslations';
import { getCVProps, maybeConvertStringToAnchor } from '@utils/helpers';
import styles from './cv.module.css';

export const getStaticProps = async () => await getCVProps();

export default ({
  pageData,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
    documentTitle: 'Curriculum Vitae - Nico Martin',
    bodyClass: styles.print,
  });
  const [language] = useLanguage();

  return (
    <PageContent
      title="Curriculum Vitae"
      titleRight={
        <Button icon="print" onClick={handlePrint}>
          {__('cv.print')}
        </Button>
      }
    >
      <LanguageSwitcher />
      <div ref={componentRef}>
        <h1 className={styles.printTitle}>
          Nico Martin<span>Curriculum Vitae</span>
        </h1>
        {pageData.contact && (
          <div className={cn(styles.element)}>
            <table className={cn(styles.table, styles.tableContact)}>
              {Object.entries(pageData.contact).map(([key, content]) => (
                <tr key={key}>
                  <th>{__(`cv.contact.${key}`)}</th>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: maybeConvertStringToAnchor(content),
                    }}
                  />
                </tr>
              ))}
            </table>
          </div>
        )}
        {pageData.language && (
          <div className={cn(styles.element)}>
            <h2 className={cn(styles.title)}>{__('cv.language')}</h2>
            <table className={cn(styles.table, styles.tableLanguage)}>
              {pageData.language.map((lang) => (
                <tr>
                  <th>{lang[`lang_${language}`]}</th>
                  <td>{lang[`desc_${language}`]}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
        {pageData.community && (
          <div className={cn(styles.element)}>
            <h2 className={cn(styles.title)}>{__('cv.community')}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: pageData.community[language],
              }}
            />
          </div>
        )}
        {pageData.professional && (
          <div className={cn(styles.element, styles.pagebreak)}>
            <h2 className={cn(styles.title)}>{__('cv.professional')}</h2>
            <table className={cn(styles.table, styles.tableProfessional)}>
              {pageData.professional.map((profession, i) => (
                <tr key={i}>
                  <td>
                    {profession.from}{' '}
                    {profession.to !== profession.from &&
                      (profession.to === ''
                        ? ` - ${__('cv.to.now')}`
                        : ` - ${profession.to}`)}
                  </td>
                  <td>
                    {profession[`title_${language}`]
                      .split(', ')
                      .map((e, i) => (i === 0 ? <b>{e}</b> : ', ' + e))}
                    <div
                      className={styles.content}
                      dangerouslySetInnerHTML={{
                        __html: profession[`desc_${language}`],
                      }}
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}
        {pageData.education && (
          <div className={cn(styles.element, styles.pagebreak)}>
            <h2 className={cn(styles.title)}>{__('cv.education')}</h2>
            <table className={cn(styles.table, styles.tableEducation)}>
              {pageData.education.map((education, i) => (
                <tr key={i}>
                  <td>
                    {education.from}{' '}
                    {education.to !== education.from &&
                      (education.to === ''
                        ? ` - ${__('cv.to.now')}`
                        : ` - ${education.to}`)}
                  </td>
                  <td>{education[`title_${language}`]}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </PageContent>
  );
};
