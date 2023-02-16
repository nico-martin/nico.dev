import React from 'react';
import { useRouter } from 'next/router';
import cn from '@utils/classnames';
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
    </header>
  );
};

export default PageHeader;
