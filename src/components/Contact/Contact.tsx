import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideocamIcon from '@mui/icons-material/Videocam';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Card, Chip, Container, Divider, IconButton, Link, Tooltip } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import {
  BodyMono,
  CardSubtitle,
  CardTitle,
  MetaMono,
  SectionLabel,
  SectionTitle,
} from '../../components/shared/TypographyTokens';
import { trackProfileConversion, trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation } from '../../hooks/useTranslation';

// ─── Shared card base ─────────────────────────────────────────────────────────

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

const SocialBtn = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  borderRadius: '10px',
  transition: 'all 0.22s ease',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.07),
    borderColor: alpha(theme.palette.primary.main, 0.4),
    transform: 'translateY(-2px)',
  },
}));

const RowDot = styled(Box)(({ theme }) => ({
  width: 5,
  height: 5,
  borderRadius: '50%',
  flexShrink: 0,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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
        {/* SectionTitle — token */}
        <SectionTitle>{t('contactTitle')}</SectionTitle>

        {/* ── Hero — status card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionCard sx={{ mb: 3, cursor: 'default', '&:hover': { transform: 'none' } }}>
            <CardHeader>
              <CardIcon>
                <EmailIcon />
              </CardIcon>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                {/* CardTitle + CardSubtitle — tokens */}
                <CardTitle>{t('readyForChallenges')}</CardTitle>
                <CardSubtitle>{t('heroDescription')}</CardSubtitle>
              </Box>
            </CardHeader>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
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
          </SectionCard>
        </motion.div>

        {/* ── Two-column grid ── */}
        <Box
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}
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
                  <CardTitle>{t('contactInformation')}</CardTitle>
                  <CardSubtitle>
                    {t('primaryEmail')} · {t('whatsappPhone')}
                  </CardSubtitle>
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
                  {/* MetaMono for row label — token */}
                  <MetaMono sx={{ fontSize: '0.75rem', mb: 0.25 }}>{t('primaryEmail')}</MetaMono>
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
                  <MetaMono sx={{ fontSize: '0.75rem', mb: 0.25 }}>{t('whatsappPhone')}</MetaMono>
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

              {/* CTA rows — SectionLabel token */}
              <SectionLabel>{t('sendEmail')} · WhatsApp · LinkedIn</SectionLabel>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2.5 }}>
                <ContactRow
                  onClick={handleEmailClick}
                  sx={{ mb: 0, flex: 1, minWidth: 140, justifyContent: 'center' }}
                >
                  <EmailIcon sx={{ fontSize: 15, color: '#e53935', flexShrink: 0 }} />
                  <BodyMono sx={{ fontSize: '0.75rem', color: 'text.primary' }}>
                    {t('sendEmail')}
                  </BodyMono>
                </ContactRow>
                <ContactRow
                  onClick={handleWhatsAppClick}
                  sx={{ mb: 0, flex: 1, minWidth: 120, justifyContent: 'center' }}
                >
                  <MessageIcon sx={{ fontSize: 15, color: '#25d366', flexShrink: 0 }} />
                  <BodyMono sx={{ fontSize: '0.75rem', color: 'text.primary' }}>WhatsApp</BodyMono>
                </ContactRow>
                <ContactRow
                  onClick={handleLinkedInClick}
                  sx={{ mb: 0, flex: 1, minWidth: 100, justifyContent: 'center' }}
                >
                  <LinkedInIcon sx={{ fontSize: 15, color: '#0288d1', flexShrink: 0 }} />
                  <BodyMono sx={{ fontSize: '0.75rem', color: 'text.primary' }}>LinkedIn</BodyMono>
                </ContactRow>
              </Box>

              <Divider sx={{ my: 2, borderColor: (t) => alpha(t.palette.divider, 0.5) }} />

              {/* Social links — SectionLabel token */}
              <SectionLabel sx={{ mb: 1.5 }}>{t('professionalLinks')}</SectionLabel>
              <Box sx={{ display: 'flex', gap: 1 }}>
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
                  <CardTitle>{t('availability')}</CardTitle>
                  <CardSubtitle>{t('preferredSchedule')}</CardSubtitle>
                </Box>
              </CardHeader>

              {/* Schedule rows — BodyMono token */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, mb: 2.5 }}>
                {[
                  { icon: <ScheduleIcon />, label: t('weekdaysSchedule'), key: 'weekdays_8_18' },
                  { icon: <VideocamIcon />, label: t('onlineInterviewsPreferred'), key: 'online' },
                  { icon: <CheckCircleIcon />, label: t('responseTime24h'), key: '24h' },
                ].map((item) => (
                  <ContactRow
                    key={item.key}
                    onClick={() => handleStatusChipClick('schedule', item.key)}
                    sx={{ mb: 0 }}
                  >
                    <RowDot />
                    <BodyMono sx={{ color: 'text.primary', fontSize: '0.82rem' }}>
                      {item.label}
                    </BodyMono>
                  </ContactRow>
                ))}
              </Box>

              <Divider sx={{ my: 2, borderColor: (t) => alpha(t.palette.divider, 0.5) }} />

              {/* Opportunities — SectionLabel token */}
              <SectionLabel sx={{ mb: 1.25 }}>{t('opportunitiesOfInterest')}</SectionLabel>
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

              {/* Quote — BodyMono italic token */}
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
                <BodyMono sx={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.82rem' }}>
                  {t('professionalQuote')}
                </BodyMono>
              </Box>
            </SectionCard>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
