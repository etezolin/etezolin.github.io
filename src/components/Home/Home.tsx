import {
  Avatar,
  Box,
  Card,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import React, { type FC } from "react";
import { BiCloud } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FaGitAlt, FaGithub, FaNode } from "react-icons/fa";
import {
  SiApachekafka,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiJavascript,
  SiMui,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { TbBrandCSharp, TbBrandMongodb, TbSql } from "react-icons/tb";
import foto from "../../assets/foto.png";
import {
  trackProfileConversion,
  trackProfileTabInteraction,
} from "../../firebase";
import { useTypedTranslation } from "../../hooks/useTranslation";

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

const GradientText = styled(Typography)(({ theme }) => ({
  backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
  letterSpacing: "-0.5px",
}));

const GlassCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
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

const TechBadge = styled(motion.div)(({ theme }) => ({
  backgroundColor: "rgba(13, 33, 55, 0.9)",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  margin: theme.spacing(0.5),
  fontFamily: '"Roboto Mono", monospace',
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  cursor: "pointer",
}));

const ProfileAvatar = styled(Avatar)({
  width: 160,
  height: 160,
  border: "4px solid #00E5FF",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
});

const TechStackHeader = styled(Typography)({
  marginBottom: 25,
  opacity: 0.8,
  fontSize: "1.05rem",
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 600,
  borderLeft: "3px solid #00E5FF",
  paddingLeft: 8,
  display: "inline-block",
  color: "#f5f5f5",
});

const CategoryHeader = styled(Typography)({
  marginBottom: 5,
  marginTop: 15,
  opacity: 0.9,
  fontSize: "0.9rem",
  fontFamily: '"Roboto Mono", monospace',
  fontWeight: 500,
  color: "#00E5FF",
  textTransform: "uppercase",
  letterSpacing: "1px",
});

const OutputText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
}));

// Animações
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const techStackVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.7,
    },
  },
};

