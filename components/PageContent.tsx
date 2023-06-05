import React from 'react';
import cn from '@utils/classnames';
import styles from './PageContent.module.css';

interface Props {
  className?: string;
  classNameContent?: string;
  title?: string;
  intro?: string;
  titleRight?: JSX.Element | Array<JSX.Element> | string;
}

interface PropsHtml extends Props {
  html: string;
  children?: JSX.Element | Array<JSX.Element>;
}

interface PropsChildren extends Props {
  html?: string;
  children?: JSX.Element | Array<JSX.Element>;
}

const PageContent = ({
  className = '',
  classNameContent = '',
  title = '',
  titleRight = null,
  children = null,
  html = '',
  intro = '',
}: PropsHtml | PropsChildren) => (
  <div className={cn(className, styles.root)}>
    {(title !== '' || Boolean(titleRight)) && (
      <div className={cn(styles.title)}>
        {title !== '' && <h1 className={cn(styles.heading)}>{title}</h1>}
        {Boolean(titleRight) && (
          <div className={cn(styles.titleRight)}>{titleRight}</div>
        )}
      </div>
    )}
    {intro && (
      <div
        dangerouslySetInnerHTML={{ __html: intro }}
        className={styles.intro}
      />
    )}
    {children && (
      <div className={cn(styles.content, classNameContent)}>{children}</div>
    )}
    {html && (
      <div
        className={cn(styles.content, classNameContent)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )}
  </div>
);

export default PageContent;
