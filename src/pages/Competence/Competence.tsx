import ArchitectureIcon from '@mui/icons-material/Architecture';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import StorageIcon from '@mui/icons-material/Storage';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WebIcon from '@mui/icons-material/Web';
import { Box, Chip, Container, IconButton, Tooltip, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { CardHeader, CardIcon, SectionCard } from '../../components/shared/Sharedcards';
import {
  CardSubtitle,
  CardTitle,
  MetaMono,
  SectionTitle,
} from '../../components/shared/TypographyTokens';
import { trackProfileConversion, trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation } from '../../hooks/useTranslation';

// ─── Local styled components ──────────────────────────────────────────────────

const SkillRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0.75, 1.25),
  borderRadius: 8,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.07)}`,
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.03)'
      : alpha(theme.palette.primary.main, 0.025),
  transition: 'all 0.2s ease',
  cursor: 'default',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.06),
    borderColor: alpha(theme.palette.primary.main, 0.18),
  },
}));

type BadgeLevel = 'expert' | 'advanced' | 'proficient';

const getBadge = (level: number): { label: string; type: BadgeLevel } => {
  if (level >= 90) return { label: 'Expert', type: 'expert' };
  if (level >= 75) return { label: 'Advanced', type: 'advanced' };
  return { label: 'Proficient', type: 'proficient' };
};

const LevelBadge = styled(Box, {
  shouldForwardProp: (p) => p !== 'badgetype',
})<{ badgetype: BadgeLevel }>(({ theme, badgetype }) => ({
  fontSize: '0.68rem',
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 600,
  letterSpacing: '0.4px',
  padding: '2px 9px',
  borderRadius: 5,
  ...(badgetype === 'expert' && {
    background: theme.palette.mode === 'dark' ? 'rgba(76,175,80,0.15)' : 'rgba(46,125,50,0.09)',
    color: theme.palette.mode === 'dark' ? '#81c784' : '#2e7d32',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(76,175,80,0.35)' : 'rgba(46,125,50,0.3)'}`,
  }),
  ...(badgetype === 'advanced' && {
    background: alpha(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.28)}`,
  }),
  ...(badgetype === 'proficient' && {
    background: theme.palette.mode === 'dark' ? 'rgba(255,152,0,0.12)' : 'rgba(230,81,0,0.07)',
    color: theme.palette.mode === 'dark' ? '#ffcc80' : '#e65100',
    border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,152,0,0.3)' : 'rgba(230,81,0,0.22)'}`,
  }),
}));

