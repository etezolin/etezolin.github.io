import type { FC } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  LinearProgress,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

// Icons
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GitHubIcon from "@mui/icons-material/GitHub";
import BuildIcon from "@mui/icons-material/Build";
import TimelineIcon from "@mui/icons-material/Timeline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// ✅ CORREÇÃO: Use apenas as funções do analytics, não o hook
import {
  trackProfileTabInteraction,
  trackProfileConversion,
} from "../../firebase";

// Styled Components
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

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.75rem",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&.expert": {
    backgroundColor: "rgba(76, 175, 80, 0.15)",
    color: "#4caf50",
    border: "1px solid rgba(76, 175, 80, 0.3)",
  },
  "&.advanced": {
    backgroundColor: "rgba(0, 229, 255, 0.15)",
    color: theme.palette.secondary.main,
    border: "1px solid rgba(0, 229, 255, 0.3)",
  },
  "&.intermediate": {
    backgroundColor: "rgba(255, 193, 7, 0.15)",
    color: "#ffc107",
    border: "1px solid rgba(255, 193, 7, 0.3)",
  },
  "&.learning": {
    backgroundColor: "rgba(156, 39, 176, 0.15)",
    color: "#9c27b0",
    border: "1px solid rgba(156, 39, 176, 0.3)",
  },
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const SkillMeterBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SkillName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.9rem",
  marginBottom: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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

const MethodologyCard = styled(SkillCard)(() => ({
  background: `linear-gradient(135deg, 
    rgba(0, 229, 255, 0.05) 0%, 
    rgba(13, 33, 55, 0.7) 50%, 
    rgba(2, 136, 209, 0.05) 100%)`,
  border: "1px solid rgba(0, 229, 255, 0.2)",
}));

const TimelineCard = styled(SkillCard)(() => ({
  background: `linear-gradient(135deg, 
    rgba(76, 175, 80, 0.05) 0%, 
    rgba(13, 33, 55, 0.7) 50%, 
    rgba(139, 195, 74, 0.05) 100%)`,
  border: "1px solid rgba(76, 175, 80, 0.2)",
}));

const AchievementBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  background: `linear-gradient(135deg, 
    rgba(0, 229, 255, 0.1) 0%, 
    rgba(13, 33, 55, 0.8) 50%, 
    rgba(2, 136, 209, 0.1) 100%)`,
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
  // ✅ CORREÇÃO: Removido o hook useTabAnalytics daqui
  // O tracking será feito pelo App.tsx com useActiveTabAnalytics

  // Funções para rastrear cliques específicos
  const handleSkillClick = (
    skillName: string,
    category: string,
    level: number
  ) => {
    trackProfileTabInteraction(
      "competence",
      "skill_click",
      `${category}_${skillName}`
    );
    if (level >= 90) {
      trackProfileTabInteraction(
        "competence",
        "expert_skill_interest",
        skillName
      );
    }
  };

  const handleMethodologyClick = (methodology: string) => {
    trackProfileTabInteraction("competence", "methodology_click", methodology);
  };

  const handleTimelineClick = (year: string, milestone: string) => {
    trackProfileTabInteraction(
      "competence",
      "timeline_click",
      `${year}_${milestone}`
    );
  };

  const handleAchievementClick = (title: string) => {
    trackProfileTabInteraction("competence", "achievement_click", title);
  };

  const handleGitHubClick = () => {
    trackProfileTabInteraction("competence", "social_link_click", "github");
    trackProfileConversion("github_visit", "competence");
    window.open("https://github.com/etezolin", "_blank");
  };

  const handleCurrentLearningClick = (skill: string) => {
    trackProfileTabInteraction(
      "competence",
      "current_learning_interest",
      skill
    );
  };

  const handleNextGoalClick = (goal: string) => {
    trackProfileTabInteraction("competence", "next_goal_interest", goal);
  };

  // Dados das skills
  const technicalSkills = [
    {
      category: "Backend Development",
      icon: <CodeIcon fontSize="large" />,
      skills: [
        { name: ".NET", level: 95, experience: "4+ anos" },
        { name: "C# & OOP", level: 95, experience: "4+ anos" },
        { name: "Dapper", level: 95, experience: "4+ anos" },
        { name: "Python", level: 70, experience: "2+ anos" },
        { name: "Node.js", level: 70, experience: "2+ anos" },
        { name: "Microsserviços", level: 80, experience: "3+ anos" },
      ],
    },
    {
      category: "Frontend Development",
      icon: <WebIcon fontSize="large" />,
      skills: [
        { name: "React & Hooks", level: 90, experience: "3+ anos" },
        { name: "TypeScript", level: 90, experience: "3+ anos" },
        { name: "JavaScript ES6+", level: 90, experience: "4+ anos" },
        { name: "Material-UI", level: 90, experience: "3+ anos" },
        { name: "HTML5 & CSS3", level: 85, experience: "4+ anos" },
        { name: "Responsive Design", level: 85, experience: "3+ anos" },
      ],
    },
    {
      category: "Database & Storage",
      icon: <StorageIcon fontSize="large" />,
      skills: [
        { name: "SQL Server", level: 95, experience: "4+ anos" },
        { name: "PostgreSQL", level: 85, experience: "3+ anos" },
        { name: "T-SQL Avançado", level: 90, experience: "4+ anos" },
        { name: "MongoDB", level: 70, experience: "1+ ano" },
        { name: "Redis Cache", level: 65, experience: "1+ anos" },
        { name: "Database Design", level: 95, experience: "4+ anos" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      icon: <CloudIcon fontSize="large" />,
      skills: [
        { name: "Google Cloud Plataform", level: 75, experience: "2+ anos" },
        { name: "Docker", level: 80, experience: "3+ anos" },
        { name: "CI/CD Pipelines", level: 75, experience: "2+ anos" },
        { name: "Kubernetes", level: 55, experience: "1+ ano" },
        { name: "Google Firebase", level: 60, experience: "1+ anos" },
        { name: "GitHub Actions", level: 70, experience: "1+ ano" },
      ],
    },
  ];

  const methodologies = [
    "Clean Architecture & DDD",
    "CQRS & Event Sourcing",
    "Design Patterns & SOLID",
    "Test-Driven Development",
    "Scrum & Metodologias Ágeis",
    "Code Review & Pair Programming",
    "Continuous Integration/Deployment",
    "API-First Development",
  ];

  const learningPath = [
    {
      year: "2021",
      milestone: "Iniciação em .NET Core",
      icon: <CodeIcon />,
    },
    { year: "2022", milestone: "Especialização em React", icon: <WebIcon /> },
    {
      year: "2023",
      milestone: "Arquitetura de Microsserviços",
      icon: <ArchitectureIcon />,
    },
    {
      year: "2024",
      milestone: "Cloud Computing & DevOps",
      icon: <CloudIcon />,
    },
    {
      year: "2024",
      milestone: "IA/ML Integration & Advanced Patterns",
      icon: <AutoAwesomeIcon />,
    },
  ];

  const achievements = [
    {
      icon: <EmojiEventsIcon />,
      title: "4+ Anos",
      subtitle: "Experiência Enterprise",
    },
    {
      icon: <BuildIcon />,
      title: "5+ Projetos",
      subtitle: "Entregues com Sucesso",
    },
    {
      icon: <GroupIcon />,
      title: "2M+ Usuários",
      subtitle: "Impactados por Soluções",
    },
    {
      icon: <TrendingUpIcon />,
      title: "85% Redução",
      subtitle: "Tempo de Processamento",
    },
  ];

  const currentlyLearning = [
    "Machine Learning com Python",
    "Kubernetes",
    "Arquitetura Serverless",
    "Terraform & IaC",
  ];

  const nextGoals = [
    "Azure Solutions Architect",
    "Kafka & Event Streaming",
    "GraphQL Advanced Patterns",
    "WebAssembly (WASM)",
  ];

  return (
    <Container
      sx={{ py: 8 }}
      id="competence"
      component="section"
      // ✅ CORREÇÃO: Removido o ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 6, color: "primary.main" }}>
          // Competências
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
              <SkillCard
                onClick={() =>
                  trackProfileTabInteraction(
                    "competence",
                    "category_card_click",
                    category.category
                  )
                }
              >
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
                      {category.category}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.8rem",
                        fontFamily: '"Roboto Mono", monospace',
                      }}
                    >
                      {category.skills.length} tecnologias
                    </Typography>
                  </Box>
                </CategoryHeader>

                {category.skills.map((skill, skillIndex) => (
                  <SkillMeterBox key={skillIndex}>
                    <SkillName>
                      <span>{skill.name}</span>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", fontSize: "0.7rem" }}
                        >
                          {skill.experience}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "secondary.main", fontWeight: 600 }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                    </SkillName>
                    <SkillProgress
                      variant="determinate"
                      value={skill.level}
                      onClick={() =>
                        handleSkillClick(
                          skill.name,
                          category.category,
                          skill.level
                        )
                      }
                    />
                  </SkillMeterBox>
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
          <MethodologyCard>
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
                  Metodologias & Práticas
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.8rem",
                    fontFamily: '"Roboto Mono", monospace',
                  }}
                >
                  Padrões e boas práticas
                </Typography>
              </Box>
            </CategoryHeader>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {methodologies.map((method, index) => (
                <SkillChip
                  key={index}
                  label={method}
                  className="advanced"
                  icon={<StarIcon />}
                  onClick={() => handleMethodologyClick(method)}
                />
              ))}
            </Box>
          </MethodologyCard>
        </motion.div>

        {/* Jornada de Aprendizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TimelineCard>
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
                  Jornada de Evolução Técnica
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.8rem",
                    fontFamily: '"Roboto Mono", monospace',
                  }}
                >
                  Crescimento ao longo dos anos
                </Typography>
              </Box>
            </CategoryHeader>

            <Box sx={{ display: "grid", gap: 1 }}>
              {learningPath.map((item, index) => (
                <TimelineItem
                  key={index}
                  onClick={() => handleTimelineClick(item.year, item.milestone)}
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
                      {item.milestone}
                    </Typography>
                  </Box>
                </TimelineItem>
              ))}
            </Box>
          </TimelineCard>
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
                onClick={() => handleAchievementClick(achievement.title)}
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
                  {achievement.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    textAlign: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  {achievement.subtitle}
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
                    Aprendendo Atualmente
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.8rem",
                      fontFamily: '"Roboto Mono", monospace',
                    }}
                  >
                    Crescimento contínuo
                  </Typography>
                </Box>
              </CategoryHeader>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {currentlyLearning.map((skill, index) => (
                  <SkillChip
                    key={index}
                    label={skill}
                    className="learning"
                    icon={<AutoAwesomeIcon />}
                    onClick={() => handleCurrentLearningClick(skill)}
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
                    Próximos Objetivos
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.8rem",
                      fontFamily: '"Roboto Mono", monospace',
                    }}
                  >
                    Roadmap de evolução
                  </Typography>
                </Box>
              </CategoryHeader>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {nextGoals.map((goal, index) => (
                  <SkillChip
                    key={index}
                    label={goal}
                    className="intermediate"
                    icon={<TrendingUpIcon />}
                    onClick={() => handleNextGoalClick(goal)}
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
              background: `linear-gradient(135deg, 
                rgba(0, 229, 255, 0.1) 0%, 
                rgba(2, 136, 209, 0.05) 100%)`,
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
              // Sempre em Evolução
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
              A tecnologia evolui constantemente, e eu evoluo junto. Cada
              projeto é uma oportunidade de aprender algo novo e aplicar as
              melhores práticas do mercado.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
              <Tooltip title="Portfólio no GitHub">
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

// // import type { FC } from "react";
// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   Card,
// //   LinearProgress,
// //   Chip,
// //   Avatar,
// //   IconButton,
// //   Tooltip,
// // } from "@mui/material";
// // import { motion } from "framer-motion";
// // import { styled } from "@mui/material/styles";

// // // Icons
// // import CodeIcon from "@mui/icons-material/Code";
// // import WebIcon from "@mui/icons-material/Web";
// // import StorageIcon from "@mui/icons-material/Storage";
// // import CloudIcon from "@mui/icons-material/Cloud";
// // import ArchitectureIcon from "@mui/icons-material/Architecture";
// // import GroupIcon from "@mui/icons-material/Group";
// // import SchoolIcon from "@mui/icons-material/School";
// // import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// // import StarIcon from "@mui/icons-material/Star";
// // import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// // import GitHubIcon from "@mui/icons-material/GitHub";
// // import BuildIcon from "@mui/icons-material/Build";
// // import TimelineIcon from "@mui/icons-material/Timeline";
// // import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// // import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// // // Import das funções de analytics
// // import {
// //   trackProfileTabInteraction,
// //   trackProfileConversion,
// // } from "../../firebase";
// // import { useTabAnalytics } from "../../hooks/useTabAnalytics";

// // // Styled Components - Ordem correta
// // const SkillCard = styled(Card)(({ theme }) => ({
// //   padding: theme.spacing(3),
// //   background: "rgba(13, 33, 55, 0.7)",
// //   backdropFilter: "blur(10px)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   borderRadius: theme.spacing(2),
// //   marginBottom: theme.spacing(3),
// //   transition: "all 0.3s ease",
// //   position: "relative",
// //   overflow: "hidden",
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
// //     boxShadow: "0 15px 40px rgba(0, 229, 255, 0.15)",
// //   },
// // }));

// // const SkillProgress = styled(LinearProgress)(({ theme }) => ({
// //   height: 8,
// //   borderRadius: 4,
// //   backgroundColor: "rgba(255, 255, 255, 0.1)",
// //   cursor: "pointer", // Adicionado para analytics
// //   "& .MuiLinearProgress-bar": {
// //     borderRadius: 4,
// //     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //   },
// // }));

// // const SkillChip = styled(Chip)(({ theme }) => ({
// //   margin: theme.spacing(0.5),
// //   fontFamily: '"Roboto Mono", monospace',
// //   fontSize: "0.75rem",
// //   transition: "all 0.3s ease",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&.expert": {
// //     backgroundColor: "rgba(76, 175, 80, 0.15)",
// //     color: "#4caf50",
// //     border: "1px solid rgba(76, 175, 80, 0.3)",
// //   },
// //   "&.advanced": {
// //     backgroundColor: "rgba(0, 229, 255, 0.15)",
// //     color: theme.palette.secondary.main,
// //     border: "1px solid rgba(0, 229, 255, 0.3)",
// //   },
// //   "&.intermediate": {
// //     backgroundColor: "rgba(255, 193, 7, 0.15)",
// //     color: "#ffc107",
// //     border: "1px solid rgba(255, 193, 7, 0.3)",
// //   },
// //   "&.learning": {
// //     backgroundColor: "rgba(156, 39, 176, 0.15)",
// //     color: "#9c27b0",
// //     border: "1px solid rgba(156, 39, 176, 0.3)",
// //   },
// //   "&:hover": {
// //     transform: "scale(1.05)",
// //   },
// // }));

// // const SkillMeterBox = styled(Box)(({ theme }) => ({
// //   marginBottom: theme.spacing(2),
// // }));

// // const SkillName = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   fontSize: "0.9rem",
// //   marginBottom: theme.spacing(1),
// //   display: "flex",
// //   justifyContent: "space-between",
// //   alignItems: "center",
// // }));

// // const CategoryHeader = styled(Box)(({ theme }) => ({
// //   display: "flex",
// //   alignItems: "center",
// //   gap: theme.spacing(2),
// //   marginBottom: theme.spacing(3),
// //   padding: theme.spacing(1, 0),
// //   borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
// // }));

// // const CategoryIcon = styled(Box)(({ theme }) => ({
// //   width: 50,
// //   height: 50,
// //   borderRadius: "12px",
// //   background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   color: "#ffffff",
// //   boxShadow: "0 8px 20px rgba(0, 229, 255, 0.3)",
// //   flexShrink: 0,
// // }));

// // const MethodologyCard = styled(SkillCard)(() => ({
// //   background: `linear-gradient(135deg,
// //     rgba(0, 229, 255, 0.05) 0%,
// //     rgba(13, 33, 55, 0.7) 50%,
// //     rgba(2, 136, 209, 0.05) 100%)`,
// //   border: "1px solid rgba(0, 229, 255, 0.2)",
// // }));

// // const TimelineCard = styled(SkillCard)(() => ({
// //   background: `linear-gradient(135deg,
// //     rgba(76, 175, 80, 0.05) 0%,
// //     rgba(13, 33, 55, 0.7) 50%,
// //     rgba(139, 195, 74, 0.05) 100%)`,
// //   border: "1px solid rgba(76, 175, 80, 0.2)",
// // }));

// // const AchievementBadge = styled(Box)(({ theme }) => ({
// //   display: "flex",
// //   flexDirection: "column",
// //   alignItems: "center",
// //   padding: theme.spacing(3),
// //   background: `linear-gradient(135deg,
// //     rgba(0, 229, 255, 0.1) 0%,
// //     rgba(13, 33, 55, 0.8) 50%,
// //     rgba(2, 136, 209, 0.1) 100%)`,
// //   borderRadius: theme.spacing(2),
// //   border: "1px solid rgba(0, 229, 255, 0.2)",
// //   transition: "all 0.3s ease",
// //   position: "relative",
// //   overflow: "hidden",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&::before": {
// //     content: '""',
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     height: "2px",
// //     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //   },
// //   "&:hover": {
// //     transform: "translateY(-8px)",
// //     borderColor: theme.palette.secondary.main,
// //     boxShadow: "0 15px 40px rgba(0, 229, 255, 0.2)",
// //   },
// // }));

// // const TimelineItem = styled(Box)(({ theme }) => ({
// //   display: "flex",
// //   alignItems: "center",
// //   gap: theme.spacing(2),
// //   padding: theme.spacing(1.5),
// //   background: "rgba(0, 0, 0, 0.2)",
// //   borderRadius: theme.spacing(1),
// //   marginBottom: theme.spacing(1),
// //   border: "1px solid rgba(255, 255, 255, 0.05)",
// //   transition: "all 0.3s ease",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&:hover": {
// //     background: "rgba(0, 229, 255, 0.05)",
// //     borderColor: "rgba(0, 229, 255, 0.2)",
// //     transform: "translateX(10px)",
// //   },
// // }));

// // const Competence: FC = () => {
// //   const { sectionRef } = useTabAnalytics("competence");

// //   // Função para rastrear cliques em skills específicas
// //   const handleSkillClick = (
// //     skillName: string,
// //     category: string,
// //     level: number
// //   ) => {
// //     trackProfileTabInteraction(
// //       "competence",
// //       "skill_click",
// //       `${category}_${skillName}`
// //     );
// //     // Rastreia interesse em skills de alto nível
// //     if (level >= 90) {
// //       trackProfileTabInteraction(
// //         "competence",
// //         "expert_skill_interest",
// //         skillName
// //       );
// //     }
// //   };

// //   // Função para rastrear cliques em metodologias
// //   const handleMethodologyClick = (methodology: string) => {
// //     trackProfileTabInteraction("competence", "methodology_click", methodology);
// //   };

// //   // Função para rastrear cliques em timeline
// //   const handleTimelineClick = (year: string, milestone: string) => {
// //     trackProfileTabInteraction(
// //       "competence",
// //       "timeline_click",
// //       `${year}_${milestone}`
// //     );
// //   };

// //   // Função para rastrear cliques em conquistas
// //   const handleAchievementClick = (title: string) => {
// //     trackProfileTabInteraction("competence", "achievement_click", title);
// //   };

// //   // Função para rastrear cliques no GitHub
// //   const handleGitHubClick = () => {
// //     trackProfileTabInteraction("competence", "social_link_click", "github");
// //     trackProfileConversion("github_visit", "competence");
// //     window.open("https://github.com/etezolin", "_blank");
// //   };

// //   // Função para rastrear interesse em aprendizado atual
// //   const handleCurrentLearningClick = (skill: string) => {
// //     trackProfileTabInteraction(
// //       "competence",
// //       "current_learning_interest",
// //       skill
// //     );
// //   };

// //   // Função para rastrear interesse em próximos objetivos
// //   const handleNextGoalClick = (goal: string) => {
// //     trackProfileTabInteraction("competence", "next_goal_interest", goal);
// //   };

// //   // Lista de projetos anonimizados mas com detalhes técnicos relevantes
// //   const technicalSkills = [
// //     {
// //       category: "Backend Development",
// //       icon: <CodeIcon fontSize="large" />,
// //       skills: [
// //         { name: ".NET", level: 95, experience: "4+ anos" },
// //         { name: "C# & OOP", level: 95, experience: "4+ anos" },
// //         { name: "Dapper", level: 95, experience: "4+ anos" },
// //         { name: "Python", level: 70, experience: "2+ anos" },
// //         { name: "Node.js", level: 70, experience: "2+ anos" },
// //         { name: "Microsserviços", level: 80, experience: "3+ anos" },
// //       ],
// //     },
// //     {
// //       category: "Frontend Development",
// //       icon: <WebIcon fontSize="large" />,
// //       skills: [
// //         { name: "React & Hooks", level: 90, experience: "3+ anos" },
// //         { name: "TypeScript", level: 90, experience: "3+ anos" },
// //         { name: "JavaScript ES6+", level: 90, experience: "4+ anos" },
// //         { name: "Material-UI", level: 90, experience: "3+ anos" },
// //         { name: "HTML5 & CSS3", level: 85, experience: "4+ anos" },
// //         { name: "Responsive Design", level: 85, experience: "3+ anos" },
// //       ],
// //     },
// //     {
// //       category: "Database & Storage",
// //       icon: <StorageIcon fontSize="large" />,
// //       skills: [
// //         { name: "SQL Server", level: 95, experience: "4+ anos" },
// //         { name: "PostgreSQL", level: 85, experience: "3+ anos" },
// //         { name: "T-SQL Avançado", level: 90, experience: "4+ anos" },
// //         { name: "MongoDB", level: 70, experience: "1+ ano" },
// //         { name: "Redis Cache", level: 65, experience: "1+ anos" },
// //         { name: "Database Design", level: 95, experience: "4+ anos" },
// //       ],
// //     },
// //     {
// //       category: "Cloud & Infrastructure",
// //       icon: <CloudIcon fontSize="large" />,
// //       skills: [
// //         { name: "Google Cloud Plataform", level: 75, experience: "2+ anos" },
// //         { name: "Docker", level: 80, experience: "3+ anos" },
// //         { name: "CI/CD Pipelines", level: 75, experience: "2+ anos" },
// //         { name: "Kubernetes", level: 55, experience: "1+ ano" },
// //         { name: "Google Firebase", level: 60, experience: "1+ anos" },
// //         { name: "GitHub Actions", level: 70, experience: "1+ ano" },
// //       ],
// //     },
// //   ];

// //   const methodologies = [
// //     "Clean Architecture & DDD",
// //     "CQRS & Event Sourcing",
// //     "Design Patterns & SOLID",
// //     "Test-Driven Development",
// //     "Scrum & Metodologias Ágeis",
// //     "Code Review & Pair Programming",
// //     "Continuous Integration/Deployment",
// //     "API-First Development",
// //   ];

// //   const learningPath = [
// //     {
// //       year: "2021",
// //       milestone: "Iniciação em .NET Core",
// //       icon: <CodeIcon />,
// //     },
// //     { year: "2022", milestone: "Especialização em React", icon: <WebIcon /> },
// //     {
// //       year: "2023",
// //       milestone: "Arquitetura de Microsserviços",
// //       icon: <ArchitectureIcon />,
// //     },
// //     {
// //       year: "2024",
// //       milestone: "Cloud Computing & DevOps",
// //       icon: <CloudIcon />,
// //     },
// //     {
// //       year: "2024",
// //       milestone: "IA/ML Integration & Advanced Patterns",
// //       icon: <AutoAwesomeIcon />,
// //     },
// //   ];

// //   const achievements = [
// //     {
// //       icon: <EmojiEventsIcon />,
// //       title: "4+ Anos",
// //       subtitle: "Experiência Enterprise",
// //     },
// //     {
// //       icon: <BuildIcon />,
// //       title: "5+ Projetos",
// //       subtitle: "Entregues com Sucesso",
// //     },
// //     {
// //       icon: <GroupIcon />,
// //       title: "2M+ Usuários",
// //       subtitle: "Impactados por Soluções",
// //     },
// //     {
// //       icon: <TrendingUpIcon />,
// //       title: "85% Redução",
// //       subtitle: "Tempo de Processamento",
// //     },
// //   ];

// //   const currentlyLearning = [
// //     "Machine Learning com Python",
// //     "Kubernetes",
// //     "Arquitetura Serverless",
// //     "Terraform & IaC",
// //   ];

// //   const nextGoals = [
// //     "Azure Solutions Architect",
// //     "Kafka & Event Streaming",
// //     "GraphQL Advanced Patterns",
// //     "WebAssembly (WASM)",
// //   ];

// //   return (
// //     <Container
// //       sx={{ py: 8 }}
// //       id="competence"
// //       component="section"
// //       ref={sectionRef}
// //     >
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <Typography variant="h2" sx={{ mb: 6, color: "primary.main" }}>
// //           // Competências
// //         </Typography>

// //         {/* Competências Técnicas */}
// //         <Box
// //           sx={{
// //             display: "grid",
// //             gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
// //             gap: 4,
// //             mb: 6,
// //           }}
// //         >
// //           {technicalSkills.map((category, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: index * 0.1 }}
// //               viewport={{ once: true }}
// //             >
// //               <SkillCard
// //                 onClick={() =>
// //                   trackProfileTabInteraction(
// //                     "competence",
// //                     "category_card_click",
// //                     category.category
// //                   )
// //                 }
// //               >
// //                 <CategoryHeader>
// //                   <CategoryIcon>{category.icon}</CategoryIcon>
// //                   <Box>
// //                     <Typography
// //                       variant="h6"
// //                       sx={{
// //                         fontFamily: '"Roboto Mono", monospace',
// //                         color: "text.primary",
// //                         fontWeight: 600,
// //                         fontSize: "1.1rem",
// //                       }}
// //                     >
// //                       {category.category}
// //                     </Typography>
// //                     <Typography
// //                       variant="caption"
// //                       sx={{
// //                         color: "text.secondary",
// //                         fontSize: "0.8rem",
// //                         fontFamily: '"Roboto Mono", monospace',
// //                       }}
// //                     >
// //                       {category.skills.length} tecnologias
// //                     </Typography>
// //                   </Box>
// //                 </CategoryHeader>

// //                 {category.skills.map((skill, skillIndex) => (
// //                   <SkillMeterBox key={skillIndex}>
// //                     <SkillName>
// //                       <span>{skill.name}</span>
// //                       <Box
// //                         sx={{ display: "flex", alignItems: "center", gap: 1 }}
// //                       >
// //                         <Typography
// //                           variant="caption"
// //                           sx={{ color: "text.secondary", fontSize: "0.7rem" }}
// //                         >
// //                           {skill.experience}
// //                         </Typography>
// //                         <Typography
// //                           variant="caption"
// //                           sx={{ color: "secondary.main", fontWeight: 600 }}
// //                         >
// //                           {skill.level}%
// //                         </Typography>
// //                       </Box>
// //                     </SkillName>
// //                     <SkillProgress
// //                       variant="determinate"
// //                       value={skill.level}
// //                       onClick={() =>
// //                         handleSkillClick(
// //                           skill.name,
// //                           category.category,
// //                           skill.level
// //                         )
// //                       }
// //                     />
// //                   </SkillMeterBox>
// //                 ))}
// //               </SkillCard>
// //             </motion.div>
// //           ))}
// //         </Box>

// //         {/* Metodologias e Práticas */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //         >
// //           <MethodologyCard>
// //             <CategoryHeader>
// //               <CategoryIcon>
// //                 <ArchitectureIcon fontSize="large" />
// //               </CategoryIcon>
// //               <Box>
// //                 <Typography
// //                   variant="h6"
// //                   sx={{
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     color: "text.primary",
// //                     fontWeight: 600,
// //                     fontSize: "1.1rem",
// //                   }}
// //                 >
// //                   Metodologias & Práticas
// //                 </Typography>
// //                 <Typography
// //                   variant="caption"
// //                   sx={{
// //                     color: "text.secondary",
// //                     fontSize: "0.8rem",
// //                     fontFamily: '"Roboto Mono", monospace',
// //                   }}
// //                 >
// //                   Padrões e boas práticas
// //                 </Typography>
// //               </Box>
// //             </CategoryHeader>

// //             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
// //               {methodologies.map((method, index) => (
// //                 <SkillChip
// //                   key={index}
// //                   label={method}
// //                   className="advanced"
// //                   icon={<StarIcon />}
// //                   onClick={() => handleMethodologyClick(method)}
// //                 />
// //               ))}
// //             </Box>
// //           </MethodologyCard>
// //         </motion.div>

// //         {/* Jornada de Aprendizado */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //         >
// //           <TimelineCard>
// //             <CategoryHeader>
// //               <CategoryIcon>
// //                 <TimelineIcon fontSize="large" />
// //               </CategoryIcon>
// //               <Box>
// //                 <Typography
// //                   variant="h6"
// //                   sx={{
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     color: "text.primary",
// //                     fontWeight: 600,
// //                     fontSize: "1.1rem",
// //                   }}
// //                 >
// //                   Jornada de Evolução Técnica
// //                 </Typography>
// //                 <Typography
// //                   variant="caption"
// //                   sx={{
// //                     color: "text.secondary",
// //                     fontSize: "0.8rem",
// //                     fontFamily: '"Roboto Mono", monospace',
// //                   }}
// //                 >
// //                   Crescimento ao longo dos anos
// //                 </Typography>
// //               </Box>
// //             </CategoryHeader>

// //             <Box sx={{ display: "grid", gap: 1 }}>
// //               {learningPath.map((item, index) => (
// //                 <TimelineItem
// //                   key={index}
// //                   onClick={() => handleTimelineClick(item.year, item.milestone)}
// //                 >
// //                   <Box
// //                     sx={{
// //                       width: 40,
// //                       height: 40,
// //                       borderRadius: "8px",
// //                       background: (theme) =>
// //                         `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "center",
// //                       color: "#ffffff",
// //                       boxShadow: "0 4px 12px rgba(0, 229, 255, 0.3)",
// //                     }}
// //                   >
// //                     {item.icon}
// //                   </Box>
// //                   <Box>
// //                     <Typography
// //                       variant="body2"
// //                       sx={{
// //                         fontFamily: '"Roboto Mono", monospace',
// //                         color: "secondary.main",
// //                         fontWeight: 600,
// //                       }}
// //                     >
// //                       {item.year}
// //                     </Typography>
// //                     <Typography variant="body2" sx={{ color: "text.primary" }}>
// //                       {item.milestone}
// //                     </Typography>
// //                   </Box>
// //                 </TimelineItem>
// //               ))}
// //             </Box>
// //           </TimelineCard>
// //         </motion.div>

// //         {/* Conquistas e Métricas */}
// //         <Box
// //           sx={{
// //             display: "grid",
// //             gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
// //             gap: 3,
// //             mb: 6,
// //           }}
// //         >
// //           {achievements.map((achievement, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //               viewport={{ once: true }}
// //             >
// //               <AchievementBadge
// //                 onClick={() => handleAchievementClick(achievement.title)}
// //               >
// //                 <Avatar
// //                   sx={(theme) => ({
// //                     backgroundColor: "transparent",
// //                     background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //                     color: "#ffffff",
// //                     mb: 2,
// //                     width: 50,
// //                     height: 50,
// //                   })}
// //                 >
// //                   {achievement.icon}
// //                 </Avatar>
// //                 <Typography
// //                   variant="h6"
// //                   sx={{
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     color: "secondary.main",
// //                     fontWeight: 600,
// //                     textAlign: "center",
// //                     fontSize: "1rem",
// //                   }}
// //                 >
// //                   {achievement.title}
// //                 </Typography>
// //                 <Typography
// //                   variant="caption"
// //                   sx={{
// //                     color: "text.secondary",
// //                     textAlign: "center",
// //                     fontSize: "0.8rem",
// //                   }}
// //                 >
// //                   {achievement.subtitle}
// //                 </Typography>
// //               </AchievementBadge>
// //             </motion.div>
// //           ))}
// //         </Box>

// //         {/* Aprendizado Atual e Próximos Objetivos */}
// //         <Box
// //           sx={{
// //             display: "grid",
// //             gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
// //             gap: 4,
// //           }}
// //         >
// //           <motion.div
// //             initial={{ opacity: 0, x: -20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //           >
// //             <SkillCard>
// //               <CategoryHeader>
// //                 <CategoryIcon>
// //                   <SchoolIcon fontSize="large" />
// //                 </CategoryIcon>
// //                 <Box>
// //                   <Typography
// //                     variant="h6"
// //                     sx={{
// //                       fontFamily: '"Roboto Mono", monospace',
// //                       color: "text.primary",
// //                       fontWeight: 600,
// //                       fontSize: "1.1rem",
// //                     }}
// //                   >
// //                     Aprendendo Atualmente
// //                   </Typography>
// //                   <Typography
// //                     variant="caption"
// //                     sx={{
// //                       color: "text.secondary",
// //                       fontSize: "0.8rem",
// //                       fontFamily: '"Roboto Mono", monospace',
// //                     }}
// //                   >
// //                     Crescimento contínuo
// //                   </Typography>
// //                 </Box>
// //               </CategoryHeader>

// //               <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
// //                 {currentlyLearning.map((skill, index) => (
// //                   <SkillChip
// //                     key={index}
// //                     label={skill}
// //                     className="learning"
// //                     icon={<AutoAwesomeIcon />}
// //                     onClick={() => handleCurrentLearningClick(skill)}
// //                   />
// //                 ))}
// //               </Box>
// //             </SkillCard>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 20 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6 }}
// //             viewport={{ once: true }}
// //           >
// //             <SkillCard>
// //               <CategoryHeader>
// //                 <CategoryIcon>
// //                   <RocketLaunchIcon fontSize="large" />
// //                 </CategoryIcon>
// //                 <Box>
// //                   <Typography
// //                     variant="h6"
// //                     sx={{
// //                       fontFamily: '"Roboto Mono", monospace',
// //                       color: "text.primary",
// //                       fontWeight: 600,
// //                       fontSize: "1.1rem",
// //                     }}
// //                   >
// //                     Próximos Objetivos
// //                   </Typography>
// //                   <Typography
// //                     variant="caption"
// //                     sx={{
// //                       color: "text.secondary",
// //                       fontSize: "0.8rem",
// //                       fontFamily: '"Roboto Mono", monospace',
// //                     }}
// //                   >
// //                     Roadmap de evolução
// //                   </Typography>
// //                 </Box>
// //               </CategoryHeader>

// //               <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
// //                 {nextGoals.map((goal, index) => (
// //                   <SkillChip
// //                     key={index}
// //                     label={goal}
// //                     className="intermediate"
// //                     icon={<TrendingUpIcon />}
// //                     onClick={() => handleNextGoalClick(goal)}
// //                   />
// //                 ))}
// //               </Box>
// //             </SkillCard>
// //           </motion.div>
// //         </Box>

// //         {/* Call to Action */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //         >
// //           <Box
// //             sx={{
// //               textAlign: "center",
// //               mt: 6,
// //               p: 4,
// //               background: `linear-gradient(135deg,
// //                 rgba(0, 229, 255, 0.1) 0%,
// //                 rgba(2, 136, 209, 0.05) 100%)`,
// //               border: "1px solid rgba(0, 229, 255, 0.2)",
// //               borderRadius: 2,
// //             }}
// //           >
// //             <Typography
// //               variant="h5"
// //               sx={{
// //                 fontFamily: '"Roboto Mono", monospace',
// //                 color: "secondary.main",
// //                 mb: 2,
// //                 fontWeight: 600,
// //               }}
// //             >
// //               // Sempre em Evolução
// //             </Typography>
// //             <Typography
// //               variant="body1"
// //               sx={{
// //                 color: "text.primary",
// //                 mb: 3,
// //                 maxWidth: 600,
// //                 mx: "auto",
// //                 lineHeight: 1.6,
// //               }}
// //             >
// //               A tecnologia evolui constantemente, e eu evoluo junto. Cada
// //               projeto é uma oportunidade de aprender algo novo e aplicar as
// //               melhores práticas do mercado.
// //             </Typography>

// //             <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
// //               <Tooltip title="Portfólio no GitHub">
// //                 <IconButton
// //                   sx={{
// //                     color: "secondary.main",
// //                     border: "1px solid rgba(0, 229, 255, 0.3)",
// //                     "&:hover": {
// //                       backgroundColor: "rgba(0, 229, 255, 0.1)",
// //                     },
// //                   }}
// //                   onClick={handleGitHubClick}
// //                 >
// //                   <GitHubIcon />
// //                 </IconButton>
// //               </Tooltip>
// //             </Box>
// //           </Box>
// //         </motion.div>
// //       </motion.div>
// //     </Container>
// //   );
// // };

// // export default Competence;

// import type { FC } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Card,
//   LinearProgress,
//   Chip,
//   Avatar,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";

// // Icons
// import CodeIcon from "@mui/icons-material/Code";
// import WebIcon from "@mui/icons-material/Web";
// import StorageIcon from "@mui/icons-material/Storage";
// import CloudIcon from "@mui/icons-material/Cloud";
// import ArchitectureIcon from "@mui/icons-material/Architecture";
// import GroupIcon from "@mui/icons-material/Group";
// import SchoolIcon from "@mui/icons-material/School";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import StarIcon from "@mui/icons-material/Star";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import BuildIcon from "@mui/icons-material/Build";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

// // Styled Components - Ordem correta
// const SkillCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   borderRadius: theme.spacing(2),
//   marginBottom: theme.spacing(3),
//   transition: "all 0.3s ease",
//   position: "relative",
//   overflow: "hidden",
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
//     boxShadow: "0 15px 40px rgba(0, 229, 255, 0.15)",
//   },
// }));

// const SkillProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 8,
//   borderRadius: 4,
//   backgroundColor: "rgba(255, 255, 255, 0.1)",
//   "& .MuiLinearProgress-bar": {
//     borderRadius: 4,
//     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//   },
// }));

// const SkillChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.5),
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.75rem",
//   transition: "all 0.3s ease",
//   "&.expert": {
//     backgroundColor: "rgba(76, 175, 80, 0.15)",
//     color: "#4caf50",
//     border: "1px solid rgba(76, 175, 80, 0.3)",
//   },
//   "&.advanced": {
//     backgroundColor: "rgba(0, 229, 255, 0.15)",
//     color: theme.palette.secondary.main,
//     border: "1px solid rgba(0, 229, 255, 0.3)",
//   },
//   "&.intermediate": {
//     backgroundColor: "rgba(255, 193, 7, 0.15)",
//     color: "#ffc107",
//     border: "1px solid rgba(255, 193, 7, 0.3)",
//   },
//   "&.learning": {
//     backgroundColor: "rgba(156, 39, 176, 0.15)",
//     color: "#9c27b0",
//     border: "1px solid rgba(156, 39, 176, 0.3)",
//   },
//   "&:hover": {
//     transform: "scale(1.05)",
//   },
// }));

// const SkillMeterBox = styled(Box)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
// }));

// const SkillName = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.9rem",
//   marginBottom: theme.spacing(1),
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// }));

// const CategoryHeader = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(2),
//   marginBottom: theme.spacing(3),
//   padding: theme.spacing(1, 0),
//   borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
// }));

// const CategoryIcon = styled(Box)(({ theme }) => ({
//   width: 50,
//   height: 50,
//   borderRadius: "12px",
//   background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#ffffff",
//   boxShadow: "0 8px 20px rgba(0, 229, 255, 0.3)",
//   flexShrink: 0,
// }));

// const MethodologyCard = styled(SkillCard)(() => ({
//   background: `linear-gradient(135deg,
//     rgba(0, 229, 255, 0.05) 0%,
//     rgba(13, 33, 55, 0.7) 50%,
//     rgba(2, 136, 209, 0.05) 100%)`,
//   border: "1px solid rgba(0, 229, 255, 0.2)",
// }));

// const TimelineCard = styled(SkillCard)(() => ({
//   background: `linear-gradient(135deg,
//     rgba(76, 175, 80, 0.05) 0%,
//     rgba(13, 33, 55, 0.7) 50%,
//     rgba(139, 195, 74, 0.05) 100%)`,
//   border: "1px solid rgba(76, 175, 80, 0.2)",
// }));

// const AchievementBadge = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: theme.spacing(3),
//   background: `linear-gradient(135deg,
//     rgba(0, 229, 255, 0.1) 0%,
//     rgba(13, 33, 55, 0.8) 50%,
//     rgba(2, 136, 209, 0.1) 100%)`,
//   borderRadius: theme.spacing(2),
//   border: "1px solid rgba(0, 229, 255, 0.2)",
//   transition: "all 0.3s ease",
//   position: "relative",
//   overflow: "hidden",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "2px",
//     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//   },
//   "&:hover": {
//     transform: "translateY(-8px)",
//     borderColor: theme.palette.secondary.main,
//     boxShadow: "0 15px 40px rgba(0, 229, 255, 0.2)",
//   },
// }));

// const TimelineItem = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(2),
//   padding: theme.spacing(1.5),
//   background: "rgba(0, 0, 0, 0.2)",
//   borderRadius: theme.spacing(1),
//   marginBottom: theme.spacing(1),
//   border: "1px solid rgba(255, 255, 255, 0.05)",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     background: "rgba(0, 229, 255, 0.05)",
//     borderColor: "rgba(0, 229, 255, 0.2)",
//     transform: "translateX(10px)",
//   },
// }));

// const Competence: FC = () => {
//   // Lista de projetos anonimizados mas com detalhes técnicos relevantes
//   const technicalSkills = [
//     {
//       category: "Backend Development",
//       icon: <CodeIcon fontSize="large" />,
//       skills: [
//         { name: ".NET", level: 95, experience: "4+ anos" },
//         { name: "C# & OOP", level: 95, experience: "4+ anos" },
//         { name: "Dapper", level: 95, experience: "4+ anos" },
//         { name: "Python", level: 70, experience: "2+ anos" },
//         { name: "Node.js", level: 70, experience: "2+ anos" },
//         { name: "Microsserviços", level: 80, experience: "3+ anos" },
//       ],
//     },
//     {
//       category: "Frontend Development",
//       icon: <WebIcon fontSize="large" />,
//       skills: [
//         { name: "React & Hooks", level: 90, experience: "3+ anos" },
//         { name: "TypeScript", level: 90, experience: "3+ anos" },
//         { name: "JavaScript ES6+", level: 90, experience: "4+ anos" },
//         { name: "Material-UI", level: 90, experience: "3+ anos" },
//         { name: "HTML5 & CSS3", level: 85, experience: "4+ anos" },
//         { name: "Responsive Design", level: 85, experience: "3+ anos" },
//       ],
//     },
//     {
//       category: "Database & Storage",
//       icon: <StorageIcon fontSize="large" />,
//       skills: [
//         { name: "SQL Server", level: 95, experience: "4+ anos" },
//         { name: "PostgreSQL", level: 85, experience: "3+ anos" },
//         { name: "T-SQL Avançado", level: 90, experience: "4+ anos" },
//         { name: "MongoDB", level: 70, experience: "1+ ano" },
//         { name: "Redis Cache", level: 65, experience: "1+ anos" },
//         { name: "Database Design", level: 95, experience: "4+ anos" },
//       ],
//     },
//     {
//       category: "Cloud & Infrastructure",
//       icon: <CloudIcon fontSize="large" />,
//       skills: [
//         { name: "Google Cloud Plataform", level: 75, experience: "2+ anos" },
//         { name: "Docker", level: 80, experience: "3+ anos" },
//         { name: "CI/CD Pipelines", level: 75, experience: "2+ anos" },
//         { name: "Kubernetes", level: 55, experience: "1+ ano" },
//         { name: "Google Firebase", level: 60, experience: "1+ anos" },
//         { name: "GitHub Actions", level: 70, experience: "1+ ano" },
//       ],
//     },
//   ];

//   const methodologies = [
//     "Clean Architecture & DDD",
//     "CQRS & Event Sourcing",
//     "Design Patterns & SOLID",
//     "Test-Driven Development",
//     "Scrum & Metodologias Ágeis",
//     "Code Review & Pair Programming",
//     "Continuous Integration/Deployment",
//     "API-First Development",
//   ];

//   const learningPath = [
//     {
//       year: "2021",
//       milestone: "Iniciação em .NET Core",
//       icon: <CodeIcon />,
//     },
//     { year: "2022", milestone: "Especialização em React", icon: <WebIcon /> },
//     {
//       year: "2023",
//       milestone: "Arquitetura de Microsserviços",
//       icon: <ArchitectureIcon />,
//     },
//     {
//       year: "2024",
//       milestone: "Cloud Computing & DevOps",
//       icon: <CloudIcon />,
//     },
//     {
//       year: "2024",
//       milestone: "IA/ML Integration & Advanced Patterns",
//       icon: <AutoAwesomeIcon />,
//     },
//   ];

//   const achievements = [
//     {
//       icon: <EmojiEventsIcon />,
//       title: "4+ Anos",
//       subtitle: "Experiência Enterprise",
//     },
//     {
//       icon: <BuildIcon />,
//       title: "5+ Projetos",
//       subtitle: "Entregues com Sucesso",
//     },
//     {
//       icon: <GroupIcon />,
//       title: "2M+ Usuários",
//       subtitle: "Impactados por Soluções",
//     },
//     {
//       icon: <TrendingUpIcon />,
//       title: "85% Redução",
//       subtitle: "Tempo de Processamento",
//     },
//   ];

//   const currentlyLearning = [
//     "Machine Learning com Python",
//     "Kubernetes",
//     "Arquitetura Serverless",
//     "Terraform & IaC",
//   ];

//   const nextGoals = [
//     "Azure Solutions Architect",
//     "Kafka & Event Streaming",
//     "GraphQL Advanced Patterns",
//     "WebAssembly (WASM)",
//   ];

//   return (
//     <Container sx={{ py: 8 }} id="competence">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 6, color: "primary.main" }}>
//           // Competências
//         </Typography>

//         {/* Competências Técnicas */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
//             gap: 4,
//             mb: 6,
//           }}
//         >
//           {technicalSkills.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <SkillCard>
//                 <CategoryHeader>
//                   <CategoryIcon>{category.icon}</CategoryIcon>
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontFamily: '"Roboto Mono", monospace',
//                         color: "text.primary",
//                         fontWeight: 600,
//                         fontSize: "1.1rem",
//                       }}
//                     >
//                       {category.category}
//                     </Typography>
//                     <Typography
//                       variant="caption"
//                       sx={{
//                         color: "text.secondary",
//                         fontSize: "0.8rem",
//                         fontFamily: '"Roboto Mono", monospace',
//                       }}
//                     >
//                       {category.skills.length} tecnologias
//                     </Typography>
//                   </Box>
//                 </CategoryHeader>

//                 {category.skills.map((skill, skillIndex) => (
//                   <SkillMeterBox key={skillIndex}>
//                     <SkillName>
//                       <span>{skill.name}</span>
//                       <Box
//                         sx={{ display: "flex", alignItems: "center", gap: 1 }}
//                       >
//                         <Typography
//                           variant="caption"
//                           sx={{ color: "text.secondary", fontSize: "0.7rem" }}
//                         >
//                           {skill.experience}
//                         </Typography>
//                         <Typography
//                           variant="caption"
//                           sx={{ color: "secondary.main", fontWeight: 600 }}
//                         >
//                           {skill.level}%
//                         </Typography>
//                       </Box>
//                     </SkillName>
//                     <SkillProgress variant="determinate" value={skill.level} />
//                   </SkillMeterBox>
//                 ))}
//               </SkillCard>
//             </motion.div>
//           ))}
//         </Box>

//         {/* Metodologias e Práticas */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <MethodologyCard>
//             <CategoryHeader>
//               <CategoryIcon>
//                 <ArchitectureIcon fontSize="large" />
//               </CategoryIcon>
//               <Box>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "text.primary",
//                     fontWeight: 600,
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   Metodologias & Práticas
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     color: "text.secondary",
//                     fontSize: "0.8rem",
//                     fontFamily: '"Roboto Mono", monospace',
//                   }}
//                 >
//                   Padrões e boas práticas
//                 </Typography>
//               </Box>
//             </CategoryHeader>

//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//               {methodologies.map((method, index) => (
//                 <SkillChip
//                   key={index}
//                   label={method}
//                   className="advanced"
//                   icon={<StarIcon />}
//                 />
//               ))}
//             </Box>
//           </MethodologyCard>
//         </motion.div>

//         {/* Jornada de Aprendizado */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <TimelineCard>
//             <CategoryHeader>
//               <CategoryIcon>
//                 <TimelineIcon fontSize="large" />
//               </CategoryIcon>
//               <Box>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "text.primary",
//                     fontWeight: 600,
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   Jornada de Evolução Técnica
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     color: "text.secondary",
//                     fontSize: "0.8rem",
//                     fontFamily: '"Roboto Mono", monospace',
//                   }}
//                 >
//                   Crescimento ao longo dos anos
//                 </Typography>
//               </Box>
//             </CategoryHeader>

//             <Box sx={{ display: "grid", gap: 1 }}>
//               {learningPath.map((item, index) => (
//                 <TimelineItem key={index}>
//                   <Box
//                     sx={{
//                       width: 40,
//                       height: 40,
//                       borderRadius: "8px",
//                       background: (theme) =>
//                         `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#ffffff",
//                       boxShadow: "0 4px 12px rgba(0, 229, 255, 0.3)",
//                     }}
//                   >
//                     {item.icon}
//                   </Box>
//                   <Box>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         fontFamily: '"Roboto Mono", monospace',
//                         color: "secondary.main",
//                         fontWeight: 600,
//                       }}
//                     >
//                       {item.year}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: "text.primary" }}>
//                       {item.milestone}
//                     </Typography>
//                   </Box>
//                 </TimelineItem>
//               ))}
//             </Box>
//           </TimelineCard>
//         </motion.div>

//         {/* Conquistas e Métricas */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
//             gap: 3,
//             mb: 6,
//           }}
//         >
//           {achievements.map((achievement, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <AchievementBadge>
//                 <Avatar
//                   sx={(theme) => ({
//                     backgroundColor: "transparent",
//                     background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//                     color: "#ffffff",
//                     mb: 2,
//                     width: 50,
//                     height: 50,
//                   })}
//                 >
//                   {achievement.icon}
//                 </Avatar>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "secondary.main",
//                     fontWeight: 600,
//                     textAlign: "center",
//                     fontSize: "1rem",
//                   }}
//                 >
//                   {achievement.title}
//                 </Typography>
//                 <Typography
//                   variant="caption"
//                   sx={{
//                     color: "text.secondary",
//                     textAlign: "center",
//                     fontSize: "0.8rem",
//                   }}
//                 >
//                   {achievement.subtitle}
//                 </Typography>
//               </AchievementBadge>
//             </motion.div>
//           ))}
//         </Box>

//         {/* Aprendizado Atual e Próximos Objetivos */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
//             gap: 4,
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <SkillCard>
//               <CategoryHeader>
//                 <CategoryIcon>
//                   <SchoolIcon fontSize="large" />
//                 </CategoryIcon>
//                 <Box>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontFamily: '"Roboto Mono", monospace',
//                       color: "text.primary",
//                       fontWeight: 600,
//                       fontSize: "1.1rem",
//                     }}
//                   >
//                     Aprendendo Atualmente
//                   </Typography>
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       color: "text.secondary",
//                       fontSize: "0.8rem",
//                       fontFamily: '"Roboto Mono", monospace',
//                     }}
//                   >
//                     Crescimento contínuo
//                   </Typography>
//                 </Box>
//               </CategoryHeader>

//               <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                 {currentlyLearning.map((skill, index) => (
//                   <SkillChip
//                     key={index}
//                     label={skill}
//                     className="learning"
//                     icon={<AutoAwesomeIcon />}
//                   />
//                 ))}
//               </Box>
//             </SkillCard>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <SkillCard>
//               <CategoryHeader>
//                 <CategoryIcon>
//                   <RocketLaunchIcon fontSize="large" />
//                 </CategoryIcon>
//                 <Box>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontFamily: '"Roboto Mono", monospace',
//                       color: "text.primary",
//                       fontWeight: 600,
//                       fontSize: "1.1rem",
//                     }}
//                   >
//                     Próximos Objetivos
//                   </Typography>
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       color: "text.secondary",
//                       fontSize: "0.8rem",
//                       fontFamily: '"Roboto Mono", monospace',
//                     }}
//                   >
//                     Roadmap de evolução
//                   </Typography>
//                 </Box>
//               </CategoryHeader>

//               <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                 {nextGoals.map((goal, index) => (
//                   <SkillChip
//                     key={index}
//                     label={goal}
//                     className="intermediate"
//                     icon={<TrendingUpIcon />}
//                   />
//                 ))}
//               </Box>
//             </SkillCard>
//           </motion.div>
//         </Box>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Box
//             sx={{
//               textAlign: "center",
//               mt: 6,
//               p: 4,
//               background: `linear-gradient(135deg,
//                 rgba(0, 229, 255, 0.1) 0%,
//                 rgba(2, 136, 209, 0.05) 100%)`,
//               border: "1px solid rgba(0, 229, 255, 0.2)",
//               borderRadius: 2,
//             }}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 fontFamily: '"Roboto Mono", monospace',
//                 color: "secondary.main",
//                 mb: 2,
//                 fontWeight: 600,
//               }}
//             >
//               // Sempre em Evolução
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "text.primary",
//                 mb: 3,
//                 maxWidth: 600,
//                 mx: "auto",
//                 lineHeight: 1.6,
//               }}
//             >
//               A tecnologia evolui constantemente, e eu evoluo junto. Cada
//               projeto é uma oportunidade de aprender algo novo e aplicar as
//               melhores práticas do mercado.
//             </Typography>

//             <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
//               <Tooltip title="Portfólio no GitHub">
//                 <IconButton
//                   sx={{
//                     color: "secondary.main",
//                     border: "1px solid rgba(0, 229, 255, 0.3)",
//                     "&:hover": {
//                       backgroundColor: "rgba(0, 229, 255, 0.1)",
//                     },
//                   }}
//                   onClick={() =>
//                     window.open("https://github.com/etezolin", "_blank")
//                   }
//                 >
//                   <GitHubIcon />
//                 </IconButton>
//               </Tooltip>
//             </Box>
//           </Box>
//         </motion.div>
//       </motion.div>
//     </Container>
//   );
// };

// export default Competence;
