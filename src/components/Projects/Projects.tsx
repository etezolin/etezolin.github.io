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

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// import ArchitectureIcon from "@mui/icons-material/Architecture";
// import CodeIcon from "@mui/icons-material/Code";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import LaunchIcon from "@mui/icons-material/Launch";
// import LockIcon from "@mui/icons-material/Lock";
// import SpeedIcon from "@mui/icons-material/Speed";
// import WarningIcon from "@mui/icons-material/Warning";
// import {
//   Box,
//   Button,
//   Card,
//   Chip,
//   Container,
//   Divider,
//   Typography,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import type { FC, MouseEvent, ReactElement } from "react";

// // ✅ CORREÇÃO: Apenas as funções de analytics, sem o hook
// import {
//   trackProfileConversion,
//   trackProfileTabInteraction,
// } from "../../firebase";

// // Tipos TypeScript
// interface ProjectData {
//   title: string;
//   icon: ReactElement;
//   description: string;
//   confidential: boolean;
//   metrics: string[];
//   results: string[];
//   techStack: string[];
//   type: string;
// }

// // Componentes estilizados otimizados
// const ProjectCard = styled(motion.div)(({ theme }) => ({
//   padding: theme.spacing(2.5),
//   marginBottom: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   borderRadius: 8,
//   position: "relative",
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "2px",
//     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//     opacity: 0.7,
//   },
//   "&:hover": {
//     transform: "translateY(-5px)",
//     borderColor: theme.palette.secondary.main,
//   },
// }));

// const StyledChip = styled(Chip)<{ chiptype: "metric" | "tech" }>(
//   ({ theme, chiptype }) => ({
//     margin: theme.spacing(0.25),
//     fontFamily: '"Roboto Mono", monospace',
//     fontSize: "0.7rem",
//     height: chiptype === "metric" ? 20 : 22,
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     ...(chiptype === "metric"
//       ? {
//         backgroundColor: "rgba(0, 229, 255, 0.1)",
//         color: theme.palette.secondary.main,
//         border: "1px solid rgba(0, 229, 255, 0.3)",
//         "&:hover": {
//           backgroundColor: "rgba(0, 229, 255, 0.2)",
//           transform: "scale(1.05)",
//         },
//       }
//       : {
//         backgroundColor: "rgba(20, 40, 80, 0.6)",
//         color: theme.palette.text.primary,
//         border: "1px solid rgba(255, 255, 255, 0.1)",
//         "&:hover": {
//           backgroundColor: "rgba(20, 40, 80, 0.8)",
//           transform: "scale(1.05)",
//         },
//       }),
//   })
// );

// const ProjectsSection: FC = () => {
//   // ✅ CORREÇÃO: Removido o hook useTabAnalytics e useEffect
//   // O tracking de visualização da aba agora é automático via App.tsx

//   // ✅ Funções de analytics otimizadas
//   const handleClick = (type: string, data: string) => {
//     trackProfileTabInteraction("projects", type, data);
//   };

//   const handleConversion = (type: string) => {
//     trackProfileConversion(type, "projects");
//   };

//   const handleProjectClick = (title: string, type: string) => {
//     handleClick("project_card_click", `${type}_${title}`);
//     handleConversion("project_interest");
//   };

//   const handleMetricClick = (metric: string, title: string) => {
//     handleClick("metric_chip_click", `${metric}_${title}`);
//     if (
//       metric.includes("↓") ||
//       metric.includes("M+") ||
//       metric.includes("k+")
//     ) {
//       handleConversion("results_focused_interest");
//     }
//   };

//   const handleTechClick = (tech: string, title: string) => {
//     handleClick("tech_stack_click", `${tech}_${title}`);
//     if (
//       [
//         ".NET",
//         "React",
//         "TypeScript",
//         "Microsserviços",
//         "IA Generativa",
//       ].includes(tech)
//     ) {
//       handleConversion("tech_stack_match");
//     }
//   };

//   // ✅ Dados dos projetos otimizados
//   const projects: ProjectData[] = [
//     {
//       title: "Hub de Integração Educacional Enterprise",
//       icon: <IntegrationInstructionsIcon fontSize="large" />,
//       description:
//         "Plataforma conectando 2.000+ instituições via APIs robustas e sincronização em tempo real.",
//       confidential: true,
//       metrics: ["2k+ escolas", "1M+ alunos", "60% ↓ tempo", "70% ↓ erros"],
//       results: [
//         "Redução de 60% no tempo de processamento administrativo",
//         "Diminuição de 70% em erros de sincronização",
//         "Centralização de dados de 1+ milhão de alunos",
//         "Economia de 200+ horas mensais",
//       ],
//       techStack: [
//         ".NET",
//         "React",
//         "TypeScript",
//         "Microsserviços",
//         "PostgreSQL",
//         "API RESTful",
//       ],
//       type: "integration_hub",
//     },
//     {
//       title: "Sistema de Avaliação com IA Generativa",
//       icon: <EditNoteIcon fontSize="large" />,
//       description:
//         "Plataforma educacional com IA para criação, escrita e correção automatizada de redações.",
//       confidential: true,
//       metrics: [
//         "IA Generativa",
//         "Milhares/dia",
//         "Feedback detalhado",
//         "Análise NLP",
//       ],
//       results: [
//         "Redução significativa no tempo de correção",
//         "Aumento na qualidade do feedback pedagógico",
//         "Análise avançada de padrões de escrita",
//         "Processamento de milhares de redações diárias",
//       ],
//       techStack: [
//         "C#",
//         ".NET",
//         "React",
//         "PostgreSQL",
//         "Docker",
//         "IA Generativa",
//         "CI/CD",
//         "GCP",
//       ],
//       type: "ai_evaluation",
//     },
//     {
//       title: "Automação Google Workspace (RPA)",
//       icon: <ArchitectureIcon fontSize="large" />,
//       description:
//         "Sistema automatizado para gerenciamento de domínio Google Workspace usando RPA.",
//       confidential: true,
//       metrics: [
//         "25+ tarefas",
//         "90% ↓ erros",
//         "Auditoria diária",
//         "Provisionamento automático",
//       ],
//       results: [
//         "Automação de 25+ tarefas administrativas recorrentes",
//         "Diminuição de erros humanos",
//         "Auditorias automáticas de segurança diárias",
//         "Redução drástica em tempo de provisionamento",
//       ],
//       techStack: [
//         "C#",
//         "CQRS",
//         "Google Admin SDK",
//         "OAuth 2.0",
//         "DDD",
//         "Event Sourcing",
//       ],
//       type: "rpa_automation",
//     },
//     {
//       title: "Plataforma de Avaliações (2M+ registros)",
//       icon: <IntegrationInstructionsIcon fontSize="large" />,
//       description:
//         "Solução de alta performance para processamento e correção automática em escala.",
//       confidential: true,
//       metrics: [
//         "2M+ avaliações",
//         "85% ↓ tempo",
//         "95% precisão",
//         "5 dias ciclo",
//       ],
//       results: [
//         "Redução de 85% no tempo: 3 semanas → 5 dias",
//         "Diminuição de 93% em erros de sincronização",
//         "Sistema centralizado com 1.2M+ alunos",
//         "Redução de 78% em intervenções manuais",
//       ],
//       techStack: [
//         ".NET",
//         "React",
//         "TypeScript",
//         "Microsserviços",
//         "SQL Server",
//         "OCR",
//       ],
//       type: "evaluation_platform",
//     },
//   ];

//   const futureProjects = [
//     {
//       name: "Sistema de Gestão Full-Stack",
//       icon: <CodeIcon />,
//       key: "sistema_gestao_fullstack",
//     },
//     {
//       name: "Microsserviços + Docker",
//       icon: <ArchitectureIcon />,
//       key: "microservicos_docker",
//     },
//     {
//       name: "Dashboard com Data Science",
//       icon: <LaunchIcon />,
//       key: "dashboard_data_science",
//     },
//   ];

//   const interviewTopics = [
//     {
//       text: "Desafios técnicos e estratégias de solução",
//       key: "technical_challenges_solutions",
//     },
//     {
//       text: "Decisões de arquitetura e trade-offs",
//       key: "architecture_decisions_tradeoffs",
//     },
//     {
//       text: "Metodologias e práticas de engenharia",
//       key: "methodologies_engineering_practices",
//     },
//     {
//       text: "Lições aprendidas e evolução técnica",
//       key: "lessons_learned_technical_evolution",
//     },
//   ];

//   return (
//     <Container sx={{ py: 8 }} id="projects" component="section">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
//           // Projetos
//         </Typography>

//         {/* Alerta sobre Confidencialidade */}
//         <Box
//           sx={{
//             background: "rgba(255, 193, 7, 0.1)",
//             border: "1px solid rgba(255, 193, 7, 0.3)",
//             borderRadius: 1,
//             p: 2,
//             mb: 3,
//             display: "flex",
//             alignItems: "flex-start",
//             gap: 2,
//             cursor: "pointer",
//           }}
//           onClick={() =>
//             handleClick(
//               "confidentiality_alert_click",
//               "understanding_constraints"
//             )
//           }
//         >
//           <WarningIcon sx={{ color: "#ffc107", mt: 0.2 }} />
//           <Box>
//             <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
//               Projetos Confidenciais
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
//             >
//               Desenvolvidos em ambiente corporativo com acordos de
//               confidencialidade. Detalhes técnicos apresentados de forma
//               anonimizada, priorizando soluções e impacto.
//             </Typography>
//           </Box>
//         </Box>

//         {/* Lista de Projetos */}
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.01 }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <ProjectCard
//               onClick={() => handleProjectClick(project.title, project.type)}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "flex-start",
//                   mb: 2,
//                   flexWrap: "wrap",
//                   gap: 1,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "flex-start",
//                     gap: 2,
//                     flex: 1,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       color: "secondary.main",
//                       display: "flex",
//                       alignItems: "center",
//                       flexShrink: 0,
//                     }}
//                   >
//                     {project.icon}
//                   </Box>
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: 600,
//                         fontSize: "1.1rem",
//                         lineHeight: 1.3,
//                       }}
//                     >
//                       {project.title}
//                     </Typography>
//                     {project.confidential && (
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: 0.5,
//                           fontSize: "0.75rem",
//                           color: "text.secondary",
//                           backgroundColor: "rgba(255, 193, 7, 0.1)",
//                           border: "1px solid rgba(255, 193, 7, 0.3)",
//                           p: "4px 8px",
//                           borderRadius: 3,
//                           mt: 1,
//                           width: "fit-content",
//                           cursor: "pointer",
//                         }}
//                         onClick={(e: MouseEvent) => {
//                           e.stopPropagation();
//                           handleClick(
//                             "confidential_badge_click",
//                             project.title
//                           );
//                         }}
//                       >
//                         <LockIcon sx={{ fontSize: 14 }} />
//                         Confidencial
//                       </Box>
//                     )}
//                   </Box>
//                 </Box>
//               </Box>

