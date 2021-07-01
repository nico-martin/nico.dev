import React from 'react';
import cn from '@utils/classnames';
import styles from './PageContent.module.css';

interface Props {
  className?: string;
  title?: string;
}

interface PropsHtml extends Props {
  html: string;
  children?: JSX.Element | Array<JSX.Element>;
}

interface PropsChildren extends Props {
  html?: string;
  children: JSX.Element | Array<JSX.Element>;
}

const PageContent = ({
  className = '',
  title = '',
  children = null,
  html = '',
}: PropsHtml | PropsChildren) => (
  <div className={cn(className, styles.root)}>
    {title !== '' && <h1 className={cn(styles.title)}>{title}</h1>}
    {children && <div className={cn(styles.content)}>{children}</div>}
    {html && (
      <div
        className={cn(styles.content)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )}
  </div>
);

export default PageContent;
