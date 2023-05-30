import React from 'react';
import { Icon, Image, LinkList } from '@theme';
import cn from '@utils/classnames';
import { convertTalkLinks, externalLinkIcon } from '@utils/helpers';
import { ApiTalksCategoriesI } from '@utils/types';
import styles from './TalkCategories.module.css';

const TalkCategories: React.FC<{
  className?: string;
  categories: Array<ApiTalksCategoriesI>;
}> = ({ className = '', categories }) => {
  return (
    <div className={cn(className, styles.root)}>
      {categories
        .filter(({ items }) => items.length !== 0)
        .map((cat, i) => (
          <div className={styles.category} key={i}>
            {cat.image && (
              <Image
                image={cat.image}
                className={styles.imageWrapper}
                classNameImage={styles.image}
                imagePosition={cat.imagePosition}
              />
            )}
            <div className={styles.content}>
              <h3 className={styles.contentTitle}>{cat.title}</h3>
              <ul className={styles.talkList}>
                {cat.items.map((talk) => (
                  <li className={styles.talkElement}>
                    <div className={styles.talkTitleContainer}>
                      <h4 className={styles.talkVenue}>{talk.venue}</h4>
                      {talk.links && (
                        <ul className={styles.talkLinks}>
                          {convertTalkLinks(
                            talk.links,
                            talk.title,
                            talk.venue
                          ).map((link) => (
                            <li className={styles.talkLinksElement}>
                              <a
                                href={link.url}
                                title={link.title}
                                className={styles.talkLinksAnchor}
                                target="_blank"
                              >
                                <Icon
                                  icon={link.icon}
                                  className={styles.talkLinksIcon}
                                />
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <p className={styles.talkTitle}>{talk.title}</p>
                    {/*
                    <LinkList
                      className={styles.talkLinks}
                      links={convertTalkLinks(
                        talk.links,
                        talk.title,
                        talk.venue
                      )}
                    />*/}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TalkCategories;
