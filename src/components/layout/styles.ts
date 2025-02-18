import { SxProps, Theme } from '@mui/material/styles';

export const styledFooter: SxProps<Theme> = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1rem',
  background: 'linear-gradient(to top, rgba(10, 25, 47, 0.95), transparent)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,
};

export const styledCodeText: SxProps<Theme> = {
  color: '#10B981',
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

export const styledSocialLink: SxProps<Theme> = {
  color: '#4A5568',
  textDecoration: 'none',
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  '&:hover': {
    color: '#fff',
  },
};

export const styledNavLink: SxProps<Theme> = {
  color: '#4A5568',
  textDecoration: 'none',
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  padding: '0.5rem 1rem',
  '&:hover': {
    color: '#fff',
  },
  '&.active': {
    color: '#fff',
    borderBottom: '2px solid #ED8936',
  },
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
