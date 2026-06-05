// etezolin-portfolio/src/components/Layout/MainLayout.tsx
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WorkIcon from '@mui/icons-material/Work';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useTypedTranslation } from '../../hooks/useTranslation';
import LanguageSelector from '../../i18n/LanguageSelector';
import { useThemeMode } from '../../themes/ThemeContext';
import { ScrollToTop } from '../shared/ScrollToTop';

// Definição explícita de props
interface MainLayoutProps {
  children: React.ReactNode;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  background: theme.palette.mode === 'dark' ? 'rgba(4, 10, 22, 0.85)' : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(16px)',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 1px 0 rgba(51, 153, 255, 0.08)'
      : '0 1px 0 rgba(37, 99, 235, 0.1)',
  borderBottom:
    theme.palette.mode === 'dark'
      ? '1px solid rgba(51, 153, 255, 0.07)'
      : '1px solid rgba(37, 99, 235, 0.08)',
  padding: theme.spacing(1.5, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1, 4),
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 600,
  letterSpacing: '-0.5px',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  alignItems: 'center',
}));

interface NavLinkProps {
  active?: boolean;
}

const NavGroupBtn = styled(motion.button)<NavLinkProps>(({ theme, active }) => ({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.95rem',
  padding: theme.spacing(0.5, 1),
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  position: 'relative',
  transition: 'color 0.25s ease',
  '&:hover': { color: theme.palette.primary.main },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    bottom: -4,
    left: 0,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: active ? 1 : 0,
    transition: 'opacity 0.3s ease',
    borderRadius: '4px',
  },
}));

const NavLink = styled(motion.a)<NavLinkProps>(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontFamily: '"Roboto Mono", monospace',
  position: 'relative',
  padding: theme.spacing(0.5, 1),
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    bottom: -4,
    left: 0,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: active ? 1 : 0,
    transition: 'opacity 0.3s ease',
    borderRadius: '4px',
  },
}));

// Componente para a linha decorativa de código
const CodeLine = styled(Box)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.75rem',
  color: theme.palette.text.secondary,
  opacity: 0.5,
  marginBottom: theme.spacing(0.5),
  display: 'flex',
  alignItems: 'center',
}));

const MenuSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(30, 45, 70, 0.25)'
      : alpha(theme.palette.primary.main, 0.04),
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: '300px',
    background:
      theme.palette.mode === 'dark' ? 'rgba(4, 10, 22, 0.97)' : 'rgba(248, 250, 252, 0.97)',
    backdropFilter: 'blur(20px)',
    padding: theme.spacing(4, 2),
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 48px rgba(0, 0, 0, 0.5)'
        : '0 8px 48px rgba(15, 23, 42, 0.12)',
    borderLeft:
      theme.palette.mode === 'dark'
        ? '1px solid rgba(51, 153, 255, 0.1)'
        : '1px solid rgba(37, 99, 235, 0.1)',
  },
}));

interface DrawerNavLinkProps {
  active?: boolean;
}

const DrawerNavLink = styled(motion.a)<DrawerNavLinkProps>(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  textDecoration: 'none',
  fontSize: '1rem',
  fontFamily: '"Roboto Mono", monospace',
  padding: theme.spacing(1.2, 1.5),
  borderLeft: active ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: theme.spacing(1.5),
  borderRadius: '0 6px 6px 0',
  position: 'relative',
  backgroundColor: active ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.06),
    color: theme.palette.primary.main,
    '&::after': {
      width: '30px',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: active ? '30px' : '0px',
    height: '1px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
    transition: 'width 0.3s ease',
  },
}));

const DrawerNavIcon = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '22px',
  height: '22px',
  color: theme.palette.primary.main,
  opacity: 0.8,
}));

// Componente para os números de linha
const LineNumber = styled(Box)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.75rem',
  color: theme.palette.text.secondary,
  width: '20px',
  textAlign: 'right',
  marginRight: theme.spacing(1.5),
  opacity: 0.4,
}));

// Componente para o rodapé do menu
const MenuFooter = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
}));

const SocialSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
  justifyContent: 'center',
  gap: theme.spacing(2),
  position: 'relative',
  padding: theme.spacing(1.5, 2),
  '&::before': {
    position: 'absolute',
    top: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '0.7rem',
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(4, 10, 22, 0.97)' : 'rgba(248, 250, 252, 0.97)',
    padding: '0 8px',
    whiteSpace: 'nowrap',
  },
}));

const SocialLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.22s ease',
  borderRadius: 8,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  width: 34,
  height: 34,
  flexShrink: 0,
  '&:hover': {
    color: theme.palette.primary.main,
    borderColor: alpha(theme.palette.primary.main, 0.45),
    background: alpha(theme.palette.primary.main, 0.07),
  },
}));