const Home: FC = () => {
  const theme = useTheme();
  const { t } = useTypedTranslation();

  // Função para rastrear cliques em links sociais
  const handleSocialLinkClick = (platform: string, url: string) => {
    trackProfileTabInteraction("home", "social_link_click", platform);
    trackProfileConversion("social_visit", "home");
    window.open(url, "_blank", "noopener noreferrer");
  };

  // Função para rastrear cliques em contato
  const handleContactClick = (method: string, action: () => void) => {
    trackProfileTabInteraction("home", "contact_click", method);
    trackProfileConversion(`${method}_contact`, "home");
    action();
  };

  // Função para rastrear cliques em tecnologias
  const handleTechClick = (techName: string) => {
    trackProfileTabInteraction("home", "tech_badge_click", techName);
  };

  // Função para rastrear hover em tecnologias
  const handleTechHover = (techName: string) => {
    trackProfileTabInteraction("home", "tech_badge_hover", techName);
  };

  // Função para rastrear clique no avatar
  const handleAvatarClick = () => {
    trackProfileTabInteraction("home", "avatar_click", "profile_photo");
  };

  // Tecnologias organizadas por categoria
  const techCategories = {
    backend: [
      { name: "C#", color: "#9B4F96", icon: TbBrandCSharp },
      { name: ".NET", color: "#94d2bd", icon: SiDotnet },
      { name: "Node", color: "#ffd166", icon: FaNode },
      { name: "RabbitMQ", color: "#eae2b7", icon: SiRabbitmq },
      { name: "Apache Kafka", color: "#adb5bd", icon: SiApachekafka },
    ],
    frontend: [
      { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
      { name: "React", color: "#61DAFB", icon: SiReact },
      { name: "TypeScript", color: "#007ACC", icon: SiTypescript },
      { name: "MaterialUI", color: "#0081CB", icon: SiMui },
      { name: "Tailwind CSS", color: "#6668e9", icon: SiTailwindcss },
    ],
    database: [
      { name: "SQL", color: "#4479A1", icon: TbSql },
      { name: "Firebase", color: "#c49d31", icon: SiFirebase },
      { name: "SQLServer", color: "#fff", icon: DiMsqlServer },
      { name: "PostgreSQL", color: "#48cae4", icon: SiPostgresql },
      { name: "MongoDB", color: "#adc178", icon: TbBrandMongodb },
    ],
    cloud: [
      { name: "Google Cloud", color: "#a14744", icon: BiCloud },
      { name: "Docker", color: "#2496ED", icon: SiDocker },
      { name: "Github", color: "#44a149", icon: FaGithub },
      { name: "Git Actions", color: "#31c493", icon: FaGitAlt },
      { name: "Cloud Build", color: "#fb8500", icon: BiCloud },
    ],
  };

  const renderTechSection = (categoryKey: string, techs: Array<{ name: string, color: string, icon: any }>) => (
    <Box key={categoryKey}>
      <CategoryHeader>{t(categoryKey as any)}</CategoryHeader>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {techs.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <TechBadge
              style={{
                borderLeft: `3px solid ${item.color}`,
                width: 145,
                display: "flex",
                justifyContent: "left",
                flexDirection: "row",
              }}
              onClick={() => handleTechClick(item.name)}
              onMouseEnter={() => handleTechHover(item.name)}
            >
              <Box
                component="span"
                sx={{
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                {React.createElement(item.icon)}
              </Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 11.5,
                  fontWeight: 500,
                }}
              >
                {item.name}
              </Typography>
            </TechBadge>
          </motion.div>
        ))}
      </Box>
    </Box>
  );

  return (
    <Container
      component="section"
      id="home"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
            mb: 8,
          }}
        >
          <motion.div variants={itemVariants}>
            <ProfileAvatar
              src={foto}
              alt="Edison Tezolin"
              sx={{
                display: "block",
                position: "relative",
                marginTop: { xs: 2 },
                width: { xs: 120, md: 160 },
                height: { xs: 120, md: 160 },
                cursor: "pointer",
              }}
              onClick={handleAvatarClick}
            />
          </motion.div>

          <Box>
            <motion.div variants={itemVariants}>
              <CodeText variant="body2" gutterBottom sx={{ mb: 1 }}>
                {t("helloEveryone")}
              </CodeText>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GradientText
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  mb: 2,
                }}
              >
                Edison Tezolin
              </GradientText>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  color: "text.secondary",
                  fontFamily: '"Roboto Mono", monospace',
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    mr: 1,
                    fontSize: "1.3em",
                    opacity: 0.8,
                  }}
                >
                  &gt;
                </Box>
                {t("fullStackDeveloper")}
              </Typography>
            </motion.div>
          </Box>
        </Box>

        <motion.div variants={itemVariants}>
          <GlassCard sx={{ mb: 4, maxWidth: 700 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CodeText sx={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                <HighlightText>const</HighlightText> phone ={" "}
                <span
                  style={{
                    color: theme.palette.secondary.main,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    handleContactClick("phone", () =>
                      window.open("tel:41998335860")
                    )
                  }
                >
                  "41 99833 5860"
                </span>
                ;<br />
                <HighlightText>const</HighlightText> email ={" "}
                <span
                  style={{
                    color: theme.palette.secondary.main,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    handleContactClick("email", () =>
                      window.open("mailto:tezolin.edison@gmail.com")
                    )
                  }
                >
                  "tezolin.edison@gmail.com"
                </span>
                ;<br />
                <HighlightText>const</HighlightText> github ={" "}
                <span
                  onClick={() =>
                    handleSocialLinkClick(
                      "github",
                      "https://github.com/etezolin"
                    )
                  }
                  style={{
                    color: theme.palette.secondary.main,
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  "github.com/etezolin"
                </span>
                ;<br />
                <HighlightText>const</HighlightText> linkedIn ={" "}
                <span
                  onClick={() =>
                    handleSocialLinkClick(
                      "linkedin",
                      "https://www.linkedin.com/in/etezolin"
                    )
                  }
                  style={{
                    color: theme.palette.secondary.main,
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  "linkedin.com/in/etezolin"
                </span>
                ;
              </CodeText>
            </motion.div>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <TechStackHeader sx={{ marginBottom: 1 }}>
            {t("myTechStack")}
          </TechStackHeader>
        </motion.div>

        <motion.div variants={techStackVariants}>
          {renderTechSection("backend", techCategories.backend)}
          {renderTechSection("frontend", techCategories.frontend)}
          {renderTechSection("database", techCategories.database)}
          {renderTechSection("cloud", techCategories.cloud)}
        </motion.div>

        <Box sx={{ mt: 3 }}>
          <motion.div variants={itemVariants}>
            <TechStackHeader>{t("messageToRecruiters")}</TechStackHeader>
          </motion.div>
          <OutputText>
            {t("recruiterMessagePt1")}
            <HighlightTextV2>{t("technicalExcellence")}</HighlightTextV2>
            {t("recruiterMessagePt2")}
            <HighlightTextV2>{t("valueDelivery")}</HighlightTextV2>
            {t("recruiterMessagePt3")}
          </OutputText>
        </Box>

        {/* Background decoration */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.5 }}
          sx={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: "40%",
            height: "40%",
            backgroundImage: "url(/code-bg.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: -1,
            filter: "blur(1px)",
            display: { xs: "none", md: "block" },
          }}
        />
      </motion.div>
    </Container>
  );
};

export default Home;

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// import {
//   Avatar,
//   Box,
//   Card,
//   Container,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import React, { type FC } from "react";
// import { BiCloud } from "react-icons/bi";
// import { FaGitAlt, FaGithub, FaNode } from "react-icons/fa";
// import {
//   SiApachekafka,
//   SiDocker,
//   SiDotnet,
//   SiFirebase,
//   SiJavascript,
//   SiMui,
//   SiPostgresql,
//   SiRabbitmq,
//   SiReact,
//   SiTailwindcss,
//   SiTypescript
// } from "react-icons/si";
// import { TbBrandCSharp, TbBrandMongodb, TbSql } from "react-icons/tb";
// import foto from "../../assets/foto.png";

// // ✅ CORREÇÃO: Apenas as funções de analytics, sem o hook
// import { DiMsqlServer } from "react-icons/di";
// import {
//   trackProfileConversion,
//   trackProfileTabInteraction,
// } from "../../firebase";

// const CodeText = styled(Typography)(() => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: "#f5f5f5",
//   opacity: 0.8,
// }));

// const HighlightText = styled("span")(({ theme }) => ({
//   color: theme.palette.primary.main,
//   fontWeight: 500,
// }));

// const HighlightTextV2 = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
// }));

// const GradientText = styled(Typography)(({ theme }) => ({
//   backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//   backgroundClip: "text",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   fontWeight: 700,
//   letterSpacing: "-0.5px",
// }));

// const GlassCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease",
//   overflow: "hidden",
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

// const TechBadge = styled(motion.div)(({ theme }) => ({
//   backgroundColor: "rgba(13, 33, 55, 0.9)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(1, 2),
//   margin: theme.spacing(0.5),
//   fontFamily: '"Roboto Mono", monospace',
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: theme.spacing(1),
//   cursor: "pointer",
// }));

// const ProfileAvatar = styled(Avatar)({
//   width: 160,
//   height: 160,
//   border: "4px solid #00E5FF",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
// });

// const TechStackHeader = styled(Typography)({
//   marginBottom: 25,
//   opacity: 0.8,
//   fontSize: "1.05rem",
//   fontFamily: '"Roboto Mono", monospace',
//   fontWeight: 600,
//   borderLeft: "3px solid #00E5FF",
//   paddingLeft: 8,
//   display: "inline-block",
//   color: "#f5f5f5",
// });

// const CategoryHeader = styled(Typography)({
//   marginBottom: 5,
//   marginTop: 15,
//   opacity: 0.9,
//   fontSize: "0.9rem",
//   fontFamily: '"Roboto Mono", monospace',
//   fontWeight: 500,
//   color: "#00E5FF",
//   textTransform: "uppercase",
//   letterSpacing: "1px",
// });

// const OutputText = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.primary,
//   marginBottom: theme.spacing(3),
//   lineHeight: 1.6,
// }));

// // Animações
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5 },
//   },
// };

// const techStackVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.7,
//     },
//   },
// };

// const Home: FC = () => {
//   const theme = useTheme();

//   // Função para rastrear cliques em links sociais
//   const handleSocialLinkClick = (platform: string, url: string) => {
//     trackProfileTabInteraction("home", "social_link_click", platform);
//     trackProfileConversion("social_visit", "home");
//     window.open(url, "_blank", "noopener noreferrer");
//   };

//   // Função para rastrear cliques em contato
//   const handleContactClick = (method: string, action: () => void) => {
//     trackProfileTabInteraction("home", "contact_click", method);
//     trackProfileConversion(`${method}_contact`, "home");
//     action();
//   };

//   // Função para rastrear cliques em tecnologias
//   const handleTechClick = (techName: string) => {
//     trackProfileTabInteraction("home", "tech_badge_click", techName);
//   };

//   // Função para rastrear hover em tecnologias (interesse sem clique)
//   const handleTechHover = (techName: string) => {
//     trackProfileTabInteraction("home", "tech_badge_hover", techName);
//   };

//   // Função para rastrear clique no avatar
//   const handleAvatarClick = () => {
//     trackProfileTabInteraction("home", "avatar_click", "profile_photo");
//   };

//   // Tecnologias organizadas por categoria
//   const techCategories = {
//     backend: [
//       { name: "C#", color: "#9B4F96", icon: TbBrandCSharp },
//       { name: ".NET", color: "#94d2bd", icon: SiDotnet },
//       { name: "Node", color: "#ffd166", icon: FaNode },
//       { name: "RabbitMQ", color: "#eae2b7", icon: SiRabbitmq },
//       { name: "Apache Kafka", color: "#adb5bd", icon: SiApachekafka },
//     ],
//     frontend: [
//       { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
//       { name: "React", color: "#61DAFB", icon: SiReact },
//       { name: "TypeScript", color: "#007ACC", icon: SiTypescript },
//       { name: "MaterialUI", color: "#0081CB", icon: SiMui },
//       { name: "Tailwind CSS", color: "#6668e9", icon: SiTailwindcss },
//     ],
//     database: [
//       { name: "SQL", color: "#4479A1", icon: TbSql },
//       { name: "Firebase", color: "#c49d31", icon: SiFirebase },
//       { name: "SQLServer", color: "#fff", icon: DiMsqlServer },
//       { name: "PostgreSQL", color: "#48cae4", icon: SiPostgresql },
//       { name: "MongoDB", color: "#adc178", icon: TbBrandMongodb },
//     ],
//     cloud: [
//       { name: "Google Cloud", color: "#a14744", icon: BiCloud },
//       { name: "Docker", color: "#2496ED", icon: SiDocker },
//       // { name: "CI/CD", color: "#a17144", icon: SiApachesuperset },
//       { name: "Github", color: "#44a149", icon: FaGithub },
//       { name: "Git Actions", color: "#31c493", icon: FaGitAlt },
//       { name: "Cloud Build", color: "#fb8500", icon: BiCloud },
//     ],
//   };

//   const renderTechSection = (title: string, techs: Array<{ name: string, color: string, icon: any }>) => (
//     <Box key={title}>
//       <CategoryHeader>{title}</CategoryHeader>
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "8px",
//         }}
//       >
//         {techs.map((item) => (
//           <motion.div
//             key={item.name}
//             variants={itemVariants}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
//               y: -5,
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <TechBadge
//               style={{
//                 borderLeft: `3px solid ${item.color}`,
//                 width: 145,
//                 display: "flex",
//                 justifyContent: "left",
//                 flexDirection: "row",
//               }}
//               onClick={() => handleTechClick(item.name)}
//               onMouseEnter={() => handleTechHover(item.name)}
//             >
//               <Box
//                 component="span"
//                 sx={{
//                   color: item.color,
//                   display: "flex",
//                   alignItems: "center",
//                   fontSize: "1rem",
//                 }}
//               >
//                 {React.createElement(item.icon)}
//               </Box>
//               <Typography
//                 sx={{
//                   color: "white",
//                   fontSize: 11.5,
//                   fontWeight: 500,
//                 }}
//               >
//                 {item.name}
//               </Typography>
//             </TechBadge>
//           </motion.div>
//         ))}
//       </Box>
//     </Box>
//   );

//   return (
//     <Container
//       component="section"
//       id="home"
//       sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
//     >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         style={{ width: "100%" }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             gap: 6,
//             mb: 8,
//           }}
//         >
//           <motion.div variants={itemVariants}>
//             <ProfileAvatar
//               src={foto}
//               alt="Edison Tezolin"
//               sx={{
//                 display: "block",
//                 position: "relative",
//                 marginTop: { xs: 2 },
//                 width: { xs: 120, md: 160 },
//                 height: { xs: 120, md: 160 },
//                 cursor: "pointer",
//               }}
//               onClick={handleAvatarClick}
//             />
//           </motion.div>

//           <Box>
//             <motion.div variants={itemVariants}>
//               <CodeText variant="body2" gutterBottom sx={{ mb: 1 }}>
//                 // olá pessoal, eu sou
//               </CodeText>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <GradientText
//                 variant="h1"
//                 sx={{
//                   fontSize: { xs: "2.5rem", md: "4rem" },
//                   mb: 2,
//                 }}
//               >
//                 Edison Tezolin
//               </GradientText>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: "1.2rem", md: "1.5rem" },
//                   color: "text.secondary",
//                   fontFamily: '"Roboto Mono", monospace',
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <Box
//                   component="span"
//                   sx={{
//                     color: theme.palette.secondary.main,
//                     mr: 1,
//                     fontSize: "1.3em",
//                     opacity: 0.8,
//                   }}
//                 >
//                   &gt;
//                 </Box>
//                 Desenvolvedor Full-Stack
//               </Typography>
//             </motion.div>
//           </Box>
//         </Box>

//         <motion.div variants={itemVariants}>
//           <GlassCard sx={{ mb: 4, maxWidth: 700 }}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               <CodeText sx={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
//                 <HighlightText>const</HighlightText> phone ={" "}
//                 <span
//                   style={{
//                     color: theme.palette.secondary.main,
//                     cursor: "pointer",
//                   }}
//                   onClick={() =>
//                     handleContactClick("phone", () =>
//                       window.open("tel:41998335860")
//                     )
//                   }
//                 >
//                   "41 99833 5860"
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> email ={" "}
//                 <span
//                   style={{
//                     color: theme.palette.secondary.main,
//                     cursor: "pointer",
//                   }}
//                   onClick={() =>
//                     handleContactClick("email", () =>
//                       window.open("mailto:tezolin.edison@gmail.com")
//                     )
//                   }
//                 >
//                   "tezolin.edison@gmail.com"
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> github ={" "}
//                 <span style={{ color: theme.palette.secondary.main }}>
//                   <span
//                     onClick={() =>
//                       handleSocialLinkClick(
//                         "github",
//                         "https://github.com/etezolin"
//                       )
//                     }
//                     style={{
//                       color: theme.palette.secondary.main,
//                       textDecoration: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     "github.com/etezolin"
//                   </span>
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> linkedIn ={" "}
//                 <span style={{ color: theme.palette.secondary.main }}>
//                   <span
//                     onClick={() =>
//                       handleSocialLinkClick(
//                         "linkedin",
//                         "https://www.linkedin.com/in/etezolin"
//                       )
//                     }
//                     style={{
//                       color: theme.palette.secondary.main,
//                       textDecoration: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     "linkedin.com/in/etezolin"
//                   </span>
//                 </span>
//                 ;
//               </CodeText>
//             </motion.div>
//           </GlassCard>
//         </motion.div>

//         <motion.div variants={itemVariants}>
//           <TechStackHeader sx={{ marginBottom: 1 }}>// minha stack de tecnologias:</TechStackHeader>
//         </motion.div>

//         <motion.div variants={techStackVariants}>
//           {renderTechSection("Backend", techCategories.backend)}
//           {renderTechSection("Frontend", techCategories.frontend)}
//           {renderTechSection("Database & Storage", techCategories.database)}
//           {renderTechSection("Cloud & Infrastructure", techCategories.cloud)}
//         </motion.div>

//         <Box sx={{ mt: 3 }}>
//           <motion.div variants={itemVariants}>
//             <TechStackHeader>// mensagem aos recrutadores:</TechStackHeader>
//           </motion.div>
//           <OutputText>
//             Sou comprometido com a{" "}
//             <HighlightTextV2>excelência técnica</HighlightTextV2> e a{" "}
//             <HighlightTextV2>entrega de valor</HighlightTextV2>, busco
//             constantemente expandir meus conhecimentos em tecnologias emergentes
//             para criar soluções que façam a diferença. Se você busca um
//             profissional que combina expertise técnica com visão estratégica,
//             vamos conversar! 💡💻
//           </OutputText>
//         </Box>

//         {/* Background decoration */}
//         <Box
//           component={motion.div}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.05 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           sx={{
//             position: "absolute",
//             top: "20%",
//             right: "5%",
//             width: "40%",
//             height: "40%",
//             backgroundImage: "url(/code-bg.svg)",
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             zIndex: -1,
//             filter: "blur(1px)",
//             display: { xs: "none", md: "block" },
//           }}
//         />
//       </motion.div>
//     </Container>
//   );
// };

// export default Home;

// _______________________________________________________________________________________________
// _______________________________________________________________________________________________
// _______________________________________________________________________________________________
// _______________________________________________________________________________________________



// import {
//   Avatar,
//   Box,
//   Card,
//   Container,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import React, { type FC } from "react";
// import { BiCloud } from "react-icons/bi";
// import { FaGitAlt, FaGithub, FaNode } from "react-icons/fa";
// import { LuMailCheck } from "react-icons/lu";
// import {
//   SiApachesuperset,
//   SiDocker,
//   SiDotnet,
//   SiFirebase,
//   SiJavascript,
//   SiMui,
//   SiReact,
//   SiTailwindcss,
//   SiTypescript
// } from "react-icons/si";
// import { TbBrandCSharp, TbSql } from "react-icons/tb";
// import foto from "../../assets/foto.png";

// // ✅ CORREÇÃO: Apenas as funções de analytics, sem o hook
// import {
//   trackProfileConversion,
//   trackProfileTabInteraction,
// } from "../../firebase";

// const CodeText = styled(Typography)(() => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: "#f5f5f5",
//   opacity: 0.8,
// }));

// const HighlightText = styled("span")(({ theme }) => ({
//   color: theme.palette.primary.main,
//   fontWeight: 500,
// }));

// const HighlightTextV2 = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
// }));

// const GradientText = styled(Typography)(({ theme }) => ({
//   backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//   backgroundClip: "text",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   fontWeight: 700,
//   letterSpacing: "-0.5px",
// }));

// const GlassCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease",
//   overflow: "hidden",
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

// const TechBadge = styled(motion.div)(({ theme }) => ({
//   backgroundColor: "rgba(13, 33, 55, 0.9)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(1, 2),
//   margin: theme.spacing(0.5),
//   fontFamily: '"Roboto Mono", monospace',
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: theme.spacing(1),
//   cursor: "pointer",
// }));

// const ProfileAvatar = styled(Avatar)({
//   width: 160,
//   height: 160,
//   border: "4px solid #00E5FF",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
// });

// const TechStackHeader = styled(Typography)({
//   marginBottom: 25,
//   opacity: 0.8,
//   fontSize: "1.05rem",
//   fontFamily: '"Roboto Mono", monospace',
//   fontWeight: 600,
//   borderLeft: "3px solid #00E5FF",
//   paddingLeft: 8,
//   display: "inline-block",
//   color: "#f5f5f5",
// });

// const OutputText = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.primary,
//   marginBottom: theme.spacing(3),
//   lineHeight: 1.6,
// }));

// // Animações
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5 },
//   },
// };

// const techStackVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.7,
//     },
//   },
// };

// const Home: FC = () => {
//   const theme = useTheme();

//   // ✅ CORREÇÃO: Removido o hook useTabAnalytics
//   // O tracking de visualização da aba agora é automático via App.tsx

//   // Função para rastrear cliques em links sociais
//   const handleSocialLinkClick = (platform: string, url: string) => {
//     trackProfileTabInteraction("home", "social_link_click", platform);
//     trackProfileConversion("social_visit", "home");
//     window.open(url, "_blank", "noopener noreferrer");
//   };

//   // Função para rastrear cliques em contato
//   const handleContactClick = (method: string, action: () => void) => {
//     trackProfileTabInteraction("home", "contact_click", method);
//     trackProfileConversion(`${method}_contact`, "home");
//     action();
//   };

//   // Função para rastrear cliques em tecnologias
//   const handleTechClick = (techName: string) => {
//     trackProfileTabInteraction("home", "tech_badge_click", techName);
//   };

//   // Função para rastrear hover em tecnologias (interesse sem clique)
//   const handleTechHover = (techName: string) => {
//     trackProfileTabInteraction("home", "tech_badge_hover", techName);
//   };

//   // Função para rastrear clique no avatar
//   const handleAvatarClick = () => {
//     trackProfileTabInteraction("home", "avatar_click", "profile_photo");
//   };

//   const tech = [
//     { name: "C#", color: "#9B4F96", icon: TbBrandCSharp },
//     { name: ".NET", color: "#7e6dbb", icon: SiDotnet },
//     { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
//     { name: "React", color: "#61DAFB", icon: SiReact },
//     { name: "TypeScript", color: "#007ACC", icon: SiTypescript },
//     { name: "SQL", color: "#4479A1", icon: TbSql },
//     { name: "Github", color: "#44a149", icon: FaGithub },
//     { name: "Git Actions", color: "#31c493", icon: FaGitAlt },
//     { name: "CI/CD", color: "#a17144", icon: SiApachesuperset },
//     { name: "Cloud Build", color: "#fb8500", icon: BiCloud },
//     { name: "Node", color: "#44a18a", icon: FaNode },
//     { name: "MaterialUI", color: "#0081CB", icon: SiMui },
//     { name: "Tailwind CSS", color: "#6668e9", icon: SiTailwindcss },
//     { name: "Google Cloud", color: "#a14744", icon: BiCloud },
//     { name: "Mensageria", color: "#c431bc", icon: LuMailCheck },
//     { name: "Docker", color: "#2496ED", icon: SiDocker },
//     { name: "Firebase", color: "#c49d31", icon: SiFirebase },
//   ];

//   return (
//     <Container
//       component="section"
//       id="home"
//       // ✅ CORREÇÃO: Removido ref={sectionRef}
//       sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
//     >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         style={{ width: "100%" }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             gap: 6,
//             mb: 8,
//           }}
//         >
//           <motion.div variants={itemVariants}>
//             <ProfileAvatar
//               src={foto}
//               alt="Edison Tezolin"
//               sx={{
//                 display: "block",
//                 position: "relative",
//                 marginTop: { xs: 2 },
//                 width: { xs: 120, md: 160 },
//                 height: { xs: 120, md: 160 },
//                 cursor: "pointer",
//               }}
//               onClick={handleAvatarClick}
//             />
//           </motion.div>

//           <Box>
//             <motion.div variants={itemVariants}>
//               <CodeText variant="body2" gutterBottom sx={{ mb: 1 }}>
//                 // olá pessoal, eu sou
//               </CodeText>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <GradientText
//                 variant="h1"
//                 sx={{
//                   fontSize: { xs: "2.5rem", md: "4rem" },
//                   mb: 2,
//                 }}
//               >
//                 Edison Tezolin
//               </GradientText>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: "1.2rem", md: "1.5rem" },
//                   color: "text.secondary",
//                   fontFamily: '"Roboto Mono", monospace',
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <Box
//                   component="span"
//                   sx={{
//                     color: theme.palette.secondary.main,
//                     mr: 1,
//                     fontSize: "1.3em",
//                     opacity: 0.8,
//                   }}
//                 >
//                   &gt;
//                 </Box>
//                 Desenvolvedor Full-Stack
//               </Typography>
//             </motion.div>
//           </Box>
//         </Box>

//         <motion.div variants={itemVariants}>
//           <GlassCard sx={{ mb: 4, maxWidth: 700 }}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               <CodeText sx={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
//                 <HighlightText>const</HighlightText> phone ={" "}
//                 <span
//                   style={{
//                     color: theme.palette.secondary.main,
//                     cursor: "pointer",
//                   }}
//                   onClick={() =>
//                     handleContactClick("phone", () =>
//                       window.open("tel:41998335860")
//                     )
//                   }
//                 >
//                   "41 99833 5860"
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> email ={" "}
//                 <span
//                   style={{
//                     color: theme.palette.secondary.main,
//                     cursor: "pointer",
//                   }}
//                   onClick={() =>
//                     handleContactClick("email", () =>
//                       window.open("mailto:tezolin.edison@gmail.com")
//                     )
//                   }
//                 >
//                   "tezolin.edison@gmail.com"
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> github ={" "}
//                 <span style={{ color: theme.palette.secondary.main }}>
//                   <span
//                     onClick={() =>
//                       handleSocialLinkClick(
//                         "github",
//                         "https://github.com/etezolin"
//                       )
//                     }
//                     style={{
//                       color: theme.palette.secondary.main,
//                       textDecoration: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     "github.com/etezolin"
//                   </span>
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> linkedIn ={" "}
//                 <span style={{ color: theme.palette.secondary.main }}>
//                   <span
//                     onClick={() =>
//                       handleSocialLinkClick(
//                         "linkedin",
//                         "https://www.linkedin.com/in/etezolin"
//                       )
//                     }
//                     style={{
//                       color: theme.palette.secondary.main,
//                       textDecoration: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     "linkedin.com/in/etezolin"
//                   </span>
//                 </span>
//                 ;
//               </CodeText>
//             </motion.div>
//           </GlassCard>
//         </motion.div>

//         <motion.div variants={itemVariants}>
//           <TechStackHeader>// minha stack de tecnologias:</TechStackHeader>
//         </motion.div>

//         <motion.div
//           variants={techStackVariants}
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "8px",
//           }}
//         >
//           {tech.map((item) => (
//             <motion.div
//               key={item.name}
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
//                 y: -5,
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <TechBadge
//                 style={{
//                   borderLeft: `3px solid ${item.color}`,
//                   width: 145,
//                   display: "flex",
//                   justifyContent: "left",
//                   flexDirection: "row",
//                 }}
//                 onClick={() => handleTechClick(item.name)}
//                 onMouseEnter={() => handleTechHover(item.name)}
//               >
//                 <Box
//                   component="span"
//                   sx={{
//                     color: item.color,
//                     display: "flex",
//                     alignItems: "center",
//                     fontSize: "1rem",
//                   }}
//                 >
//                   {React.createElement(item.icon)}
//                 </Box>
//                 <Typography
//                   sx={{
//                     color: "white",
//                     fontSize: 11.5,
//                     fontWeight: 500,
//                   }}
//                 >
//                   {item.name}
//                 </Typography>
//               </TechBadge>
//             </motion.div>
//           ))}
//         </motion.div>

//         <Box sx={{ mt: 3 }}>
//           <motion.div variants={itemVariants}>
//             <TechStackHeader>// mensagem aos recrutadores:</TechStackHeader>
//           </motion.div>
//           <OutputText>
//             Sou comprometido com a{" "}
//             <HighlightTextV2>excelência técnica</HighlightTextV2> e a{" "}
//             <HighlightTextV2>entrega de valor</HighlightTextV2>, busco
//             constantemente expandir meus conhecimentos em tecnologias emergentes
//             para criar soluções que façam a diferença. Se você busca um
//             profissional que combina expertise técnica com visão estratégica,
//             vamos conversar! 💡💻
//           </OutputText>
//         </Box>

//         {/* Background decoration */}
//         <Box
//           component={motion.div}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.05 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           sx={{
//             position: "absolute",
//             top: "20%",
//             right: "5%",
//             width: "40%",
//             height: "40%",
//             backgroundImage: "url(/code-bg.svg)",
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             zIndex: -1,
//             filter: "blur(1px)",
//             display: { xs: "none", md: "block" },
//           }}
//         />
//       </motion.div>
//     </Container>
//   );
// };

// export default Home;
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// // import React, { type FC } from "react";
// // import {
// //   Box,
// //   Typography,
// //   Container,
// //   Card,
// //   Avatar,
// //   useTheme,
// // } from "@mui/material";
// // import { motion } from "framer-motion";
// // import { styled } from "@mui/material/styles";
// // import foto from "../../assets/foto.png";
// // import {
// //   SiDotnet,
// //   SiJavascript,
// //   SiReact,
// //   SiTypescript,
// //   SiDocker,
// //   SiMui,
// //   SiApachesuperset,
// //   SiFirebase,
// //   SiTailwindcss,
// //   SiApachekafka,
// // } from "react-icons/si";
// // import { TbSql, TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";
// // import { FaNode, FaGithub, FaGitAlt } from "react-icons/fa";
// // import { BiCloud } from "react-icons/bi";
// // import { LuMailCheck } from "react-icons/lu";

// // // Import das funções de analytics
// // import {
// //   trackProfileTabInteraction,
// //   trackProfileConversion,
// // } from "../../firebase";
// // import { useTabAnalytics } from "../../hooks/useTabAnalytics";

// // const CodeText = styled(Typography)(() => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   color: "#f5f5f5",
// //   opacity: 0.8,
// // }));

// // const HighlightText = styled("span")(({ theme }) => ({
// //   color: theme.palette.primary.main,
// //   fontWeight: 500,
// // }));

// // const HighlightTextV2 = styled("span")(({ theme }) => ({
// //   color: theme.palette.secondary.main,
// // }));

// // const GradientText = styled(Typography)(({ theme }) => ({
// //   backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
// //   backgroundClip: "text",
// //   WebkitBackgroundClip: "text",
// //   WebkitTextFillColor: "transparent",
// //   fontWeight: 700,
// //   letterSpacing: "-0.5px",
// // }));

// // const GlassCard = styled(Card)(({ theme }) => ({
// //   padding: theme.spacing(3),
// //   background: "rgba(13, 33, 55, 0.7)",
// //   backdropFilter: "blur(10px)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
// //   transition: "all 0.3s ease",
// //   overflow: "hidden",
// //   position: "relative",
// //   "&::before": {
// //     content: '""',
// //     position: "absolute",
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     height: "2px",
// //     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
// //     opacity: 0.7,
// //   },
// // }));

// // const TechBadge = styled(motion.div)(({ theme }) => ({
// //   backgroundColor: "rgba(13, 33, 55, 0.9)",
// //   borderRadius: theme.spacing(1),
// //   padding: theme.spacing(1, 2),
// //   margin: theme.spacing(0.5),
// //   fontFamily: '"Roboto Mono", monospace',
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   gap: theme.spacing(1),
// //   cursor: "pointer", // Adicionado para indicar que é clicável
// // }));

// // const ProfileAvatar = styled(Avatar)({
// //   width: 160,
// //   height: 160,
// //   border: "4px solid #00E5FF",
// //   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
// // });

// // const TechStackHeader = styled(Typography)({
// //   marginBottom: 25,
// //   opacity: 0.8,
// //   fontSize: "1.05rem",
// //   fontFamily: '"Roboto Mono", monospace',
// //   fontWeight: 600,
// //   borderLeft: "3px solid #00E5FF",
// //   paddingLeft: 8,
// //   display: "inline-block",
// //   color: "#f5f5f5",
// // });

// // const OutputText = styled(Typography)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   color: theme.palette.text.primary,
// //   marginBottom: theme.spacing(3),
// //   lineHeight: 1.6,
// // }));

// // // Animações
// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.1,
// //       delayChildren: 0.2,
// //     },
// //   },
// // };

// // const itemVariants = {
// //   hidden: { y: 20, opacity: 0 },
// //   visible: {
// //     y: 0,
// //     opacity: 1,
// //     transition: { duration: 0.5 },
// //   },
// // };

// // const techStackVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.08,
// //       delayChildren: 0.7,
// //     },
// //   },
// // };

// // const Home: FC = () => {
// //   const theme = useTheme();
// //   const { sectionRef } = useTabAnalytics("home");

// //   // Analytics: Rastrear visualização da home e tempo gasto
// //   // useEffect(() => {
// //   //   // Rastreia quando a página home é carregada
// //   //   trackProfileTabView("home", {
// //   //     user_agent: navigator.userAgent,
// //   //     referrer: document.referrer,
// //   //     screen_resolution: `${window.screen.width}x${window.screen.height}`,
// //   //     device_type: window.innerWidth < 768 ? "mobile" : "desktop",
// //   //   });

// //   //   // Marca o tempo de início para calcular tempo gasto
// //   //   const currentStartTime = Date.now();

// //   //   // Cleanup: rastreia tempo gasto quando o usuário sair da página
// //   //   return () => {
// //   //     const timeSpent = Math.floor((Date.now() - currentStartTime) / 1000);
// //   //     trackProfileTabTimeSpent("home", timeSpent);
// //   //   };
// //   // }, []); // Dependência vazia está correta pois queremos executar apenas uma vez

// //   // Função para rastrear cliques em links sociais
// //   const handleSocialLinkClick = (platform: string, url: string) => {
// //     trackProfileTabInteraction("home", "social_link_click", platform);
// //     trackProfileConversion("social_visit", "home");
// //     window.open(url, "_blank", "noopener noreferrer");
// //   };

// //   // Função para rastrear cliques em tecnologias
// //   const handleTechClick = (techName: string) => {
// //     trackProfileTabInteraction("home", "tech_badge_click", techName);
// //   };

// //   // Função para rastrear hover em tecnologias (interesse sem clique)
// //   const handleTechHover = (techName: string) => {
// //     trackProfileTabInteraction("home", "tech_badge_hover", techName);
// //   };

// //   const tech = [
// //     { name: "C#", color: "#9B4F96", icon: TbBrandCSharp },
// //     { name: ".NET", color: "#7e6dbb", icon: SiDotnet },
// //     { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
// //     { name: "React", color: "#61DAFB", icon: SiReact },
// //     { name: "TypeScript", color: "#007ACC", icon: SiTypescript },
// //     { name: "SQL", color: "#4479A1", icon: TbSql },
// //     { name: "Github", color: "#44a149", icon: FaGithub },
// //     { name: "Git Actions", color: "#31c493", icon: FaGitAlt },
// //     { name: "CI/CD", color: "#a17144", icon: SiApachesuperset },
// //     { name: "Node", color: "#44a18a", icon: FaNode },
// //     { name: "MaterialUI", color: "#0081CB", icon: SiMui },
// //     { name: "Tailwind CSS", color: "#6668e9", icon: SiTailwindcss },
// //     { name: "Google Cloud", color: "#a14744", icon: BiCloud },
// //     { name: "Mensageria", color: "#c431bc", icon: LuMailCheck },
// //     { name: "Docker", color: "#2496ED", icon: SiDocker },
// //     { name: "Firebase", color: "#c49d31", icon: SiFirebase },
// //     { name: "React Native", color: "#e96666", icon: TbBrandReactNative },
// //     { name: "Kafka", color: "#66e5e9", icon: SiApachekafka },
// //   ];

// //   return (
// //     <Container
// //       component="section"
// //       ref={sectionRef}
// //       id="home"
// //       sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
// //     >
// //       <motion.div
// //         variants={containerVariants}
// //         initial="hidden"
// //         animate="visible"
// //         style={{ width: "100%" }}
// //       >
// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: { xs: "column", md: "row" },
// //             alignItems: "center",
// //             gap: 6,
// //             mb: 8,
// //           }}
// //         >
// //           <motion.div variants={itemVariants}>
// //             <ProfileAvatar
// //               src={foto}
// //               alt="Edison Tezolin"
// //               sx={{
// //                 display: "block",
// //                 position: "relative",
// //                 marginTop: { xs: 2 },
// //                 width: { xs: 120, md: 160 },
// //                 height: { xs: 120, md: 160 },
// //                 cursor: "pointer",
// //               }}
// //               onClick={() =>
// //                 trackProfileTabInteraction(
// //                   "home",
// //                   "avatar_click",
// //                   "profile_photo"
// //                 )
// //               }
// //             />
// //           </motion.div>

// //           <Box>
// //             <motion.div variants={itemVariants}>
// //               <CodeText variant="body2" gutterBottom sx={{ mb: 1 }}>
// //                 // olá pessoal, eu sou
// //               </CodeText>
// //             </motion.div>

// //             <motion.div variants={itemVariants}>
// //               <GradientText
// //                 variant="h1"
// //                 sx={{
// //                   fontSize: { xs: "2.5rem", md: "4rem" },
// //                   mb: 2,
// //                 }}
// //               >
// //                 Edison Tezolin
// //               </GradientText>
// //             </motion.div>

// //             <motion.div variants={itemVariants}>
// //               <Typography
// //                 variant="h2"
// //                 sx={{
// //                   fontSize: { xs: "1.2rem", md: "1.5rem" },
// //                   color: "text.secondary",
// //                   fontFamily: '"Roboto Mono", monospace',
// //                   display: "flex",
// //                   alignItems: "center",
// //                 }}
// //               >
// //                 <Box
// //                   component="span"
// //                   sx={{
// //                     color: theme.palette.secondary.main,
// //                     mr: 1,
// //                     fontSize: "1.3em",
// //                     opacity: 0.8,
// //                   }}
// //                 >
// //                   &gt;
// //                 </Box>
// //                 Desenvolvedor Full-Stack
// //               </Typography>
// //             </motion.div>
// //           </Box>
// //         </Box>

// //         <motion.div variants={itemVariants}>
// //           <GlassCard sx={{ mb: 4, maxWidth: 700 }}>
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.5 }}
// //             >
// //               <CodeText sx={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
// //                 <HighlightText>const</HighlightText> phone ={" "}
// //                 <span
// //                   style={{
// //                     color: theme.palette.secondary.main,
// //                     cursor: "pointer",
// //                   }}
// //                   onClick={() => {
// //                     trackProfileTabInteraction(
// //                       "home",
// //                       "contact_click",
// //                       "phone"
// //                     );
// //                     trackProfileConversion("phone_contact", "home");
// //                     window.open("tel:41998335860");
// //                   }}
// //                 >
// //                   "41 99833 5860"
// //                 </span>
// //                 ;<br />
// //                 <HighlightText>const</HighlightText> email ={" "}
// //                 <span
// //                   style={{
// //                     color: theme.palette.secondary.main,
// //                     cursor: "pointer",
// //                   }}
// //                   onClick={() => {
// //                     trackProfileTabInteraction(
// //                       "home",
// //                       "contact_click",
// //                       "email"
// //                     );
// //                     trackProfileConversion("email_contact", "home");
// //                     window.open("mailto:tezolin.edison@gmail.com");
// //                   }}
// //                 >
// //                   "tezolin.edison@gmail.com"
// //                 </span>
// //                 ;<br />
// //                 <HighlightText>const</HighlightText> github ={" "}
// //                 <span style={{ color: theme.palette.secondary.main }}>
// //                   <span
// //                     onClick={() =>
// //                       handleSocialLinkClick(
// //                         "github",
// //                         "https://github.com/etezolin"
// //                       )
// //                     }
// //                     style={{
// //                       color: theme.palette.secondary.main,
// //                       textDecoration: "none",
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     "github.com/etezolin"
// //                   </span>
// //                 </span>
// //                 ;<br />
// //                 <HighlightText>const</HighlightText> linkedIn ={" "}
// //                 <span style={{ color: theme.palette.secondary.main }}>
// //                   <span
// //                     onClick={() =>
// //                       handleSocialLinkClick(
// //                         "linkedin",
// //                         "https://www.linkedin.com/in/etezolin"
// //                       )
// //                     }
// //                     style={{
// //                       color: theme.palette.secondary.main,
// //                       textDecoration: "none",
// //                       cursor: "pointer",
// //                     }}
// //                   >
// //                     "linkedin.com/in/etezolin"
// //                   </span>
// //                 </span>
// //                 ;
// //               </CodeText>
// //             </motion.div>
// //           </GlassCard>
// //         </motion.div>

// //         <motion.div variants={itemVariants}>
// //           <TechStackHeader>// minha stack de tecnologias:</TechStackHeader>
// //         </motion.div>

// //         <motion.div
// //           variants={techStackVariants}
// //           style={{
// //             display: "flex",
// //             flexWrap: "wrap",
// //             gap: "8px",
// //           }}
// //         >
// //           {tech.map((item) => (
// //             <motion.div
// //               key={item.name}
// //               variants={itemVariants}
// //               whileHover={{
// //                 scale: 1.05,
// //                 boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
// //                 y: -5,
// //               }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               <TechBadge
// //                 style={{
// //                   borderLeft: `3px solid ${item.color}`,
// //                   width: 143,
// //                   display: "flex",
// //                   justifyContent: "left",
// //                   flexDirection: "row",
// //                 }}
// //                 onClick={() => handleTechClick(item.name)}
// //                 onMouseEnter={() => handleTechHover(item.name)}
// //               >
// //                 <Box
// //                   component="span"
// //                   sx={{
// //                     color: item.color,
// //                     display: "flex",
// //                     alignItems: "center",
// //                     fontSize: "1rem",
// //                   }}
// //                 >
// //                   {React.createElement(item.icon)}
// //                 </Box>
// //                 <Typography
// //                   sx={{
// //                     color: "white",
// //                     fontSize: 11.5,
// //                     fontWeight: 500,
// //                   }}
// //                 >
// //                   {item.name}
// //                 </Typography>
// //               </TechBadge>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         <Box sx={{ mt: 3 }}>
// //           <motion.div variants={itemVariants}>
// //             <TechStackHeader>// mensagem aos recrutadores:</TechStackHeader>
// //           </motion.div>
// //           <OutputText>
// //             Sou comprometido com a{" "}
// //             <HighlightTextV2>excelência técnica</HighlightTextV2> e a{" "}
// //             <HighlightTextV2>entrega de valor</HighlightTextV2>, busco
// //             constantemente expandir meus conhecimentos em tecnologias emergentes
// //             para criar soluções que façam a diferença. Se você busca um
// //             profissional que combina expertise técnica com visão estratégica,
// //             vamos conversar! 💡💻
// //           </OutputText>
// //         </Box>

// //         {/* Background decoration */}
// //         <Box
// //           component={motion.div}
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 0.05 }}
// //           transition={{ duration: 1, delay: 0.5 }}
// //           sx={{
// //             position: "absolute",
// //             top: "20%",
// //             right: "5%",
// //             width: "40%",
// //             height: "40%",
// //             backgroundImage: "url(/code-bg.svg)",
// //             backgroundSize: "contain",
// //             backgroundRepeat: "no-repeat",
// //             zIndex: -1,
// //             filter: "blur(1px)",
// //             display: { xs: "none", md: "block" },
// //           }}
// //         />
// //       </motion.div>
// //     </Container>
// //   );
// // };

