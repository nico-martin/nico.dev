import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from '@utils/classnames';
import { LINKS } from '@utils/constants';
import styles from './PageNavigation.module.css';

const LinkWrapper = ({
  children,
  active,
  className = '',
}: {
  children: JSX.Element;
  active: boolean;
  className?: string;
}) =>
  active ? (
    <h1 className={className}>{children}</h1>
  ) : (
    <span className={className}>{children}</span>
  );

const PageNavigation = ({ className = '' }: { className?: string }) => {
  const { route } = useRouter();
  return (
    <div className={cn(styles.root, className)}>
      {Object.entries(LINKS).map(([path, link]) => (
        <LinkWrapper
          active={route !== '/' && route === path}
          className={styles.linkWrapper}
        >
          <Link
            href={path}
            className={cn(styles.link, {
              [styles.linkActive]: route === path,
            })}
          >
            {link}
          </Link>
        </LinkWrapper>
      ))}
    </div>
  );
};

export default PageNavigation;
