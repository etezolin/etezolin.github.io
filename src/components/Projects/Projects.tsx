import type { FC } from "react";
import { Box, Container, Typography, Chip, Divider, Card } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
// import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SpeedIcon from "@mui/icons-material/Speed";
import ArchitectureIcon from "@mui/icons-material/Architecture";
// import SchoolIcon from "@mui/icons-material/School";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LockIcon from "@mui/icons-material/Lock";

const ProjectCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  borderRadius: 4,
  position: "relative",
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

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: "rgba(20, 40, 80, 0.8)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.75rem",
}));

const ProjectHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const ProjectIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginRight: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const ProjectResultsSection = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderLeft: `3px solid ${theme.palette.secondary.main}`,
}));

const ResultsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  marginBottom: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const ResultsList = styled("ul")(({ theme }) => ({
  "& > li": {
    marginBottom: theme.spacing(1),
  },
}));

const TechStackSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const TechStackTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.9rem",
  color: theme.palette.text.secondary,
}));

const ConfidentialBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontSize: "0.75rem",
  color: theme.palette.text.secondary,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  padding: theme.spacing(1, 1),
  borderRadius: theme.spacing(1),
  // marginLeft: theme.spacing(1),
  paddingLeft: "20px",
  marginTop: "10px",
  width: "205px",
}));

