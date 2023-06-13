import React from 'react';
import cn from '@utils/classnames';
import { LinkI } from '@utils/types';
import { Icon, LinkList } from '../index';
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
  links?: Array<LinkI>;
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
    <LinkList links={links} className={styles.links} />
  </div>
);

export default Card;
