import React from 'react';
import de from './translations/de.json';
import en from './translations/en.json';

export const LANGUAGES: Record<string, Record<string, string>> = {
  de,
  en,
};

interface TranslationsI {
  de: string;
  en: string;
}

export const TranslationsContext = React.createContext<{
  language: string;
  setLanguage: (language: string) => void;
  translations: Record<string, TranslationsI>;
}>({
  language: Object.keys(LANGUAGES)[0],
  setLanguage: () => {},
  translations: {},
});

export const TranslationsProvider = ({ children }: { children?: any }) => {
  const [language, setLanguage] = React.useState<string>(
    Object.keys(LANGUAGES)[0]
  );

  const translations = React.useMemo<Record<string, TranslationsI>>(
    () =>
      Object.entries(LANGUAGES).reduce(
        (acc, [lang, translations]) =>
          Object.entries(translations).reduce(
            (acc, [key, string]) => ({
              ...acc,
              [key]: {
                ...acc[key],
                [lang]: string,
              },
            }),
            acc
          ),
        {}
      ),
    []
  );

  return (
    <TranslationsContext.Provider
      value={{
        language,
        setLanguage,
        translations,
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
};

export const useTranslations = (): Record<string, TranslationsI> => {
  const { translations } = React.useContext(TranslationsContext);
  return translations;
};

export const useLanguage = (): [string, (language: string) => void] => {
  const { language, setLanguage } = React.useContext(TranslationsContext);
  return [language, setLanguage];
};

export const __ = (key: string) => {
  const [language] = useLanguage();
  const translations = useTranslations();
  if (!(key in translations) || !(language in translations[key])) {
    return key;
  }
  return translations[key][language];
};
