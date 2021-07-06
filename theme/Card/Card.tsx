import React from 'react';
import cn from '@utils/classnames';
import { Icon } from '../index';
import styles from './Card.module.css';

const Card = ({
  className = '',
  suptitle = '',
  title = '',
  subtitle = '',
  content = '',
  links = [],
}: {
  className?: string;
  suptitle?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  links?: Array<{
    url: string;
    label: string;
    title?: string;
  }>;
}) => (
  <div className={cn(className, styles.root)}>
    {Boolean(suptitle) && <p className={styles.suptitle}>{suptitle}</p>}
    {Boolean(title) && <h2 className={styles.title}>{title}</h2>}
    {Boolean(subtitle) && <p className={styles.subtitle}>{subtitle}</p>}
    {Boolean(content) && (
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )}
    {Boolean(suptitle) && (
      <p className={styles.links}>
        {links.map(({ url, label, title }) => (
          <a
            className={styles.linkElement}
            href={url}
            title={title}
            target="_blank"
          >
            {label} <Icon icon="arrow" className={styles.linkIcon} />
          </a>
        ))}
      </p>
    )}
  </div>
);

export default Card;
