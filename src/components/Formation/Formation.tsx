import type { FC } from "react";
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import DataObjectIcon from "@mui/icons-material/DataObject";
import SchoolIcon from "@mui/icons-material/School";
import LaptopIcon from "@mui/icons-material/Laptop";
import TimelineIcon from "@mui/icons-material/Timeline";
import FunctionsIcon from "@mui/icons-material/Functions";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import LoopIcon from "@mui/icons-material/Loop";
import CodeIcon from "@mui/icons-material/Code";

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
  left: "-27px", // Ajuste conforme necessário
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

const CodeTerminal = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.3)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  fontFamily: '"Roboto Mono", monospace',
  position: "relative",
  overflow: "hidden",
}));

const TerminalHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  paddingBottom: theme.spacing(1),
}));

const TerminalTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.9rem",
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(1),
}));

const CommandPrompt = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const CommandOutput = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.text.primary,
  fontSize: "0.9rem",
  lineHeight: 1.6,
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

const SkillProgress = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1.5),
}));

const SkillLabel = styled(Typography)(({ theme }) => ({
  minWidth: "180px",
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.85rem",
  color: theme.palette.text.primary,
}));

const SkillBar = styled(Box)(() => ({
  flex: 1,
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

              <CodeTerminal>
                <TerminalHeader>
                  <TerminalIcon
                    sx={{ color: "secondary.main", fontSize: 16 }}
                  />
                  <TerminalTitle>data-science-skills.sh</TerminalTitle>
                </TerminalHeader>

                <CommandPrompt>
                  $ ./analyze_skills.py --domain "data_science"
                </CommandPrompt>
                <CommandOutput sx={{ mb: 2 }}>
                  Analisando competências em Ciência de Dados...
                </CommandOutput>

                <Box sx={{ mb: 3 }}>
                  <Tooltip title="Machine Learning, NLP, Deep Learning">
                    <SkillProgress>
                      <SkillLabel>Inteligência Artificial</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={75}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>

                  <Tooltip title="Python, R, SQL, Spark">
                    <SkillProgress>
                      <SkillLabel>Linguagens & Frameworks</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={80}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>

                  <Tooltip title="Estatística, Probabilidade, Modelagem">
                    <SkillProgress>
                      <SkillLabel>Análise Estatística</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={85}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>

                  <Tooltip title="ETL, Data Lakes, Data Warehousing">
                    <SkillProgress>
                      <SkillLabel>Data Engineering</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={70}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0,0,0,0.3)",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <TimelineIcon
                      sx={{ color: "secondary.main", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="caption">
                      Data Visualization
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0,0,0,0.3)",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <BatchPredictionIcon
                      sx={{ color: "secondary.main", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="caption">
                      Predictive Modeling
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0,0,0,0.3)",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <FunctionsIcon
                      sx={{ color: "secondary.main", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="caption">
                      Business Intelligence
                    </Typography>
                  </Box>
                </Box>
              </CodeTerminal>

              <CodeSnippet>
                <pre style={{ margin: 0, color: "#f5f5f5" }}>
                  <span style={{ color: "#569CD6" }}>import</span> pandas{" "}
                  <span style={{ color: "#569CD6" }}>as</span> pd
                  <br />
                  <span style={{ color: "#569CD6" }}>import</span> numpy{" "}
                  <span style={{ color: "#569CD6" }}>as</span> np
                  <br />
                  <span style={{ color: "#569CD6" }}>import</span>{" "}
                  matplotlib.pyplot <span style={{ color: "#569CD6" }}>as</span>{" "}
                  plt
                  <br />
                  <br />
                  <span style={{ color: "#569CD6" }}>def</span>{" "}
                  <span style={{ color: "#DCDCAA" }}>analyze_data</span>(data,
                  target_column):
                  <br />
                  &nbsp;&nbsp;
                  <span style={{ color: "#6A9955" }}>
                    # Aplicando conhecimentos da especialização
                  </span>
                  <br />
                  &nbsp;&nbsp;<span style={{ color: "#569CD6" }}>
                    return
                  </span>{" "}
                  insights, recommendations
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

              <CodeTerminal>
                <TerminalHeader>
                  <CodeIcon sx={{ color: "secondary.main", fontSize: 16 }} />
                  <TerminalTitle>development-proficiency.ts</TerminalTitle>
                </TerminalHeader>

                <CommandPrompt>$ node evaluate-dev-skills.js</CommandPrompt>
                <CommandOutput sx={{ mb: 2 }}>
                  Avaliando competências de desenvolvimento...
                </CommandOutput>

                <Box sx={{ mb: 3 }}>
                  <Tooltip title=".NET Core, ASP.NET, Entity Framework">
                    <SkillProgress>
                      <SkillLabel>Backend Development</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={90}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>

                  <Tooltip title="React, TypeScript, Material UI">
                    <SkillProgress>
                      <SkillLabel>Frontend Development</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={85}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>

                  <Tooltip title="SQL Server, PostgreSQL, MongoDB">
                    <SkillProgress>
                      <SkillLabel>Database Design</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={85}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>

                  <Tooltip title="Microsserviços, API Design, Cloud Architecture">
                    <SkillProgress>
                      <SkillLabel>System Architecture</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={80}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0,0,0,0.3)",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <StorageIcon
                      sx={{ color: "secondary.main", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="caption">Database Design</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0,0,0,0.3)",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <LoopIcon
                      sx={{ color: "secondary.main", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="caption">CI/CD Pipelines</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0,0,0,0.3)",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <CodeIcon
                      sx={{ color: "secondary.main", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="caption">Clean Code</Typography>
                  </Box>
                </Box>
              </CodeTerminal>

              <CodeSnippet>
                <pre style={{ margin: 0, color: "#f5f5f5" }}>
                  <span style={{ color: "#569CD6" }}>interface</span>{" "}
                  <span style={{ color: "#4EC9B0" }}>SystemArchitect</span>{" "}
                  {"{"}
                  <br />
                  &nbsp;&nbsp;designScalableSystems(requirements:{" "}
                  <span style={{ color: "#4EC9B0" }}>BusinessRequirement</span>
                  []): <span style={{ color: "#4EC9B0" }}>Architecture</span>;
                  <br />
                  &nbsp;&nbsp;implementRobustApis(specs:{" "}
                  <span style={{ color: "#4EC9B0" }}>
                    ApiSpecification
                  </span>):{" "}
                  <span style={{ color: "#4EC9B0" }}>ApiEndpoint</span>[];
                  <br />
                  &nbsp;&nbsp;optimizeDatabases(model:{" "}
                  <span style={{ color: "#4EC9B0" }}>DataModel</span>):{" "}
                  <span style={{ color: "#4EC9B0" }}>PerformanceMetrics</span>;
                  <br />
                  {"}"}
                  <br />
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
                <Typography variant="h5">Bacharelado em Filosofia</Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{ mb: 2, color: "text.secondary" }}
              >
                Pontifícia Universidade Católica do Paraná | PUCPR • Concluído
              </Typography>

              <CodeTerminal>
                <TerminalHeader>
                  <PsychologyIcon
                    sx={{ color: "secondary.main", fontSize: 16 }}
                  />
                  <TerminalTitle>critical-thinking.sh</TerminalTitle>
                </TerminalHeader>

                <CommandPrompt>
                  $ ./analyze_philosophical_impact.sh --on "tech_career"
                </CommandPrompt>
                <CommandOutput sx={{ mb: 2 }}>
                  Analisando contribuições da formação filosófica para a
                  carreira em tecnologia...
                </CommandOutput>

                <Box sx={{ mb: 3 }}>
                  <Tooltip title="Análise de problemas complexos, identificação de padrões">
                    <SkillProgress>
                      <SkillLabel>Pensamento Crítico</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={95}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>

                  <Tooltip title="Desenvolvimento de modelos conceituais, abstração">
                    <SkillProgress>
                      <SkillLabel>Pensamento Abstrato</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={90}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>

                  <Tooltip title="Consideração sobre impactos das tecnologias, filosofia da tecnologia">
                    <SkillProgress>
                      <SkillLabel>Ética Tecnológica</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={85}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>

                  <Tooltip title="Análise sistêmica, consideração de múltiplas perspectivas">
                    <SkillProgress>
                      <SkillLabel>Visão Holística</SkillLabel>
                      <SkillBar>
                        <LinearProgress
                          variant="determinate"
                          value={85}
                          sx={{
                            height: 8,
                            borderRadius: 1,
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& .MuiLinearProgress-bar": {
                              borderRadius: 1,
                              background: `linear-gradient(90deg, #00E5FF, #0288d1)`,
                            },
                          }}
                        />
                      </SkillBar>
                    </SkillProgress>
                  </Tooltip>
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0,0,0,0.3)",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <PsychologyIcon
                      sx={{ color: "secondary.main", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="caption">Epistemologia</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0,0,0,0.3)",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <PsychologyIcon
                      sx={{ color: "secondary.main", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="caption">Lógica</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      bgcolor: "rgba(0,0,0,0.3)",
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <PsychologyIcon
                      sx={{ color: "secondary.main", fontSize: 16, mr: 0.5 }}
                    />
                    <Typography variant="caption">
                      Filosofia da Tecnologia
                    </Typography>
                  </Box>
                </Box>
              </CodeTerminal>

              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderRadius: 1,
                  position: "relative",
                  borderLeft: "3px solid #00E5FF",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", color: "#f0f0f0" }}
                >
                  "O estudo da Filosofia me proporcionou ferramentas cognitivas
                  que aplico diariamente no desenvolvimento de software. A
                  capacidade de desconstruir problemas complexos, questionar
                  pressupostos e considerar múltiplas perspectivas se traduz em
                  arquiteturas de sistemas mais elegantes e interfaces mais
                  intuitivas. A formação filosófica me diferencia como
                  desenvolvedor pois posso conectar soluções técnicas a
                  necessidades humanas reais."
                </Typography>
              </Box>

              <CodeSnippet>
                <pre style={{ margin: 0, color: "#f5f5f5" }}>
                  <span style={{ color: "#569CD6" }}>class</span>{" "}
                  <span style={{ color: "#4EC9B0" }}>PhilosophicalMindset</span>{" "}
                  <span style={{ color: "#569CD6" }}>extends</span>{" "}
                  <span style={{ color: "#4EC9B0" }}>CriticalThinking</span>{" "}
                  {"{"}
                  <br />
                  &nbsp;&nbsp;
                  <span style={{ color: "#DCDCAA" }}>solveComplexProblem</span>
                  (problem) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#569CD6" }}>const</span>{" "}
                  decomposedParts ={" "}
                  <span style={{ color: "#569CD6" }}>this</span>
                  .deconstruct(problem);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#569CD6" }}>const</span>{" "}
                  possibleApproaches ={" "}
                  <span style={{ color: "#569CD6" }}>this</span>
                  .examineFromMultiplePerspectives(decomposedParts);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#569CD6" }}>return</span>{" "}
                  <span style={{ color: "#569CD6" }}>this</span>
                  .synthesizeSolution(possibleApproaches);
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                  <br />
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

// import type { FC } from "react";
// import { Box, Container, Card, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// import LaptopIcon from "@mui/icons-material/Laptop";
// import SchoolIcon from "@mui/icons-material/School";
// import DataObjectIcon from "@mui/icons-material/DataObject";

// const StyledCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   marginBottom: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
// }));

// const CodeKeyword = styled("span")(({ theme }) => ({
//   color: theme.palette.primary.main,
// }));

// const CodeString = styled("span")(() => ({
//   color: "#ebebeb",
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

//         <motion.div whileHover={{ scale: 1.02 }}>
//           <StyledCard>
//             <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//               <DataObjectIcon sx={{ color: "secondary.main" }} />
//               <Typography
//                 variant="body1"
//                 sx={{ fontFamily: '"Roboto Mono", monospace' }}
//               >
//                 <CodeKeyword>interface</CodeKeyword> CienciaDeDados {"{"}
//               </Typography>
//             </Box>

//             <Box sx={{ pl: 4 }}>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>formação:</CodeKeyword>{" "}
//                 <CodeString>Especialização em Ciência de Dados</CodeString>
//               </Typography>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>instituição:</CodeKeyword>{" "}
//                 <CodeString>
//                   Universidade Tecnológica Federal do Paraná | UTFPR
//                 </CodeString>
//               </Typography>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>habilidades:</CodeKeyword>{" "}
//                 <CodeString>
//                   Machine Learning, Análise Estatística, Big Data, Python, R,
//                   Visualização de Dados, Processamento de Linguagem Natural,
//                   Data Engineering
//                 </CodeString>
//               </Typography>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>aplicações:</CodeKeyword>{" "}
//                 <CodeString>
//                   Modelos Preditivos, Modelos Prescritivos, Automação de
//                   Insights, Processamento de Dados Não-Estruturados, Business
//                   Intelligence, Data Engineering
//                 </CodeString>
//               </Typography>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>status:</CodeKeyword>{" "}
//                 <CodeString>Cursando</CodeString>
//               </Typography>
//             </Box>

//             <Typography sx={{ fontFamily: '"Roboto Mono", monospace', mt: 2 }}>
//               {"}"}
//             </Typography>
//           </StyledCard>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.02 }}>
//           <StyledCard>
//             <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//               <LaptopIcon sx={{ color: "secondary.main" }} />
//               <Typography
//                 variant="body1"
//                 sx={{ fontFamily: '"Roboto Mono", monospace' }}
//               >
//                 <CodeKeyword>interface</CodeKeyword> AnaliseDeSistemas {"{"}
//               </Typography>
//             </Box>

//             <Box sx={{ pl: 4 }}>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>formação:</CodeKeyword>{" "}
//                 <CodeString>
//                   Tecnologia em Análise e Desenvolvimento de Sistemas
//                 </CodeString>
//               </Typography>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>instituição:</CodeKeyword>{" "}
//                 <CodeString>Centro Universitário Opet | OPET</CodeString>
//               </Typography>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>habilidades:</CodeKeyword>{" "}
//                 <CodeString>
//                   Desenvolvimento de Software, Design de Banco de Dados,
//                   Arquitetura de Sistemas
//                 </CodeString>
//               </Typography>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>projetos:</CodeKeyword>{" "}
//                 <CodeString>
//                   Plataformas Educacionais, Sistemas de Integração, Soluções
//                   RPA, Processamento de Dados, Serviços de Desenvolvimento de
//                   APIs, Design de Arquitetura de Sistemas
//                 </CodeString>
//               </Typography>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>status:</CodeKeyword>{" "}
//                 <CodeString>Concluído</CodeString>
//               </Typography>
//             </Box>

//             <Typography sx={{ fontFamily: '"Roboto Mono", monospace', mt: 2 }}>
//               {"}"}
//             </Typography>
//           </StyledCard>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.02 }}>
//           <StyledCard>
//             <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//               <SchoolIcon sx={{ color: "secondary.main" }} />
//               <Typography
//                 variant="body1"
//                 sx={{ fontFamily: '"Roboto Mono", monospace' }}
//               >
//                 <CodeKeyword>class</CodeKeyword> Filosofia{" "}
//                 <CodeKeyword>extends</CodeKeyword> PensamentoCritico {"{"}
//               </Typography>
//             </Box>

//             <Box sx={{ pl: 4 }}>
//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>constructor</CodeKeyword>() {"{"}
//               </Typography>

//               <Box sx={{ pl: 4 }}>
//                 <Typography
//                   sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//                 >
//                   <CodeKeyword>this</CodeKeyword>.
//                   <CodeKeyword>formação</CodeKeyword> ={" "}
//                   <CodeString>"Bacharelado em Filosofia"</CodeString>;
//                 </Typography>
//                 <Typography
//                   sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//                 >
//                   <CodeKeyword>this</CodeKeyword>.
//                   <CodeKeyword>instituição</CodeKeyword> ={" "}
//                   <CodeString>
//                     "Pontifícia Universidade Católica do Paraná | PUCPR"
//                   </CodeString>
//                   ;
//                 </Typography>
//                 <Typography
//                   sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//                 >
//                   <CodeKeyword>this</CodeKeyword>.
//                   <CodeKeyword>áreas</CodeKeyword> ={" "}
//                   <CodeString>
//                     "Epistemologia, Ética, Lógica, Filosofia da Mente, Filosofia
//                     da Tecnologia"
//                   </CodeString>
//                   ;
//                 </Typography>
//                 <Typography
//                   sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//                 >
//                   <CodeKeyword>this</CodeKeyword>.
//                   <CodeKeyword>aplicação</CodeKeyword> ={" "}
//                   <CodeString>
//                     "Análise Crítica, Resolução de Problemas Complexos,
//                     Pensamento Sistêmico"
//                   </CodeString>
//                   ;
//                 </Typography>
//                 <Typography
//                   sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//                 >
//                   <CodeKeyword>this</CodeKeyword>.
//                   <CodeKeyword>status</CodeKeyword> ={" "}
//                   <CodeString>"Concluído"</CodeString>;
//                 </Typography>
//               </Box>

//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 {"}"}
//               </Typography>

//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 <CodeKeyword>solveComplexProblem</CodeKeyword>(
//                 <CodeKeyword>problem</CodeKeyword>: Problem): Solution {"{"}
//               </Typography>

//               <Box sx={{ pl: 4 }}>
//                 <Typography
//                   sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//                 >
//                   <CodeKeyword>return</CodeKeyword>{" "}
//                   <CodeKeyword>this</CodeKeyword>
//                   .criticalThinking.apply(problem);
//                 </Typography>
//               </Box>

//               <Typography
//                 sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
//               >
//                 {"}"}
//               </Typography>
//             </Box>

//             <Typography sx={{ fontFamily: '"Roboto Mono", monospace', mt: 2 }}>
//               {"}"}
//             </Typography>
//           </StyledCard>
//         </motion.div>
//       </motion.div>
//     </Container>
//   );
// };

// export default Formation;
