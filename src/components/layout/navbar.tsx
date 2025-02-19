import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Se estiver usando React Router
import logo from '../../assets/img/logo.png';
import { styledNavLink, styleStyledAppBar, styleAppWrapper } from './styles';

const StyledRouterLink = styled(Link)(({ theme }) => ({
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

const StyledRouterLinkv2 = styled(Link)(({ theme }) => ({
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

const NameTitle = styled(Typography)(({ theme }) => ({
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
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // Obtém a URL atual

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: '_hello', href: '/home' },
    { title: '_about-me', href: '/about' },
    { title: '_projects', href: '/projects' },
  ];

  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#0a192f', height: '100%', mt: 7 }}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.title}>
            <StyledRouterLinkv2
              to={link.href}
              className={location.pathname === link.href ? 'active' : ''}
              // sx={{ ...styledNavLink, width: '100%' }}
            >
              {link.title}
            </StyledRouterLinkv2>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={styleStyledAppBar}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <StyledRouterLink
          to="/home"
          sx={{
            ...styledNavLink,
            color: '#10B981',
            fontSize: '1rem',
            // visibility: { xs: 'hidden', sm: 'visible' },
            '&:hover': { color: '#9CA3AF' },
          }}
        >
          <NameTitle>etezolin</NameTitle>
        </StyledRouterLink>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 2,
            mr: 15,
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          {navLinks.map((link) => (
            <StyledRouterLink
              sx={styledNavLink}
              key={link.title}
              to={link.href}
              className={location.pathname === link.href ? 'active' : ''}
            >
              {link.title}
            </StyledRouterLink>
          ))}
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            display: { md: 'none' },
            color: '#fff',
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 250,
              bgcolor: '#0a192f',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

const Header = () => {
  return (
    <Box sx={styleAppWrapper}>
      <Navbar />
    </Box>
  );
};

export default Header;
