import {
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Se estiver usando React Router
import { styledNavLink, styleStyledAppBar, styleAppWrapper } from './styles';

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
            <Link
              href={link.href}
              className={location.pathname === link.href ? 'active' : ''}
              sx={{ ...styledNavLink, width: '100%' }}
            >
              {link.title}
            </Link>
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
        <Link
          href="/home"
          sx={{
            ...styledNavLink,
            color: '#10B981',
            fontSize: '1rem',
            '&:hover': { color: '#9CA3AF' },
          }}
        >
          edison-tezolin
        </Link>

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
            <Link
              sx={styledNavLink}
              key={link.title}
              href={link.href}
              className={location.pathname === link.href ? 'active' : ''}
            >
              {link.title}
            </Link>
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
