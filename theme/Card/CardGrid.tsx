import React from 'react';
import cn from '@utils/classnames';
import Card from './Card';
import styles from './CardGrid.module.css';

const CardGrid = ({
  className = '',
  children,
  onePerRow = false,
  gap = 'normal',
}: {
  className?: string;
  children: JSX.Element | JSX.Element[];
  onePerRow?: boolean;
  gap?: 'normal' | 'big';
}) => (
  <div
    className={cn(className, styles.root, {
      [styles.onePerRow]: onePerRow,
      [styles.gapBig]: gap === 'big',
    })}
  >
    {children}
  </div>
);

export default CardGrid;
