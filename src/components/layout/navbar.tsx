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
import { styled } from '@mui/material/styles';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';

// Estilizando o AppBar customizado
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  padding: '1rem 0',
}));

// Estilizando o Link customizado
const NavLink = styled(Link)(({ theme }) => ({
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Lista de links da navegação
  const navLinks = [
    { title: '_hello', href: '#', active: true },
    { title: '_about-me', href: '#' },
    { title: '_projects', href: '#' },
  ];

  // Conteúdo do menu mobile
  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#0a192f', height: '100%' }}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.title}>
            <NavLink
              href={link.href}
              className={link.active ? 'active' : ''}
              sx={{ width: '100%' }}
            >
              {link.title}
            </NavLink>
          </ListItem>
        ))}
        <ListItem>
          <NavLink href="#" sx={{ color: '#10B981', width: '100%' }}>
            _contact-me
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="static">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Logo/Nome */}
        <NavLink
          href="#"
          sx={{
            color: '#10B981',
            fontSize: '1rem',
            '&:hover': { color: '#9CA3AF' },
          }}
        >
          edison-tezolin
        </NavLink>

        {/* Links centrais - visíveis apenas em desktop */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 2,
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              href={link.href}
              className={link.active ? 'active' : ''}
            >
              {link.title}
            </NavLink>
          ))}
        </Box>

        {/* Link de contato - visível apenas em desktop */}
        <NavLink
          href="#"
          sx={{
            color: '#10B981',
            display: { xs: 'none', md: 'block' },
          }}
        >
          _contact-me
        </NavLink>

        {/* Botão do menu hamburger - visível apenas em mobile */}
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

        {/* Drawer para menu mobile */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Melhor performance em mobile
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
    </StyledAppBar>
  );
};

// Componente wrapper para adicionar o background gradiente
const AppWrapper = styled(Box)({
  background: 'linear-gradient(to bottom, rgba(10, 25, 47, 0.95), transparent)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
});

const Header = () => {
  return (
    <AppWrapper>
      <Navbar />
    </AppWrapper>
  );
};

export default Header;
