import React from 'react';
import cn from '@utils/classnames';
import { Icon, IconType, Loader } from '../index';
import styles from './Button.module.css';

const Button = ({
  icon = null,
  iconRight = false,
  children = null,
  useAnchor = false,
  className = '',
  size = 'normal',
  loading = false,
  disabled = false,
  ...props
}: {
  icon?: IconType;
  iconRight?: boolean;
  children?: JSX.Element | Array<JSX.Element> | string;
  useAnchor?: boolean;
  className?: string;
  size?: 'normal' | 'small' | 'large';
  loading?: boolean;
  disabled?: boolean;
  [key: string]: any;
}) => {
  return React.createElement(
    useAnchor ? 'a' : 'button',
    {
      className: cn(className, styles.root, {
        [styles.isSquare]: !Boolean(children) && Boolean(icon),
        [styles.iconRight]: iconRight,
        [styles.hasContent]: Boolean(children),
        [styles[`size-${size}`]]: size !== 'normal',
        [styles.isLoading]: loading,
        [styles.isDisabled]: disabled,
      }),
      disabled,
      ...props,
    },
    <React.Fragment>
      <Loader className={styles.loader} />
      {icon && <Icon icon={icon} className={styles.icon} />}
      <span className={cn(styles.content)}>{children}</span>
    </React.Fragment>
  );
};

export default Button;
