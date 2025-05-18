import type { FC } from "react";
import { Box, Container, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CodeIcon from "@mui/icons-material/Code";
import EngineeringIcon from "@mui/icons-material/Engineering";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
}));

const CommentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const About: FC = () => {
  return (
    <Container
      component="section"
      id="about"
      sx={{ minHeight: "100vh", py: 8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
          // Bio
        </Typography>

        <motion.div whileHover={{ scale: 1.02 }}>
          <StyledCard>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <LightbulbIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1">
                Desenvolvedor Full-Stack com mais de 4 anos de experiência em
                arquitetar e implementar soluções tecnológicas escaláveis.
                Especializado em .NET, React, TypeScript e Node.js, com
                conhecimento em arquiteturas de microsserviços e aplicações
                cloud-native no Google Cloud.
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Minha formação multidisciplinar em Análise e Desenvolvimento de
              Sistemas e Filosofia me permite abordar desafios técnicos com
              pensamento crítico e visão holística. Atualmente, estou ampliando
              minhas competências com estudos em Ciência de Dados na UTFPR,
              explorando análise avançada de dados e machine learning. Sou
              apaixonado por encontrar o equilíbrio perfeito entre código
              eficiente e experiências de usuário intuitivas.
            </Typography>
          </StyledCard>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }}>
          <StyledCard>
            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <EngineeringIcon sx={{ color: "secondary.main" }} />
              <Box>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Ao longo da minha carreira, trabalhei no desenvolvimento de
                  projetos, implementando práticas de CI/CD, test-driven
                  development e integração contínua. Minha experiência prévia
                  como professor me proporcionou excelentes habilidades de
                  comunicação e capacidade de traduzir conceitos técnicos
                  complexos para stakeholders não-técnicos.
                </Typography>

                <Typography variant="body1">
                  Busco constantemente novos desafios onde possa aplicar minhas
                  habilidades técnicas e criativas para desenvolver soluções
                  inovadoras que não apenas atendam aos requisitos de negócio,
                  mas também proporcionem experiências excepcionais para os
                  usuários finais.
                </Typography>
              </Box>
            </Box>
          </StyledCard>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }}>
          <StyledCard>
            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <CodeIcon sx={{ color: "secondary.main" }} />
              <Box>
                <CommentText variant="body2">
                  Falando em combinar tecnologia e filosofia, uma vez eu estava
                  explicando loops while usando o Mito de Sísifo de Camus como
                  analogia, dizendo:
                </CommentText>

                <Typography
                  variant="body1"
                  sx={{
                    bgcolor: "background.paper",
                    p: 2,
                    borderRadius: 1,
                    mb: 2,
                  }}
                >
                  "Imagine Sísifo programando — ele incorporaria o loop infinito
                  perfeito!"
                </Typography>

                <CommentText variant="body2">
                  Um aluno confuso perguntou: "Professor, não seria mais fácil
                  para ele usar um break statement em vez de empurrar a pedra
                  eternamente?" Às vezes, até dilemas existenciais podem ser
                  resolvidos com um pouco de programação!
                </CommentText>
              </Box>
            </Box>
          </StyledCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;
