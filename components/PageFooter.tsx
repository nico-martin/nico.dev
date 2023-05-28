import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, IconType } from '@theme';
import cn from '@utils/classnames';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@utils/constants';
import styles from './PageFooter.module.css';

const PageFooter = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();
  return (
    <footer className={cn(className, styles.root)}>
      <nav className={styles.social}>
        {Object.entries(SOCIAL_LINKS).map(([icon, { label, link }]) => (
          <Button
            useAnchor
            icon={icon as IconType}
            href={link}
            title={label}
            target="_blank"
            rel={`noopener noreferrer${icon === 'mastodon' ? ' me' : ''}`}
            size="large"
            className={styles.socialLink}
          />
        ))}
      </nav>
      <nav className={cn(styles.nav)}>
        {Object.entries(FOOTER_LINKS).map(([path, link]) => (
          <Link
            href={path}
            className={cn(styles.link, {
              [styles.linkActive]: route === path,
            })}
          >
            {link}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default PageFooter;
