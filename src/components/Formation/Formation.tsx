import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CodeIcon from "@mui/icons-material/Code";
import LaptopIcon from "@mui/icons-material/Laptop";
import LoopIcon from "@mui/icons-material/Loop";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";
import StorageIcon from "@mui/icons-material/Storage";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Box, Chip, Container, Typography, type Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import type { FC, MouseEvent, ReactElement } from "react";

// Tipos TypeScript
interface SkillGroupData {
  title: string;
  icon: ReactElement;
  skills: string[];
  category: string;
}

interface SkillGroupProps {
  title: string;
  icon: ReactElement;
  skills: string[];
  category: string;
  education: string;
}

interface FormationData {
  id: string;
  icon: ReactElement;
  title: string;
  institution: string;
  highlight: string;
  description: string;
  skillGroups: SkillGroupData[];
  code: string;
  quote?: string;
}

// ✅ CORREÇÃO: Apenas as funções de analytics, sem o hook
import {
  trackProfileConversion,
  trackProfileTabInteraction,
} from "../../firebase";

// Componentes estilizados (simplificados)
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
  "&:last-child": { marginBottom: 0 },
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
  cursor: "pointer",
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
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: "rgba(0, 229, 255, 0.1)",
  color: theme.palette.text.primary,
  border: "1px solid rgba(0, 229, 255, 0.3)",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.8rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(0, 229, 255, 0.2)",
    transform: "scale(1.05)",
  },
}));

