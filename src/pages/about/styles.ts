import { SxProps, Theme } from '@mui/material/styles';

export const styledBox: SxProps<Theme> = {
  top: 0,
  left: 0,
  mt: 8,
  backgroundColor: '#0d1117',
  borderRight: '1px solid #21262d',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',

  // Responsividade
  width: {
    xs: '64px', // Em telas pequenas, mostra apenas os ícones
    sm: '300px', // Em telas maiores, mostra a largura completa
  },

  height: {
    xs: 'calc(100vh - 64px)',
    sm: 'calc(100vh - 64px)',
  },

  p: {
    xs: 1,
    sm: 2,
  },
};

export const styledMainContainer: SxProps<Theme> = {
  // minHeight: '100vh',
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

export const styledMainContent: SxProps<Theme> = {
  flex: 1,
  padding: '1rem',
  marginTop: '1.9rem !important',
  fontFamily: 'monospace',
  mt: 8,
  ml: { xs: 'none', sm: 'none', md: 3 },
};

export const styledSectionTitle: SxProps<Theme> = {
  color: '#58a6ff',
  fontSize: '2rem',
  marginBottom: '1rem',
  fontFamily: 'monospace',
  fontWeight: 500,
};

export const styledSubSectionTitle: SxProps<Theme> = {
  color: '#c9d1d9',
  fontSize: '1.5rem',
  fontFamily: 'monospace',
  marginTop: '0.55rem',
  marginBottom: '1rem',
};

export const styledEducationItem: SxProps<Theme> = {
  display: 'flex',
  fontFamily: 'monospace',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1rem',
  color: '#c9d1d9',
  '& .MuiSvgIcon-root': {
    color: '#8b949e',
  },
};
