import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from '@utils/classnames';
import { FOOTER_LINKS } from '@utils/constants';
import styles from './PageFooter.module.css';

const PageFooter = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();
  return (
    <footer className={cn(className, styles.root)}>
      <nav className={cn(styles.nav)}>
        {Object.entries(FOOTER_LINKS).map(([path, link]) => (
          <Link href={path}>
            <a
              className={cn(styles.link, {
                [styles.linkActive]: route === path,
              })}
            >
              {link}
            </a>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default PageFooter;
