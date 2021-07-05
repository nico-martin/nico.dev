import React from 'react';
import { useRouter } from 'next/router';
import { Button, IconType } from '@theme';
import cn from '@utils/classnames';
import { SOCIAL_LINKS } from '@utils/constants';
import styles from './PageHeader.module.css';

const PageHeader = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();
  return (
    <header className={cn(className, styles.root)}>
      <div className={cn(styles.titleContainer)}>
        {route === '/' ? (
          <h1 className={styles.title}>Nico Martin</h1>
        ) : (
          <span className={styles.title}>Nico Martin</span>
        )}
      </div>
      <nav className={styles.social}>
        {Object.entries(SOCIAL_LINKS).map(([icon, { label, link }]) => (
          <Button
            useAnchor
            icon={icon as IconType}
            href={link}
            title={label}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            className={styles.socialLink}
          />
        ))}
      </nav>
    </header>
  );
};

export default PageHeader;
