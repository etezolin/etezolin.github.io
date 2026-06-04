import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideocamIcon from '@mui/icons-material/Videocam';
import WorkIcon from '@mui/icons-material/Work';
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from '@mui/material';
import { alpha, keyframes, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { trackProfileConversion, trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation } from '../../hooks/useTranslation';

// ─── Animation ────────────────────────────────────────────────────────────────

const pulseGlow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 8px rgba(0,230,118,0.3)); }
  50%       { filter: drop-shadow(0 0 18px rgba(0,230,118,0.55)); }
`;

// ─── Shared card base (identical to Competence / ProjectsSection) ─────────────

const SectionCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 14,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 4px 32px rgba(0,0,0,0.45)'
      : '0 4px 24px rgba(15,23,42,0.08)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 100%)`,
    opacity: 0.45,
  },
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.28),
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 48px rgba(0,0,0,0.55)'
        : '0 8px 32px rgba(15,23,42,0.12)',
    transform: 'translateY(-3px)',
  },
  [theme.breakpoints.down('sm')]: { borderRadius: 10, padding: theme.spacing(2) },
}));

// Hero card — stronger top gradient, no hover lift (it's a banner)
const HeroCard = styled(SectionCard)(({ theme }) => ({
  padding: theme.spacing(4),
  cursor: 'default',
  '&::before': {
    opacity: 0.7,
    height: '2px',
  },
  '&:hover': {
    transform: 'none',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 4px 32px rgba(0,0,0,0.45)'
        : '0 4px 24px rgba(15,23,42,0.08)',
  },
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3) },
}));

// ─── Category header (same as Competence) ────────────────────────────────────

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2.5),
  paddingBottom: theme.spacing(1.5),
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
}));

const CardIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '10px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.3)}`,
  flexShrink: 0,
}));

// ─── Contact row (mirrors SkillRow / ResultRow) ───────────────────────────────

const ContactRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.25, 1.5),
  borderRadius: 8,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.07)}`,
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.03)'
      : alpha(theme.palette.primary.main, 0.025),
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  marginBottom: theme.spacing(1),
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.06),
    borderColor: alpha(theme.palette.primary.main, 0.18),
    transform: 'translateX(4px)',
  },
}));

const ContactRowIcon = styled(Box)(() => ({
  width: 34,
  height: 34,
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& svg': { fontSize: 17 },
}));

// ─── Status / opportunity chips ───────────────────────────────────────────────

const StatusChip = styled(Chip)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  height: 28,
  fontSize: '0.72rem',
  fontWeight: 500,
  transition: 'all 0.22s ease',
  cursor: 'pointer',
  '&.available': {
    backgroundColor: alpha('#4caf50', 0.1),
    color: theme.palette.mode === 'dark' ? '#66bb6a' : '#2e7d32',
    border: `1px solid ${alpha('#4caf50', 0.28)}`,
  },
  '&.info': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    color: theme.palette.primary.main,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.22)}`,
  },
  '&.location': {
    backgroundColor: alpha('#9c27b0', 0.08),
    color: theme.palette.mode === 'dark' ? '#ce93d8' : '#7b1fa2',
    border: `1px solid ${alpha('#9c27b0', 0.25)}`,
  },
}));

// ─── CTA action buttons ───────────────────────────────────────────────────────

const ActionButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.85rem',
  textTransform: 'none',
  borderRadius: 10,
  padding: theme.spacing(1.25, 2.5),
  minWidth: 140,
  height: 42,
  transition: 'all 0.3s ease',
  '&.primary': {
    background: 'linear-gradient(135deg, #e53935 0%, #c62828 100%)',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 4px 16px rgba(229,57,53,0.28)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 28px rgba(229,57,53,0.38)',
      background: 'linear-gradient(135deg, #ef5350 0%, #e53935 100%)',
    },
  },
  '&.whatsapp': {
    background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 4px 16px rgba(37,211,102,0.28)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 28px rgba(37,211,102,0.38)',
      background: 'linear-gradient(135deg, #4caf50 0%, #25d366 100%)',
    },
  },
  '&.linkedin': {
    background: 'linear-gradient(135deg, #0288d1 0%, #01579b 100%)',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 4px 16px rgba(2,136,209,0.28)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 28px rgba(2,136,209,0.38)',
      background: 'linear-gradient(135deg, #29b6f6 0%, #0288d1 100%)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.78rem',
    minWidth: 120,
    padding: theme.spacing(1, 1.75),
  },
}));

