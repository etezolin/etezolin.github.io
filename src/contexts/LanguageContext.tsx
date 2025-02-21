// src/contexts/LanguageContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';

// Types
interface Language {
  code: string;
  name: string;
}

interface LanguageContextData {
  currentLanguage: string;
  changeLanguage: (language: string) => Promise<void>;
  availableLanguages: Language[];
}

interface LanguageProviderProps {
  children: ReactNode;
}

// Create context with initial undefined value
const LanguageContext = createContext<LanguageContextData | undefined>(
  undefined
);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    i18n.language || 'pt-BR'
  );

  const changeLanguage = useCallback(
    async (language: string) => {
      try {
        await i18n.changeLanguage(language);
        setCurrentLanguage(language);
        localStorage.setItem('userLanguage', language);
      } catch (error) {
        console.error('Error changing language:', error);
      }
    },
    [i18n]
  );

  const availableLanguages = useMemo(
    (): Language[] => [
      { code: 'pt-BR', name: 'Português' },
      { code: 'en-US', name: 'English' },
    ],
    []
  );

  const contextValue = useMemo(
    (): LanguageContextData => ({
      currentLanguage,
      changeLanguage,
      availableLanguages,
    }),
    [currentLanguage, changeLanguage, availableLanguages]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextData => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export type { Language, LanguageContextData };
