import React from 'react';
import { Icon } from '@theme';
import cn from '@utils/classnames';
import { LinkI } from '@utils/types';
import styles from './LinkList.module.css';

const LinkList: React.FC<{ className?: string; links: Array<LinkI> }> = ({
  className = '',
  links,
}) =>
  links.length === 0 ? null : (
    <ul className={cn(className, styles.list)}>
      {links.map((link, i) => (
        <li className={styles.element} key={i}>
          <a
            className={styles.link}
            href={link.url}
            title={link.title}
            target="_blank"
          >
            {link.label} <Icon icon="arrow" className={styles.icon} />
          </a>
        </li>
      ))}
    </ul>
  );

export default LinkList;
