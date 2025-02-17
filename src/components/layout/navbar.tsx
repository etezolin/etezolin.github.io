import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Se estiver usando React Router
import { styledNavLink, styleStyledAppBar, styleAppWrapper } from './styles';

const StyledRouterLink = styled(Link)(({ theme }) => ({
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
    <Box sx={{ width: 250, bgcolor: '#0a192f', height: '100%' }}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.title}>
            <StyledRouterLink
              to={link.href}
              className={location.pathname === link.href ? 'active' : ''}
              // sx={{ ...styledNavLink, width: '100%' }}
            >
              {link.title}
            </StyledRouterLink>
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
            '&:hover': { color: '#9CA3AF' },
          }}
        >
          edison-tezolin
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
