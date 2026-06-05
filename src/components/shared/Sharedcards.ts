// src/components/shared/SharedCards.ts
import { Box, Card } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

/**
 * Card base compartilhado — usado em Home, Experience, Formation,
 * Projects, Contact e Competence.
 * Qualquer mudança visual global basta editar aqui.
 */
export const SectionCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 14,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 4px 32px rgba(0,0,0,0.45)'
      : '0 4px 24px rgba(15,23,42,0.08)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 100%)`,
    opacity: 0.45,
  },
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.28),
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 48px rgba(0,0,0,0.55)'
        : '0 8px 32px rgba(15,23,42,0.12)',
    transform: 'translateY(-3px)',
  },
  [theme.breakpoints.down('sm')]: { borderRadius: 10, padding: theme.spacing(2) },
}));

/**
 * Cabeçalho padrão dos cards — linha com ícone + título + subtítulo.
 */
export const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2.5),
  paddingBottom: theme.spacing(1.5),
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
}));

/**
 * Ícone quadrado com gradiente primário → secundário.
 */
export const CardIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '10px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.3)}`,
  flexShrink: 0,
}));
