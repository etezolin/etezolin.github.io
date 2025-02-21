// src/i18n/helpers.ts
import i18n from 'i18next';

export const getCurrentLanguage = () => {
  return navigator.language || 'pt-BR';
};

export const translate = (key: string, language = getCurrentLanguage()) => {
  i18n.changeLanguage(language);
  return i18n.t(key);
};
