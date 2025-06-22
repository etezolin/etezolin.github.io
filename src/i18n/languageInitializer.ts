// src/i18n/languageInitializer.ts
import i18n from './index';

export const initializeLanguage = () => {
    // Verificar se já existe idioma salvo
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
        // Se existe e é válido, usar o salvo
        i18n.changeLanguage(savedLanguage);
    } else {
        // Se não existe ou é inválido, definir inglês como padrão
        localStorage.setItem('selectedLanguage', 'en');
        i18n.changeLanguage('en');
    }
};