//               <Typography
//                 variant="body2"
//                 sx={{ mb: 2, fontSize: "0.9rem", lineHeight: 1.5 }}
//               >
//                 {project.description}
//               </Typography>

//               {/* Métricas */}
//               <Box sx={{ mb: 2 }}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "text.secondary",
//                     mb: 1,
//                     display: "block",
//                   }}
//                 >
//                   // Métricas principais:
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                   {project.metrics.map((metric, idx) => (
//                     <StyledChip
//                       key={idx}
//                       label={metric}
//                       size="small"
//                       chiptype="metric"
//                       onClick={(e: MouseEvent) => {
//                         e.stopPropagation();
//                         handleMetricClick(metric, project.title);
//                       }}
//                     />
//                   ))}
//                 </Box>
//               </Box>

//               {/* Resultados */}
//               <Box sx={{ mb: 2, pl: 1 }}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "secondary.main",
//                     fontWeight: 500,
//                     mb: 1,
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 0.5,
//                   }}
//                 >
//                   <SpeedIcon sx={{ fontSize: 16 }} />
//                   Resultados:
//                 </Typography>
//                 {project.results.slice(0, 4).map((result, idx) => (
//                   <Typography
//                     key={idx}
//                     sx={{
//                       fontSize: "0.85rem",
//                       mb: 0.5,
//                       display: "flex",
//                       alignItems: "flex-start",
//                       gap: 1,
//                       cursor: "pointer",
//                       transition: "color 0.3s ease",
//                       "&:hover": { color: "secondary.main" },
//                       "&::before": {
//                         content: '"▸"',
//                         color: "secondary.main",
//                         fontWeight: "bold",
//                         flexShrink: 0,
//                       },
//                     }}
//                     onClick={(e: MouseEvent) => {
//                       e.stopPropagation();
//                       handleClick(
//                         "result_item_click",
//                         `result_${idx}_${project.title}`
//                       );
//                     }}
//                   >
//                     {result}
//                   </Typography>
//                 ))}
//               </Box>

//               {/* Stack Tecnológica */}
//               <Box>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "text.secondary",
//                     mb: 1,
//                     display: "block",
//                   }}
//                 >
//                   // Stack:
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                   {project.techStack.map((tech, idx) => (
//                     <StyledChip
//                       key={idx}
//                       label={tech}
//                       size="small"
//                       chiptype="tech"
//                       onClick={(e: MouseEvent) => {
//                         e.stopPropagation();
//                         handleTechClick(tech, project.title);
//                       }}
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             </ProjectCard>
//           </motion.div>
//         ))}

//         <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//         {/* Projetos Open Source */}
//         <Card
//           sx={{
//             p: 2.5,
//             background: "rgba(13, 33, 55, 0.7)",
//             backdropFilter: "blur(10px)",
//             border: "1px solid rgba(255, 255, 255, 0.1)",
//             mb: 2,
//             transition: "all 0.3s ease",
//             cursor: "pointer",
//             "&:hover": {
//               transform: "translateY(-2px)",
//               borderColor: "secondary.main",
//             },
//           }}
//           onClick={() =>
//             handleClick("open_source_section_click", "future_projects")
//           }
//         >
//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <GitHubIcon sx={{ color: "secondary.main", mr: 1 }} />
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "secondary.main",
//                 fontFamily: '"Roboto Mono", monospace',
//               }}
//             >
//               // Projetos Open Source (Em Desenvolvimento)
//             </Typography>
//           </Box>

//           <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
//             Estou desenvolvendo projetos demonstráveis que complementarão este
//             portfólio:
//           </Typography>

//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
//             {futureProjects.map((project, idx) => (
//               <Button
//                 key={idx}
//                 variant="outlined"
//                 startIcon={project.icon}
//                 disabled
//                 sx={{
//                   fontFamily: '"Roboto Mono", monospace',
//                   fontSize: "0.75rem",
//                   textTransform: "none",
//                   borderRadius: 3,
//                   p: "4px 12px",
//                   border: "1px solid rgba(255, 255, 255, 0.2)",
//                   "&:hover": {
//                     borderColor: "secondary.main",
//                     backgroundColor: "rgba(0, 229, 255, 0.1)",
//                   },
//                 }}
//                 onClick={(e: MouseEvent) => {
//                   e.stopPropagation();
//                   handleClick("future_project_interest", project.key);
//                   handleConversion("future_collaboration_interest");
//                 }}
//               >
//                 {project.name}
//               </Button>
//             ))}
//           </Box>

//           <Typography
//             variant="caption"
//             sx={{
//               color: "text.secondary",
//               fontStyle: "italic",
//               fontSize: "0.8rem",
//             }}
//           >
//             * Projetos em desenvolvimento para demonstração sem restrições de
//             confidencialidade. Previsão: próximas semanas.
//           </Typography>
//         </Card>

//         {/* Discussão Técnica */}
//         <Card
//           sx={{
//             p: 2.5,
//             background: "rgba(13, 33, 55, 0.7)",
//             backdropFilter: "blur(10px)",
//             border: "1px solid rgba(255, 255, 255, 0.1)",
//             transition: "all 0.3s ease",
//             cursor: "pointer",
//             "&:hover": {
//               transform: "translateY(-2px)",
//               borderColor: "secondary.main",
//             },
//           }}
//           onClick={() => {
//             handleClick("interview_discussion_click", "technical_details");
//             handleConversion("interview_preparation");
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               color: "secondary.main",
//               mb: 2,
//               fontFamily: '"Roboto Mono", monospace',
//             }}
//           >
//             // Discussão Técnica em Entrevistas
//           </Typography>

//           <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
//             Posso detalhar em entrevistas (respeitando confidencialidade):
//           </Typography>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
//               gap: 0.5,
//             }}
//           >
//             {interviewTopics.map((topic, idx) => (
//               <Typography
//                 key={idx}
//                 sx={{
//                   fontFamily: '"Roboto Mono", monospace',
//                   color: "#f0f0f0",
//                   mb: 1,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                   cursor: "pointer",
//                   transition: "color 0.3s ease",
//                   "&:hover": { color: "secondary.main" },
//                 }}
//                 onClick={(e: MouseEvent) => {
//                   e.stopPropagation();
//                   handleClick("interview_topic_click", topic.key);
//                 }}
//               >
//                 ▸ {topic.text}
//               </Typography>
//             ))}
//           </Box>
//         </Card>
//       </motion.div>
//     </Container>
//   );
// };

// export default ProjectsSection;

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// import type { FC } from "react";
// import { Box, Container, Typography, Chip, Divider, Card } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// // import StorageIcon from "@mui/icons-material/Storage";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import SpeedIcon from "@mui/icons-material/Speed";
// import ArchitectureIcon from "@mui/icons-material/Architecture";
// // import SchoolIcon from "@mui/icons-material/School";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import LockIcon from "@mui/icons-material/Lock";

// const ProjectCard = styled(motion.div)(({ theme }) => ({
//   padding: theme.spacing(3),
//   marginBottom: theme.spacing(4),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//   borderRadius: 4,
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "2px",
//     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//     opacity: 0.7,
//   },
// }));

// const TechChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.5),
//   backgroundColor: "rgba(20, 40, 80, 0.8)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.75rem",
// }));

// const ProjectHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   marginBottom: theme.spacing(2),
// }));

// const ProjectIcon = styled(Box)(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   marginRight: theme.spacing(2),
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const ProjectTitle = styled(Typography)(({ theme }) => ({
//   fontWeight: 600,
//   color: theme.palette.text.primary,
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
// }));

// const ProjectDescription = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   color: theme.palette.text.primary,
// }));

// const ProjectResultsSection = styled(Box)(({ theme }) => ({
//   backgroundColor: "rgba(0, 0, 0, 0.2)",
//   padding: theme.spacing(2),
//   borderRadius: theme.spacing(1),
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
//   borderLeft: `3px solid ${theme.palette.secondary.main}`,
// }));

// const ResultsTitle = styled(Typography)(({ theme }) => ({
//   color: theme.palette.text.primary,
//   fontWeight: 500,
//   marginBottom: theme.spacing(1),
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
// }));

// const ResultsList = styled("ul")(({ theme }) => ({
//   "& > li": {
//     marginBottom: theme.spacing(1),
//   },
// }));

// const TechStackSection = styled(Box)(({ theme }) => ({
//   marginTop: theme.spacing(2),
// }));

// const TechStackTitle = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(1),
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.9rem",
//   color: theme.palette.text.secondary,
// }));

// const ConfidentialBadge = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
//   fontSize: "0.75rem",
//   color: theme.palette.text.secondary,
//   backgroundColor: "rgba(0, 0, 0, 0.2)",
//   padding: theme.spacing(1, 1),
//   borderRadius: theme.spacing(1),
//   // marginLeft: theme.spacing(1),
//   paddingLeft: "20px",
//   marginTop: "10px",
//   width: "205px",
// }));

// const ProjectsSection: FC = () => {
//   // Lista de projetos anonimizados mas com detalhes técnicos relevantes
//   const projects = [
//     {
//       title:
//         "Hub de Integração Educacional - Plataforma Unificada para Gestão Escolar",
//       icon: <IntegrationInstructionsIcon fontSize="large" />,
//       description:
//         "Trabalhei no desenvolvimento de uma plataforma enterprise de integração que interconecta mais de 2.000 instituições de ensino da rede estadual. Esta solução consolidou múltiplos sistemas legados em uma única interface centralizada, implementando APIs robustas para sincronização de dados em tempo real.",
//       confidential: true,
//       results: [
//         "Redução de 60% no tempo de processamento de dados administrativos;",
//         "Diminuição de 70% em erros de sincronização entre sistemas;",
//         "Centralização de informações de mais de 1 milhão de alunos;",
//         "Desenvolvimento de automações cross-platform que integraram múltiplos sistemas, resultando em economia de mais de 200 horas mensais de trabalho manual e redução de 65% em processos operacionais.",
//       ],
//       techStack: [
//         ".NET",
//         "C#",
//         "React",
//         "TypeScript",
//         "Node.js",
//         "Microsserviços",
//         "API RESTful",
//         "PostgreSQL",
//         "SQL Server",
//       ],
//     },
//     {
//       title:
//         "Sistema Inteligente de Escrita e Avaliação de Redações com IA Generativa",
//       icon: <EditNoteIcon fontSize="large" />,
//       description:
//         "Participei do desenvolvimento da plataforma educacional inovadora que integra criação de temas personalizados, ambiente de escrita para estudantes e sistema de avaliação assistido por IA Generativa. A solução automatiza o processo de feedback pedagógico, permitindo correções mais consistentes e detalhadas, além de análises de progresso individualizado.",
//       confidential: true,
//       results: [
//         "Redução no tempo médio de correção de redações pelos professores;",
//         "Aumento na qualidade e detalhamento do feedback fornecido aos estudantes;",
//         "Implementação de análise avançada de texto para identificar padrões de escrita e oportunidades de melhoria;",
//         "Capacidade de processamento de milhares de redações diárias.",
//       ],
//       techStack: [
//         "C#",
//         ".NET",
//         "React",
//         "TypeScript",
//         "PostgreSQL",
//         "Docker",
//         "Mensageria",
//         "IA Generativa",
//         "CI/CD",
//         "Google Cloud Plataform",
//         "Observabilidade",
//       ],
//     },
//     {
//       title:
//         "Sistema Avançado de Gestão Automatizada para Google Workspace por meio de RPAs",
//       icon: <ArchitectureIcon fontSize="large" />,
//       description:
//         "Atuei projetando e implementando um sistema automatizado de gerenciamento para domínio Google Workspace utilizando Robotic Process Automation (RPA). Esta solução substituiu processos administrativos manuais e demorados por fluxos de trabalho automatizados, permitindo o gerenciamento eficiente de contas, grupos, permissões e recursos compartilhados em larga escala.",
//       confidential: true,
//       results: [
//         "Redução no tempo necessário para provisionamento e configuração de novas contas;",
//         "Automação de mais de 20 tarefas administrativas recorrentes, eliminando erros humanos;",
//         "Implementação de auditorias automáticas diárias de segurança e conformidade;",
//         "Economia estimada de horas mensais em tarefas administrativas repetitivas.",
//       ],
//       techStack: [
//         "C#",
//         "CQRS",
//         "SQL",
//         "Google Admin SDK",
//         "Google API Client",
//         "OAuth 2.0",
//         "REST APIs",
//         "CI/CD",
//         "JSON/YAML",
//         "Domain-Driven Design",
//         "Event Sourcing",
//       ],
//     },
//     {
//       title:
//         "Plataforma Escalável de Processamento e Correção de Avaliações Educacionais",
//       icon: <IntegrationInstructionsIcon fontSize="large" />,
//       description:
//         "Trabalhei na implementação de solução de alta performance para processamento, digitalização e correção automática de mais de 2 milhões de avaliações por edição. Esta plataforma on premise utiliza processamento distribuído e tecnologias de reconhecimento ótico para digitalizar e validar avaliações em escala, juntamente com um sistema especialista para correção automatizada baseada em regras de negócio complexas. A arquitetura resiliente garante processamento contínuo mesmo durante picos de submissão, mantendo integridade dos dados e rastreabilidade completa.",
//       confidential: true,
//       results: [
//         "Redução de 85% no tempo de processamento, convertendo um ciclo de 3 semanas em apenas 5 dias para correção completa de toda uma edição;",
//         "Diminuição comprovada de 93% em erros de sincronização entre sistemas de digitalização e correção, garantindo integridade dos resultado;",
//         "Implementação de sistema centralizado com dados de 1.2 milhão de alunos, permitindo análises comparativas de desempenho por região, escola e disciplina;",
//         "Otimização de processos operacionais com redução de 78% em intervenções manuais e aumento de 95% na precisão das correções.",
//       ],
//       techStack: [
//         ".NET",
//         "C#",
//         "React",
//         "TypeScript",
//         "Node.js",
//         "Microsserviços",
//         "API RESTful",
//         "SQL Server",
//       ],
//     },
//   ];

//   const SkillItem = styled(Typography)(({ theme }) => ({
//     fontFamily: '"Roboto Mono", monospace',
//     color: "#f0f0f0",
//     marginBottom: theme.spacing(1),
//     display: "flex",
//     alignItems: "center",
//     gap: theme.spacing(1),
//     "&:hover": {
//       color: theme.palette.secondary.main,
//     },
//   }));

//   const TerminalCard = styled(Card)(({ theme }) => ({
//     padding: theme.spacing(3),
//     background: "rgba(13, 33, 55, 0.7)",
//     backdropFilter: "blur(10px)",
//     border: "1px solid rgba(255, 255, 255, 0.1)",
//     marginBottom: theme.spacing(3),
//   }));

//   return (
//     <Container sx={{ minHeight: "100vh", py: 8 }} id="projects">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
//           // Projetos
//         </Typography>

//         <Box sx={{ mb: 4 }}>
//           <Typography
//             variant="body1"
//             sx={{ color: "text.secondary", fontStyle: "italic" }}
//           >
//             Nota: Os projetos apresentados abaixo foram desenvolvidos em
//             ambientes corporativos com acordos de confidencialidade. Os detalhes
//             foram anonimizados, preservando o foco nas soluções técnicas
//             implementadas e nos resultados obtidos.
//           </Typography>
//         </Box>

//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.01 }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <ProjectCard>
//               <ProjectHeader>
//                 <ProjectIcon>{project.icon}</ProjectIcon>
//                 <ProjectTitle variant="h5">
//                   <Box>
//                     <Box>{project.title}</Box>
//                     <Box>
//                       {project.confidential && (
//                         <ConfidentialBadge>
//                           <LockIcon fontSize="small" />
//                           Projeto confidencial
//                         </ConfidentialBadge>
//                       )}
//                     </Box>
//                   </Box>
//                 </ProjectTitle>
//               </ProjectHeader>

//               <ProjectDescription variant="body1">
//                 {project.description}
//               </ProjectDescription>

//               <ProjectResultsSection>
//                 <ResultsTitle variant="h6">
//                   <SpeedIcon
//                     fontSize="small"
//                     sx={{ color: "secondary.main" }}
//                   />
//                   Resultados e Impacto
//                 </ResultsTitle>
//                 <ResultsList sx={{ pl: 2 }}>
//                   {project.results.map((result, idx) => (
//                     <li key={idx}>
//                       <Typography variant="body2">{result}</Typography>
//                     </li>
//                   ))}
//                 </ResultsList>
//               </ProjectResultsSection>

//               <TechStackSection>
//                 <TechStackTitle>// Stack tecnológica</TechStackTitle>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                   {project.techStack.map((tech, idx) => (
//                     <TechChip key={idx} label={tech} size="small" />
//                   ))}
//                 </Box>
//               </TechStackSection>
//             </ProjectCard>
//           </motion.div>
//         ))}

//         <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//         <TerminalCard sx={{ mt: 2 }}>
//           <Typography variant="h6" sx={{ color: "secondary.main", mb: 2 }}>
//             Abordagem para Projetos Confidenciais
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 2 }}>
//             Embora os detalhes específicos destes projetos sejam confidenciais,
//             estou disponível para discutir em entrevistas:
//           </Typography>
//           <Box sx={{ pl: 2 }}>
//             <SkillItem>
//               ✓ Os desafios técnicos enfrentados e as estratégias de solução
//               adotadas;
//             </SkillItem>
//             <SkillItem>
//               ✓ Decisões de arquitetura e trade-offs considerados;
//             </SkillItem>
//             <SkillItem>
//               ✓ Metodologias de desenvolvimento e práticas de engenharia
//               aplicadas;
//             </SkillItem>
//             <SkillItem>
//               ✓ Lições aprendidas e como foram aplicados esses conhecimentos em
//               projetos posteriores.
//             </SkillItem>
//           </Box>
//         </TerminalCard>
//       </motion.div>
//     </Container>
//   );
// };

// export default ProjectsSection;

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// // import type { FC } from "react";
// // import { useEffect } from "react";
// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   Chip,
// //   Divider,
// //   Card,
// //   Button,
// // } from "@mui/material";
// // import { motion } from "framer-motion";
// // import { styled } from "@mui/material/styles";
// // import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// // import SpeedIcon from "@mui/icons-material/Speed";
// // import ArchitectureIcon from "@mui/icons-material/Architecture";
// // import EditNoteIcon from "@mui/icons-material/EditNote";
// // import LockIcon from "@mui/icons-material/Lock";
// // import GitHubIcon from "@mui/icons-material/GitHub";
// // import LaunchIcon from "@mui/icons-material/Launch";
// // import CodeIcon from "@mui/icons-material/Code";
// // import WarningIcon from "@mui/icons-material/Warning";
// // import { useTabAnalytics } from "../../hooks/useTabAnalytics";

// // // Import das funções de analytics
// // import {
// //   trackProfileTabView,
// //   trackProfileTabInteraction,
// //   trackProfileTabTimeSpent,
// //   trackProfileConversion,
// // } from "../../firebase";

// // const ProjectCard = styled(motion.div)(({ theme }) => ({
// //   padding: theme.spacing(2.5),
// //   marginBottom: theme.spacing(3),
// //   background: "rgba(13, 33, 55, 0.7)",
// //   backdropFilter: "blur(10px)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
// //   borderRadius: 8,
// //   position: "relative",
// //   transition: "all 0.3s ease",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&::before": {
// //     content: '""',
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     height: "2px",
// //     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //     opacity: 0.7,
// //   },
// //   "&:hover": {
// //     transform: "translateY(-5px)",
// //     borderColor: theme.palette.secondary.main,
// //   },
// // }));

// // const CompactCard = styled(Card)(({ theme }) => ({
// //   padding: theme.spacing(2.5),
// //   background: "rgba(13, 33, 55, 0.7)",
// //   backdropFilter: "blur(10px)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   marginBottom: theme.spacing(2),
// //   transition: "all 0.3s ease",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&:hover": {
// //     transform: "translateY(-2px)",
// //     borderColor: theme.palette.secondary.main,
// //   },
// // }));

// // const ProjectHeader = styled(Box)(({ theme }) => ({
// //   display: "flex",
// //   justifyContent: "space-between",
// //   alignItems: "flex-start",
// //   marginBottom: theme.spacing(2),
// //   flexWrap: "wrap",
// //   gap: theme.spacing(1),
// // }));

// // const ProjectTitleBox = styled(Box)(() => ({
// //   display: "flex",
// //   alignItems: "flex-start",
// //   gap: 16,
// //   flex: 1,
// // }));

// // const ProjectIcon = styled(Box)(({ theme }) => ({
// //   color: theme.palette.secondary.main,
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   flexShrink: 0,
// // }));

// // const ProjectTitle = styled(Typography)(({ theme }) => ({
// //   fontWeight: 600,
// //   color: theme.palette.text.primary,
// //   fontSize: "1.1rem",
// //   lineHeight: 1.3,
// // }));

// // const ConfidentialBadge = styled(Box)(({ theme }) => ({
// //   display: "flex",
// //   alignItems: "center",
// //   gap: theme.spacing(0.5),
// //   fontSize: "0.75rem",
// //   color: theme.palette.text.secondary,
// //   backgroundColor: "rgba(255, 193, 7, 0.1)",
// //   border: "1px solid rgba(255, 193, 7, 0.3)",
// //   padding: theme.spacing(0.5, 1),
// //   borderRadius: theme.spacing(3),
// //   marginTop: theme.spacing(1),
// //   width: "fit-content",
// //   cursor: "pointer", // Adicionado para analytics
// // }));

// // const MetricChip = styled(Chip)(({ theme }) => ({
// //   margin: theme.spacing(0.25),
// //   backgroundColor: "rgba(0, 229, 255, 0.1)",
// //   color: theme.palette.secondary.main,
// //   border: "1px solid rgba(0, 229, 255, 0.3)",
// //   fontFamily: '"Roboto Mono", monospace',
// //   fontSize: "0.7rem",
// //   height: 20,
// //   cursor: "pointer", // Adicionado para analytics
// //   transition: "all 0.3s ease",
// //   "&:hover": {
// //     backgroundColor: "rgba(0, 229, 255, 0.2)",
// //     transform: "scale(1.05)",
// //   },
// //   "& .MuiChip-label": {
// //     padding: "0 6px",
// //   },
// // }));

// // const TechChip = styled(Chip)(({ theme }) => ({
// //   margin: theme.spacing(0.25),
// //   backgroundColor: "rgba(20, 40, 80, 0.6)",
// //   color: theme.palette.text.primary,
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   fontFamily: '"Roboto Mono", monospace',
// //   fontSize: "0.7rem",
// //   height: 22,
// //   cursor: "pointer", // Adicionado para analytics
// //   transition: "all 0.3s ease",
// //   "&:hover": {
// //     backgroundColor: "rgba(20, 40, 80, 0.8)",
// //     transform: "scale(1.05)",
// //   },
// // }));

// // const ResultItem = styled(Typography)(({ theme }) => ({
// //   fontSize: "0.85rem",
// //   marginBottom: theme.spacing(0.5),
// //   color: theme.palette.text.primary,
// //   display: "flex",
// //   alignItems: "flex-start",
// //   gap: theme.spacing(1),
// //   cursor: "pointer", // Adicionado para analytics
// //   transition: "color 0.3s ease",
// //   "&:hover": {
// //     color: theme.palette.secondary.main,
// //   },
// //   "&::before": {
// //     content: '"▸"',
// //     color: theme.palette.secondary.main,
// //     fontWeight: "bold",
// //     flexShrink: 0,
// //   },
// // }));

// // const ActionButton = styled(Button)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   fontSize: "0.75rem",
// //   textTransform: "none",
// //   borderRadius: theme.spacing(3),
// //   padding: theme.spacing(0.5, 1.5),
// //   margin: theme.spacing(0.25),
// //   border: "1px solid rgba(255, 255, 255, 0.2)",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&:hover": {
// //     borderColor: theme.palette.secondary.main,
// //     backgroundColor: "rgba(0, 229, 255, 0.1)",
// //   },
// // }));

// // const AlertBox = styled(Box)(({ theme }) => ({
// //   background: "rgba(255, 193, 7, 0.1)",
// //   border: "1px solid rgba(255, 193, 7, 0.3)",
// //   borderRadius: theme.spacing(1),
// //   padding: theme.spacing(2),
// //   marginBottom: theme.spacing(3),
// //   display: "flex",
// //   alignItems: "flex-start",
// //   gap: theme.spacing(2),
// //   cursor: "pointer", // Adicionado para analytics
// // }));

// // const SkillItem = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   color: "#f0f0f0",
// //   marginBottom: theme.spacing(1),
// //   display: "flex",
// //   alignItems: "center",
// //   gap: theme.spacing(1),
// //   cursor: "pointer", // Adicionado para analytics
// //   transition: "color 0.3s ease",
// //   "&:hover": {
// //     color: theme.palette.secondary.main,
// //   },
// // }));

// // const ProjectsSection: FC = () => {
// //   const { sectionRef } = useTabAnalytics("projects");

// //   // Analytics: Rastrear visualização da página de projetos e tempo gasto
// //   useEffect(() => {
// //     // Rastreia quando a página de projetos é carregada
// //     trackProfileTabView("projects", {
// //       user_agent: navigator.userAgent,
// //       referrer: document.referrer,
// //       screen_resolution: `${window.screen.width}x${window.screen.height}`,
// //       device_type: window.innerWidth < 768 ? "mobile" : "desktop",
// //     });

// //     // Marca o tempo de início para calcular tempo gasto
// //     const currentStartTime = Date.now();

// //     // Cleanup: rastreia tempo gasto quando o usuário sair da página
// //     return () => {
// //       const timeSpent = Math.floor((Date.now() - currentStartTime) / 1000);
// //       trackProfileTabTimeSpent("projects", timeSpent);
// //     };
// //   }, []);

// //   // Funções de analytics para diferentes interações
// //   const handleProjectCardClick = (
// //     projectTitle: string,
// //     projectType: string
// //   ) => {
// //     trackProfileTabInteraction(
// //       "projects",
// //       "project_card_click",
// //       `${projectType}_${projectTitle}`
// //     );
// //     // Interesse profundo em projeto específico pode indicar interesse real
// //     trackProfileConversion("project_interest", "projects");
// //   };

// //   const handleConfidentialBadgeClick = (projectTitle: string) => {
// //     trackProfileTabInteraction(
// //       "projects",
// //       "confidential_badge_click",
// //       projectTitle
// //     );
// //   };

// //   const handleMetricChipClick = (metric: string, projectTitle: string) => {
// //     trackProfileTabInteraction(
// //       "projects",
// //       "metric_chip_click",
// //       `${metric}_${projectTitle}`
// //     );
// //     // Interesse em métricas específicas indica foco em resultados
// //     if (
// //       metric.includes("↓") ||
// //       metric.includes("M+") ||
// //       metric.includes("k+")
// //     ) {
// //       trackProfileConversion("results_focused_interest", "projects");
// //     }
// //   };

// //   const handleTechChipClick = (tech: string, projectTitle: string) => {
// //     trackProfileTabInteraction(
// //       "projects",
// //       "tech_stack_click",
// //       `${tech}_${projectTitle}`
// //     );
// //     // Interesse em tecnologias específicas indica fit técnico
// //     if (
// //       [
// //         "IA Generativa",
// //         ".NET",
// //         "React",
// //         "TypeScript",
// //         "Microsserviços",
// //       ].includes(tech)
// //     ) {
// //       trackProfileConversion("tech_stack_match", "projects");
// //     }
// //   };

// //   const handleResultItemClick = (resultIndex: number, projectTitle: string) => {
// //     trackProfileTabInteraction(
// //       "projects",
// //       "result_item_click",
// //       `result_${resultIndex}_${projectTitle}`
// //     );
// //   };

// //   const handleAlertBoxClick = () => {
// //     trackProfileTabInteraction(
// //       "projects",
// //       "confidentiality_alert_click",
// //       "understanding_constraints"
// //     );
// //   };

// //   const handleOpenSourceSectionClick = () => {
// //     trackProfileTabInteraction(
// //       "projects",
// //       "open_source_section_click",
// //       "future_projects"
// //     );
// //   };

// //   const handleFutureProjectClick = (projectName: string) => {
// //     trackProfileTabInteraction(
// //       "projects",
// //       "future_project_interest",
// //       projectName
// //     );
// //     // Interesse em projetos futuros indica engajamento de longo prazo
// //     trackProfileConversion("future_collaboration_interest", "projects");
// //   };

// //   const handleInterviewDiscussionClick = () => {
// //     trackProfileTabInteraction(
// //       "projects",
// //       "interview_discussion_click",
// //       "technical_details"
// //     );
// //     // Interesse em discussão técnica indica intenção de entrevista
// //     trackProfileConversion("interview_preparation", "projects");
// //   };

// //   const handleInterviewTopicClick = (topic: string) => {
// //     trackProfileTabInteraction("projects", "interview_topic_click", topic);
// //   };

// //   const projects = [
// //     {
// //       title: "Hub de Integração Educacional Enterprise",
// //       icon: <IntegrationInstructionsIcon fontSize="large" />,
// //       description:
// //         "Plataforma de integração conectando 2.000+ instituições de ensino via APIs robustas e sincronização em tempo real.",
// //       confidential: true,
// //       metrics: ["2k+ escolas", "1M+ alunos", "60% ↓ tempo", "70% ↓ erros"],
// //       results: [
// //         "Redução de 60% no tempo de processamento administrativo;",
// //         "Diminuição de 70% em erros de sincronização;",
// //         "Centralização de dados de 1+ milhão de alunos;",
// //         "Economia de 200+ horas mensais de trabalho manual.",
// //       ],
// //       techStack: [
// //         ".NET",
// //         "React",
// //         "TypeScript",
// //         "Microsserviços",
// //         "PostgreSQL",
// //         "API RESTful",
// //       ],
// //       type: "integration_hub",
// //     },
// //     {
// //       title: "Sistema de Avaliação com IA Generativa",
// //       icon: <EditNoteIcon fontSize="large" />,
// //       description:
// //         "Plataforma educacional com IA para criação de temas, ambiente de escrita e correção automatizada de redações.",
// //       confidential: true,
// //       metrics: [
// //         "IA Generativa",
// //         "Milhares/dia",
// //         "Feedback detalhado",
// //         "Análise NLP",
// //       ],
// //       results: [
// //         "Redução significativa no tempo de correção;",
// //         "Aumento na qualidade do feedback pedagógico;",
// //         "Análise avançada de padrões de escrita;",
// //         "Processamento de milhares de redações diárias.",
// //       ],
// //       techStack: [
// //         "C#",
// //         ".NET",
// //         "React",
// //         "PostgreSQL",
// //         "Docker",
// //         "IA Generativa",
// //         "CI/CD",
// //         "GCP",
// //       ],
// //       type: "ai_evaluation",
// //     },
// //     {
// //       title: "Automação Google Workspace (RPA)",
// //       icon: <ArchitectureIcon fontSize="large" />,
// //       description:
// //         "Sistema automatizado para gerenciamento de domínio Google Workspace usando RPA para administração em larga escala.",
// //       confidential: true,
// //       metrics: [
// //         "25+ tarefas",
// //         "90% ↓ erros",
// //         "Auditoria diária",
// //         "Provisionamento automático",
// //       ],
// //       results: [
// //         "Automação de 25+ tarefas administrativas recorrentes;",
// //         "Diminuição de erros humanos;",
// //         "Auditorias automáticas de segurança diárias;",
// //         "Redução drástica em tempo de provisionamento.",
// //       ],
// //       techStack: [
// //         "C#",
// //         "CQRS",
// //         "Google Admin SDK",
// //         "Google Classroom API",
// //         "Google Drive API",
// //         "OAuth 2.0",
// //         "DDD",
// //         "Event Sourcing",
// //       ],
// //       type: "rpa_automation",
// //     },
// //     {
// //       title: "Plataforma de Avaliações Educacionais (2M+ registros)",
// //       icon: <IntegrationInstructionsIcon fontSize="large" />,
// //       description:
// //         "Solução de alta performance para processamento e correção automática de avaliações em escala, com arquitetura resiliente.",
// //       confidential: true,
// //       metrics: [
// //         "2M+ avaliações",
// //         "85% ↓ tempo",
// //         "95% precisão",
// //         "5 dias ciclo",
// //       ],
// //       results: [
// //         "Redução de 85% no tempo: 3 semanas → 5 dias;",
// //         "Diminuição de 93% em erros de sincronização;",
// //         "Sistema centralizado com 1.2M+ alunos;",
// //         "Redução de 78% em intervenções manuais.",
// //       ],
// //       techStack: [
// //         ".NET",
// //         "React",
// //         "TypeScript",
// //         "Microsserviços",
// //         "SQL Server",
// //         "OCR",
// //       ],
// //       type: "evaluation_platform",
// //     },
// //   ];

// //   return (
// //     <Container
// //       sx={{ py: 8 }}
// //       id="projects"
// //       component="section"
// //       ref={sectionRef}
// //     >
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
// //           // Projetos
// //         </Typography>

// //         {/* Alerta sobre Confidencialidade */}
// //         <AlertBox onClick={handleAlertBoxClick}>
// //           <WarningIcon sx={{ color: "#ffc107", mt: 0.2 }} />
// //           <Box>
// //             <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
// //               Projetos Confidenciais
// //             </Typography>
// //             <Typography
// //               variant="body2"
// //               sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
// //             >
// //               Os projetos foram desenvolvidos em ambiente corporativo com
// //               acordos de confidencialidade. Detalhes técnicos e resultados são
// //               apresentados de forma anonimizada, priorizando soluções
// //               implementadas e impacto gerado.
// //             </Typography>
// //           </Box>
// //         </AlertBox>

// //         {/* Lista de Projetos */}
// //         {projects.map((project, index) => (
// //           <motion.div
// //             key={index}
// //             whileHover={{ scale: 1.01 }}
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: index * 0.1 }}
// //             viewport={{ once: true }}
// //           >
// //             <ProjectCard
// //               onClick={() =>
// //                 handleProjectCardClick(project.title, project.type)
// //               }
// //             >
// //               <ProjectHeader>
// //                 <ProjectTitleBox>
// //                   <ProjectIcon>{project.icon}</ProjectIcon>
// //                   <Box>
// //                     <ProjectTitle>{project.title}</ProjectTitle>
// //                     {project.confidential && (
// //                       <ConfidentialBadge
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           handleConfidentialBadgeClick(project.title);
// //                         }}
// //                       >
// //                         <LockIcon sx={{ fontSize: 14 }} />
// //                         Confidencial
// //                       </ConfidentialBadge>
// //                     )}
// //                   </Box>
// //                 </ProjectTitleBox>
// //               </ProjectHeader>

// //               <Typography
// //                 variant="body2"
// //                 sx={{ mb: 2, fontSize: "0.9rem", lineHeight: 1.5 }}
// //               >
// //                 {project.description}
// //               </Typography>

// //               {/* Métricas em Chips */}
// //               <Box sx={{ mb: 2 }}>
// //                 <Typography
// //                   variant="caption"
// //                   sx={{
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     color: "text.secondary",
// //                     mb: 1,
// //                     display: "block",
// //                   }}
// //                 >
// //                   // Métricas principais:
// //                 </Typography>
// //                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
// //                   {project.metrics.map((metric, idx) => (
// //                     <MetricChip
// //                       key={idx}
// //                       label={metric}
// //                       size="small"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleMetricChipClick(metric, project.title);
// //                       }}
// //                     />
// //                   ))}
// //                 </Box>
// //               </Box>

// //               {/* Resultados Compactos */}
// //               <Box sx={{ mb: 2, pl: 1 }}>
// //                 <Typography
// //                   variant="caption"
// //                   sx={{
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     color: "secondary.main",
// //                     fontWeight: 500,
// //                     mb: 1,
// //                     display: "flex",
// //                     alignItems: "center",
// //                     gap: 0.5,
// //                   }}
// //                 >
// //                   <SpeedIcon sx={{ fontSize: 16 }} />
// //                   Resultados:
// //                 </Typography>
// //                 {project.results.slice(0, 4).map((result, idx) => (
// //                   <ResultItem
// //                     key={idx}
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleResultItemClick(idx, project.title);
// //                     }}
// //                   >
// //                     {result}
// //                   </ResultItem>
// //                 ))}
// //                 {project.results.length > 4 && (
// //                   <Typography
// //                     variant="caption"
// //                     sx={{ color: "text.secondary", ml: 2, fontSize: "0.75rem" }}
// //                   >
// //                     +{project.results.length - 2} outros resultados
// //                   </Typography>
// //                 )}
// //               </Box>

// //               {/* Stack Tecnológica */}
// //               <Box>
// //                 <Typography
// //                   variant="caption"
// //                   sx={{
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     color: "text.secondary",
// //                     mb: 1,
// //                     display: "block",
// //                   }}
// //                 >
// //                   // Stack:
// //                 </Typography>
// //                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
// //                   {project.techStack.map((tech, idx) => (
// //                     <TechChip
// //                       key={idx}
// //                       label={tech}
// //                       size="small"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleTechChipClick(tech, project.title);
// //                       }}
// //                     />
// //                   ))}
// //                 </Box>
// //               </Box>
// //             </ProjectCard>
// //           </motion.div>
// //         ))}

// //         <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

// //         {/* Seção de Projetos Demonstráveis - URGENTE */}
// //         <CompactCard onClick={handleOpenSourceSectionClick}>
// //           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
// //             <GitHubIcon sx={{ color: "secondary.main", mr: 1 }} />
// //             <Typography
// //               variant="h6"
// //               sx={{
// //                 color: "secondary.main",
// //                 fontFamily: '"Roboto Mono", monospace',
// //               }}
// //             >
// //               // Projetos Open Source (Em Desenvolvimento)
// //             </Typography>
// //           </Box>

// //           <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
// //             Estou desenvolvendo projetos demonstráveis que complementarão este
// //             portfólio:
// //           </Typography>

// //           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
// //             <ActionButton
// //               variant="outlined"
// //               startIcon={<CodeIcon />}
// //               disabled
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 handleFutureProjectClick("sistema_gestao_fullstack");
// //               }}
// //             >
// //               Sistema de Gestão Full-Stack
// //             </ActionButton>
// //             <ActionButton
// //               variant="outlined"
// //               startIcon={<ArchitectureIcon />}
// //               disabled
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 handleFutureProjectClick("microservicos_docker");
// //               }}
// //             >
// //               Microsserviços + Docker
// //             </ActionButton>
// //             <ActionButton
// //               variant="outlined"
// //               startIcon={<LaunchIcon />}
// //               disabled
// //               onClick={(e) => {
// //                 e.stopPropagation();
// //                 handleFutureProjectClick("dashboard_data_science");
// //               }}
// //             >
// //               Dashboard com Data Science
// //             </ActionButton>
// //           </Box>

// //           <Typography
// //             variant="caption"
// //             sx={{
// //               color: "text.secondary",
// //               fontStyle: "italic",
// //               fontSize: "0.8rem",
// //             }}
// //           >
// //             * Projetos em desenvolvimento para demonstração de competências
// //             técnicas sem restrições de confidencialidade. Previsão: próximas
// //             semanas.
// //           </Typography>
// //         </CompactCard>

// //         {/* Abordagem para Entrevistas */}
// //         <CompactCard onClick={handleInterviewDiscussionClick}>
// //           <Typography
// //             variant="h6"
// //             sx={{
// //               color: "secondary.main",
// //               mb: 2,
// //               fontFamily: '"Roboto Mono", monospace',
// //             }}
// //           >
// //             // Discussão Técnica em Entrevistas
// //           </Typography>

// //           <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
// //             Posso detalhar em entrevistas (respeitando confidencialidade):
// //           </Typography>

// //           <Box
// //             sx={{
// //               display: "grid",
// //               gridTemplateColumns: "1fr",
// //               gap: 0.5,
// //               md: {
// //                 gridTemplateColumns: "repeat(2, 1fr)",
// //               },
// //             }}
// //           >
// //             <Box>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleInterviewTopicClick("technical_challenges_solutions");
// //                 }}
// //               >
// //                 ▸ Desafios técnicos e estratégias de solução;
// //               </SkillItem>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleInterviewTopicClick("architecture_decisions_tradeoffs");
// //                 }}
// //               >
// //                 ▸ Decisões de arquitetura e trade-offs;
// //               </SkillItem>
// //             </Box>
// //             <Box>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleInterviewTopicClick(
// //                     "methodologies_engineering_practices"
// //                   );
// //                 }}
// //               >
// //                 ▸ Metodologias e práticas de engenharia;
// //               </SkillItem>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleInterviewTopicClick(
// //                     "lessons_learned_technical_evolution"
// //                   );
// //                 }}
// //               >
// //                 ▸ Lições aprendidas e evolução técnica.
// //               </SkillItem>
// //             </Box>
// //           </Box>
// //         </CompactCard>
// //       </motion.div>
// //     </Container>
// //   );
// // };

// // export default ProjectsSection;

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// import type { FC } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Chip,
//   Divider,
//   Card,
//   Button,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import SpeedIcon from "@mui/icons-material/Speed";
// import ArchitectureIcon from "@mui/icons-material/Architecture";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import LockIcon from "@mui/icons-material/Lock";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LaunchIcon from "@mui/icons-material/Launch";
// import CodeIcon from "@mui/icons-material/Code";
// import WarningIcon from "@mui/icons-material/Warning";

// const ProjectCard = styled(motion.div)(({ theme }) => ({
//   padding: theme.spacing(2.5),
//   marginBottom: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//   borderRadius: 8,
//   position: "relative",
//   transition: "all 0.3s ease",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "2px",
//     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//     opacity: 0.7,
//   },
//   "&:hover": {
//     transform: "translateY(-5px)",
//     borderColor: theme.palette.secondary.main,
//   },
// }));

// const CompactCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(2.5),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   marginBottom: theme.spacing(2),
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-2px)",
//     borderColor: theme.palette.secondary.main,
//   },
// }));

// const ProjectHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   marginBottom: theme.spacing(2),
//   flexWrap: "wrap",
//   gap: theme.spacing(1),
// }));

// const ProjectTitleBox = styled(Box)(() => ({
//   display: "flex",
//   alignItems: "flex-start",
//   gap: 16,
//   flex: 1,
// }));

// const ProjectIcon = styled(Box)(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flexShrink: 0,
// }));

// const ProjectTitle = styled(Typography)(({ theme }) => ({
//   fontWeight: 600,
//   color: theme.palette.text.primary,
//   fontSize: "1.1rem",
//   lineHeight: 1.3,
// }));

// const ConfidentialBadge = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(0.5),
//   fontSize: "0.75rem",
//   color: theme.palette.text.secondary,
//   backgroundColor: "rgba(255, 193, 7, 0.1)",
//   border: "1px solid rgba(255, 193, 7, 0.3)",
//   padding: theme.spacing(0.5, 1),
//   borderRadius: theme.spacing(3),
//   marginTop: theme.spacing(1),
//   width: "fit-content",
// }));

// const MetricChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.25),
//   backgroundColor: "rgba(0, 229, 255, 0.1)",
//   color: theme.palette.secondary.main,
//   border: "1px solid rgba(0, 229, 255, 0.3)",
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.7rem",
//   height: 20,
//   "& .MuiChip-label": {
//     padding: "0 6px",
//   },
// }));

// const TechChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.25),
//   backgroundColor: "rgba(20, 40, 80, 0.6)",
//   color: theme.palette.text.primary,
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.7rem",
//   height: 22,
// }));

// const ResultItem = styled(Typography)(({ theme }) => ({
//   fontSize: "0.85rem",
//   marginBottom: theme.spacing(0.5),
//   color: theme.palette.text.primary,
//   display: "flex",
//   alignItems: "flex-start",
//   gap: theme.spacing(1),
//   "&::before": {
//     content: '"▸"',
//     color: theme.palette.secondary.main,
//     fontWeight: "bold",
//     flexShrink: 0,
//   },
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.75rem",
//   textTransform: "none",
//   borderRadius: theme.spacing(3),
//   padding: theme.spacing(0.5, 1.5),
//   margin: theme.spacing(0.25),
//   border: "1px solid rgba(255, 255, 255, 0.2)",
//   "&:hover": {
//     borderColor: theme.palette.secondary.main,
//     backgroundColor: "rgba(0, 229, 255, 0.1)",
//   },
// }));

// const AlertBox = styled(Box)(({ theme }) => ({
//   background: "rgba(255, 193, 7, 0.1)",
//   border: "1px solid rgba(255, 193, 7, 0.3)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   marginBottom: theme.spacing(3),
//   display: "flex",
//   alignItems: "flex-start",
//   gap: theme.spacing(2),
// }));

// const SkillItem = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: "#f0f0f0",
//   marginBottom: theme.spacing(1),
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
//   "&:hover": {
//     color: theme.palette.secondary.main,
//   },
// }));

// const ProjectsSection: FC = () => {
//   const projects = [
//     {
//       title: "Hub de Integração Educacional Enterprise",
//       icon: <IntegrationInstructionsIcon fontSize="large" />,
//       description:
//         "Plataforma de integração conectando 2.000+ instituições de ensino via APIs robustas e sincronização em tempo real.",
//       confidential: true,
//       metrics: ["2k+ escolas", "1M+ alunos", "60% ↓ tempo", "70% ↓ erros"],
//       results: [
//         "Redução de 60% no tempo de processamento administrativo;",
//         "Diminuição de 70% em erros de sincronização;",
//         "Centralização de dados de 1+ milhão de alunos;",
//         "Economia de 200+ horas mensais de trabalho manual.",
//       ],
//       techStack: [
//         ".NET",
//         "React",
//         "TypeScript",
//         "Microsserviços",
//         "PostgreSQL",
//         "API RESTful",
//       ],
//     },
//     {
//       title: "Sistema de Avaliação com IA Generativa",
//       icon: <EditNoteIcon fontSize="large" />,
//       description:
//         "Plataforma educacional com IA para criação de temas, ambiente de escrita e correção automatizada de redações.",
//       confidential: true,
//       metrics: [
//         "IA Generativa",
//         "Milhares/dia",
//         "Feedback detalhado",
//         "Análise NLP",
//       ],
//       results: [
//         "Redução significativa no tempo de correção;",
//         "Aumento na qualidade do feedback pedagógico;",
//         "Análise avançada de padrões de escrita;",
//         "Processamento de milhares de redações diárias.",
//       ],
//       techStack: [
//         "C#",
//         ".NET",
//         "React",
//         "PostgreSQL",
//         "Docker",
//         "IA Generativa",
//         "CI/CD",
//         "GCP",
//       ],
//     },
//     {
//       title: "Automação Google Workspace (RPA)",
//       icon: <ArchitectureIcon fontSize="large" />,
//       description:
//         "Sistema automatizado para gerenciamento de domínio Google Workspace usando RPA para administração em larga escala.",
//       confidential: true,
//       metrics: [
//         "25+ tarefas",
//         "90% ↓ erros",
//         "Auditoria diária",
//         "Provisionamento automático",
//       ],
//       results: [
//         "Automação de 25+ tarefas administrativas recorrentes;",
//         "Diminuição de erros humanos;",
//         "Auditorias automáticas de segurança diárias;",
//         "Redução drástica em tempo de provisionamento.",
//       ],
//       techStack: [
//         "C#",
//         "CQRS",
//         "Google Admin SDK",
//         "Google Classroom API",
//         "Google Drive API",
//         "OAuth 2.0",
//         "DDD",
//         "Event Sourcing",
//       ],
//     },
//     {
//       title: "Plataforma de Avaliações Educacionais (2M+ registros)",
//       icon: <IntegrationInstructionsIcon fontSize="large" />,
//       description:
//         "Solução de alta performance para processamento e correção automática de avaliações em escala, com arquitetura resiliente.",
//       confidential: true,
//       metrics: [
//         "2M+ avaliações",
//         "85% ↓ tempo",
//         "95% precisão",
//         "5 dias ciclo",
//       ],
//       results: [
//         "Redução de 85% no tempo: 3 semanas → 5 dias;",
//         "Diminuição de 93% em erros de sincronização;",
//         "Sistema centralizado com 1.2M+ alunos;",
//         "Redução de 78% em intervenções manuais.",
//       ],
//       techStack: [
//         ".NET",
//         "React",
//         "TypeScript",
//         "Microsserviços",
//         "SQL Server",
//         "OCR",
//       ],
//     },
//   ];

//   return (
//     <Container sx={{ py: 8 }} id="projects">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
//           // Projetos
//         </Typography>

//         {/* Alerta sobre Confidencialidade */}
//         <AlertBox>
//           <WarningIcon sx={{ color: "#ffc107", mt: 0.2 }} />
//           <Box>
//             <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
//               Projetos Confidenciais
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
//             >
//               Os projetos foram desenvolvidos em ambiente corporativo com
//               acordos de confidencialidade. Detalhes técnicos e resultados são
//               apresentados de forma anonimizada, priorizando soluções
//               implementadas e impacto gerado.
//             </Typography>
//           </Box>
//         </AlertBox>

//         {/* Lista de Projetos */}
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.01 }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <ProjectCard>
//               <ProjectHeader>
//                 <ProjectTitleBox>
//                   <ProjectIcon>{project.icon}</ProjectIcon>
//                   <Box>
//                     <ProjectTitle>{project.title}</ProjectTitle>
//                     {project.confidential && (
//                       <ConfidentialBadge>
//                         <LockIcon sx={{ fontSize: 14 }} />
//                         Confidencial
//                       </ConfidentialBadge>
//                     )}
//                   </Box>
//                 </ProjectTitleBox>
//               </ProjectHeader>

//               <Typography
//                 variant="body2"
//                 sx={{ mb: 2, fontSize: "0.9rem", lineHeight: 1.5 }}
//               >
//                 {project.description}
//               </Typography>

//               {/* Métricas em Chips */}
//               <Box sx={{ mb: 2 }}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "text.secondary",
//                     mb: 1,
//                     display: "block",
//                   }}
//                 >
//                   // Métricas principais:
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                   {project.metrics.map((metric, idx) => (
//                     <MetricChip key={idx} label={metric} size="small" />
//                   ))}
//                 </Box>
//               </Box>

//               {/* Resultados Compactos */}
//               <Box sx={{ mb: 2, pl: 1 }}>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "secondary.main",
//                     fontWeight: 500,
//                     mb: 1,
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 0.5,
//                   }}
//                 >
//                   <SpeedIcon sx={{ fontSize: 16 }} />
//                   Resultados:
//                 </Typography>
//                 {project.results.slice(0, 4).map((result, idx) => (
//                   <ResultItem key={idx}>{result}</ResultItem>
//                 ))}
//                 {project.results.length > 4 && (
//                   <Typography
//                     variant="caption"
//                     sx={{ color: "text.secondary", ml: 2, fontSize: "0.75rem" }}
//                   >
//                     +{project.results.length - 2} outros resultados
//                   </Typography>
//                 )}
//               </Box>

//               {/* Stack Tecnológica */}
//               <Box>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "text.secondary",
//                     mb: 1,
//                     display: "block",
//                   }}
//                 >
//                   // Stack:
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                   {project.techStack.map((tech, idx) => (
//                     <TechChip key={idx} label={tech} size="small" />
//                   ))}
//                 </Box>
//               </Box>
//             </ProjectCard>
//           </motion.div>
//         ))}

//         <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//         {/* Seção de Projetos Demonstráveis - URGENTE */}
//         <CompactCard>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <GitHubIcon sx={{ color: "secondary.main", mr: 1 }} />
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "secondary.main",
//                 fontFamily: '"Roboto Mono", monospace',
//               }}
//             >
//               // Projetos Open Source (Em Desenvolvimento)
//             </Typography>
//           </Box>

//           <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
//             Estou desenvolvendo projetos demonstráveis que complementarão este
//             portfólio:
//           </Typography>

//           <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
//             <ActionButton variant="outlined" startIcon={<CodeIcon />} disabled>
//               Sistema de Gestão Full-Stack
//             </ActionButton>
//             <ActionButton
//               variant="outlined"
//               startIcon={<ArchitectureIcon />}
//               disabled
//             >
//               Microsserviços + Docker
//             </ActionButton>
//             <ActionButton
//               variant="outlined"
//               startIcon={<LaunchIcon />}
//               disabled
//             >
//               Dashboard com Data Science
//             </ActionButton>
//           </Box>

//           <Typography
//             variant="caption"
//             sx={{
//               color: "text.secondary",
//               fontStyle: "italic",
//               fontSize: "0.8rem",
//             }}
//           >
//             * Projetos em desenvolvimento para demonstração de competências
//             técnicas sem restrições de confidencialidade. Previsão: próximas
//             semanas.
//           </Typography>
//         </CompactCard>

//         {/* Abordagem para Entrevistas */}
//         <CompactCard>
//           <Typography
//             variant="h6"
//             sx={{
//               color: "secondary.main",
//               mb: 2,
//               fontFamily: '"Roboto Mono", monospace',
//             }}
//           >
//             // Discussão Técnica em Entrevistas
//           </Typography>

//           <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
//             Posso detalhar em entrevistas (respeitando confidencialidade):
//           </Typography>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: "1fr",
//               gap: 0.5,
//               md: {
//                 gridTemplateColumns: "repeat(2, 1fr)",
//               },
//             }}
//           >
//             <Box>
//               <SkillItem>
//                 ▸ Desafios técnicos e estratégias de solução;
//               </SkillItem>
//               <SkillItem>▸ Decisões de arquitetura e trade-offs;</SkillItem>
//             </Box>
//             <Box>
//               <SkillItem>▸ Metodologias e práticas de engenharia;</SkillItem>
//               <SkillItem>▸ Lições aprendidas e evolução técnica.</SkillItem>
//             </Box>
//           </Box>
//         </CompactCard>
//       </motion.div>
//     </Container>
//   );
// };

// export default ProjectsSection;
