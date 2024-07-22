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

  const importTranslations = async (lang: string) => {
    try {
      const module = await import(`../locales/${lang}.json`);
      setTranslations(module.default);
    } catch (error) {
      console.error(
        `Failed to load translations for language '${lang}':`,
        error
      );
      try {
        const module = await import(`../locales/sv.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error('Failed to load Swedish translations:', error);
      }
    }
  };

  const fetchTranslations = async (lang: string) => {
    try {
      const response = await fetch(`/textcontent/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch translations for language '${lang}'`);
      }
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error(
        `Failed to load translations for language '${lang}':`,
        error
      );
      try {
        const fallbackResponse = await fetch(`/textcontent/sv.json`);
        if (!fallbackResponse.ok) {
          throw new Error('Failed to fetch Swedish translations');
        }
        const fallbackData = await fallbackResponse.json();
        setTranslations(fallbackData);
      } catch (fallbackError) {
        console.error('Failed to load Swedish translations:', fallbackError);
      }
    }
  };

  useEffect(() => {
    if (import.meta.env.VITE_FETCH_LANG_JSON === 'true') {
      fetchTranslations(language);
    } else {
      importTranslations(language);
    }
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
  });

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