// // export default Home;

// import React, { type FC } from "react";
// import {
//   Box,
//   Typography,
//   Container,
//   Card,
//   Avatar,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// import foto from "../../assets/foto.png";
// import {
//   SiDotnet,
//   SiJavascript,
//   SiReact,
//   SiTypescript,
//   SiDocker,
//   SiMui,
//   SiApachesuperset,
//   SiFirebase,
//   SiTailwindcss,
//   SiApachekafka,
// } from "react-icons/si";
// import { TbSql, TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";
// import { FaNode, FaGithub, FaGitAlt } from "react-icons/fa";
// import { BiCloud } from "react-icons/bi";
// import { LuMailCheck } from "react-icons/lu";

// const CodeText = styled(Typography)(() => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: "#f5f5f5",
//   opacity: 0.8,
// }));

// const HighlightText = styled("span")(({ theme }) => ({
//   color: theme.palette.primary.main,
//   fontWeight: 500,
// }));

// const HighlightTextV2 = styled("span")(({ theme }) => ({
//   color: theme.palette.secondary.main,
// }));

// const GradientText = styled(Typography)(({ theme }) => ({
//   backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//   backgroundClip: "text",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   fontWeight: 700,
//   letterSpacing: "-0.5px",
// }));

// const GlassCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.7)",
//   backdropFilter: "blur(10px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease",
//   overflow: "hidden",
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

