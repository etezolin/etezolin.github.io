import type { FC } from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import DataObjectIcon from "@mui/icons-material/DataObject";
import SchoolIcon from "@mui/icons-material/School";
import LaptopIcon from "@mui/icons-material/Laptop";
import FunctionsIcon from "@mui/icons-material/Functions";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import LoopIcon from "@mui/icons-material/Loop";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// Componentes estilizados
const EducationTimeline = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(0, 0, 0, 4),
  "&:before": {
    content: '""',
    position: "absolute",
    left: "11px",
    top: 0,
    bottom: 0,
    width: "2px",
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(6),
  "&:last-child": {
    marginBottom: 0,
  },
}));

const TimelineMarker = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "-27px",
  top: "4px",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  border: `2px solid ${theme.palette.secondary.main}`,
  background: "rgba(13, 33, 55, 0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
}));

const TimelineContent = styled(motion.div)(({ theme }) => ({
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  position: "relative",
  overflow: "hidden",
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
}));

const CodeSnippet = styled(Box)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.9rem",
  lineHeight: 1.6,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(2),
  position: "relative",
  overflow: "auto",
}));

const SkillsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const SkillCategory = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.2)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  flex: "1 1 calc(50% - 8px)",
  minWidth: "280px",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(0, 229, 255, 0.3)",
    transform: "translateY(-2px)",
  },
  [theme.breakpoints.down("sm")]: {
    flex: "1 1 100%",
    minWidth: "100%",
  },
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1.5),
  fontWeight: "bold",
  color: theme.palette.secondary.main,
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: "rgba(0, 229, 255, 0.1)",
  color: theme.palette.text.primary,
  border: "1px solid rgba(0, 229, 255, 0.3)",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.8rem",
  "&:hover": {
    backgroundColor: "rgba(0, 229, 255, 0.2)",
    border: "1px solid rgba(0, 229, 255, 0.5)",
  },
}));

const HighlightBox = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(2, 136, 209, 0.1))",
  border: "1px solid rgba(0, 229, 255, 0.3)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: "2px 0 0 2px",
  },
}));

