import {
  Avatar,
  Box,
  Card,
  Chip,
  Container,
  IconButton,
  LinearProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import type { FC } from "react";

// Icons
import ArchitectureIcon from "@mui/icons-material/Architecture";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupIcon from "@mui/icons-material/Group";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import StorageIcon from "@mui/icons-material/Storage";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WebIcon from "@mui/icons-material/Web";

import {
  trackProfileConversion,
  trackProfileTabInteraction,
} from "../../firebase";
import { useTypedTranslation } from "../../hooks/useTranslation";

// Styled Components Otimizados
const SkillCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(3),
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
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
    boxShadow: "0 15px 40px rgba(0, 229, 255, 0.15)",
  },
}));

const SkillProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  cursor: "pointer",
  "& .MuiLinearProgress-bar": {
    borderRadius: 4,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const SkillChip = styled(Chip)<{ skilltype: string }>(({ theme, skilltype }) => ({
  margin: theme.spacing(0.5),
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.75rem",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": { transform: "scale(1.05)" },
  ...(skilltype === "expert" && {
    backgroundColor: "rgba(76, 175, 80, 0.15)",
    color: "#4caf50",
    border: "1px solid rgba(76, 175, 80, 0.3)",
  }),
  ...(skilltype === "advanced" && {
    backgroundColor: "rgba(0, 229, 255, 0.15)",
    color: theme.palette.secondary.main,
    border: "1px solid rgba(0, 229, 255, 0.3)",
  }),
  ...(skilltype === "learning" && {
    backgroundColor: "rgba(156, 39, 176, 0.15)",
    color: "#9c27b0",
    border: "1px solid rgba(156, 39, 176, 0.3)",
  }),
  ...(skilltype === "goal" && {
    backgroundColor: "rgba(255, 193, 7, 0.15)",
    color: "#ffc107",
    border: "1px solid rgba(255, 193, 7, 0.3)",
  }),
}));

const CategoryHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(1, 0),
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
}));

const CategoryIcon = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: "12px",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  boxShadow: "0 8px 20px rgba(0, 229, 255, 0.3)",
  flexShrink: 0,
}));

const AchievementBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  background: `linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(13, 33, 55, 0.8) 50%, rgba(2, 136, 209, 0.1) 100%)`,
  borderRadius: theme.spacing(2),
  border: "1px solid rgba(0, 229, 255, 0.2)",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  "&:hover": {
    transform: "translateY(-8px)",
    borderColor: theme.palette.secondary.main,
    boxShadow: "0 15px 40px rgba(0, 229, 255, 0.2)",
  },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(1.5),
  background: "rgba(0, 0, 0, 0.2)",
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1),
  border: "1px solid rgba(255, 255, 255, 0.05)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    background: "rgba(0, 229, 255, 0.05)",
    borderColor: "rgba(0, 229, 255, 0.2)",
    transform: "translateX(10px)",
  },
}));

