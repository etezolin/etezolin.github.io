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
