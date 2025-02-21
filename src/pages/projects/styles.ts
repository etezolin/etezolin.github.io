import { SxProps, Theme } from '@mui/material/styles';

export const styledGradientBackground: SxProps<Theme> = {
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#0d1117',

  // Grade com linhas finas brancas
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    right: '-50%',
    bottom: '-50%',
    background: `
      repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px),
      repeating-linear-gradient(-45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px)
    `,
    transform: 'perspective(1000px) rotateX(30deg)',
    animation: 'move 15s linear infinite',
  },

  // Efeito de brilho verde/azul
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 50% 120%, rgba(20,184,166,0.15), transparent 60%),
      radial-gradient(circle at 80% 20%, rgba(49,46,129,0.2), transparent 50%)
    `,
    pointerEvents: 'none',
  },

  '@keyframes move': {
    '0%': {
      transform: 'perspective(1000px) rotateX(30deg) translateY(0)',
    },
    '100%': {
      transform: 'perspective(1000px) rotateX(30deg) translateY(50px)',
    },
  },
};
