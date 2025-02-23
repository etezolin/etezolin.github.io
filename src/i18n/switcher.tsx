// src/i18n/components/switcher.tsx
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

const LanguageButton = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '6px 12px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(94, 129, 172, 0.4)',
  backgroundColor: 'transparent',
  '&:hover': {
    border: '1px solid rgba(94, 129, 172, 0.8)',
    backgroundColor: 'rgba(94, 129, 172, 0.1)',
  },
}));

const LanguageText = styled(Typography)({
  fontSize: '14px',
  fontWeight: 500,
  color: '#8FA6BC',
  marginRight: '4px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#A3BE8C',
  },
});

const LanguageDot = styled(Box)({
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  backgroundColor: '#5E81AC',
  margin: '0 6px',
});

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
    localStorage.setItem('language', newLang);
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <LanguageButton onClick={toggleLanguage}>
      <LanguageText>{currentLang === 'pt-BR' ? 'PT' : 'EN'}</LanguageText>
      <LanguageDot />
      <LanguageText>{currentLang === 'pt-BR' ? 'EN' : 'PT'}</LanguageText>
    </LanguageButton>
  );
};
export default LanguageSwitcher;
