import ArchitectureIcon from '@mui/icons-material/Architecture';
import CodeIcon from '@mui/icons-material/Code';
import EditNoteIcon from '@mui/icons-material/EditNote';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LaunchIcon from '@mui/icons-material/Launch';
import LockIcon from '@mui/icons-material/Lock';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import { Box, Button, Card, Chip, Container, Divider, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC, MouseEvent, ReactElement } from 'react';
import { trackProfileConversion, trackProfileTabInteraction } from '../../firebase';
import { useTypedTranslation, type TranslationKeys } from '../../hooks/useTranslation';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectData {
  titleKey: string;
  icon: ReactElement;
  descriptionKey: string;
  confidential: boolean;
  metrics: string[];
  resultsKeys: string[];
  techStack: string[];
  type: string;
}

// ─── Shared card base (same as Competence) ───────────────────────────────────

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

// ─── Result row (mirrors SkillRow from Competence) ───────────────────────────

const ResultRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  padding: theme.spacing(0.75, 1.25),
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

// ─── Tech / metric chips ──────────────────────────────────────────────────────

const TechChip = styled(Chip)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.7rem',
  height: 22,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: alpha(theme.palette.primary.main, 0.08),
  color: theme.palette.primary.main,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    transform: 'scale(1.04)',
  },
}));

const MetricChip = styled(Chip)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.7rem',
  height: 20,
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

// ─── Section label (reused inline) ───────────────────────────────────────────

