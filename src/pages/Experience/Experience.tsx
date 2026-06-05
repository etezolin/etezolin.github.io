import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GitHubIcon from '@mui/icons-material/GitHub';
import SpeedIcon from '@mui/icons-material/Speed';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Chip, Container, Divider } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { GitHubImageWithSkeleton } from '../../components/shared/GitHubImageWithSkeleton';
import { CardHeader, CardIcon, SectionCard } from '../../components/shared/Sharedcards';
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

// ─── Local styled components ──────────────────────────────────────────────────

const AchievementRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.25),
  padding: theme.spacing(0.85, 1.25),
  borderRadius: 8,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.07)}`,
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.03)'
      : alpha(theme.palette.primary.main, 0.025),
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.06),
    borderColor: alpha(theme.palette.primary.main, 0.18),
    transform: 'translateX(4px)',
  },
}));

const RowDot = styled(Box)(({ theme }) => ({
  width: 5,
  height: 5,
  borderRadius: '50%',
  flexShrink: 0,
  marginTop: 7,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
}));

const TechChip = styled(Chip)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.7rem',
  height: 22,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  color: theme.palette.primary.main,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.15), transform: 'scale(1.04)' },
}));

const AccentChip = styled(Chip)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.7rem',
  height: 22,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: alpha(theme.palette.secondary.main, 0.1),
  color: theme.palette.secondary.dark,
  border: `1px solid ${alpha(theme.palette.secondary.main, 0.25)}`,
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.18),
    transform: 'scale(1.04)',
  },
}));

const Hi = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontWeight: 700,
}));

// ─── Terminal card — extends SectionCard ──────────────────────────────────────

const TerminalCard = styled(SectionCard)(() => ({
  padding: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  '&:hover': { transform: 'translateY(-3px)' },
}));

const TerminalBar = styled(Box)(({ theme }) => ({
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

const TerminalDot = styled(Box)<{ color: string }>(({ color }) => ({
  width: 11,
  height: 11,
  borderRadius: '50%',
  backgroundColor: color,
  flexShrink: 0,
}));

const TerminalBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5, 3),
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(2) },
}));

const GitHubMetric = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(6,18,38,0.75)'
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

// const GitHubImage = styled('img')({
//   width: '100%',
//   height: 'auto',
//   borderRadius: 8,
//   transition: 'transform 0.3s ease',
//   '&:hover': { transform: 'scale(1.02)' },
// });

// ─── Main component ───────────────────────────────────────────────────────────

const Experience: FC = () => {
  const { t } = useTypedTranslation();

  const handleQuickFactsClick = () =>
    trackProfileTabInteraction('experience', 'quick_facts_section_click', 'executive_summary');
  const handleMetricChipClick = (m: string) =>
    trackProfileTabInteraction('experience', 'metric_chip_click', m);
  const handleJobCardClick = (j: string, p: string) =>
    trackProfileTabInteraction('experience', 'job_card_click', `${j}_${p}`);
  const handleAchievementClick = (c: string, s: string) =>
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

  const techStack = [
    {
      key: 'backend',
      icon: <CodeIcon />,
      items: [
        '.NET/C# + Dapper',
        'APIs RESTful + Clean Architecture',
        'Microservices + CQRS',
        'SQL Server + PostgreSQL',
      ],
    },
    {
      key: 'frontend',
      icon: <DesignServicesIcon />,
      items: [
        'React + TypeScript',
        'Material-UI + Responsive Design',
        'State Management (Redux/Context)',
        'Performance Optimization',
      ],
    },
    {
      key: 'cloudDevops',
      icon: <CloudIcon />,
      items: ['Google Cloud Platform', 'Docker', 'CI/CD Pipelines', 'Observability & Monitoring'],
    },
  ];

  return (
    <Container component="section" id="experience" sx={{ minHeight: '100vh', py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle>{t('experienceTitle')}</SectionTitle>

        {/* ── Executive summary ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionCard sx={{ mb: 3 }} onClick={handleQuickFactsClick}>
            <CardHeader>
              <CardIcon>
                <SpeedIcon />
              </CardIcon>
              <Box>
                <CardTitle>{t('executiveSummary')}</CardTitle>
                <CardSubtitle>
                  <Hi>{t('specialistIn')}</Hi> {t('specialistIn001')} · <Hi>{t('focus')}</Hi>{' '}
                  {t('focusArea')}
                </CardSubtitle>
              </Box>
            </CardHeader>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
              {(
                [
                  'yearsExperience',
                  'recordsProcessed',
                  'timeReduction',
                  'schoolsConnected',
                  'concurrentUsers',
                ] as const
              ).map((key) => (
                <AccentChip
                  key={key}
                  label={t(key as any)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMetricChipClick(key);
                  }}
                />
              ))}
            </Box>

            <AchievementRow onClick={(e) => e.stopPropagation()}>
              <RowDot />
              <BodyMono sx={{ color: 'text.primary', fontSize: '0.83rem', lineHeight: 1.7 }}>
                <Hi>{t('available')}</Hi> {t('availableLocation')}
              </BodyMono>
            </AchievementRow>
          </SectionCard>
        </motion.div>

        {/* ── Current job ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
        >
          <SectionCard
            sx={{ mb: 3 }}
            onClick={() => handleJobCardClick('current_job', '2021-present')}
          >
            <CardHeader>
              <CardIcon>
                <WorkIcon />
              </CardIcon>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 1,
                    flexWrap: 'wrap',
                  }}
                >
                  <CardTitle>{t('currentJobTitle')}</CardTitle>
                  <MetaMono sx={{ flexShrink: 0 }}>{t('currentJobPeriod')}</MetaMono>
                </Box>
                <CardSubtitle>{t('currentJobDescription')}</CardSubtitle>
              </Box>
            </CardHeader>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
              {['.NET', 'React/TypeScript', 'Microsserviços', 'Google Cloud', 'PostgreSQL'].map(
                (tech) => (
                  <TechChip
                    key={tech}
                    label={tech}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMetricChipClick(tech.toLowerCase().replace(/\//g, '_'));
                    }}
                  />
                )
              )}
            </Box>

            <SectionLabel>{t('results')}</SectionLabel>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {[
                {
                  key: 'schools_integration',
                  text: (
                    <>
                      <Hi>7k+</Hi> {t('currentJobAchievement1')}
                    </>
                  ),
                },
                {
                  key: 'performance_improvement',
                  text: (
                    <>
                      <Hi>60%</Hi> {t('currentJobAchievement2')}
                    </>
                  ),
                },
                {
                  key: 'cloud_native_users',
                  text: (
                    <>
                      {t('currentJobAchievement3')} <Hi>{t('currentJobAchievement3b')}</Hi>{' '}
                      {t('currentJobAchievement3c')} <Hi>30k+</Hi> {t('currentJobAchievement3d')}
                    </>
                  ),
                },
                {
                  key: 'tech_modernization',
                  text: (
                    <>
                      {t('currentJobAchievement4')} <Hi>{t('currentJobAchievement4b')}</Hi>{' '}
                      {t('currentJobAchievement4c')}
                    </>
                  ),
                },
              ].map(({ key, text }) => (
                <AchievementRow
                  key={key}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAchievementClick('current_job', key);
                  }}
                >
                  <RowDot />
                  <BodyMono sx={{ color: 'text.primary', fontSize: '0.83rem', lineHeight: 1.6 }}>
                    {text}
                  </BodyMono>
                </AchievementRow>
              ))}
            </Box>
          </SectionCard>
        </motion.div>

        {/* ── Previous job ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          viewport={{ once: true }}
        >
          <SectionCard
            sx={{ mb: 3 }}
            onClick={() => handleJobCardClick('previous_job', '2015-2020')}
          >
            <CardHeader>
              <CardIcon>
                <WorkIcon />
              </CardIcon>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 1,
                    flexWrap: 'wrap',
                  }}
                >
                  <CardTitle>{t('previousJobTitle')}</CardTitle>
                  <MetaMono sx={{ flexShrink: 0 }}>{t('previousJobPeriod')}</MetaMono>
                </Box>
                <CardSubtitle>{t('previousJobDescription')}</CardSubtitle>
              </Box>
            </CardHeader>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
              {[
                t('technicalCommunication'),
                t('mentoring'),
                t('problemSolving'),
                t('criticalThinking'),
              ].map((label) => (
                <TechChip
                  key={label}
                  label={label}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMetricChipClick(label.toLowerCase().replace(/ /g, '_'));
                  }}
                />
              ))}
            </Box>

            <SectionLabel>{t('results')}</SectionLabel>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {[
                { key: 'active_methodologies', textKey: 'previousJobAchievement1' },
                { key: 'digital_solutions', textKey: 'previousJobAchievement2' },
                { key: 'strategic_transition', textKey: 'previousJobAchievement3' },
              ].map(({ key, textKey }) => (
                <AchievementRow
                  key={key}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAchievementClick('previous_job', key);
                  }}
                >
                  <RowDot />
                  <BodyMono sx={{ color: 'text.primary', fontSize: '0.83rem', lineHeight: 1.6 }}>
                    <Hi>{t(textKey as any)}</Hi>
                  </BodyMono>
                </AchievementRow>
              ))}
            </Box>
          </SectionCard>
        </motion.div>

        <Divider sx={{ my: 4, borderColor: (t) => alpha(t.palette.divider, 0.5) }} />

        {/* ── GitHub activity terminal ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TerminalCard sx={{ mb: 3 }} onClick={handleTerminalClick}>
            <TerminalBar>
              <TerminalDot color="#ff5f57" />
              <TerminalDot color="#febc2e" />
              <TerminalDot color="#28c840" />
              <MetaMono
                sx={{ opacity: 0.6, ml: 0.5, flex: 1, textAlign: 'center', fontSize: '0.72rem' }}
              >
                git log --graph --oneline
              </MetaMono>
            </TerminalBar>

            <TerminalBody>
              <CardHeader sx={{ mb: 2 }}>
                <CardIcon>
                  <GitHubIcon />
                </CardIcon>
                <Box>
                  <CardTitle>{t('developmentActivity')}</CardTitle>
                  <CardSubtitle>
                    {t('activityDescription')} <Hi>{t('consistency')}</Hi> {t('and')}{' '}
                    <Hi>{t('discipline')}</Hi> {t('activityDescriptionEnd')}
                  </CardSubtitle>
                </Box>
              </CardHeader>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3,
                  mb: 2.5,
                }}
              >
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <GitHubMetric
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGitHubMetricClick('streak_stats');
                    }}
                  >
                    <CardTitle sx={{ color: 'secondary.dark', mb: 1, fontSize: '0.82rem' }}>
                      {t('commitStreak')}
                    </CardTitle>
                    <GitHubImageWithSkeleton
                      src="https://streak-stats.demolab.com/?user=etezolin&theme=dark"
                      alt="GitHub Streak Stats"
                      height={160}
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
                    <CardTitle sx={{ color: 'secondary.dark', mb: 1, fontSize: '0.82rem' }}>
                      {t('languagesActivity')}
                    </CardTitle>
                    <GitHubImageWithSkeleton
                      src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=etezolin&theme=github_dark"
                      alt="GitHub Profile Summary"
                      height={160}
                    />
                  </GitHubMetric>
                </motion.div>
              </Box>

              <AchievementRow onClick={(e) => e.stopPropagation()}>
                <RowDot />
                <BodyMono sx={{ color: 'text.primary', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  <Hi>{t('professionalismEvidence')}</Hi> {t('professionalismDescription')}
                </BodyMono>
              </AchievementRow>
            </TerminalBody>
          </TerminalCard>
        </motion.div>

        <Divider sx={{ my: 3, borderColor: (t) => alpha(t.palette.divider, 0.5) }} />

        {/* ── Tech stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <SectionCard>
            <CardHeader>
              <CardIcon>
                <CodeIcon />
              </CardIcon>
              <Box>
                <CardTitle>{t('techStackTitle')}</CardTitle>
                <CardSubtitle>Backend · Frontend · Cloud</CardSubtitle>
              </Box>
            </CardHeader>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 3,
              }}
            >
              {techStack.map(({ key, icon, items }) => (
                <Box key={key} onClick={() => handleTechStackClick(key)}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1.25,
                      pb: 1,
                      borderBottom: (t) => `1px solid ${alpha(t.palette.divider, 0.5)}`,
                    }}
                  >
                    <Box
                      sx={(theme) => ({
                        width: 28,
                        height: 28,
                        borderRadius: '7px',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        '& svg': { fontSize: 15 },
                        flexShrink: 0,
                      })}
                    >
                      {icon}
                    </Box>
                    <CardTitle sx={{ fontSize: '0.82rem' }}>{t(key as any)}</CardTitle>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.6 }}>
                    {items.map((item) => (
                      <AchievementRow
                        key={item}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAchievementClick(key, item);
                        }}
                      >
                        <RowDot />
                        <BodyMono
                          sx={{ color: 'text.primary', fontSize: '0.8rem', lineHeight: 1.5 }}
                        >
                          {item}
                        </BodyMono>
                      </AchievementRow>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </SectionCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Experience;
