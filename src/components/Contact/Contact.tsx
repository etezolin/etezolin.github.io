import type { FC } from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  IconButton,
  Link,
  Tooltip,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  overflow: "hidden",
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

const CodeText = styled(Typography)(() => ({
  fontFamily: '"Roboto Mono", monospace',
  color: "#f5f5f5",
  opacity: 0.8,
}));

const HighlightText = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

const HighlightTextV2 = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const AvailabilityChip = styled(Chip)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  margin: theme.spacing(0.5),
  backgroundColor: "rgba(20, 40, 80, 0.8)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  "& .MuiChip-icon": {
    color: theme.palette.secondary.main,
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(13, 33, 55, 0.7)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  marginRight: theme.spacing(1),
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(30, 50, 70, 0.9)",
    transform: "translateY(-2px)",
  },
}));

const Contact: FC = () => {
  return (
    <Container sx={{ minHeight: "100vh", py: 8 }} id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
          // Contato
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <StyledCard>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <PersonSearchIcon
                    sx={{ mr: 1, color: "secondary.main", fontSize: "1.8rem" }}
                  />
                  <Typography
                    // variant="h5"
                    component="h3"
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: "16.5pt",
                    }}
                  >
                    Contato
                  </Typography>
                </Box>

                <CodeText sx={{ fontSize: "0.95rem", lineHeight: 1.8, mb: 3 }}>
                  <HighlightText>const</HighlightText> name ={" "}
                  <HighlightTextV2>"Edison Tezolin"</HighlightTextV2>;<br />
                  <HighlightText>const</HighlightText> phone ={" "}
                  <HighlightTextV2>"41 99833 5860"</HighlightTextV2>;<br />
                  <HighlightText>const</HighlightText> email ={" "}
                  <HighlightTextV2>"tezolin.edison@gmail.com"</HighlightTextV2>;
                  <br />
                </CodeText>

                <Box sx={{ mb: 4 }}>
                  <Typography
                    // variant="h6"
                    sx={{
                      mb: 2,
                      fontFamily: '"Roboto Mono", monospace',
                      borderLeft: "3px solid #00E5FF",
                      pl: 1,
                      fontSize: "13.5pt",
                    }}
                  >
                    Redes profissionais
                  </Typography>

                  <Box sx={{ display: "flex", mb: 3 }}>
                    <Tooltip title="LinkedIn">
                      <Link
                        href="https://www.linkedin.com/in/etezolin"
                        target="_blank"
                        sx={{ textDecoration: "none" }}
                      >
                        <SocialButton>
                          <LinkedInIcon sx={{ color: "#f5f5f5" }} />
                        </SocialButton>
                      </Link>
                    </Tooltip>

                    <Tooltip title="GitHub">
                      <Link
                        href="https://github.com/etezolin"
                        target="_blank"
                        sx={{ textDecoration: "none" }}
                      >
                        <SocialButton>
                          <GitHubIcon sx={{ color: "#f5f5f5" }} />
                        </SocialButton>
                      </Link>
                    </Tooltip>

                    <Tooltip title="Download CV">
                      <Link
                        href="/Curriculum_Edison_Tezolin.pdf"
                        download
                        sx={{ textDecoration: "none" }}
                      >
                        <SocialButton>
                          <DownloadIcon sx={{ color: "#00E5FF" }} />
                        </SocialButton>
                      </Link>
                    </Tooltip>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    // variant="h6"
                    sx={{
                      mb: 2,
                      fontFamily: '"Roboto Mono", monospace',
                      borderLeft: "3px solid #00E5FF",
                      pl: 1,
                      fontSize: "13.5pt",
                    }}
                  >
                    Disponibilidade
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", mb: 2 }}>
                    <AvailabilityChip
                      icon={<ScheduleIcon />}
                      label="Entrevistas: 08h00 às 18h00"
                    />
                    <AvailabilityChip
                      icon={<VideocamIcon />}
                      label="Chamadas de vídeo"
                    />
                    <AvailabilityChip
                      icon={<LocationOnIcon />}
                      label="Remoto ou Curitiba/PR"
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: "0.9rem",
                      color: "#f0f0f0",
                      opacity: 0.8,
                      mt: 2,
                    }}
                  >
                    Prefiro comunicação inicial por email. Estou disponível para
                    entrevistas técnicas e conversas sobre oportunidades de
                    desenvolvimento full-stack que envolvam .NET, React e
                    arquiteturas cloud-native.
                  </Typography>
                </Box>
              </StyledCard>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StyledCard sx={{ mt: 3 }}>
                <Typography
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: "0.9rem",
                    color: "#f0f0f0",
                    borderLeft: "3px solid #00E5FF",
                    paddingLeft: 1,
                  }}
                >
                  <HighlightText>return</HighlightText> {`{`}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: "0.9rem",
                    color: "#f0f0f0",
                    pl: 3,
                    pb: 1,
                  }}
                >
                  "Agradeço seu interesse em meu perfil! Estou aberto a discutir
                  como minhas habilidades podem contribuir para projetos
                  desafiadores e inovadores. Não hesite em entrar em contato
                  para conversarmos sobre potenciais colaborações."
                </Typography>

                <Typography
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: "0.9rem",
                    color: "#f0f0f0",
                  }}
                >
                  {`};`}
                </Typography>
              </StyledCard>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
