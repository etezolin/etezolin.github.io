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
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import {
  styledNavLink,
  styleStyledAppBar,
  styleAppWrapper,
  // styleNameTitle,
  styleDrawer,
  styleBox,
  StyledRouterLink,
  StyledRouterLinkv2,
} from './styles.navbar';
import logo from '../../assets/image/logo.png';

// Componentes estilizados para o seletor de idiomas
const LanguageButton = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '6px 12px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(94, 129, 172, 0.4)',
  backgroundColor: 'transparent',
  '&:hover': {
    border: '1px solid rgba(94, 129, 172, 0.8)',
    backgroundColor: 'rgba(94, 129, 172, 0.1)',
  },
}));

const LanguageDot = styled(Box)({
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  backgroundColor: '#5E81AC',
  margin: '0 6px',
});

const LanguageTexts = styled(Typography)<{ isActive?: boolean }>(
  ({ isActive }) => ({
    fontSize: '14px',
    fontWeight: 500,
    color: isActive ? '#ED8936' : '#8FA6BC',
    marginRight: '4px',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: isActive ? '#ED8936' : '#A3BE8C',
    },
  })
);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(() => {
    localStorage.setItem('language', 'pt-BR');
    i18n.changeLanguage('pt-BR');
    return 'pt-BR';
  });

  const toggleLanguage = () => {
    const newLang = currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
    localStorage.setItem('language', newLang);
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <LanguageButton onClick={toggleLanguage}>
      <LanguageTexts isActive={currentLang === 'pt-BR'}>PT</LanguageTexts>
      <LanguageDot />
      <LanguageTexts isActive={currentLang === 'en-US'}>EN</LanguageTexts>
    </LanguageButton>
  );
};

// Componente principal Navbar
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { t } = useTranslation();

  const home = t('navbar.menu.home.label');
  const about = t('navbar.menu.about.label');
  const project = t('navbar.menu.project.label');

  const navLinks = [
    { title: home, href: '/home' },
    { title: about, href: '/about' },
    { title: project, href: '/projects' },
  ];

  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#0a192f', height: '100%', mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src={logo}
          alt=""
          sx={{
            width: { xs: '230px', sm: '250px' },
          }}
        />
      </Box>
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
      {/* Language Switcher no drawer */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <LanguageSwitcher />
      </Box>
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
          {/* <Typography sx={styleNameTitle}>etezolin</Typography> */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              // ...styleNameTitle, // mantendo os estilos anteriores caso necessário
            }}
          >
            <Box
              component="img"
              src={logo}
              alt=""
              sx={{
                width: { xs: '230px', sm: '250px' },
              }}
            />
          </Box>
        </StyledRouterLink>

        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}
        >
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

          {/* Language Switcher na navbar */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <LanguageSwitcher />
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              color: '#fff',
              position: 'absolute',
              right: { xs: '12%', sm: '8%' },
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

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