const SectionLabel = ({ icon, label }: { icon?: ReactElement; label: string }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
      mb: 1,
    }}
  >
    {icon && (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'text.disabled',
          '& svg': { fontSize: 13 },
        }}
      >
        {icon}
      </Box>
    )}
    <Typography
      variant="caption"
      sx={{
        fontFamily: '"Roboto Mono", monospace',
        fontSize: '0.68rem',
        color: 'text.disabled',
        letterSpacing: '0.4px',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </Typography>
  </Box>
);

// ─── Main component ───────────────────────────────────────────────────────────

const ProjectsSection: FC = () => {
  const { t } = useTypedTranslation();

  const handleClick = (type: string, data: string) =>
    trackProfileTabInteraction('projects', type, data);
  const handleConversion = (type: string) => trackProfileConversion(type, 'projects');

  const handleProjectClick = (title: string, type: string) => {
    handleClick('project_card_click', `${type}_${title}`);
    handleConversion('project_interest');
  };
  const handleMetricClick = (metric: string, title: string) => {
    handleClick('metric_chip_click', `${metric}_${title}`);
    if (metric.includes('↓') || metric.includes('M+') || metric.includes('k+'))
      handleConversion('results_focused_interest');
  };
  const handleTechClick = (tech: string, title: string) => {
    handleClick('tech_stack_click', `${tech}_${title}`);
    if (['.NET', 'React', 'TypeScript', 'Microservices', 'Generative AI'].includes(tech))
      handleConversion('tech_stack_match');
  };

  const currentLang = t('home') === 'Início' ? 'pt' : 'en';

  const projectsData = {
    pt: {
      project1Title: 'Hub de Integração Educacional Enterprise',
      project1Description:
        'Plataforma conectando 2.000+ instituições via APIs robustas e sincronização em tempo real.',
      project1Result1: 'Redução de 60% no tempo de processamento administrativo',
      project1Result2: 'Diminuição de 70% em erros de sincronização',
      project1Result3: 'Centralização de dados de 1+ milhão de alunos',
      project1Result4: 'Economia de 200+ horas mensais',
      project2Title: 'Sistema de Avaliação com IA Generativa',
      project2Description:
        'Plataforma educacional com IA para criação, escrita e correção automatizada de redações.',
      project2Result1: 'Redução significativa no tempo de correção',
      project2Result2: 'Aumento na qualidade do feedback pedagógico',
      project2Result3: 'Análise avançada de padrões de escrita',
      project2Result4: 'Processamento de milhares de redações diárias',
      project3Title: 'Automação Google Workspace (RPA)',
      project3Description:
        'Sistema automatizado para gerenciamento de domínio Google Workspace usando RPA.',
      project3Result1: 'Automação de 25+ tarefas administrativas recorrentes',
      project3Result2: 'Diminuição de erros humanos',
      project3Result3: 'Auditorias automáticas de segurança diárias',
      project3Result4: 'Redução drástica em tempo de provisionamento',
      project4Title: 'Plataforma de Avaliações (2M+ registros)',
      project4Description:
        'Solução de alta performance para processamento e correção automática em escala.',
      project4Result1: 'Redução de 85% no tempo: 3 semanas → 5 dias',
      project4Result2: 'Diminuição de 93% em erros de sincronização',
      project4Result3: 'Sistema centralizado com 1.2M+ alunos',
      project4Result4: 'Redução de 78% em intervenções manuais',
    },
    en: {
      project1Title: 'Enterprise Educational Integration Hub',
      project1Description:
        'Platform connecting 2,000+ institutions via robust APIs and real-time synchronization.',
      project1Result1: '60% reduction in administrative processing time',
      project1Result2: '70% decrease in synchronization errors',
      project1Result3: 'Centralization of 1+ million student data',
      project1Result4: 'Savings of 200+ monthly hours',
      project2Title: 'AI-Powered Assessment System',
      project2Description:
        'Educational platform with AI for automated essay creation, writing and correction.',
      project2Result1: 'Significant reduction in correction time',
      project2Result2: 'Improved pedagogical feedback quality',
      project2Result3: 'Advanced writing pattern analysis',
      project2Result4: 'Processing thousands of essays daily',
      project3Title: 'Google Workspace Automation (RPA)',
      project3Description: 'Automated system for Google Workspace domain management using RPA.',
      project3Result1: 'Automation of 25+ recurring administrative tasks',
      project3Result2: 'Reduction of human errors',
      project3Result3: 'Daily automated security audits',
      project3Result4: 'Drastic reduction in provisioning time',
      project4Title: 'Assessment Platform (2M+ records)',
      project4Description:
        'High-performance solution for large-scale processing and automated correction.',
      project4Result1: '85% time reduction: 3 weeks → 5 days',
      project4Result2: '93% decrease in synchronization errors',
      project4Result3: 'Centralized system with 1.2M+ students',
      project4Result4: '78% reduction in manual interventions',
    },
  };

  const projects: ProjectData[] = [
    {
      titleKey: 'project1Title',
      icon: <IntegrationInstructionsIcon />,
      descriptionKey: 'project1Description',
      confidential: true,
      metrics: [t('metrics001'), t('metrics002'), t('metrics003'), t('metrics004')],
      resultsKeys: ['project1Result1', 'project1Result2', 'project1Result3', 'project1Result4'],
      techStack: ['.NET', 'React', 'TypeScript', 'Microservices', 'PostgreSQL', 'API RESTful'],
      type: 'integration_hub',
    },
    {
      titleKey: 'project2Title',
      icon: <EditNoteIcon />,
      descriptionKey: 'project2Description',
      confidential: true,
      metrics: [t('metrics005'), t('metrics006'), t('metrics007'), t('metrics008')],
      resultsKeys: ['project2Result1', 'project2Result2', 'project2Result3', 'project2Result4'],
      techStack: ['C#', '.NET', 'React', 'PostgreSQL', 'Docker', 'Generative AI', 'CI/CD', 'GCP'],
      type: 'ai_evaluation',
    },
    {
      titleKey: 'project3Title',
      icon: <ArchitectureIcon />,
      descriptionKey: 'project3Description',
      confidential: true,
      metrics: [t('metrics009'), t('metrics010'), t('metrics011'), t('metrics012')],
      resultsKeys: ['project3Result1', 'project3Result2', 'project3Result3', 'project3Result4'],
      techStack: ['C#', 'CQRS', 'Google Admin SDK', 'OAuth 2.0', 'DDD', 'Event Sourcing'],
      type: 'rpa_automation',
    },
    {
      titleKey: 'project4Title',
      icon: <StorageIcon />,
      descriptionKey: 'project4Description',
      confidential: true,
      metrics: [t('metrics013'), t('metrics014'), t('metrics015'), t('metrics016')],
      resultsKeys: ['project4Result1', 'project4Result2', 'project4Result3', 'project4Result4'],
      techStack: ['.NET', 'React', 'TypeScript', 'Microservices', 'SQL Server', 'OCR'],
      type: 'evaluation_platform',
    },
  ];

  const futureProjects: Array<{ nameKey: TranslationKeys; icon: ReactElement; key: string }> = [
    { nameKey: 'futureProject1', icon: <CodeIcon />, key: 'sistema_gestao_fullstack' },
    { nameKey: 'futureProject2', icon: <ArchitectureIcon />, key: 'microservicos_docker' },
    { nameKey: 'futureProject3', icon: <LaunchIcon />, key: 'dashboard_data_science' },
  ];

  const interviewTopics: Array<{ textKey: TranslationKeys; key: string }> = [
    { textKey: 'interviewTopic1', key: 'technical_challenges_solutions' },
    { textKey: 'interviewTopic2', key: 'architecture_decisions_tradeoffs' },
    { textKey: 'interviewTopic3', key: 'methodologies_engineering_practices' },
    { textKey: 'interviewTopic4', key: 'lessons_learned_technical_evolution' },
  ];

  return (
    <Container sx={{ py: 8 }} id="projects" component="section">
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
          {t('projectsTitle')}
        </Typography>

        {/* ── Confidentiality notice ── */}
        <Box
          sx={() => ({
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
            p: 2,
            mb: 4,
            borderRadius: 2,
            border: `1px solid ${alpha('#fbbf24', 0.25)}`,
            background: alpha('#fbbf24', 0.05),
            cursor: 'pointer',
          })}
          onClick={() => handleClick('confidentiality_alert_click', 'understanding_constraints')}
        >
          <InfoOutlinedIcon sx={{ color: '#d97706', mt: 0.2, flexShrink: 0, fontSize: 18 }} />
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mb: 0.5,
                fontFamily: '"Roboto Mono", monospace',
                fontSize: '0.83rem',
                color: '#b45309',
              }}
            >
              {t('confidentialProjects')}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.8rem',
                lineHeight: 1.6,
                color: 'text.secondary',
                fontFamily: '"Roboto Mono", monospace',
              }}
            >
              {t('confidentialDescription')}
            </Typography>
          </Box>
        </Box>

        {/* ── Project cards ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 3 }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <SectionCard onClick={() => handleProjectClick(project.titleKey, project.type)}>
                {/* Header */}
                <CardHeader>
                  <CardIcon>{project.icon}</CardIcon>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        fontWeight: 600,
                        fontSize: '0.97rem',
                        lineHeight: 1.3,
                        color: 'text.primary',
                      }}
                    >
                      {projectsData[currentLang][project.titleKey as keyof typeof projectsData.pt]}
                    </Typography>

                    {project.confidential && (
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          mt: 0.75,
                          px: 1,
                          py: '2px',
                          borderRadius: '5px',
                          border: `1px solid ${alpha('#fbbf24', 0.3)}`,
                          background: alpha('#fbbf24', 0.07),
                          cursor: 'pointer',
                          width: 'fit-content',
                        }}
                        onClick={(e: MouseEvent) => {
                          e.stopPropagation();
                          handleClick('confidential_badge_click', project.titleKey);
                        }}
                      >
                        <LockIcon sx={{ fontSize: 11, color: '#b45309' }} />
                        <Typography
                          sx={{
                            fontFamily: '"Roboto Mono", monospace',
                            fontSize: '0.67rem',
                            color: '#b45309',
                            fontWeight: 600,
                          }}
                        >
                          {t('confidential')}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </CardHeader>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2.5,
                    fontSize: '0.85rem',
                    lineHeight: 1.7,
                    fontFamily: '"Roboto Mono", monospace',
                    color: 'text.secondary',
                  }}
                >
                  {
                    projectsData[currentLang][
                      project.descriptionKey as keyof typeof projectsData.pt
                    ]
                  }
                </Typography>

                {/* Metrics */}
                <Box sx={{ mb: 2.5 }}>
                  <SectionLabel label={t('mainMetrics')} />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {project.metrics.map((metric, idx) => (
                      <MetricChip
                        key={idx}
                        label={metric}
                        size="small"
                        onClick={(e: MouseEvent) => {
                          e.stopPropagation();
                          handleMetricClick(metric, project.titleKey);
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Results — mirrors SkillRow */}
                <Box sx={{ mb: 2.5 }}>
                  <SectionLabel icon={<SpeedIcon />} label={t('results')} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                    {project.resultsKeys.map((resultKey, idx) => (
                      <ResultRow
                        key={idx}
                        onClick={(e: MouseEvent) => {
                          e.stopPropagation();
                          handleClick('result_item_click', `result_${idx}_${project.titleKey}`);
                        }}
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
                            lineHeight: 1.5,
                          }}
                        >
                          {projectsData[currentLang][resultKey as keyof typeof projectsData.pt]}
                        </Typography>
                      </ResultRow>
                    ))}
                  </Box>
                </Box>

                {/* Tech stack */}
                <Box>
                  <SectionLabel label={t('stack')} />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {project.techStack.map((tech, idx) => (
                      <TechChip
                        key={idx}
                        label={tech}
                        size="small"
                        onClick={(e: MouseEvent) => {
                          e.stopPropagation();
                          handleTechClick(tech, project.titleKey);
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </SectionCard>
            </motion.div>
          ))}
        </Box>

        <Divider sx={{ my: 4, borderColor: (t) => alpha(t.palette.divider, 0.5) }} />

        {/* ── Open Source ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionCard
            sx={{ mb: 3, cursor: 'pointer' }}
            onClick={() => handleClick('open_source_section_click', 'future_projects')}
          >
            <CardHeader>
              <CardIcon>
                <GitHubIcon />
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
                  {t('openSourceTitle')}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.72rem',
                    color: 'text.secondary',
                  }}
                >
                  {t('openSourceDescription')}
                </Typography>
              </Box>
            </CardHeader>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2.5 }}>
              {futureProjects.map((project, idx) => (
                <Button
                  key={idx}
                  variant="outlined"
                  startIcon={project.icon}
                  disabled
                  sx={(theme) => ({
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.75rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    p: '4px 12px',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    },
                  })}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    handleClick('future_project_interest', project.key);
                    handleConversion('future_collaboration_interest');
                  }}
                >
                  {t(project.nameKey)}
                </Button>
              ))}
            </Box>

            <Typography
              variant="caption"
              sx={{
                color: 'text.disabled',
                fontStyle: 'italic',
                fontSize: '0.75rem',
                fontFamily: '"Roboto Mono", monospace',
              }}
            >
              {t('openSourceNote')}
            </Typography>
          </SectionCard>
        </motion.div>

        {/* ── Technical Discussion ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <SectionCard
            onClick={() => {
              handleClick('interview_discussion_click', 'technical_details');
              handleConversion('interview_preparation');
            }}
          >
            <CardHeader>
              <CardIcon>
                <CodeIcon />
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
                  {t('technicalDiscussionTitle')}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.72rem',
                    color: 'text.secondary',
                  }}
                >
                  {t('technicalDiscussionDescription')}
                </Typography>
              </Box>
            </CardHeader>

            {/* Topics — mirrors SkillRow */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 0.75,
              }}
            >
              {interviewTopics.map((topic, idx) => (
                <ResultRow
                  key={idx}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    handleClick('interview_topic_click', topic.key);
                  }}
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
                      fontSize: '0.83rem',
                      color: 'text.primary',
                      lineHeight: 1.5,
                    }}
                  >
                    {t(topic.textKey)}
                  </Typography>
                </ResultRow>
              ))}
            </Box>
          </SectionCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ProjectsSection;
