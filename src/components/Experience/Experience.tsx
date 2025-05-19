import type { FC } from "react";
import { Box, Container, Card, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import CircleIcon from "@mui/icons-material/Circle";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CloudIcon from "@mui/icons-material/Cloud";
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
  marginLeft: "25px !important",
  marginRight: "5px !important",
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

const HighlightText = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const HighlightTextV2 = styled("span")(({ theme }) => ({
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
              <HighlightText>React/TypeScript</HighlightText> com experiência na
              criação de soluções tecnológicas de alto impacto. Formado em
              <HighlightText>
                {" "}
                Análise e Desenvolvimento de Sistemas
              </HighlightText>{" "}
              e cursando pós-graduação em{" "}
              <HighlightText>Ciência de Dados na UTFPR</HighlightText>.
              Apaixonado por transformar requisitos complexos em arquiteturas
              elegantes e escaláveis que entregam valor real. Combinando
              expertise técnica com visão estratégica para desenvolver
              aplicações modernas que unem robustez de backend e experiências de
              usuário intuitivas.
            </OutputText>

            <CommandLine>$ cat experiencia_seed.txt</CommandLine>

            <Box sx={{ mb: 3 }}>
              <SectionTitle variant="h6">
                <WorkIcon sx={{ color: "secondary.main" }} />
                Secretaria de Educação do Estado do Paraná | 2021 - Presente
              </SectionTitle>

              <OutputText>
                Atuo como desenvolvedor na Secretaria de Educação do Estado do
                Paraná, participando do desenvolvimento de{" "}
                <HighlightTextV2>
                  soluções educacionais integradas
                </HighlightTextV2>{" "}
                que transformaram processos críticos e impactaram positivamente
                a <HighlightTextV2>gestão educacional</HighlightTextV2> em todo
                o estado. Implementei arquiteturas de microsserviços e hubs de
                integração que possibilitaram a unificação de sistemas legados e
                novas plataformas, resultando em maior eficiência operacional e
                melhor experiência para professores, alunos e gestores.
              </OutputText>

              <OutputText>
                Principais conquistas:
                <br />• Desenvolvimento de plataformas de{" "}
                <HighlightTextV2>integração que conectam</HighlightTextV2> mais
                de 2.000 escolas estaduais;
                <br />• Implementação de soluções de automação que{" "}
                <HighlightTextV2>
                  {" "}
                  reduziram em 60% o tempo de processamento
                </HighlightTextV2>{" "}
                de dados administrativos;
                <br />• <HighlightTextV2>Arquitetura</HighlightTextV2> e{" "}
                <HighlightTextV2>implementação</HighlightTextV2> de sistemas{" "}
                <HighlightTextV2>cloud-native</HighlightTextV2> que suportam
                picos de acesso de mais de 30.000 usuários simultâneos;
                <br />• Participar da equipe técnica em projetos que{" "}
                <HighlightTextV2>modernizaram</HighlightTextV2> a{" "}
                <HighlightTextV2>infraestrutura tecnológica</HighlightTextV2>{" "}
                educacional do estado.
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
          </TerminalCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Experience;
