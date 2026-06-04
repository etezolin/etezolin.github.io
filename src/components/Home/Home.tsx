import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { alpha, keyframes, styled } from '@mui/material/styles';
import { GoogleMap, InfoWindow, LoadScript, MarkerF } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import React, { type FC, useState } from 'react';
import { BiCloud } from 'react-icons/bi';
import { DiMsqlServer } from 'react-icons/di';
import { FaGitAlt, FaGithub, FaNode } from 'react-icons/fa';
import {
  SiDocker,
  SiDotnet,
  SiFigma,
  SiGithubactions,
  SiGooglebigquery,
  SiJavascript,
  SiJira,
  SiMui,
  SiPostgresql,
  SiPostman,
  SiRabbitmq,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import {
  TbApi,
  TbBrandCSharp,
  TbBrandMongodb,
  TbDatabase,
  TbHierarchy3,
  TbLayersIntersect,
  TbTopologyStar3,
} from 'react-icons/tb';
import foto from '../../assets/foto.png';
import { trackProfileConversion, trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation } from '../../hooks/useTranslation';

// ─── Keyframe Animations ───────────────────────────────────────────────────────
const rotateGradient = keyframes`
  0%   { background-position: 0%   50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0%   50%; }
`;

const pulseDot = keyframes`
  0%, 100% { box-shadow: 0 0 0 0   rgba(0, 230, 118, 0.5); }
  50%       { box-shadow: 0 0 0 5px rgba(0, 230, 118, 0);   }
`;

const blinkCursor = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

// ─── Styled Components ─────────────────────────────────────────────────────────
const AvatarRingWrapper = styled(Box)(({ theme }) => ({
  padding: '3px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, #818cf8, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  backgroundSize: '300% 300%',
  animation: `${rotateGradient} 5s ease infinite`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 0 32px rgba(51, 153, 255, 0.22), 0 0 80px rgba(51, 153, 255, 0.08)`,
  cursor: 'pointer',
  flexShrink: 0,
}));

const StatusBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  backgroundColor: 'rgba(0, 230, 118, 0.07)',
  border: '1px solid rgba(0, 230, 118, 0.22)',
  borderRadius: 20,
  padding: '5px 14px',
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.7rem',
  color: theme.palette.secondary.main,
  fontWeight: 600,
  letterSpacing: '1px',
  textTransform: 'uppercase',
}));

const PulseDot = styled(Box)(({ theme }) => ({
  width: 7,
  height: 7,
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.main,
  flexShrink: 0,
  animation: `${pulseDot} 2s ease-in-out infinite`,
}));

const GradientText = styled(Typography)(({ theme }) => ({
  backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 35%, ${theme.palette.secondary.main} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  letterSpacing: '-1.5px',
  lineHeight: 1.05,
}));

const CursorBlink = styled('span')({
  display: 'inline-block',
  width: '2px',
  height: '0.85em',
  backgroundColor: '#00e676',
  marginLeft: '3px',
  verticalAlign: 'text-bottom',
  animation: `${blinkCursor} 1.1s step-end infinite`,
  borderRadius: '1px',
});

const TerminalCard = styled(Card)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.92),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 14,
  overflow: 'hidden',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)'
      : '0 4px 24px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.28),
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 48px rgba(0,0,0,0.55)'
        : '0 8px 32px rgba(15,23,42,0.12)',
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: 10,
  },
}));

const TerminalHeader = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.05)',
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: 7,
  borderBottom:
    theme.palette.mode === 'dark'
      ? '1px solid rgba(255,255,255,0.04)'
      : `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  userSelect: 'none',
}));

const TerminalContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 3),
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.9rem',
  lineHeight: 2.1,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    fontSize: '0.8rem',
    lineHeight: 2,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 600,
  fontSize: '0.95rem',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  '&::before': {
    content: '""',
    display: 'inline-block',
    width: '3px',
    height: '1em',
    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px',
    flexShrink: 0,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.88rem',
  },
}));

const TechBadge = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.85, 1.5),
  background: alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 8,
  cursor: 'pointer',
  minWidth: 105,
  boxShadow:
    theme.palette.mode === 'dark' ? '0 2px 8px rgba(0,0,0,0.25)' : '0 2px 8px rgba(15,23,42,0.07)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.7, 1.2),
    minWidth: 88,
    gap: theme.spacing(0.75),
  },
}));

