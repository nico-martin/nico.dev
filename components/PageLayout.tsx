import React from 'react';
import PageFooter from '@comps/PageFooter';
import PageHeader from '@comps/PageHeader';
import PageImage from '@comps/PageImage';
import PageNavigation from '@comps/PageNavigation';
import cn from '@utils/classnames';
import styles from './PageLayout.module.css';

const PageLayout = ({
  className = '',
  children,
}: {
  className?: string;
  children: JSX.Element | Array<JSX.Element>;
}) => (
  <React.Fragment>
    <svg
      height="0"
      style={{
        position: 'absolute',
        opacity: 0,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="svgBlur" x="-5%" y="-5%" width="110%" height="110%">
        <feGaussianBlur stdDeviation="20" />
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"
        />
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </svg>
    <div className={cn(styles.root, className)}>
      <PageImage className={cn(styles.image)} />
      <div className={cn(styles.shadow)} />
      <div className={cn(styles.main)}>
        <div className={cn(styles.mainContent)}>
          <PageHeader className={cn(styles.header)} />
          <PageNavigation className={cn(styles.navigation)} />
          <div className={cn(styles.content)}>{children}</div>
          <PageFooter className={cn(styles.footer)} />
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default PageLayout;
