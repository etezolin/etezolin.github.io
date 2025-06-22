import CircleIcon from "@mui/icons-material/Circle";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GitHubIcon from "@mui/icons-material/GitHub";
import SpeedIcon from "@mui/icons-material/Speed";
import { Box, Card, Chip, Container, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import type { FC } from "react";
import {
  trackProfileConversion,
  trackProfileTabInteraction,
} from "../../firebase";
import { useTypedTranslation } from "../../hooks/useTranslation";

const TerminalCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  marginBottom: theme.spacing(3),
  cursor: "pointer",
}));

const CompactCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2.5),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  marginBottom: theme.spacing(2),
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: theme.palette.secondary.main,
  },
}));

const TerminalHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const DotIcon = styled(CircleIcon)({
  fontSize: 12,
});

const CommandLine = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const OutputText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  lineHeight: 1.6,
  marginLeft: "25px !important",
  marginRight: "5px !important",
}));

const SkillItem = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: "#f0f0f0",
  marginBottom: theme.spacing(0.8),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontSize: "0.9rem",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const HighlightText = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 500,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.primary.main,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontSize: "1.1rem",
}));

const JobHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: theme.spacing(1),
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.secondary.main,
  fontWeight: 600,
  fontSize: "1rem",
}));

const JobPeriod = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.text.secondary,
  fontSize: "0.85rem",
}));

const MetricChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.25),
  backgroundColor: "rgba(0, 229, 255, 0.1)",
  color: theme.palette.secondary.main,
  border: "1px solid rgba(0, 229, 255, 0.3)",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.75rem",
  height: 24,
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(0, 229, 255, 0.2)",
    transform: "scale(1.05)",
  },
}));

const GitHubMetric = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  textAlign: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    background: "rgba(255, 255, 255, 0.08)",
    borderColor: theme.palette.secondary.main,
  },
}));

const GitHubImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const QuickFacts = styled(Box)(({ theme }) => ({
  background: "rgba(0, 229, 255, 0.05)",
  border: "1px solid rgba(0, 229, 255, 0.2)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  borderLeft: `4px solid ${theme.palette.secondary.main}`,
  cursor: "pointer",
}));

const Experience: FC = () => {
  const { t } = useTypedTranslation();

  const handleQuickFactsClick = () => {
    trackProfileTabInteraction(
      "experience",
      "quick_facts_section_click",
      "executive_summary"
    );
  };

  const handleMetricChipClick = (metric: string) => {
    trackProfileTabInteraction("experience", "metric_chip_click", metric);
  };

  const handleJobCardClick = (jobTitle: string, period: string) => {
    trackProfileTabInteraction(
      "experience",
      "job_card_click",
      `${jobTitle}_${period}`
    );
  };

  const handleSkillItemClick = (skillCategory: string, skillText: string) => {
    trackProfileTabInteraction(
      "experience",
      "skill_item_click",
      `${skillCategory}_${skillText}`
    );
  };

  const handleGitHubMetricClick = (metricType: string) => {
    trackProfileTabInteraction("experience", "github_metric_click", metricType);
    if (metricType.includes("profile") || metricType.includes("stats")) {
      trackProfileConversion("github_interest", "experience");
    }
  };

  const handleTechStackClick = (stackCategory: string) => {
    trackProfileTabInteraction("experience", "tech_stack_click", stackCategory);
  };

  const handleTerminalClick = () => {
    trackProfileTabInteraction(
      "experience",
      "terminal_section_click",
      "github_activity"
    );
  };

  return (
    <Container
      component="section"
      id="experience"
      sx={{ minHeight: "100vh", py: 8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
          {t("experienceTitle")}
        </Typography>

        {/* Resumo Executivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <QuickFacts onClick={handleQuickFactsClick}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <SpeedIcon sx={{ color: "secondary.main", mr: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  color: "secondary.main",
                }}
              >
                {t("executiveSummary")}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mb: 2,
              }}
            >
              <MetricChip
                label={t("yearsExperience")}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("4_years_experience");
                }}
              />
              <MetricChip
                label={t("recordsProcessed")}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("20M_records_processed");
                }}
              />
              <MetricChip
                label={t("timeReduction")}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("60_percent_time_reduction");
                }}
              />
              <MetricChip
                label={t("schoolsConnected")}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("2000_schools_connected");
                }}
              />
              <MetricChip
                label={t("concurrentUsers")}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("30k_concurrent_users");
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Roboto Mono", monospace',
                color: "text.primary",
                lineHeight: 1.6,
              }}
            >
              <HighlightText>{t("specialistIn")}</HighlightText> {t("specialistIn001")} |{" "}
              <HighlightText>{t("available")}</HighlightText> {t("availableLocation")} |{" "}
              <HighlightText>{t("focus")}</HighlightText> {t("focusArea")}
            </Typography>
          </QuickFacts>
        </motion.div>

        {/* Experiência Atual */}
        <motion.div whileHover={{ scale: 1.005 }}>
          <CompactCard
            onClick={() =>
              handleJobCardClick("current_job", "2021-present")
            }
          >
            <JobHeader>
              <Box>
                <JobTitle>{t("currentJobTitle")}</JobTitle>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: "0.9rem",
                  }}
                >
                  {t("currentJobDescription")}
                </Typography>
              </Box>
              <JobPeriod>{t("currentJobPeriod")}</JobPeriod>
            </JobHeader>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
              <MetricChip
                label=".NET"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("dotnet_tech");
                }}
              />
              <MetricChip
                label="React/TypeScript"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("react_typescript_tech");
                }}
              />
              <MetricChip
                label="Microsserviços"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("microservices_tech");
                }}
              />
              <MetricChip
                label="Google Cloud"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("google_cloud_tech");
                }}
              />
              <MetricChip
                label="PostgreSQL"
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("postgresql_tech");
                }}
              />
            </Box>

            <Box sx={{ pl: 2 }}>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick("current_job", "schools_integration");
                }}
              >
                🎯 <HighlightText>2.000+</HighlightText> {t("currentJobAchievement1")}
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick("current_job", "performance_improvement");
                }}
              >
                ⚡ <HighlightText>60%</HighlightText> {t("currentJobAchievement2")}
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick("current_job", "cloud_native_users");
                }}
              >
                🚀 {t("currentJobAchievement3")}{" "}
                <HighlightText>{t("currentJobAchievement3b")}</HighlightText>{" "}
                {t("currentJobAchievement3c")}{" "}
                <HighlightText>30k+</HighlightText> {t("currentJobAchievement3d")}
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick("current_job", "tech_modernization");
                }}
              >
                🔧 {t("currentJobAchievement4")}{" "}
                <HighlightText>{t("currentJobAchievement4b")}</HighlightText>{" "}
                {t("currentJobAchievement4c")}
              </SkillItem>
            </Box>
          </CompactCard>
        </motion.div>

        {/* Experiência Anterior */}
        <motion.div whileHover={{ scale: 1.005 }}>
          <CompactCard
            onClick={() =>
              handleJobCardClick("previous_job", "2015-2020")
            }
          >
            <JobHeader>
              <Box>
                <JobTitle>{t("previousJobTitle")}</JobTitle>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: "0.9rem",
                  }}
                >
                  {t("previousJobDescription")}
                </Typography>
              </Box>
              <JobPeriod>{t("previousJobPeriod")}</JobPeriod>
            </JobHeader>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
              <MetricChip
                label={t("technicalCommunication")}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("technical_communication");
                }}
              />
              <MetricChip
                label={t("mentoring")}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("mentoring");
                }}
              />
              <MetricChip
                label={t("problemSolving")}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("problem_solving");
                }}
              />
              <MetricChip
                label={t("criticalThinking")}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMetricChipClick("critical_thinking");
                }}
              />
            </Box>

            <Box sx={{ pl: 2 }}>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick("previous_job", "active_methodologies");
                }}
              >
                🎓 <HighlightText>{t("previousJobAchievement1")}</HighlightText>
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick("previous_job", "digital_solutions");
                }}
              >
                💡 <HighlightText>{t("previousJobAchievement2")}</HighlightText>
              </SkillItem>
              <SkillItem
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkillItemClick("previous_job", "strategic_transition");
                }}
              >
                🔄 <HighlightText>{t("previousJobAchievement3")}</HighlightText>
              </SkillItem>
            </Box>
          </CompactCard>
        </motion.div>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* GitHub Metrics */}
        <motion.div whileHover={{ scale: 1.01 }}>
          <TerminalCard onClick={handleTerminalClick}>
            <TerminalHeader>
              <DotIcon sx={{ color: "#ff5f56" }} />
              <DotIcon sx={{ color: "#ffbd2e" }} />
              <DotIcon sx={{ color: "#27c93f" }} />
            </TerminalHeader>

            <CommandLine>$ git log --graph --oneline</CommandLine>

            <SectionTitle variant="h6">
              <GitHubIcon sx={{ color: "secondary.main" }} />
              {t("developmentActivity")}
            </SectionTitle>

            <OutputText>
              {t("activityDescription")} <HighlightText>{t("consistency")}</HighlightText>{" "}
              {t("and")} <HighlightText>{t("discipline")}</HighlightText>{" "}
              {t("activityDescriptionEnd")}
            </OutputText>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 3,
                mt: 2,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GitHubMetric
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGitHubMetricClick("streak_stats");
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "secondary.main",
                      fontFamily: '"Roboto Mono", monospace',
                      mb: 1,
                      fontSize: "0.9rem",
                    }}
                  >
                    {t("commitStreak")}
                  </Typography>
                  <GitHubImage
                    src="https://streak-stats.demolab.com/?user=etezolin&theme=dark"
                    alt="GitHub Streak Stats"
                    loading="lazy"
                  />
                </GitHubMetric>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GitHubMetric
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGitHubMetricClick("profile_summary");
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "secondary.main",
                      fontFamily: '"Roboto Mono", monospace',
                      mb: 1,
                      fontSize: "0.9rem",
                    }}
                  >
                    {t("languagesActivity")}
                  </Typography>
                  <GitHubImage
                    src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=etezolin&theme=github_dark"
                    alt="GitHub Profile Summary"
                    loading="lazy"
                  />
                </GitHubMetric>
              </motion.div>
            </Box>

            <OutputText sx={{ mt: 2, fontSize: "0.85rem" }}>
              ✅ <HighlightText>{t("professionalismEvidence")}</HighlightText>{" "}
              {t("professionalismDescription")}
            </OutputText>
          </TerminalCard>
        </motion.div>

        <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Stack Tecnológica */}
        <motion.div whileHover={{ scale: 1.005 }}>
          <CompactCard>
            <CommandLine>{t("techStackTitle")}</CommandLine>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 3,
              }}
            >
              <Box onClick={() => handleTechStackClick("backend")}>
                <SectionTitle variant="h6">
                  <CodeIcon sx={{ color: "secondary.main", fontSize: 18 }} />
                  {t("backend")}
                </SectionTitle>
                <Box sx={{ pl: 2 }}>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("backend", "dotnet_csharp_dapper");
                    }}
                  >
                    • .NET/C# + Dapper;
                  </SkillItem>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("backend", "apis_restful_clean");
                    }}
                  >
                    • APIs RESTful + Clean Architecture;
                  </SkillItem>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("backend", "microservices_cqrs");
                    }}
                  >
                    • Microservices + CQRS;
                  </SkillItem>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("backend", "sql_server_postgresql");
                    }}
                  >
                    • SQL Server + PostgreSQL.
                  </SkillItem>
                </Box>
              </Box>

              <Box onClick={() => handleTechStackClick("frontend")}>
                <SectionTitle variant="h6">
                  <DesignServicesIcon
                    sx={{ color: "secondary.main", fontSize: 18 }}
                  />
                  {t("frontend")}
                </SectionTitle>
                <Box sx={{ pl: 2 }}>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("frontend", "react_typescript");
                    }}
                  >
                    • React + TypeScript;
                  </SkillItem>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("frontend", "material_ui_responsive");
                    }}
                  >
                    • Material-UI + Responsive Design;
                  </SkillItem>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("frontend", "state_management");
                    }}
                  >
                    • State Management (Redux/Context);
                  </SkillItem>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("frontend", "performance_optimization");
                    }}
                  >
                    • Performance Optimization.
                  </SkillItem>
                </Box>
              </Box>

              <Box onClick={() => handleTechStackClick("cloud_devops")}>
                <SectionTitle variant="h6">
                  <CloudIcon sx={{ color: "secondary.main", fontSize: 18 }} />
                  {t("cloudDevops")}
                </SectionTitle>
                <Box sx={{ pl: 2 }}>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("cloud_devops", "google_cloud_platform");
                    }}
                  >
                    • Google Cloud Platform;
                  </SkillItem>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("cloud_devops", "docker_kubernetes");
                    }}
                  >
                    • Docker + Kubernetes;
                  </SkillItem>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("cloud_devops", "cicd_pipelines");
                    }}
                  >
                    • CI/CD Pipelines;
                  </SkillItem>
                  <SkillItem
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSkillItemClick("cloud_devops", "infrastructure_as_code");
                    }}
                  >
                    • Infrastructure as Code.
                  </SkillItem>
                </Box>
              </Box>
            </Box>
          </CompactCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Experience;

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------


