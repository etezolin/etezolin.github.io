import ArchitectureIcon from "@mui/icons-material/Architecture";
import CodeIcon from "@mui/icons-material/Code";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GitHubIcon from "@mui/icons-material/GitHub";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import LaunchIcon from "@mui/icons-material/Launch";
import LockIcon from "@mui/icons-material/Lock";
import SpeedIcon from "@mui/icons-material/Speed";
import WarningIcon from "@mui/icons-material/Warning";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import type { FC, MouseEvent, ReactElement } from "react";
import {
  trackProfileConversion,
  trackProfileTabInteraction,
} from "../../firebase";
import { useTypedTranslation } from "../../hooks/useTranslation";

// Tipos TypeScript
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

// Componentes estilizados otimizados
const ProjectCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(2.5),
  marginBottom: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: 8,
  position: "relative",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    opacity: 0.7,
  },
  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: theme.palette.secondary.main,
  },
}));

const StyledChip = styled(Chip)<{ chiptype: "metric" | "tech" }>(
  ({ theme, chiptype }) => ({
    margin: theme.spacing(0.25),
    fontFamily: '"Roboto Mono", monospace',
    fontSize: "0.7rem",
    height: chiptype === "metric" ? 20 : 22,
    cursor: "pointer",
    transition: "all 0.3s ease",
    ...(chiptype === "metric"
      ? {
        backgroundColor: "rgba(0, 229, 255, 0.1)",
        color: theme.palette.secondary.main,
        border: "1px solid rgba(0, 229, 255, 0.3)",
        "&:hover": {
          backgroundColor: "rgba(0, 229, 255, 0.2)",
          transform: "scale(1.05)",
        },
      }
      : {
        backgroundColor: "rgba(20, 40, 80, 0.6)",
        color: theme.palette.text.primary,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        "&:hover": {
          backgroundColor: "rgba(20, 40, 80, 0.8)",
          transform: "scale(1.05)",
        },
      }),
  })
);

