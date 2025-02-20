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

export const styledBox: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  color: '#4A5568',
  ml: { xs: 2, sm: 5 },
};
