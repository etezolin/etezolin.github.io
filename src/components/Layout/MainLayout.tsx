// etezolin-portfolio/src/components/Layout/MainLayout.tsx
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
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
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useTypedTranslation } from '../../hooks/useTranslation';
import LanguageSelector from '../../i18n/LanguageSelector';
import { ScrollToTop } from '../shared/ScrollToTop';

// Definição explícita de props
interface MainLayoutProps {
  children: React.ReactNode;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  background: 'rgba(6, 17, 33, 0.8)',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
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
  backgroundColor: 'rgba(30, 45, 70, 0.25)',
  borderRadius: theme.spacing(1),
  border: '1px solid rgba(80, 160, 255, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(80, 160, 255, 0.2), transparent)',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: '320px',
    background: 'rgba(10, 25, 41, 0.97)',
    backdropFilter: 'blur(12px)',
    padding: theme.spacing(4, 2),
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    borderLeft: '1px solid rgba(80, 160, 255, 0.1)',
    backgroundImage: `linear-gradient(to bottom,
      rgba(10, 25, 41, 0.97),
      rgba(15, 30, 50, 0.97)),
      radial-gradient(circle at 20% 30%, rgba(51, 153, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(100, 100, 255, 0.08) 0%, transparent 50%)`,
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
  backgroundColor: active ? 'rgba(51, 153, 255, 0.1)' : 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(51, 153, 255, 0.05)',
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
  borderTop: '1px solid rgba(80, 160, 255, 0.1)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '20%',
    right: '20%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(80, 160, 255, 0.2), transparent)',
  },
}));

const SocialSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '15px !important',
  justifyContent: 'center',
  gap: theme.spacing(3),
  position: 'relative',
  padding: theme.spacing(2),
  '&::before': {
    position: 'absolute',
    top: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: '"Roboto Mono", monospace',
    fontSize: '0.75rem',
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(10, 25, 41, 0.97)',
    padding: '0 8px',
  },
}));

const SocialLink = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  borderRadius: '50%',
  background: 'rgba(30, 45, 70, 0.3)',
  border: '1px solid rgba(80, 160, 255, 0.1)',
  width: '42px',
  height: '42px',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 5px 15px rgba(0, 120, 255, 0.2)',
    background: 'rgba(30, 45, 70, 0.5)',
  },
}));

interface StatusBadgeProps {
  online?: boolean;
}

const StatusBadge = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'online',
})<StatusBadgeProps>(({ theme, online = true }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.75rem',
  color: online ? '#4caf50' : theme.palette.text.secondary,
  fontFamily: '"Roboto Mono", monospace',
  '& .dot': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: online ? '#4caf50' : '#f44336',
    marginRight: theme.spacing(0.75),
    boxShadow: online ? '0 0 10px rgba(76, 175, 80, 0.5)' : 'none',
  },
}));

// Definição do componente principal
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const activeSection = useActiveSection();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, currentLanguage } = useTypedTranslation();

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

  // Links do menu com tradução dinâmica
  const menuLinks = [
    { id: 'home', label: `_${t('home').toLowerCase()}` },
    { id: 'formation', label: `_${t('formation').toLowerCase()}` },
    { id: 'experience', label: `_${t('experience').toLowerCase()}` },
    { id: 'projects', label: `_${t('projects').toLowerCase()}` },
    { id: 'competence', label: `_${t('skills').toLowerCase()}` },
    { id: 'contact', label: `_${t('contact').toLowerCase()}` },
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
              backgroundColor: 'rgba(5, 15, 30, 0.95)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            }),
          }}
        >
          <LogoText variant="h6" onClick={() => scrollToSection('home')}>
            <CodeIcon sx={{ fontSize: 24 }} />
            etezolin
          </LogoText>

          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* <LanguageSelector /> */}
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
                {menuLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    href={`#${link.id}`}
                    active={activeSection === link.id}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </NavLinks>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <LanguageSelector />
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <SocialLink
                    href="https://github.com/etezolin"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/in/etezolin"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </SocialLink>
                </Box>
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
            <StatusBadge sx={{ mr: 2 }}>
              <span className="dot" />
              {t('online')}
            </StatusBadge>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{
                color: 'text.secondary',
                border: '1px solid rgba(80, 160, 255, 0.1)',
                background: 'rgba(30, 45, 70, 0.3)',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ mb: 2, px: 2 }}>
          <LanguageSelector />
        </Box>

        <MenuSection>
          {menuLinks.map((link, index) => (
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
              <LineNumber>{index + 1}</LineNumber>
              <DrawerNavIcon>
                {link.id === 'home' && <HomeIcon fontSize="small" />}
                {link.id === 'formation' && <SchoolIcon fontSize="small" />}
                {link.id === 'experience' && <WorkIcon fontSize="small" />}
                {link.id === 'projects' && <ArchitectureIcon fontSize="small" />}
                {link.id === 'competence' && <TipsAndUpdatesIcon fontSize="small" />}
                {link.id === 'contact' && <ContactPageIcon fontSize="small" />}
              </DrawerNavIcon>
              {link.label}
            </DrawerNavLink>
          ))}
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
