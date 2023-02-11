import React from 'react';
import cn from '@utils/classnames';
import { externalLinkIcon } from '@utils/helpers';
import { ImageI } from '@utils/types';
import { Icon, Image } from '../index';
import styles from './CardBig.module.css';

const CardBig: React.FC<{
  className?: string;
  title?: string;
  image?: ImageI;
  content: string;
  links?: Array<{ url: string; title: string }>;
}> = ({ className = '', title = '', image = null, content, links }) => {
  // todo: image should change the aspect ratio (fit-content: cover)

  return (
    <div className={cn(styles.root, className)}>
      {image && <Image image={image} className={styles.image} />}
      <div className={styles.content}>
        {Boolean(title) && <h2 className={styles.title}>{title}</h2>}
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={styles.description}
        />
        {links && links.length !== 0 && (
          <ul className={styles.links}>
            {links.map((link) => (
              <li className={styles.linkElement}>
                <a href={link.url} target="_blank" className={styles.link}>
                  <Icon
                    icon={externalLinkIcon(link.url)}
                    className={styles.linkIcon}
                  />
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardBig;
