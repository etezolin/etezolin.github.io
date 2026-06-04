import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import LaptopIcon from '@mui/icons-material/Laptop';
import LoopIcon from '@mui/icons-material/Loop';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import StorageIcon from '@mui/icons-material/Storage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Chip, Container, Typography, type Theme } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC, MouseEvent, ReactElement } from 'react';
import { trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation } from '../../hooks/useTranslation';

interface SkillGroupData {
  titleKey: string;
  icon: ReactElement;
  skills: string[];
  category: string;
}
interface SkillGroupProps {
  titleKey: string;
  icon: ReactElement;
  skills: string[];
  category: string;
  education: string;
}
interface FormationData {
  id: string;
  icon: ReactElement;
  titleKey: string;
  institutionKey: string;
  highlightKey: string;
  descriptionKey: string;
  skillGroups: SkillGroupData[];
  code: string;
  quoteKey?: string;
}

const EducationTimeline = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(0, 0, 0, 4),
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '11px',
    top: 0,
    bottom: 0,
    width: '2px',
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0.6,
  },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  '&:last-child': { marginBottom: 0 },
}));

const TimelineMarker = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '-27px',
  top: '4px',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.primary.main}`,
  background:
    theme.palette.mode === 'dark' ? 'rgba(4, 10, 20, 0.95)' : theme.palette.background.paper,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  cursor: 'pointer',
  boxShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.secondary.main,
    boxShadow: `0 0 15px ${alpha(theme.palette.secondary.main, 0.4)}`,
  },
}));

const TimelineContent = styled(motion.div)(({ theme }) => ({
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)'
      : '0 4px 24px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
  borderRadius: 14,
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 70%, transparent 100%)`,
    opacity: 0.45,
  },
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.25),
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 48px rgba(0,0,0,0.55), 0 0 30px rgba(51,153,255,0.06)'
        : '0 8px 32px rgba(15,23,42,0.12)',
  },
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(2), borderRadius: 10 },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  color: theme.palette.primary.main,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.78rem',
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    borderColor: alpha(theme.palette.primary.main, 0.35),
    transform: 'scale(1.04)',
  },
}));

