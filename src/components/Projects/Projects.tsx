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

import type { FC } from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Divider,
  Card,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SpeedIcon from "@mui/icons-material/Speed";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LockIcon from "@mui/icons-material/Lock";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import WarningIcon from "@mui/icons-material/Warning";

const ProjectCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(2.5),
  marginBottom: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  borderRadius: 8,
  position: "relative",
  transition: "all 0.3s ease",
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

const CompactCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2.5),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  marginBottom: theme.spacing(2),
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: theme.palette.secondary.main,
  },
}));

const ProjectHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: theme.spacing(2),
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));

const ProjectTitleBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 16,
  flex: 1,
}));

const ProjectIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  fontSize: "1.1rem",
  lineHeight: 1.3,
}));

const ConfidentialBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  fontSize: "0.75rem",
  color: theme.palette.text.secondary,
  backgroundColor: "rgba(255, 193, 7, 0.1)",
  border: "1px solid rgba(255, 193, 7, 0.3)",
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(3),
  marginTop: theme.spacing(1),
  width: "fit-content",
}));

const MetricChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.25),
  backgroundColor: "rgba(0, 229, 255, 0.1)",
  color: theme.palette.secondary.main,
  border: "1px solid rgba(0, 229, 255, 0.3)",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.7rem",
  height: 20,
  "& .MuiChip-label": {
    padding: "0 6px",
  },
}));

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.25),
  backgroundColor: "rgba(20, 40, 80, 0.6)",
  color: theme.palette.text.primary,
  border: "1px solid rgba(255, 255, 255, 0.1)",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.7rem",
  height: 22,
}));

const ResultItem = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(1),
  "&::before": {
    content: '"▸"',
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    flexShrink: 0,
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.75rem",
  textTransform: "none",
  borderRadius: theme.spacing(3),
  padding: theme.spacing(0.5, 1.5),
  margin: theme.spacing(0.25),
  border: "1px solid rgba(255, 255, 255, 0.2)",
  "&:hover": {
    borderColor: theme.palette.secondary.main,
    backgroundColor: "rgba(0, 229, 255, 0.1)",
  },
}));

const AlertBox = styled(Box)(({ theme }) => ({
  background: "rgba(255, 193, 7, 0.1)",
  border: "1px solid rgba(255, 193, 7, 0.3)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(2),
}));

