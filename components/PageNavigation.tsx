import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import cn from '@utils/classnames';

const LINKS = {
  '/': 'About',
  '/blog/': 'Blog',
  '/talks/': 'Talks',
  '/code/': 'Code',
};

const PageNavigation = ({ className = '' }: { className?: string }) => {
  const { asPath } = useRouter();
  return (
    <div className={cn('page-navigation', className)}>
      {Object.entries(LINKS).map(([path, link]) => (
        <Link href={path}>
          <a
            className={cn('page-navigation__item', {
              'page-navigation__item--active': asPath === path,
            })}
          >
            {link}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PageNavigation;