const Formation: FC = () => {
  const { t } = useTypedTranslation();

  const handleClick = (type: string, data: string) => {
    trackProfileTabInteraction('formation', type, data);
  };

  // const handleCodeClick = (education: string) => {
  //   handleClick('code_snippet_click', education);
  //   trackProfileConversion('technical_interest', 'formation');
  // };

  const SkillGroup: FC<SkillGroupProps> = ({ titleKey, icon, skills, category, education }) => (
    <Box
      sx={(theme) => ({
        background:
          theme.palette.mode === 'dark'
            ? 'rgba(0,0,0,0.2)'
            : alpha(theme.palette.primary.main, 0.04),
        borderRadius: 2,
        p: 2,
        flex: '1 1 calc(50% - 8px)',
        minWidth: '280px',
        cursor: 'pointer',
        border: `1px solid ${alpha(theme.palette.primary.main, 0.07)}`,
        transition: 'border-color 0.25s ease, background 0.25s ease',
        '&:hover': {
          background: alpha(theme.palette.primary.main, 0.07),
          borderColor: alpha(theme.palette.primary.main, 0.18),
        },
      })}
      onClick={() => handleClick('skill_category_click', `${category}_${education}`)}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1.5,
          fontWeight: 600,
          color: 'secondary.main',
          fontFamily: '"Roboto Mono", monospace',
          fontSize: '0.85rem',
        }}
      >
        {icon} {t(titleKey as any)}
      </Typography>
      <Box>
        {skills.map((skill, idx) => (
          <SkillChip
            key={idx}
            label={skill}
            size="small"
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              handleClick('skill_chip_click', `${skill}_${category}_${education}`);
            }}
          />
        ))}
      </Box>
    </Box>
  );

  const formations: FormationData[] = [
    {
      id: 'systems_development',
      icon: <LaptopIcon sx={{ fontSize: 30, color: 'secondary.main', marginRight: 2 }} />,
      titleKey: 'systemsDevelopmentTitle',
      institutionKey: 'systemsInstitution',
      highlightKey: 'competenciesDeveloped',
      descriptionKey: 'systemsDescription',
      skillGroups: [
        {
          titleKey: 'backendDevelopment',
          icon: <CodeIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: ['.NET', 'Node', 'Dapper', 'Web APIs', 'Microservices'],
          category: 'backend',
        },
        {
          titleKey: 'frontendDevelopment',
          icon: <LaptopIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [
            'React',
            'TypeScript',
            'Material UI',
            'Tailwind CSS',
            'Next.js',
            'Responsive Design',
          ],
          category: 'frontend',
        },
        {
          titleKey: 'databaseCloud',
          icon: <StorageIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Google Cloud Platform', 'Docker'],
          category: 'database',
        },
        {
          titleKey: 'devopsArchitecture',
          icon: <LoopIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: ['CI/CD Pipelines', 'System Design', 'Clean Architecture', 'SOLID Principles'],
          category: 'devops',
        },
      ],
      code: ``,
    },
    {
      id: 'philosophy',
      icon: <SchoolIcon sx={{ fontSize: 30, color: 'secondary.main', marginRight: 2 }} />,
      titleKey: 'philosophyTitle',
      institutionKey: 'philosophyInstitution',
      highlightKey: 'competitiveDifferential',
      descriptionKey: 'philosophyDescription',
      skillGroups: [
        {
          titleKey: 'strategicThinking',
          icon: <PsychologyIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [t('skills001'), t('skills002'), t('skills003'), t('skills004')],
          category: 'strategic',
        },
        {
          titleKey: 'innovationEthics',
          icon: <AutoAwesomeIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [t('skills005'), t('skills006'), t('skills007'), t('skills008')],
          category: 'innovation',
        },
      ],
      code: ``,
      quoteKey: 'philosophicalQuote',
    },
  ];

  return (
    <Container component="section" id="formation" sx={{ minHeight: '100vh', py: 8 }}>
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
          {t('formationTitle')}
        </Typography>

        <EducationTimeline>
          {formations.map((formation, index) => (
            <TimelineItem key={formation.id}>
              <TimelineMarker onClick={() => handleClick('timeline_marker_click', formation.id)} />
              <TimelineContent
                whileHover={{ scale: 1.005 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() =>
                  handleClick(
                    'timeline_item_click',
                    `${formation.titleKey}_${formation.institutionKey}`
                  )
                }
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {formation.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                  >
                    {t(formation.titleKey as any)}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: 'text.secondary',
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.82rem',
                  }}
                >
                  {t(formation.institutionKey as any)}
                </Typography>

                <Box
                  sx={(theme) => ({
                    background: alpha(theme.palette.primary.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                    borderRadius: 2,
                    p: 2,
                    mt: 2,
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'border-color 0.25s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '3px',
                      height: '100%',
                      background: (t: Theme) =>
                        `linear-gradient(to bottom, ${t.palette.primary.main}, ${t.palette.secondary.main})`,
                      borderRadius: '2px 0 0 2px',
                    },
                    '&:hover': { borderColor: alpha(theme.palette.primary.main, 0.3) },
                  })}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    handleClick(
                      'highlight_section_click',
                      `${formation.id}_${formation.highlightKey}`
                    );
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <TrendingUpIcon sx={{ color: 'secondary.main', mr: 1, fontSize: 20 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'secondary.main',
                        fontFamily: '"Roboto Mono", monospace',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                      }}
                    >
                      {t(formation.highlightKey as any)}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      lineHeight: 1.7,
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: '0.85rem',
                      color: 'text.secondary',
                    }}
                  >
                    {t(formation.descriptionKey as any)}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2, mb: 2 }}>
                  {formation.skillGroups.map((group, idx) => (
                    <SkillGroup
                      key={idx}
                      titleKey={group.titleKey}
                      icon={group.icon}
                      skills={group.skills}
                      category={group.category}
                      education={formation.id}
                    />
                  ))}
                </Box>

                {formation.quoteKey && (
                  <Box
                    sx={(theme) => ({
                      mt: 3,
                      p: 3,
                      background: alpha(theme.palette.primary.main, 0.04),
                      borderRadius: 2,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                      cursor: 'pointer',
                      transition: 'border-color 0.25s ease',
                      '&:hover': { borderColor: alpha(theme.palette.primary.main, 0.22) },
                    })}
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation();
                      handleClick('philosophical_quote_click', 'unique_perspective');
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: 'italic',
                        color: 'text.secondary',
                        lineHeight: 1.75,
                        textAlign: 'center',
                        fontFamily: '"Roboto Mono", monospace',
                        fontSize: '0.88rem',
                      }}
                    >
                      "{t(formation.quoteKey as any)}"
                    </Typography>
                  </Box>
                )}

                {/* <Box
                  sx={(theme) => ({
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    backgroundColor:
                      theme.palette.mode === 'dark'
                        ? 'rgba(0,0,0,0.25)'
                        : alpha(theme.palette.primary.main, 0.04),
                    p: 2,
                    borderRadius: 2,
                    mt: 2,
                    cursor: 'pointer',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.07)}`,
                  })}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    handleCodeClick(formation.id);
                  }}
                >
                  <pre style={{ margin: 0, color: 'inherit' }}>{formation.code}</pre>
                </Box> */}
              </TimelineContent>
            </TimelineItem>
          ))}
        </EducationTimeline>
      </motion.div>
    </Container>
  );
};

export default Formation;
