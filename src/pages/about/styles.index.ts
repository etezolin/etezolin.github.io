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
  minWidth: '350px',
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

export const stylesBox = {
  boxOne: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#A3BE8C', // Mudei para azul para diferenciar da bio
    '&::before': {
      content: '"//"',
      color: '#607B96',
      fontFamily: 'monospace',
    },
  },
  boxTwo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '800px',
  },
  boxThree: {
    position: 'relative',
    padding: '32px',
    backgroundColor: 'rgba(1, 22, 39, 0.84)',
    borderRadius: '12px',
    border: '1px solid #1E2D3D',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      backgroundColor: 'rgba(1, 22, 39, 0.95)',
      '&::before': {
        height: '85%',
        opacity: 0.9,
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '4px',
      height: '70%',
      background:
        'linear-gradient(180deg, #88C0D0 0%, rgba(136, 192, 208, 0.4) 100%)',
      borderRadius: '0 4px 4px 0',
      opacity: 0.7,
      transition: 'all 0.3s ease',
    },
    '&::after': {
      content: '"💻"',
      position: 'absolute',
      top: '-12px',
      right: '24px',
      fontSize: '24px',
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
    },
  },
  boxFour: {
    position: 'relative',
    padding: '32px',
    backgroundColor: 'rgba(1, 22, 39, 0.84)',
    borderRadius: '12px',
    border: '1px solid #1E2D3D',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      backgroundColor: 'rgba(1, 22, 39, 0.95)',
      '&::before': {
        height: '85%',
        opacity: 0.9,
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '4px',
      height: '70%',
      background:
        'linear-gradient(180deg, #88C0D0 0%, rgba(136, 192, 208, 0.4) 100%)',
      borderRadius: '0 4px 4px 0',
      opacity: 0.7,
      transition: 'all 0.3s ease',
    },
    '&::after': {
      content: '"📚"',
      position: 'absolute',
      top: '-12px',
      right: '24px',
      fontSize: '24px',
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
    },
  },
  boxFive: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#A3BE8C',
    '&::before': {
      content: '"//"',
      color: '#607B96',
      fontFamily: 'monospace',
    },
  },
  boxSix: {
    mt: 4,
    p: 3,
    backgroundColor: 'rgba(96, 123, 150, 0.1)',
    borderRadius: '8px',
    border: '1px dashed #607B96',
    position: 'relative',
    '&::before': {
      content: '"💭"',
      position: 'absolute',
      top: '-12px',
      left: '12px',
      fontSize: '20px',
    },
  },
  boxSeven: {
    position: 'relative',
    maxWidth: '800px',
    padding: '32px',
    backgroundColor: 'rgba(1, 22, 39, 0.84)',
    borderRadius: '12px',
    border: '1px solid #1E2D3D',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      backgroundColor: 'rgba(1, 22, 39, 0.95)',
      '&::before': {
        height: '85%',
        opacity: 0.9,
      },
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '4px',
      height: '70%',
      background:
        'linear-gradient(180deg, #A3BE8C 0%, rgba(163, 190, 140, 0.4) 100%)',
      borderRadius: '0 4px 4px 0',
      opacity: 0.7,
      transition: 'all 0.3s ease',
    },
    '&::after': {
      content: '"💡"',
      position: 'absolute',
      top: '-12px',
      right: '24px',
      fontSize: '24px',
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
    },
  },
  boxEight: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#A3BE8C',
    '&::before': {
      content: '"//"',
      color: '#607B96',
      fontFamily: 'monospace',
    },
  },
  boxNine: {
    position: 'relative',
    maxWidth: '800px',
    padding: '24px',
    backgroundColor: 'rgba(1, 22, 39, 0.84)',
    borderRadius: '8px',
    border: '1px solid #1E2D3D',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgba(1, 22, 39, 0.95)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '3px',
      height: '70%',
      backgroundColor: '#A3BE8C',
      borderRadius: '0 4px 4px 0',
      opacity: 0.7,
    },
  },
  boxTen: {
    backgroundColor: '#011627',
    padding: '32px',
    marginTop: '24px',
    fontFamily: '"Fira Code", Consolas, Monaco, "Courier New", monospace',
    fontSize: '10.2pt',
    lineHeight: '2',
    color: '#607B96',
    whiteSpace: 'pre-wrap',
    overflowX: 'auto',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '800px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    border: '1px solid #1E2D3D',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 12px 48px rgba(0, 0, 0, 0.25)',
      transform: 'translateY(-2px)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '30px',
      backgroundColor: '#1E2D3D',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      borderBottom: '1px solid #2A3343',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '12px',
      left: '16px',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#FF5F56',
      boxShadow: '24px 0 0 #FFBD2E, 48px 0 0 #27C93F',
      transition: 'all 0.3s ease',
    },
    '& .section-title': {
      color: '#A3BE8C',
      fontSize: '15px',
      fontWeight: 500,
      marginBottom: '16px',
      marginTop: '40px',
    },
    '& .list-item': {
      position: 'relative',
      paddingLeft: '20px',
      marginBottom: '12px',
      transition: 'all 0.2s ease',
      '&:hover': {
        color: '#E5E9F0',
        transform: 'translateX(5px)',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '0',
        top: '50%',
        width: '6px',
        height: '6px',
        backgroundColor: '#A3BE8C',
        borderRadius: '50%',
        transform: 'translateY(-50%)',
      },
    },
  },
} as Record<string, SxProps<Theme>>;

export const stylesTypo = {
  typoOne: {
    fontFamily: 'monospace',
    fontSize: '11pt',
    color: '#A3BE8C',
    fontWeight: 500,
    mb: 2,
  },
  typotwo: {
    fontFamily: 'monospace',
    color: '#E5E9F0',
    fontSize: '11pt',
    lineHeight: '1.8',
    '& strong': {
      color: '#A3BE8C',
      fontWeight: 'normal',
    },
  },
  typoThree: {
    fontFamily: 'monospace',
    fontSize: '11pt',
    color: '#A3BE8C',
    fontWeight: 500,
    mb: 2,
  },
  typoFour: {
    fontFamily: 'monospace',
    color: '#A3BE8C',
    mt: 2,
  },
  typoFive: {
    fontFamily: 'monospace',
    color: '#E5E9F0',
    fontSize: '11pt',
    lineHeight: '1.8',
    '& strong': {
      color: '#A3BE8C',
      fontWeight: 'normal',
    },
  },
  typoSix: {
    fontFamily: 'monospace',
    color: '#A3BE8C',
    mt: 2,
  },
  typoSeven: {
    fontFamily: 'monospace',
    color: '#E5E9F0',
    fontSize: '11pt',
    lineHeight: '1.8',
    // padding: '0 20px',
    position: 'relative',
    '& strong': {
      color: '#A3BE8C',
      fontWeight: 'normal',
    },
    '& p': {
      marginBottom: '20px',
      position: 'relative',
      // paddingLeft: '20px',
      '&::before': {
        position: 'absolute',
        left: '-10px',
        color: '#607B96',
        opacity: 0.6,
      },
    },
  },
  typoEight: {
    fontFamily: 'monospace',
    color: '#E5E9F0',
    fontSize: '10pt',
    lineHeight: '1.8',
    // mb: 3,
    '& strong': {
      color: '#A3BE8C',
      fontWeight: 'normal',
    },
    // textAlign: 'justify',
    padding: '0 16px',
  },
} as Record<string, SxProps<Theme>>;
