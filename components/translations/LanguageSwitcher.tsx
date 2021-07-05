import React from 'react';
import cn from '@utils/classnames';
import { __, LANGUAGES, useLanguage } from '@utils/cvTranslations';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const [language, setLanguage] = useLanguage();
  return (
    <div className={cn(styles.root, className)}>
      {__('language')}:{' '}
      {Object.keys(LANGUAGES).map((lang) => (
        <button
          onClick={() => setLanguage(lang)}
          className={cn(styles.button, {
            [styles.buttonActive]: lang === language,
          })}
        >
          {__(`language.${lang}`)}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