const Competence: FC = () => {
  const { t } = useTypedTranslation();

  // Funções de Analytics Otimizadas
  const handleSkillClick = (skillName: string, category: string, level: number) => {
    trackProfileTabInteraction("competence", "skill_click", `${category}_${skillName}`);
    if (level >= 90) {
      trackProfileTabInteraction("competence", "expert_skill_interest", skillName);
    }
  };

  const handleGenericClick = (type: string, value: string) => {
    trackProfileTabInteraction("competence", type, value);
  };

  const handleGitHubClick = () => {
    trackProfileTabInteraction("competence", "social_link_click", "github");
    trackProfileConversion("github_visit", "competence");
    window.open("https://github.com/etezolin", "_blank");
  };

  // Dados Consolidados
  const technicalSkills = [
    {
      categoryKey: "backendDev",
      icon: <CodeIcon fontSize="large" />,
      skills: [
        { name: ".NET", level: 95, experienceKey: "fourPlusYears" },
        { name: "C# & OOP", level: 95, experienceKey: "fourPlusYears" },
        { name: "Dapper", level: 95, experienceKey: "fourPlusYears" },
        { name: "Python", level: 70, experienceKey: "twoPlusYears" },
        { name: "Node.js", level: 70, experienceKey: "twoPlusYears" },
        { name: "Microservices", level: 80, experienceKey: "threePlusYears" },
      ],
    },
    {
      categoryKey: "frontendDev",
      icon: <WebIcon fontSize="large" />,
      skills: [
        { name: "React & Hooks", level: 90, experienceKey: "threePlusYears" },
        { name: "TypeScript", level: 90, experienceKey: "threePlusYears" },
        { name: "JavaScript ES6+", level: 90, experienceKey: "fourPlusYears" },
        { name: "Material-UI", level: 90, experienceKey: "threePlusYears" },
        { name: "HTML5 & CSS3", level: 85, experienceKey: "fourPlusYears" },
        { name: "Responsive Design", level: 85, experienceKey: "threePlusYears" },
      ],
    },
    {
      categoryKey: "databaseStorage",
      icon: <StorageIcon fontSize="large" />,
      skills: [
        { name: "SQL Server", level: 95, experienceKey: "fourPlusYears" },
        { name: "PostgreSQL", level: 85, experienceKey: "threePlusYears" },
        { name: "T-SQL Advanced", level: 90, experienceKey: "fourPlusYears" },
        { name: "MongoDB", level: 70, experienceKey: "onePlusYear" },
        { name: "Redis Cache", level: 65, experienceKey: "onePlusYear" },
        { name: "Database Design", level: 95, experienceKey: "fourPlusYears" },
      ],
    },
    {
      categoryKey: "cloudInfrastructure",
      icon: <CloudIcon fontSize="large" />,
      skills: [
        { name: "Google Cloud Platform", level: 75, experienceKey: "twoPlusYears" },
        { name: "Docker", level: 80, experienceKey: "threePlusYears" },
        { name: "CI/CD Pipelines", level: 75, experienceKey: "twoPlusYears" },
        { name: "Kubernetes", level: 55, experienceKey: "onePlusYear" },
        { name: "Google Firebase", level: 60, experienceKey: "onePlusYear" },
        { name: "GitHub Actions", level: 70, experienceKey: "onePlusYear" },
      ],
    },
  ];

  const methodologiesKeys = [
    "cleanArchDDD",
    "cqrsEventSourcing",
    "designPatterns",
    "testDrivenDev",
    "scrumAgile",
    "codeReview",
    "continuousIntegration",
    "apiFirstDev",
  ];

  const learningPath = [
    { year: "2021", milestoneKey: "dotnetInitiation", icon: <CodeIcon /> },
    { year: "2022", milestoneKey: "reactSpecialization", icon: <WebIcon /> },
    { year: "2023", milestoneKey: "microservicesArch", icon: <ArchitectureIcon /> },
    { year: "2024", milestoneKey: "cloudDevOps", icon: <CloudIcon /> },
    { year: "2024", milestoneKey: "aiMlIntegration", icon: <AutoAwesomeIcon /> },
  ];

  const achievements = [
    { icon: <EmojiEventsIcon />, titleKey: "fourPlusYears", subtitleKey: "enterpriseExp" },
    { icon: <BuildIcon />, titleKey: "fivePlusProjects", subtitleKey: "deliveredSuccess" },
    { icon: <GroupIcon />, titleKey: "twoPlusMillionUsers", subtitleKey: "impactedSolutions" },
    { icon: <TrendingUpIcon />, titleKey: "eightyFiveReduction", subtitleKey: "processingTime" },
  ];

  const currentlyLearningKeys = ["machineLearning", "kubernetes", "serverlessArch", "terraformIaC"];
  const nextGoalsKeys = ["azureArchitect", "kafkaStreaming", "graphqlAdvanced", "webAssembly"];

  return (
    <Container sx={{ py: 8 }} id="competence" component="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 6, color: "primary.main" }}>
          {t("competenceTitle")}
        </Typography>

        {/* Competências Técnicas */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
            mb: 6,
          }}
        >
          {technicalSkills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard onClick={() => handleGenericClick("category_card_click", category.categoryKey)}>
                <CategoryHeader>
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        color: "text.primary",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    >
                      {t(category.categoryKey as any)}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.8rem",
                        fontFamily: '"Roboto Mono", monospace',
                      }}
                    >
                      {category.skills.length} {t("technologies")}
                    </Typography>
                  </Box>
                </CategoryHeader>

                {category.skills.map((skill, skillIndex) => (
                  <Box key={skillIndex} sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: '"Roboto Mono", monospace',
                          fontSize: "0.9rem",
                        }}
                      >
                        {skill.name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", fontSize: "0.7rem" }}
                        >
                          {t(skill.experienceKey as any)}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "secondary.main", fontWeight: 600 }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                    </Box>
                    <SkillProgress
                      variant="determinate"
                      value={skill.level}
                      onClick={() => handleSkillClick(skill.name, category.categoryKey, skill.level)}
                    />
                  </Box>
                ))}
              </SkillCard>
            </motion.div>
          ))}
        </Box>

        {/* Metodologias e Práticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SkillCard>
            <CategoryHeader>
              <CategoryIcon>
                <ArchitectureIcon fontSize="large" />
              </CategoryIcon>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: "text.primary",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  {t("methodologiesPractices")}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.8rem",
                    fontFamily: '"Roboto Mono", monospace',
                  }}
                >
                  {t("patternsBestPractices")}
                </Typography>
              </Box>
            </CategoryHeader>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {methodologiesKeys.map((methodKey, index) => (
                <SkillChip
                  key={index}
                  label={t(methodKey as any)}
                  skilltype="advanced"
                  icon={<StarIcon />}
                  onClick={() => handleGenericClick("methodology_click", methodKey)}
                />
              ))}
            </Box>
          </SkillCard>
        </motion.div>

        {/* Jornada de Aprendizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SkillCard>
            <CategoryHeader>
              <CategoryIcon>
                <TimelineIcon fontSize="large" />
              </CategoryIcon>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: "text.primary",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  {t("techEvolutionJourney")}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.8rem",
                    fontFamily: '"Roboto Mono", monospace',
                  }}
                >
                  {t("growthOverYears")}
                </Typography>
              </Box>
            </CategoryHeader>

            <Box sx={{ display: "grid", gap: 1 }}>
              {learningPath.map((item, index) => (
                <TimelineItem
                  key={index}
                  onClick={() => handleGenericClick("timeline_click", `${item.year}_${item.milestoneKey}`)}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "8px",
                      background: (theme) =>
                        `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      boxShadow: "0 4px 12px rgba(0, 229, 255, 0.3)",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: '"Roboto Mono", monospace',
                        color: "secondary.main",
                        fontWeight: 600,
                      }}
                    >
                      {item.year}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.primary" }}>
                      {t(item.milestoneKey as any)}
                    </Typography>
                  </Box>
                </TimelineItem>
              ))}
            </Box>
          </SkillCard>
        </motion.div>

        {/* Conquistas e Métricas */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: 3,
            mb: 6,
          }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AchievementBadge
                onClick={() => handleGenericClick("achievement_click", achievement.titleKey)}
              >
                <Avatar
                  sx={(theme) => ({
                    backgroundColor: "transparent",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: "#ffffff",
                    mb: 2,
                    width: 50,
                    height: 50,
                  })}
                >
                  {achievement.icon}
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: "secondary.main",
                    fontWeight: 600,
                    textAlign: "center",
                    fontSize: "1rem",
                  }}
                >
                  {t(achievement.titleKey as any)}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    textAlign: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  {t(achievement.subtitleKey as any)}
                </Typography>
              </AchievementBadge>
            </motion.div>
          ))}
        </Box>

        {/* Aprendizado Atual e Próximos Objetivos */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
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
                  <SchoolIcon fontSize="large" />
                </CategoryIcon>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      color: "text.primary",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {t("currentlyLearning")}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.8rem",
                      fontFamily: '"Roboto Mono", monospace',
                    }}
                  >
                    {t("continuousGrowth")}
                  </Typography>
                </Box>
              </CategoryHeader>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {currentlyLearningKeys.map((skillKey, index) => (
                  <SkillChip
                    key={index}
                    label={t(skillKey as any)}
                    skilltype="learning"
                    icon={<AutoAwesomeIcon />}
                    onClick={() => handleGenericClick("current_learning_interest", skillKey)}
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
                  <RocketLaunchIcon fontSize="large" />
                </CategoryIcon>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      color: "text.primary",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {t("nextGoals")}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.8rem",
                      fontFamily: '"Roboto Mono", monospace',
                    }}
                  >
                    {t("evolutionRoadmap")}
                  </Typography>
                </Box>
              </CategoryHeader>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {nextGoalsKeys.map((goalKey, index) => (
                  <SkillChip
                    key={index}
                    label={t(goalKey as any)}
                    skilltype="goal"
                    icon={<TrendingUpIcon />}
                    onClick={() => handleGenericClick("next_goal_interest", goalKey)}
                  />
                ))}
              </Box>
            </SkillCard>
          </motion.div>
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: "center",
              mt: 6,
              p: 4,
              background: `linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(2, 136, 209, 0.05) 100%)`,
              border: "1px solid rgba(0, 229, 255, 0.2)",
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Roboto Mono", monospace',
                color: "secondary.main",
                mb: 2,
                fontWeight: 600,
              }}
            >
              {t("alwaysEvolving")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                mb: 3,
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              {t("evolutionDescription")}
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
              <Tooltip title={t("githubPortfolio")}>
                <IconButton
                  sx={{
                    color: "secondary.main",
                    border: "1px solid rgba(0, 229, 255, 0.3)",
                    "&:hover": {
                      backgroundColor: "rgba(0, 229, 255, 0.1)",
                    },
                  }}
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