const CategoryLabel = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '1.8px',
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  opacity: 0.6,
  marginBottom: theme.spacing(0.75),
  marginTop: theme.spacing(2),
}));

const MapContainer = styled(Card)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  background: alpha(theme.palette.background.paper, 0.92),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 14,
  backdropFilter: 'blur(16px)',
  boxShadow:
    theme.palette.mode === 'dark' ? '0 4px 32px rgba(0,0,0,0.4)' : '0 4px 24px rgba(15,23,42,0.08)',
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 70%, transparent 100%)`,
    opacity: 0.5,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: 10,
  },
}));

const LocationChip = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  color: theme.palette.primary.main,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(0.5, 1.5),
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.7rem',
  fontWeight: 600,
  margin: theme.spacing(0.3),
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.4, 1.2),
    fontSize: '0.66rem',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.85rem',
  textTransform: 'none',
  borderRadius: 8,
  padding: theme.spacing(1.2, 3),
  marginTop: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: '#fff',
  boxShadow: '0 4px 16px rgba(51, 153, 255, 0.25)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 28px rgba(51, 153, 255, 0.35)',
    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  },
}));

// ─── Animation Variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const techStackVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
};

// ─── Component ─────────────────────────────────────────────────────────────────
interface HomeProps {
  googleMapsApiKey?: string;
}

const Home: FC<HomeProps> = ({
  googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
}) => {
  const theme = useTheme();
  const { t } = useTypedTranslation();
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const curitibaPosition = { lat: -25.4284, lng: -49.2733 };

  const handleTrack = (action: string, label: string, extra?: string) => {
    trackProfileTabInteraction('home', action, label);
    if (extra) trackProfileConversion(extra, 'home');
  };

  const handleContactClick = (method: string, action: () => void) => {
    handleTrack('contact_click', method, `${method}_contact`);
    action();
  };

  const handleSocialClick = (platform: string, url: string) => {
    handleTrack('social_link_click', platform, 'social_visit');
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const scrollToContact = () => {
    handleTrack('map_contact_button', 'scroll_to_contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const techCategories = {
    backend: [
      { name: 'C#', color: '#9B4F96', icon: TbBrandCSharp },
      { name: '.NET', color: '#94d2bd', icon: SiDotnet },
      { name: 'ASP.NET Core', color: '#512BD4', icon: SiDotnet },
      { name: 'Node.js', color: '#539E43', icon: FaNode },
      { name: 'Dapper', color: '#2563EB', icon: TbDatabase },
      { name: 'Entity Framework', color: '#68217A', icon: SiDotnet },
    ],
    frontend: [
      { name: 'JavaScript', color: '#F7DF1E', icon: SiJavascript },
      { name: 'React', color: '#61DAFB', icon: SiReact },
      { name: 'TypeScript', color: '#007ACC', icon: SiTypescript },
      { name: 'MaterialUI', color: '#0081CB', icon: SiMui },
      { name: 'Tailwind CSS', color: '#6668e9', icon: SiTailwindcss },
    ],
    database: [
      { name: 'SQLServer', color: '#ac0e0e', icon: DiMsqlServer },
      { name: 'PostgreSQL', color: '#48cae4', icon: SiPostgresql },
      { name: 'BigQuery', color: '#c49d31', icon: SiGooglebigquery },
      { name: 'MongoDB', color: '#adc178', icon: TbBrandMongodb },
    ],
    cloud: [
      { name: 'Google Cloud', color: '#a14744', icon: BiCloud },
      { name: 'Docker', color: '#2496ED', icon: SiDocker },
      { name: 'Git', color: '#F05032', icon: FaGitAlt },
      { name: 'Github', color: '#44a149', icon: FaGithub },
      { name: 'GitHub Actions', color: '#2088FF', icon: SiGithubactions },
      { name: 'Cloud Build', color: '#fb8500', icon: BiCloud },
    ],
    tools: [
      { name: 'Postman', color: '#FF6C37', icon: SiPostman },
      { name: 'Swagger', color: '#85EA2D', icon: SiSwagger },
      { name: 'Figma', color: '#F24E1E', icon: SiFigma },
      { name: 'Jira', color: '#0052CC', icon: SiJira },
    ],
    architecture: [
      { name: 'Clean Architecture', color: '#7B68EE', icon: TbLayersIntersect },
      { name: 'DDD', color: '#8B5CF6', icon: TbHierarchy3 },
      { name: 'Microservices', color: '#7B68EE', icon: TbTopologyStar3 },
      { name: 'RabbitMQ', color: '#FF6600', icon: SiRabbitmq },
      // { name: 'Apache Kafka', color: '#231F20', icon: SiApachekafka },
      { name: 'REST API', color: '#3DDC84', icon: TbApi },
    ],
  };

  const contactItems = [
    {
      key: 'phone',
      label: 'phone',
      value: '"+55 41 99833-5860"',
      onClick: () => handleContactClick('phone', () => window.open('tel:41998335860')),
    },
    {
      key: 'email',
      label: 'email',
      value: '"tezolin.edison@gmail.com"',
      onClick: () =>
        handleContactClick('email', () => window.open('mailto:tezolin.edison@gmail.com')),
    },
    {
      key: 'github',
      label: 'github',
      value: '"github.com/etezolin"',
      onClick: () => handleSocialClick('github', 'https://github.com/etezolin'),
    },
    {
      key: 'linkedin',
      label: 'linkedIn',
      value: '"linkedin.com/in/etezolin"',
      onClick: () => handleSocialClick('linkedin', 'https://www.linkedin.com/in/etezolin'),
    },
  ];

  const renderTechSection = (
    categoryKey: 'backend' | 'frontend' | 'database' | 'cloud',
    techs: Array<{ name: string; color: string; icon: React.ComponentType }>
  ) => (
    <Box key={categoryKey} sx={{ mb: { xs: 1, sm: 1.5 } }}>
      <CategoryLabel>{t(categoryKey)}</CategoryLabel>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: '5px', sm: '7px' } }}>
        {techs.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <TechBadge
              style={{ borderLeft: `2px solid ${item.color}` }}
              onClick={() => handleTrack('tech_badge_click', item.name)}
              onMouseEnter={() => handleTrack('tech_badge_hover', item.name)}
            >
              <Box
                component="span"
                sx={{
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                {React.createElement(item.icon)}
              </Box>
              <Typography
                sx={{
                  color: 'text.primary',
                  fontSize: { xs: 9.5, sm: 10.5 },
                  fontFamily: '"Roboto Mono", monospace',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.name}
              </Typography>
            </TechBadge>
          </motion.div>
        ))}
      </Box>
    </Box>
  );

  const renderMap = () => {
    const mapHeight = isMobile ? 260 : isTablet ? 300 : 340;

    const modernMapStyles = [
      { featureType: 'all', elementType: 'geometry', stylers: [{ color: '#060e1c' }] },
      { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#4dabff' }] },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#060e1c' }, { weight: 2 }],
      },
      { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0d2b5e' }] },
      { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#4fc3f7' }] },
      { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#0f1f40' }] },
      { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#1a3680' }] },
      { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#080f20' }] },
      { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#0f1e3d' }] },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#3399ff' }, { weight: 1 }],
      },
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
        <Box
          sx={{
            height: mapHeight,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed rgba(51, 153, 255, 0.2)',
            borderRadius: 2,
            backgroundColor: 'rgba(51, 153, 255, 0.03)',
            padding: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'secondary.main',
              mb: 2,
              textAlign: 'center',
              fontFamily: '"Roboto Mono", monospace',
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
            }}
          >
            {t('staticLocation')}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              mb: 3,
              fontSize: { xs: '0.78rem', sm: '0.85rem' },
            }}
          >
            {t('googleMapsUnavailable')}
          </Typography>
          <Box
            sx={(t) => ({
              p: { xs: 2, sm: 3 },
              textAlign: 'center',
              border: `1px solid ${alpha(t.palette.primary.main, 0.15)}`,
              borderRadius: 2,
              backgroundColor: alpha(t.palette.primary.main, 0.05),
              width: '100%',
              maxWidth: 380,
            })}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'secondary.dark',
                mb: 2,
                fontFamily: '"Roboto Mono", monospace',
                fontSize: { xs: '0.95rem', sm: '1.1rem' },
              }}
            >
              {t('curitibaLocation')}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', mb: 1, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}
            >
              {t('coordinates')}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', mb: 2, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}
            >
              {t('timezone')}
            </Typography>
            <ContactButton onClick={scrollToContact} startIcon={<EmailIcon />} fullWidth={isMobile}>
              {t('contactButton')}
            </ContactButton>
          </Box>
        </Box>
      );
    }

    return (
      <Box
        sx={{
          width: '100%',
          height: mapHeight,
          borderRadius: 2,
          overflow: 'hidden',
          border: '1px solid rgba(51, 153, 255, 0.18)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} options={mapOptions}>
            <MarkerF
              position={curitibaPosition}
              onClick={() => {
                setIsInfoWindowOpen(true);
                handleTrack('map_interaction', 'curitiba_marker');
              }}
              icon={{
                url:
                  'data:image/svg+xml;charset=UTF-8,' +
                  encodeURIComponent(`
                  <svg width="${isMobile ? 35 : 40}" height="${isMobile ? 35 : 40}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#4dabff;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2979ff;stop-opacity:1" />
                      </radialGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <circle cx="20" cy="20" r="15" fill="url(#grad)" filter="url(#glow)" stroke="#ffffff" stroke-width="2.5"/>
                    <circle cx="20" cy="20" r="6" fill="#ffffff"/>
                    <circle cx="20" cy="20" r="3" fill="#4dabff"/>
                  </svg>
                `),
                scaledSize:
                  typeof window !== 'undefined' && window.google
                    ? new window.google.maps.Size(isMobile ? 35 : 40, isMobile ? 35 : 40)
                    : undefined,
                anchor:
                  typeof window !== 'undefined' && window.google
                    ? new window.google.maps.Point(isMobile ? 17.5 : 20, isMobile ? 17.5 : 20)
                    : undefined,
              }}
              animation={
                typeof window !== 'undefined' && window.google
                  ? window.google.maps.Animation.DROP
                  : undefined
              }
            />
            {isInfoWindowOpen && (
              <InfoWindow
                position={curitibaPosition}
                onCloseClick={() => setIsInfoWindowOpen(false)}
                options={{
                  pixelOffset:
                    typeof window !== 'undefined' && window.google
                      ? new window.google.maps.Size(0, isMobile ? -35 : -40)
                      : undefined,
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, rgba(6,14,28,0.97), rgba(4,10,22,0.95))',
                    border: '1px solid rgba(51,153,255,0.3)',
                    borderRadius: 1.5,
                    padding: { xs: 1.5, sm: 2 },
                    minWidth: { xs: 220, sm: 260 },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      color: 'primary.light',
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    }}
                  >
                    <HomeIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
                    {t('curitibaLocation')}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.73rem', sm: '0.82rem' },
                    }}
                  >
                    {t('brazilSouthRegion')}
                    <br />
                    {t('timezone')}
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, md: 6 },
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100%' }}
      >
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 3.5, md: 6 },
            mb: { xs: 6, md: 8 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <motion.div variants={itemVariants}>
            <AvatarRingWrapper onClick={() => handleTrack('avatar_click', 'profile_photo')}>
              <Avatar
                src={foto}
                alt="Edison Tezolin"
                sx={{
                  width: { xs: 118, sm: 138, md: 168 },
                  height: { xs: 118, sm: 138, md: 168 },
                }}
              />
            </AvatarRingWrapper>
          </motion.div>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  color: 'text.secondary',
                  mb: 0.5,
                  fontSize: { xs: '0.78rem', sm: '0.83rem' },
                  opacity: 0.6,
                }}
              >
                {t('helloEveryone')}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GradientText
                variant="h1"
                sx={{
                  fontSize: { xs: '2.3rem', sm: '3rem', md: '4.2rem' },
                  mb: 1.5,
                  wordBreak: 'break-word',
                }}
              >
                Edison Tezolin
              </GradientText>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '0.92rem', sm: '1.05rem', md: '1.3rem' },
                  color: 'text.secondary',
                  fontFamily: '"Roboto Mono", monospace',
                  fontWeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: 2.5,
                }}
              >
                <Box
                  component="span"
                  sx={{ color: 'secondary.main', mr: 1, fontSize: '1.15em', opacity: 0.9 }}
                >
                  &gt;
                </Box>
                {t('fullStackDeveloper')}
                <CursorBlink />
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <StatusBadge>
                <PulseDot />
                {t('availableImmediately')}
              </StatusBadge>
            </motion.div>
          </Box>
        </Box>

        {/* ── Terminal Contact Card ─────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <TerminalCard sx={{ mb: 5 }}>
            <TerminalHeader>
              <Box
                sx={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  bgcolor: '#ff5f57',
                  flexShrink: 0,
                }}
              />
              <Box
                sx={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  bgcolor: '#febc2e',
                  flexShrink: 0,
                }}
              />
              <Box
                sx={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  bgcolor: '#28c840',
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  fontSize: '0.73rem',
                  color: 'text.secondary',
                  ml: 0.5,
                  flex: 1,
                  textAlign: 'center',
                  opacity: 0.6,
                }}
              >
                contact.ts
              </Typography>
            </TerminalHeader>
            <TerminalContent>
              {contactItems.map((item) => (
                <Box key={item.key} sx={{ wordBreak: { xs: 'break-word', sm: 'normal' } }}>
                  <Box component="span" sx={{ color: 'secondary.dark', mr: 1, userSelect: 'none' }}>
                    $
                  </Box>
                  <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                    const
                  </Box>{' '}
                  <Box component="span" sx={{ color: 'text.secondary', opacity: 0.8 }}>
                    {item.label}
                  </Box>
                  {' = '}
                  <Box
                    component="span"
                    onClick={item.onClick}
                    sx={{
                      color: 'secondary.dark',
                      cursor: 'pointer',
                      whiteSpace: { xs: 'normal', sm: 'nowrap' },
                      fontWeight: 500,
                      '&:hover': {
                        textDecoration: 'underline',
                        textDecorationColor: (t) => `${t.palette.secondary.main}66`,
                      },
                    }}
                  >
                    {item.value}
                  </Box>
                </Box>
              ))}
            </TerminalContent>
          </TerminalCard>
        </motion.div>

        {/* ── Tech Stack ────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <SectionTitle sx={{ mb: 0.5 }}>{t('myTechStack')}</SectionTitle>
        </motion.div>

        <motion.div variants={techStackVariants}>
          {(
            Object.entries(techCategories) as Array<
              [
                'backend' | 'frontend' | 'database' | 'cloud',
                Array<{ name: string; color: string; icon: React.ComponentType }>,
              ]
            >
          ).map(([key, techs]) => renderTechSection(key, techs))}
        </motion.div>

        {/* ── Recruiter Message ─────────────────────────────────────── */}
        <Box sx={{ mt: { xs: 4, sm: 5 }, mb: { xs: 2, sm: 3 } }}>
          <motion.div variants={itemVariants}>
            <SectionTitle>{t('messageToRecruiters')}</SectionTitle>
          </motion.div>
          <Typography
            sx={{
              fontFamily: '"Roboto Mono", monospace',
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '0.82rem', sm: '0.87rem', md: '0.92rem' },
            }}
          >
            {t('recruiterMessagePt1')}
            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
              {t('technicalExcellence')}
            </Box>
            {t('recruiterMessagePt2')}
            <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
              {t('valueDelivery')}
            </Box>
            {t('recruiterMessagePt3')}
          </Typography>
        </Box>

        {/* ── Location & Map ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <MapContainer>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Roboto Mono", monospace',
                color: 'primary.light',
                textAlign: 'center',
                mb: 0.5,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                fontSize: { xs: '1.05rem', sm: '1.25rem', md: '1.45rem' },
                position: 'relative',
                zIndex: 1,
              }}
            >
              <LocationOnIcon sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' } }} />
              {t('title')}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Roboto Mono", monospace',
                color: 'text.secondary',
                textAlign: 'center',
                mb: 3,
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                position: 'relative',
                zIndex: 1,
              }}
            >
              {t('description')}
            </Typography>

            {renderMap()}

            <Box sx={{ mt: 3, textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 2 }}>
                <LocationChip>
                  <WorkIcon sx={{ fontSize: { xs: 11, sm: 12 } }} />
                  {t('remoteNational')}
                </LocationChip>
                <LocationChip>
                  <WorkIcon sx={{ fontSize: { xs: 11, sm: 12 } }} />
                  {t('remoteInternational')}
                </LocationChip>
                <LocationChip>
                  <LocationOnIcon sx={{ fontSize: { xs: 11, sm: 12 } }} />
                  {t('curitibaLocal')}
                </LocationChip>
                <LocationChip>
                  <HomeIcon sx={{ fontSize: { xs: 11, sm: 12 } }} />
                  {t('hybrid')}
                </LocationChip>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  color: 'text.secondary',
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  fontStyle: 'italic',
                }}
              >
                {t('slogan')}
              </Typography>
            </Box>
          </MapContainer>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Home;