// const TechBadge = styled(motion.div)(({ theme }) => ({
//   backgroundColor: "rgba(13, 33, 55, 0.9)",
//   borderRadius: theme.spacing(1),
//   padding: theme.spacing(1, 2),
//   margin: theme.spacing(0.5),
//   fontFamily: '"Roboto Mono", monospace',
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: theme.spacing(1),
// }));

// const ProfileAvatar = styled(Avatar)({
//   width: 160,
//   height: 160,
//   border: "4px solid #00E5FF", // Usando a cor diretamente em vez de theme
//   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
// });

// const TechStackHeader = styled(Typography)({
//   marginBottom: 25,
//   opacity: 0.8,
//   fontSize: "1.05rem",
//   fontFamily: '"Roboto Mono", monospace',
//   fontWeight: 600,
//   borderLeft: "3px solid #00E5FF", // Cor secundária fixa
//   paddingLeft: 8,
//   display: "inline-block",
//   color: "#f5f5f5",
// });

// const OutputText = styled(Typography)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   color: theme.palette.text.primary,
//   marginBottom: theme.spacing(3),
//   lineHeight: 1.6,
// }));

// // Animações
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5 },
//   },
// };

// const techStackVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.7,
//     },
//   },
// };

// const Home: FC = () => {
//   const theme = useTheme();

