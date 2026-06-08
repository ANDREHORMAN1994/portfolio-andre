import {
  createContext,
  type ReactElement,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { isLanguage, type Language, translations } from '@/i18n/translations';

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  text: (typeof translations)[Language];
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

export function LanguageProvider({
  children
}: LanguageProviderProps): ReactElement {
  const [language, setCurrentLanguage] = useState<Language>('pt');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('portfolio-language');

    if (isLanguage(storedLanguage)) {
      setCurrentLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const setLanguage = (newLanguage: Language): void => {
    window.localStorage.setItem('portfolio-language', newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      text: translations[language]
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
};
