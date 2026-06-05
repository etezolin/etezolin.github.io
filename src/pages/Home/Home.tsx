import ApartmentIcon from '@mui/icons-material/Apartment';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import HubIcon from '@mui/icons-material/Hub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { alpha, keyframes, styled } from '@mui/material/styles';
import { GoogleMap, InfoWindow, LoadScript, MarkerF } from '@react-google-maps/api';
import { motion } from 'framer-motion';
import { type FC, useState } from 'react';
import foto from '../../assets/foto.png';
import { CardHeader, CardIcon, SectionCard } from '../../components/shared/Sharedcards';
import {
  BodyMono,
  CardSubtitle,
  CardTitle,
  MetaMono,
} from '../../components/shared/TypographyTokens';
import { trackProfileConversion, trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation } from '../../hooks/useTranslation';

// ─── Animations ───────────────────────────────────────────────────────────────

const rotateGradient = keyframes`
  0%   { background-position: 0%   50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0%   50%; }
`;

const blinkCursor = keyframes`
  0%, 49%   { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

// ─── Avatar ring ──────────────────────────────────────────────────────────────

const AvatarRingWrapper = styled(Box)(({ theme }) => ({
  padding: '3px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, #818cf8, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  backgroundSize: '300% 300%',
  animation: `${rotateGradient} 5s ease infinite`,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 0 32px ${alpha(theme.palette.primary.main, 0.22)}, 0 0 80px ${alpha(theme.palette.primary.main, 0.08)}`,
  cursor: 'pointer',
  flexShrink: 0,
}));

// ─── Gradient name ────────────────────────────────────────────────────────────

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

// ─── Tech stack — dot badge ───────────────────────────────────────────────────

const DotBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '4px 10px',
  background: alpha(theme.palette.background.paper, 0.9),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  borderRadius: 7,
  cursor: 'pointer',
  transition: 'border-color 0.2s ease, background 0.2s ease',
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.25),
    background: alpha(theme.palette.primary.main, 0.04),
  },
}));

const TechDot = styled(Box)<{ dotcolor: string }>(({ dotcolor }) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  backgroundColor: dotcolor,
  flexShrink: 0,
}));

const SeeAllButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.72rem',
  textTransform: 'none',
  borderRadius: 7,
  padding: '4px 14px',
  height: 28,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.22)}`,
  color: theme.palette.primary.main,
  background: alpha(theme.palette.primary.main, 0.04),
  transition: 'all 0.22s ease',
  flexShrink: 0,
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.1),
    borderColor: alpha(theme.palette.primary.main, 0.45),
    transform: 'translateY(-1px)',
  },
}));

// ─── Intro card components ────────────────────────────────────────────────────

const StatCard = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.04)'
      : alpha(theme.palette.primary.main, 0.04),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  borderRadius: 10,
  padding: theme.spacing(1.25, 1),
  textAlign: 'center',
  transition: 'border-color 0.2s ease',
  cursor: 'default',
  '&:hover': { borderColor: alpha(theme.palette.primary.main, 0.18) },
}));

const DiffCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.25),
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.03)'
      : alpha(theme.palette.primary.main, 0.025),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.07)}`,
  borderRadius: 10,
  padding: theme.spacing(1.25, 1.5),
  transition: 'all 0.2s ease',
  cursor: 'default',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.06),
    borderColor: alpha(theme.palette.primary.main, 0.18),
  },
}));

const DiffIcon = styled(Box)(() => ({
  width: 30,
  height: 30,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& svg': { fontSize: 16 },
}));

// ─── Map card ─────────────────────────────────────────────────────────────────

const MapCard = styled(SectionCard)(({ theme }) => ({
  cursor: 'default',
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  '&:hover': {
    transform: 'none',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 4px 32px rgba(0,0,0,0.45)'
        : '0 4px 24px rgba(15,23,42,0.08)',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
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
  boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.25)}`,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 28px ${alpha(theme.palette.primary.main, 0.35)}`,
    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  },
}));

// ─── Motion variants ──────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// ─── Google Maps styles ───────────────────────────────────────────────────────

