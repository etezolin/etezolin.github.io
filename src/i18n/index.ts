import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Importar as traduções
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';

const resources = {
  pt: {
    translation: ptTranslations,
  },
  en: {
    translation: enTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt', // ✅ fallback pt quando não encontrar nada

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'selectedLanguage',
      caches: ['localStorage'],
    },
  });

export default i18n;