const ProjectsSection: FC = () => {
  const { t } = useTypedTranslation();

  // Funções de analytics otimizadas
  const handleClick = (type: string, data: string) => {
    trackProfileTabInteraction("projects", type, data);
  };

  const handleConversion = (type: string) => {
    trackProfileConversion(type, "projects");
  };

  const handleProjectClick = (title: string, type: string) => {
    handleClick("project_card_click", `${type}_${title}`);
    handleConversion("project_interest");
  };

  const handleMetricClick = (metric: string, title: string) => {
    handleClick("metric_chip_click", `${metric}_${title}`);
    if (
      metric.includes("↓") ||
      metric.includes("M+") ||
      metric.includes("k+")
    ) {
      handleConversion("results_focused_interest");
    }
  };

  const handleTechClick = (tech: string, title: string) => {
    handleClick("tech_stack_click", `${tech}_${title}`);
    if (
      [
        ".NET",
        "React",
        "TypeScript",
        "Microsserviços",
        "IA Generativa",
      ].includes(tech)
    ) {
      handleConversion("tech_stack_match");
    }
  };

  // Dados dos projetos com chaves de tradução
  const projects: ProjectData[] = [
    {
      titleKey: "project1Title",
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      descriptionKey: "project1Description",
      confidential: true,
      metrics: [t("metrics001"), t("metrics002"), t("metrics003"), t("metrics004")],
      resultsKeys: ["project1Result1", "project1Result2", "project1Result3", "project1Result4"],
      techStack: [
        ".NET",
        "React",
        "TypeScript",
        "Microservices",
        "PostgreSQL",
        "API RESTful",
      ],
      type: "integration_hub",
    },
    {
      titleKey: "project2Title",
      icon: <EditNoteIcon fontSize="large" />,
      descriptionKey: "project2Description",
      confidential: true,
      metrics: [t("metrics005"), t("metrics006"), t("metrics007"), t("metrics008")],
      resultsKeys: ["project2Result1", "project2Result2", "project2Result3", "project2Result4"],
      techStack: [
        "C#",
        ".NET",
        "React",
        "PostgreSQL",
        "Docker",
        "Generative AI",
        "CI/CD",
        "GCP",
      ],
      type: "ai_evaluation",
    },
    {
      titleKey: "project3Title",
      icon: <ArchitectureIcon fontSize="large" />,
      descriptionKey: "project3Description",
      confidential: true,
      metrics: [t("metrics009"), t("metrics010"), t("metrics011"), t("metrics012")],
      resultsKeys: ["project3Result1", "project3Result2", "project3Result3", "project3Result4"],
      techStack: [
        "C#",
        "CQRS",
        "Google Admin SDK",
        "OAuth 2.0",
        "DDD",
        "Event Sourcing",
      ],
      type: "rpa_automation",
    },
    {
      titleKey: "project4Title",
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      descriptionKey: "project4Description",
      confidential: true,
      metrics: [t("metrics013"), t("metrics014"), t("metrics015"), t("metrics016")],
      resultsKeys: ["project4Result1", "project4Result2", "project4Result3", "project4Result4"],
      techStack: [
        ".NET",
        "React",
        "TypeScript",
        "Microservices",
        "SQL Server",
        "OCR",
      ],
      type: "evaluation_platform",
    },
  ];

  const futureProjects = [
    {
      nameKey: "futureProject1",
      icon: <CodeIcon />,
      key: "sistema_gestao_fullstack",
    },
    {
      nameKey: "futureProject2",
      icon: <ArchitectureIcon />,
      key: "microservicos_docker",
    },
    {
      nameKey: "futureProject3",
      icon: <LaunchIcon />,
      key: "dashboard_data_science",
    },
  ];

  const interviewTopics = [
    {
      textKey: "interviewTopic1",
      key: "technical_challenges_solutions",
    },
    {
      textKey: "interviewTopic2",
      key: "architecture_decisions_tradeoffs",
    },
    {
      textKey: "interviewTopic3",
      key: "methodologies_engineering_practices",
    },
    {
      textKey: "interviewTopic4",
      key: "lessons_learned_technical_evolution",
    },
  ];

  // Dados estáticos dos projetos em ambos idiomas
  const projectsData = {
    pt: {
      project1Title: "Hub de Integração Educacional Enterprise",
      project1Description: "Plataforma conectando 2.000+ instituições via APIs robustas e sincronização em tempo real.",
      project1Result1: "Redução de 60% no tempo de processamento administrativo",
      project1Result2: "Diminuição de 70% em erros de sincronização",
      project1Result3: "Centralização de dados de 1+ milhão de alunos",
      project1Result4: "Economia de 200+ horas mensais",
      project2Title: "Sistema de Avaliação com IA Generativa",
      project2Description: "Plataforma educacional com IA para criação, escrita e correção automatizada de redações.",
      project2Result1: "Redução significativa no tempo de correção",
      project2Result2: "Aumento na qualidade do feedback pedagógico",
      project2Result3: "Análise avançada de padrões de escrita",
      project2Result4: "Processamento de milhares de redações diárias",
      project3Title: "Automação Google Workspace (RPA)",
      project3Description: "Sistema automatizado para gerenciamento de domínio Google Workspace usando RPA.",
      project3Result1: "Automação de 25+ tarefas administrativas recorrentes",
      project3Result2: "Diminuição de erros humanos",
      project3Result3: "Auditorias automáticas de segurança diárias",
      project3Result4: "Redução drástica em tempo de provisionamento",
      project4Title: "Plataforma de Avaliações (2M+ registros)",
      project4Description: "Solução de alta performance para processamento e correção automática em escala.",
      project4Result1: "Redução de 85% no tempo: 3 semanas → 5 dias",
      project4Result2: "Diminuição de 93% em erros de sincronização",
      project4Result3: "Sistema centralizado com 1.2M+ alunos",
      project4Result4: "Redução de 78% em intervenções manuais",
    },
    en: {
      project1Title: "Enterprise Educational Integration Hub",
      project1Description: "Platform connecting 2,000+ institutions via robust APIs and real-time synchronization.",
      project1Result1: "60% reduction in administrative processing time",
      project1Result2: "70% decrease in synchronization errors",
      project1Result3: "Centralization of 1+ million student data",
      project1Result4: "Savings of 200+ monthly hours",
      project2Title: "AI-Powered Assessment System",
      project2Description: "Educational platform with AI for automated essay creation, writing and correction.",
      project2Result1: "Significant reduction in correction time",
      project2Result2: "Improved pedagogical feedback quality",
      project2Result3: "Advanced writing pattern analysis",
      project2Result4: "Processing thousands of essays daily",
      project3Title: "Google Workspace Automation (RPA)",
      project3Description: "Automated system for Google Workspace domain management using RPA.",
      project3Result1: "Automation of 25+ recurring administrative tasks",
      project3Result2: "Reduction of human errors",
      project3Result3: "Daily automated security audits",
      project3Result4: "Drastic reduction in provisioning time",
      project4Title: "Assessment Platform (2M+ records)",
      project4Description: "High-performance solution for large-scale processing and automated correction.",
      project4Result1: "85% time reduction: 3 weeks → 5 days",
      project4Result2: "93% decrease in synchronization errors",
      project4Result3: "Centralized system with 1.2M+ students",
      project4Result4: "78% reduction in manual interventions",
    }
  };

  const currentLang = t("home") === "Início" ? "pt" : "en";

  return (
    <Container sx={{ py: 8 }} id="projects" component="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
          {t("projectsTitle")}
        </Typography>

        {/* Alerta sobre Confidencialidade */}
        <Box
          sx={{
            background: "rgba(255, 193, 7, 0.1)",
            border: "1px solid rgba(255, 193, 7, 0.3)",
            borderRadius: 1,
            p: 2,
            mb: 3,
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
            cursor: "pointer",
          }}
          onClick={() =>
            handleClick(
              "confidentiality_alert_click",
              "understanding_constraints"
            )
          }
        >
          <WarningIcon sx={{ color: "#ffc107", mt: 0.2 }} />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
              {t("confidentialProjects")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
            >
              {t("confidentialDescription")}
            </Typography>
          </Box>
        </Box>

        {/* Lista de Projetos */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              onClick={() => handleProjectClick(project.titleKey, project.type)}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    flex: 1,
                  }}
                >
                  <Box
                    sx={{
                      color: "secondary.main",
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    {project.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {projectsData[currentLang][project.titleKey as keyof typeof projectsData.pt]}
                    </Typography>
                    {project.confidential && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          fontSize: "0.75rem",
                          color: "text.secondary",
                          backgroundColor: "rgba(255, 193, 7, 0.1)",
                          border: "1px solid rgba(255, 193, 7, 0.3)",
                          p: "4px 8px",
                          borderRadius: 3,
                          mt: 1,
                          width: "fit-content",
                          cursor: "pointer",
                        }}
                        onClick={(e: MouseEvent) => {
                          e.stopPropagation();
                          handleClick(
                            "confidential_badge_click",
                            project.titleKey
                          );
                        }}
                      >
                        <LockIcon sx={{ fontSize: 14 }} />
                        {t("confidential")}
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>

              <Typography
                variant="body2"
                sx={{ mb: 2, fontSize: "0.9rem", lineHeight: 1.5 }}
              >
                {projectsData[currentLang][project.descriptionKey as keyof typeof projectsData.pt]}
              </Typography>

              {/* Métricas */}
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: "text.secondary",
                    mb: 1,
                    display: "block",
                  }}
                >
                  {t("mainMetrics")}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {project.metrics.map((metric, idx) => (
                    <StyledChip
                      key={idx}
                      label={metric}
                      size="small"
                      chiptype="metric"
                      onClick={(e: MouseEvent) => {
                        e.stopPropagation();
                        handleMetricClick(metric, project.titleKey);
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Resultados */}
              <Box sx={{ mb: 2, pl: 1 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: "secondary.main",
                    fontWeight: 500,
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <SpeedIcon sx={{ fontSize: 16 }} />
                  {t("results")}
                </Typography>
                {project.resultsKeys.slice(0, 4).map((resultKey, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      fontSize: "0.85rem",
                      mb: 0.5,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1,
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      "&:hover": { color: "secondary.main" },
                      "&::before": {
                        content: '"▸"',
                        color: "secondary.main",
                        fontWeight: "bold",
                        flexShrink: 0,
                      },
                    }}
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation();
                      handleClick(
                        "result_item_click",
                        `result_${idx}_${project.titleKey}`
                      );
                    }}
                  >
                    {projectsData[currentLang][resultKey as keyof typeof projectsData.pt]}
                  </Typography>
                ))}
              </Box>

              {/* Stack Tecnológica */}
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: "text.secondary",
                    mb: 1,
                    display: "block",
                  }}
                >
                  {t("stack")}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {project.techStack.map((tech, idx) => (
                    <StyledChip
                      key={idx}
                      label={tech}
                      size="small"
                      chiptype="tech"
                      onClick={(e: MouseEvent) => {
                        e.stopPropagation();
                        handleTechClick(tech, project.titleKey);
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </ProjectCard>
          </motion.div>
        ))}

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Projetos Open Source */}
        <Card
          sx={{
            p: 2.5,
            background: "rgba(13, 33, 55, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            mb: 2,
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-2px)",
              borderColor: "secondary.main",
            },
          }}
          onClick={() =>
            handleClick("open_source_section_click", "future_projects")
          }
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <GitHubIcon sx={{ color: "secondary.main", mr: 1 }} />
            <Typography
              variant="h6"
              sx={{
                color: "secondary.main",
                fontFamily: '"Roboto Mono", monospace',
              }}
            >
              {t("openSourceTitle")}
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
            {t("openSourceDescription")}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
            {futureProjects.map((project, idx) => (
              <Button
                key={idx}
                variant="outlined"
                startIcon={project.icon}
                disabled
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  fontSize: "0.75rem",
                  textTransform: "none",
                  borderRadius: 3,
                  p: "4px 12px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    borderColor: "secondary.main",
                    backgroundColor: "rgba(0, 229, 255, 0.1)",
                  },
                }}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  handleClick("future_project_interest", project.key);
                  handleConversion("future_collaboration_interest");
                }}
              >
                {t(project.nameKey as any)}
              </Button>
            ))}
          </Box>

          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontStyle: "italic",
              fontSize: "0.8rem",
            }}
          >
            {t("openSourceNote")}
          </Typography>
        </Card>

        {/* Discussão Técnica */}
        <Card
          sx={{
            p: 2.5,
            background: "rgba(13, 33, 55, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-2px)",
              borderColor: "secondary.main",
            },
          }}
          onClick={() => {
            handleClick("interview_discussion_click", "technical_details");
            handleConversion("interview_preparation");
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "secondary.main",
              mb: 2,
              fontFamily: '"Roboto Mono", monospace',
            }}
          >
            {t("technicalDiscussionTitle")}
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
            {t("technicalDiscussionDescription")}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 0.5,
            }}
          >
            {interviewTopics.map((topic, idx) => (
              <Typography
                key={idx}
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  color: "#f0f0f0",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "secondary.main" },
                }}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  handleClick("interview_topic_click", topic.key);
                }}
              >
                ▸ {t(topic.textKey as any)}
              </Typography>
            ))}
          </Box>
        </Card>
      </motion.div>
    </Container>
  );
};

export default ProjectsSection;
