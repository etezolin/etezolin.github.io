import { Avatar, Box, Card, Chip, Container, IconButton, Tooltip, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC } from 'react';

import ArchitectureIcon from '@mui/icons-material/Architecture';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SchoolIcon from '@mui/icons-material/School';
import StorageIcon from '@mui/icons-material/Storage';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WebIcon from '@mui/icons-material/Web';

import { trackProfileConversion, trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation } from '../../hooks/useTranslation';

// ─── Shared card base ────────────────────────────────────────────────────────

const SkillCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 14,
  marginBottom: 0,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 4px 32px rgba(0,0,0,0.45)'
      : '0 4px 24px rgba(15,23,42,0.08)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'default',
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
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(2), borderRadius: 10 },
}));

// ─── Category header ──────────────────────────────────────────────────────────

const CategoryHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2.5),
  paddingBottom: theme.spacing(1.5),
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
}));

const CategoryIcon = styled(Box)(({ theme }) => ({
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

// ─── Skill row (replaces progress bar) ───────────────────────────────────────

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

// Badge level types
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

// ─── Methodology / learning chips ────────────────────────────────────────────

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

// ─── Achievement badge ────────────────────────────────────────────────────────

const AchievementBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(20px)',
  borderRadius: 14,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  boxShadow:
    theme.palette.mode === 'dark' ? '0 4px 32px rgba(0,0,0,0.4)' : '0 4px 24px rgba(15,23,42,0.08)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
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
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.28),
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 12px 40px rgba(0,0,0,0.55)'
        : '0 8px 32px rgba(15,23,42,0.14)',
    transform: 'translateY(-6px)',
  },
  [theme.breakpoints.down('sm')]: { borderRadius: 10, padding: theme.spacing(2) },
}));

// ─── Timeline item ────────────────────────────────────────────────────────────

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