// import CircleIcon from "@mui/icons-material/Circle";
// import CloudIcon from "@mui/icons-material/Cloud";
// import CodeIcon from "@mui/icons-material/Code";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import SpeedIcon from "@mui/icons-material/Speed";
// import { Box, Card, Chip, Container, Divider, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import type { FC } from "react";

// // ✅ CORREÇÃO: Apenas as funções de analytics, sem o hook
// import {
//   trackProfileConversion,
//   trackProfileTabInteraction,
// } from "../../firebase";

// const TerminalCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   marginBottom: theme.spacing(3),
//   cursor: "pointer",
// }));

// const CompactCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(2.5),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   marginBottom: theme.spacing(2),
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   "&:hover": {
//     transform: "translateY(-2px)",
//     borderColor: theme.palette.secondary.main,
//   },
// }));

// const TerminalHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   gap: theme.spacing(1),
//   marginBottom: theme.spacing(2),
// }));

// const DotIcon = styled(CircleIcon)({
//   fontSize: 12,
// });

// const CommandLine = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.primary.main,
//   marginBottom: theme.spacing(2),
// }));

// const OutputText = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.primary,
//   marginBottom: theme.spacing(2),
//   lineHeight: 1.6,
//   marginLeft: "25px !important",
//   marginRight: "5px !important",
// }));

// const SkillItem = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: "#f0f0f0",
//   marginBottom: theme.spacing(0.8),
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
//   fontSize: "0.9rem",
//   cursor: "pointer",
//   "&:hover": {
//     color: theme.palette.secondary.main,
//   },
// }));

// const HighlightText = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   fontWeight: 500,
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.primary.main,
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(1),
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
//   fontSize: "1.1rem",
// }));

// const JobHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   marginBottom: theme.spacing(1),
//   flexWrap: "wrap",
//   gap: theme.spacing(1),
// }));

// const JobTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.secondary.main,
//   fontWeight: 600,
//   fontSize: "1rem",
// }));

// const JobPeriod = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.secondary,
//   fontSize: "0.85rem",
// }));

// const MetricChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.25),
//   backgroundColor: "rgba(0, 229, 255, 0.1)",
//   color: theme.palette.secondary.main,
//   border: "1px solid rgba(0, 229, 255, 0.3)",
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.75rem",
//   height: 24,
//   cursor: "pointer",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     backgroundColor: "rgba(0, 229, 255, 0.2)",
//     transform: "scale(1.05)",
//   },
// }));

// const GitHubMetric = styled(Box)(({ theme }) => ({
//   background: "rgba(255, 255, 255, 0.05)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   textAlign: "center",
//   transition: "all 0.3s ease",
//   cursor: "pointer",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     background: "rgba(255, 255, 255, 0.08)",
//     borderColor: theme.palette.secondary.main,
//   },
// }));

// const GitHubImage = styled("img")({
//   width: "100%",
//   height: "auto",
//   borderRadius: "8px",
//   transition: "transform 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.02)",
//   },
// });

// const QuickFacts = styled(Box)(({ theme }) => ({
//   background: "rgba(0, 229, 255, 0.05)",
//   border: "1px solid rgba(0, 229, 255, 0.2)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   marginBottom: theme.spacing(3),
//   borderLeft: `4px solid ${theme.palette.secondary.main}`,
//   cursor: "pointer",
// }));

// const Experience: FC = () => {
//   // ✅ CORREÇÃO: Removido o hook useTabAnalytics
//   // O tracking de visualização da aba agora é automático via App.tsx

//   // Funções de analytics para diferentes interações
//   const handleQuickFactsClick = () => {
//     trackProfileTabInteraction(
//       "experience",
//       "quick_facts_section_click",
//       "executive_summary"
//     );
//   };

//   const handleMetricChipClick = (metric: string) => {
//     trackProfileTabInteraction("experience", "metric_chip_click", metric);
//   };

//   const handleJobCardClick = (jobTitle: string, period: string) => {
//     trackProfileTabInteraction(
//       "experience",
//       "job_card_click",
//       `${jobTitle}_${period}`
//     );
//   };

//   const handleSkillItemClick = (skillCategory: string, skillText: string) => {
//     trackProfileTabInteraction(
//       "experience",
//       "skill_item_click",
//       `${skillCategory}_${skillText}`
//     );
//   };

//   const handleGitHubMetricClick = (metricType: string) => {
//     trackProfileTabInteraction("experience", "github_metric_click", metricType);
//     // Se clicou em métrica do GitHub, pode ser interesse em ver o perfil
//     if (metricType.includes("profile") || metricType.includes("stats")) {
//       trackProfileConversion("github_interest", "experience");
//     }
//   };

//   const handleTechStackClick = (stackCategory: string) => {
//     trackProfileTabInteraction("experience", "tech_stack_click", stackCategory);
//   };

//   const handleTerminalClick = () => {
//     trackProfileTabInteraction(
//       "experience",
//       "terminal_section_click",
//       "github_activity"
//     );
//   };

//   return (
//     <Container
//       component="section"
//       id="experience"
//       // ✅ CORREÇÃO: Removido ref={sectionRef}
//       sx={{ minHeight: "100vh", py: 8 }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
//           // Experiência
//         </Typography>

//         {/* Quick Facts - Nova seção */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <QuickFacts onClick={handleQuickFactsClick}>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <SpeedIcon sx={{ color: "secondary.main", mr: 1 }} />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontFamily: '"Roboto Mono", monospace',
//                   color: "secondary.main",
//                 }}
//               >
//                 // Resumo Executivo
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 1,
//                 mb: 2,
//               }}
//             >
//               <MetricChip
//                 label="4+ anos experiência"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("4_years_experience");
//                 }}
//               />
//               <MetricChip
//                 label="20M+ registros processados"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("20M_records_processed");
//                 }}
//               />
//               <MetricChip
//                 label="60% redução tempo"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("60_percent_time_reduction");
//                 }}
//               />
//               <MetricChip
//                 label="2000+ escolas conectadas"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("2000_schools_connected");
//                 }}
//               />
//               <MetricChip
//                 label="30k+ usuários simultâneos"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("30k_concurrent_users");
//                 }}
//               />
//             </Box>
//             <Typography
//               variant="body2"
//               sx={{
//                 fontFamily: '"Roboto Mono", monospace',
//                 color: "text.primary",
//                 lineHeight: 1.6,
//               }}
//             >
//               <HighlightText>Especialista em:</HighlightText> .NET/C#,
//               React/TypeScript, Arquitetura Cloud |
//               <HighlightText> Disponível:</HighlightText> Remoto/Curitiba |
//               <HighlightText> Foco:</HighlightText> Sistemas enterprise
//               escaláveis
//             </Typography>
//           </QuickFacts>
//         </motion.div>

//         {/* Experiência Profissional - Versão Condensada */}
//         <motion.div whileHover={{ scale: 1.005 }}>
//           <CompactCard
//             onClick={() =>
//               handleJobCardClick(
//                 "Desenvolvedor Full-Stack Secretaria Educação PR",
//                 "2021-Presente"
//               )
//             }
//           >
//             <JobHeader>
//               <Box>
//                 <JobTitle>
//                   Desenvolvedor Full-Stack | Secretaria de Educação PR
//                 </JobTitle>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "text.secondary",
//                     fontFamily: '"Roboto Mono", monospace',
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   Desenvolvimento de soluções educacionais integradas de alto
//                   impacto.
//                 </Typography>
//               </Box>
//               <JobPeriod>2021 - Presente</JobPeriod>
//             </JobHeader>

//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
//               <MetricChip
//                 label=".NET"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("dotnet_tech");
//                 }}
//               />
//               <MetricChip
//                 label="React/TypeScript"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("react_typescript_tech");
//                 }}
//               />
//               <MetricChip
//                 label="Microsserviços"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("microservices_tech");
//                 }}
//               />
//               <MetricChip
//                 label="Google Cloud"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("google_cloud_tech");
//                 }}
//               />
//               <MetricChip
//                 label="PostgreSQL"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("postgresql_tech");
//                 }}
//               />
//             </Box>

//             <Box sx={{ pl: 2 }}>
//               <SkillItem
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleSkillItemClick(
//                     "current_job",
//                     "2000_schools_integration"
//                   );
//                 }}
//               >
//                 🎯 <HighlightText>2.000+ escolas estaduais</HighlightText>{" "}
//                 conectadas via hub de integração;
//               </SkillItem>
//               <SkillItem
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleSkillItemClick(
//                     "current_job",
//                     "60_percent_performance_improvement"
//                   );
//                 }}
//               >
//                 ⚡ <HighlightText>60% redução</HighlightText> no tempo de
//                 processamento de dados administrativos;
//               </SkillItem>
//               <SkillItem
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleSkillItemClick("current_job", "cloud_native_30k_users");
//                 }}
//               >
//                 🚀 Sistemas <HighlightText>cloud-native</HighlightText>{" "}
//                 suportando <HighlightText>30k+ usuários</HighlightText>{" "}
//                 simultâneos;
//               </SkillItem>
//               <SkillItem
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleSkillItemClick(
//                     "current_job",
//                     "tech_modernization_architecture"
//                   );
//                 }}
//               >
//                 🔧 Arquitetura e implementação de{" "}
//                 <HighlightText>modernização tecnológica</HighlightText>{" "}
//                 estadual.
//               </SkillItem>
//             </Box>
//           </CompactCard>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.005 }}>
//           <CompactCard
//             onClick={() =>
//               handleJobCardClick("Professor Transição Tech", "2015-2020")
//             }
//           >
//             <JobHeader>
//               <Box>
//                 <JobTitle>Professor + Transição para Tech</JobTitle>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "text.secondary",
//                     fontFamily: '"Roboto Mono", monospace',
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   Formação em soft skills + descoberta da programação.
//                 </Typography>
//               </Box>
//               <JobPeriod>2015 - 2020</JobPeriod>
//             </JobHeader>

//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
//               <MetricChip
//                 label="Comunicação Técnica"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("technical_communication");
//                 }}
//               />
//               <MetricChip
//                 label="Mentoria"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("mentoring");
//                 }}
//               />
//               <MetricChip
//                 label="Resolução de Problemas"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("problem_solving");
//                 }}
//               />
//               <MetricChip
//                 label="Pensamento Crítico"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleMetricChipClick("critical_thinking");
//                 }}
//               />
//             </Box>

//             <Box sx={{ pl: 2 }}>
//               <SkillItem
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleSkillItemClick("previous_job", "active_methodologies");
//                 }}
//               >
//                 🎓 <HighlightText>Metodologias ativas</HighlightText> → aumento
//                 no engajamento estudantil;
//               </SkillItem>
//               <SkillItem
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleSkillItemClick(
//                     "previous_job",
//                     "digital_solutions_programming_interest"
//                   );
//                 }}
//               >
//                 💡 <HighlightText>Soluções digitais improvisadas</HighlightText>{" "}
//                 → despertar interesse pela programação;
//               </SkillItem>
//               <SkillItem
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleSkillItemClick(
//                     "previous_job",
//                     "strategic_transition_tech"
//                   );
//                 }}
//               >
//                 🔄 <HighlightText>Transição estratégica:</HighlightText>{" "}
//                 Filosofia + Educação → Tecnologia + ADS.
//               </SkillItem>
//             </Box>
//           </CompactCard>
//         </motion.div>

//         <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//         {/* GitHub Metrics - Versão Compacta */}
//         <motion.div whileHover={{ scale: 1.01 }}>
//           <TerminalCard onClick={handleTerminalClick}>
//             <TerminalHeader>
//               <DotIcon sx={{ color: "#ff5f56" }} />
//               <DotIcon sx={{ color: "#ffbd2e" }} />
//               <DotIcon sx={{ color: "#27c93f" }} />
//             </TerminalHeader>

//             <CommandLine>$ git log --graph --oneline</CommandLine>

//             <SectionTitle variant="h6">
//               <GitHubIcon sx={{ color: "secondary.main" }} />
//               Atividade de Desenvolvimento
//             </SectionTitle>

//             <OutputText>
//               Demonstração de <HighlightText>consistência</HighlightText> e{" "}
//               <HighlightText>disciplina</HighlightText> no desenvolvimento
//               através de métricas objetivas:
//             </OutputText>

//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
//                 gap: 3,
//                 mt: 2,
//               }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <GitHubMetric
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleGitHubMetricClick("streak_stats");
//                   }}
//                 >
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       color: "secondary.main",
//                       fontFamily: '"Roboto Mono", monospace',
//                       mb: 1,
//                       fontSize: "0.9rem",
//                     }}
//                   >
//                     Sequência de Commits
//                   </Typography>
//                   <GitHubImage
//                     src="https://streak-stats.demolab.com/?user=etezolin&theme=dark"
//                     alt="GitHub Streak Stats"
//                     loading="lazy"
//                   />
//                 </GitHubMetric>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <GitHubMetric
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleGitHubMetricClick("profile_summary");
//                   }}
//                 >
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       color: "secondary.main",
//                       fontFamily: '"Roboto Mono", monospace',
//                       mb: 1,
//                       fontSize: "0.9rem",
//                     }}
//                   >
//                     Linguagens & Atividade
//                   </Typography>
//                   <GitHubImage
//                     src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=etezolin&theme=github_dark"
//                     alt="GitHub Profile Summary"
//                     loading="lazy"
//                   />
//                 </GitHubMetric>
//               </motion.div>
//             </Box>

//             <OutputText sx={{ mt: 2, fontSize: "0.85rem" }}>
//               ✅ <HighlightText>Evidência de profissionalismo:</HighlightText>{" "}
//               Regularidade, qualidade de código e crescimento técnico contínuo.
//             </OutputText>
//           </TerminalCard>
//         </motion.div>

//         <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//         {/* Stack Tecnológica - Versão Compacta */}
//         <motion.div whileHover={{ scale: 1.005 }}>
//           <CompactCard>
//             <CommandLine>$ cat stack_tecnologica.json</CommandLine>

//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
//                 gap: 3,
//               }}
//             >
//               <Box onClick={() => handleTechStackClick("backend")}>
//                 <SectionTitle variant="h6">
//                   <CodeIcon sx={{ color: "secondary.main", fontSize: 18 }} />
//                   Backend
//                 </SectionTitle>
//                 <Box sx={{ pl: 2 }}>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick("backend", "dotnet_csharp_dapper");
//                     }}
//                   >
//                     • .NET/C# + Dapper;
//                   </SkillItem>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick(
//                         "backend",
//                         "apis_restful_clean_architecture"
//                       );
//                     }}
//                   >
//                     • APIs RESTful + Clean Architecture;
//                   </SkillItem>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick("backend", "microservices_cqrs");
//                     }}
//                   >
//                     • Microsserviços + CQRS;
//                   </SkillItem>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick("backend", "sql_server_postgresql");
//                     }}
//                   >
//                     • SQL Server + PostgreSQL.
//                   </SkillItem>
//                 </Box>
//               </Box>

//               <Box onClick={() => handleTechStackClick("frontend")}>
//                 <SectionTitle variant="h6">
//                   <DesignServicesIcon
//                     sx={{ color: "secondary.main", fontSize: 18 }}
//                   />
//                   Frontend
//                 </SectionTitle>
//                 <Box sx={{ pl: 2 }}>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick("frontend", "react_typescript");
//                     }}
//                   >
//                     • React + TypeScript;
//                   </SkillItem>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick(
//                         "frontend",
//                         "material_ui_responsive"
//                       );
//                     }}
//                   >
//                     • Material-UI + Responsive Design;
//                   </SkillItem>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick("frontend", "state_management");
//                     }}
//                   >
//                     • State Management (Redux/Context);
//                   </SkillItem>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick(
//                         "frontend",
//                         "performance_optimization"
//                       );
//                     }}
//                   >
//                     • Performance Optimization.
//                   </SkillItem>
//                 </Box>
//               </Box>

//               <Box onClick={() => handleTechStackClick("cloud_devops")}>
//                 <SectionTitle variant="h6">
//                   <CloudIcon sx={{ color: "secondary.main", fontSize: 18 }} />
//                   Cloud & DevOps
//                 </SectionTitle>
//                 <Box sx={{ pl: 2 }}>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick(
//                         "cloud_devops",
//                         "google_cloud_platform"
//                       );
//                     }}
//                   >
//                     • Google Cloud Platform;
//                   </SkillItem>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick("cloud_devops", "docker_kubernetes");
//                     }}
//                   >
//                     • Docker + Kubernetes;
//                   </SkillItem>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick("cloud_devops", "cicd_pipelines");
//                     }}
//                   >
//                     • CI/CD Pipelines;
//                   </SkillItem>
//                   <SkillItem
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSkillItemClick(
//                         "cloud_devops",
//                         "infrastructure_as_code"
//                       );
//                     }}
//                   >
//                     • Infrastructure as Code.
//                   </SkillItem>
//                 </Box>
//               </Box>
//             </Box>
//           </CompactCard>
//         </motion.div>
//       </motion.div>
//     </Container>
//   );
// };

// export default Experience;

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// import type { FC } from "react";
// import { Box, Container, Card, Typography, Divider, Chip } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// import CircleIcon from "@mui/icons-material/Circle";
// import CodeIcon from "@mui/icons-material/Code";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import CloudIcon from "@mui/icons-material/Cloud";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import SpeedIcon from "@mui/icons-material/Speed";

// const TerminalCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   marginBottom: theme.spacing(3),
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

// const TerminalHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   gap: theme.spacing(1),
//   marginBottom: theme.spacing(2),
// }));

// const DotIcon = styled(CircleIcon)({
//   fontSize: 12,
// });

// const CommandLine = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.primary.main,
//   marginBottom: theme.spacing(2),
// }));

// const OutputText = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.primary,
//   marginBottom: theme.spacing(2),
//   lineHeight: 1.6,
//   marginLeft: "25px !important",
//   marginRight: "5px !important",
// }));

// const SkillItem = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: "#f0f0f0",
//   marginBottom: theme.spacing(0.8),
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
//   fontSize: "0.9rem",
//   "&:hover": {
//     color: theme.palette.secondary.main,
//   },
// }));

// const HighlightText = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   fontWeight: 500,
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.primary.main,
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(1),
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
//   fontSize: "1.1rem",
// }));

// const JobHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   marginBottom: theme.spacing(1),
//   flexWrap: "wrap",
//   gap: theme.spacing(1),
// }));

// const JobTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.secondary.main,
//   fontWeight: 600,
//   fontSize: "1rem",
// }));

// const JobPeriod = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.secondary,
//   fontSize: "0.85rem",
// }));

// const MetricChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.25),
//   backgroundColor: "rgba(0, 229, 255, 0.1)",
//   color: theme.palette.secondary.main,
//   border: "1px solid rgba(0, 229, 255, 0.3)",
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.75rem",
//   height: 24,
// }));

// const GitHubMetric = styled(Box)(({ theme }) => ({
//   background: "rgba(255, 255, 255, 0.05)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   textAlign: "center",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     background: "rgba(255, 255, 255, 0.08)",
//     borderColor: theme.palette.secondary.main,
//   },
// }));

// const GitHubImage = styled("img")({
//   width: "100%",
//   height: "auto",
//   borderRadius: "8px",
//   transition: "transform 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.02)",
//   },
// });

// const QuickFacts = styled(Box)(({ theme }) => ({
//   background: "rgba(0, 229, 255, 0.05)",
//   border: "1px solid rgba(0, 229, 255, 0.2)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   marginBottom: theme.spacing(3),
//   borderLeft: `4px solid ${theme.palette.secondary.main}`,
// }));

// const Experience: FC = () => {
//   return (
//     <Container
//       component="section"
//       id="experience"
//       sx={{ minHeight: "100vh", py: 8 }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
//           // Experiência
//         </Typography>

//         {/* Quick Facts - Nova seção */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <QuickFacts>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <SpeedIcon sx={{ color: "secondary.main", mr: 1 }} />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontFamily: '"Roboto Mono", monospace',
//                   color: "secondary.main",
//                 }}
//               >
//                 // Resumo Executivo
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 1,
//                 mb: 2,
//               }}
//             >
//               <MetricChip label="4+ anos experiência" />
//               <MetricChip label="20M+ registros processados" />
//               <MetricChip label="60% redução tempo" />
//               <MetricChip label="2000+ escolas conectadas" />
//               <MetricChip label="30k+ usuários simultâneos" />
//             </Box>
//             <Typography
//               variant="body2"
//               sx={{
//                 fontFamily: '"Roboto Mono", monospace',
//                 color: "text.primary",
//                 lineHeight: 1.6,
//               }}
//             >
//               <HighlightText>Especialista em:</HighlightText> .NET/C#,
//               React/TypeScript, Arquitetura Cloud |
//               <HighlightText> Disponível:</HighlightText> Remoto/Curitiba |
//               <HighlightText> Foco:</HighlightText> Sistemas enterprise
//               escaláveis
//             </Typography>
//           </QuickFacts>
//         </motion.div>

//         {/* Experiência Profissional - Versão Condensada */}
//         <motion.div whileHover={{ scale: 1.005 }}>
//           <CompactCard>
//             <JobHeader>
//               <Box>
//                 <JobTitle>
//                   Desenvolvedor Full-Stack | Secretaria de Educação PR
//                 </JobTitle>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "text.secondary",
//                     fontFamily: '"Roboto Mono", monospace',
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   Desenvolvimento de soluções educacionais integradas de alto
//                   impacto.
//                 </Typography>
//               </Box>
//               <JobPeriod>2021 - Presente</JobPeriod>
//             </JobHeader>

//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
//               <MetricChip label=".NET" />
//               <MetricChip label="React/TypeScript" />
//               <MetricChip label="Microsserviços" />
//               <MetricChip label="Google Cloud" />
//               <MetricChip label="PostgreSQL" />
//             </Box>

//             <Box sx={{ pl: 2 }}>
//               <SkillItem>
//                 🎯 <HighlightText>2.000+ escolas estaduais</HighlightText>{" "}
//                 conectadas via hub de integração;
//               </SkillItem>
//               <SkillItem>
//                 ⚡ <HighlightText>60% redução</HighlightText> no tempo de
//                 processamento de dados administrativos;
//               </SkillItem>
//               <SkillItem>
//                 🚀 Sistemas <HighlightText>cloud-native</HighlightText>{" "}
//                 suportando <HighlightText>30k+ usuários</HighlightText>{" "}
//                 simultâneos;
//               </SkillItem>
//               <SkillItem>
//                 🔧 Arquitetura e implementação de{" "}
//                 <HighlightText>modernização tecnológica</HighlightText>{" "}
//                 estadual.
//               </SkillItem>
//             </Box>
//           </CompactCard>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.005 }}>
//           <CompactCard>
//             <JobHeader>
//               <Box>
//                 <JobTitle>Professor + Transição para Tech</JobTitle>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "text.secondary",
//                     fontFamily: '"Roboto Mono", monospace',
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   Formação em soft skills + descoberta da programação.
//                 </Typography>
//               </Box>
//               <JobPeriod>2015 - 2020</JobPeriod>
//             </JobHeader>

//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
//               <MetricChip label="Comunicação Técnica" />
//               <MetricChip label="Mentoria" />
//               <MetricChip label="Resolução de Problemas" />
//               <MetricChip label="Pensamento Crítico" />
//             </Box>

//             <Box sx={{ pl: 2 }}>
//               <SkillItem>
//                 🎓 <HighlightText>Metodologias ativas</HighlightText> → aumento
//                 no engajamento estudantil;
//               </SkillItem>
//               <SkillItem>
//                 💡 <HighlightText>Soluções digitais improvisadas</HighlightText>{" "}
//                 → despertar interesse pela programação;
//               </SkillItem>
//               <SkillItem>
//                 🔄 <HighlightText>Transição estratégica:</HighlightText>{" "}
//                 Filosofia + Educação → Tecnologia + ADS.
//               </SkillItem>
//             </Box>
//           </CompactCard>
//         </motion.div>

//         <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//         {/* GitHub Metrics - Versão Compacta */}
//         <motion.div whileHover={{ scale: 1.01 }}>
//           <TerminalCard>
//             <TerminalHeader>
//               <DotIcon sx={{ color: "#ff5f56" }} />
//               <DotIcon sx={{ color: "#ffbd2e" }} />
//               <DotIcon sx={{ color: "#27c93f" }} />
//             </TerminalHeader>

//             <CommandLine>$ git log --graph --oneline</CommandLine>

//             <SectionTitle variant="h6">
//               <GitHubIcon sx={{ color: "secondary.main" }} />
//               Atividade de Desenvolvimento
//             </SectionTitle>

//             <OutputText>
//               Demonstração de <HighlightText>consistência</HighlightText> e{" "}
//               <HighlightText>disciplina</HighlightText> no desenvolvimento
//               através de métricas objetivas:
//             </OutputText>

//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
//                 gap: 3,
//                 mt: 2,
//               }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <GitHubMetric>
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       color: "secondary.main",
//                       fontFamily: '"Roboto Mono", monospace',
//                       mb: 1,
//                       fontSize: "0.9rem",
//                     }}
//                   >
//                     Sequência de Commits
//                   </Typography>
//                   <GitHubImage
//                     src="https://github-readme-streak-stats.herokuapp.com/?user=etezolin&theme=dark"
//                     alt="GitHub Streak Stats"
//                     loading="lazy"
//                   />
//                 </GitHubMetric>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <GitHubMetric>
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       color: "secondary.main",
//                       fontFamily: '"Roboto Mono", monospace',
//                       mb: 1,
//                       fontSize: "0.9rem",
//                     }}
//                   >
//                     Linguagens & Atividade
//                   </Typography>
//                   <GitHubImage
//                     src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=etezolin&theme=github_dark"
//                     alt="GitHub Profile Summary"
//                     loading="lazy"
//                   />
//                 </GitHubMetric>
//               </motion.div>
//             </Box>

//             <OutputText sx={{ mt: 2, fontSize: "0.85rem" }}>
//               ✅ <HighlightText>Evidência de profissionalismo:</HighlightText>{" "}
//               Regularidade, qualidade de código e crescimento técnico contínuo.
//             </OutputText>
//           </TerminalCard>
//         </motion.div>

//         <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//         {/* Stack Tecnológica - Versão Compacta */}
//         <motion.div whileHover={{ scale: 1.005 }}>
//           <CompactCard>
//             <CommandLine>$ cat stack_tecnologica.json</CommandLine>

//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
//                 gap: 3,
//               }}
//             >
//               <Box>
//                 <SectionTitle variant="h6">
//                   <CodeIcon sx={{ color: "secondary.main", fontSize: 18 }} />
//                   Backend
//                 </SectionTitle>
//                 <Box sx={{ pl: 2 }}>
//                   <SkillItem>• .NET/C# + Dapper;</SkillItem>
//                   <SkillItem>• APIs RESTful + Clean Architecture;</SkillItem>
//                   <SkillItem>• Microsserviços + CQRS;</SkillItem>
//                   <SkillItem>• SQL Server + PostgreSQL.</SkillItem>
//                 </Box>
//               </Box>

//               <Box>
//                 <SectionTitle variant="h6">
//                   <DesignServicesIcon
//                     sx={{ color: "secondary.main", fontSize: 18 }}
//                   />
//                   Frontend
//                 </SectionTitle>
//                 <Box sx={{ pl: 2 }}>
//                   <SkillItem>• React + TypeScript;</SkillItem>
//                   <SkillItem>• Material-UI + Responsive Design;</SkillItem>
//                   <SkillItem>• State Management (Redux/Context);</SkillItem>
//                   <SkillItem>• Performance Optimization.</SkillItem>
//                 </Box>
//               </Box>

//               <Box>
//                 <SectionTitle variant="h6">
//                   <CloudIcon sx={{ color: "secondary.main", fontSize: 18 }} />
//                   Cloud & DevOps
//                 </SectionTitle>
//                 <Box sx={{ pl: 2 }}>
//                   <SkillItem>• Google Cloud Platform;</SkillItem>
//                   <SkillItem>• Docker + Kubernetes;</SkillItem>
//                   <SkillItem>• CI/CD Pipelines;</SkillItem>
//                   <SkillItem>• Infrastructure as Code.</SkillItem>
//                 </Box>
//               </Box>
//             </Box>
//           </CompactCard>
//         </motion.div>
//       </motion.div>
//     </Container>
//   );
// };

// export default Experience;

// ####################################################################

// // import type { FC } from "react";
// // import { Box, Container, Card, Typography, Divider, Chip } from "@mui/material";
// // import { motion } from "framer-motion";
// // import { styled } from "@mui/material/styles";
// // import CircleIcon from "@mui/icons-material/Circle";
// // import CodeIcon from "@mui/icons-material/Code";
// // import DesignServicesIcon from "@mui/icons-material/DesignServices";
// // import CloudIcon from "@mui/icons-material/Cloud";
// // import GitHubIcon from "@mui/icons-material/GitHub";
// // import SpeedIcon from "@mui/icons-material/Speed";

// // // Import das funções de analytics
// // import {
// //   trackProfileTabInteraction,
// //   trackProfileConversion,
// // } from "../../firebase";
// // import { useTabAnalytics } from "../../hooks/useTabAnalytics";

// // const TerminalCard = styled(Card)(({ theme }) => ({
// //   padding: theme.spacing(3),
// //   background: "rgba(13, 33, 55, 0.7)",
// //   backdropFilter: "blur(10px)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   marginBottom: theme.spacing(3),
// //   cursor: "pointer", // Adicionado para analytics
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

// // const TerminalHeader = styled(Box)(({ theme }) => ({
// //   display: "flex",
// //   gap: theme.spacing(1),
// //   marginBottom: theme.spacing(2),
// // }));

// // const DotIcon = styled(CircleIcon)({
// //   fontSize: 12,
// // });

// // const CommandLine = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   color: theme.palette.primary.main,
// //   marginBottom: theme.spacing(2),
// // }));

// // const OutputText = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   color: theme.palette.text.primary,
// //   marginBottom: theme.spacing(2),
// //   lineHeight: 1.6,
// //   marginLeft: "25px !important",
// //   marginRight: "5px !important",
// // }));

// // const SkillItem = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   color: "#f0f0f0",
// //   marginBottom: theme.spacing(0.8),
// //   display: "flex",
// //   alignItems: "center",
// //   gap: theme.spacing(1),
// //   fontSize: "0.9rem",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&:hover": {
// //     color: theme.palette.secondary.main,
// //   },
// // }));

// // const HighlightText = styled("span")(({ theme }) => ({
// //   color: theme.palette.secondary.main,
// //   fontWeight: 500,
// // }));

// // const SectionTitle = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   color: theme.palette.primary.main,
// //   marginTop: theme.spacing(2),
// //   marginBottom: theme.spacing(1),
// //   display: "flex",
// //   alignItems: "center",
// //   gap: theme.spacing(1),
// //   fontSize: "1.1rem",
// // }));

// // const JobHeader = styled(Box)(({ theme }) => ({
// //   display: "flex",
// //   justifyContent: "space-between",
// //   alignItems: "flex-start",
// //   marginBottom: theme.spacing(1),
// //   flexWrap: "wrap",
// //   gap: theme.spacing(1),
// // }));

// // const JobTitle = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   color: theme.palette.secondary.main,
// //   fontWeight: 600,
// //   fontSize: "1rem",
// // }));

// // const JobPeriod = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   color: theme.palette.text.secondary,
// //   fontSize: "0.85rem",
// // }));

// // const MetricChip = styled(Chip)(({ theme }) => ({
// //   margin: theme.spacing(0.25),
// //   backgroundColor: "rgba(0, 229, 255, 0.1)",
// //   color: theme.palette.secondary.main,
// //   border: "1px solid rgba(0, 229, 255, 0.3)",
// //   fontFamily: '"Roboto Mono", monospace',
// //   fontSize: "0.75rem",
// //   height: 24,
// //   cursor: "pointer", // Adicionado para analytics
// //   transition: "all 0.3s ease",
// //   "&:hover": {
// //     backgroundColor: "rgba(0, 229, 255, 0.2)",
// //     transform: "scale(1.05)",
// //   },
// // }));

// // const GitHubMetric = styled(Box)(({ theme }) => ({
// //   background: "rgba(255, 255, 255, 0.05)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   borderRadius: theme.spacing(1),
// //   padding: theme.spacing(2),
// //   textAlign: "center",
// //   transition: "all 0.3s ease",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&:hover": {
// //     transform: "translateY(-5px)",
// //     background: "rgba(255, 255, 255, 0.08)",
// //     borderColor: theme.palette.secondary.main,
// //   },
// // }));

// // const GitHubImage = styled("img")({
// //   width: "100%",
// //   height: "auto",
// //   borderRadius: "8px",
// //   transition: "transform 0.3s ease",
// //   "&:hover": {
// //     transform: "scale(1.02)",
// //   },
// // });

// // const QuickFacts = styled(Box)(({ theme }) => ({
// //   background: "rgba(0, 229, 255, 0.05)",
// //   border: "1px solid rgba(0, 229, 255, 0.2)",
// //   borderRadius: theme.spacing(1),
// //   padding: theme.spacing(2),
// //   marginBottom: theme.spacing(3),
// //   borderLeft: `4px solid ${theme.palette.secondary.main}`,
// //   cursor: "pointer", // Adicionado para analytics
// // }));

// // const Experience: FC = () => {
// //   const { sectionRef } = useTabAnalytics("experience");

// //   // Analytics: Rastrear visualização da página de experiência e tempo gasto
// //   // useEffect(() => {
// //   //   // Rastreia quando a página de experiência é carregada
// //   //   trackProfileTabView("experience", {
// //   //     user_agent: navigator.userAgent,
// //   //     referrer: document.referrer,
// //   //     screen_resolution: `${window.screen.width}x${window.screen.height}`,
// //   //     device_type: window.innerWidth < 768 ? "mobile" : "desktop",
// //   //   });

// //   //   // Marca o tempo de início para calcular tempo gasto
// //   //   const currentStartTime = Date.now();

// //   //   // Cleanup: rastreia tempo gasto quando o usuário sair da página
// //   //   return () => {
// //   //     const timeSpent = Math.floor((Date.now() - currentStartTime) / 1000);
// //   //     trackProfileTabTimeSpent("experience", timeSpent);
// //   //   };
// //   // }, []);

// //   // Funções de analytics para diferentes interações
// //   const handleQuickFactsClick = () => {
// //     trackProfileTabInteraction(
// //       "experience",
// //       "quick_facts_section_click",
// //       "executive_summary"
// //     );
// //   };

// //   const handleMetricChipClick = (metric: string) => {
// //     trackProfileTabInteraction("experience", "metric_chip_click", metric);
// //   };

// //   const handleJobCardClick = (jobTitle: string, period: string) => {
// //     trackProfileTabInteraction(
// //       "experience",
// //       "job_card_click",
// //       `${jobTitle}_${period}`
// //     );
// //   };

// //   const handleSkillItemClick = (skillCategory: string, skillText: string) => {
// //     trackProfileTabInteraction(
// //       "experience",
// //       "skill_item_click",
// //       `${skillCategory}_${skillText}`
// //     );
// //   };

// //   const handleGitHubMetricClick = (metricType: string) => {
// //     trackProfileTabInteraction("experience", "github_metric_click", metricType);
// //     // Se clicou em métrica do GitHub, pode ser interesse em ver o perfil
// //     if (metricType.includes("profile") || metricType.includes("stats")) {
// //       trackProfileConversion("github_interest", "experience");
// //     }
// //   };

// //   const handleTechStackClick = (stackCategory: string) => {
// //     trackProfileTabInteraction("experience", "tech_stack_click", stackCategory);
// //   };

// //   const handleTerminalClick = () => {
// //     trackProfileTabInteraction(
// //       "experience",
// //       "terminal_section_click",
// //       "github_activity"
// //     );
// //   };

// //   return (
// //     <Container
// //       component="section"
// //       id="experience"
// //       ref={sectionRef}
// //       sx={{ minHeight: "100vh", py: 8 }}
// //     >
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
// //           // Experiência
// //         </Typography>

// //         {/* Quick Facts - Nova seção */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           viewport={{ once: true }}
// //         >
// //           <QuickFacts onClick={handleQuickFactsClick}>
// //             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
// //               <SpeedIcon sx={{ color: "secondary.main", mr: 1 }} />
// //               <Typography
// //                 variant="h6"
// //                 sx={{
// //                   fontFamily: '"Roboto Mono", monospace',
// //                   color: "secondary.main",
// //                 }}
// //               >
// //                 // Resumo Executivo
// //               </Typography>
// //             </Box>
// //             <Box
// //               sx={{
// //                 display: "flex",
// //                 flexWrap: "wrap",
// //                 gap: 1,
// //                 mb: 2,
// //               }}
// //             >
// //               <MetricChip
// //                 label="4+ anos experiência"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("4_years_experience");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="20M+ registros processados"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("20M_records_processed");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="60% redução tempo"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("60_percent_time_reduction");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="2000+ escolas conectadas"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("2000_schools_connected");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="30k+ usuários simultâneos"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("30k_concurrent_users");
// //                 }}
// //               />
// //             </Box>
// //             <Typography
// //               variant="body2"
// //               sx={{
// //                 fontFamily: '"Roboto Mono", monospace',
// //                 color: "text.primary",
// //                 lineHeight: 1.6,
// //               }}
// //             >
// //               <HighlightText>Especialista em:</HighlightText> .NET/C#,
// //               React/TypeScript, Arquitetura Cloud |
// //               <HighlightText> Disponível:</HighlightText> Remoto/Curitiba |
// //               <HighlightText> Foco:</HighlightText> Sistemas enterprise
// //               escaláveis
// //             </Typography>
// //           </QuickFacts>
// //         </motion.div>

// //         {/* Experiência Profissional - Versão Condensada */}
// //         <motion.div whileHover={{ scale: 1.005 }}>
// //           <CompactCard
// //             onClick={() =>
// //               handleJobCardClick(
// //                 "Desenvolvedor Full-Stack Secretaria Educação PR",
// //                 "2021-Presente"
// //               )
// //             }
// //           >
// //             <JobHeader>
// //               <Box>
// //                 <JobTitle>
// //                   Desenvolvedor Full-Stack | Secretaria de Educação PR
// //                 </JobTitle>
// //                 <Typography
// //                   variant="body2"
// //                   sx={{
// //                     color: "text.secondary",
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     fontSize: "0.9rem",
// //                   }}
// //                 >
// //                   Desenvolvimento de soluções educacionais integradas de alto
// //                   impacto.
// //                 </Typography>
// //               </Box>
// //               <JobPeriod>2021 - Presente</JobPeriod>
// //             </JobHeader>

// //             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
// //               <MetricChip
// //                 label=".NET"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("dotnet_tech");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="React/TypeScript"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("react_typescript_tech");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="Microsserviços"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("microservices_tech");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="Google Cloud"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("google_cloud_tech");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="PostgreSQL"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("postgresql_tech");
// //                 }}
// //               />
// //             </Box>

// //             <Box sx={{ pl: 2 }}>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleSkillItemClick(
// //                     "current_job",
// //                     "2000_schools_integration"
// //                   );
// //                 }}
// //               >
// //                 🎯 <HighlightText>2.000+ escolas estaduais</HighlightText>{" "}
// //                 conectadas via hub de integração;
// //               </SkillItem>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleSkillItemClick(
// //                     "current_job",
// //                     "60_percent_performance_improvement"
// //                   );
// //                 }}
// //               >
// //                 ⚡ <HighlightText>60% redução</HighlightText> no tempo de
// //                 processamento de dados administrativos;
// //               </SkillItem>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleSkillItemClick("current_job", "cloud_native_30k_users");
// //                 }}
// //               >
// //                 🚀 Sistemas <HighlightText>cloud-native</HighlightText>{" "}
// //                 suportando <HighlightText>30k+ usuários</HighlightText>{" "}
// //                 simultâneos;
// //               </SkillItem>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleSkillItemClick(
// //                     "current_job",
// //                     "tech_modernization_architecture"
// //                   );
// //                 }}
// //               >
// //                 🔧 Arquitetura e implementação de{" "}
// //                 <HighlightText>modernização tecnológica</HighlightText>{" "}
// //                 estadual.
// //               </SkillItem>
// //             </Box>
// //           </CompactCard>
// //         </motion.div>

// //         <motion.div whileHover={{ scale: 1.005 }}>
// //           <CompactCard
// //             onClick={() =>
// //               handleJobCardClick("Professor Transição Tech", "2015-2020")
// //             }
// //           >
// //             <JobHeader>
// //               <Box>
// //                 <JobTitle>Professor + Transição para Tech</JobTitle>
// //                 <Typography
// //                   variant="body2"
// //                   sx={{
// //                     color: "text.secondary",
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     fontSize: "0.9rem",
// //                   }}
// //                 >
// //                   Formação em soft skills + descoberta da programação.
// //                 </Typography>
// //               </Box>
// //               <JobPeriod>2015 - 2020</JobPeriod>
// //             </JobHeader>

// //             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
// //               <MetricChip
// //                 label="Comunicação Técnica"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("technical_communication");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="Mentoria"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("mentoring");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="Resolução de Problemas"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("problem_solving");
// //                 }}
// //               />
// //               <MetricChip
// //                 label="Pensamento Crítico"
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleMetricChipClick("critical_thinking");
// //                 }}
// //               />
// //             </Box>

// //             <Box sx={{ pl: 2 }}>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleSkillItemClick("previous_job", "active_methodologies");
// //                 }}
// //               >
// //                 🎓 <HighlightText>Metodologias ativas</HighlightText> → aumento
// //                 no engajamento estudantil;
// //               </SkillItem>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleSkillItemClick(
// //                     "previous_job",
// //                     "digital_solutions_programming_interest"
// //                   );
// //                 }}
// //               >
// //                 💡 <HighlightText>Soluções digitais improvisadas</HighlightText>{" "}
// //                 → despertar interesse pela programação;
// //               </SkillItem>
// //               <SkillItem
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleSkillItemClick(
// //                     "previous_job",
// //                     "strategic_transition_tech"
// //                   );
// //                 }}
// //               >
// //                 🔄 <HighlightText>Transição estratégica:</HighlightText>{" "}
// //                 Filosofia + Educação → Tecnologia + ADS.
// //               </SkillItem>
// //             </Box>
// //           </CompactCard>
// //         </motion.div>

// //         <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

// //         {/* GitHub Metrics - Versão Compacta */}
// //         <motion.div whileHover={{ scale: 1.01 }}>
// //           <TerminalCard onClick={handleTerminalClick}>
// //             <TerminalHeader>
// //               <DotIcon sx={{ color: "#ff5f56" }} />
// //               <DotIcon sx={{ color: "#ffbd2e" }} />
// //               <DotIcon sx={{ color: "#27c93f" }} />
// //             </TerminalHeader>

// //             <CommandLine>$ git log --graph --oneline</CommandLine>

// //             <SectionTitle variant="h6">
// //               <GitHubIcon sx={{ color: "secondary.main" }} />
// //               Atividade de Desenvolvimento
// //             </SectionTitle>

// //             <OutputText>
// //               Demonstração de <HighlightText>consistência</HighlightText> e{" "}
// //               <HighlightText>disciplina</HighlightText> no desenvolvimento
// //               através de métricas objetivas:
// //             </OutputText>

// //             <Box
// //               sx={{
// //                 display: "grid",
// //                 gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
// //                 gap: 3,
// //                 mt: 2,
// //               }}
// //             >
// //               <motion.div
// //                 whileHover={{ scale: 1.02 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <GitHubMetric
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleGitHubMetricClick("streak_stats");
// //                   }}
// //                 >
// //                   <Typography
// //                     variant="subtitle2"
// //                     sx={{
// //                       color: "secondary.main",
// //                       fontFamily: '"Roboto Mono", monospace',
// //                       mb: 1,
// //                       fontSize: "0.9rem",
// //                     }}
// //                   >
// //                     Sequência de Commits
// //                   </Typography>
// //                   <GitHubImage
// //                     src="https://github-readme-streak-stats.herokuapp.com/?user=etezolin&theme=dark"
// //                     alt="GitHub Streak Stats"
// //                     loading="lazy"
// //                   />
// //                 </GitHubMetric>
// //               </motion.div>

// //               <motion.div
// //                 whileHover={{ scale: 1.02 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <GitHubMetric
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleGitHubMetricClick("profile_summary");
// //                   }}
// //                 >
// //                   <Typography
// //                     variant="subtitle2"
// //                     sx={{
// //                       color: "secondary.main",
// //                       fontFamily: '"Roboto Mono", monospace',
// //                       mb: 1,
// //                       fontSize: "0.9rem",
// //                     }}
// //                   >
// //                     Linguagens & Atividade
// //                   </Typography>
// //                   <GitHubImage
// //                     src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=etezolin&theme=github_dark"
// //                     alt="GitHub Profile Summary"
// //                     loading="lazy"
// //                   />
// //                 </GitHubMetric>
// //               </motion.div>
// //             </Box>

// //             <OutputText sx={{ mt: 2, fontSize: "0.85rem" }}>
// //               ✅ <HighlightText>Evidência de profissionalismo:</HighlightText>{" "}
// //               Regularidade, qualidade de código e crescimento técnico contínuo.
// //             </OutputText>
// //           </TerminalCard>
// //         </motion.div>

// //         <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

// //         {/* Stack Tecnológica - Versão Compacta */}
// //         <motion.div whileHover={{ scale: 1.005 }}>
// //           <CompactCard>
// //             <CommandLine>$ cat stack_tecnologica.json</CommandLine>

// //             <Box
// //               sx={{
// //                 display: "grid",
// //                 gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
// //                 gap: 3,
// //               }}
// //             >
// //               <Box onClick={() => handleTechStackClick("backend")}>
// //                 <SectionTitle variant="h6">
// //                   <CodeIcon sx={{ color: "secondary.main", fontSize: 18 }} />
// //                   Backend
// //                 </SectionTitle>
// //                 <Box sx={{ pl: 2 }}>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick("backend", "dotnet_csharp_dapper");
// //                     }}
// //                   >
// //                     • .NET/C# + Dapper;
// //                   </SkillItem>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick(
// //                         "backend",
// //                         "apis_restful_clean_architecture"
// //                       );
// //                     }}
// //                   >
// //                     • APIs RESTful + Clean Architecture;
// //                   </SkillItem>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick("backend", "microservices_cqrs");
// //                     }}
// //                   >
// //                     • Microsserviços + CQRS;
// //                   </SkillItem>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick("backend", "sql_server_postgresql");
// //                     }}
// //                   >
// //                     • SQL Server + PostgreSQL.
// //                   </SkillItem>
// //                 </Box>
// //               </Box>

// //               <Box onClick={() => handleTechStackClick("frontend")}>
// //                 <SectionTitle variant="h6">
// //                   <DesignServicesIcon
// //                     sx={{ color: "secondary.main", fontSize: 18 }}
// //                   />
// //                   Frontend
// //                 </SectionTitle>
// //                 <Box sx={{ pl: 2 }}>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick("frontend", "react_typescript");
// //                     }}
// //                   >
// //                     • React + TypeScript;
// //                   </SkillItem>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick(
// //                         "frontend",
// //                         "material_ui_responsive"
// //                       );
// //                     }}
// //                   >
// //                     • Material-UI + Responsive Design;
// //                   </SkillItem>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick("frontend", "state_management");
// //                     }}
// //                   >
// //                     • State Management (Redux/Context);
// //                   </SkillItem>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick(
// //                         "frontend",
// //                         "performance_optimization"
// //                       );
// //                     }}
// //                   >
// //                     • Performance Optimization.
// //                   </SkillItem>
// //                 </Box>
// //               </Box>

// //               <Box onClick={() => handleTechStackClick("cloud_devops")}>
// //                 <SectionTitle variant="h6">
// //                   <CloudIcon sx={{ color: "secondary.main", fontSize: 18 }} />
// //                   Cloud & DevOps
// //                 </SectionTitle>
// //                 <Box sx={{ pl: 2 }}>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick(
// //                         "cloud_devops",
// //                         "google_cloud_platform"
// //                       );
// //                     }}
// //                   >
// //                     • Google Cloud Platform;
// //                   </SkillItem>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick("cloud_devops", "docker_kubernetes");
// //                     }}
// //                   >
// //                     • Docker + Kubernetes;
// //                   </SkillItem>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick("cloud_devops", "cicd_pipelines");
// //                     }}
// //                   >
// //                     • CI/CD Pipelines;
// //                   </SkillItem>
// //                   <SkillItem
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleSkillItemClick(
// //                         "cloud_devops",
// //                         "infrastructure_as_code"
// //                       );
// //                     }}
// //                   >
// //                     • Infrastructure as Code.
// //                   </SkillItem>
// //                 </Box>
// //               </Box>
// //             </Box>
// //           </CompactCard>
// //         </motion.div>
// //       </motion.div>
// //     </Container>
// //   );
// // };

// // export default Experience;

// ####################################################################

// import type { FC } from "react";
// import { Box, Container, Card, Typography, Divider, Chip } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// import CircleIcon from "@mui/icons-material/Circle";
// import CodeIcon from "@mui/icons-material/Code";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import CloudIcon from "@mui/icons-material/Cloud";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import SpeedIcon from "@mui/icons-material/Speed";

// const TerminalCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   marginBottom: theme.spacing(3),
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

// const TerminalHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   gap: theme.spacing(1),
//   marginBottom: theme.spacing(2),
// }));

// const DotIcon = styled(CircleIcon)({
//   fontSize: 12,
// });

// const CommandLine = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.primary.main,
//   marginBottom: theme.spacing(2),
// }));

// const OutputText = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.primary,
//   marginBottom: theme.spacing(2),
//   lineHeight: 1.6,
//   marginLeft: "25px !important",
//   marginRight: "5px !important",
// }));

// const SkillItem = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: "#f0f0f0",
//   marginBottom: theme.spacing(0.8),
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
//   fontSize: "0.9rem",
//   "&:hover": {
//     color: theme.palette.secondary.main,
//   },
// }));

// const HighlightText = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   fontWeight: 500,
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.primary.main,
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(1),
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
//   fontSize: "1.1rem",
// }));

// const JobHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   marginBottom: theme.spacing(1),
//   flexWrap: "wrap",
//   gap: theme.spacing(1),
// }));

// const JobTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.secondary.main,
//   fontWeight: 600,
//   fontSize: "1rem",
// }));

// const JobPeriod = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.secondary,
//   fontSize: "0.85rem",
// }));

// const MetricChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.25),
//   backgroundColor: "rgba(0, 229, 255, 0.1)",
//   color: theme.palette.secondary.main,
//   border: "1px solid rgba(0, 229, 255, 0.3)",
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.75rem",
//   height: 24,
// }));

// const GitHubMetric = styled(Box)(({ theme }) => ({
//   background: "rgba(255, 255, 255, 0.05)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   textAlign: "center",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     background: "rgba(255, 255, 255, 0.08)",
//     borderColor: theme.palette.secondary.main,
//   },
// }));

// const GitHubImage = styled("img")({
//   width: "100%",
//   height: "auto",
//   borderRadius: "8px",
//   transition: "transform 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.02)",
//   },
// });

// const QuickFacts = styled(Box)(({ theme }) => ({
//   background: "rgba(0, 229, 255, 0.05)",
//   border: "1px solid rgba(0, 229, 255, 0.2)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   marginBottom: theme.spacing(3),
//   borderLeft: `4px solid ${theme.palette.secondary.main}`,
// }));

// const Experience: FC = () => {
//   return (
//     <Container
//       component="section"
//       id="experience"
//       sx={{ minHeight: "100vh", py: 8 }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
//           // Experiência
//         </Typography>

//         {/* Quick Facts - Nova seção */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <QuickFacts>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <SpeedIcon sx={{ color: "secondary.main", mr: 1 }} />
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontFamily: '"Roboto Mono", monospace',
//                   color: "secondary.main",
//                 }}
//               >
//                 // Resumo Executivo
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 1,
//                 mb: 2,
//               }}
//             >
//               <MetricChip label="5+ anos experiência" />
//               <MetricChip label="2M+ registros processados" />
//               <MetricChip label="60% redução tempo" />
//               <MetricChip label="2000+ escolas conectadas" />
//               <MetricChip label="30k+ usuários simultâneos" />
//             </Box>
//             <Typography
//               variant="body2"
//               sx={{
//                 fontFamily: '"Roboto Mono", monospace',
//                 color: "text.primary",
//                 lineHeight: 1.6,
//               }}
//             >
//               <HighlightText>Especialista em:</HighlightText> .NET/C#,
//               React/TypeScript, Arquitetura Cloud |
//               <HighlightText> Disponível:</HighlightText> Remoto/Curitiba |
//               <HighlightText> Foco:</HighlightText> Sistemas enterprise
//               escaláveis
//             </Typography>
//           </QuickFacts>
//         </motion.div>

//         {/* Experiência Profissional - Versão Condensada */}
//         <motion.div whileHover={{ scale: 1.005 }}>
//           <CompactCard>
//             <JobHeader>
//               <Box>
//                 <JobTitle>
//                   Desenvolvedor Full-Stack | Secretaria de Educação PR
//                 </JobTitle>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "text.secondary",
//                     fontFamily: '"Roboto Mono", monospace',
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   Desenvolvimento de soluções educacionais integradas de alto
//                   impacto
//                 </Typography>
//               </Box>
//               <JobPeriod>2021 - Presente</JobPeriod>
//             </JobHeader>

//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
//               <MetricChip label=".NET Core" />
//               <MetricChip label="React/TypeScript" />
//               <MetricChip label="Microsserviços" />
//               <MetricChip label="Google Cloud" />
//               <MetricChip label="PostgreSQL" />
//             </Box>

//             <Box sx={{ pl: 2 }}>
//               <SkillItem>
//                 🎯 <HighlightText>2.000+ escolas estaduais</HighlightText>{" "}
//                 conectadas via hub de integração
//               </SkillItem>
//               <SkillItem>
//                 ⚡ <HighlightText>60% redução</HighlightText> no tempo de
//                 processamento de dados administrativos
//               </SkillItem>
//               <SkillItem>
//                 🚀 Sistemas <HighlightText>cloud-native</HighlightText>{" "}
//                 suportando <HighlightText>30k+ usuários</HighlightText>{" "}
//                 simultâneos
//               </SkillItem>
//               <SkillItem>
//                 🔧 Arquitetura e implementação de{" "}
//                 <HighlightText>modernização tecnológica</HighlightText> estadual
//               </SkillItem>
//             </Box>
//           </CompactCard>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.005 }}>
//           <CompactCard>
//             <JobHeader>
//               <Box>
//                 <JobTitle>Professor + Transição para Tech</JobTitle>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "text.secondary",
//                     fontFamily: '"Roboto Mono", monospace',
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   Formação em soft skills + descoberta da programação
//                 </Typography>
//               </Box>
//               <JobPeriod>2015 - 2020</JobPeriod>
//             </JobHeader>

//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
//               <MetricChip label="Comunicação Técnica" />
//               <MetricChip label="Mentoria" />
//               <MetricChip label="Resolução de Problemas" />
//               <MetricChip label="Pensamento Crítico" />
//             </Box>

//             <Box sx={{ pl: 2 }}>
//               <SkillItem>
//                 🎓 <HighlightText>Metodologias ativas</HighlightText> → aumento
//                 no engajamento estudantil
//               </SkillItem>
//               <SkillItem>
//                 💡 <HighlightText>Soluções digitais improvisadas</HighlightText>{" "}
//                 → despertar interesse pela programação
//               </SkillItem>
//               <SkillItem>
//                 🔄 <HighlightText>Transição estratégica:</HighlightText>{" "}
//                 Filosofia + Educação → Tecnologia + ADS
//               </SkillItem>
//             </Box>
//           </CompactCard>
//         </motion.div>

//         <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//         {/* GitHub Metrics - Versão Compacta */}
//         <motion.div whileHover={{ scale: 1.01 }}>
//           <TerminalCard>
//             <TerminalHeader>
//               <DotIcon sx={{ color: "#ff5f56" }} />
//               <DotIcon sx={{ color: "#ffbd2e" }} />
//               <DotIcon sx={{ color: "#27c93f" }} />
//             </TerminalHeader>

//             <CommandLine>$ git log --graph --oneline</CommandLine>

//             <SectionTitle variant="h6">
//               <GitHubIcon sx={{ color: "secondary.main" }} />
//               Atividade de Desenvolvimento
//             </SectionTitle>

//             <OutputText>
//               Demonstração de <HighlightText>consistência</HighlightText> e{" "}
//               <HighlightText>disciplina</HighlightText> no desenvolvimento
//               através de métricas objetivas:
//             </OutputText>

//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
//                 gap: 3,
//                 mt: 2,
//               }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <GitHubMetric>
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       color: "secondary.main",
//                       fontFamily: '"Roboto Mono", monospace',
//                       mb: 1,
//                       fontSize: "0.9rem",
//                     }}
//                   >
//                     Sequência de Commits
//                   </Typography>
//                   <GitHubImage
//                     src="https://github-readme-streak-stats.herokuapp.com/?user=etezolin&theme=dark"
//                     alt="GitHub Streak Stats"
//                     loading="lazy"
//                   />
//                 </GitHubMetric>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <GitHubMetric>
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       color: "secondary.main",
//                       fontFamily: '"Roboto Mono", monospace',
//                       mb: 1,
//                       fontSize: "0.9rem",
//                     }}
//                   >
//                     Linguagens & Atividade
//                   </Typography>
//                   <GitHubImage
//                     src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=etezolin&theme=github_dark"
//                     alt="GitHub Profile Summary"
//                     loading="lazy"
//                   />
//                 </GitHubMetric>
//               </motion.div>
//             </Box>

//             <OutputText sx={{ mt: 2, fontSize: "0.85rem" }}>
//               ✅ <HighlightText>Evidência de profissionalismo:</HighlightText>{" "}
//               Regularidade, qualidade de código e crescimento técnico contínuo.
//             </OutputText>
//           </TerminalCard>
//         </motion.div>

//         <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//         {/* Stack Tecnológica - Versão Compacta */}
//         <motion.div whileHover={{ scale: 1.005 }}>
//           <CompactCard>
//             <CommandLine>$ cat stack_tecnologica.json</CommandLine>

//             <Box
//               sx={{
//                 display: "grid",
//                 gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
//                 gap: 3,
//               }}
//             >
//               <Box>
//                 <SectionTitle variant="h6">
//                   <CodeIcon sx={{ color: "secondary.main", fontSize: 18 }} />
//                   Backend
//                 </SectionTitle>
//                 <Box sx={{ pl: 2 }}>
//                   <SkillItem>• .NET Core/C# + Entity Framework</SkillItem>
//                   <SkillItem>• APIs RESTful + Clean Architecture</SkillItem>
//                   <SkillItem>• Microsserviços + CQRS</SkillItem>
//                   <SkillItem>• SQL Server + PostgreSQL</SkillItem>
//                 </Box>
//               </Box>

//               <Box>
//                 <SectionTitle variant="h6">
//                   <DesignServicesIcon
//                     sx={{ color: "secondary.main", fontSize: 18 }}
//                   />
//                   Frontend
//                 </SectionTitle>
//                 <Box sx={{ pl: 2 }}>
//                   <SkillItem>• React + TypeScript</SkillItem>
//                   <SkillItem>• Material-UI + Responsive Design</SkillItem>
//                   <SkillItem>• State Management (Redux/Context)</SkillItem>
//                   <SkillItem>• Performance Optimization</SkillItem>
//                 </Box>
//               </Box>

//               <Box>
//                 <SectionTitle variant="h6">
//                   <CloudIcon sx={{ color: "secondary.main", fontSize: 18 }} />
//                   Cloud & DevOps
//                 </SectionTitle>
//                 <Box sx={{ pl: 2 }}>
//                   <SkillItem>• Google Cloud Platform</SkillItem>
//                   <SkillItem>• Docker + Kubernetes</SkillItem>
//                   <SkillItem>• CI/CD Pipelines</SkillItem>
//                   <SkillItem>• Infrastructure as Code</SkillItem>
//                 </Box>
//               </Box>
//             </Box>
//           </CompactCard>
//         </motion.div>
//       </motion.div>
//     </Container>
//   );
// };

// export default Experience;

// import type { FC } from "react";
// import { Box, Container, Card, Typography, Divider } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// import CircleIcon from "@mui/icons-material/Circle";
// import CodeIcon from "@mui/icons-material/Code";
// import StorageIcon from "@mui/icons-material/Storage";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import CloudIcon from "@mui/icons-material/Cloud";
// import WorkIcon from "@mui/icons-material/Work";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// const TerminalCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   marginBottom: theme.spacing(3),
// }));

// const TerminalHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   gap: theme.spacing(1),
//   marginBottom: theme.spacing(2),
// }));

// const DotIcon = styled(CircleIcon)({
//   fontSize: 12,
// });

// const CommandLine = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.primary.main,
//   marginBottom: theme.spacing(2),
// }));

// const OutputText = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.primary,
//   marginBottom: theme.spacing(3),
//   lineHeight: 1.6,
//   marginLeft: "25px !important",
//   marginRight: "5px !important",
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

// const HighlightText = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
// }));

// const HighlightTextV2 = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.primary.main,
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(1),
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(1),
// }));

// const GitHubMetric = styled(Box)(({ theme }) => ({
//   background: "rgba(255, 255, 255, 0.05)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   textAlign: "center",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     background: "rgba(255, 255, 255, 0.08)",
//     borderColor: theme.palette.secondary.main,
//   },
// }));

// const GitHubImage = styled("img")({
//   width: "100%",
//   height: "auto",
//   borderRadius: "8px",
//   transition: "transform 0.3s ease",
//   "&:hover": {
//     transform: "scale(1.02)",
//   },
// });

// const Experience: FC = () => {
//   return (
//     <Container
//       component="section"
//       id="experience"
//       sx={{ minHeight: "100vh", py: 8 }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
//           // Experiência
//         </Typography>

//         <motion.div whileHover={{ scale: 1.01 }}>
//           <TerminalCard>
//             <TerminalHeader>
//               <DotIcon sx={{ color: "#ff5f56" }} />
//               <DotIcon sx={{ color: "#ffbd2e" }} />
//               <DotIcon sx={{ color: "#27c93f" }} />
//             </TerminalHeader>

//             <CommandLine>$ cat perfil_profissional.md</CommandLine>

//             <OutputText>
//               Desenvolvedor Full-Stack especializado em{" "}
//               <HighlightText>.NET/C#</HighlightText> e{" "}
//               <HighlightText>React/TypeScript</HighlightText> com experiência na
//               criação de soluções tecnológicas de alto impacto. Formado em
//               <HighlightText>
//                 {" "}
//                 Análise e Desenvolvimento de Sistemas
//               </HighlightText>{" "}
//               e cursando pós-graduação em{" "}
//               <HighlightText>Ciência de Dados na UTFPR</HighlightText>.
//               Apaixonado por transformar requisitos complexos em arquiteturas
//               elegantes e escaláveis que entregam valor real. Combinando
//               expertise técnica com visão estratégica para desenvolver
//               aplicações modernas que unem robustez de backend e experiências de
//               usuário intuitivas.
//             </OutputText>

//             <CommandLine>$ cat experiencia_seed.txt</CommandLine>

//             <Box sx={{ mb: 3 }}>
//               <SectionTitle variant="h6">
//                 <WorkIcon sx={{ color: "secondary.main" }} />
//                 Secretaria de Educação do Estado do Paraná | 2021 - Presente
//               </SectionTitle>

//               <OutputText>
//                 Atuo como desenvolvedor na Secretaria de Educação do Estado do
//                 Paraná, participando do desenvolvimento de{" "}
//                 <HighlightTextV2>
//                   soluções educacionais integradas
//                 </HighlightTextV2>{" "}
//                 que transformaram processos críticos e impactaram positivamente
//                 a <HighlightTextV2>gestão educacional</HighlightTextV2> em todo
//                 o estado. Implementei arquiteturas de microsserviços e hubs de
//                 integração que possibilitaram a unificação de sistemas legados e
//                 novas plataformas, resultando em maior eficiência operacional e
//                 melhor experiência para professores, alunos e gestores.
//               </OutputText>

//               <OutputText>
//                 Principais conquistas:
//                 <br />• Desenvolvimento de plataformas de{" "}
//                 <HighlightTextV2>integração que conectam</HighlightTextV2> mais
//                 de 2.000 escolas estaduais;
//                 <br />• Implementação de soluções de automação que{" "}
//                 <HighlightTextV2>
//                   {" "}
//                   reduziram em 60% o tempo de processamento
//                 </HighlightTextV2>{" "}
//                 de dados administrativos;
//                 <br />• <HighlightTextV2>Arquitetura</HighlightTextV2> e{" "}
//                 <HighlightTextV2>implementação</HighlightTextV2> de sistemas{" "}
//                 <HighlightTextV2>cloud-native</HighlightTextV2> que suportam
//                 picos de acesso de mais de 30.000 usuários simultâneos;
//                 <br />• Participar da equipe técnica em projetos que{" "}
//                 <HighlightTextV2>modernizaram</HighlightTextV2> a{" "}
//                 <HighlightTextV2>infraestrutura tecnológica</HighlightTextV2>{" "}
//                 educacional do estado.
//               </OutputText>
//             </Box>

//             <Box sx={{ mb: 3 }}>
//               <SectionTitle variant="h6">
//                 <WorkIcon sx={{ color: "secondary.main" }} />
//                 Professor de Ensino Médio | 2015 - 2020
//               </SectionTitle>

//               <OutputText>
//                 Atuei como professor do ensino médio, desenvolvendo e aplicando
//                 metodologias pedagógicas inovadoras que{" "}
//                 <HighlightTextV2>
//                   estimulavam o pensamento crítico
//                 </HighlightTextV2>{" "}
//                 e a{" "}
//                 <HighlightTextV2>
//                   resolução criativa de problemas
//                 </HighlightTextV2>
//                 . Esta experiência me proporcionou habilidades excepcionais de
//                 comunicação e a capacidade de traduzir conceitos complexos em
//                 explicações claras e acessíveis - competências que transportei
//                 com sucesso para minha carreira em tecnologia.
//               </OutputText>

//               <OutputText>
//                 Principais conquistas:
//                 <br />• Desenvolvimento de{" "}
//                 <HighlightTextV2>
//                   projetos interdisciplinares
//                 </HighlightTextV2>{" "}
//                 que integravam filosofia e tecnologia, introduzindo alunos ao
//                 pensamento lógico e computacional;
//                 <br />• Implementação de{" "}
//                 <HighlightTextV2>
//                   metodologias ativas de aprendizagem
//                 </HighlightTextV2>{" "}
//                 que aumentaram o engajamento e aproveitamento dos estudantes em
//                 mais de 40%;
//                 <br />• Criação de{" "}
//                 <HighlightTextV2>
//                   soluções digitais improvisadas
//                 </HighlightTextV2>{" "}
//                 para superar limitações de infraestrutura, despertando meu
//                 interesse pela programação;
//                 <br />• Mentoria de projetos estudantis que{" "}
//                 <HighlightTextV2>
//                   conquistaram reconhecimento
//                 </HighlightTextV2>{" "}
//                 em feiras de ciências regionais.
//               </OutputText>
//             </Box>

//             <OutputText>
//               <HighlightTextV2>Transição para Tecnologia:</HighlightTextV2>{" "}
//               Minha formação em Filosofia e experiência docente me
//               proporcionaram uma perspectiva única na abordagem de desafios
//               tecnológicos. Ao perceber como a tecnologia poderia transformar a
//               educação, comecei a aprofundar meus estudos em desenvolvimento de
//               software, inicialmente como autodidata e posteriormente através da
//               formação formal em Análise e Desenvolvimento de Sistemas. Esta
//               trajetória me permitiu combinar o pensamento crítico filosófico,
//               habilidades didáticas e conhecimento técnico para criar soluções
//               tecnológicas mais humanas, intuitivas e focadas nas reais
//               necessidades dos usuários finais.
//             </OutputText>

//             <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//             <CommandLine>$ git log --stat --graph</CommandLine>

//             <Box sx={{ mb: 3 }}>
//               <SectionTitle variant="h6">
//                 <GitHubIcon sx={{ color: "secondary.main" }} />
//                 Atividade de Desenvolvimento & Portfólio
//               </SectionTitle>

//               <OutputText>
//                 Meu <HighlightTextV2>GitHub</HighlightTextV2> reflete uma{" "}
//                 <HighlightTextV2>
//                   jornada consistente de aprendizado
//                 </HighlightTextV2>{" "}
//                 e <HighlightTextV2>evolução técnica</HighlightTextV2>,
//                 demonstrando disciplina na prática de desenvolvimento e
//                 comprometimento com a melhoria contínua. As métricas abaixo
//                 evidenciam{" "}
//                 <HighlightTextV2>regularidade na codificação</HighlightTextV2>,{" "}
//                 <HighlightTextV2>diversidade de projetos</HighlightTextV2> e{" "}
//                 <HighlightTextV2>crescimento profissional</HighlightTextV2> ao
//                 longo do tempo.
//               </OutputText>

//               <Box
//                 sx={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: 3,
//                   mt: 2,
//                 }}
//               >
//                 <Box
//                   sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 12px)" } }}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <GitHubMetric>
//                       <Typography
//                         variant="subtitle2"
//                         sx={{
//                           color: "secondary.main",
//                           fontFamily: '"Roboto Mono", monospace',
//                           mb: 2,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           gap: 1,
//                         }}
//                       >
//                         <TrendingUpIcon fontSize="small" />
//                         Sequência de Commits
//                       </Typography>
//                       <GitHubImage
//                         src="https://github-readme-streak-stats.herokuapp.com/?user=etezolin&theme=dark"
//                         alt="GitHub Streak Stats - Demonstra consistência e disciplina no desenvolvimento"
//                         loading="lazy"
//                       />
//                       <Typography
//                         variant="caption"
//                         sx={{
//                           color: "text.secondary",
//                           fontFamily: '"Roboto Mono", monospace',
//                           mt: 1,
//                           display: "block",
//                         }}
//                       >
//                         Evidência de disciplina e regularidade na codificação
//                       </Typography>
//                     </GitHubMetric>
//                   </motion.div>
//                 </Box>

//                 <Box
//                   sx={{ flex: { xs: "1 1 100%", md: "1 1 calc(50% - 12px)" } }}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <GitHubMetric>
//                       <Typography
//                         variant="subtitle2"
//                         sx={{
//                           color: "secondary.main",
//                           fontFamily: '"Roboto Mono", monospace',
//                           mb: 2,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           gap: 1,
//                         }}
//                       >
//                         <CodeIcon fontSize="small" />
//                         Mapa de Contribuições
//                       </Typography>
//                       <GitHubImage
//                         src="https://ghchart.rshah.org/etezolin"
//                         alt="GitHub Contribution Chart - Visualização da atividade de desenvolvimento ao longo do tempo"
//                         loading="lazy"
//                       />
//                       <Typography
//                         variant="caption"
//                         sx={{
//                           color: "text.secondary",
//                           fontFamily: '"Roboto Mono", monospace',
//                           mt: 1,
//                           display: "block",
//                         }}
//                       >
//                         Histórico visual de atividade e crescimento técnico
//                       </Typography>
//                     </GitHubMetric>
//                   </motion.div>
//                 </Box>

//                 <Box sx={{ flex: "1 1 100%" }}>
//                   <motion.div
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <GitHubMetric>
//                       <Typography
//                         variant="subtitle2"
//                         sx={{
//                           color: "secondary.main",
//                           fontFamily: '"Roboto Mono", monospace',
//                           mb: 2,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           gap: 1,
//                         }}
//                       >
//                         <StorageIcon fontSize="small" />
//                         Perfil Detalhado de Desenvolvimento
//                       </Typography>
//                       <GitHubImage
//                         src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=etezolin&theme=github_dark"
//                         alt="GitHub Profile Summary - Visão geral completa das tecnologias e linguagens utilizadas"
//                         loading="lazy"
//                       />
//                       <Typography
//                         variant="caption"
//                         sx={{
//                           color: "text.secondary",
//                           fontFamily: '"Roboto Mono", monospace',
//                           mt: 1,
//                           display: "block",
//                         }}
//                       >
//                         Estatísticas detalhadas: linguagens, commits e
//                         distribuição de projetos
//                       </Typography>
//                     </GitHubMetric>
//                   </motion.div>
//                 </Box>

//                 <Box sx={{ flex: "1 1 100%" }}>
//                   <motion.div
//                     whileHover={{ scale: 1.01 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <GitHubMetric>
//                       <Typography
//                         variant="subtitle2"
//                         sx={{
//                           color: "secondary.main",
//                           fontFamily: '"Roboto Mono", monospace',
//                           mb: 2,
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           gap: 1,
//                         }}
//                       >
//                         <TrendingUpIcon fontSize="small" />
//                         Evolução e Atividade
//                       </Typography>
//                       <GitHubImage
//                         src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg"
//                         alt="GitHub Contribution Snake - Animação interativa do histórico de contribuições"
//                         loading="lazy"
//                       />
//                       <Typography
//                         variant="caption"
//                         sx={{
//                           color: "text.secondary",
//                           fontFamily: '"Roboto Mono", monospace',
//                           mt: 1,
//                           display: "block",
//                         }}
//                       >
//                         Visualização interativa da jornada de desenvolvimento
//                         contínuo
//                       </Typography>
//                     </GitHubMetric>
//                   </motion.div>
//                 </Box>
//               </Box>

//               <OutputText sx={{ mt: 3 }}>
//                 Estas métricas demonstram não apenas{" "}
//                 <HighlightTextV2>competência técnica</HighlightTextV2>, mas
//                 também <HighlightTextV2>profissionalismo</HighlightTextV2> e{" "}
//                 <HighlightTextV2>
//                   dedicação ao crescimento contínuo
//                 </HighlightTextV2>
//                 . A consistência nas contribuições reflete a disciplina
//                 necessária para projetos de longo prazo e a capacidade de manter{" "}
//                 <HighlightTextV2>alta qualidade de código</HighlightTextV2>{" "}
//                 mesmo com demandas complexas e prazos desafiadores.
//               </OutputText>
//             </Box>

//             <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//             <CommandLine>$ ls --tree stack_tecnologica/</CommandLine>

//             <Box sx={{ mb: 3 }}>
//               <SectionTitle variant="h6">
//                 <CodeIcon sx={{ color: "secondary.main" }} />
//                 Backend (.NET/C#)
//               </SectionTitle>

//               <Box sx={{ pl: 3 }}>
//                 <SkillItem>
//                   ✓ Arquitetura de APIs RESTful seguindo princípios DDD e Clean
//                   Architecture;
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Implementação de padrões SOLID e Design Patterns para código
//                   sustentável;
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Modelagem e otimização de bancos de dados relacionais (SQL
//                   Server, PostgreSQL);
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Desenvolvimento de sistemas distribuídos e microsserviços;
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Implementação de pipelines CI/CD e práticas DevOps.
//                 </SkillItem>
//               </Box>

//               <SectionTitle variant="h6">
//                 <DesignServicesIcon sx={{ color: "secondary.main" }} />
//                 Frontend (React/TypeScript)
//               </SectionTitle>

//               <Box sx={{ pl: 3 }}>
//                 <SkillItem>
//                   ✓ Arquitetura moderna com gerenciamento eficiente de estado
//                   (Redux, Context API);
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Componentização avançada e interfaces responsivas com
//                   Material-UI;
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Otimização de performance e experiência do usuário;
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Integração fluida com APIs e sistemas de backend.
//                 </SkillItem>
//               </Box>

//               <SectionTitle variant="h6">
//                 <CloudIcon sx={{ color: "secondary.main" }} />
//                 Cloud & Infraestrutura
//               </SectionTitle>

//               <Box sx={{ pl: 3 }}>
//                 <SkillItem>
//                   ✓ Arquiteturas cloud-native em Google Cloud Platform;
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Implementação de infraestrutura como código;
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Orquestração de containers com Docker e Kubernetes;
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Configuração de ambientes de alta disponibilidade e
//                   escalabilidade.
//                 </SkillItem>
//               </Box>

//               <SectionTitle variant="h6">
//                 <StorageIcon sx={{ color: "secondary.main" }} />
//                 Especialização
//               </SectionTitle>

//               <Box sx={{ pl: 3 }}>
//                 <SkillItem>✓ Hubs de integração multiplataforma;</SkillItem>
//                 <SkillItem>
//                   ✓ Arquitetura de microsserviços e sistemas distribuídos;
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Automação inteligente de processos (RPAs);
//                 </SkillItem>
//                 <SkillItem>
//                   ✓ Cloud-native applications e infraestrutura escalável.
//                 </SkillItem>
//               </Box>
//             </Box>
//           </TerminalCard>
//         </motion.div>
//       </motion.div>
//     </Container>
//   );
// };

// export default Experience;
