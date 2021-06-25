import React from 'react';
import cn from '@utils/classnames';
import styles from './PageContent.module.css';

const PageContent = ({
  className = '',
  title,
  children,
}: {
  className?: string;
  title: string;
  children: JSX.Element | Array<JSX.Element>;
}) => (
  <div className={cn(className, styles.root)}>
    <h1 className={cn(styles.title)}>{title}</h1>
    <div className={cn(styles.content)}>{children}</div>
  </div>
);

export default PageContent;