const SkillChip = styled(Chip)<{ skilltype: string }>(({ theme, skilltype }) => ({
  margin: theme.spacing(0.5),
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.72rem',
  transition: 'all 0.25s ease',
  cursor: 'pointer',
  '&:hover': { transform: 'scale(1.04)' },
  ...(skilltype === 'advanced' && {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    color: theme.palette.primary.main,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  }),
  ...(skilltype === 'learning' && {
    backgroundColor: alpha('#9c27b0', 0.08),
    color: theme.palette.mode === 'dark' ? '#ce93d8' : '#7b1fa2',
    border: `1px solid ${alpha('#9c27b0', 0.25)}`,
  }),
  ...(skilltype === 'goal' && {
    backgroundColor: alpha('#ff9800', 0.08),
    color: theme.palette.mode === 'dark' ? '#ffd54f' : '#e65100',
    border: `1px solid ${alpha('#ff9800', 0.25)}`,
  }),
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5),
  background:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : alpha(theme.palette.primary.main, 0.03),
  borderRadius: 8,
  marginBottom: theme.spacing(1),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.07)}`,
  transition: 'all 0.25s ease',
  cursor: 'pointer',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.07),
    borderColor: alpha(theme.palette.primary.main, 0.2),
    transform: 'translateX(8px)',
  },
}));

const LegendDot = styled(Box, {
  shouldForwardProp: (p) => p !== 'badgetype',
})<{ badgetype: BadgeLevel }>(({ theme, badgetype }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  ...(badgetype === 'expert' && {
    background: theme.palette.mode === 'dark' ? '#81c784' : '#2e7d32',
  }),
  ...(badgetype === 'advanced' && { background: theme.palette.primary.main }),
  ...(badgetype === 'proficient' && {
    background: theme.palette.mode === 'dark' ? '#ffcc80' : '#e65100',
  }),
}));

// ─── Competence uses SkillCard (cursor:default variant of SectionCard) ────────

const SkillCard = styled(SectionCard)(() => ({
  cursor: 'default',
  marginBottom: 0,
}));

// ─── Main component ───────────────────────────────────────────────────────────

const Competence: FC = () => {
  const { t } = useTypedTranslation();

  const handleSkillClick = (skillName: string, category: string) =>
    trackProfileTabInteraction('competence', 'skill_click', `${category}_${skillName}`);
  const handleGenericClick = (type: string, value: string) =>
    trackProfileTabInteraction('competence', type, value);
  const handleGitHubClick = () => {
    trackProfileTabInteraction('competence', 'social_link_click', 'github');
    trackProfileConversion('github_visit', 'competence');
    window.open('https://github.com/etezolin', '_blank');
  };

  const technicalSkills = [
    {
      categoryKey: 'backendDev',
      icon: <CodeIcon />,
      skills: [
        { name: '.NET', level: 95, experienceKey: 'fourPlusYears' },
        { name: 'C# & OOP', level: 95, experienceKey: 'fourPlusYears' },
        { name: 'Dapper', level: 95, experienceKey: 'fourPlusYears' },
        { name: 'Microservices', level: 80, experienceKey: 'threePlusYears' },
        { name: 'Node.js', level: 70, experienceKey: 'twoPlusYears' },
        { name: 'Python', level: 70, experienceKey: 'twoPlusYears' },
      ],
    },
    {
      categoryKey: 'frontendDev',
      icon: <WebIcon />,
      skills: [
        { name: 'React & Hooks', level: 90, experienceKey: 'threePlusYears' },
        { name: 'TypeScript', level: 90, experienceKey: 'threePlusYears' },
        { name: 'JavaScript ES6+', level: 90, experienceKey: 'fourPlusYears' },
        { name: 'Material-UI', level: 90, experienceKey: 'threePlusYears' },
        { name: 'HTML5 & CSS3', level: 85, experienceKey: 'fourPlusYears' },
        { name: 'Responsive Design', level: 85, experienceKey: 'threePlusYears' },
      ],
    },
    {
      categoryKey: 'databaseStorage',
      icon: <StorageIcon />,
      skills: [
        { name: 'SQL Server', level: 95, experienceKey: 'fourPlusYears' },
        { name: 'T-SQL Advanced', level: 90, experienceKey: 'fourPlusYears' },
        { name: 'Database Design', level: 95, experienceKey: 'fourPlusYears' },
        { name: 'PostgreSQL', level: 85, experienceKey: 'threePlusYears' },
        { name: 'MongoDB', level: 70, experienceKey: 'onePlusYear' },
        { name: 'Redis Cache', level: 65, experienceKey: 'onePlusYear' },
      ],
    },
    {
      categoryKey: 'cloudInfrastructure',
      icon: <CloudIcon />,
      skills: [
        { name: 'Docker', level: 80, experienceKey: 'threePlusYears' },
        { name: 'Google Cloud Platform', level: 75, experienceKey: 'twoPlusYears' },
        { name: 'CI/CD Pipelines', level: 75, experienceKey: 'twoPlusYears' },
        { name: 'Observability & Monitoring', level: 75, experienceKey: 'onePlusYear' },
        { name: 'GitHub Actions', level: 70, experienceKey: 'onePlusYear' },
        { name: 'Google Firebase', level: 60, experienceKey: 'onePlusYear' },
      ],
    },
  ];

  const methodologiesKeys = [
    'cleanArchDDD',
    'cqrsEventSourcing',
    'designPatterns',
    'testDrivenDev',
    'scrumAgile',
    'codeReview',
    'continuousIntegration',
    'apiFirstDev',
  ];

  const learningPath = [
    { year: '2021', milestoneKey: 'dotnetInitiation', icon: <CodeIcon /> },
    { year: '2022', milestoneKey: 'reactSpecialization', icon: <WebIcon /> },
    { year: '2023', milestoneKey: 'microservicesArch', icon: <ArchitectureIcon /> },
    { year: '2024', milestoneKey: 'cloudDevOps', icon: <CloudIcon /> },
    { year: '2025', milestoneKey: 'aiMlIntegration', icon: <AutoAwesomeIcon /> },
    { year: '2026', milestoneKey: 'aiMlIntegration', icon: <AutoAwesomeIcon /> },
  ];

  const achievements = [
    { icon: <EmojiEventsIcon />, titleKey: 'fivePlusYears', subtitleKey: 'enterpriseExp' },
    { icon: <BuildIcon />, titleKey: 'fivePlusProjects', subtitleKey: 'deliveredSuccess' },
    { icon: <GroupIcon />, titleKey: 'twoPlusMillionUsers', subtitleKey: 'impactedSolutions' },
    { icon: <TrendingUpIcon />, titleKey: 'eightyFiveReduction', subtitleKey: 'processingTime' },
  ];

  const legendItems: { label: string; type: BadgeLevel }[] = [
    { label: 'Expert', type: 'expert' },
    { label: 'Advanced', type: 'advanced' },
    { label: 'Proficient', type: 'proficient' },
  ];

  return (
    <Container sx={{ py: 8 }} id="competence" component="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle sx={{ mb: 1 }}>{t('competenceTitle')}</SectionTitle>

        {/* ── Badge legend ── */}
        <Box sx={{ display: 'flex', gap: 3, mb: 5, alignItems: 'center' }}>
          {legendItems.map((item) => (
            <Box key={item.type} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <LegendDot badgetype={item.type} />
              <CardSubtitle>{item.label}</CardSubtitle>
            </Box>
          ))}
        </Box>

        {/* ── Technical skills grid ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
            mb: 3,
          }}
        >
          {technicalSkills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <SkillCard>
                <CardHeader>
                  <CardIcon>{category.icon}</CardIcon>
                  <Box>
                    <CardTitle>{t(category.categoryKey as any)}</CardTitle>
                    <CardSubtitle>
                      {category.skills.length} {t('technologies')}
                    </CardSubtitle>
                  </Box>
                </CardHeader>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  {category.skills.map((skill, skillIndex) => {
                    const badge = getBadge(skill.level);
                    return (
                      <SkillRow
                        key={skillIndex}
                        onClick={() => handleSkillClick(skill.name, category.categoryKey)}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Roboto Mono", monospace',
                            fontSize: '0.83rem',
                            color: 'text.primary',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                          <MetaMono sx={{ fontSize: '0.68rem', color: 'text.disabled' }}>
                            {t(skill.experienceKey as any)}
                          </MetaMono>
                          <LevelBadge badgetype={badge.type}>{badge.label}</LevelBadge>
                        </Box>
                      </SkillRow>
                    );
                  })}
                </Box>
              </SkillCard>
            </motion.div>
          ))}
        </Box>

        {/* ── Methodologies ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SkillCard sx={{ mb: 3 }}>
            <CardHeader>
              <CardIcon>
                <ArchitectureIcon />
              </CardIcon>
              <Box>
                <CardTitle>{t('methodologiesPractices')}</CardTitle>
                <CardSubtitle>{t('patternsBestPractices')}</CardSubtitle>
              </Box>
            </CardHeader>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {methodologiesKeys.map((key, index) => (
                <SkillChip
                  key={index}
                  label={t(key as any)}
                  skilltype="advanced"
                  onClick={() => handleGenericClick('methodology_click', key)}
                />
              ))}
            </Box>
          </SkillCard>
        </motion.div>

        {/* ── Learning journey ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SkillCard sx={{ mb: 3 }}>
            <CardHeader>
              <CardIcon>
                <TimelineIcon />
              </CardIcon>
              <Box>
                <CardTitle>{t('techEvolutionJourney')}</CardTitle>
                <CardSubtitle>{t('growthOverYears')}</CardSubtitle>
              </Box>
            </CardHeader>
            <Box sx={{ display: 'grid', gap: 1 }}>
              {learningPath.map((item, index) => (
                <TimelineItem
                  key={index}
                  onClick={() =>
                    handleGenericClick('timeline_click', `${item.year}_${item.milestoneKey}`)
                  }
                >
                  <Box
                    sx={(theme) => ({
                      width: 36,
                      height: 36,
                      borderRadius: '8px',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
                      flexShrink: 0,
                    })}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <MetaMono
                      sx={{ color: 'secondary.dark', fontWeight: 600, fontSize: '0.78rem' }}
                    >
                      {item.year}
                    </MetaMono>
                    <Typography
                      sx={{
                        color: 'text.primary',
                        fontFamily: '"Roboto Mono", monospace',
                        fontSize: '0.83rem',
                      }}
                    >
                      {t(item.milestoneKey as any)}
                    </Typography>
                  </Box>
                </TimelineItem>
              ))}
            </Box>
          </SkillCard>
        </motion.div>

        {/* ── Impact numbers ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={(theme) => ({
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              mb: 3,
              borderRadius: 2,
              overflow: 'hidden',
              border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
              background: alpha(theme.palette.background.paper, 0.9),
              backdropFilter: 'blur(20px)',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '0 4px 32px rgba(0,0,0,0.45)'
                  : '0 4px 24px rgba(15,23,42,0.08)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 100%)`,
                opacity: 0.45,
                zIndex: 1,
              },
            })}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                style={{ display: 'contents' }}
              >
                <Box
                  onClick={() => handleGenericClick('achievement_click', achievement.titleKey)}
                  sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                    py: { xs: 3, md: 3.5 },
                    px: 2,
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'background 0.2s ease',
                    ...(index < achievements.length - 1 && {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: 0,
                        top: '20%',
                        bottom: '20%',
                        width: '1px',
                        background: alpha(theme.palette.divider, 0.6),
                      },
                    }),
                    ...(index < 2 && {
                      [theme.breakpoints.down('md')]: {
                        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                        '&::after': { display: 'none' },
                      },
                    }),
                    '&:hover': { background: alpha(theme.palette.primary.main, 0.04) },
                  })}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontWeight: 700,
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      lineHeight: 1,
                      color: 'secondary.dark',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {t(achievement.titleKey as any)}
                  </Typography>
                  <CardSubtitle sx={{ textAlign: 'center' }}>
                    {t(achievement.subtitleKey as any)}
                  </CardSubtitle>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={(theme) => ({
              textAlign: 'center',
              mt: 4,
              p: 4,
              background: alpha(theme.palette.primary.main, 0.04),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
              borderRadius: 2,
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
                opacity: 0.4,
              },
            })}
          >
            <CardTitle
              sx={{ color: 'secondary.dark', fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}
            >
              {t('alwaysEvolving')}
            </CardTitle>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.75,
                fontFamily: '"Roboto Mono", monospace',
                fontSize: '0.86rem',
              }}
            >
              {t('evolutionDescription')}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              <Tooltip title={t('githubPortfolio')}>
                <IconButton
                  sx={(theme) => ({
                    color: 'secondary.main',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    background: alpha(theme.palette.primary.main, 0.05),
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.12),
                      borderColor: alpha(theme.palette.primary.main, 0.45),
                      transform: 'translateY(-2px)',
                    },
                  })}
                  onClick={handleGitHubClick}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Competence;
