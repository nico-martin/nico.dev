import React from 'react';
import { Image } from '@theme';
import cn from '@utils/classnames';
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
              />
            )}
            {cat.title}: {cat.items.map((talk) => talk.venue).join(', ')}
          </div>
        ))}
    </div>
  );
};

export default TalkCategories;
