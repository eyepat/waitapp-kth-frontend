import React, { createContext, useState, useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';

interface LanguageContextType {
  t: (key: string) => string;
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cookies, setCookie] = useCookies(['language']);
  const [language, setLanguageState] = useState<string>(
    () => cookies.language || 'sv'
  );
  const [translations, setTranslations] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    import(`../locales/${language}.json`)
      .then((module) => {
        setTranslations(module.default);
      })
      .catch((error) => {
        console.error(
          `Failed to load translations for language '${language}':`,
          error
        );
        import(`../locales/sv.json`)
          .then((module) => {
            setTranslations(module.default);
          })
          .catch((error) => {
            console.error('Failed to load Swedish translations:', error);
          });
      });
  }, [language]);

  useEffect(() => {
    if (cookies.language !== language) {
      setCookie('language', language);
    }
  }, [language]);

  const setLanguage: LanguageContextType['setLanguage'] = (newLanguage) => {
    setLanguageState(newLanguage);
  };

  const t: LanguageContextType['t'] = (key) => {
    return translations[key] || key;
  };

  const value: LanguageContextType = {
    t,
    language,
    setLanguage,
  };

  useEffect(() => {
    if (cookies.language) {
      setLanguage(cookies.language);
    }
  }, []);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
