import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import LaptopIcon from '@mui/icons-material/Laptop';
import LoopIcon from '@mui/icons-material/Loop';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';
import StorageIcon from '@mui/icons-material/Storage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Card, Chip, Container } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC, MouseEvent, ReactElement } from 'react';
import {
  BodyMono,
  CardSubtitle,
  CardTitle,
  SectionLabel,
  SectionTitle,
} from '../../components/shared/TypographyTokens';
import { trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation } from '../../hooks/useTranslation';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SkillGroupData {
  titleKey: string;
  icon: ReactElement;
  skills: string[];
  category: string;
}

interface FormationData {
  id: string;
  icon: ReactElement;
  titleKey: string;
  institutionKey: string;
  highlightKey: string;
  descriptionKey: string;
  skillGroups: SkillGroupData[];
  quoteKey?: string;
}

// ─── Styled components ────────────────────────────────────────────────────────

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
  cursor: 'pointer',
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
  '& svg': { fontSize: 20 },
}));

const ItemRow = styled(Box)(({ theme }) => ({
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

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.4),
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.7rem',
  height: 22,
  cursor: 'pointer',
  transition: 'all 0.22s ease',
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  color: theme.palette.primary.main,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.15), transform: 'scale(1.04)' },
}));

const SkillGroupCard = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.03)'
      : alpha(theme.palette.primary.main, 0.025),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
  borderRadius: 10,
  padding: theme.spacing(1.75),
  flex: '1 1 calc(50% - 8px)',
  minWidth: 260,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.06),
    borderColor: alpha(theme.palette.primary.main, 0.18),
  },
}));

const SkillGroupLabel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1.25),
  paddingBottom: theme.spacing(0.75),
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.4)}`,
}));

const SkillGroupIcon = styled(Box)(({ theme }) => ({
  width: 26,
  height: 26,
  borderRadius: '7px',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  flexShrink: 0,
  '& svg': { fontSize: 14 },
}));

// ─── Main component ───────────────────────────────────────────────────────────

const Formation: FC = () => {
  const { t } = useTypedTranslation();

  const handleClick = (type: string, data: string) =>
    trackProfileTabInteraction('formation', type, data);

  const formations: FormationData[] = [
    {
      id: 'systems_development',
      icon: <LaptopIcon />,
      titleKey: 'systemsDevelopmentTitle',
      institutionKey: 'systemsInstitution',
      highlightKey: 'competenciesDeveloped',
      descriptionKey: 'systemsDescription',
      skillGroups: [
        {
          titleKey: 'backendDevelopment',
          icon: <CodeIcon />,
          skills: ['.NET', 'Node', 'Dapper', 'Web APIs', 'Microservices'],
          category: 'backend',
        },
        {
          titleKey: 'frontendDevelopment',
          icon: <LaptopIcon />,
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
          icon: <StorageIcon />,
          skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Google Cloud Platform', 'Docker'],
          category: 'database',
        },
        {
          titleKey: 'devopsArchitecture',
          icon: <LoopIcon />,
          skills: ['CI/CD Pipelines', 'System Design', 'Clean Architecture', 'SOLID Principles'],
          category: 'devops',
        },
      ],
    },
    {
      id: 'philosophy',
      icon: <SchoolIcon />,
      titleKey: 'philosophyTitle',
      institutionKey: 'philosophyInstitution',
      highlightKey: 'competitiveDifferential',
      descriptionKey: 'philosophyDescription',
      skillGroups: [
        {
          titleKey: 'strategicThinking',
          icon: <PsychologyIcon />,
          skills: [t('skills001'), t('skills002'), t('skills003'), t('skills004')],
          category: 'strategic',
        },
        {
          titleKey: 'innovationEthics',
          icon: <AutoAwesomeIcon />,
          skills: [t('skills005'), t('skills006'), t('skills007'), t('skills008')],
          category: 'innovation',
        },
      ],
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
        {/* SectionTitle — token */}
        <SectionTitle sx={{ mb: 5 }}>{t('formationTitle')}</SectionTitle>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))' },
            gap: 3,
            alignItems: 'start',
          }}
        >
          {formations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SectionCard
                onClick={() =>
                  handleClick(
                    'formation_card_click',
                    `${formation.titleKey}_${formation.institutionKey}`
                  )
                }
              >
                {/* CardHeader — CardTitle + CardSubtitle tokens */}
                <CardHeader>
                  <CardIcon>{formation.icon}</CardIcon>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <CardTitle>{t(formation.titleKey as any)}</CardTitle>
                    <CardSubtitle>{t(formation.institutionKey as any)}</CardSubtitle>
                  </Box>
                </CardHeader>

                {/* Highlight row — SectionLabel + BodyMono tokens */}
                <Box sx={{ mb: 2.5 }}>
                  <SectionLabel>{t(formation.highlightKey as any)}</SectionLabel>
                  <ItemRow
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation();
                      handleClick(
                        'highlight_section_click',
                        `${formation.id}_${formation.highlightKey}`
                      );
                    }}
                  >
                    <Box
                      sx={(theme) => ({
                        width: 26,
                        height: 26,
                        borderRadius: '7px',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        flexShrink: 0,
                        '& svg': { fontSize: 14 },
                      })}
                    >
                      <TrendingUpIcon />
                    </Box>
                    {/* BodyMono for description — token */}
                    <BodyMono sx={{ color: 'text.primary', fontSize: '0.83rem', lineHeight: 1.7 }}>
                      {t(formation.descriptionKey as any)}
                    </BodyMono>
                  </ItemRow>
                </Box>

                {/* Skill groups — SectionLabel token above groups */}
                <SectionLabel>{t('technologies')}</SectionLabel>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.5,
                    mb: formation.quoteKey ? 2.5 : 0,
                  }}
                >
                  {formation.skillGroups.map((group, idx) => (
                    <SkillGroupCard
                      key={idx}
                      onClick={(e: MouseEvent) => {
                        e.stopPropagation();
                        handleClick('skill_category_click', `${group.category}_${formation.id}`);
                      }}
                    >
                      <SkillGroupLabel>
                        <SkillGroupIcon>{group.icon}</SkillGroupIcon>
                        {/* CardTitle reused for group label — same semantic weight */}
                        <CardTitle sx={{ fontSize: '0.78rem' }}>
                          {t(group.titleKey as any)}
                        </CardTitle>
                      </SkillGroupLabel>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {group.skills.map((skill, sIdx) => (
                          <SkillChip
                            key={sIdx}
                            label={skill}
                            size="small"
                            onClick={(e: MouseEvent) => {
                              e.stopPropagation();
                              handleClick(
                                'skill_chip_click',
                                `${skill}_${group.category}_${formation.id}`
                              );
                            }}
                          />
                        ))}
                      </Box>
                    </SkillGroupCard>
                  ))}
                </Box>

                {/* Quote — BodyMono italic token */}
                {formation.quoteKey && (
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
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation();
                      handleClick('philosophical_quote_click', 'unique_perspective');
                    }}
                  >
                    <BodyMono
                      sx={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.82rem' }}
                    >
                      "{t(formation.quoteKey as any)}"
                    </BodyMono>
                  </Box>
                )}
              </SectionCard>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default Formation;
