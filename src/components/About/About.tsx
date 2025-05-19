import type { FC } from "react";
import { Box, Container, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TargetIcon from "@mui/icons-material/TrackChanges";
import RocketIcon from "@mui/icons-material/Rocket";
import ExploreIcon from "@mui/icons-material/Explore";

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

const HighlightTextV2 = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const GoalItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1, 0),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginRight: theme.spacing(2),
  marginTop: "2px",
}));

const Goal = styled(Typography)(({ theme }) => ({
  flex: 1,
  color: theme.palette.text.primary,
  "& ul": {
    paddingLeft: theme.spacing(2),
  },
  "& li": {
    marginBottom: theme.spacing(0.5),
  },
}));

const CodeBlock = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  borderLeft: `3px solid ${theme.palette.secondary.main}`,
  marginTop: theme.spacing(2),
  fontFamily: '"Roboto Mono", monospace',
  overflow: "auto",
}));

const CodeText = styled(Typography)(() => ({
  fontFamily: '"Roboto Mono", monospace',
  color: "#f5f5f5",
  fontSize: "0.9rem",
  lineHeight: 1.6,
}));

const KeywordText = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

const StringText = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const CommentCodeText = styled("span")(() => ({
  color: "#6a9955",
  fontStyle: "italic",
}));

