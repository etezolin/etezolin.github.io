import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import { Avatar, Box, Button, Card, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { motion } from "framer-motion";
import React, { type FC, useState } from "react";
import { BiCloud } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FaGitAlt, FaGithub, FaNode } from "react-icons/fa";
import { SiApachekafka, SiDocker, SiDotnet, SiFirebase, SiJavascript, SiMui, SiPostgresql, SiRabbitmq, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandCSharp, TbBrandMongodb, TbSql } from "react-icons/tb";
import foto from "../../assets/foto.png";
import { trackProfileConversion, trackProfileTabInteraction } from "../../firebase";
import { useTypedTranslation } from "../../hooks/useTranslation";

// Styled Components Melhorados para Responsividade
const CodeText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: "#f5f5f5",
  opacity: 0.8,
  fontSize: '0.95rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.8rem',
  }
}));

const HighlightText = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

const HighlightTextV2 = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const GradientText = styled(Typography)(({ theme }) => ({
  backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
  letterSpacing: "-0.5px",
  [theme.breakpoints.down('sm')]: {
    letterSpacing: "-0.3px",
  }
}));

const GlassCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  overflow: "hidden",
  position: "relative",
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(1.5),
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0.7,
  },
}));

const TechBadge = styled(motion.div)(({ theme }) => ({
  backgroundColor: "rgba(13, 33, 55, 0.9)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  margin: theme.spacing(0.5),
  fontFamily: '"Roboto Mono", monospace',
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  cursor: "pointer",
  minWidth: 120,
  maxWidth: 160,
  flex: '1 1 auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.8, 1.5),
    margin: theme.spacing(0.3),
    minWidth: 100,
    maxWidth: 140,
  },
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(0.6, 1.2),
    margin: theme.spacing(0.2),
    minWidth: 90,
    maxWidth: 120,
    gap: theme.spacing(0.5),
  }
}));

const BaseHeader = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
  }
}));

const TechStackHeader = styled(BaseHeader)(({ theme }) => ({
  marginBottom: 25,
  opacity: 0.8,
  fontSize: "1.05rem",
  borderLeft: "3px solid #00E5FF",
  paddingLeft: 8,
  display: "inline-block",
  color: "#f5f5f5",
  [theme.breakpoints.down('sm')]: {
    marginBottom: 20,
    fontSize: "1rem",
    paddingLeft: 6,
  }
}));

const CategoryHeader = styled(BaseHeader)(({ theme }) => ({
  marginBottom: 5,
  marginTop: 15,
  opacity: 0.9,
  fontSize: "0.9rem",
  color: "#00E5FF",
  textTransform: "uppercase",
  letterSpacing: "1px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "0.85rem",
    marginTop: 12,
    letterSpacing: "0.8px",
  }
}));

const MapContainer = styled(Card)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  background: `
    radial-gradient(circle at 25% 25%, rgba(0, 229, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(2, 136, 209, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, rgba(13, 33, 55, 0.95) 0%, rgba(1, 20, 40, 0.9) 100%)
  `,
  border: '2px solid transparent',
  borderImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
  borderRadius: theme.spacing(3),
  backdropFilter: 'blur(20px)',
  boxShadow: `
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 60px rgba(0, 229, 255, 0.1)
  `,
  overflow: 'hidden',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2.5),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1.5),
  },
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 229, 255, 0.06), transparent 40%)
    `,
    opacity: 0,
    transition: 'opacity 300ms',
    pointerEvents: 'none',
  },

  '&:hover::before': {
    opacity: 1,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100px',
    height: '100px',
    background: `radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, transparent 70%)`,
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'pulse 4s ease-in-out infinite',
    zIndex: 0,
  },

  '@keyframes pulse': {
    '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.3 },
    '50%': { transform: 'translate(-50%, -50%) scale(1.5)', opacity: 0.1 },
  },
}));

const LocationChip = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  backgroundColor: 'rgba(0, 229, 255, 0.1)',
  color: '#00e5ff',
  border: '1px solid rgba(0, 229, 255, 0.3)',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(0.5, 1.5),
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.75rem',
  fontWeight: 600,
  margin: theme.spacing(0.25),
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.4, 1.2),
    fontSize: '0.7rem',
    margin: theme.spacing(0.2),
    gap: theme.spacing(0.3),
  },
  [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(0.3, 1),
    fontSize: '0.65rem',
    margin: theme.spacing(0.15),
  }
}));

const ContactButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.9rem",
  textTransform: "none",
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1.5, 3),
  marginTop: theme.spacing(2),
  background: `linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #e55039 100%)`,
  color: "#ffffff",
  border: "none",
  boxShadow: "0 4px 15px rgba(238, 90, 36, 0.3)",
  [theme.breakpoints.down('sm')]: {
    fontSize: "0.85rem",
    padding: theme.spacing(1.2, 2.5),
    marginTop: theme.spacing(1.5),
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: "0.8rem",
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(1),
  },
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(238, 90, 36, 0.4)",
    background: `linear-gradient(135deg, #ff7675 0%, #e84393 50%, #fd79a8 100%)`,
  },
}));

