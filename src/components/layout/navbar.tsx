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
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  styledNavLink,
  styleStyledAppBar,
  styleAppWrapper,
  styleNameTitle,
  styleDrawer,
  styleBox,
  StyledRouterLink,
  StyledRouterLinkv2,
} from './styles.navbar';

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
          }}
        >
          <Typography sx={styleNameTitle}> etezolin</Typography>
        </StyledRouterLink>

        <Box sx={styleBox}>
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
          sx={{ display: { md: 'none' }, color: '#fff' }}
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
          sx={styleDrawer}
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
