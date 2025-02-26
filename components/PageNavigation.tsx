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
  const { route, asPath } = useRouter();
  const navRef = React.useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = React.useState(false);
  const [showRightShadow, setShowRightShadow] = React.useState(false);

  const updateShadows = () => {
    if (!navRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
    setShowLeftShadow(scrollLeft > 0);
    setShowRightShadow(scrollLeft + clientWidth < scrollWidth);
  };

  React.useEffect(() => {
    updateShadows();
    window.addEventListener('resize', updateShadows);

    return () => {
      window.removeEventListener('resize', updateShadows);
    };
  }, []);

  return (
    <div
      className={cn(styles.root, className, {
        [styles.hasShadowLeft]: showLeftShadow,
        [styles.hasShadowRight]: showRightShadow,
      })}
    >
      <div className={styles.shadowLeft} />
      <nav ref={navRef} className={styles.nav} onScroll={updateShadows}>
        {Object.entries(LINKS).map(([path, link]) => {
          return (
            <LinkWrapper
              active={route !== '/' && route === path}
              className={styles.linkWrapper}
            >
              <Link href={path}>
                <a
                  className={cn(styles.link, {
                    [styles.linkActive]:
                      (route === '/' && path === '/') ||
                      (path !== '/' && asPath.startsWith(path)),
                  })}
                >
                  {link}
                </a>
              </Link>
            </LinkWrapper>
          );
        })}
      </nav>
      <div className={styles.shadowRight} />
    </div>
  );
};

export default PageNavigation;