// ─── Legend ───────────────────────────────────────────────────────────────────

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

  // level drives badge only — no visual bar
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
        { name: 'HTML5 & CSS3', level: 100, experienceKey: 'fourPlusYears' },
        { name: 'Responsive Design', level: 100, experienceKey: 'threePlusYears' },
      ],
    },
    {
      categoryKey: 'databaseStorage',
      icon: <StorageIcon />,
      skills: [
        { name: 'SQL Server', level: 95, experienceKey: 'fourPlusYears' },
        { name: 'T-SQL Advanced', level: 95, experienceKey: 'fourPlusYears' },
        { name: 'Database Design', level: 95, experienceKey: 'fourPlusYears' },
        { name: 'PostgreSQL', level: 95, experienceKey: 'threePlusYears' },
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
        { name: 'GitHub Actions', level: 75, experienceKey: 'twoPlusYears' },
        { name: 'CI/CD Pipelines', level: 60, experienceKey: 'twoPlusYears' },
        { name: 'Google Firebase', level: 60, experienceKey: 'onePlusYear' },
        { name: 'Kubernetes', level: 55, experienceKey: 'onePlusYear' },
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
    { icon: <EmojiEventsIcon />, titleKey: 'fourPlusYears', subtitleKey: 'enterpriseExp' },
    { icon: <BuildIcon />, titleKey: 'fivePlusProjects', subtitleKey: 'deliveredSuccess' },
    { icon: <GroupIcon />, titleKey: 'twoPlusMillionUsers', subtitleKey: 'impactedSolutions' },
    { icon: <TrendingUpIcon />, titleKey: 'eightyFiveReduction', subtitleKey: 'processingTime' },
  ];

  const currentlyLearningKeys = ['machineLearning', 'kubernetes', 'serverlessArch', 'terraformIaC'];
  const nextGoalsKeys = ['azureArchitect', 'kafkaStreaming', 'graphqlAdvanced', 'webAssembly'];

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
        {/* ── Section title ── */}
        <Typography
          variant="h2"
          sx={{
            mb: 1,
            backgroundImage: (t) =>
              `linear-gradient(135deg, ${t.palette.primary.light} 0%, ${t.palette.primary.main} 40%, ${t.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2rem' },
          }}
        >
          {t('competenceTitle')}
        </Typography>

        {/* ── Badge legend ── */}
        <Box sx={{ display: 'flex', gap: 3, mb: 5, alignItems: 'center' }}>
          {legendItems.map((item) => (
            <Box key={item.type} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <LegendDot badgetype={item.type} />
              <Typography
                variant="caption"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  fontSize: '0.72rem',
                  color: 'text.secondary',
                }}
              >
                {item.label}
              </Typography>
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
                <CategoryHeader>
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        color: 'text.primary',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                      }}
                    >
                      {t(category.categoryKey as any)}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.72rem',
                        fontFamily: '"Roboto Mono", monospace',
                      }}
                    >
                      {category.skills.length} {t('technologies')}
                    </Typography>
                  </Box>
                </CategoryHeader>

                {/* Skill rows */}
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
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'text.disabled',
                              fontSize: '0.68rem',
                              fontFamily: '"Roboto Mono", monospace',
                            }}
                          >
                            {t(skill.experienceKey as any)}
                          </Typography>
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
            <CategoryHeader>
              <CategoryIcon>
                <ArchitectureIcon />
              </CategoryIcon>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: 'text.primary',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}
                >
                  {t('methodologiesPractices')}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.72rem',
                    fontFamily: '"Roboto Mono", monospace',
                  }}
                >
                  {t('patternsBestPractices')}
                </Typography>
              </Box>
            </CategoryHeader>
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
            <CategoryHeader>
              <CategoryIcon>
                <TimelineIcon />
              </CategoryIcon>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: 'text.primary',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                  }}
                >
                  {t('techEvolutionJourney')}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.72rem',
                    fontFamily: '"Roboto Mono", monospace',
                  }}
                >
                  {t('growthOverYears')}
                </Typography>
              </Box>
            </CategoryHeader>
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
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        color: 'secondary.dark',
                        fontWeight: 600,
                        fontSize: '0.78rem',
                      }}
                    >
                      {item.year}
                    </Typography>
                    <Typography
                      variant="body2"
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

        {/* ── Achievement badges ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
            mb: 3,
          }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AchievementBadge
                onClick={() => handleGenericClick('achievement_click', achievement.titleKey)}
              >
                <Avatar
                  sx={(theme) => ({
                    backgroundColor: 'transparent',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: '#ffffff',
                    mb: 2,
                    width: 44,
                    height: 44,
                  })}
                >
                  {achievement.icon}
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: 'secondary.dark',
                    fontWeight: 700,
                    textAlign: 'center',
                    fontSize: '0.92rem',
                  }}
                >
                  {t(achievement.titleKey as any)}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'center',
                    fontSize: '0.72rem',
                    fontFamily: '"Roboto Mono", monospace',
                  }}
                >
                  {t(achievement.subtitleKey as any)}
                </Typography>
              </AchievementBadge>
            </motion.div>
          ))}
        </Box>

        {/* ── Currently learning + Next goals ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SkillCard>
              <CategoryHeader>
                <CategoryIcon>
                  <SchoolIcon />
                </CategoryIcon>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      color: 'text.primary',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                    }}
                  >
                    {t('currentlyLearning')}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.72rem',
                      fontFamily: '"Roboto Mono", monospace',
                    }}
                  >
                    {t('continuousGrowth')}
                  </Typography>
                </Box>
              </CategoryHeader>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {currentlyLearningKeys.map((key, index) => (
                  <SkillChip
                    key={index}
                    label={t(key as any)}
                    skilltype="learning"
                    icon={<AutoAwesomeIcon />}
                    onClick={() => handleGenericClick('current_learning_interest', key)}
                  />
                ))}
              </Box>
            </SkillCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SkillCard>
              <CategoryHeader>
                <CategoryIcon>
                  <RocketLaunchIcon />
                </CategoryIcon>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      color: 'text.primary',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                    }}
                  >
                    {t('nextGoals')}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.72rem',
                      fontFamily: '"Roboto Mono", monospace',
                    }}
                  >
                    {t('evolutionRoadmap')}
                  </Typography>
                </Box>
              </CategoryHeader>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {nextGoalsKeys.map((key, index) => (
                  <SkillChip
                    key={index}
                    label={t(key as any)}
                    skilltype="goal"
                    icon={<TrendingUpIcon />}
                    onClick={() => handleGenericClick('next_goal_interest', key)}
                  />
                ))}
              </Box>
            </SkillCard>
          </motion.div>
        </Box>

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
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Roboto Mono", monospace',
                color: 'secondary.dark',
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              {t('alwaysEvolving')}
            </Typography>
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
