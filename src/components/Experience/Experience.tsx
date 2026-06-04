import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GitHubIcon from '@mui/icons-material/GitHub';
import SpeedIcon from '@mui/icons-material/Speed';
import { Box, Card, Chip, Container, Divider, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { trackProfileConversion, trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation } from '../../hooks/useTranslation';

const TerminalCard = styled(Card)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.92),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 14,
  overflow: 'hidden',
  padding: 0,
  marginBottom: theme.spacing(3),
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 4px 32px rgba(0,0,0,0.45)'
      : '0 4px 24px rgba(15,23,42,0.08)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
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
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.28),
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 48px rgba(0,0,0,0.55)'
        : '0 8px 32px rgba(15,23,42,0.12)',
  },
}));

const TerminalMacHeader = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.05)',
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

const TerminalBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 3),
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(2) },
}));

// Adaptive cards (white in light mode)
const CompactCard = styled(Card)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 14,
  padding: theme.spacing(2.5),
  marginBottom: theme.spacing(2),
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 4px 32px rgba(0,0,0,0.45)'
      : '0 4px 24px rgba(15,23,42,0.08)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 70%, transparent 100%)`,
    opacity: 0.4,
  },
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.25),
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 48px rgba(0,0,0,0.55)'
        : '0 8px 32px rgba(15,23,42,0.12)',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(2), borderRadius: 10 },
}));

const QuickFacts = styled(Box)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderLeft: `3px solid ${theme.palette.primary.main}`,
  borderRadius: 14,
  padding: theme.spacing(2.5),
  marginBottom: theme.spacing(3),
  cursor: 'pointer',
  position: 'relative',
  boxShadow:
    theme.palette.mode === 'dark' ? '0 4px 32px rgba(0,0,0,0.4)' : '0 4px 24px rgba(15,23,42,0.08)',
  transition: 'border-color 0.3s ease',
  '&:hover': { borderColor: alpha(theme.palette.primary.main, 0.3) },
  [theme.breakpoints.down('sm')]: { borderRadius: 10 },
}));

const CommandLine = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.primary.main,
  marginBottom: 16,
  fontSize: '0.88rem',
}));

const OutputText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.text.primary,
  marginBottom: 16,
  lineHeight: 1.7,
  marginLeft: '25px',
  marginRight: '5px',
  fontSize: '0.88rem',
}));

const SkillItem = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.8),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontSize: '0.88rem',
  cursor: 'pointer',
  lineHeight: 1.6,
  transition: 'color 0.2s ease',
  '&:hover': { color: theme.palette.secondary.main },
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontWeight: 600,
}));

// SectionTitle in CompactCard context (adaptive text)
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontSize: '0.95rem',
  fontWeight: 600,
  '&::before': {
    content: '""',
    display: 'inline-block',
    width: '3px',
    height: '1em',
    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px',
    flexShrink: 0,
  },
}));

const JobHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(1),
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.secondary.dark,
  fontWeight: 600,
  fontSize: '0.95rem',
}));

const JobPeriod = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.text.secondary,
  fontSize: '0.82rem',
}));

const MetricChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.25),
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  color: theme.palette.primary.main,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.72rem',
  height: 24,
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.15), transform: 'scale(1.04)' },
}));

const GitHubMetric = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(6, 18, 38, 0.75)'
      : alpha(theme.palette.background.paper, 0.85),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
  borderRadius: 10,
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: alpha(theme.palette.primary.main, 0.35),
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
  },
}));

const GitHubImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  transition: 'transform 0.3s ease',
  '&:hover': { transform: 'scale(1.02)' },
});

