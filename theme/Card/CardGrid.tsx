import React from 'react';
import cn from '@utils/classnames';
import Card from './Card';
import styles from './CardGrid.module.css';

const CardGrid = ({
  className = '',
  children,
}: {
  className?: string;
  children: JSX.Element | JSX.Element[];
}) => <div className={cn(className, styles.root)}>{children}</div>;

export default CardGrid;
