import type { FC } from "react";
import { Box, Container, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import LaptopIcon from "@mui/icons-material/Laptop";
import SchoolIcon from "@mui/icons-material/School";
import DataObjectIcon from "@mui/icons-material/DataObject";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
}));

const CodeKeyword = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const CodeString = styled("span")(() => ({
  color: "#ebebeb",
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

        <motion.div whileHover={{ scale: 1.02 }}>
          <StyledCard>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <DataObjectIcon sx={{ color: "secondary.main" }} />
              <Typography
                variant="body1"
                sx={{ fontFamily: '"Roboto Mono", monospace' }}
              >
                <CodeKeyword>interface</CodeKeyword> CienciaDeDados {"{"}
              </Typography>
            </Box>

            <Box sx={{ pl: 4 }}>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>formação:</CodeKeyword>{" "}
                <CodeString>Especialização em Ciência de Dados</CodeString>
              </Typography>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>instituição:</CodeKeyword>{" "}
                <CodeString>
                  Universidade Tecnológica Federal do Paraná | UTFPR
                </CodeString>
              </Typography>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>habilidades:</CodeKeyword>{" "}
                <CodeString>
                  Machine Learning, Análise Estatística, Big Data, Python, R,
                  Visualização de Dados, Processamento de Linguagem Natural
                </CodeString>
              </Typography>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>aplicações:</CodeKeyword>{" "}
                <CodeString>
                  Modelos Preditivos, Automação de Insights, Processamento de
                  Dados Não-Estruturados, Business Intelligence
                </CodeString>
              </Typography>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>status:</CodeKeyword>{" "}
                <CodeString>Cursando</CodeString>
              </Typography>
            </Box>

            <Typography sx={{ fontFamily: '"Roboto Mono", monospace', mt: 2 }}>
              {"}"}
            </Typography>
          </StyledCard>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }}>
          <StyledCard>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <LaptopIcon sx={{ color: "secondary.main" }} />
              <Typography
                variant="body1"
                sx={{ fontFamily: '"Roboto Mono", monospace' }}
              >
                <CodeKeyword>interface</CodeKeyword> AnaliseDeSistemas {"{"}
              </Typography>
            </Box>

            <Box sx={{ pl: 4 }}>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>formação:</CodeKeyword>{" "}
                <CodeString>
                  Tecnologia em Análise e Desenvolvimento de Sistemas
                </CodeString>
              </Typography>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>instituição:</CodeKeyword>{" "}
                <CodeString>Centro Universitário Opet | OPET</CodeString>
              </Typography>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>habilidades:</CodeKeyword>{" "}
                <CodeString>
                  Desenvolvimento de Software, Design de Banco de Dados,
                  Arquitetura de Sistemas
                </CodeString>
              </Typography>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>projetos:</CodeKeyword>{" "}
                <CodeString>
                  Plataformas Educacionais, Sistemas de Integração, Soluções
                  RPA, Processamento de Dados, Serviços de Desenvolvimento de
                  APIs, Design de Arquitetura de Sistemas
                </CodeString>
              </Typography>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>status:</CodeKeyword>{" "}
                <CodeString>Concluído</CodeString>
              </Typography>
            </Box>

            <Typography sx={{ fontFamily: '"Roboto Mono", monospace', mt: 2 }}>
              {"}"}
            </Typography>
          </StyledCard>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }}>
          <StyledCard>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <SchoolIcon sx={{ color: "secondary.main" }} />
              <Typography
                variant="body1"
                sx={{ fontFamily: '"Roboto Mono", monospace' }}
              >
                <CodeKeyword>class</CodeKeyword> Filosofia{" "}
                <CodeKeyword>extends</CodeKeyword> PensamentoCritico {"{"}
              </Typography>
            </Box>

            <Box sx={{ pl: 4 }}>
              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>constructor</CodeKeyword>() {"{"}
              </Typography>

              <Box sx={{ pl: 4 }}>
                <Typography
                  sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
                >
                  <CodeKeyword>this</CodeKeyword>.
                  <CodeKeyword>formação</CodeKeyword> ={" "}
                  <CodeString>"Bacharelado em Filosofia"</CodeString>;
                </Typography>
                <Typography
                  sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
                >
                  <CodeKeyword>this</CodeKeyword>.
                  <CodeKeyword>instituição</CodeKeyword> ={" "}
                  <CodeString>
                    "Pontifícia Universidade Católica do Paraná | PUCPR"
                  </CodeString>
                  ;
                </Typography>
                <Typography
                  sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
                >
                  <CodeKeyword>this</CodeKeyword>.
                  <CodeKeyword>áreas</CodeKeyword> ={" "}
                  <CodeString>
                    "Epistemologia, Ética, Lógica, Filosofia da Mente, Filosofia
                    da Tecnologia"
                  </CodeString>
                  ;
                </Typography>
                <Typography
                  sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
                >
                  <CodeKeyword>this</CodeKeyword>.
                  <CodeKeyword>aplicação</CodeKeyword> ={" "}
                  <CodeString>
                    "Análise Crítica, Resolução de Problemas Complexos,
                    Pensamento Sistêmico"
                  </CodeString>
                  ;
                </Typography>
                <Typography
                  sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
                >
                  <CodeKeyword>this</CodeKeyword>.
                  <CodeKeyword>status</CodeKeyword> ={" "}
                  <CodeString>"Concluído"</CodeString>;
                </Typography>
              </Box>

              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                {"}"}
              </Typography>

              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                <CodeKeyword>solveComplexProblem</CodeKeyword>(
                <CodeKeyword>problem</CodeKeyword>: Problem): Solution {"{"}
              </Typography>

              <Box sx={{ pl: 4 }}>
                <Typography
                  sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
                >
                  <CodeKeyword>return</CodeKeyword>{" "}
                  <CodeKeyword>this</CodeKeyword>
                  .criticalThinking.apply(problem);
                </Typography>
              </Box>

              <Typography
                sx={{ fontFamily: '"Roboto Mono", monospace', mb: 1 }}
              >
                {"}"}
              </Typography>
            </Box>

            <Typography sx={{ fontFamily: '"Roboto Mono", monospace', mt: 2 }}>
              {"}"}
            </Typography>
          </StyledCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Formation;
