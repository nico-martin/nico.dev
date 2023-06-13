import React from 'react';
import { Icon, IconType } from '@theme';
import cn from '@utils/classnames';
import styles from './Copy.module.css';

const Copy: React.FC<{ className?: string; content: string }> = ({
  className = '',
  content,
}) => {
  const [copied, setCopied] = React.useState<boolean>(false);
  const icon: IconType = React.useMemo(
    () => (copied ? 'check' : 'contentCopy'),
    [copied]
  );

  const onClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(content);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button className={cn(className, styles.root)} onClick={onClick}>
      <Icon
        icon={icon}
        className={cn(styles.icon, { [styles.iconCopied]: copied })}
      />
    </button>
  );
};

export default Copy;