// interface StatusBadgeProps {
//   online?: boolean;
// }

// const StatusBadge = styled(Box, {
//   shouldForwardProp: (prop) => prop !== 'online',
// })<StatusBadgeProps>(({ theme, online = true }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   fontSize: '0.75rem',
//   color: online ? '#4caf50' : theme.palette.text.secondary,
//   fontFamily: '"Roboto Mono", monospace',
//   '& .dot': {
//     width: 8,
//     height: 8,
//     borderRadius: '50%',
//     backgroundColor: online ? '#4caf50' : '#f44336',
//     marginRight: theme.spacing(0.75),
//     boxShadow: online ? '0 0 10px rgba(76, 175, 80, 0.5)' : 'none',
//   },
// }));

// Definição do componente principal
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const activeSection = useActiveSection();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, currentLanguage } = useTypedTranslation();
  const { mode, toggleMode } = useThemeMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  // Hover dropdown — open on mouse enter, close with delay on leave
  const [anchorEls, setAnchorEls] = useState<{ [key: string]: HTMLElement | null }>({});
  const closeTimers = useRef<{ [key: string]: ReturnType<typeof setTimeout> }>({});

  const openMenu = (id: string, el: HTMLElement) => {
    if (closeTimers.current[id]) clearTimeout(closeTimers.current[id]);
    setAnchorEls((prev) => ({ ...prev, [id]: el }));
  };
  const scheduleClose = (id: string) => {
    closeTimers.current[id] = setTimeout(
      () => setAnchorEls((prev) => ({ ...prev, [id]: null })),
      160
    );
  };
  const cancelClose = (id: string) => {
    if (closeTimers.current[id]) clearTimeout(closeTimers.current[id]);
  };

  // Grouped navigation
  const navGroups = [
    {
      id: 'about',
      label: `_${t('about').toLowerCase()}`,
      items: [
        { id: 'home', label: `_${t('home').toLowerCase()}`, icon: <HomeIcon fontSize="small" /> },
        {
          id: 'formation',
          label: `_${t('formation').toLowerCase()}`,
          icon: <SchoolIcon fontSize="small" />,
        },
      ],
    },
    {
      id: 'portfolio',
      label: `_${t('portfolio').toLowerCase()}`,
      items: [
        {
          id: 'experience',
          label: `_${t('experience').toLowerCase()}`,
          icon: <WorkIcon fontSize="small" />,
        },
        {
          id: 'projects',
          label: `_${t('projects').toLowerCase()}`,
          icon: <ArchitectureIcon fontSize="small" />,
        },
        {
          id: 'competence',
          label: `_${t('skills').toLowerCase()} & _${t('competence').toLowerCase()}`,
          icon: <TipsAndUpdatesIcon fontSize="small" />,
        },
      ],
    },
  ];

  // All flat links (for mobile drawer)
  const allLinks = [
    ...navGroups[0].items,
    ...navGroups[1].items,
    {
      id: 'contact',
      label: `_${t('contact').toLowerCase()}`,
      icon: <ContactPageIcon fontSize="small" />,
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <StyledToolbar
          sx={{
            ...(scrolled && {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? 'rgba(5, 15, 30, 0.97)'
                  : 'rgba(255, 255, 255, 0.97)',
              borderBottom:
                theme.palette.mode === 'dark'
                  ? '1px solid rgba(51, 153, 255, 0.1)'
                  : '1px solid rgba(37, 99, 235, 0.1)',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                  : '0 4px 20px rgba(15, 23, 42, 0.06)',
            }),
          }}
        >
          <LogoText variant="h6" onClick={() => scrollToSection('home')}>
            <Box sx={{ display: 'inline-flex', lineHeight: 0 }}>
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00e676" />
                    <stop offset="100%" stopColor="#ccff00" />
                  </linearGradient>
                </defs>
              </svg>
              <CodeIcon sx={{ fontSize: 24, '& path': { fill: 'url(#logo-gradient)' } }} />
            </Box>
            etezolin
          </LogoText>

          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LanguageSelector />
              <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'} placement="bottom">
                <IconButton
                  onClick={toggleMode}
                  size="small"
                  sx={(t) => ({
                    color: 'text.secondary',
                    border: `1px solid ${alpha(t.palette.primary.main, 0.2)}`,
                    borderRadius: 1,
                    width: 34,
                    height: 34,
                    transition: 'all 0.22s ease',
                    '&:hover': {
                      color: 'primary.main',
                      borderColor: alpha(t.palette.primary.main, 0.45),
                      background: alpha(t.palette.primary.main, 0.07),
                    },
                  })}
                >
                  {mode === 'dark' ? (
                    <LightModeIcon sx={{ fontSize: 17 }} />
                  ) : (
                    <DarkModeIcon sx={{ fontSize: 17 }} />
                  )}
                </IconButton>
              </Tooltip>
              <IconButton
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <>
              <NavLinks>
                {navGroups.map((group) => {
                  const isActive = group.items.some((item) => activeSection === item.id);
                  const isOpen = Boolean(anchorEls[group.id]);
                  return (
                    <Box
                      key={group.id}
                      onMouseEnter={(e) => openMenu(group.id, e.currentTarget)}
                      onMouseLeave={() => scheduleClose(group.id)}
                    >
                      <NavGroupBtn
                        active={isActive}
                        onClick={() => scrollToSection(group.items[0].id)}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {group.label}
                        <Box
                          component="span"
                          sx={{
                            fontSize: '0.6rem',
                            opacity: 0.55,
                            display: 'inline-block',
                            transition: 'transform 0.2s ease',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            mt: '1px',
                          }}
                        >
                          ▾
                        </Box>
                      </NavGroupBtn>

                      <Menu
                        open={isOpen}
                        anchorEl={anchorEls[group.id]}
                        onClose={() => setAnchorEls((prev) => ({ ...prev, [group.id]: null }))}
                        disableAutoFocusItem
                        disableRestoreFocus
                        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                        MenuListProps={{
                          onMouseEnter: () => cancelClose(group.id),
                          onMouseLeave: () => scheduleClose(group.id),
                          disablePadding: true,
                        }}
                        slotProps={{
                          paper: {
                            sx: {
                              background: alpha(theme.palette.background.paper, 0.97),
                              backdropFilter: 'blur(20px)',
                              border: `1px solid ${alpha(theme.palette.primary.main, 0.14)}`,
                              borderRadius: 2,
                              mt: 1,
                              minWidth: 180,
                              overflow: 'hidden',
                              boxShadow:
                                theme.palette.mode === 'dark'
                                  ? '0 12px 40px rgba(0,0,0,0.45)'
                                  : '0 8px 28px rgba(15,23,42,0.12)',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '2px',
                                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                opacity: 0.6,
                              },
                            },
                          },
                        }}
                      >
                        <Box sx={{ py: 0.5 }}>
                          {group.items.map((item, idx) => (
                            <MenuItem
                              key={item.id}
                              onClick={() => {
                                scrollToSection(item.id);
                                setAnchorEls((prev) => ({ ...prev, [group.id]: null }));
                              }}
                              sx={{
                                fontFamily: '"Roboto Mono", monospace',
                                fontSize: '0.85rem',
                                width: '380px !important',
                                py: 1.1,
                                px: 2.5,
                                color:
                                  activeSection === item.id ? 'primary.main' : 'text.secondary',
                                borderLeft: `2px solid ${
                                  activeSection === item.id
                                    ? theme.palette.primary.main
                                    : 'transparent'
                                }`,
                                transition: 'all 0.18s ease',
                                '&:hover': {
                                  background: alpha(theme.palette.primary.main, 0.06),
                                  color: 'primary.main',
                                  borderLeftColor: alpha(theme.palette.primary.main, 0.4),
                                },
                                ...(idx > 0 && {
                                  borderTop: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
                                }),
                              }}
                            >
                              {item.label}
                            </MenuItem>
                          ))}
                        </Box>
                      </Menu>
                    </Box>
                  );
                })}

                {/* Contact — direct link */}
                <NavLink
                  href="#contact"
                  active={activeSection === 'contact'}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {`_${t('contact').toLowerCase()}`}
                </NavLink>
              </NavLinks>

              <Box sx={{ display: 'flex', gap: 0.75, alignItems: 'center' }}>
                <LanguageSelector />
                <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'} placement="bottom">
                  <IconButton
                    onClick={toggleMode}
                    size="small"
                    sx={(t) => ({
                      color: 'text.secondary',
                      border: `1px solid ${alpha(t.palette.primary.main, 0.2)}`,
                      borderRadius: 1,
                      width: 34,
                      height: 34,
                      transition: 'all 0.22s ease',
                      '&:hover': {
                        color: 'primary.main',
                        borderColor: alpha(t.palette.primary.main, 0.45),
                        background: alpha(t.palette.primary.main, 0.07),
                      },
                    })}
                  >
                    {mode === 'dark' ? (
                      <LightModeIcon sx={{ fontSize: 17 }} />
                    ) : (
                      <DarkModeIcon sx={{ fontSize: 17 }} />
                    )}
                  </IconButton>
                </Tooltip>
                <SocialLink
                  href="https://github.com/etezolin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon sx={{ fontSize: 18 }} />
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/etezolin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon sx={{ fontSize: 18 }} />
                </SocialLink>
              </Box>
            </>
          )}
        </StyledToolbar>
      </AppBar>

      <MobileDrawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <LogoText
            variant="h6"
            onClick={() => {
              scrollToSection('home');
              setDrawerOpen(false);
            }}
          >
            <CodeIcon sx={{ fontSize: 24 }} />
            etezolin
          </LogoText>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <StatusBadge sx={{ mr: 2 }}>
              <span className="dot" />
              {t('online')}
            </StatusBadge> */}
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={(t) => ({
                color: 'text.secondary',
                border: `1px solid ${alpha(t.palette.primary.main, 0.12)}`,
                background: alpha(t.palette.primary.main, 0.06),
                '&:hover': { background: alpha(t.palette.primary.main, 0.12) },
              })}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* <Box sx={{ mb: 2, px: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <LanguageSelector />
          <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
            <IconButton
              onClick={toggleMode}
              size="small"
              sx={{
                color: 'text.secondary',
                border: '1px solid rgba(51, 153, 255, 0.18)',
                background: 'rgba(51, 153, 255, 0.05)',
                width: 34,
                height: 34,
                '&:hover': { color: 'primary.main', borderColor: 'rgba(51, 153, 255, 0.4)' },
              }}
            >
              {mode === 'dark' ? (
                <LightModeIcon sx={{ fontSize: 18 }} />
              ) : (
                <DarkModeIcon sx={{ fontSize: 18 }} />
              )}
            </IconButton>
          </Tooltip>
        </Box> */}

        <MenuSection>
          {/* Group labels + items */}
          {navGroups.map((group, gIdx) => (
            <Box key={group.id}>
              {gIdx > 0 && (
                <Divider sx={{ my: 1.5, borderColor: (t) => alpha(t.palette.primary.main, 0.1) }} />
              )}
              <Typography
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  color: 'primary.main',
                  opacity: 0.55,
                  pl: 1,
                  mb: 0.5,
                }}
              >
                {group.label.replace('_', '')}
              </Typography>
              {group.items.map((link, index) => {
                const globalIdx = gIdx === 0 ? index : navGroups[0].items.length + index;
                return (
                  <DrawerNavLink
                    key={link.id}
                    href={`#${link.id}`}
                    active={activeSection === link.id}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    whileTap={{ x: 6 }}
                    whileHover={{ x: 6 }}
                  >
                    <LineNumber>{globalIdx + 1}</LineNumber>
                    <DrawerNavIcon>{link.icon}</DrawerNavIcon>
                    {link.label}
                  </DrawerNavLink>
                );
              })}
            </Box>
          ))}

          {/* Contact */}
          <Divider sx={{ my: 1.5, borderColor: (t) => alpha(t.palette.primary.main, 0.1) }} />
          <DrawerNavLink
            href="#contact"
            active={activeSection === 'contact'}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            whileTap={{ x: 6 }}
            whileHover={{ x: 6 }}
          >
            <LineNumber>{allLinks.length}</LineNumber>
            <DrawerNavIcon>
              <ContactPageIcon fontSize="small" />
            </DrawerNavIcon>
            {`_${t('contact').toLowerCase()}`}
          </DrawerNavLink>
        </MenuSection>

        <MenuFooter>
          <SocialSection
            sx={{
              '&::before': {
                content: currentLanguage === 'pt' ? '"// Minhas redes"' : '"// My networks"',
              },
            }}
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Box sx={{ paddingBottom: '15px !important' }} />
              <SocialLink href="https://github.com/etezolin" target="_blank" aria-label="GitHub">
                <GitHubIcon />
              </SocialLink>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Box sx={{ paddingBottom: '15px !important' }} />
              <SocialLink
                href="https://www.linkedin.com/in/etezolin"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialLink>
            </motion.div>
          </SocialSection>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <CodeLine sx={{ justifyContent: 'center' }}>
              <TerminalIcon sx={{ fontSize: 14, mr: 0.5, opacity: 0.5 }} />
              <Typography variant="caption" sx={{ opacity: 0.6 }}>
                v1.0.2 | {new Date().getFullYear()} © etezolin
              </Typography>
            </CodeLine>
          </Box>
        </MenuFooter>
      </MobileDrawer>

      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 12 } }}>
        {children}
      </Container>

      <ScrollToTop />
    </Box>
  );
};

export default MainLayout;
