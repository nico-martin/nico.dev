import React from 'react';
import cn from '@utils/classnames';
import Card from './Card';
import styles from './CardGrid.module.css';

const CardGrid = ({
  className = '',
  children,
  onePerRow = false,
}: {
  className?: string;
  children: JSX.Element | JSX.Element[];
  onePerRow?: boolean;
}) => (
  <div
    className={cn(className, styles.root, { [styles.onePerRow]: onePerRow })}
  >
    {children}
  </div>
);

export default CardGrid;