const Formation: FC = () => {
  // ✅ Funções de analytics otimizadas
  const handleClick = (type: string, data: string) => {
    trackProfileTabInteraction("formation", type, data);
  };

  const handleCodeClick = (education: string) => {
    handleClick("code_snippet_click", education);
    trackProfileConversion("technical_interest", "formation");
  };

  // ✅ Componente reutilizável para Skills com tipos corretos
  const SkillGroup: FC<SkillGroupProps> = ({
    title,
    icon,
    skills,
    category,
    education,
  }) => (
    <Box
      sx={{
        background: "rgba(0, 0, 0, 0.2)",
        borderRadius: 1,
        p: 2,
        flex: "1 1 calc(50% - 8px)",
        minWidth: "280px",
        cursor: "pointer",
        "&:hover": { background: "rgba(0, 0, 0, 0.3)" },
      }}
      onClick={() =>
        handleClick("skill_category_click", `${category}_${education}`)
      }
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1.5,
          fontWeight: "bold",
          color: "secondary.main",
        }}
      >
        {icon} {title}
      </Typography>
      <Box>
        {skills.map((skill: string, idx: number) => (
          <SkillChip
            key={idx}
            label={skill}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              handleClick(
                "skill_chip_click",
                `${skill}_${category}_${education}`
              );
            }}
          />
        ))}
      </Box>
    </Box>
  );

  // ✅ Dados das formações (estrutura otimizada com tipos)
  const formations: FormationData[] = [
    {
      id: "systems_development",
      icon: <LaptopIcon sx={{ fontSize: 30, color: "secondary.main", marginRight: 2 }} />,
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Centro Universitário OPET • Concluído",
      highlight: "Competências Desenvolvidas",
      description:
        "Formação em desenvolvimento, arquitetura e metodologias ágeis.",
      skillGroups: [
        {
          title: "Backend Development",
          icon: <CodeIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [".NET", "Node", "Dapper", "Web APIs", "Microservices"],
          category: "backend",
        },
        {
          title: "Frontend Development",
          icon: <LaptopIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [
            "React",
            "TypeScript",
            "Material UI",
            "Tailwind CSS",
            "Next.js",
            "Responsive Design",
          ],
          category: "frontend",
        },
        {
          title: "Database & Cloud",
          icon: <StorageIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [
            "SQL Server",
            "PostgreSQL",
            "MongoDB",
            "Google Cloud Platform",
            "Docker",
          ],
          category: "database",
        },
        {
          title: "DevOps & Architecture",
          icon: <LoopIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [
            "CI/CD Pipelines",
            "System Design",
            "Clean Architecture",
            "SOLID Principles",
          ],
          category: "devops",
        },
      ],
      code: `interface FullStackDeveloper {
  buildScalableApplications(): EnterpriseSolution;
  designSystemArchitecture(): ArchitectureBlueprint;
  implementBestPractices(): QualityCode;
  deliverBusinessValue(): ROI;
}`,
    },
    {
      id: "philosophy",
      icon: <SchoolIcon sx={{ fontSize: 30, color: "secondary.main", marginRight: 2 }} />,
      title: "Licenciatura em Filosofia",
      institution:
        "Pontifícia Universidade Católica do Paraná | PUCPR • Concluído",
      highlight: "Diferencial Competitivo",
      description:
        "Formação única que proporciona visão sistêmica e pensamento crítico avançado.",
      skillGroups: [
        {
          title: "Pensamento Estratégico",
          icon: <PsychologyIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [
            "Análise Sistêmica",
            "Pensamento Crítico",
            "Resolução de Problemas",
            "Tomada de Decisão",
          ],
          category: "strategic",
        },
        {
          title: "Inovação & Ética",
          icon: <AutoAwesomeIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [
            "Ética Tecnológica",
            "Inovação Responsável",
            "Design Centrado no Usuário",
            "Impacto Social",
          ],
          category: "innovation",
        },
      ],
      code: `class PhilosophicalDeveloper extends TechExpert {
  analyzeRequirements(problem) {
    return this.applyCriticalThinking(problem)
      .considerEthicalImplications()
      .designHumanCenteredSolution();
  }
}`,
      quote:
        "A formação filosófica me proporciona uma perspectiva única no desenvolvimento de software. Consigo conectar soluções técnicas complexas a necessidades humanas reais, criando produtos que não apenas funcionam, mas que fazem sentido.",
    },
  ];

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
          {formations.map((formation, index) => (
            <TimelineItem key={formation.id}>
              <TimelineMarker
                onClick={() =>
                  handleClick("timeline_marker_click", formation.id)
                }
              >
                {/* {formation.icon} */}
              </TimelineMarker>
              <TimelineContent
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() =>
                  handleClick(
                    "timeline_item_click",
                    `${formation.title}_${formation.institution}`
                  )
                }
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {formation.icon}
                  <Typography variant="h5">{formation.title}</Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  {formation.institution}
                </Typography>

                <Box
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(2, 136, 209, 0.1))",
                    border: "1px solid rgba(0, 229, 255, 0.3)",
                    borderRadius: 1,
                    p: 2,
                    mt: 2,
                    position: "relative",
                    cursor: "pointer",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "4px",
                      height: "100%",
                      background: (theme: Theme) =>
                        `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      borderRadius: "2px 0 0 2px",
                    },
                  }}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    handleClick(
                      "highlight_section_click",
                      `${formation.id}_${formation.highlight}`
                    );
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <TrendingUpIcon
                      sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
                    />
                    <Typography variant="h6" sx={{ color: "secondary.main" }}>
                      {formation.highlight}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                    {formation.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    mt: 2,
                    mb: 2,
                  }}
                >
                  {formation.skillGroups.map((group, idx) => (
                    <SkillGroup
                      key={idx}
                      title={group.title}
                      icon={group.icon}
                      skills={group.skills}
                      category={group.category}
                      education={formation.id}
                    />
                  ))}
                </Box>

                {formation.quote && (
                  <Box
                    sx={{
                      mt: 3,
                      p: 3,
                      background:
                        "linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(2, 136, 209, 0.05))",
                      borderRadius: 2,
                      border: "1px solid rgba(0, 229, 255, 0.2)",
                      cursor: "pointer",
                    }}
                    onClick={(e: MouseEvent) => {
                      e.stopPropagation();
                      handleClick(
                        "philosophical_quote_click",
                        "unique_perspective"
                      );
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
                      "{formation.quote}"
                    </Typography>
                  </Box>
                )}

                <Box
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    p: 2,
                    borderRadius: 1,
                    mt: 2,
                    cursor: "pointer",
                  }}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    handleCodeClick(formation.id);
                  }}
                >
                  <pre style={{ margin: 0, color: "#f5f5f5" }}>
                    {formation.code}
                  </pre>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </EducationTimeline>
      </motion.div>
    </Container>
  );
};

export default Formation;

// import type { FC } from "react";
// import { Box, Container, Typography, Chip } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// import DataObjectIcon from "@mui/icons-material/DataObject";
// import SchoolIcon from "@mui/icons-material/School";
// import LaptopIcon from "@mui/icons-material/Laptop";
// import FunctionsIcon from "@mui/icons-material/Functions";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import StorageIcon from "@mui/icons-material/Storage";
// import LoopIcon from "@mui/icons-material/Loop";
// import CodeIcon from "@mui/icons-material/Code";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// // Componentes estilizados
// const EducationTimeline = styled(Box)(({ theme }) => ({
//   position: "relative",
//   padding: theme.spacing(0, 0, 0, 4),
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     left: "11px",
//     top: 0,
//     bottom: 0,
//     width: "2px",
//     background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//   },
// }));

// const TimelineItem = styled(Box)(({ theme }) => ({
//   position: "relative",
//   marginBottom: theme.spacing(6),
//   "&:last-child": {
//     marginBottom: 0,
//   },
// }));

// const TimelineMarker = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   left: "-27px",
//   top: "4px",
//   width: "20px",
//   height: "20px",
//   borderRadius: "50%",
//   border: `2px solid ${theme.palette.secondary.main}`,
//   background: "rgba(13, 33, 55, 0.9)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   zIndex: 2,
// }));

// const TimelineContent = styled(motion.div)(({ theme }) => ({
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(3),
//   marginBottom: theme.spacing(4),
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
// }));

// const CodeSnippet = styled(Box)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.9rem",
//   lineHeight: 1.6,
//   backgroundColor: "rgba(0, 0, 0, 0.2)",
//   padding: theme.spacing(2),
//   borderRadius: theme.spacing(1),
//   marginTop: theme.spacing(2),
//   position: "relative",
//   overflow: "auto",
// }));

// const SkillsContainer = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   gap: theme.spacing(2),
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// const SkillCategory = styled(Box)(({ theme }) => ({
//   background: "rgba(0, 0, 0, 0.2)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   flex: "1 1 calc(50% - 8px)",
//   minWidth: "280px",
//   border: "1px solid rgba(255, 255, 255, 0.05)",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     background: "rgba(0, 0, 0, 0.3)",
//     border: "1px solid rgba(0, 229, 255, 0.3)",
//     transform: "translateY(-2px)",
//   },
//   [theme.breakpoints.down("sm")]: {
//     flex: "1 1 100%",
//     minWidth: "100%",
//   },
// }));

// const CategoryTitle = styled(Typography)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   marginBottom: theme.spacing(1.5),
//   fontWeight: "bold",
//   color: theme.palette.secondary.main,
// }));

// const SkillChip = styled(Chip)(({ theme }) => ({
//   margin: theme.spacing(0.5),
//   backgroundColor: "rgba(0, 229, 255, 0.1)",
//   color: theme.palette.text.primary,
//   border: "1px solid rgba(0, 229, 255, 0.3)",
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.8rem",
//   "&:hover": {
//     backgroundColor: "rgba(0, 229, 255, 0.2)",
//     border: "1px solid rgba(0, 229, 255, 0.5)",
//   },
// }));

// const HighlightBox = styled(Box)(({ theme }) => ({
//   background:
//     "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(2, 136, 209, 0.1))",
//   border: "1px solid rgba(0, 229, 255, 0.3)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(2),
//   marginTop: theme.spacing(2),
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "4px",
//     height: "100%",
//     background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//     borderRadius: "2px 0 0 2px",
//   },
// }));

// const Formation: FC = () => {
//   return (
//     <Container
//       component="section"
//       id="formation"
//       sx={{ minHeight: "100vh", py: 8 }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
//           // Formação
//         </Typography>

//         <EducationTimeline>
//           {/* Ciência de Dados */}
//           <TimelineItem>
//             <TimelineMarker>
//               <DataObjectIcon sx={{ fontSize: 12, color: "secondary.main" }} />
//             </TimelineMarker>
//             <TimelineContent
//               whileHover={{ scale: 1.01 }}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                 <DataObjectIcon sx={{ color: "secondary.main", mr: 1 }} />
//                 <Typography variant="h5">
//                   Especialização em Ciência de Dados
//                 </Typography>
//               </Box>

//               <Typography
//                 variant="body2"
//                 sx={{ mb: 2, color: "text.secondary" }}
//               >
//                 Universidade Tecnológica Federal do Paraná | UTFPR • Em
//                 andamento
//               </Typography>

//               <HighlightBox>
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   <TrendingUpIcon
//                     sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
//                   />
//                   <Typography variant="h6" sx={{ color: "secondary.main" }}>
//                     Áreas de Especialização
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
//                   Aprofundamento em técnicas avançadas de análise de dados,
//                   machine learning, e inteligência artificial aplicada a
//                   problemas complexos de negócio.
//                 </Typography>
//               </HighlightBox>

//               <SkillsContainer>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <AutoAwesomeIcon sx={{ mr: 1, fontSize: 18 }} />
//                     Inteligência Artificial
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label="Machine Learning" />
//                     <SkillChip label="Deep Learning" />
//                     <SkillChip label="NLP" />
//                     <SkillChip label="Computer Vision" />
//                     <SkillChip label="Neural Networks" />
//                   </Box>
//                 </SkillCategory>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <CodeIcon sx={{ mr: 1, fontSize: 18 }} />
//                     Linguagens & Frameworks
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label="Python" />
//                     <SkillChip label="R" />
//                     <SkillChip label="SQL" />
//                     <SkillChip label="Apache Spark" />
//                     <SkillChip label="TensorFlow" />
//                     <SkillChip label="PyTorch" />
//                   </Box>
//                 </SkillCategory>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <FunctionsIcon sx={{ mr: 1, fontSize: 18 }} />
//                     Análise & Modelagem
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label="Estatística Avançada" />
//                     <SkillChip label="Modelagem Preditiva" />
//                     <SkillChip label="Time Series" />
//                     <SkillChip label="A/B Testing" />
//                   </Box>
//                 </SkillCategory>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <StorageIcon sx={{ mr: 1, fontSize: 18 }} />
//                     Data Engineering
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label="ETL Pipelines" />
//                     <SkillChip label="Data Lakes" />
//                     <SkillChip label="Data Warehousing" />
//                     <SkillChip label="Big Data" />
//                   </Box>
//                 </SkillCategory>
//               </SkillsContainer>

//               <CodeSnippet>
//                 <pre style={{ margin: 0, color: "#f5f5f5" }}>
//                   <span style={{ color: "#569CD6" }}>import</span> pandas{" "}
//                   <span style={{ color: "#569CD6" }}>as</span> pd
//                   <br />
//                   <span style={{ color: "#569CD6" }}>import</span> numpy{" "}
//                   <span style={{ color: "#569CD6" }}>as</span> np
//                   <br />
//                   <span style={{ color: "#569CD6" }}>from</span>{" "}
//                   sklearn.ensemble{" "}
//                   <span style={{ color: "#569CD6" }}>import</span>{" "}
//                   RandomForestClassifier
//                   <br />
//                   <br />
//                   <span style={{ color: "#569CD6" }}>def</span>{" "}
//                   <span style={{ color: "#DCDCAA" }}>
//                     build_predictive_model
//                   </span>
//                   (data, target):
//                   <br />
//                   &nbsp;&nbsp;
//                   <span style={{ color: "#6A9955" }}>
//                     # Aplicando conhecimentos da especialização
//                   </span>
//                   <br />
//                   &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>
//                     return
//                   </span>{" "}
//                   model, insights, business_value
//                 </pre>
//               </CodeSnippet>
//             </TimelineContent>
//           </TimelineItem>

//           {/* Análise e Desenvolvimento de Sistemas */}
//           <TimelineItem>
//             <TimelineMarker>
//               <LaptopIcon sx={{ fontSize: 12, color: "secondary.main" }} />
//             </TimelineMarker>
//             <TimelineContent
//               whileHover={{ scale: 1.01 }}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                 <LaptopIcon sx={{ color: "secondary.main", mr: 1 }} />
//                 <Typography variant="h5">
//                   Análise e Desenvolvimento de Sistemas
//                 </Typography>
//               </Box>

//               <Typography
//                 variant="body2"
//                 sx={{ mb: 2, color: "text.secondary" }}
//               >
//                 Centro Universitário Opet | OPET • Concluído
//               </Typography>

//               <HighlightBox>
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   <TrendingUpIcon
//                     sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
//                   />
//                   <Typography variant="h6" sx={{ color: "secondary.main" }}>
//                     Competências Desenvolvidas
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
//                   Formação em desenvolvimento, arquitetura, e metodologias
//                   ágeis, com foco em soluções de sistemas escaláveis e de alta
//                   performance.
//                 </Typography>
//               </HighlightBox>

//               <SkillsContainer>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <CodeIcon sx={{ mr: 1, fontSize: 18 }} />
//                     Backend Development
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label=".NET" />
//                     <SkillChip label="Node" />
//                     <SkillChip label="Dapper" />
//                     <SkillChip label="Web APIs" />
//                     <SkillChip label="Microservices" />
//                   </Box>
//                 </SkillCategory>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <LaptopIcon sx={{ mr: 1, fontSize: 18 }} />
//                     Frontend Development
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label="React" />
//                     <SkillChip label="TypeScript" />
//                     <SkillChip label="Material UI" />
//                     <SkillChip label="Tailwind CSS" />
//                     <SkillChip label="Next.js" />
//                     <SkillChip label="Responsive Design" />
//                   </Box>
//                 </SkillCategory>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <StorageIcon sx={{ mr: 1, fontSize: 18 }} />
//                     Database & Cloud
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label="SQL Server" />
//                     <SkillChip label="PostgreSQL" />
//                     <SkillChip label="MongoDB" />
//                     <SkillChip label="Google Cloud Platform" />
//                     <SkillChip label="Docker" />
//                   </Box>
//                 </SkillCategory>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <LoopIcon sx={{ mr: 1, fontSize: 18 }} />
//                     DevOps & Architecture
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label="CI/CD Pipelines" />
//                     <SkillChip label="System Design" />
//                     <SkillChip label="Clean Architecture" />
//                     <SkillChip label="SOLID Principles" />
//                   </Box>
//                 </SkillCategory>
//               </SkillsContainer>

//               <CodeSnippet>
//                 <pre style={{ margin: 0, color: "#f5f5f5" }}>
//                   <span style={{ color: "#569CD6" }}>interface</span>{" "}
//                   <span style={{ color: "#4EC9B0" }}>FullStackDeveloper</span>{" "}
//                   {"{"}
//                   <br />
//                   &nbsp;&nbsp;buildScalableApplications():{" "}
//                   <span style={{ color: "#4EC9B0" }}>Enterprise</span>Solution;
//                   <br />
//                   &nbsp;&nbsp;designSystemArchitecture():{" "}
//                   <span style={{ color: "#4EC9B0" }}>Architecture</span>
//                   Blueprint;
//                   <br />
//                   &nbsp;&nbsp;implementBestPractices():{" "}
//                   <span style={{ color: "#4EC9B0" }}>QualityCode</span>;
//                   <br />
//                   &nbsp;&nbsp;deliverBusinessValue():{" "}
//                   <span style={{ color: "#4EC9B0" }}>ROI</span>;
//                   <br />
//                   {"}"}
//                 </pre>
//               </CodeSnippet>
//             </TimelineContent>
//           </TimelineItem>

//           {/* Filosofia */}
//           <TimelineItem>
//             <TimelineMarker>
//               <SchoolIcon sx={{ fontSize: 12, color: "secondary.main" }} />
//             </TimelineMarker>
//             <TimelineContent
//               whileHover={{ scale: 1.01 }}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                 <SchoolIcon sx={{ color: "secondary.main", mr: 1 }} />
//                 <Typography variant="h5">Licenciatura em Filosofia</Typography>
//               </Box>

//               <Typography
//                 variant="body2"
//                 sx={{ mb: 2, color: "text.secondary" }}
//               >
//                 Pontifícia Universidade Católica do Paraná | PUCPR • Concluído
//               </Typography>

//               <HighlightBox>
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   <PsychologyIcon
//                     sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
//                   />
//                   <Typography variant="h6" sx={{ color: "secondary.main" }}>
//                     Diferencial Competitivo
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
//                   Formação única que proporciona visão sistêmica, pensamento
//                   crítico avançado, e capacidade de análise que se traduz em
//                   soluções tecnológicas mais elegantes e centradas no usuário.
//                 </Typography>
//               </HighlightBox>

//               <SkillsContainer>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <PsychologyIcon sx={{ mr: 1, fontSize: 18 }} />
//                     Pensamento Estratégico
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label="Análise Sistêmica" />
//                     <SkillChip label="Pensamento Crítico" />
//                     <SkillChip label="Resolução de Problemas" />
//                     <SkillChip label="Tomada de Decisão" />
//                   </Box>
//                 </SkillCategory>
//                 <SkillCategory>
//                   <CategoryTitle>
//                     <AutoAwesomeIcon sx={{ mr: 1, fontSize: 18 }} />
//                     Inovação & Ética
//                   </CategoryTitle>
//                   <Box>
//                     <SkillChip label="Ética Tecnológica" />
//                     <SkillChip label="Inovação Responsável" />
//                     <SkillChip label="Design Centrado no Usuário" />
//                     <SkillChip label="Impacto Social" />
//                   </Box>
//                 </SkillCategory>
//               </SkillsContainer>

//               <Box
//                 sx={{
//                   mt: 3,
//                   p: 3,
//                   background:
//                     "linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(2, 136, 209, 0.05))",
//                   borderRadius: 2,
//                   position: "relative",
//                   border: "1px solid rgba(0, 229, 255, 0.2)",
//                 }}
//               >
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontStyle: "italic",
//                     color: "#f0f0f0",
//                     lineHeight: 1.7,
//                     textAlign: "center",
//                   }}
//                 >
//                   "A formação filosófica me proporciona uma perspectiva única no
//                   desenvolvimento de software. Consigo conectar soluções
//                   técnicas complexas a necessidades humanas reais, criando
//                   produtos que não apenas funcionam, mas que fazem sentido."
//                 </Typography>
//               </Box>

//               <CodeSnippet>
//                 <pre style={{ margin: 0, color: "#f5f5f5" }}>
//                   <span style={{ color: "#569CD6" }}>class</span>{" "}
//                   <span style={{ color: "#4EC9B0" }}>
//                     PhilosophicalDeveloper
//                   </span>{" "}
//                   <span style={{ color: "#569CD6" }}>extends</span>{" "}
//                   <span style={{ color: "#4EC9B0" }}>TechExpert</span> {"{"}
//                   <br />
//                   &nbsp;&nbsp;
//                   <span style={{ color: "#DCDCAA" }}>analyzeRequirements</span>
//                   (problem) {"{"}
//                   <br />
//                   &nbsp;&nbsp;&nbsp;&nbsp;
//                   <span style={{ color: "#569CD6" }}>return</span>{" "}
//                   <span style={{ color: "#569CD6" }}>this</span>
//                   .applyCriticalThinking(problem)
//                   <br />
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.considerEthicalImplications()
//                   <br />
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.designHumanCenteredSolution();
//                   <br />
//                   &nbsp;&nbsp;{"}"}
//                   <br />
//                   {"}"}
//                 </pre>
//               </CodeSnippet>
//             </TimelineContent>
//           </TimelineItem>
//         </EducationTimeline>
//       </motion.div>
//     </Container>
//   );
// };

// export default Formation;

// // import type { FC } from "react";
// // import { Box, Container, Typography, Chip } from "@mui/material";
// // import { motion } from "framer-motion";
// // import { styled } from "@mui/material/styles";
// // import DataObjectIcon from "@mui/icons-material/DataObject";
// // import SchoolIcon from "@mui/icons-material/School";
// // import LaptopIcon from "@mui/icons-material/Laptop";
// // import FunctionsIcon from "@mui/icons-material/Functions";
// // import PsychologyIcon from "@mui/icons-material/Psychology";
// // import StorageIcon from "@mui/icons-material/Storage";
// // import LoopIcon from "@mui/icons-material/Loop";
// // import CodeIcon from "@mui/icons-material/Code";
// // import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// // import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// // // Import das funções de analytics
// // import {
// //   trackProfileTabInteraction,
// //   trackProfileConversion,
// // } from "../../firebase";
// // import { useTabAnalytics } from "../../hooks/useTabAnalytics";

// // // Componentes estilizados
// // const EducationTimeline = styled(Box)(({ theme }) => ({
// //   position: "relative",
// //   padding: theme.spacing(0, 0, 0, 4),
// //   "&:before": {
// //     content: '""',
// //     position: "absolute",
// //     left: "11px",
// //     top: 0,
// //     bottom: 0,
// //     width: "2px",
// //     background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //   },
// // }));

// // const TimelineItem = styled(Box)(({ theme }) => ({
// //   position: "relative",
// //   marginBottom: theme.spacing(6),
// //   "&:last-child": {
// //     marginBottom: 0,
// //   },
// // }));

// // const TimelineMarker = styled(Box)(({ theme }) => ({
// //   position: "absolute",
// //   left: "-27px",
// //   top: "4px",
// //   width: "20px",
// //   height: "20px",
// //   borderRadius: "50%",
// //   border: `2px solid ${theme.palette.secondary.main}`,
// //   background: "rgba(13, 33, 55, 0.9)",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   zIndex: 2,
// //   cursor: "pointer", // Adicionado para analytics
// // }));

// // const TimelineContent = styled(motion.div)(({ theme }) => ({
// //   background: "rgba(13, 33, 55, 0.7)",
// //   backdropFilter: "blur(10px)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
// //   borderRadius: theme.spacing(1),
// //   padding: theme.spacing(3),
// //   marginBottom: theme.spacing(4),
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
// // }));

// // const CodeSnippet = styled(Box)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   fontSize: "0.9rem",
// //   lineHeight: 1.6,
// //   backgroundColor: "rgba(0, 0, 0, 0.2)",
// //   padding: theme.spacing(2),
// //   borderRadius: theme.spacing(1),
// //   marginTop: theme.spacing(2),
// //   position: "relative",
// //   overflow: "auto",
// //   cursor: "pointer", // Adicionado para analytics
// // }));

// // const SkillsContainer = styled(Box)(({ theme }) => ({
// //   display: "flex",
// //   flexWrap: "wrap",
// //   gap: theme.spacing(2),
// //   marginTop: theme.spacing(2),
// //   marginBottom: theme.spacing(2),
// // }));

// // const SkillCategory = styled(Box)(({ theme }) => ({
// //   background: "rgba(0, 0, 0, 0.2)",
// //   borderRadius: theme.spacing(1),
// //   padding: theme.spacing(2),
// //   flex: "1 1 calc(50% - 8px)",
// //   minWidth: "280px",
// //   border: "1px solid rgba(255, 255, 255, 0.05)",
// //   transition: "all 0.3s ease",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&:hover": {
// //     background: "rgba(0, 0, 0, 0.3)",
// //     border: "1px solid rgba(0, 229, 255, 0.3)",
// //     transform: "translateY(-2px)",
// //   },
// //   [theme.breakpoints.down("sm")]: {
// //     flex: "1 1 100%",
// //     minWidth: "100%",
// //   },
// // }));

// // const CategoryTitle = styled(Typography)(({ theme }) => ({
// //   display: "flex",
// //   alignItems: "center",
// //   marginBottom: theme.spacing(1.5),
// //   fontWeight: "bold",
// //   color: theme.palette.secondary.main,
// // }));

// // const SkillChip = styled(Chip)(({ theme }) => ({
// //   margin: theme.spacing(0.5),
// //   backgroundColor: "rgba(0, 229, 255, 0.1)",
// //   color: theme.palette.text.primary,
// //   border: "1px solid rgba(0, 229, 255, 0.3)",
// //   fontFamily: '"Roboto Mono", monospace',
// //   fontSize: "0.8rem",
// //   cursor: "pointer", // Adicionado para analytics
// //   transition: "all 0.3s ease",
// //   "&:hover": {
// //     backgroundColor: "rgba(0, 229, 255, 0.2)",
// //     border: "1px solid rgba(0, 229, 255, 0.5)",
// //     transform: "scale(1.05)",
// //   },
// // }));

// // const HighlightBox = styled(Box)(({ theme }) => ({
// //   background:
// //     "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(2, 136, 209, 0.1))",
// //   border: "1px solid rgba(0, 229, 255, 0.3)",
// //   borderRadius: theme.spacing(1),
// //   padding: theme.spacing(2),
// //   marginTop: theme.spacing(2),
// //   position: "relative",
// //   cursor: "pointer", // Adicionado para analytics
// //   "&::before": {
// //     content: '""',
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     width: "4px",
// //     height: "100%",
// //     background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //     borderRadius: "2px 0 0 2px",
// //   },
// // }));

// // const Formation: FC = () => {
// //   const { sectionRef } = useTabAnalytics("formation");

// //   // Analytics: Rastrear visualização da página de formação e tempo gasto
// //   // useEffect(() => {
// //   //   // Rastreia quando a página de formação é carregada
// //   //   trackProfileTabView("formation", {
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
// //   //     trackProfileTabTimeSpent("formation", timeSpent);
// //   //   };
// //   // }, []);

// //   // Funções de analytics para diferentes interações
// //   const handleTimelineItemClick = (education: string, level: string) => {
// //     trackProfileTabInteraction(
// //       "formation",
// //       "timeline_item_click",
// //       `${education}_${level}`
// //     );
// //   };

// //   const handleSkillCategoryClick = (category: string, education: string) => {
// //     trackProfileTabInteraction(
// //       "formation",
// //       "skill_category_click",
// //       `${category}_${education}`
// //     );
// //   };

// //   const handleSkillChipClick = (
// //     skill: string,
// //     category: string,
// //     education: string
// //   ) => {
// //     trackProfileTabInteraction(
// //       "formation",
// //       "skill_chip_click",
// //       `${skill}_${category}_${education}`
// //     );
// //   };

// //   const handleCodeSnippetClick = (education: string) => {
// //     trackProfileTabInteraction("formation", "code_snippet_click", education);
// //     // Interesse em código pode indicar interesse técnico avançado
// //     trackProfileConversion("technical_interest", "formation");
// //   };

// //   const handleHighlightBoxClick = (education: string, section: string) => {
// //     trackProfileTabInteraction(
// //       "formation",
// //       "highlight_section_click",
// //       `${education}_${section}`
// //     );
// //   };

// //   const handleQuoteClick = () => {
// //     trackProfileTabInteraction(
// //       "formation",
// //       "philosophical_quote_click",
// //       "unique_perspective"
// //     );
// //   };

// //   return (
// //     <Container
// //       component="section"
// //       id="formation"
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
// //           // Formação
// //         </Typography>

// //         <EducationTimeline>
// //           {/* Ciência de Dados */}
// //           <TimelineItem>
// //             <TimelineMarker
// //               onClick={() =>
// //                 trackProfileTabInteraction(
// //                   "formation",
// //                   "timeline_marker_click",
// //                   "data_science"
// //                 )
// //               }
// //             >
// //               <DataObjectIcon sx={{ fontSize: 12, color: "secondary.main" }} />
// //             </TimelineMarker>
// //             <TimelineContent
// //               whileHover={{ scale: 1.01 }}
// //               initial={{ opacity: 0, x: -20 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5 }}
// //               viewport={{ once: true }}
// //               onClick={() =>
// //                 handleTimelineItemClick(
// //                   "Especialização Ciência de Dados",
// //                   "pós-graduação"
// //                 )
// //               }
// //             >
// //               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
// //                 <DataObjectIcon sx={{ color: "secondary.main", mr: 1 }} />
// //                 <Typography variant="h5">
// //                   Especialização em Ciência de Dados
// //                 </Typography>
// //               </Box>

// //               <Typography
// //                 variant="body2"
// //                 sx={{ mb: 2, color: "text.secondary" }}
// //               >
// //                 Universidade Tecnológica Federal do Paraná | UTFPR • Em
// //                 andamento
// //               </Typography>

// //               <HighlightBox
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleHighlightBoxClick(
// //                     "data_science",
// //                     "specialization_areas"
// //                   );
// //                 }}
// //               >
// //                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
// //                   <TrendingUpIcon
// //                     sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
// //                   />
// //                   <Typography variant="h6" sx={{ color: "secondary.main" }}>
// //                     Áreas de Especialização
// //                   </Typography>
// //                 </Box>
// //                 <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
// //                   Aprofundamento em técnicas avançadas de análise de dados,
// //                   machine learning, e inteligência artificial aplicada a
// //                   problemas complexos de negócio.
// //                 </Typography>
// //               </HighlightBox>

// //               <SkillsContainer>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick(
// //                       "artificial_intelligence",
// //                       "data_science"
// //                     );
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <AutoAwesomeIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     Inteligência Artificial
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label="Machine Learning"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "machine_learning",
// //                           "ai",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Deep Learning"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "deep_learning",
// //                           "ai",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="NLP"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick("nlp", "ai", "data_science");
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Computer Vision"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "computer_vision",
// //                           "ai",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Neural Networks"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "neural_networks",
// //                           "ai",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick(
// //                       "languages_frameworks",
// //                       "data_science"
// //                     );
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <CodeIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     Linguagens & Frameworks
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label="Python"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "python",
// //                           "languages",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="R"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick("r", "languages", "data_science");
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="SQL"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "sql",
// //                           "languages",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Apache Spark"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "apache_spark",
// //                           "frameworks",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="TensorFlow"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "tensorflow",
// //                           "frameworks",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="PyTorch"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "pytorch",
// //                           "frameworks",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick(
// //                       "analysis_modeling",
// //                       "data_science"
// //                     );
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <FunctionsIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     Análise & Modelagem
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label="Estatística Avançada"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "advanced_statistics",
// //                           "analysis",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Modelagem Preditiva"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "predictive_modeling",
// //                           "analysis",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Time Series"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "time_series",
// //                           "analysis",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="A/B Testing"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "ab_testing",
// //                           "analysis",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick(
// //                       "data_engineering",
// //                       "data_science"
// //                     );
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <StorageIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     Data Engineering
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label="ETL Pipelines"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "etl_pipelines",
// //                           "data_eng",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Data Lakes"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "data_lakes",
// //                           "data_eng",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Data Warehousing"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "data_warehousing",
// //                           "data_eng",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Big Data"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "big_data",
// //                           "data_eng",
// //                           "data_science"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //               </SkillsContainer>

// //               <CodeSnippet
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleCodeSnippetClick("data_science");
// //                 }}
// //               >
// //                 <pre style={{ margin: 0, color: "#f5f5f5" }}>
// //                   <span style={{ color: "#569CD6" }}>import</span> pandas{" "}
// //                   <span style={{ color: "#569CD6" }}>as</span> pd
// //                   <br />
// //                   <span style={{ color: "#569CD6" }}>import</span> numpy{" "}
// //                   <span style={{ color: "#569CD6" }}>as</span> np
// //                   <br />
// //                   <span style={{ color: "#569CD6" }}>from</span>{" "}
// //                   sklearn.ensemble{" "}
// //                   <span style={{ color: "#569CD6" }}>import</span>{" "}
// //                   RandomForestClassifier
// //                   <br />
// //                   <br />
// //                   <span style={{ color: "#569CD6" }}>def</span>{" "}
// //                   <span style={{ color: "#DCDCAA" }}>
// //                     build_predictive_model
// //                   </span>
// //                   (data, target):
// //                   <br />
// //                   &nbsp;&nbsp;
// //                   <span style={{ color: "#6A9955" }}>
// //                     # Aplicando conhecimentos da especialização
// //                   </span>
// //                   <br />
// //                   &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>
// //                     return
// //                   </span>{" "}
// //                   model, insights, business_value
// //                 </pre>
// //               </CodeSnippet>
// //             </TimelineContent>
// //           </TimelineItem>

// //           {/* Análise e Desenvolvimento de Sistemas */}
// //           <TimelineItem>
// //             <TimelineMarker
// //               onClick={() =>
// //                 trackProfileTabInteraction(
// //                   "formation",
// //                   "timeline_marker_click",
// //                   "systems_development"
// //                 )
// //               }
// //             >
// //               <LaptopIcon sx={{ fontSize: 12, color: "secondary.main" }} />
// //             </TimelineMarker>
// //             <TimelineContent
// //               whileHover={{ scale: 1.01 }}
// //               initial={{ opacity: 0, x: -20 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5, delay: 0.2 }}
// //               viewport={{ once: true }}
// //               onClick={() =>
// //                 handleTimelineItemClick(
// //                   "Análise Desenvolvimento Sistemas",
// //                   "tecnólogo"
// //                 )
// //               }
// //             >
// //               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
// //                 <LaptopIcon sx={{ color: "secondary.main", mr: 1 }} />
// //                 <Typography variant="h5">
// //                   Análise e Desenvolvimento de Sistemas
// //                 </Typography>
// //               </Box>

// //               <Typography
// //                 variant="body2"
// //                 sx={{ mb: 2, color: "text.secondary" }}
// //               >
// //                 Centro Universitário Opet | OPET • Concluído
// //               </Typography>

// //               <HighlightBox
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleHighlightBoxClick(
// //                     "systems_development",
// //                     "competencies_developed"
// //                   );
// //                 }}
// //               >
// //                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
// //                   <TrendingUpIcon
// //                     sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
// //                   />
// //                   <Typography variant="h6" sx={{ color: "secondary.main" }}>
// //                     Competências Desenvolvidas
// //                   </Typography>
// //                 </Box>
// //                 <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
// //                   Formação em desenvolvimento, arquitetura, e metodologias
// //                   ágeis, com foco em soluções de sistemas escaláveis e de alta
// //                   performance.
// //                 </Typography>
// //               </HighlightBox>

// //               <SkillsContainer>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick(
// //                       "backend_development",
// //                       "systems_development"
// //                     );
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <CodeIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     Backend Development
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label=".NET"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "dotnet",
// //                           "backend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Node"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "node",
// //                           "backend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Dapper"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "dapper",
// //                           "backend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Web APIs"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "web_apis",
// //                           "backend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Microservices"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "microservices",
// //                           "backend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick(
// //                       "frontend_development",
// //                       "systems_development"
// //                     );
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <LaptopIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     Frontend Development
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label="React"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "react",
// //                           "frontend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="TypeScript"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "typescript",
// //                           "frontend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Material UI"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "material_ui",
// //                           "frontend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Tailwind CSS"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "tailwind_css",
// //                           "frontend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Next.js"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "nextjs",
// //                           "frontend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Responsive Design"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "responsive_design",
// //                           "frontend",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick(
// //                       "database_cloud",
// //                       "systems_development"
// //                     );
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <StorageIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     Database & Cloud
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label="SQL Server"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "sql_server",
// //                           "database",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="PostgreSQL"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "postgresql",
// //                           "database",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="MongoDB"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "mongodb",
// //                           "database",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Google Cloud Platform"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "gcp",
// //                           "cloud",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Docker"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "docker",
// //                           "cloud",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick(
// //                       "devops_architecture",
// //                       "systems_development"
// //                     );
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <LoopIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     DevOps & Architecture
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label="CI/CD Pipelines"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "cicd_pipelines",
// //                           "devops",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="System Design"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "system_design",
// //                           "architecture",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Clean Architecture"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "clean_architecture",
// //                           "architecture",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="SOLID Principles"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "solid_principles",
// //                           "architecture",
// //                           "systems_development"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //               </SkillsContainer>

// //               <CodeSnippet
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleCodeSnippetClick("systems_development");
// //                 }}
// //               >
// //                 <pre style={{ margin: 0, color: "#f5f5f5" }}>
// //                   <span style={{ color: "#569CD6" }}>interface</span>{" "}
// //                   <span style={{ color: "#4EC9B0" }}>FullStackDeveloper</span>{" "}
// //                   {"{"}
// //                   <br />
// //                   &nbsp;&nbsp;buildScalableApplications():{" "}
// //                   <span style={{ color: "#4EC9B0" }}>Enterprise</span>Solution;
// //                   <br />
// //                   &nbsp;&nbsp;designSystemArchitecture():{" "}
// //                   <span style={{ color: "#4EC9B0" }}>Architecture</span>
// //                   Blueprint;
// //                   <br />
// //                   &nbsp;&nbsp;implementBestPractices():{" "}
// //                   <span style={{ color: "#4EC9B0" }}>QualityCode</span>;
// //                   <br />
// //                   &nbsp;&nbsp;deliverBusinessValue():{" "}
// //                   <span style={{ color: "#4EC9B0" }}>ROI</span>;
// //                   <br />
// //                   {"}"}
// //                 </pre>
// //               </CodeSnippet>
// //             </TimelineContent>
// //           </TimelineItem>

// //           {/* Filosofia */}
// //           <TimelineItem>
// //             <TimelineMarker
// //               onClick={() =>
// //                 trackProfileTabInteraction(
// //                   "formation",
// //                   "timeline_marker_click",
// //                   "philosophy"
// //                 )
// //               }
// //             >
// //               <SchoolIcon sx={{ fontSize: 12, color: "secondary.main" }} />
// //             </TimelineMarker>
// //             <TimelineContent
// //               whileHover={{ scale: 1.01 }}
// //               initial={{ opacity: 0, x: -20 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5, delay: 0.4 }}
// //               viewport={{ once: true }}
// //               onClick={() =>
// //                 handleTimelineItemClick("Licenciatura Filosofia", "graduação")
// //               }
// //             >
// //               <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
// //                 <SchoolIcon sx={{ color: "secondary.main", mr: 1 }} />
// //                 <Typography variant="h5">Licenciatura em Filosofia</Typography>
// //               </Box>

// //               <Typography
// //                 variant="body2"
// //                 sx={{ mb: 2, color: "text.secondary" }}
// //               >
// //                 Pontifícia Universidade Católica do Paraná | PUCPR • Concluído
// //               </Typography>

// //               <HighlightBox
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleHighlightBoxClick(
// //                     "philosophy",
// //                     "competitive_differential"
// //                   );
// //                 }}
// //               >
// //                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
// //                   <PsychologyIcon
// //                     sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
// //                   />
// //                   <Typography variant="h6" sx={{ color: "secondary.main" }}>
// //                     Diferencial Competitivo
// //                   </Typography>
// //                 </Box>
// //                 <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
// //                   Formação única que proporciona visão sistêmica, pensamento
// //                   crítico avançado, e capacidade de análise que se traduz em
// //                   soluções tecnológicas mais elegantes e centradas no usuário.
// //                 </Typography>
// //               </HighlightBox>

// //               <SkillsContainer>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick(
// //                       "strategic_thinking",
// //                       "philosophy"
// //                     );
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <PsychologyIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     Pensamento Estratégico
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label="Análise Sistêmica"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "systemic_analysis",
// //                           "strategic",
// //                           "philosophy"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Pensamento Crítico"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "critical_thinking",
// //                           "strategic",
// //                           "philosophy"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Resolução de Problemas"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "problem_solving",
// //                           "strategic",
// //                           "philosophy"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Tomada de Decisão"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "decision_making",
// //                           "strategic",
// //                           "philosophy"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //                 <SkillCategory
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     handleSkillCategoryClick("innovation_ethics", "philosophy");
// //                   }}
// //                 >
// //                   <CategoryTitle>
// //                     <AutoAwesomeIcon sx={{ mr: 1, fontSize: 18 }} />
// //                     Inovação & Ética
// //                   </CategoryTitle>
// //                   <Box>
// //                     <SkillChip
// //                       label="Ética Tecnológica"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "tech_ethics",
// //                           "innovation",
// //                           "philosophy"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Inovação Responsável"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "responsible_innovation",
// //                           "innovation",
// //                           "philosophy"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Design Centrado no Usuário"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "user_centered_design",
// //                           "innovation",
// //                           "philosophy"
// //                         );
// //                       }}
// //                     />
// //                     <SkillChip
// //                       label="Impacto Social"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleSkillChipClick(
// //                           "social_impact",
// //                           "innovation",
// //                           "philosophy"
// //                         );
// //                       }}
// //                     />
// //                   </Box>
// //                 </SkillCategory>
// //               </SkillsContainer>

// //               <Box
// //                 sx={{
// //                   mt: 3,
// //                   p: 3,
// //                   background:
// //                     "linear-gradient(135deg, rgba(0, 229, 255, 0.05), rgba(2, 136, 209, 0.05))",
// //                   borderRadius: 2,
// //                   position: "relative",
// //                   border: "1px solid rgba(0, 229, 255, 0.2)",
// //                   cursor: "pointer",
// //                 }}
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleQuoteClick();
// //                 }}
// //               >
// //                 <Typography
// //                   variant="body1"
// //                   sx={{
// //                     fontStyle: "italic",
// //                     color: "#f0f0f0",
// //                     lineHeight: 1.7,
// //                     textAlign: "center",
// //                   }}
// //                 >
// //                   "A formação filosófica me proporciona uma perspectiva única no
// //                   desenvolvimento de software. Consigo conectar soluções
// //                   técnicas complexas a necessidades humanas reais, criando
// //                   produtos que não apenas funcionam, mas que fazem sentido."
// //                 </Typography>
// //               </Box>

// //               <CodeSnippet
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   handleCodeSnippetClick("philosophy");
// //                 }}
// //               >
// //                 <pre style={{ margin: 0, color: "#f5f5f5" }}>
// //                   <span style={{ color: "#569CD6" }}>class</span>{" "}
// //                   <span style={{ color: "#4EC9B0" }}>
// //                     PhilosophicalDeveloper
// //                   </span>{" "}
// //                   <span style={{ color: "#569CD6" }}>extends</span>{" "}
// //                   <span style={{ color: "#4EC9B0" }}>TechExpert</span> {"{"}
// //                   <br />
// //                   &nbsp;&nbsp;
// //                   <span style={{ color: "#DCDCAA" }}>analyzeRequirements</span>
// //                   (problem) {"{"}
// //                   <br />
// //                   &nbsp;&nbsp;&nbsp;&nbsp;
// //                   <span style={{ color: "#569CD6" }}>return</span>{" "}
// //                   <span style={{ color: "#569CD6" }}>this</span>
// //                   .applyCriticalThinking(problem)
// //                   <br />
// //                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.considerEthicalImplications()
// //                   <br />
// //                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.designHumanCenteredSolution();
// //                   <br />
// //                   &nbsp;&nbsp;{"}"}
// //                   <br />
// //                   {"}"}
// //                 </pre>
// //               </CodeSnippet>
// //             </TimelineContent>
// //           </TimelineItem>
// //         </EducationTimeline>
// //       </motion.div>
// //     </Container>
// //   );
// // };

// // export default Formation;
