import { Box, Tooltip, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LangButton = styled('button')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  background: 'none',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  borderRadius: 8,
  cursor: 'pointer',
  padding: '5px 9px',
  height: 34,
  transition: 'all 0.22s ease',
  color: theme.palette.text.secondary,
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.45),
    background: alpha(theme.palette.primary.main, 0.07),
    color: theme.palette.primary.main,
  },
}));

const langs: Record<string, { flag: string; code: string; label: string }> = {
  pt: { flag: '🇧🇷', code: 'PT', label: 'Mudar para English' },
  en: { flag: '🇺🇸', code: 'EN', label: 'Switch to Português' },
};

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const saved = localStorage.getItem('selectedLanguage');
    if (!saved) {
      localStorage.setItem('selectedLanguage', 'pt');
      i18n.changeLanguage('pt');
    }
  }, [i18n]);

  const current = (i18n.language || 'pt').substring(0, 2) as 'pt' | 'en';
  const lang = langs[current] ?? langs['pt'];

  const toggle = () => {
    const next = current === 'pt' ? 'en' : 'pt';
    localStorage.setItem('selectedLanguage', next);
    i18n.changeLanguage(next);
  };

  return (
    <Tooltip title={lang.label} placement="bottom">
      <LangButton onClick={toggle} aria-label={lang.label}>
        <span style={{ fontSize: 15, lineHeight: 1 }}>{lang.flag}</span>
        <Typography
          component="span"
          sx={{
            fontFamily: '"Roboto Mono", monospace',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.5px',
          }}
        >
          {lang.code}
        </Typography>
      </LangButton>
    </Tooltip>
  );
};

export default LanguageSelector;
