import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Importar as traduções
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';

const resources = {
    pt: {
        translation: ptTranslations
    },
    en: {
        translation: enTranslations
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en', // Inglês como padrão
        debug: process.env.NODE_ENV === 'development',

        interpolation: {
            escapeValue: false, // React já faz escape
        },

        detection: {
            order: ['localStorage', 'cookie', 'sessionStorage'],
            lookupLocalStorage: 'selectedLanguage',
            lookupCookie: 'selectedLanguage',
            lookupSessionStorage: 'selectedLanguage',
            caches: ['localStorage', 'cookie']
        }
    });

export default i18n;
