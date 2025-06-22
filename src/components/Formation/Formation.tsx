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
import {
  trackProfileConversion,
  trackProfileTabInteraction,
} from "../../firebase";
import { useTypedTranslation } from "../../hooks/useTranslation";

// Tipos TypeScript
interface SkillGroupData {
  titleKey: string;
  icon: ReactElement;
  skills: string[];
  category: string;
}

interface SkillGroupProps {
  titleKey: string;
  icon: ReactElement;
  skills: string[];
  category: string;
  education: string;
}

interface FormationData {
  id: string;
  icon: ReactElement;
  titleKey: string;
  institutionKey: string;
  highlightKey: string;
  descriptionKey: string;
  skillGroups: SkillGroupData[];
  code: string;
  quoteKey?: string;
}

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
  const { t } = useTypedTranslation();

  // Funções de analytics otimizadas
  const handleClick = (type: string, data: string) => {
    trackProfileTabInteraction("formation", type, data);
  };

  const handleCodeClick = (education: string) => {
    handleClick("code_snippet_click", education);
    trackProfileConversion("technical_interest", "formation");
  };

  // Componente reutilizável para Skills com tipos corretos
  const SkillGroup: FC<SkillGroupProps> = ({
    titleKey,
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
        {icon} {t(titleKey as any)}
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

  // Dados das formações (estrutura otimizada com tipos)
  const formations: FormationData[] = [
    {
      id: "systems_development",
      icon: <LaptopIcon sx={{ fontSize: 30, color: "secondary.main", marginRight: 2 }} />,
      titleKey: "systemsDevelopmentTitle",
      institutionKey: "systemsInstitution",
      highlightKey: "competenciesDeveloped",
      descriptionKey: "systemsDescription",
      skillGroups: [
        {
          titleKey: "backendDevelopment",
          icon: <CodeIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [".NET", "Node", "Dapper", "Web APIs", "Microservices"],
          category: "backend",
        },
        {
          titleKey: "frontendDevelopment",
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
          titleKey: "databaseCloud",
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
          titleKey: "devopsArchitecture",
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
      code: ``,
    },
    {
      id: "philosophy",
      icon: <SchoolIcon sx={{ fontSize: 30, color: "secondary.main", marginRight: 2 }} />,
      titleKey: "philosophyTitle",
      institutionKey: "philosophyInstitution",
      highlightKey: "competitiveDifferential",
      descriptionKey: "philosophyDescription",
      skillGroups: [
        {
          titleKey: "strategicThinking",
          icon: <PsychologyIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [
            t("skills001"),
            t("skills002"),
            t("skills003"),
            t("skills004"),
            // "Análise Sistêmica / Systemic Analysis",
            // "Pensamento Crítico / Critical Thinking",
            // "Resolução de Problemas / Problem Solving",
            // "Tomada de Decisão / Decision Making",
          ],
          category: "strategic",
        },
        {
          titleKey: "innovationEthics",
          icon: <AutoAwesomeIcon sx={{ mr: 1, fontSize: 18 }} />,
          skills: [
            t("skills005"),
            t("skills006"),
            t("skills007"),
            t("skills008"),
            // "Ética Tecnológica / Tech Ethics",
            // "Inovação Responsável / Responsible Innovation",
            // "Design Centrado no Usuário / User-Centered Design",
            // "Impacto Social / Social Impact",
          ],
          category: "innovation",
        },
      ],
      code: ``,
      quoteKey: "philosophicalQuote",
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
          {t("formationTitle")}
        </Typography>

        <EducationTimeline>
          {formations.map((formation, index) => (
            <TimelineItem key={formation.id}>
              <TimelineMarker
                onClick={() =>
                  handleClick("timeline_marker_click", formation.id)
                }
              />
              <TimelineContent
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() =>
                  handleClick(
                    "timeline_item_click",
                    `${formation.titleKey}_${formation.institutionKey}`
                  )
                }
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {formation.icon}
                  <Typography variant="h5">{t(formation.titleKey as any)}</Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  {t(formation.institutionKey as any)}
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
                      `${formation.id}_${formation.highlightKey}`
                    );
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <TrendingUpIcon
                      sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
                    />
                    <Typography variant="h6" sx={{ color: "secondary.main" }}>
                      {t(formation.highlightKey as any)}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                    {t(formation.descriptionKey as any)}
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
                      titleKey={group.titleKey}
                      icon={group.icon}
                      skills={group.skills}
                      category={group.category}
                      education={formation.id}
                    />
                  ))}
                </Box>

                {formation.quoteKey && (
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
                      "{t(formation.quoteKey as any)}"
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