const darkMapStyles: google.maps.MapTypeStyle[] = [
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

const lightMapStyles: google.maps.MapTypeStyle[] = [
  { featureType: 'all', elementType: 'geometry', stylers: [{ color: '#e8eef7' }] },
  { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#2563eb' }] },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#ffffff' }, { weight: 2 }],
  },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#b8d0f0' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#1d4ed8' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#c9d8f0' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#dbeafe' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#93c5fd' }] },
  { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f0f5ff' }] },
  { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#dbeafe' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#d1fae5' }] },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#93c5fd' }, { weight: 1 }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#60a5fa' }, { weight: 1.5 }],
  },
];

// ─── Top 6 — uma tecnologia por categoria ────────────────────────────────────
// Lista completa continua em Competence; aqui só o resumo de impacto.

const topTech = [
  { name: 'C# / .NET', color: '#9B4F96', category: 'Backend' },
  { name: 'React', color: '#61DAFB', category: 'Frontend' },
  { name: 'SQL Server', color: '#ac0e0e', category: 'Database' },
  { name: 'Google Cloud', color: '#a14744', category: 'Cloud' },
  { name: 'Clean Architecture', color: '#7B68EE', category: 'Architecture' },
  { name: 'Docker', color: '#2496ED', category: 'DevOps' },
];

// ─── Component ────────────────────────────────────────────────────────────────

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
  const isDark = theme.palette.mode === 'dark';
  const curitibaPosition = { lat: -25.4284, lng: -49.2733 };

  const handleTrack = (action: string, label: string, extra?: string) => {
    trackProfileTabInteraction('home', action, label);
    if (extra) trackProfileConversion(extra, 'home');
  };

  const scrollToContact = () => {
    handleTrack('map_contact_button', 'scroll_to_contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCompetence = () => {
    handleTrack('tech_see_all', 'scroll_to_competence');
    document.getElementById('competence')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderMap = () => {
    const mapHeight = isMobile ? 260 : isTablet ? 300 : 340;
    const mapStyles = isDark ? darkMapStyles : lightMapStyles;

    const mapOptions: google.maps.MapOptions = {
      zoom: isMobile ? 5 : isTablet ? 5.5 : 6,
      center: curitibaPosition,
      mapTypeId: 'roadmap',
      styles: mapStyles,
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
          sx={(theme) => ({
            height: mapHeight,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px dashed ${alpha(theme.palette.primary.main, 0.2)}`,
            borderRadius: 2,
            background: alpha(theme.palette.primary.main, 0.03),
            padding: { xs: 2, sm: 3 },
          })}
        >
          <CardTitle
            sx={{
              color: 'secondary.main',
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
            }}
          >
            {t('staticLocation')}
          </CardTitle>
          <Box
            sx={(theme) => ({
              p: { xs: 2, sm: 3 },
              textAlign: 'center',
              border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
              borderRadius: 2,
              background: alpha(theme.palette.primary.main, 0.04),
              width: '100%',
              maxWidth: 380,
            })}
          >
            <CardTitle
              sx={{ color: 'secondary.dark', mb: 2, fontSize: { xs: '0.95rem', sm: '1.1rem' } }}
            >
              {t('curitibaLocation')}
            </CardTitle>
            <BodyMono sx={{ mb: 1, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}>
              {t('coordinates')}
            </BodyMono>
            <BodyMono sx={{ mb: 2, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}>
              {t('timezone')}
            </BodyMono>
            <ContactButton onClick={scrollToContact} startIcon={<EmailIcon />} fullWidth={isMobile}>
              {t('contactButton')}
            </ContactButton>
          </Box>
        </Box>
      );
    }

    return (
      <Box
        sx={(theme) => ({
          width: '100%',
          height: mapHeight,
          borderRadius: 2,
          overflow: 'hidden',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
          position: 'relative',
          zIndex: 1,
        })}
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
                          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
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
                  sx={(theme) => ({
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(6,14,28,0.97), rgba(4,10,22,0.95))'
                      : 'linear-gradient(135deg, rgba(248,250,255,0.98), rgba(240,245,255,0.96))',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                    borderRadius: 1.5,
                    padding: { xs: 1.5, sm: 2 },
                    minWidth: { xs: 220, sm: 260 },
                  })}
                >
                  <CardTitle
                    sx={{
                      color: 'primary.main',
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    }}
                  >
                    <HomeIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
                    {t('curitibaLocation')}
                  </CardTitle>
                  <BodyMono sx={{ lineHeight: 1.6, fontSize: { xs: '0.73rem', sm: '0.82rem' } }}>
                    {t('brazilSouthRegion')}
                    <br />
                    {t('timezone')}
                  </BodyMono>
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
        {/* ── Hero ── */}
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
                sx={{ width: { xs: 118, sm: 138, md: 168 }, height: { xs: 118, sm: 138, md: 168 } }}
              />
            </AvatarRingWrapper>
          </motion.div>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <motion.div variants={itemVariants}>
              <MetaMono sx={{ mb: 0.5, fontSize: { xs: '0.78rem', sm: '0.83rem' }, opacity: 0.6 }}>
                {t('helloEveryone')}
              </MetaMono>
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
          </Box>
        </Box>

        {/* ── Intro card ── */}
        <motion.div variants={itemVariants}>
          <SectionCard sx={{ mb: 5 }}>
            <CardHeader>
              <CardIcon>
                <WorkIcon sx={{ fontSize: 20 }} />
              </CardIcon>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <CardTitle>{t('introRole' as any)}</CardTitle>
                <CardSubtitle>
                  {/* {t('introSubtitle' as any)} ·{' '} */}
                  <Box component="span" sx={{ fontStyle: 'italic' }}>
                    {t('introPhilosophy' as any)}
                  </Box>
                </CardSubtitle>
              </Box>
            </CardHeader>

            {/* Impact numbers */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: 1.25,
                mb: 2.5,
              }}
            >
              {[
                { value: '5+', label: t('statYears' as any) },
                { value: '5B+', label: t('statRecords' as any) },
                { value: '7k+', label: t('statSchools' as any) },
                { value: '30k+', label: t('statUsers' as any) },
              ].map((stat) => (
                <StatCard key={stat.value}>
                  <CardTitle
                    sx={{
                      fontSize: { xs: '1rem', sm: '1.15rem' },
                      color: 'secondary.dark',
                      mb: 0.5,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </CardTitle>
                  <MetaMono sx={{ fontSize: '0.62rem', color: 'text.disabled', lineHeight: 1.3 }}>
                    {stat.label}
                  </MetaMono>
                </StatCard>
              ))}
            </Box>

            {/* Differentials */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                gap: 1,
                mb: 2.5,
              }}
            >
              {[
                {
                  icon: <ApartmentIcon />,
                  color: (t: any) => alpha(t.palette.primary.main, 0.12),
                  iconColor: 'primary.main',
                  title: t('diffEnterpriseTitle' as any),
                  desc: t('diffEnterpriseDesc' as any),
                },
                {
                  icon: <HubIcon />,
                  color: () => alpha('#1D9E75', 0.1),
                  iconColor: '#1D9E75',
                  title: t('diffOwnershipTitle' as any),
                  desc: t('diffOwnershipDesc' as any),
                },
                {
                  icon: <PsychologyIcon />,
                  color: () => alpha('#9c27b0', 0.1),
                  iconColor: (t: any) => (t.palette.mode === 'dark' ? '#ce93d8' : '#7b1fa2'),
                  title: t('diffPhilosophyTitle' as any),
                  desc: t('diffPhilosophyDesc' as any),
                },
                {
                  icon: <TrendingUpIcon />,
                  color: () => alpha('#ff9800', 0.1),
                  iconColor: (t: any) => (t.palette.mode === 'dark' ? '#ffd54f' : '#e65100'),
                  title: t('diffImpactTitle' as any),
                  desc: t('diffImpactDesc' as any),
                },
              ].map((item) => (
                <DiffCard key={item.title}>
                  <DiffIcon sx={{ background: item.color, color: item.iconColor }}>
                    {item.icon}
                  </DiffIcon>
                  <Box>
                    <CardTitle sx={{ fontSize: '0.8rem', mb: 0.3 }}>{item.title}</CardTitle>
                    <CardSubtitle sx={{ fontSize: '0.72rem', lineHeight: 1.5 }}>
                      {item.desc}
                    </CardSubtitle>
                  </Box>
                </DiffCard>
              ))}
            </Box>

            {/* Quote */}
            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                flexWrap: 'wrap',
                pt: 2,
                borderTop: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
              })}
            >
              <BodyMono
                sx={{
                  fontStyle: 'italic',
                  fontSize: '0.75rem',
                  color: 'text.disabled',
                  flex: 1,
                  minWidth: 200,
                }}
              >
                {t('recruiterMessagePt1')}
                <Box
                  component="span"
                  sx={{ color: 'secondary.main', fontStyle: 'normal', fontWeight: 600 }}
                >
                  {t('technicalExcellence')}
                </Box>
                {t('recruiterMessagePt2')}
                <Box
                  component="span"
                  sx={{ color: 'secondary.main', fontStyle: 'normal', fontWeight: 600 }}
                >
                  {t('valueDelivery')}
                </Box>
                {t('recruiterMessagePt3')}
              </BodyMono>
            </Box>
          </SectionCard>
        </motion.div>

        {/* ── Tech stack — top 6 + "ver todas" ────────────────────────────────
            Lista completa fica em Competence. Aqui: 1 tech por categoria,
            botão ancora até #competence.
        ─────────────────────────────────────────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <SectionCard sx={{ mb: 5 }}>
            <CardHeader>
              <CardIcon>
                <Box sx={{ fontSize: 20, display: 'flex', alignItems: 'center' }}>⚡</Box>
              </CardIcon>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <CardTitle>{t('myTechStack')}</CardTitle>
                <CardSubtitle>{t('techStackSubtitle' as any)}</CardSubtitle>
              </Box>
            </CardHeader>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mb: 2 }}>
              {topTech.map((item) => (
                <DotBadge
                  key={item.name}
                  onClick={() => handleTrack('tech_badge_click', item.name)}
                >
                  <TechDot dotcolor={item.color} />
                  <MetaMono
                    sx={{
                      color: 'text.primary',
                      fontSize: { xs: '0.7rem', sm: '0.72rem' },
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      lineHeight: 1,
                    }}
                  >
                    {item.name}
                  </MetaMono>
                  <MetaMono
                    sx={{
                      fontSize: '0.6rem',
                      color: 'text.disabled',
                      whiteSpace: 'nowrap',
                      lineHeight: 1,
                      ml: 0.5,
                    }}
                  >
                    · {item.category}
                  </MetaMono>
                </DotBadge>
              ))}
            </Box>

            <Box
              sx={(theme) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                pt: 1.5,
                borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
              })}
            >
              <MetaMono sx={{ fontSize: '0.68rem', color: 'text.disabled', flex: 1 }}>
                {t('techStackSubtitle' as any)}
              </MetaMono>
              <SeeAllButton onClick={scrollToCompetence}>{t('skills' as any)} →</SeeAllButton>
            </Box>
          </SectionCard>
        </motion.div>

        {/* ── Location & Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <MapCard>
            <CardHeader>
              <CardIcon>
                <LocationOnIcon sx={{ fontSize: 20 }} />
              </CardIcon>
              <Box>
                <CardTitle>{t('title')}</CardTitle>
                <CardSubtitle>{t('description')}</CardSubtitle>
              </Box>
            </CardHeader>

            {renderMap()}

            <Box sx={{ mt: 2.5, textAlign: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 1.5 }}>
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
              <MetaMono
                sx={{
                  fontStyle: 'italic',
                  color: 'text.disabled',
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                }}
              >
                {t('slogan')}
              </MetaMono>
            </Box>
          </MapCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Home;

// import ApartmentIcon from '@mui/icons-material/Apartment';
// import EmailIcon from '@mui/icons-material/Email';
// import HomeIcon from '@mui/icons-material/Home';
// import HubIcon from '@mui/icons-material/Hub';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import WorkIcon from '@mui/icons-material/Work';
// import { Avatar, Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
// import { alpha, keyframes, styled } from '@mui/material/styles';
// import { GoogleMap, InfoWindow, LoadScript, MarkerF } from '@react-google-maps/api';
// import { motion } from 'framer-motion';
// import { type FC, useState } from 'react';
// import foto from '../../assets/foto.png';
// import { CardHeader, CardIcon, SectionCard } from '../../components/shared/Sharedcards';
// import {
//   BodyMono,
//   CardSubtitle,
//   CardTitle,
//   MetaMono,
// } from '../../components/shared/TypographyTokens';
// import { trackProfileConversion, trackProfileTabInteraction } from '../../firebase';
// import { useTypedTranslation } from '../../hooks/useTranslation';

// // ─── Animations ───────────────────────────────────────────────────────────────

// const rotateGradient = keyframes`
//   0%   { background-position: 0%   50%; }
//   50%  { background-position: 100% 50%; }
//   100% { background-position: 0%   50%; }
// `;

// const blinkCursor = keyframes`
//   0%, 49%   { opacity: 1; }
//   50%, 100% { opacity: 0; }
// `;

// // ─── Avatar ring ──────────────────────────────────────────────────────────────

// const AvatarRingWrapper = styled(Box)(({ theme }) => ({
//   padding: '3px',
//   borderRadius: '50%',
//   background: `linear-gradient(135deg, ${theme.palette.primary.main}, #818cf8, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
//   backgroundSize: '300% 300%',
//   animation: `${rotateGradient} 5s ease infinite`,
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   boxShadow: `0 0 32px ${alpha(theme.palette.primary.main, 0.22)}, 0 0 80px ${alpha(theme.palette.primary.main, 0.08)}`,
//   cursor: 'pointer',
//   flexShrink: 0,
// }));

// // ─── Gradient name ────────────────────────────────────────────────────────────

// const GradientText = styled(Typography)(({ theme }) => ({
//   backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 35%, ${theme.palette.secondary.main} 100%)`,
//   backgroundClip: 'text',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   fontWeight: 800,
//   letterSpacing: '-1.5px',
//   lineHeight: 1.05,
// }));

// const CursorBlink = styled('span')({
//   display: 'inline-block',
//   width: '2px',
//   height: '0.85em',
//   backgroundColor: '#00e676',
//   marginLeft: '3px',
//   verticalAlign: 'text-bottom',
//   animation: `${blinkCursor} 1.1s step-end infinite`,
//   borderRadius: '1px',
// });

// // ─── Tech stack — dot badge system ───────────────────────────────────────────

// const DotBadge = styled(Box)(({ theme }) => ({
//   display: 'inline-flex',
//   alignItems: 'center',
//   gap: 6,
//   padding: '4px 10px',
//   background: alpha(theme.palette.background.paper, 0.9),
//   border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//   borderRadius: 7,
//   cursor: 'pointer',
//   transition: 'border-color 0.2s ease, background 0.2s ease',
//   '&:hover': {
//     borderColor: alpha(theme.palette.primary.main, 0.25),
//     background: alpha(theme.palette.primary.main, 0.04),
//   },
// }));

// const TechDot = styled(Box)<{ dotcolor: string }>(({ dotcolor }) => ({
//   width: 6,
//   height: 6,
//   borderRadius: '50%',
//   backgroundColor: dotcolor,
//   flexShrink: 0,
// }));

// const ColLabel = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: '0.65rem',
//   fontWeight: 600,
//   letterSpacing: '1.6px',
//   textTransform: 'uppercase',
//   color: theme.palette.text.disabled,
//   marginBottom: theme.spacing(0.75),
// }));

// // ─── Intro card components ────────────────────────────────────────────────────

// const StatCard = styled(Box)(({ theme }) => ({
//   background:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255,255,255,0.04)'
//       : alpha(theme.palette.primary.main, 0.04),
//   border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
//   borderRadius: 10,
//   padding: theme.spacing(1.25, 1),
//   textAlign: 'center',
//   transition: 'border-color 0.2s ease',
//   cursor: 'default',
//   '&:hover': { borderColor: alpha(theme.palette.primary.main, 0.18) },
// }));

// const DiffCard = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'flex-start',
//   gap: theme.spacing(1.25),
//   background:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255,255,255,0.03)'
//       : alpha(theme.palette.primary.main, 0.025),
//   border: `1px solid ${alpha(theme.palette.primary.main, 0.07)}`,
//   borderRadius: 10,
//   padding: theme.spacing(1.25, 1.5),
//   transition: 'all 0.2s ease',
//   cursor: 'default',
//   '&:hover': {
//     background: alpha(theme.palette.primary.main, 0.06),
//     borderColor: alpha(theme.palette.primary.main, 0.18),
//   },
// }));

// const DiffIcon = styled(Box)(() => ({
//   width: 30,
//   height: 30,
//   borderRadius: 8,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   flexShrink: 0,
//   '& svg': { fontSize: 16 },
// }));

// // ─── Map card — extends shared SectionCard ────────────────────────────────────

// const MapCard = styled(SectionCard)(({ theme }) => ({
//   cursor: 'default',
//   marginTop: theme.spacing(5),
//   marginBottom: theme.spacing(5),
//   '&:hover': {
//     transform: 'none',
//     boxShadow:
//       theme.palette.mode === 'dark'
//         ? '0 4px 32px rgba(0,0,0,0.45)'
//         : '0 4px 24px rgba(15,23,42,0.08)',
//   },
//   [theme.breakpoints.down('sm')]: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//   },
// }));

// const LocationChip = styled(Box)(({ theme }) => ({
//   display: 'inline-flex',
//   alignItems: 'center',
//   gap: theme.spacing(0.5),
//   backgroundColor: alpha(theme.palette.primary.main, 0.08),
//   color: theme.palette.primary.main,
//   border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
//   borderRadius: theme.spacing(3),
//   padding: theme.spacing(0.5, 1.5),
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: '0.7rem',
//   fontWeight: 600,
//   margin: theme.spacing(0.3),
//   whiteSpace: 'nowrap',
//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(0.4, 1.2),
//     fontSize: '0.66rem',
//   },
// }));

// const ContactButton = styled(Button)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: '0.85rem',
//   textTransform: 'none',
//   borderRadius: 8,
//   padding: theme.spacing(1.2, 3),
//   marginTop: theme.spacing(2),
//   background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
//   color: '#fff',
//   boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.25)}`,
//   '&:hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: `0 8px 28px ${alpha(theme.palette.primary.main, 0.35)}`,
//     background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
//   },
// }));

// // ─── Motion variants ──────────────────────────────────────────────────────────

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
// };

// const itemVariants = {
//   hidden: { y: 22, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const techStackVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
// };

// // ─── Google Maps style sets ───────────────────────────────────────────────────

// const darkMapStyles: google.maps.MapTypeStyle[] = [
//   { featureType: 'all', elementType: 'geometry', stylers: [{ color: '#060e1c' }] },
//   { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#4dabff' }] },
//   {
//     featureType: 'all',
//     elementType: 'labels.text.stroke',
//     stylers: [{ color: '#060e1c' }, { weight: 2 }],
//   },
//   { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0d2b5e' }] },
//   { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#4fc3f7' }] },
//   { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#0f1f40' }] },
//   { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#1a3680' }] },
//   { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#080f20' }] },
//   { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#0f1e3d' }] },
//   {
//     featureType: 'administrative',
//     elementType: 'geometry.stroke',
//     stylers: [{ color: '#3399ff' }, { weight: 1 }],
//   },
// ];

// const lightMapStyles: google.maps.MapTypeStyle[] = [
//   { featureType: 'all', elementType: 'geometry', stylers: [{ color: '#e8eef7' }] },
//   { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#2563eb' }] },
//   {
//     featureType: 'all',
//     elementType: 'labels.text.stroke',
//     stylers: [{ color: '#ffffff' }, { weight: 2 }],
//   },
//   { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#b8d0f0' }] },
//   { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#1d4ed8' }] },
//   { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
//   { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#c9d8f0' }] },
//   { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#dbeafe' }] },
//   { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#93c5fd' }] },
//   { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f0f5ff' }] },
//   { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#dbeafe' }] },
//   { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#d1fae5' }] },
//   {
//     featureType: 'administrative',
//     elementType: 'geometry.stroke',
//     stylers: [{ color: '#93c5fd' }, { weight: 1 }],
//   },
//   {
//     featureType: 'administrative.country',
//     elementType: 'geometry.stroke',
//     stylers: [{ color: '#60a5fa' }, { weight: 1.5 }],
//   },
// ];

// // ─── Component ────────────────────────────────────────────────────────────────

// interface HomeProps {
//   googleMapsApiKey?: string;
// }

// const Home: FC<HomeProps> = ({
//   googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
// }) => {
//   const theme = useTheme();
//   const { t } = useTypedTranslation();
//   const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.down('md'));
//   const isDark = theme.palette.mode === 'dark';
//   const curitibaPosition = { lat: -25.4284, lng: -49.2733 };

//   const handleTrack = (action: string, label: string, extra?: string) => {
//     trackProfileTabInteraction('home', action, label);
//     if (extra) trackProfileConversion(extra, 'home');
//   };

//   const scrollToContact = () => {
//     handleTrack('map_contact_button', 'scroll_to_contact');
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const techCategories = {
//     backend: [
//       { name: 'C#', color: '#9B4F96' },
//       { name: '.NET', color: '#94d2bd' },
//       { name: 'ASP.NET Core', color: '#512BD4' },
//       { name: 'Node.js', color: '#539E43' },
//       { name: 'Dapper', color: '#2563EB' },
//       { name: 'Entity Framework', color: '#68217A' },
//     ],
//     frontend: [
//       { name: 'JavaScript', color: '#F7DF1E' },
//       { name: 'React', color: '#61DAFB' },
//       { name: 'TypeScript', color: '#007ACC' },
//       { name: 'Material UI', color: '#0081CB' },
//       { name: 'Tailwind CSS', color: '#6668e9' },
//     ],
//     database: [
//       { name: 'SQL Server', color: '#ac0e0e' },
//       { name: 'PostgreSQL', color: '#48cae4' },
//       { name: 'BigQuery', color: '#c49d31' },
//       { name: 'MongoDB', color: '#adc178' },
//     ],
//     cloud: [
//       { name: 'Google Cloud', color: '#a14744' },
//       { name: 'Docker', color: '#2496ED' },
//       { name: 'Git', color: '#F05032' },
//       { name: 'GitHub', color: '#44a149' },
//       { name: 'GitHub Actions', color: '#2088FF' },
//       { name: 'Cloud Build', color: '#fb8500' },
//     ],
//     tools: [
//       { name: 'Postman', color: '#FF6C37' },
//       { name: 'Swagger', color: '#85EA2D' },
//       { name: 'Figma', color: '#F24E1E' },
//       { name: 'Jira', color: '#0052CC' },
//     ],
//     architecture: [
//       { name: 'Clean Architecture', color: '#7B68EE' },
//       { name: 'DDD', color: '#8B5CF6' },
//       { name: 'Microservices', color: '#7B68EE' },
//       { name: 'RabbitMQ', color: '#FF6600' },
//       { name: 'REST API', color: '#3DDC84' },
//     ],
//   };

//   const techPairs: Array<[keyof typeof techCategories, keyof typeof techCategories]> = [
//     ['backend', 'frontend'],
//     ['database', 'cloud'],
//     ['tools', 'architecture'],
//   ];

//   const renderTechCol = (
//     categoryKey: keyof typeof techCategories,
//     techs: Array<{ name: string; color: string }>
//   ) => (
//     <Box key={categoryKey}>
//       <ColLabel>{t(categoryKey as any)}</ColLabel>
//       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
//         {techs.map((item) => (
//           <DotBadge key={item.name} onClick={() => handleTrack('tech_badge_click', item.name)}>
//             <TechDot dotcolor={item.color} />
//             <MetaMono
//               sx={{
//                 color: 'text.primary',
//                 fontSize: { xs: '0.7rem', sm: '0.72rem' },
//                 fontWeight: 500,
//                 whiteSpace: 'nowrap',
//                 lineHeight: 1,
//               }}
//             >
//               {item.name}
//             </MetaMono>
//           </DotBadge>
//         ))}
//       </Box>
//     </Box>
//   );

//   const renderTechGrid = () => (
//     <motion.div variants={techStackVariants}>
//       {techPairs.map(([left, right], pairIdx) => (
//         <Box key={`${left}-${right}`}>
//           {pairIdx > 0 && (
//             <Box
//               sx={(theme) => ({
//                 height: '1px',
//                 background: alpha(theme.palette.divider, 0.5),
//                 my: 2,
//               })}
//             />
//           )}
//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
//               gap: { xs: 2, sm: 3 },
//             }}
//           >
//             {renderTechCol(left, techCategories[left])}
//             {renderTechCol(right, techCategories[right])}
//           </Box>
//         </Box>
//       ))}
//     </motion.div>
//   );

//   const renderMap = () => {
//     const mapHeight = isMobile ? 260 : isTablet ? 300 : 340;
//     const mapStyles = isDark ? darkMapStyles : lightMapStyles;

//     const mapOptions: google.maps.MapOptions = {
//       zoom: isMobile ? 5 : isTablet ? 5.5 : 6,
//       center: curitibaPosition,
//       mapTypeId: 'roadmap',
//       styles: mapStyles,
//       disableDefaultUI: isMobile,
//       zoomControl: !isMobile,
//       streetViewControl: false,
//       fullscreenControl: !isMobile,
//       mapTypeControl: false,
//       gestureHandling: isMobile ? 'cooperative' : 'auto',
//     };

//     if (!googleMapsApiKey || googleMapsApiKey.length <= 10) {
//       return (
//         <Box
//           sx={(theme) => ({
//             height: mapHeight,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             border: `1px dashed ${alpha(theme.palette.primary.main, 0.2)}`,
//             borderRadius: 2,
//             background: alpha(theme.palette.primary.main, 0.03),
//             padding: { xs: 2, sm: 3 },
//           })}
//         >
//           <CardTitle
//             sx={{
//               color: 'secondary.main',
//               mb: 2,
//               textAlign: 'center',
//               fontSize: { xs: '0.95rem', sm: '1.1rem' },
//             }}
//           >
//             {t('staticLocation')}
//           </CardTitle>
//           <Box
//             sx={(theme) => ({
//               p: { xs: 2, sm: 3 },
//               textAlign: 'center',
//               border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
//               borderRadius: 2,
//               background: alpha(theme.palette.primary.main, 0.04),
//               width: '100%',
//               maxWidth: 380,
//             })}
//           >
//             <CardTitle
//               sx={{ color: 'secondary.dark', mb: 2, fontSize: { xs: '0.95rem', sm: '1.1rem' } }}
//             >
//               {t('curitibaLocation')}
//             </CardTitle>
//             <BodyMono sx={{ mb: 1, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}>
//               {t('coordinates')}
//             </BodyMono>
//             <BodyMono sx={{ mb: 2, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}>
//               {t('timezone')}
//             </BodyMono>
//             <ContactButton onClick={scrollToContact} startIcon={<EmailIcon />} fullWidth={isMobile}>
//               {t('contactButton')}
//             </ContactButton>
//           </Box>
//         </Box>
//       );
//     }

//     return (
//       <Box
//         sx={(theme) => ({
//           width: '100%',
//           height: mapHeight,
//           borderRadius: 2,
//           overflow: 'hidden',
//           border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
//           position: 'relative',
//           zIndex: 1,
//         })}
//       >
//         <LoadScript googleMapsApiKey={googleMapsApiKey}>
//           <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} options={mapOptions}>
//             <MarkerF
//               position={curitibaPosition}
//               onClick={() => {
//                 setIsInfoWindowOpen(true);
//                 handleTrack('map_interaction', 'curitiba_marker');
//               }}
//               icon={{
//                 url:
//                   'data:image/svg+xml;charset=UTF-8,' +
//                   encodeURIComponent(`
//                     <svg width="${isMobile ? 35 : 40}" height="${isMobile ? 35 : 40}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
//                       <defs>
//                         <radialGradient id="grad" cx="50%" cy="50%" r="50%">
//                           <stop offset="0%" style="stop-color:#4dabff;stop-opacity:1" />
//                           <stop offset="100%" style="stop-color:#2979ff;stop-opacity:1" />
//                         </radialGradient>
//                         <filter id="glow">
//                           <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                           <feMerge>
//                             <feMergeNode in="coloredBlur"/>
//                             <feMergeNode in="SourceGraphic"/>
//                           </feMerge>
//                         </filter>
//                       </defs>
//                       <circle cx="20" cy="20" r="15" fill="url(#grad)" filter="url(#glow)" stroke="#ffffff" stroke-width="2.5"/>
//                       <circle cx="20" cy="20" r="6" fill="#ffffff"/>
//                       <circle cx="20" cy="20" r="3" fill="#4dabff"/>
//                     </svg>
//                   `),
//                 scaledSize:
//                   typeof window !== 'undefined' && window.google
//                     ? new window.google.maps.Size(isMobile ? 35 : 40, isMobile ? 35 : 40)
//                     : undefined,
//                 anchor:
//                   typeof window !== 'undefined' && window.google
//                     ? new window.google.maps.Point(isMobile ? 17.5 : 20, isMobile ? 17.5 : 20)
//                     : undefined,
//               }}
//               animation={
//                 typeof window !== 'undefined' && window.google
//                   ? window.google.maps.Animation.DROP
//                   : undefined
//               }
//             />
//             {isInfoWindowOpen && (
//               <InfoWindow
//                 position={curitibaPosition}
//                 onCloseClick={() => setIsInfoWindowOpen(false)}
//                 options={{
//                   pixelOffset:
//                     typeof window !== 'undefined' && window.google
//                       ? new window.google.maps.Size(0, isMobile ? -35 : -40)
//                       : undefined,
//                 }}
//               >
//                 <Box
//                   sx={(theme) => ({
//                     background: isDark
//                       ? 'linear-gradient(135deg, rgba(6,14,28,0.97), rgba(4,10,22,0.95))'
//                       : 'linear-gradient(135deg, rgba(248,250,255,0.98), rgba(240,245,255,0.96))',
//                     border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
//                     borderRadius: 1.5,
//                     padding: { xs: 1.5, sm: 2 },
//                     minWidth: { xs: 220, sm: 260 },
//                   })}
//                 >
//                   <CardTitle
//                     sx={{
//                       color: 'primary.main',
//                       mb: 1,
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1,
//                       fontSize: { xs: '0.85rem', sm: '0.95rem' },
//                     }}
//                   >
//                     <HomeIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
//                     {t('curitibaLocation')}
//                   </CardTitle>
//                   <BodyMono sx={{ lineHeight: 1.6, fontSize: { xs: '0.73rem', sm: '0.82rem' } }}>
//                     {t('brazilSouthRegion')}
//                     <br />
//                     {t('timezone')}
//                   </BodyMono>
//                 </Box>
//               </InfoWindow>
//             )}
//           </GoogleMap>
//         </LoadScript>
//       </Box>
//     );
//   };

//   return (
//     <Container
//       component="section"
//       id="home"
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         px: { xs: 2, sm: 3, md: 4 },
//         py: { xs: 4, md: 6 },
//       }}
//     >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         style={{ width: '100%' }}
//       >
//         {/* ── Hero ── */}
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: { xs: 'center', md: 'flex-start' },
//             gap: { xs: 3.5, md: 6 },
//             mb: { xs: 6, md: 8 },
//             textAlign: { xs: 'center', md: 'left' },
//           }}
//         >
//           <motion.div variants={itemVariants}>
//             <AvatarRingWrapper onClick={() => handleTrack('avatar_click', 'profile_photo')}>
//               <Avatar
//                 src={foto}
//                 alt="Edison Tezolin"
//                 sx={{ width: { xs: 118, sm: 138, md: 168 }, height: { xs: 118, sm: 138, md: 168 } }}
//               />
//             </AvatarRingWrapper>
//           </motion.div>

//           <Box sx={{ flex: 1, minWidth: 0 }}>
//             <motion.div variants={itemVariants}>
//               <MetaMono sx={{ mb: 0.5, fontSize: { xs: '0.78rem', sm: '0.83rem' }, opacity: 0.6 }}>
//                 {t('helloEveryone')}
//               </MetaMono>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <GradientText
//                 variant="h1"
//                 sx={{
//                   fontSize: { xs: '2.3rem', sm: '3rem', md: '4.2rem' },
//                   mb: 1.5,
//                   wordBreak: 'break-word',
//                 }}
//               >
//                 Edison Tezolin
//               </GradientText>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: '0.92rem', sm: '1.05rem', md: '1.3rem' },
//                   color: 'text.secondary',
//                   fontFamily: '"Roboto Mono", monospace',
//                   fontWeight: 400,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: { xs: 'center', md: 'flex-start' },
//                   mb: 2.5,
//                 }}
//               >
//                 <Box
//                   component="span"
//                   sx={{ color: 'secondary.main', mr: 1, fontSize: '1.15em', opacity: 0.9 }}
//                 >
//                   &gt;
//                 </Box>
//                 {t('fullStackDeveloper')}
//                 <CursorBlink />
//               </Typography>
//             </motion.div>
//           </Box>
//         </Box>

//         {/* ── Intro card ── */}
//         <motion.div variants={itemVariants}>
//           <SectionCard sx={{ mb: 5 }}>
//             <CardHeader>
//               <CardIcon>
//                 <WorkIcon sx={{ fontSize: 20 }} />
//               </CardIcon>
//               <Box sx={{ flex: 1, minWidth: 0 }}>
//                 <CardTitle>{t('introRole' as any)}</CardTitle>
//                 <CardSubtitle>
//                   {t('introSubtitle' as any)} ·{' '}
//                   <Box component="span" sx={{ fontStyle: 'italic' }}>
//                     {t('introPhilosophy' as any)}
//                   </Box>
//                 </CardSubtitle>
//               </Box>
//             </CardHeader>

//             <Box
//               sx={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
//                 gap: 1.25,
//                 mb: 2.5,
//               }}
//             >
//               {[
//                 { value: '5+', label: t('statYears' as any) },
//                 { value: '5B+', label: t('statRecords' as any) },
//                 { value: '7k+', label: t('statSchools' as any) },
//                 { value: '30k+', label: t('statUsers' as any) },
//               ].map((stat) => (
//                 <StatCard key={stat.value}>
//                   <CardTitle
//                     sx={{
//                       fontSize: { xs: '1rem', sm: '1.15rem' },
//                       color: 'secondary.dark',
//                       mb: 0.5,
//                       lineHeight: 1,
//                     }}
//                   >
//                     {stat.value}
//                   </CardTitle>
//                   <MetaMono sx={{ fontSize: '0.62rem', color: 'text.disabled', lineHeight: 1.3 }}>
//                     {stat.label}
//                   </MetaMono>
//                 </StatCard>
//               ))}
//             </Box>

//             <Box
//               sx={{
//                 display: 'grid',
//                 gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
//                 gap: 1,
//                 mb: 2.5,
//               }}
//             >
//               {[
//                 {
//                   icon: <ApartmentIcon />,
//                   color: (t: any) => alpha(t.palette.primary.main, 0.12),
//                   iconColor: 'primary.main',
//                   title: t('diffEnterpriseTitle' as any),
//                   desc: t('diffEnterpriseDesc' as any),
//                 },
//                 {
//                   icon: <HubIcon />,
//                   color: () => alpha('#1D9E75', 0.1),
//                   iconColor: '#1D9E75',
//                   title: t('diffOwnershipTitle' as any),
//                   desc: t('diffOwnershipDesc' as any),
//                 },
//                 {
//                   icon: <PsychologyIcon />,
//                   color: () => alpha('#9c27b0', 0.1),
//                   iconColor: (t: any) => (t.palette.mode === 'dark' ? '#ce93d8' : '#7b1fa2'),
//                   title: t('diffPhilosophyTitle' as any),
//                   desc: t('diffPhilosophyDesc' as any),
//                 },
//                 {
//                   icon: <TrendingUpIcon />,
//                   color: () => alpha('#ff9800', 0.1),
//                   iconColor: (t: any) => (t.palette.mode === 'dark' ? '#ffd54f' : '#e65100'),
//                   title: t('diffImpactTitle' as any),
//                   desc: t('diffImpactDesc' as any),
//                 },
//               ].map((item) => (
//                 <DiffCard key={item.title}>
//                   <DiffIcon sx={{ background: item.color, color: item.iconColor }}>
//                     {item.icon}
//                   </DiffIcon>
//                   <Box>
//                     <CardTitle sx={{ fontSize: '0.8rem', mb: 0.3 }}>{item.title}</CardTitle>
//                     <CardSubtitle sx={{ fontSize: '0.72rem', lineHeight: 1.5 }}>
//                       {item.desc}
//                     </CardSubtitle>
//                   </Box>
//                 </DiffCard>
//               ))}
//             </Box>

//             <Box
//               sx={(theme) => ({
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 gap: 2,
//                 flexWrap: 'wrap',
//                 pt: 2,
//                 borderTop: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
//               })}
//             >
//               <BodyMono
//                 sx={{
//                   fontStyle: 'italic',
//                   fontSize: '0.75rem',
//                   color: 'text.disabled',
//                   flex: 1,
//                   minWidth: 200,
//                 }}
//               >
//                 {t('recruiterMessagePt1')}
//                 <Box
//                   component="span"
//                   sx={{ color: 'secondary.main', fontStyle: 'normal', fontWeight: 600 }}
//                 >
//                   {t('technicalExcellence')}
//                 </Box>
//                 {t('recruiterMessagePt2')}
//                 <Box
//                   component="span"
//                   sx={{ color: 'secondary.main', fontStyle: 'normal', fontWeight: 600 }}
//                 >
//                   {t('valueDelivery')}
//                 </Box>
//                 {t('recruiterMessagePt3')}
//               </BodyMono>
//             </Box>
//           </SectionCard>
//         </motion.div>

//         {/* ── Tech stack ── */}
//         <motion.div variants={itemVariants}>
//           <SectionCard sx={{ mb: 5 }}>
//             <CardHeader>
//               <CardIcon>
//                 <Box sx={{ fontSize: 20, display: 'flex', alignItems: 'center' }}>⚡</Box>
//               </CardIcon>
//               <Box>
//                 <CardTitle>{t('myTechStack')}</CardTitle>
//                 <CardSubtitle>{t('techStackSubtitle' as any)}</CardSubtitle>
//               </Box>
//             </CardHeader>

//             {renderTechGrid()}
//           </SectionCard>
//         </motion.div>

//         {/* ── Location & Map ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true, margin: '-60px' }}
//         >
//           <MapCard>
//             <CardHeader>
//               <CardIcon>
//                 <LocationOnIcon sx={{ fontSize: 20 }} />
//               </CardIcon>
//               <Box>
//                 <CardTitle>{t('title')}</CardTitle>
//                 <CardSubtitle>{t('description')}</CardSubtitle>
//               </Box>
//             </CardHeader>

//             {renderMap()}

//             <Box sx={{ mt: 2.5, textAlign: 'center' }}>
//               <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 1.5 }}>
//                 <LocationChip>
//                   <WorkIcon sx={{ fontSize: { xs: 11, sm: 12 } }} />
//                   {t('remoteNational')}
//                 </LocationChip>
//                 <LocationChip>
//                   <WorkIcon sx={{ fontSize: { xs: 11, sm: 12 } }} />
//                   {t('remoteInternational')}
//                 </LocationChip>
//                 <LocationChip>
//                   <LocationOnIcon sx={{ fontSize: { xs: 11, sm: 12 } }} />
//                   {t('curitibaLocal')}
//                 </LocationChip>
//                 <LocationChip>
//                   <HomeIcon sx={{ fontSize: { xs: 11, sm: 12 } }} />
//                   {t('hybrid')}
//                 </LocationChip>
//               </Box>
//               <MetaMono
//                 sx={{
//                   fontStyle: 'italic',
//                   color: 'text.disabled',
//                   fontSize: { xs: '0.7rem', sm: '0.75rem' },
//                 }}
//               >
//                 {t('slogan')}
//               </MetaMono>
//             </Box>
//           </MapCard>
//         </motion.div>
//       </motion.div>
//     </Container>
//   );
// };

// export default Home;