// Animações Simplificadas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

interface HomeProps {
  googleMapsApiKey?: string;
}

const Home: FC<HomeProps> = ({
  googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""
}) => {
  const theme = useTheme();
  const { t } = useTypedTranslation();
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  // Breakpoints responsivos
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const curitibaPosition = { lat: -25.4284, lng: -49.2733 };

  // Event Handlers Consolidados
  const handleTrack = (action: string, label: string, extra?: string) => {
    trackProfileTabInteraction("home", action, label);
    if (extra) trackProfileConversion(extra, "home");
  };

  const handleContactClick = (method: string, action: () => void) => {
    handleTrack("contact_click", method, `${method}_contact`);
    action();
  };

  const handleSocialClick = (platform: string, url: string) => {
    handleTrack("social_link_click", platform, "social_visit");
    window.open(url, "_blank", "noopener noreferrer");
  };

  const scrollToContact = () => {
    handleTrack("map_contact_button", "scroll_to_contact");
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Tech Stack Data Consolidado
  const techCategories = {
    backend: [
      { name: "C#", color: "#9B4F96", icon: TbBrandCSharp },
      { name: ".NET", color: "#94d2bd", icon: SiDotnet },
      { name: "Node", color: "#ffd166", icon: FaNode },
      { name: "RabbitMQ", color: "#eae2b7", icon: SiRabbitmq },
      { name: "Apache Kafka", color: "#adb5bd", icon: SiApachekafka },
    ],
    frontend: [
      { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "TypeScript", color: "#007ACC", icon: SiTypescript },
      { name: "MaterialUI", color: "#0081CB", icon: SiMui },
      { name: "Tailwind CSS", color: "#6668e9", icon: SiTailwindcss },
    ],
    database: [
      { name: "SQL", color: "#4479A1", icon: TbSql },
      { name: "Firebase", color: "#c49d31", icon: SiFirebase },
      { name: "SQLServer", color: "#fff", icon: DiMsqlServer },
      { name: "PostgreSQL", color: "#48cae4", icon: SiPostgresql },
      { name: "MongoDB", color: "#adc178", icon: TbBrandMongodb },
    ],
    cloud: [
      { name: "Google Cloud", color: "#a14744", icon: BiCloud },
      { name: "Docker", color: "#2496ED", icon: SiDocker },
      { name: "Github", color: "#44a149", icon: FaGithub },
      { name: "Git Actions", color: "#31c493", icon: FaGitAlt },
      { name: "Cloud Build", color: "#fb8500", icon: BiCloud },
    ],
  };

  const renderTechSection = (categoryKey: string, techs: Array<{ name: string, color: string, icon: any }>) => (
    <Box key={categoryKey} sx={{ mb: { xs: 2, sm: 3 } }}>
      <CategoryHeader>{t(categoryKey as any)}</CategoryHeader>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: "4px", sm: "6px", md: "8px" },
        justifyContent: { xs: 'center', sm: 'flex-start' }
      }}>
        {techs.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)", y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechBadge
              style={{ borderLeft: `3px solid ${item.color}`, justifyContent: "left" }}
              onClick={() => handleTrack("tech_badge_click", item.name)}
              onMouseEnter={() => handleTrack("tech_badge_hover", item.name)}
            >
              <Box component="span" sx={{
                color: item.color,
                display: "flex",
                alignItems: "center",
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" }
              }}>
                {React.createElement(item.icon)}
              </Box>
              <Typography sx={{
                color: "white",
                fontSize: { xs: 10, sm: 11, md: 11.5 },
                fontWeight: 500,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {item.name}
              </Typography>
            </TechBadge>
          </motion.div>
        ))}
      </Box>
    </Box>
  );

  const renderMap = () => {
    const mapHeight = isMobile ? 280 : isTablet ? 320 : 350;

    const modernMapStyles = [
      { "featureType": "all", "elementType": "geometry", "stylers": [{ "color": "#0a1929" }] },
      { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#00e5ff" }] },
      { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#0a1929" }, { "weight": 2 }] },
      { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#0d47a1" }] },
      { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#4fc3f7" }] },
      { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#1a237e" }] },
      { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#3f51b5" }] },
      { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#0f1419" }] },
      { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#1565c0" }] },
      { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#00e5ff" }, { "weight": 1 }] },
    ];

    const mapOptions: google.maps.MapOptions = {
      zoom: isMobile ? 5 : isTablet ? 5.5 : 6,
      center: curitibaPosition,
      mapTypeId: 'roadmap',
      styles: modernMapStyles,
      disableDefaultUI: isMobile,
      zoomControl: !isMobile,
      streetViewControl: false,
      fullscreenControl: !isMobile,
      mapTypeControl: false,
      gestureHandling: isMobile ? 'cooperative' : 'auto',
    };

    if (!googleMapsApiKey || googleMapsApiKey.length <= 10) {
      return (
        <Box sx={{
          height: mapHeight,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed rgba(0, 229, 255, 0.3)',
          borderRadius: 2,
          backgroundColor: 'rgba(0, 229, 255, 0.05)',
          padding: { xs: 2, sm: 3 },
          position: 'relative',
          zIndex: 1,
        }}>
          <Typography variant="h6" sx={{
            color: 'secondary.main',
            mb: 2,
            fontSize: { xs: '1rem', sm: '1.25rem' },
            textAlign: 'center'
          }}>
            {t("staticLocation")}
          </Typography>
          <Typography variant="body2" sx={{
            color: 'text.secondary',
            textAlign: 'center',
            mb: 3,
            fontSize: { xs: '0.8rem', sm: '0.875rem' }
          }}>
            {t("googleMapsUnavailable")}
          </Typography>
          <Box sx={{
            p: { xs: 2, sm: 3 },
            textAlign: 'center',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            borderRadius: 2,
            backgroundColor: 'rgba(13, 33, 55, 0.3)',
            width: '100%',
            maxWidth: 400
          }}>
            <Typography variant="h6" sx={{
              color: 'secondary.main',
              mb: 2,
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}>
              {t("curitibaLocation")}
            </Typography>
            <Typography variant="body2" sx={{
              color: 'text.secondary',
              mb: 1,
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}>
              {t("coordinates")}
            </Typography>
            <Typography variant="body2" sx={{
              color: 'text.secondary',
              mb: 2,
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}>
              {t("timezone")}
            </Typography>
            <ContactButton
              onClick={scrollToContact}
              startIcon={<EmailIcon />}
              fullWidth={isMobile}
              size={isMobile ? "small" : "medium"}
            >
              {t("contactButton")}
            </ContactButton>
          </Box>
        </Box>
      );
    }

    return (
      <Box sx={{
        width: '100%',
        height: mapHeight,
        borderRadius: 1.5,
        overflow: 'hidden',
        border: '2px solid rgba(0, 229, 255, 0.3)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        zIndex: 1,
      }}>
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={mapOptions}
          >
            <Marker
              position={curitibaPosition}
              onClick={() => {
                setIsInfoWindowOpen(true);
                handleTrack("map_interaction", "curitiba_marker");
              }}
              icon={{
                url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                  <svg width="${isMobile ? 35 : 40}" height="${isMobile ? 35 : 40}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#00e5ff;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#0288d1;stop-opacity:1" />
                      </radialGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <circle cx="20" cy="20" r="15" fill="url(#grad)" filter="url(#glow)" stroke="#ffffff" stroke-width="3"/>
                    <circle cx="20" cy="20" r="6" fill="#ffffff"/>
                    <circle cx="20" cy="20" r="3" fill="#00e5ff"/>
                  </svg>
                `),
                scaledSize: typeof window !== 'undefined' && window.google ?
                  new window.google.maps.Size(isMobile ? 35 : 40, isMobile ? 35 : 40) : undefined,
                anchor: typeof window !== 'undefined' && window.google ?
                  new window.google.maps.Point(isMobile ? 17.5 : 20, isMobile ? 17.5 : 20) : undefined,
              }}
              animation={typeof window !== 'undefined' && window.google ? window.google.maps.Animation.DROP : undefined}
            />

            {isInfoWindowOpen && (
              <InfoWindow
                position={curitibaPosition}
                onCloseClick={() => setIsInfoWindowOpen(false)}
                options={{
                  pixelOffset: typeof window !== 'undefined' && window.google ?
                    new window.google.maps.Size(0, isMobile ? -35 : -40) : undefined
                }}
              >
                <Box sx={{
                  background: `linear-gradient(135deg, rgba(13, 33, 55, 0.95) 0%, rgba(1, 20, 40, 0.9) 100%)`,
                  border: '1px solid rgba(0, 229, 255, 0.4)',
                  borderRadius: 1.5,
                  padding: { xs: 1.5, sm: 2 },
                  minWidth: { xs: 240, sm: 280 },
                  maxWidth: { xs: 280, sm: 320 },
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
                }}>
                  <Typography variant="h6" sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: '#00e5ff',
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}>
                    <HomeIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                    {t("curitibaLocation")}
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: '#ffffff',
                    lineHeight: 1.5,
                    fontSize: { xs: '0.75rem', sm: '0.85rem' }
                  }}>
                    {t("brazilSouthRegion")}<br />
                    {t("timezone")}<br />
                  </Typography>
                </Box>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </Box>
    );
  };

  return (
    <Container
      component="section"
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ width: "100%" }}>

        {/* Hero Section */}
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, sm: 5, md: 6 },
          mb: { xs: 6, sm: 7, md: 8 },
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <motion.div variants={itemVariants}>
            <Avatar
              src={foto}
              alt="Edison Tezolin"
              sx={{
                width: { xs: 100, sm: 120, md: 160 },
                height: { xs: 100, sm: 120, md: 160 },
                border: "4px solid #00E5FF",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
                marginTop: { xs: 2 }
              }}
              onClick={() => handleTrack("avatar_click", "profile_photo")}
            />
          </motion.div>

          <Box sx={{ width: '100%' }}>
            <motion.div variants={itemVariants}>
              <CodeText variant="body2" gutterBottom sx={{ mb: 1 }}>
                {t("helloEveryone")}
              </CodeText>
            </motion.div>
            <motion.div variants={itemVariants}>
              <GradientText variant="h1" sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
                mb: 2,
                wordBreak: 'break-word'
              }}>
                Edison Tezolin
              </GradientText>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography variant="h2" sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                color: "text.secondary",
                fontFamily: '"Roboto Mono", monospace',
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: 'center', md: 'flex-start' },
                flexWrap: 'wrap'
              }}>
                <Box component="span" sx={{
                  color: theme.palette.secondary.main,
                  mr: 1,
                  fontSize: "1.3em",
                  opacity: 0.8
                }}>
                  &gt;
                </Box>
                {t("fullStackDeveloper")}
              </Typography>
            </motion.div>
          </Box>
        </Box>

        {/* Contact Card */}
        <motion.div variants={itemVariants}>
          <GlassCard sx={{
            mb: 4,
            maxWidth: { xs: '100%', sm: 700 },
            mx: 'auto'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CodeText sx={{
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" },
                lineHeight: 1.8,
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
                whiteSpace: { xs: 'pre-wrap', sm: 'nowrap' }
              }}>
                <HighlightText>const</HighlightText> phone = <span
                  style={{
                    color: theme.palette.secondary.main,
                    cursor: "pointer",
                    whiteSpace: 'nowrap'
                  }}
                  onClick={() => handleContactClick("phone", () => window.open("tel:41998335860"))}
                >
                  "+55 41 99833-5860"
                </span>;<br />
                <HighlightText>const</HighlightText> email ={isMobile ? <><br />&nbsp;&nbsp;</> : ' '}<span
                  style={{
                    color: theme.palette.secondary.main,
                    cursor: "pointer",
                    whiteSpace: 'nowrap'
                  }}
                  onClick={() => handleContactClick("email", () => window.open("mailto:tezolin.edison@gmail.com"))}
                >
                  "tezolin.edison@gmail.com"
                </span>;<br />
                <HighlightText>const</HighlightText> github ={isMobile ? <><br />&nbsp;&nbsp;</> : ' '}<span
                  onClick={() => handleSocialClick("github", "https://github.com/etezolin")}
                  style={{
                    color: theme.palette.secondary.main,
                    textDecoration: "none",
                    cursor: "pointer",
                    whiteSpace: 'nowrap'
                  }}
                >
                  "github.com/etezolin"
                </span>;<br />
                <HighlightText>const</HighlightText> linkedIn ={isMobile ? <><br />&nbsp;&nbsp;</> : ' '}<span
                  onClick={() => handleSocialClick("linkedin", "https://www.linkedin.com/in/etezolin")}
                  style={{
                    color: theme.palette.secondary.main,
                    textDecoration: "none",
                    cursor: "pointer",
                    whiteSpace: 'nowrap'
                  }}
                >
                  "linkedin.com/in/etezolin"
                </span>;
              </CodeText>
            </motion.div>
          </GlassCard>
        </motion.div>

        {/* Map Section */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MapContainer
            onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              (e.currentTarget as HTMLElement).style.setProperty('--mouse-x', x + 'px');
              (e.currentTarget as HTMLElement).style.setProperty('--mouse-y', y + 'px');
            }}
          >
            <Typography variant="h4" sx={{
              fontFamily: '"Roboto Mono", monospace',
              color: 'secondary.main',
              textAlign: 'center',
              mb: 1,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1,
            }}>
              <LocationOnIcon />
              <span>{t("title")}</span>
            </Typography>
            <Typography variant="body1" sx={{
              fontFamily: '"Roboto Mono", monospace',
              color: 'text.secondary',
              textAlign: 'center',
              mb: 3,
              fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
              px: { xs: 1, sm: 2 },
              position: 'relative',
              zIndex: 1,
            }}>
              {t("description")}
            </Typography>

            {renderMap()}

            <Box sx={{ mt: 3, textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 0.5, sm: 1 },
                flexWrap: 'wrap',
                mb: 2
              }}>
                <LocationChip>
                  <WorkIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />
                  {t("remoteNational")}
                </LocationChip>
                <LocationChip>
                  <WorkIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />
                  {t("remoteInternational")}
                </LocationChip>
                <LocationChip>
                  <LocationOnIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />
                  {t("curitibaLocal")}
                </LocationChip>
                <LocationChip>
                  <HomeIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />
                  {t("hybrid")}
                </LocationChip>
              </Box>
              <Typography variant="body2" sx={{
                fontFamily: '"Roboto Mono", monospace',
                color: 'text.secondary',
                fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                fontStyle: 'italic',
                px: { xs: 1, sm: 2 }
              }}>
                {t("slogan")}
              </Typography>
            </Box>
          </MapContainer>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants}>
          <TechStackHeader sx={{ marginBottom: 1 }}>
            {t("myTechStack")}
          </TechStackHeader>
        </motion.div>

        <motion.div variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.7 } }
        }}>
          {Object.entries(techCategories).map(([key, techs]) => renderTechSection(key, techs))}
        </motion.div>

        <Box sx={{ mt: { xs: 2, sm: 3 } }}>
          <motion.div variants={itemVariants}>
            <TechStackHeader>{t("messageToRecruiters")}</TechStackHeader>
          </motion.div>
          <Typography sx={{
            fontFamily: '"Roboto Mono", monospace',
            color: theme.palette.text.primary,
            marginBottom: theme.spacing(3),
            lineHeight: 1.6,
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
          }}>
            {t("recruiterMessagePt1")}
            <HighlightTextV2>{t("technicalExcellence")}</HighlightTextV2>
            {t("recruiterMessagePt2")}
            <HighlightTextV2>{t("valueDelivery")}</HighlightTextV2>
            {t("recruiterMessagePt3")}
          </Typography>
        </Box>

        {/* Background decoration */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.5 }}
          sx={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: "40%",
            height: "40%",
            backgroundImage: "url(/code-bg.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
            filter: "blur(1px)",
            display: { xs: "none", md: "block" }
          }}
        />
      </motion.div>
    </Container>
  );
};

export default Home;
// import {
//   Avatar,
//   Box,
//   Card,
//   Container,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import React, { type FC } from "react";
// import { BiCloud } from "react-icons/bi";
// import { DiMsqlServer } from "react-icons/di";
// import { FaGitAlt, FaGithub, FaNode } from "react-icons/fa";
// import {
//   SiApachekafka,
//   SiDocker,
//   SiDotnet,
//   SiFirebase,
//   SiJavascript,
//   SiMui,
//   SiPostgresql,
//   SiRabbitmq,
//   SiReact,
//   SiTailwindcss,
//   SiTypescript
// } from "react-icons/si";
// import { TbBrandCSharp, TbBrandMongodb, TbSql } from "react-icons/tb";
// import foto from "../../assets/foto.png";
// import {
//   trackProfileConversion,
//   trackProfileTabInteraction,
// } from "../../firebase";
// import { useTypedTranslation } from "../../hooks/useTranslation";

// const CodeText = styled(Typography)(() => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: "#f5f5f5",
//   opacity: 0.8,
// }));

// const HighlightText = styled("span")(({ theme }) => ({
//   color: theme.palette.primary.main,
//   fontWeight: 500,
// }));

// const HighlightTextV2 = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
// }));

// const GradientText = styled(Typography)(({ theme }) => ({
//   backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//   backgroundClip: "text",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   fontWeight: 700,
//   letterSpacing: "-0.5px",
// }));

// const GlassCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease",
//   overflow: "hidden",
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "2px",
//     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//     opacity: 0.7,
//   },
// }));

// const TechBadge = styled(motion.div)(({ theme }) => ({
//   backgroundColor: "rgba(13, 33, 55, 0.9)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(1, 2),
//   margin: theme.spacing(0.5),
//   fontFamily: '"Roboto Mono", monospace',
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: theme.spacing(1),
//   cursor: "pointer",
// }));

// const ProfileAvatar = styled(Avatar)({
//   width: 160,
//   height: 160,
//   border: "4px solid #00E5FF",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
// });

// const TechStackHeader = styled(Typography)({
//   marginBottom: 25,
//   opacity: 0.8,
//   fontSize: "1.05rem",
//   fontFamily: '"Roboto Mono", monospace',
//   fontWeight: 600,
//   borderLeft: "3px solid #00E5FF",
//   paddingLeft: 8,
//   display: "inline-block",
//   color: "#f5f5f5",
// });

// const CategoryHeader = styled(Typography)({
//   marginBottom: 5,
//   marginTop: 15,
//   opacity: 0.9,
//   fontSize: "0.9rem",
//   fontFamily: '"Roboto Mono", monospace',
//   fontWeight: 500,
//   color: "#00E5FF",
//   textTransform: "uppercase",
//   letterSpacing: "1px",
// });

// const OutputText = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.primary,
//   marginBottom: theme.spacing(3),
//   lineHeight: 1.6,
// }));

// // Animações
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5 },
//   },
// };

// const techStackVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.7,
//     },
//   },
// };

// const Home: FC = () => {
//   const theme = useTheme();
//   const { t } = useTypedTranslation();

//   // Função para rastrear cliques em links sociais
//   const handleSocialLinkClick = (platform: string, url: string) => {
//     trackProfileTabInteraction("home", "social_link_click", platform);
//     trackProfileConversion("social_visit", "home");
//     window.open(url, "_blank", "noopener noreferrer");
//   };

//   // Função para rastrear cliques em contato
//   const handleContactClick = (method: string, action: () => void) => {
//     trackProfileTabInteraction("home", "contact_click", method);
//     trackProfileConversion(`${method}_contact`, "home");
//     action();
//   };

//   // Função para rastrear cliques em tecnologias
//   const handleTechClick = (techName: string) => {
//     trackProfileTabInteraction("home", "tech_badge_click", techName);
//   };

//   // Função para rastrear hover em tecnologias
//   const handleTechHover = (techName: string) => {
//     trackProfileTabInteraction("home", "tech_badge_hover", techName);
//   };

//   // Função para rastrear clique no avatar
//   const handleAvatarClick = () => {
//     trackProfileTabInteraction("home", "avatar_click", "profile_photo");
//   };

//   // Tecnologias organizadas por categoria
//   const techCategories = {
//     backend: [
//       { name: "C#", color: "#9B4F96", icon: TbBrandCSharp },
//       { name: ".NET", color: "#94d2bd", icon: SiDotnet },
//       { name: "Node", color: "#ffd166", icon: FaNode },
//       { name: "RabbitMQ", color: "#eae2b7", icon: SiRabbitmq },
//       { name: "Apache Kafka", color: "#adb5bd", icon: SiApachekafka },
//     ],
//     frontend: [
//       { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
//       { name: "React", color: "#61DAFB", icon: SiReact },
//       { name: "TypeScript", color: "#007ACC", icon: SiTypescript },
//       { name: "MaterialUI", color: "#0081CB", icon: SiMui },
//       { name: "Tailwind CSS", color: "#6668e9", icon: SiTailwindcss },
//     ],
//     database: [
//       { name: "SQL", color: "#4479A1", icon: TbSql },
//       { name: "Firebase", color: "#c49d31", icon: SiFirebase },
//       { name: "SQLServer", color: "#fff", icon: DiMsqlServer },
//       { name: "PostgreSQL", color: "#48cae4", icon: SiPostgresql },
//       { name: "MongoDB", color: "#adc178", icon: TbBrandMongodb },
//     ],
//     cloud: [
//       { name: "Google Cloud", color: "#a14744", icon: BiCloud },
//       { name: "Docker", color: "#2496ED", icon: SiDocker },
//       { name: "Github", color: "#44a149", icon: FaGithub },
//       { name: "Git Actions", color: "#31c493", icon: FaGitAlt },
//       { name: "Cloud Build", color: "#fb8500", icon: BiCloud },
//     ],
//   };

//   const renderTechSection = (categoryKey: string, techs: Array<{ name: string, color: string, icon: any }>) => (
//     <Box key={categoryKey}>
//       <CategoryHeader>{t(categoryKey as any)}</CategoryHeader>
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "8px",
//         }}
//       >
//         {techs.map((item) => (
//           <motion.div
//             key={item.name}
//             variants={itemVariants}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
//               y: -5,
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <TechBadge
//               style={{
//                 borderLeft: `3px solid ${item.color}`,
//                 width: 145,
//                 display: "flex",
//                 justifyContent: "left",
//                 flexDirection: "row",
//               }}
//               onClick={() => handleTechClick(item.name)}
//               onMouseEnter={() => handleTechHover(item.name)}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: item.color,
//                   display: "flex",
//                   alignItems: "center",
//                   fontSize: "1rem",
//                 }}
//               >
//                 {React.createElement(item.icon)}
//               </Box>
//               <Typography
//                 sx={{
//                   color: "white",
//                   fontSize: 11.5,
//                   fontWeight: 500,
//                 }}
//               >
//                 {item.name}
//               </Typography>
//             </TechBadge>
//           </motion.div>
//         ))}
//       </Box>
//     </Box>
//   );

//   return (
//     <Container
//       component="section"
//       id="home"
//       sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
//     >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         style={{ width: "100%" }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             gap: 6,
//             mb: 8,
//           }}
//         >
//           <motion.div variants={itemVariants}>
//             <ProfileAvatar
//               src={foto}
//               alt="Edison Tezolin"
//               sx={{
//                 display: "block",
//                 position: "relative",
//                 marginTop: { xs: 2 },
//                 width: { xs: 120, md: 160 },
//                 height: { xs: 120, md: 160 },
//                 cursor: "pointer",
//               }}
//               onClick={handleAvatarClick}
//             />
//           </motion.div>

//           <Box>
//             <motion.div variants={itemVariants}>
//               <CodeText variant="body2" gutterBottom sx={{ mb: 1 }}>
//                 {t("helloEveryone")}
//               </CodeText>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <GradientText
//                 variant="h1"
//                 sx={{
//                   fontSize: { xs: "2.5rem", md: "4rem" },
//                   mb: 2,
//                 }}
//               >
//                 Edison Tezolin
//               </GradientText>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: "1.2rem", md: "1.5rem" },
//                   color: "text.secondary",
//                   fontFamily: '"Roboto Mono", monospace',
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <Box
//                   component="span"
//                   sx={{
//                     color: theme.palette.secondary.main,
//                     mr: 1,
//                     fontSize: "1.3em",
//                     opacity: 0.8,
//                   }}
//                 >
//                   &gt;
//                 </Box>
//                 {t("fullStackDeveloper")}
//               </Typography>
//             </motion.div>
//           </Box>
//         </Box>

//         <motion.div variants={itemVariants}>
//           <GlassCard sx={{ mb: 4, maxWidth: 700 }}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               <CodeText sx={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
//                 <HighlightText>const</HighlightText> phone ={" "}
//                 <span
//                   style={{
//                     color: theme.palette.secondary.main,
//                     cursor: "pointer",
//                   }}
//                   onClick={() =>
//                     handleContactClick("phone", () =>
//                       window.open("tel:41998335860")
//                     )
//                   }
//                 >
//                   "41 99833 5860"
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> email ={" "}
//                 <span
//                   style={{
//                     color: theme.palette.secondary.main,
//                     cursor: "pointer",
//                   }}
//                   onClick={() =>
//                     handleContactClick("email", () =>
//                       window.open("mailto:tezolin.edison@gmail.com")
//                     )
//                   }
//                 >
//                   "tezolin.edison@gmail.com"
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> github ={" "}
//                 <span
//                   onClick={() =>
//                     handleSocialLinkClick(
//                       "github",
//                       "https://github.com/etezolin"
//                     )
//                   }
//                   style={{
//                     color: theme.palette.secondary.main,
//                     textDecoration: "none",
//                     cursor: "pointer",
//                   }}
//                 >
//                   "github.com/etezolin"
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> linkedIn ={" "}
//                 <span
//                   onClick={() =>
//                     handleSocialLinkClick(
//                       "linkedin",
//                       "https://www.linkedin.com/in/etezolin"
//                     )
//                   }
//                   style={{
//                     color: theme.palette.secondary.main,
//                     textDecoration: "none",
//                     cursor: "pointer",
//                   }}
//                 >
//                   "linkedin.com/in/etezolin"
//                 </span>
//                 ;
//               </CodeText>
//             </motion.div>
//           </GlassCard>
//         </motion.div>

//         <motion.div variants={itemVariants}>
//           <TechStackHeader sx={{ marginBottom: 1 }}>
//             {t("myTechStack")}
//           </TechStackHeader>
//         </motion.div>

//         <motion.div variants={techStackVariants}>
//           {renderTechSection("backend", techCategories.backend)}
//           {renderTechSection("frontend", techCategories.frontend)}
//           {renderTechSection("database", techCategories.database)}
//           {renderTechSection("cloud", techCategories.cloud)}
//         </motion.div>

//         <Box sx={{ mt: 3 }}>
//           <motion.div variants={itemVariants}>
//             <TechStackHeader>{t("messageToRecruiters")}</TechStackHeader>
//           </motion.div>
//           <OutputText>
//             {t("recruiterMessagePt1")}
//             <HighlightTextV2>{t("technicalExcellence")}</HighlightTextV2>
//             {t("recruiterMessagePt2")}
//             <HighlightTextV2>{t("valueDelivery")}</HighlightTextV2>
//             {t("recruiterMessagePt3")}
//           </OutputText>
//         </Box>

//         {/* Background decoration */}
//         <Box
//           component={motion.div}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.05 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           sx={{
//             position: "absolute",
//             top: "20%",
//             right: "5%",
//             width: "40%",
//             height: "40%",
//             backgroundImage: "url(/code-bg.svg)",
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             zIndex: -1,
//             filter: "blur(1px)",
//             display: { xs: "none", md: "block" },
//           }}
//         />
//       </motion.div>
//     </Container>
//   );
// };

// export default Home;
