import React from 'react';
import cn from '@utils/classnames';
import { ImageI } from '@utils/types';
import { Image } from '../index';
import styles from './CardBig.module.css';

const CardBig: React.FC<{
  className?: string;
  title?: string;
  image?: ImageI;
  content: string;
}> = ({ className = '', title = '', image = null, content }) => {
  return (
    <div className={cn(styles.root, className)}>
      {image && <Image image={image} className={styles.image} />}
      <div className={styles.content}>
        {Boolean(title) && <h2 className={styles.title}>{title}</h2>}
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={styles.description}
        />
      </div>
    </div>
  );
};

export default CardBig;