const Experience: FC = () => {
  const { t } = useTypedTranslation();

  const handleQuickFactsClick = () =>
    trackProfileTabInteraction('experience', 'quick_facts_section_click', 'executive_summary');
  const handleMetricChipClick = (m: string) =>
    trackProfileTabInteraction('experience', 'metric_chip_click', m);
  const handleJobCardClick = (j: string, p: string) =>
    trackProfileTabInteraction('experience', 'job_card_click', `${j}_${p}`);
  const handleSkillItemClick = (c: string, s: string) =>
    trackProfileTabInteraction('experience', 'skill_item_click', `${c}_${s}`);
  const handleGitHubMetricClick = (m: string) => {
    trackProfileTabInteraction('experience', 'github_metric_click', m);
    if (m.includes('profile') || m.includes('stats'))
      trackProfileConversion('github_interest', 'experience');
  };
  const handleTechStackClick = (c: string) =>
    trackProfileTabInteraction('experience', 'tech_stack_click', c);
  const handleTerminalClick = () =>
    trackProfileTabInteraction('experience', 'terminal_section_click', 'github_activity');

  return (
    <Container component="section" id="experience" sx={{ minHeight: '100vh', py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 5,
            backgroundImage: (t) =>
              `linear-gradient(135deg, ${t.palette.primary.light} 0%, ${t.palette.primary.main} 40%, ${t.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2rem' },
          }}
        >
          {t('experienceTitle')}
        </Typography>

        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <QuickFacts onClick={handleQuickFactsClick}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SpeedIcon sx={{ color: 'secondary.main', mr: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  color: 'secondary.dark',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                {t('executiveSummary')}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {[
                ['yearsExperience', '4_years_experience'],
                ['recordsProcessed', '20M_records_processed'],
                ['timeReduction', '60_percent_time_reduction'],
                ['schoolsConnected', '2000_schools_connected'],
                ['concurrentUsers', '30k_concurrent_users'],
              ].map(([key, id]) => (
                <MetricChip
                  key={key}
                  label={t(key as any)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMetricChipClick(id);
                  }}
                />
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Roboto Mono", monospace',
                color: 'text.primary',
                lineHeight: 1.7,
                fontSize: '0.85rem',
              }}
            >
              <HighlightText>{t('specialistIn')}</HighlightText> {t('specialistIn001')} |{' '}
              <HighlightText>{t('available')}</HighlightText> {t('availableLocation')} |{' '}
              <HighlightText>{t('focus')}</HighlightText> {t('focusArea')}
            </Typography>
          </QuickFacts>
        </motion.div>

        {/* Current Job */}
        <motion.div whileHover={{ scale: 1.003 }}>
          <CompactCard onClick={() => handleJobCardClick('current_job', '2021-present')}>
            <JobHeader>
              <Box>
                <JobTitle>{t('currentJobTitle')}</JobTitle>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.85rem',
                    mt: 0.5,
                  }}
                >
                  {t('currentJobDescription')}
                </Typography>
              </Box>
              <JobPeriod>{t('currentJobPeriod')}</JobPeriod>
            </JobHeader>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
              {['.NET', 'React/TypeScript', 'Microsserviços', 'Google Cloud', 'PostgreSQL'].map(
                (tech, i) => (
                  <MetricChip
                    key={tech}
                    label={tech}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMetricChipClick(`${tech.toLowerCase().replace(/\//g, '_')}_tech_${i}`);
                    }}
                  />
                )
              )}
            </Box>
            <Box sx={{ pl: 2 }}>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick('current_job', 'schools_integration');
                }}
              >
                🎯 <HighlightText>2.000+</HighlightText> {t('currentJobAchievement1')}
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick('current_job', 'performance_improvement');
                }}
              >
                ⚡ <HighlightText>60%</HighlightText> {t('currentJobAchievement2')}
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick('current_job', 'cloud_native_users');
                }}
              >
                🚀 {t('currentJobAchievement3')}{' '}
                <HighlightText>{t('currentJobAchievement3b')}</HighlightText>{' '}
                {t('currentJobAchievement3c')} <HighlightText>30k+</HighlightText>{' '}
                {t('currentJobAchievement3d')}
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick('current_job', 'tech_modernization');
                }}
              >
                🔧 {t('currentJobAchievement4')}{' '}
                <HighlightText>{t('currentJobAchievement4b')}</HighlightText>{' '}
                {t('currentJobAchievement4c')}
              </SkillItem>
            </Box>
          </CompactCard>
        </motion.div>

        {/* Previous Job */}
        <motion.div whileHover={{ scale: 1.003 }}>
          <CompactCard onClick={() => handleJobCardClick('previous_job', '2015-2020')}>
            <JobHeader>
              <Box>
                <JobTitle>{t('previousJobTitle')}</JobTitle>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.85rem',
                    mt: 0.5,
                  }}
                >
                  {t('previousJobDescription')}
                </Typography>
              </Box>
              <JobPeriod>{t('previousJobPeriod')}</JobPeriod>
            </JobHeader>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
              {[
                t('technicalCommunication'),
                t('mentoring'),
                t('problemSolving'),
                t('criticalThinking'),
              ].map((label, i) => (
                <MetricChip
                  key={i}
                  label={label}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMetricChipClick(label.toLowerCase().replace(/ /g, '_'));
                  }}
                />
              ))}
            </Box>
            <Box sx={{ pl: 2 }}>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick('previous_job', 'active_methodologies');
                }}
              >
                🎓 <HighlightText>{t('previousJobAchievement1')}</HighlightText>
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick('previous_job', 'digital_solutions');
                }}
              >
                💡 <HighlightText>{t('previousJobAchievement2')}</HighlightText>
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick('previous_job', 'strategic_transition');
                }}
              >
                🔄 <HighlightText>{t('previousJobAchievement3')}</HighlightText>
              </SkillItem>
            </Box>
          </CompactCard>
        </motion.div>

        <Divider sx={{ my: 4, borderColor: (t) => alpha(t.palette.divider, 0.5) }} />

        <motion.div whileHover={{ scale: 1.003 }}>
          <TerminalCard onClick={handleTerminalClick}>
            <TerminalMacHeader>
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
                  fontSize: '0.72rem',
                  color: 'text.secondary',
                  opacity: 0.6,
                  ml: 0.5,
                  flex: 1,
                  textAlign: 'center',
                }}
              >
                git log --graph --oneline
              </Typography>
            </TerminalMacHeader>
            <TerminalBody>
              <CommandLine>$ git log --graph --oneline</CommandLine>
              <SectionTitle variant="h6">
                <GitHubIcon sx={{ color: 'secondary.main' }} />
                {t('developmentActivity')}
              </SectionTitle>
              <OutputText>
                {t('activityDescription')}{' '}
                <Box component="span" sx={{ color: 'secondary.dark', fontWeight: 600 }}>
                  {t('consistency')}
                </Box>{' '}
                {t('and')}{' '}
                <Box component="span" sx={{ color: 'secondary.dark', fontWeight: 600 }}>
                  {t('discipline')}
                </Box>{' '}
                {t('activityDescriptionEnd')}
              </OutputText>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3,
                  mt: 2,
                }}
              >
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <GitHubMetric
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGitHubMetricClick('streak_stats');
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: 'secondary.dark',
                        fontFamily: '"Roboto Mono", monospace',
                        mb: 1,
                        fontSize: '0.85rem',
                      }}
                    >
                      {t('commitStreak')}
                    </Typography>
                    <GitHubImage
                      src="https://streak-stats.demolab.com/?user=etezolin&theme=dark"
                      alt="GitHub Streak Stats"
                      loading="lazy"
                    />
                  </GitHubMetric>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <GitHubMetric
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGitHubMetricClick('profile_summary');
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: 'secondary.dark',
                        fontFamily: '"Roboto Mono", monospace',
                        mb: 1,
                        fontSize: '0.85rem',
                      }}
                    >
                      {t('languagesActivity')}
                    </Typography>
                    <GitHubImage
                      src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=etezolin&theme=github_dark"
                      alt="GitHub Profile Summary"
                      loading="lazy"
                    />
                  </GitHubMetric>
                </motion.div>
              </Box>
              <OutputText sx={{ mt: 2, fontSize: '0.82rem' }}>
                ✅{' '}
                <Box component="span" sx={{ color: 'secondary.dark', fontWeight: 600 }}>
                  {t('professionalismEvidence')}
                </Box>{' '}
                {t('professionalismDescription')}
              </OutputText>
            </TerminalBody>
          </TerminalCard>
        </motion.div>

        <Divider sx={{ my: 3, borderColor: (t) => alpha(t.palette.divider, 0.5) }} />

        {/* Tech Stack — adaptive card */}
        <motion.div whileHover={{ scale: 1.003 }}>
          <CompactCard>
            <Typography
              sx={{
                fontFamily: '"Roboto Mono", monospace',
                color: 'primary.main',
                mb: 2,
                fontSize: '0.88rem',
              }}
            >
              {t('techStackTitle')}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 3,
              }}
            >
              {[
                {
                  key: 'backend',
                  icon: <CodeIcon sx={{ color: 'secondary.main', fontSize: 18 }} />,
                  items: [
                    '.NET/C# + Dapper;',
                    'APIs RESTful + Clean Architecture;',
                    'Microservices + CQRS;',
                    'SQL Server + PostgreSQL.',
                  ],
                },
                {
                  key: 'frontend',
                  icon: <DesignServicesIcon sx={{ color: 'secondary.main', fontSize: 18 }} />,
                  items: [
                    'React + TypeScript;',
                    'Material-UI + Responsive Design;',
                    'State Management (Redux/Context);',
                    'Performance Optimization.',
                  ],
                },
                {
                  key: 'cloudDevops',
                  icon: <CloudIcon sx={{ color: 'secondary.main', fontSize: 18 }} />,
                  items: [
                    'Google Cloud Platform;',
                    'Docker + Kubernetes;',
                    'CI/CD Pipelines;',
                    'Infrastructure as Code.',
                  ],
                },
              ].map(({ key, icon, items }) => (
                <Box key={key} onClick={() => handleTechStackClick(key)}>
                  <SectionTitle variant="h6">
                    {icon}
                    {t(key as any)}
                  </SectionTitle>
                  <Box sx={{ pl: 2 }}>
                    {items.map((item, i) => (
                      <SkillItem
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSkillItemClick(key, item);
                        }}
                      >
                        • {item}
                      </SkillItem>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </CompactCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Experience;
