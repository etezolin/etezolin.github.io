import type { FC } from "react";
import { Box, Container, Card, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import CircleIcon from "@mui/icons-material/Circle";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CloudIcon from "@mui/icons-material/Cloud";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const TerminalCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  marginBottom: theme.spacing(3),
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
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
}));

const SkillItem = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const HighlightText = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.primary.main,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const Experience: FC = () => {
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
          // Experiência
        </Typography>

        <motion.div whileHover={{ scale: 1.01 }}>
          <TerminalCard>
            <TerminalHeader>
              <DotIcon sx={{ color: "#ff5f56" }} />
              <DotIcon sx={{ color: "#ffbd2e" }} />
              <DotIcon sx={{ color: "#27c93f" }} />
            </TerminalHeader>

            <CommandLine>$ cat perfil_profissional.md</CommandLine>

            <OutputText>
              Desenvolvedor Full-Stack especializado em{" "}
              <HighlightText>.NET/C#</HighlightText> e{" "}
              <HighlightText>React/TypeScript</HighlightText> com mais de{" "}
              <HighlightText>4 anos</HighlightText> de experiência na criação de
              soluções tecnológicas de alto impacto. Apaixonado por transformar
              requisitos complexos em arquiteturas elegantes e escaláveis que
              entregam valor real. Combinando expertise técnica com visão
              estratégica para desenvolver aplicações modernas que unem robustez
              de backend e experiências de usuário intuitivas.
            </OutputText>

            <CommandLine>$ cat experiencia_secretaria_educacao.txt</CommandLine>

            <Box sx={{ mb: 3 }}>
              <SectionTitle variant="h6">
                <WorkIcon sx={{ color: "secondary.main" }} />
                Secretaria de Educação do Estado do Paraná | 2021 - Presente
              </SectionTitle>

              <OutputText>
                Atuo há mais de <HighlightText>4 anos</HighlightText> como
                desenvolvedor na Secretaria de Educação do Estado do Paraná,
                participando do desenvolvimento de soluções educacionais
                integradas que transformaram processos críticos e impactaram
                positivamente a gestão educacional em todo o estado. Implementei
                arquiteturas de microsserviços e hubs de integração que
                possibilitaram a unificação de sistemas legados e novas
                plataformas, resultando em maior eficiência operacional e melhor
                experiência para professores, alunos e gestores.
              </OutputText>

              <OutputText>
                Principais conquistas:
                <br />• Desenvolvimento de plataformas de integração que
                conectam mais de 2.000 escolas estaduais;
                <br />• Implementação de soluções de automação que reduziram em
                60% o tempo de processamento de dados administrativos;
                <br />• Arquitetura e implementação de sistemas cloud-native que
                suportam picos de acesso de mais de 30.000 usuários simultâneos;
                <br />• Participar da equipe técnica em projetos que
                modernizaram a infraestrutura tecnológica educacional do estado.
              </OutputText>
            </Box>

            <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

            <CommandLine>$ ls --tree stack_tecnologica/</CommandLine>

            <Box sx={{ mb: 3 }}>
              <SectionTitle variant="h6">
                <CodeIcon sx={{ color: "secondary.main" }} />
                Backend (.NET/C#)
              </SectionTitle>

              <Box sx={{ pl: 3 }}>
                <SkillItem>
                  ✓ Arquitetura de APIs RESTful seguindo princípios DDD e Clean
                  Architecture;
                </SkillItem>
                <SkillItem>
                  ✓ Implementação de padrões SOLID e Design Patterns para código
                  sustentável;
                </SkillItem>
                <SkillItem>
                  ✓ Modelagem e otimização de bancos de dados relacionais (SQL
                  Server, PostgreSQL);
                </SkillItem>
                <SkillItem>
                  ✓ Desenvolvimento de sistemas distribuídos e microsserviços;
                </SkillItem>
                <SkillItem>
                  ✓ Implementação de pipelines CI/CD e práticas DevOps.
                </SkillItem>
              </Box>

              <SectionTitle variant="h6">
                <DesignServicesIcon sx={{ color: "secondary.main" }} />
                Frontend (React/TypeScript)
              </SectionTitle>

              <Box sx={{ pl: 3 }}>
                <SkillItem>
                  ✓ Arquitetura moderna com gerenciamento eficiente de estado
                  (Redux, Context API);
                </SkillItem>
                <SkillItem>
                  ✓ Componentização avançada e interfaces responsivas com
                  Material-UI;
                </SkillItem>
                <SkillItem>
                  ✓ Otimização de performance e experiência do usuário;
                </SkillItem>
                <SkillItem>
                  ✓ Integração fluida com APIs e sistemas de backend.
                </SkillItem>
              </Box>

              <SectionTitle variant="h6">
                <CloudIcon sx={{ color: "secondary.main" }} />
                Cloud & Infraestrutura
              </SectionTitle>

              <Box sx={{ pl: 3 }}>
                <SkillItem>
                  ✓ Arquiteturas cloud-native em Google Cloud Platform;
                </SkillItem>
                <SkillItem>
                  ✓ Implementação de infraestrutura como código;
                </SkillItem>
                <SkillItem>
                  ✓ Orquestração de containers com Docker e Kubernetes;
                </SkillItem>
                <SkillItem>
                  ✓ Configuração de ambientes de alta disponibilidade e
                  escalabilidade.
                </SkillItem>
              </Box>

              <SectionTitle variant="h6">
                <StorageIcon sx={{ color: "secondary.main" }} />
                Especialização
              </SectionTitle>

              <Box sx={{ pl: 3 }}>
                <SkillItem>✓ Hubs de integração multiplataforma;</SkillItem>
                <SkillItem>
                  ✓ Arquitetura de microsserviços e sistemas distribuídos;
                </SkillItem>
                <SkillItem>
                  ✓ Automação inteligente de processos (RPAs);
                </SkillItem>
                <SkillItem>
                  ✓ Cloud-native applications e infraestrutura escalável.
                </SkillItem>
              </Box>
            </Box>

            <CommandLine>$ echo "dev_profissional.json" | jq</CommandLine>

            <Box sx={{ mb: 3, pl: 2 }}>
              <SectionTitle variant="h6">
                <SchoolIcon sx={{ color: "secondary.main" }} />
                Desenvolvimento Contínuo
              </SectionTitle>

              <OutputText>
                {`{
                  "formacao_atual": "Ciência de Dados na UTFPR (2025-2027)",
                  "certificacoes": ["Google Cloud Platform"],
                  "areas_de_estudo": ["CI/CD", "Infraestrutura como código", "Machine Learning", "Data Engineering"],
                  "compromisso": "Excelência técnica e entrega de valor através de tecnologias emergentes e inovação."
                }`}
              </OutputText>
            </Box>
          </TerminalCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Experience;
