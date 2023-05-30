import React from 'react';
import cn from '@utils/classnames';
import { externalLinkIcon } from '@utils/helpers';
import { ImageI, LinkI } from '@utils/types';
import { Icon, Image, LinkList } from '../index';
import styles from './CardBig.module.css';

const CardBig: React.FC<{
  className?: string;
  title?: string;
  image?: ImageI;
  imagePosition?: string;
  content: string;
  links?: Array<LinkI>;
}> = ({
  className = '',
  title = '',
  image = null,
  imagePosition = 'center center',
  content,
  links,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      {image && (
        <Image
          image={image}
          className={styles.imageWrapper}
          classNameImage={styles.image}
          imagePosition={imagePosition}
        />
      )}
      <div className={styles.content}>
        {Boolean(title) && <h2 className={styles.title}>{title}</h2>}
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={styles.description}
        />
        {links && links.length !== 0 && (
          <ul className={styles.links}>
            {links.map((link, i) => (
              <li className={styles.linkElement} key={i}>
                <a
                  href={link.url}
                  title={link.title}
                  target="_blank"
                  className={styles.link}
                >
                  <Icon
                    icon={externalLinkIcon(link.url)}
                    className={styles.linkIcon}
                  />
                  {link.label}
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
