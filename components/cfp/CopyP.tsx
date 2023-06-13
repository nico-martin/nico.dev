import React from 'react';
import { Icon, IconType } from '@theme';
import cn from '@utils/classnames';
import styles from './CopyP.module.css';

const CopyP: React.FC<{ className?: string; content: string }> = ({
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
    <p className={cn(className, styles.p)} onClick={onClick}>
      <Icon
        icon={icon}
        className={cn(styles.icon, { [styles.iconCopied]: copied })}
      />
      <span
        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }}
      />
    </p>
  );
};

export default CopyP;