const SocialBtn = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  borderRadius: '10px',
  transition: 'all 0.22s ease',
  color: 'text.secondary',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.07),
    borderColor: alpha(theme.palette.primary.main, 0.4),
    transform: 'translateY(-2px)',
  },
}));

// ─── Main component ───────────────────────────────────────────────────────────

const Contact: FC = () => {
  const { t } = useTypedTranslation();

  const handleEmailClick = () => {
    trackProfileTabInteraction('contact', 'contact_method_click', 'email');
    trackProfileConversion('email_contact', 'contact');
    window.open(
      'mailto:tezolin.edison@gmail.com?subject=Oportunidade%20de%20Trabalho%20-%20Desenvolvedor%20Full-Stack&body=Olá%20Edison,%0A%0AVi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades.%0A%0AAtenciosamente,',
      '_blank'
    );
  };
  const handleWhatsAppClick = () => {
    trackProfileTabInteraction('contact', 'contact_method_click', 'whatsapp');
    trackProfileConversion('whatsapp_contact', 'contact');
    window.open(
      'https://wa.me/5541998335860?text=Olá%20Edison,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20de%20desenvolvimento',
      '_blank'
    );
  };
  const handleLinkedInClick = () => {
    trackProfileTabInteraction('contact', 'social_link_click', 'linkedin');
    trackProfileConversion('linkedin_visit', 'contact');
    window.open('https://www.linkedin.com/in/etezolin', '_blank');
  };
  const handleGitHubClick = () => {
    trackProfileTabInteraction('contact', 'social_link_click', 'github');
    trackProfileConversion('github_visit', 'contact');
    window.open('https://github.com/etezolin', '_blank');
  };
  const handleCVDownload = () => {
    trackProfileTabInteraction('contact', 'cv_download', 'pdf');
    trackProfileConversion('cv_download', 'contact');
  };
  const handleDirectEmailClick = () => {
    trackProfileTabInteraction('contact', 'direct_contact_click', 'email_link');
    trackProfileConversion('direct_email_contact', 'contact');
  };
  const handleDirectPhoneClick = () => {
    trackProfileTabInteraction('contact', 'direct_contact_click', 'phone_link');
    trackProfileConversion('phone_contact', 'contact');
  };
  const handleStatusChipClick = (chipType: string, label: string) =>
    trackProfileTabInteraction('contact', 'status_chip_click', `${chipType}_${label}`);
  const handleOpportunityChipClick = (opportunity: string) =>
    trackProfileTabInteraction('contact', 'opportunity_interest', opportunity);
  const handleQuoteClick = () =>
    trackProfileTabInteraction('contact', 'quote_click', 'professional_message');

  return (
    <Container sx={{ py: 8 }} component="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ── Section title ── */}
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            backgroundImage: (t) =>
              `linear-gradient(135deg, ${t.palette.primary.light} 0%, ${t.palette.primary.main} 40%, ${t.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2rem' },
          }}
        >
          {t('contactTitle')}
        </Typography>

        {/* ── Hero banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <HeroCard sx={{ mb: 3 }}>
            <Box sx={{ textAlign: 'center', mb: 3.5 }}>
              <RocketLaunchIcon
                sx={{
                  fontSize: 52,
                  color: 'secondary.main',
                  mb: 2,
                  cursor: 'pointer',
                  animation: `${pulseGlow} 3s ease-in-out infinite`,
                }}
                onClick={() => trackProfileTabInteraction('contact', 'hero_icon_click', 'rocket')}
              />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  color: 'secondary.dark',
                  mb: 1.5,
                  fontWeight: 700,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                }}
              >
                {t('readyForChallenges')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.75,
                  maxWidth: 560,
                  mx: 'auto',
                  fontFamily: '"Roboto Mono", monospace',
                  fontSize: { xs: '0.83rem', md: '0.9rem' },
                }}
              >
                {t('heroDescription')}
              </Typography>
            </Box>

            {/* CTA buttons */}
            <Box
              sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mb: 3 }}
            >
              <ActionButton
                className="primary"
                startIcon={<EmailIcon />}
                onClick={handleEmailClick}
              >
                {t('sendEmail')}
              </ActionButton>
              <ActionButton
                className="whatsapp"
                startIcon={<MessageIcon />}
                onClick={handleWhatsAppClick}
              >
                WhatsApp
              </ActionButton>
              <ActionButton
                className="linkedin"
                startIcon={<CalendarTodayIcon />}
                onClick={handleLinkedInClick}
              >
                LinkedIn
              </ActionButton>
            </Box>

            {/* Status chips */}
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 0.75 }}>
              <StatusChip
                className="available"
                icon={<CheckCircleIcon />}
                label={t('availableImmediately')}
                onClick={() => handleStatusChipClick('availability', 'immediate')}
              />
              <StatusChip
                className="location"
                icon={<LocationOnIcon />}
                label={t('remoteOrCuritiba')}
                onClick={() => handleStatusChipClick('location', 'remote_curitiba')}
              />
              <StatusChip
                className="info"
                icon={<VideocamIcon />}
                label={t('onlineInterviews')}
                onClick={() => handleStatusChipClick('interview', 'online')}
              />
            </Box>
          </HeroCard>
        </motion.div>

        {/* ── Two-column grid ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {/* ── Contact information ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionCard sx={{ height: '100%' }}>
              <CardHeader>
                <CardIcon>
                  <EmailIcon />
                </CardIcon>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontWeight: 600,
                      fontSize: '0.97rem',
                      color: 'text.primary',
                    }}
                  >
                    {t('contactInformation')}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: '0.72rem',
                      color: 'text.secondary',
                    }}
                  >
                    {t('primaryEmail')} · {t('whatsappPhone')}
                  </Typography>
                </Box>
              </CardHeader>

              {/* Email row */}
              <ContactRow onClick={handleDirectEmailClick}>
                <ContactRowIcon
                  sx={{
                    background: () => alpha('#f44336', 0.1),
                    border: `1px solid ${alpha('#f44336', 0.25)}`,
                    color: '#ef5350',
                  }}
                >
                  <EmailIcon />
                </ContactRowIcon>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: '0.75rem',
                      color: 'text.secondary',
                      mb: 0.25,
                    }}
                  >
                    {t('primaryEmail')}
                  </Typography>
                  <Link
                    href="mailto:tezolin.edison@gmail.com"
                    sx={{
                      color: '#e53935',
                      textDecoration: 'none',
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: { xs: '0.78rem', sm: '0.85rem' },
                      fontWeight: 500,
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    tezolin.edison@gmail.com
                  </Link>
                </Box>
              </ContactRow>

              {/* Phone row */}
              <ContactRow onClick={handleDirectPhoneClick}>
                <ContactRowIcon
                  sx={{
                    background: () => alpha('#4caf50', 0.1),
                    border: `1px solid ${alpha('#4caf50', 0.25)}`,
                    color: '#4caf50',
                  }}
                >
                  <PhoneIcon />
                </ContactRowIcon>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: '0.75rem',
                      color: 'text.secondary',
                      mb: 0.25,
                    }}
                  >
                    {t('whatsappPhone')}
                  </Typography>
                  <Link
                    href="https://wa.me/5541998335860"
                    target="_blank"
                    sx={{
                      color: '#4caf50',
                      textDecoration: 'none',
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: { xs: '0.78rem', sm: '0.85rem' },
                      fontWeight: 500,
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    +55 41 99833-5860
                  </Link>
                </Box>
              </ContactRow>

              <Divider sx={{ my: 2.5, borderColor: (t) => alpha(t.palette.divider, 0.5) }} />
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.72rem',
                    color: 'text.secondary',
                    display: 'block',
                    mb: 1.5,
                    letterSpacing: '0.4px',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('professionalLinks')}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                <Tooltip title={t('linkedinTooltip')} arrow>
                  <SocialBtn onClick={handleLinkedInClick} aria-label="LinkedIn">
                    <LinkedInIcon sx={{ fontSize: 19, color: '#0288d1' }} />
                  </SocialBtn>
                </Tooltip>
                <Tooltip title={t('githubTooltip')} arrow>
                  <SocialBtn onClick={handleGitHubClick} aria-label="GitHub">
                    <GitHubIcon sx={{ fontSize: 19 }} />
                  </SocialBtn>
                </Tooltip>
                <Tooltip title={t('downloadCvTooltip')} arrow>
                  <SocialBtn onClick={handleCVDownload} aria-label="Download CV">
                    <Link
                      href="/Curriculum_Edison_Tezolin.pdf"
                      download
                      sx={{ display: 'flex', alignItems: 'center', color: 'secondary.main' }}
                    >
                      <DownloadIcon sx={{ fontSize: 19 }} />
                    </Link>
                  </SocialBtn>
                </Tooltip>
              </Box>
            </SectionCard>
          </motion.div>

          {/* ── Availability ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionCard sx={{ height: '100%' }}>
              <CardHeader>
                <CardIcon>
                  <ScheduleIcon />
                </CardIcon>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontWeight: 600,
                      fontSize: '0.97rem',
                      color: 'text.primary',
                    }}
                  >
                    {t('availability')}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: '0.72rem',
                      color: 'text.secondary',
                    }}
                  >
                    {t('preferredSchedule')}
                  </Typography>
                </Box>
              </CardHeader>

              {/* Schedule rows — mirrors SkillRow */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, mb: 2.5 }}>
                {[
                  {
                    icon: <ScheduleIcon />,
                    label: t('weekdaysSchedule'),
                    cls: 'info',
                    key: 'weekdays_8_18',
                  },
                  {
                    icon: <VideocamIcon />,
                    label: t('onlineInterviewsPreferred'),
                    cls: 'info',
                    key: 'online',
                  },
                  {
                    icon: <CheckCircleIcon />,
                    label: t('responseTime24h'),
                    cls: 'available',
                    key: '24h',
                  },
                ].map((item) => (
                  <ContactRow
                    key={item.key}
                    onClick={() => handleStatusChipClick('schedule', item.key)}
                    sx={{ mb: 0 }}
                  >
                    <Box
                      sx={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        flexShrink: 0,
                        background: (t) =>
                          `linear-gradient(135deg, ${t.palette.primary.main}, ${t.palette.secondary.main})`,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        fontSize: '0.82rem',
                        color: 'text.primary',
                      }}
                    >
                      {item.label}
                    </Typography>
                  </ContactRow>
                ))}
              </Box>

              <Divider sx={{ my: 2, borderColor: (t) => alpha(t.palette.divider, 0.5) }} />

              {/* Opportunities */}
              <Typography
                variant="caption"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  fontSize: '0.72rem',
                  color: 'text.secondary',
                  display: 'block',
                  mb: 1.25,
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                }}
              >
                {t('opportunitiesOfInterest')}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
                {[
                  { label: t('fullStackDeveloper'), key: 'full_stack_developer' },
                  { label: t('solutionsArchitect'), key: 'solutions_architect' },
                  // { label: t('techLead'), key: 'tech_lead' },
                  { label: t('dotnetReactProjects'), key: 'dotnet_react_projects' },
                ].map((opp) => (
                  <StatusChip
                    key={opp.key}
                    className="info"
                    icon={<WorkIcon sx={{ fontSize: '14px !important' }} />}
                    label={opp.label}
                    onClick={() => handleOpportunityChipClick(opp.key)}
                  />
                ))}
              </Box>

              {/* Quote */}
              <Box
                sx={(theme) => ({
                  p: 2,
                  background: alpha(theme.palette.primary.main, 0.04),
                  borderRadius: 2,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  cursor: 'pointer',
                  transition: 'border-color 0.25s ease',
                  '&:hover': { borderColor: alpha(theme.palette.primary.main, 0.22) },
                })}
                onClick={handleQuoteClick}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.82rem',
                    color: 'text.secondary',
                    lineHeight: 1.75,
                    textAlign: 'center',
                    fontStyle: 'italic',
                  }}
                >
                  {t('professionalQuote')}
                </Typography>
              </Box>
            </SectionCard>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
