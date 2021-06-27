import React from 'react';
import { useRouter } from 'next/router';
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
        {SOCIAL_LINKS.map(({ label, link, Icon }) => (
          <a
            href={link}
            title={label}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Icon />
          </a>
        ))}
      </nav>
    </header>
  );
};

export default PageHeader;
