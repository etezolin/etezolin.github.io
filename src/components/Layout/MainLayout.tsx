// etezolin-portfolio/src/components/Layout/MainLayout.tsx
import type { FC, ReactNode } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  IconButton,
  // Button,
  Typography,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  useTheme,
  // Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import { ScrollToTop } from "../shared/ScrollToTop";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "rgba(6, 17, 33, 0.8)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  padding: theme.spacing(1.5, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(1, 4),
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 600,
  letterSpacing: "-0.5px",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textDecoration: "none",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-2px)",
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "center",
}));

const NavLink = styled(motion.a)<{ active?: boolean }>(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  textDecoration: "none",
  fontSize: "0.95rem",
  fontFamily: '"Roboto Mono", monospace',
  position: "relative",
  padding: theme.spacing(0.5, 1),
  "&:hover": {
    color: theme.palette.primary.main,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: -4,
    left: 0,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: active ? 1 : 0,
    transition: "opacity 0.3s ease",
    borderRadius: "4px",
  },
}));

const SocialLink = styled("a")(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  borderRadius: "50%",
  "&:hover": {
    color: theme.palette.primary.main,
    transform: "translateY(-3px)",
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "100%",
    maxWidth: "300px",
    background: "rgba(10, 25, 41, 0.95)",
    backdropFilter: "blur(12px)",
    padding: theme.spacing(4, 2),
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  },
}));

const DrawerNavLink = styled(motion.a)<{ active?: boolean }>(
  ({ theme, active }) => ({
    color: active ? theme.palette.primary.main : theme.palette.text.primary,
    textDecoration: "none",
    fontSize: "1.1rem",
    fontFamily: '"Roboto Mono", monospace',
    padding: theme.spacing(1.5, 1),
    borderLeft: active
      ? `3px solid ${theme.palette.primary.main}`
      : "3px solid transparent",
    transition: "all 0.3s ease",
    display: "block",
    width: "100%",
    marginBottom: theme.spacing(2),
    borderRadius: "0 6px 6px 0",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: theme.palette.primary.main,
    },
  })
);

// const LanguageButton = styled(Button)(({ theme }) => ({
//   minWidth: "auto",
//   padding: theme.spacing(0.5, 1),
//   fontFamily: '"Roboto Mono", monospace',
//   fontWeight: 500,
//   fontSize: "0.85rem",
//   borderRadius: "4px",
//   transition: "all 0.2s ease",
// }));

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const activeSection = useActiveSection();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false);
    }
  };

  const menuLinks = [
    { id: "home", label: "_início" },
    { id: "about", label: "_sobre-mim" },
    { id: "formation", label: "_formação" },
    { id: "experience", label: "_experiência" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "transparent",
          transition: "all 0.3s ease",
        }}
      >
        <StyledToolbar
          sx={{
            ...(scrolled && {
              backgroundColor: "rgba(5, 15, 30, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }),
          }}
        >
          <LogoText variant="h6" onClick={() => scrollToSection("home")}>
            <CodeIcon sx={{ fontSize: 24 }} />
            etezolin
          </LogoText>

          {isMobile ? (
            <IconButton
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
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

              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                {/* <Fade in={true} style={{ transitionDelay: '200ms' }}>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <LanguageButton
                      variant={activeSection ? 'contained' : 'text'}
                      size="small"
                      color="primary"
                      sx={{
                        bgcolor: activeSection ? 'rgba(51, 153, 255, 0.15)' : 'transparent',
                      }}
                    >
                      PT
                    </LanguageButton>
                    <LanguageButton
                      size="small"
                      sx={{
                        color: 'text.secondary',
                      }}
                    >
                      EN
                    </LanguageButton>
                  </Box>
                </Fade> */}

                <Box sx={{ display: "flex", gap: 1 }}>
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

      <MobileDrawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <LogoText
            variant="h6"
            onClick={() => {
              scrollToSection("home");
              setDrawerOpen(false);
            }}
          >
            <CodeIcon sx={{ fontSize: 24 }} />
            etezolin
          </LogoText>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "text.secondary" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {menuLinks.map((link) => (
            <ListItem key={link.id} sx={{ px: 0 }}>
              <DrawerNavLink
                href={`#${link.id}`}
                active={activeSection === link.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                whileTap={{ x: 5 }}
              >
                {link.label}
              </DrawerNavLink>
            </ListItem>
          ))}
        </List>

        {/* <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 1 }}>
          <LanguageButton
            variant="contained"
            size="small"
            color="primary"
            sx={{
              bgcolor: "rgba(51, 153, 255, 0.15)",
            }}
          >
            PT
          </LanguageButton>
          <LanguageButton
            size="small"
            sx={{
              color: "text.secondary",
            }}
          >
            EN
          </LanguageButton>
        </Box> */}

        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
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
      </MobileDrawer>

      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 12 } }}>
        {children}
      </Container>

      <ScrollToTop />
    </Box>
  );
};