const SkillItem = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: "#f0f0f0",
  marginBottom: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const ProjectsSection: FC = () => {
  const projects = [
    {
      title: "Hub de Integração Educacional Enterprise",
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      description:
        "Plataforma de integração conectando 2.000+ instituições de ensino via APIs robustas e sincronização em tempo real.",
      confidential: true,
      metrics: ["2k+ escolas", "1M+ alunos", "60% ↓ tempo", "70% ↓ erros"],
      results: [
        "Redução de 60% no tempo de processamento administrativo;",
        "Diminuição de 70% em erros de sincronização;",
        "Centralização de dados de 1+ milhão de alunos;",
        "Economia de 200+ horas mensais de trabalho manual.",
      ],
      techStack: [
        ".NET",
        "React",
        "TypeScript",
        "Microsserviços",
        "PostgreSQL",
        "API RESTful",
      ],
    },
    {
      title: "Sistema de Avaliação com IA Generativa",
      icon: <EditNoteIcon fontSize="large" />,
      description:
        "Plataforma educacional com IA para criação de temas, ambiente de escrita e correção automatizada de redações.",
      confidential: true,
      metrics: [
        "IA Generativa",
        "Milhares/dia",
        "Feedback detalhado",
        "Análise NLP",
      ],
      results: [
        "Redução significativa no tempo de correção;",
        "Aumento na qualidade do feedback pedagógico;",
        "Análise avançada de padrões de escrita;",
        "Processamento de milhares de redações diárias.",
      ],
      techStack: [
        "C#",
        ".NET",
        "React",
        "PostgreSQL",
        "Docker",
        "IA Generativa",
        "CI/CD",
        "GCP",
      ],
    },
    {
      title: "Automação Google Workspace (RPA)",
      icon: <ArchitectureIcon fontSize="large" />,
      description:
        "Sistema automatizado para gerenciamento de domínio Google Workspace usando RPA para administração em larga escala.",
      confidential: true,
      metrics: [
        "25+ tarefas",
        "90% ↓ erros",
        "Auditoria diária",
        "Provisionamento automático",
      ],
      results: [
        "Automação de 25+ tarefas administrativas recorrentes;",
        "Diminuição de erros humanos;",
        "Auditorias automáticas de segurança diárias;",
        "Redução drástica em tempo de provisionamento.",
      ],
      techStack: [
        "C#",
        "CQRS",
        "Google Admin SDK",
        "Google Classroom API",
        "Google Drive API",
        "OAuth 2.0",
        "DDD",
        "Event Sourcing",
      ],
    },
    {
      title: "Plataforma de Avaliações Educacionais (2M+ registros)",
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      description:
        "Solução de alta performance para processamento e correção automática de avaliações em escala, com arquitetura resiliente.",
      confidential: true,
      metrics: [
        "2M+ avaliações",
        "85% ↓ tempo",
        "95% precisão",
        "5 dias ciclo",
      ],
      results: [
        "Redução de 85% no tempo: 3 semanas → 5 dias;",
        "Diminuição de 93% em erros de sincronização;",
        "Sistema centralizado com 1.2M+ alunos;",
        "Redução de 78% em intervenções manuais.",
      ],
      techStack: [
        ".NET",
        "React",
        "TypeScript",
        "Microsserviços",
        "SQL Server",
        "OCR",
      ],
    },
  ];

  return (
    <Container sx={{ py: 8 }} id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
          // Projetos
        </Typography>

        {/* Alerta sobre Confidencialidade */}
        <AlertBox>
          <WarningIcon sx={{ color: "#ffc107", mt: 0.2 }} />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
              Projetos Confidenciais
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}
            >
              Os projetos foram desenvolvidos em ambiente corporativo com
              acordos de confidencialidade. Detalhes técnicos e resultados são
              apresentados de forma anonimizada, priorizando soluções
              implementadas e impacto gerado.
            </Typography>
          </Box>
        </AlertBox>

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
            <ProjectCard>
              <ProjectHeader>
                <ProjectTitleBox>
                  <ProjectIcon>{project.icon}</ProjectIcon>
                  <Box>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    {project.confidential && (
                      <ConfidentialBadge>
                        <LockIcon sx={{ fontSize: 14 }} />
                        Confidencial
                      </ConfidentialBadge>
                    )}
                  </Box>
                </ProjectTitleBox>
              </ProjectHeader>

              <Typography
                variant="body2"
                sx={{ mb: 2, fontSize: "0.9rem", lineHeight: 1.5 }}
              >
                {project.description}
              </Typography>

              {/* Métricas em Chips */}
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
                  // Métricas principais:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {project.metrics.map((metric, idx) => (
                    <MetricChip key={idx} label={metric} size="small" />
                  ))}
                </Box>
              </Box>

              {/* Resultados Compactos */}
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
                  Resultados:
                </Typography>
                {project.results.slice(0, 4).map((result, idx) => (
                  <ResultItem key={idx}>{result}</ResultItem>
                ))}
                {project.results.length > 4 && (
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", ml: 2, fontSize: "0.75rem" }}
                  >
                    +{project.results.length - 2} outros resultados
                  </Typography>
                )}
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
                  // Stack:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {project.techStack.map((tech, idx) => (
                    <TechChip key={idx} label={tech} size="small" />
                  ))}
                </Box>
              </Box>
            </ProjectCard>
          </motion.div>
        ))}

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Seção de Projetos Demonstráveis - URGENTE */}
        <CompactCard>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <GitHubIcon sx={{ color: "secondary.main", mr: 1 }} />
            <Typography
              variant="h6"
              sx={{
                color: "secondary.main",
                fontFamily: '"Roboto Mono", monospace',
              }}
            >
              // Projetos Open Source (Em Desenvolvimento)
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
            Estou desenvolvendo projetos demonstráveis que complementarão este
            portfólio:
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
            <ActionButton variant="outlined" startIcon={<CodeIcon />} disabled>
              Sistema de Gestão Full-Stack
            </ActionButton>
            <ActionButton
              variant="outlined"
              startIcon={<ArchitectureIcon />}
              disabled
            >
              Microsserviços + Docker
            </ActionButton>
            <ActionButton
              variant="outlined"
              startIcon={<LaunchIcon />}
              disabled
            >
              Dashboard com Data Science
            </ActionButton>
          </Box>

          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontStyle: "italic",
              fontSize: "0.8rem",
            }}
          >
            * Projetos em desenvolvimento para demonstração de competências
            técnicas sem restrições de confidencialidade. Previsão: próximas
            semanas.
          </Typography>
        </CompactCard>

        {/* Abordagem para Entrevistas */}
        <CompactCard>
          <Typography
            variant="h6"
            sx={{
              color: "secondary.main",
              mb: 2,
              fontFamily: '"Roboto Mono", monospace',
            }}
          >
            // Discussão Técnica em Entrevistas
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
            Posso detalhar em entrevistas (respeitando confidencialidade):
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 0.5,
              md: {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
            }}
          >
            <Box>
              <SkillItem>
                ▸ Desafios técnicos e estratégias de solução;
              </SkillItem>
              <SkillItem>▸ Decisões de arquitetura e trade-offs;</SkillItem>
            </Box>
            <Box>
              <SkillItem>▸ Metodologias e práticas de engenharia;</SkillItem>
              <SkillItem>▸ Lições aprendidas e evolução técnica.</SkillItem>
            </Box>
          </Box>
        </CompactCard>
      </motion.div>
    </Container>
  );
};

export default ProjectsSection;