//   const tech = [
//     { name: "C#", color: "#9B4F96", icon: TbBrandCSharp },
//     { name: ".NET", color: "#7e6dbb", icon: SiDotnet },
//     { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
//     { name: "React", color: "#61DAFB", icon: SiReact },
//     { name: "TypeScript", color: "#007ACC", icon: SiTypescript },
//     { name: "SQL", color: "#4479A1", icon: TbSql },
//     { name: "Github", color: "#44a149", icon: FaGithub },
//     { name: "Git Actions", color: "#31c493", icon: FaGitAlt },
//     { name: "CI/CD", color: "#a17144", icon: SiApachesuperset },
//     { name: "Node", color: "#44a18a", icon: FaNode },
//     { name: "MaterialUI", color: "#0081CB", icon: SiMui },
//     { name: "Tailwind CSS", color: "#6668e9", icon: SiTailwindcss },
//     { name: "Google Cloud", color: "#a14744", icon: BiCloud },
//     { name: "Mensageria", color: "#c431bc", icon: LuMailCheck },
//     { name: "Docker", color: "#2496ED", icon: SiDocker },
//     { name: "Firebase", color: "#c49d31", icon: SiFirebase },
//     { name: "React Native", color: "#e96666", icon: TbBrandReactNative },
//     { name: "Kafka", color: "#66e5e9", icon: SiApachekafka },
//   ];