const About: FC = () => {
  return (
    <Container sx={{ minHeight: "100vh", py: 8 }} id="about">
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
                Desenvolvedor Full-Stack com experiência em{" "}
                <HighlightTextV2>arquitetar</HighlightTextV2> e{" "}
                <HighlightTextV2>implementar</HighlightTextV2> soluções
                tecnológicas escaláveis. Especializado em .NET, React,
                TypeScript e Node.js, com conhecimento em arquiteturas de
                microsserviços e aplicações cloud-native no Google Cloud.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <SchoolIcon sx={{ color: "secondary.main" }} />
              <Typography variant="body1" sx={{ mb: 2 }}>
                Minha formação multidisciplinar em{" "}
                <HighlightTextV2>
                  Análise e Desenvolvimento de Sistemas
                </HighlightTextV2>{" "}
                e <HighlightTextV2>Filosofia</HighlightTextV2> me permite
                abordar desafios técnicos com pensamento crítico e visão
                holística. Atualmente, estou ampliando minhas competências com
                estudos em <HighlightTextV2>Ciência de Dados</HighlightTextV2>{" "}
                na UTFPR, explorando análise avançada de dados e machine
                learning. Sou apaixonado por encontrar o equilíbrio perfeito
                entre código eficiente e experiências de usuário intuitivas.
              </Typography>
            </Box>
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

        {/* Seção de Objetivos Profissionais */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <StyledCard>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                color: "primary.main",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              // Objetivos Profissionais
            </Typography>

            <GoalItem>
              <IconWrapper>
                <TargetIcon />
              </IconWrapper>
              <Goal>
                <Typography variant="h6" sx={{ mb: 1, fontSize: "1.1rem" }}>
                  Oportunidades que busco
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Procuro posições de{" "}
                  <HighlightTextV2>Desenvolvedor Full-Stack </HighlightTextV2>{" "}
                  ou{" "}
                  <HighlightTextV2>Especialista em Arquitetura</HighlightTextV2>{" "}
                  onde possa aplicar minha experiência em:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Box component="li">
                    Arquitetar e desenvolver soluções escaláveis em ambientes
                    cloud;
                  </Box>
                  {/* <Box component="li">
                    Liderar implementações técnicas e mentorear equipes;
                  </Box> */}
                  <Box component="li">
                    Trabalhar com integração de sistemas e microsserviços;
                  </Box>
                  <Box component="li">
                    Melhorar a performance em sistemas legados;
                  </Box>
                  <Box component="li">
                    Otimizar performance e modernizar sistemas legados;
                  </Box>
                  <Box component="li">
                    Desenhar e orquestrar integrações entre sistemas e
                    microsserviços.
                  </Box>
                </Box>
              </Goal>
            </GoalItem>

            <GoalItem>
              <IconWrapper>
                <RocketIcon />
              </IconWrapper>
              <Goal>
                <Typography variant="h6" sx={{ mb: 1, fontSize: "1.1rem" }}>
                  Tecnologias e projetos de interesse
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Busco me aprofundar nas seguintes áreas e tecnologias:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Box component="li">
                    <HighlightTextV2>Arquiteturas cloud-native</HighlightTextV2>{" "}
                    e infraestrutura como código (IaC) com Terraform;
                  </Box>
                  <Box component="li">
                    <HighlightTextV2>Event-driven architecture</HighlightTextV2>{" "}
                    com Kafka, RabbitMQ, sistemas de mensageria e padrões CQRS;
                  </Box>
                  <Box component="li">
                    <HighlightTextV2>CI/CD avançado</HighlightTextV2> e práticas
                    DevSecOps com GitHub Actions, Docker e Kubernetes;
                  </Box>
                  <Box component="li">
                    <HighlightTextV2>
                      Observabilidade e monitoramento
                    </HighlightTextV2>{" "}
                    de sistemas distribuídos com telemetria unificada;
                  </Box>
                  <Box component="li">
                    Aplicação de{" "}
                    <HighlightTextV2>Data Science e ML</HighlightTextV2> em
                    soluções de negócio.
                  </Box>
                </Box>
              </Goal>
            </GoalItem>

            <GoalItem>
              <IconWrapper>
                <ExploreIcon />
              </IconWrapper>
              <Goal>
                <Typography variant="h6" sx={{ mb: 1, fontSize: "1.1rem" }}>
                  Disponibilidade e modalidade
                </Typography>
                <Typography variant="body1">
                  Estou disponível para trabalho{" "}
                  <HighlightTextV2>remoto</HighlightTextV2> ou{" "}
                  <HighlightTextV2>híbrido</HighlightTextV2> em Curitiba/PR.
                  Aberto a relocalização para projetos especiais.
                </Typography>
              </Goal>
            </GoalItem>

            <CodeBlock>
              <CodeText>
                <KeywordText>function</KeywordText> careerGoals() {"{"}
                <br />
                &nbsp;&nbsp;
                <CommentCodeText>
                  // Combinação única de habilidades técnicas e visão
                  estratégica
                </CommentCodeText>
                <br />
                &nbsp;&nbsp;<KeywordText>const</KeywordText> ideal = {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;environment:{" "}
                <StringText>"Inovador e colaborativo"</StringText>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;workType:{" "}
                <StringText>"Remoto ou híbrido"</StringText>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;focus:{" "}
                <StringText>
                  "Soluções de alto impacto com tecnologias modernas"
                </StringText>
                <br />
                &nbsp;&nbsp;{"}"};
                <br />
                <br />
                &nbsp;&nbsp;<KeywordText>return</KeywordText>{" "}
                <StringText>
                  "Busco aplicar minha combinação de conhecimentos técnicos e
                  pensamento crítico para criar soluções que façam diferença."
                </StringText>
                ;
                <br />
                {"}"}
              </CodeText>
            </CodeBlock>
          </StyledCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;

// import type { FC } from "react";
// import { Box, Container, Card, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";
// import SchoolIcon from "@mui/icons-material/School";
// import CodeIcon from "@mui/icons-material/Code";
// import EngineeringIcon from "@mui/icons-material/Engineering";

// const StyledCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   marginBottom: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
// }));

// const CommentText = styled(Typography)(({ theme }) => ({
//   color: theme.palette.text.secondary,
//   marginBottom: theme.spacing(2),
// }));

// const HighlightTextV2 = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
// }));

// const About: FC = () => {
//   return (
//     <Container
//       component="section"
//       id="about"
//       sx={{ minHeight: "100vh", py: 8 }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
//           // Bio
//         </Typography>

//         <motion.div whileHover={{ scale: 1.02 }}>
//           <StyledCard>
//             <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//               <LightbulbIcon sx={{ color: "secondary.main" }} />
//               <Typography variant="body1">
//                 Desenvolvedor Full-Stack com experiência em{" "}
//                 <HighlightTextV2>arquitetar</HighlightTextV2> e{" "}
//                 <HighlightTextV2>implementar</HighlightTextV2> soluções
//                 tecnológicas escaláveis. Especializado em .NET, React,
//                 TypeScript e Node.js, com conhecimento em arquiteturas de
//                 microsserviços e aplicações cloud-native no Google Cloud.
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//               <SchoolIcon sx={{ color: "secondary.main" }} />
//               <Typography variant="body1" sx={{ mb: 2 }}>
//                 Minha formação multidisciplinar em{" "}
//                 <HighlightTextV2>
//                   Análise e Desenvolvimento de Sistemas
//                 </HighlightTextV2>{" "}
//                 e <HighlightTextV2>Filosofia</HighlightTextV2> me permite
//                 abordar desafios técnicos com pensamento crítico e visão
//                 holística. Atualmente, estou ampliando minhas competências com
//                 estudos em <HighlightTextV2>Ciência de Dados</HighlightTextV2>{" "}
//                 na UTFPR, explorando análise avançada de dados e machine
//                 learning. Sou apaixonado por encontrar o equilíbrio perfeito
//                 entre código eficiente e experiências de usuário intuitivas.
//               </Typography>
//             </Box>
//           </StyledCard>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.02 }}>
//           <StyledCard>
//             <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
//               <EngineeringIcon sx={{ color: "secondary.main" }} />
//               <Box>
//                 <Typography variant="body1" sx={{ mb: 2 }}>
//                   Ao longo da minha carreira, trabalhei no desenvolvimento de
//                   projetos, implementando práticas de CI/CD, test-driven
//                   development e integração contínua. Minha experiência prévia
//                   como professor me proporcionou excelentes habilidades de
//                   comunicação e capacidade de traduzir conceitos técnicos
//                   complexos para stakeholders não-técnicos.
//                 </Typography>

//                 <Typography variant="body1">
//                   Busco constantemente novos desafios onde possa aplicar minhas
//                   habilidades técnicas e criativas para desenvolver soluções
//                   inovadoras que não apenas atendam aos requisitos de negócio,
//                   mas também proporcionem experiências excepcionais para os
//                   usuários finais.
//                 </Typography>
//               </Box>
//             </Box>
//           </StyledCard>
//         </motion.div>

//         <motion.div whileHover={{ scale: 1.02 }}>
//           <StyledCard>
//             <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
//               <CodeIcon sx={{ color: "secondary.main" }} />
//               <Box>
//                 <CommentText variant="body2">
//                   Falando em combinar tecnologia e filosofia, uma vez eu estava
//                   explicando loops while usando o Mito de Sísifo de Camus como
//                   analogia, dizendo:
//                 </CommentText>

//                 <Typography
//                   variant="body1"
//                   sx={{
//                     bgcolor: "background.paper",
//                     p: 2,
//                     borderRadius: 1,
//                     mb: 2,
//                   }}
//                 >
//                   "Imagine Sísifo programando — ele incorporaria o loop infinito
//                   perfeito!"
//                 </Typography>

//                 <CommentText variant="body2">
//                   Um aluno confuso perguntou: "Professor, não seria mais fácil
//                   para ele usar um break statement em vez de empurrar a pedra
//                   eternamente?" Às vezes, até dilemas existenciais podem ser
//                   resolvidos com um pouco de programação!
//                 </CommentText>
//               </Box>
//             </Box>
//           </StyledCard>
//         </motion.div>
//       </motion.div>
//     </Container>
//   );
// };

// export default About;