const Formation: FC = () => {
  return (
    <Container
      component="section"
      id="formation"
      sx={{ minHeight: "100vh", py: 8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
          // Formação
        </Typography>

        <EducationTimeline>
          {/* Ciência de Dados */}
          <TimelineItem>
            <TimelineMarker>
              <DataObjectIcon sx={{ fontSize: 12, color: "secondary.main" }} />
            </TimelineMarker>
            <TimelineContent
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <DataObjectIcon sx={{ color: "secondary.main", mr: 1 }} />
                <Typography variant="h5">
                  Especialização em Ciência de Dados
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{ mb: 2, color: "text.secondary" }}
              >
                Universidade Tecnológica Federal do Paraná | UTFPR • Em
                andamento
              </Typography>

              <HighlightBox>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <TrendingUpIcon
                    sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
                  />
                  <Typography variant="h6" sx={{ color: "secondary.main" }}>
                    Áreas de Especialização
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Aprofundamento em técnicas avançadas de análise de dados,
                  machine learning, e inteligência artificial aplicada a
                  problemas complexos de negócio.
                </Typography>
              </HighlightBox>

              <SkillsContainer>
                <SkillCategory>
                  <CategoryTitle>
                    <AutoAwesomeIcon sx={{ mr: 1, fontSize: 18 }} />
                    Inteligência Artificial
                  </CategoryTitle>
                  <Box>
                    <SkillChip label="Machine Learning" />
                    <SkillChip label="Deep Learning" />
                    <SkillChip label="NLP" />
                    <SkillChip label="Computer Vision" />
                    <SkillChip label="Neural Networks" />
                  </Box>
                </SkillCategory>
                <SkillCategory>
                  <CategoryTitle>
                    <CodeIcon sx={{ mr: 1, fontSize: 18 }} />
                    Linguagens & Frameworks
                  </CategoryTitle>
                  <Box>
                    <SkillChip label="Python" />
                    <SkillChip label="R" />
                    <SkillChip label="SQL" />
                    <SkillChip label="Apache Spark" />
                    <SkillChip label="TensorFlow" />
                    <SkillChip label="PyTorch" />
                  </Box>
                </SkillCategory>
                <SkillCategory>
                  <CategoryTitle>
                    <FunctionsIcon sx={{ mr: 1, fontSize: 18 }} />
                    Análise & Modelagem
                  </CategoryTitle>
                  <Box>
                    <SkillChip label="Estatística Avançada" />
                    <SkillChip label="Modelagem Preditiva" />
                    <SkillChip label="Time Series" />
                    <SkillChip label="A/B Testing" />
                  </Box>
                </SkillCategory>
                <SkillCategory>
                  <CategoryTitle>
                    <StorageIcon sx={{ mr: 1, fontSize: 18 }} />
                    Data Engineering
                  </CategoryTitle>
                  <Box>
                    <SkillChip label="ETL Pipelines" />
                    <SkillChip label="Data Lakes" />
                    <SkillChip label="Data Warehousing" />
                    <SkillChip label="Big Data" />
                  </Box>
                </SkillCategory>
              </SkillsContainer>

              <CodeSnippet>
                <pre style={{ margin: 0, color: "#f5f5f5" }}>
                  <span style={{ color: "#569CD6" }}>import</span> pandas{" "}
                  <span style={{ color: "#569CD6" }}>as</span> pd
                  <br />
                  <span style={{ color: "#569CD6" }}>import</span> numpy{" "}
                  <span style={{ color: "#569CD6" }}>as</span> np
                  <br />
                  <span style={{ color: "#569CD6" }}>from</span>{" "}
                  sklearn.ensemble{" "}
                  <span style={{ color: "#569CD6" }}>import</span>{" "}
                  RandomForestClassifier
                  <br />
                  <br />
                  <span style={{ color: "#569CD6" }}>def</span>{" "}
                  <span style={{ color: "#DCDCAA" }}>
                    build_predictive_model
                  </span>
                  (data, target):
                  <br />
                  &nbsp;&nbsp;
                  <span style={{ color: "#6A9955" }}>
                    # Aplicando conhecimentos da especialização
                  </span>
                  <br />
                  &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>
                    return
                  </span>{" "}
                  model, insights, business_value
                </pre>
              </CodeSnippet>
            </TimelineContent>
          </TimelineItem>

          {/* Análise e Desenvolvimento de Sistemas */}
          <TimelineItem>
            <TimelineMarker>
              <LaptopIcon sx={{ fontSize: 12, color: "secondary.main" }} />
            </TimelineMarker>
            <TimelineContent
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LaptopIcon sx={{ color: "secondary.main", mr: 1 }} />
                <Typography variant="h5">
                  Análise e Desenvolvimento de Sistemas
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{ mb: 2, color: "text.secondary" }}
              >
                Centro Universitário Opet | OPET • Concluído
              </Typography>

              <HighlightBox>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <TrendingUpIcon
                    sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
                  />
                  <Typography variant="h6" sx={{ color: "secondary.main" }}>
                    Competências Desenvolvidas
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Formação em desenvolvimento, arquitetura, e metodologias
                  ágeis, com foco em soluções de sistemas escaláveis e de alta
                  performance.
                </Typography>
              </HighlightBox>

              <SkillsContainer>
                <SkillCategory>
                  <CategoryTitle>
                    <CodeIcon sx={{ mr: 1, fontSize: 18 }} />
                    Backend Development
                  </CategoryTitle>
                  <Box>
                    <SkillChip label=".NET" />
                    <SkillChip label="Node" />
                    <SkillChip label="Dapper" />
                    <SkillChip label="Web APIs" />
                    <SkillChip label="Microservices" />
                  </Box>
                </SkillCategory>
                <SkillCategory>
                  <CategoryTitle>
                    <LaptopIcon sx={{ mr: 1, fontSize: 18 }} />
                    Frontend Development
                  </CategoryTitle>
                  <Box>
                    <SkillChip label="React" />
                    <SkillChip label="TypeScript" />
                    <SkillChip label="Material UI" />
                    <SkillChip label="Tailwind CSS" />
                    <SkillChip label="Next.js" />
                    <SkillChip label="Responsive Design" />
                  </Box>
                </SkillCategory>
                <SkillCategory>
                  <CategoryTitle>
                    <StorageIcon sx={{ mr: 1, fontSize: 18 }} />
                    Database & Cloud
                  </CategoryTitle>
                  <Box>
                    <SkillChip label="SQL Server" />
                    <SkillChip label="PostgreSQL" />
                    <SkillChip label="MongoDB" />
                    <SkillChip label="Google Cloud Platform" />
                    <SkillChip label="Docker" />
                  </Box>
                </SkillCategory>
                <SkillCategory>
                  <CategoryTitle>
                    <LoopIcon sx={{ mr: 1, fontSize: 18 }} />
                    DevOps & Architecture
                  </CategoryTitle>
                  <Box>
                    <SkillChip label="CI/CD Pipelines" />
                    <SkillChip label="System Design" />
                    <SkillChip label="Clean Architecture" />
                    <SkillChip label="SOLID Principles" />
                  </Box>
                </SkillCategory>
              </SkillsContainer>

              <CodeSnippet>
                <pre style={{ margin: 0, color: "#f5f5f5" }}>
                  <span style={{ color: "#569CD6" }}>interface</span>{" "}
                  <span style={{ color: "#4EC9B0" }}>FullStackDeveloper</span>{" "}
                  {"{"}
                  <br />
                  &nbsp;&nbsp;buildScalableApplications():{" "}
                  <span style={{ color: "#4EC9B0" }}>Enterprise</span>Solution;
                  <br />
                  &nbsp;&nbsp;designSystemArchitecture():{" "}
                  <span style={{ color: "#4EC9B0" }}>Architecture</span>
                  Blueprint;
                  <br />
                  &nbsp;&nbsp;implementBestPractices():{" "}
                  <span style={{ color: "#4EC9B0" }}>QualityCode</span>;
                  <br />
                  &nbsp;&nbsp;deliverBusinessValue():{" "}
                  <span style={{ color: "#4EC9B0" }}>ROI</span>;
                  <br />
                  {"}"}
                </pre>
              </CodeSnippet>
            </TimelineContent>
          </TimelineItem>

          {/* Filosofia */}
          <TimelineItem>
            <TimelineMarker>
              <SchoolIcon sx={{ fontSize: 12, color: "secondary.main" }} />
            </TimelineMarker>
            <TimelineContent
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <SchoolIcon sx={{ color: "secondary.main", mr: 1 }} />
                <Typography variant="h5">Licenciatura em Filosofia</Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{ mb: 2, color: "text.secondary" }}
              >
                Pontifícia Universidade Católica do Paraná | PUCPR • Concluído
              </Typography>

              <HighlightBox>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <PsychologyIcon
                    sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
                  />
                  <Typography variant="h6" sx={{ color: "secondary.main" }}>
                    Diferencial Competitivo
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                  Formação única que proporciona visão sistêmica, pensamento
                  crítico avançado, e capacidade de análise que se traduz em
                  soluções tecnológicas mais elegantes e centradas no usuário.
                </Typography>
              </HighlightBox>

              <SkillsContainer>
                <SkillCategory>
                  <CategoryTitle>
                    <PsychologyIcon sx={{ mr: 1, fontSize: 18 }} />
                    Pensamento Estratégico
                  </CategoryTitle>
                  <Box>
                    <SkillChip label="Análise Sistêmica" />
                    <SkillChip label="Pensamento Crítico" />
                    <SkillChip label="Resolução de Problemas" />
                    <SkillChip label="Tomada de Decisão" />
                  </Box>
                </SkillCategory>
                <SkillCategory>
                  <CategoryTitle>
                    <AutoAwesomeIcon sx={{ mr: 1, fontSize: 18 }} />
                    Inovação & Ética
                  </CategoryTitle>
                  <Box>
                    <SkillChip label="Ética Tecnológica" />
                    <SkillChip label="Inovação Responsável" />
                    <SkillChip label="Design Centrado no Usuário" />
                    <SkillChip label="Impacto Social" />
                  </Box>
                </SkillCategory>
              </SkillsContainer>

              <Box
                sx={{
                  mt: 3,
                  p: 3,
                  background:
                    "linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(2, 136, 209, 0.05))",
                  borderRadius: 2,
                  position: "relative",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: "#f0f0f0",
                    lineHeight: 1.7,
                    textAlign: "center",
                  }}
                >
                  "A formação filosófica me proporciona uma perspectiva única no
                  desenvolvimento de software. Consigo conectar soluções
                  técnicas complexas a necessidades humanas reais, criando
                  produtos que não apenas funcionam, mas que fazem sentido."
                </Typography>
              </Box>

              <CodeSnippet>
                <pre style={{ margin: 0, color: "#f5f5f5" }}>
                  <span style={{ color: "#569CD6" }}>class</span>{" "}
                  <span style={{ color: "#4EC9B0" }}>
                    PhilosophicalDeveloper
                  </span>{" "}
                  <span style={{ color: "#569CD6" }}>extends</span>{" "}
                  <span style={{ color: "#4EC9B0" }}>TechExpert</span> {"{"}
                  <br />
                  &nbsp;&nbsp;
                  <span style={{ color: "#DCDCAA" }}>analyzeRequirements</span>
                  (problem) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#569CD6" }}>return</span>{" "}
                  <span style={{ color: "#569CD6" }}>this</span>
                  .applyCriticalThinking(problem)
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.considerEthicalImplications()
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.designHumanCenteredSolution();
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                </pre>
              </CodeSnippet>
            </TimelineContent>
          </TimelineItem>
        </EducationTimeline>
      </motion.div>
    </Container>
  );
};

export default Formation;