//   return (
//     <Container
//       component="section"
//       id="home"
//       sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
//     >
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         style={{ width: "100%" }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             gap: 6,
//             mb: 8,
//           }}
//         >
//           <motion.div variants={itemVariants}>
//             <ProfileAvatar
//               src={foto}
//               alt="Edison Tezolin"
//               sx={{
//                 display: "block", // Mostra em todos os tamanhos de tela
//                 position: "relative",
//                 marginTop: { xs: 2 },
//                 // margin: { xs: "0 auto 24px", md: 0 }, // Centraliza no mobile, alinha à esquerda no desktop
//                 width: { xs: 120, md: 160 },
//                 height: { xs: 120, md: 160 },
//               }}
//             />
//           </motion.div>

//           <Box>
//             <motion.div variants={itemVariants}>
//               <CodeText variant="body2" gutterBottom sx={{ mb: 1 }}>
//                 // olá pessoal, eu sou
//               </CodeText>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <GradientText
//                 variant="h1"
//                 sx={{
//                   fontSize: { xs: "2.5rem", md: "4rem" },
//                   mb: 2,
//                 }}
//               >
//                 Edison Tezolin
//               </GradientText>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontSize: { xs: "1.2rem", md: "1.5rem" },
//                   // mb: 2,
//                   color: "text.secondary",
//                   fontFamily: '"Roboto Mono", monospace',
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <Box
//                   component="span"
//                   sx={{
//                     color: theme.palette.secondary.main,
//                     mr: 1,
//                     fontSize: "1.3em",
//                     opacity: 0.8,
//                   }}
//                 >
//                   &gt;
//                 </Box>
//                 Desenvolvedor Full-Stack
//               </Typography>
//             </motion.div>
//           </Box>
//         </Box>

//         <motion.div variants={itemVariants}>
//           <GlassCard sx={{ mb: 4, maxWidth: 700 }}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//             >
//               <CodeText sx={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
//                 <HighlightText>const</HighlightText> phone ={" "}
//                 <span style={{ color: theme.palette.secondary.main }}>
//                   "41 99833 5860"
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> email ={" "}
//                 <span style={{ color: theme.palette.secondary.main }}>
//                   "tezolin.edison@gmail.com"
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> github ={" "}
//                 <span style={{ color: theme.palette.secondary.main }}>
//                   <a
//                     href="https://github.com/etezolin"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       color: theme.palette.secondary.main,
//                       textDecoration: "none",
//                     }}
//                   >
//                     "github.com/etezolin"
//                   </a>
//                 </span>
//                 ;<br />
//                 <HighlightText>const</HighlightText> linkedIn ={" "}
//                 <span style={{ color: theme.palette.secondary.main }}>
//                   <a
//                     href="https://www.linkedin.com/in/etezolin"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       color: theme.palette.secondary.main,
//                       textDecoration: "none",
//                     }}
//                   >
//                     "linkedin.com/in/etezolin"
//                   </a>
//                 </span>
//                 ;
//               </CodeText>
//             </motion.div>
//           </GlassCard>
//         </motion.div>

//         <motion.div variants={itemVariants}>
//           <TechStackHeader>// minha stack de tecnologias:</TechStackHeader>
//         </motion.div>

//         <motion.div
//           variants={techStackVariants}
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "8px",
//           }}
//         >
//           {tech.map((item) => (
//             <motion.div
//               key={item.name}
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
//                 y: -5,
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <TechBadge
//                 style={{
//                   borderLeft: `3px solid ${item.color}`,
//                   width: 143,
//                   display: "flex",
//                   justifyContent: "left",
//                   flexDirection: "row",
//                 }}
//               >
//                 {/* Ícone da tecnologia */}
//                 <Box
//                   component="span"
//                   sx={{
//                     color: item.color,
//                     display: "flex",
//                     alignItems: "center",
//                     fontSize: "1rem",
//                     // marginRight: "5px",
//                   }}
//                 >
//                   {React.createElement(item.icon)}
//                 </Box>
//                 <Typography
//                   sx={{
//                     color: "white",
//                     fontSize: 11.5,
//                     fontWeight: 500,
//                   }}
//                 >
//                   {item.name}
//                 </Typography>
//               </TechBadge>
//             </motion.div>
//           ))}
//         </motion.div>
//         <Box sx={{ mt: 3 }}>
//           <motion.div variants={itemVariants}>
//             <TechStackHeader>// mensagem aos recrutadores:</TechStackHeader>
//           </motion.div>
//           <OutputText>
//             Sou comprometido com a{" "}
//             <HighlightTextV2>excelência técnica</HighlightTextV2> e a{" "}
//             <HighlightTextV2>entrega de valor</HighlightTextV2>, busco
//             constantemente expandir meus conhecimentos em tecnologias emergentes
//             para criar soluções que façam a diferença. Se você busca um
//             profissional que combina expertise técnica com visão estratégica,
//             vamos conversar! 💡💻
//           </OutputText>
//         </Box>
//         {/* Background decoration */}
//         <Box
//           component={motion.div}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.05 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           sx={{
//             position: "absolute",
//             top: "20%",
//             right: "5%",
//             width: "40%",
//             height: "40%",
//             backgroundImage: "url(/code-bg.svg)", // Adicione uma imagem de fundo de código
//             backgroundSize: "contain",
//             backgroundRepeat: "no-repeat",
//             zIndex: -1,
//             filter: "blur(1px)",
//             display: { xs: "none", md: "block" },
//           }}
//         />
//       </motion.div>
//     </Container>
//   );
// };

// export default Home;