const ProjectsSection: FC = () => {
  // Lista de projetos anonimizados mas com detalhes técnicos relevantes
  const projects = [
    {
      title:
        "Hub de Integração Educacional - Plataforma Unificada para Gestão Escolar",
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      description:
        "Trabalhei no desenvolvimento de uma plataforma enterprise de integração que interconecta mais de 2.000 instituições de ensino da rede estadual. Esta solução consolidou múltiplos sistemas legados em uma única interface centralizada, implementando APIs robustas para sincronização de dados em tempo real.",
      confidential: true,
      results: [
        "Redução de 60% no tempo de processamento de dados administrativos;",
        "Diminuição de 70% em erros de sincronização entre sistemas;",
        "Centralização de informações de mais de 1 milhão de alunos;",
        "Desenvolvimento de automações cross-platform que integraram múltiplos sistemas, resultando em economia de mais de 200 horas mensais de trabalho manual e redução de 65% em processos operacionais.",
      ],
      techStack: [
        ".NET",
        "C#",
        "React",
        "TypeScript",
        "Node.js",
        "Microsserviços",
        "API RESTful",
        "PostgreSQL",
        "SQL Server",
      ],
    },
    {
      title:
        "Sistema Inteligente de Escrita e Avaliação de Redações com IA Generativa",
      icon: <EditNoteIcon fontSize="large" />,
      description:
        "Participei do desenvolvimento da plataforma educacional inovadora que integra criação de temas personalizados, ambiente de escrita para estudantes e sistema de avaliação assistido por IA Generativa. A solução automatiza o processo de feedback pedagógico, permitindo correções mais consistentes e detalhadas, além de análises de progresso individualizado.",
      confidential: true,
      results: [
        "Redução no tempo médio de correção de redações pelos professores;",
        "Aumento na qualidade e detalhamento do feedback fornecido aos estudantes;",
        "Implementação de análise avançada de texto para identificar padrões de escrita e oportunidades de melhoria;",
        "Capacidade de processamento de milhares de redações diárias.",
      ],
      techStack: [
        "C#",
        ".NET",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Mensageria",
        "IA Generativa",
        "CI/CD",
        "Google Cloud Plataform",
        "Observabilidade",
      ],
    },
    {
      title:
        "Sistema Avançado de Gestão Automatizada para Google Workspace por meio de RPAs",
      icon: <ArchitectureIcon fontSize="large" />,
      description:
        "Atuei projetando e implementando um sistema automatizado de gerenciamento para domínio Google Workspace utilizando Robotic Process Automation (RPA). Esta solução substituiu processos administrativos manuais e demorados por fluxos de trabalho automatizados, permitindo o gerenciamento eficiente de contas, grupos, permissões e recursos compartilhados em larga escala.",
      confidential: true,
      results: [
        "Redução no tempo necessário para provisionamento e configuração de novas contas;",
        "Automação de mais de 20 tarefas administrativas recorrentes, eliminando erros humanos;",
        "Implementação de auditorias automáticas diárias de segurança e conformidade;",
        "Economia estimada de horas mensais em tarefas administrativas repetitivas.",
      ],
      techStack: [
        "C#",
        "CQRS",
        "SQL",
        "Google Admin SDK",
        "Google API Client",
        "OAuth 2.0",
        "REST APIs",
        "CI/CD",
        "JSON/YAML",
        "Domain-Driven Design",
        "Event Sourcing",
      ],
    },
    {
      title:
        "Plataforma Escalável de Processamento e Correção de Avaliações Educacionais",
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      description:
        "Trabalhei na implementação de solução de alta performance para processamento, digitalização e correção automática de mais de 2 milhões de avaliações por edição. Esta plataforma on premise utiliza processamento distribuído e tecnologias de reconhecimento ótico para digitalizar e validar avaliações em escala, juntamente com um sistema especialista para correção automatizada baseada em regras de negócio complexas. A arquitetura resiliente garante processamento contínuo mesmo durante picos de submissão, mantendo integridade dos dados e rastreabilidade completa.",
      confidential: true,
      results: [
        "Redução de 85% no tempo de processamento, convertendo um ciclo de 3 semanas em apenas 5 dias para correção completa de toda uma edição;",
        "Diminuição comprovada de 93% em erros de sincronização entre sistemas de digitalização e correção, garantindo integridade dos resultado;",
        "Implementação de sistema centralizado com dados de 1.2 milhão de alunos, permitindo análises comparativas de desempenho por região, escola e disciplina;",
        "Otimização de processos operacionais com redução de 78% em intervenções manuais e aumento de 95% na precisão das correções.",
      ],
      techStack: [
        ".NET",
        "C#",
        "React",
        "TypeScript",
        "Node.js",
        "Microsserviços",
        "API RESTful",
        "SQL Server",
      ],
    },
  ];

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

  const TerminalCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    background: "rgba(13, 33, 55, 0.7)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    marginBottom: theme.spacing(3),
  }));

  return (
    <Container sx={{ minHeight: "100vh", py: 8 }} id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
          // Projetos
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontStyle: "italic" }}
          >
            Nota: Os projetos apresentados abaixo foram desenvolvidos em
            ambientes corporativos com acordos de confidencialidade. Os detalhes
            foram anonimizados, preservando o foco nas soluções técnicas
            implementadas e nos resultados obtidos.
          </Typography>
        </Box>

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
                <ProjectIcon>{project.icon}</ProjectIcon>
                <ProjectTitle variant="h5">
                  <Box>
                    <Box>{project.title}</Box>
                    <Box>
                      {project.confidential && (
                        <ConfidentialBadge>
                          <LockIcon fontSize="small" />
                          Projeto confidencial
                        </ConfidentialBadge>
                      )}
                    </Box>
                  </Box>
                </ProjectTitle>
              </ProjectHeader>

              <ProjectDescription variant="body1">
                {project.description}
              </ProjectDescription>

              <ProjectResultsSection>
                <ResultsTitle variant="h6">
                  <SpeedIcon
                    fontSize="small"
                    sx={{ color: "secondary.main" }}
                  />
                  Resultados e Impacto
                </ResultsTitle>
                <ResultsList sx={{ pl: 2 }}>
                  {project.results.map((result, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{result}</Typography>
                    </li>
                  ))}
                </ResultsList>
              </ProjectResultsSection>

              <TechStackSection>
                <TechStackTitle>// Stack tecnológica</TechStackTitle>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {project.techStack.map((tech, idx) => (
                    <TechChip key={idx} label={tech} size="small" />
                  ))}
                </Box>
              </TechStackSection>
            </ProjectCard>
          </motion.div>
        ))}

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        <TerminalCard sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ color: "secondary.main", mb: 2 }}>
            Abordagem para Projetos Confidenciais
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Embora os detalhes específicos destes projetos sejam confidenciais,
            estou disponível para discutir em entrevistas:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <SkillItem>
              ✓ Os desafios técnicos enfrentados e as estratégias de solução
              adotadas;
            </SkillItem>
            <SkillItem>
              ✓ Decisões de arquitetura e trade-offs considerados;
            </SkillItem>
            <SkillItem>
              ✓ Metodologias de desenvolvimento e práticas de engenharia
              aplicadas;
            </SkillItem>
            <SkillItem>
              ✓ Lições aprendidas e como foram aplicados esses conhecimentos em
              projetos posteriores.
            </SkillItem>
          </Box>
        </TerminalCard>
      </motion.div>
    </Container>
  );
};

export default ProjectsSection;
