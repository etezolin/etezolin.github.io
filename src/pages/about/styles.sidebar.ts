import { SxProps, Theme } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const stylesBox = {
  boxOne: {
    fontSize: 20,
    pr: { xs: 0, sm: 1 },
    display: 'flex',
    alignItems: 'center',
  },
  boxTwo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: 3,
  },
  boxThree: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    boxShadow: 3,
    overflow: 'hidden',
  },
  boxFour: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    boxShadow: 3,
  },
  boxFive: {
    width: '50px',
    height: '5px',
    margin: '10px auto',
  },
} as Record<string, SxProps<Theme>>;

export const stylesDivider = {
  dividerOne: {
    mb: 2,
    mt: 1,
    backgroundColor: '#2E7D32', // cor verde
    opacity: 0.25, // opacidade
  },
  dividerTwo: {
    mt: 3,
    backgroundColor: '#2E7D32', // cor verde
    opacity: 0.25, // opacidade
  },
} as Record<string, SxProps<Theme>>;

export const stylesTypo = {
  typoOne: {
    color: '#8b949e',
    fontSize: '8pt', // Tamanho de fonte mais suave
    textAlign: 'center',
    fontFamily: 'monospace',
    pr: 1.5,
    pl: 1.5,
    lineHeight: 1.6,
    fontWeight: 300, // Fonte mais leve
    maxWidth: '650px',
    margin: '0 auto',
    position: 'relative',
  },
} as Record<string, SxProps<Theme>>;

export const styledSectionTitle: SxProps<Theme> = {
  color: '#64ffda',
  fontFamily: 'monospace',
  fontSize: '14px',
  letterSpacing: '2px',
  position: 'relative',
  display: 'inline-block',
  padding: '4px 0',
  transition: 'all 0.3s ease',

  '&:hover': {
    color: '#fff',
    textShadow: '0 0 8px #64ffda',
    paddingLeft: '15px',
  },

  '&::after': {
    content: '"_"',
    opacity: 0.7,
    animation: 'blink 1s steps(2, start) infinite',
  },

  '@keyframes blink': {
    '50%': {
      opacity: 0,
    },
  },
};

interface Styles {
  container: CSSProperties;
  list: {
    padding: number;
    display: string;
    flexDirection: string;
    justifyContent: string;
  };
  listItem: {
    pl: number;
    padding: string;
    '&:hover': {
      backgroundColor: string;
      fontFamily: string;
    };
    cursor?: string;
  };
  icon: {
    minWidth: string;
  };
  text: {
    fontSize: string;
    color: string;
    fontFamily: string;
  };
  activeText: {
    fontSize: string;
    color: string;
    fontWeight: string;
  };
}

export const STYLES: Styles = {
  container: {
    height: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    paddingTop: '2rem',
  },
  list: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listItem: {
    pl: 4,
    padding: '8px',
    '&:hover': { backgroundColor: 'transparent', fontFamily: 'monospace' },
  },
  icon: {
    minWidth: '24px',
  },
  text: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#8b949e',
  },
  activeText: {
    fontSize: '14px',
    color: '#c9d1d9',
    fontWeight: '600',
  },
};
