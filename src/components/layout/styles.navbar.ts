import { SxProps, Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const styledNavLink: SxProps<Theme> = {
  // color: '#4A5568',
  textDecoration: 'none',
  fontFamily: 'monospace',
  // fontSize: '0.9rem',
  padding: '0.5rem 1rem',
  // '&:hover': {
  //   color: '#fff',
  // },
  '&.active': {
    color: '#fff',
    borderBottom: '2px solid #ED8936',
  },
  color: '#10B981',
  fontSize: '1rem',
  // visibility: { xs: 'hidden', sm: 'visible' },
  '&:hover': { color: '#9CA3AF' },
};

export const styleStyledAppBar: SxProps<Theme> = {
  background: 'transparent',
  boxShadow: 'none',
  padding: '1rem 0',
};

export const styleAppWrapper: SxProps<Theme> = {
  background: 'linear-gradient(to bottom, rgba(10, 25, 47, 0.95), transparent)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
};

export const styleNameTitle: SxProps<Theme> = {
  color: '#64ffda',
  fontFamily: 'monospace',
  fontSize: '12pt',
  fontWeight: 'bold',
  letterSpacing: '2px',
  position: 'relative',
  padding: '12px 0',
  transition: 'all 0.4s ease',
  textTransform: 'lowercase',
  borderBottom: '2px solid transparent',
  '&:hover': {
    color: '#fff',
    textShadow: `
        0 0 5px #64ffda,
        0 0 15px #64ffda,
        0 0 25px #64ffda
      `,
    letterSpacing: '4px',
    borderBottom: '2px solid #64ffda',
  },
  '&::before': {
    content: '"<"',
    color: '#64ffda',
    opacity: 0,
    marginRight: '8px',
    transition: 'all 0.3s ease',
  },
  '&::after': {
    content: '"/>"',
    color: '#64ffda',
    opacity: 0,
    marginLeft: '8px',
    transition: 'all 0.3s ease',
  },
  '&:hover::before, &:hover::after': {
    opacity: 1,
  },
};

export const styleDrawer: SxProps<Theme> = {
  display: { xs: 'block', md: 'none' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: 250,
    bgcolor: '#0a192f',
  },
};

export const styleBox: SxProps<Theme> = {
  display: { xs: 'none', md: 'flex' },
  alignContent: 'center',
  alignItems: 'center',
  gap: 2,
  mr: 15,
  flexGrow: 1,
  justifyContent: 'center',
};

export const StyledRouterLink = styled(Link)(() => ({
  color: '#4A5568',
  textDecoration: 'none',
  fontFamily: 'monospace',
  fontSize: '1rem !important',
  padding: '0.5rem 1rem',
  '&:hover': {
    color: '#fff',
  },
  '&.active': {
    color: '#fff',
    borderBottom: '2px solid #ED8936',
  },
}));

export const StyledRouterLinkv2 = styled(Link)(() => ({
  color: '#8892b0',
  textDecoration: 'none',
  fontFamily: 'monospace',
  fontSize: '1rem',
  padding: '1rem 1.5rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  position: 'relative',
  backgroundColor: 'transparent',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    height: '0%',
    width: '2px',
    backgroundColor: '#64ffda',
    transition: 'height 0.3s ease',
    transform: 'translateY(-50%)',
  },

  '&:hover': {
    color: '#64ffda',
    backgroundColor: 'rgba(100, 255, 218, 0.05)',
    paddingLeft: '2rem',

    '&::before': {
      height: '70%',
    },
  },

  '&.active': {
    color: '#64ffda',
    backgroundColor: 'rgba(100, 255, 218, 0.05)',
    paddingLeft: '2rem',

    '&::before': {
      height: '70%',
    },
  },
}));
