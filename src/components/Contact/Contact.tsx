// // import type { FC } from "react";
// // import {
// //   Box,
// //   Container,
// //   Card,
// //   Typography,
// //   IconButton,
// //   Link,
// //   Tooltip,
// //   Chip,
// // } from "@mui/material";
// // import { motion } from "framer-motion";
// // import { styled } from "@mui/material/styles";
// // import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // import GitHubIcon from "@mui/icons-material/GitHub";
// // import DownloadIcon from "@mui/icons-material/Download";
// // import ScheduleIcon from "@mui/icons-material/Schedule";
// // import LocationOnIcon from "@mui/icons-material/LocationOn";
// // import VideocamIcon from "@mui/icons-material/Videocam";
// // import PersonSearchIcon from "@mui/icons-material/PersonSearch";

// // const StyledCard = styled(Card)(({ theme }) => ({
// //   padding: theme.spacing(3),
// //   marginBottom: theme.spacing(3),
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

// // const AvailabilityChip = styled(Chip)(({ theme }) => ({
// //   fontFamily: '"Roboto Mono", monospace',
// //   margin: theme.spacing(0.5),
// //   backgroundColor: "rgba(20, 40, 80, 0.8)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   "& .MuiChip-icon": {
// //     color: theme.palette.secondary.main,
// //   },
// // }));

// // const SocialButton = styled(IconButton)(({ theme }) => ({
// //   backgroundColor: "rgba(13, 33, 55, 0.7)",
// //   border: "1px solid rgba(255, 255, 255, 0.1)",
// //   marginRight: theme.spacing(1),
// //   transition: "all 0.3s ease",
// //   "&:hover": {
// //     backgroundColor: "rgba(30, 50, 70, 0.9)",
// //     transform: "translateY(-2px)",
// //   },
// // }));

// // const Contact: FC = () => {
// //   return (
// //     <Container sx={{ minHeight: "100vh", py: 8 }} id="contact">
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <Typography variant="h2" sx={{ mb: 4, color: "primary.main" }}>
// //           // Contato
// //         </Typography>

// //         <Box
// //           sx={{
// //             display: "flex",
// //             flexDirection: { xs: "column", md: "row" },
// //             gap: 3,
// //           }}
// //         >
// //           <Box sx={{ flex: 1, width: "100%" }}>
// //             <motion.div whileHover={{ scale: 1.01 }}>
// //               <StyledCard>
// //                 <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
// //                   <PersonSearchIcon
// //                     sx={{ mr: 1, color: "secondary.main", fontSize: "1.8rem" }}
// //                   />
// //                   <Typography
// //                     // variant="h5"
// //                     component="h3"
// //                     sx={{
// //                       fontFamily: '"Roboto Mono", monospace',
// //                       fontSize: "16.5pt",
// //                     }}
// //                   >
// //                     Contato
// //                   </Typography>
// //                 </Box>

// //                 <CodeText sx={{ fontSize: "0.95rem", lineHeight: 1.8, mb: 3 }}>
// //                   <HighlightText>const</HighlightText> name ={" "}
// //                   <HighlightTextV2>"Edison Tezolin"</HighlightTextV2>;<br />
// //                   <HighlightText>const</HighlightText> phone ={" "}
// //                   <HighlightTextV2>"41 99833 5860"</HighlightTextV2>;<br />
// //                   <HighlightText>const</HighlightText> email ={" "}
// //                   <HighlightTextV2>"tezolin.edison@gmail.com"</HighlightTextV2>;
// //                   <br />
// //                 </CodeText>

// //                 <Box sx={{ mb: 4 }}>
// //                   <Typography
// //                     // variant="h6"
// //                     sx={{
// //                       mb: 2,
// //                       fontFamily: '"Roboto Mono", monospace',
// //                       borderLeft: "3px solid #00E5FF",
// //                       pl: 1,
// //                       fontSize: "13.5pt",
// //                     }}
// //                   >
// //                     Redes profissionais
// //                   </Typography>

// //                   <Box sx={{ display: "flex", mb: 3 }}>
// //                     <Tooltip title="LinkedIn">
// //                       <Link
// //                         href="https://www.linkedin.com/in/etezolin"
// //                         target="_blank"
// //                         sx={{ textDecoration: "none" }}
// //                       >
// //                         <SocialButton>
// //                           <LinkedInIcon sx={{ color: "#f5f5f5" }} />
// //                         </SocialButton>
// //                       </Link>
// //                     </Tooltip>

// //                     <Tooltip title="GitHub">
// //                       <Link
// //                         href="https://github.com/etezolin"
// //                         target="_blank"
// //                         sx={{ textDecoration: "none" }}
// //                       >
// //                         <SocialButton>
// //                           <GitHubIcon sx={{ color: "#f5f5f5" }} />
// //                         </SocialButton>
// //                       </Link>
// //                     </Tooltip>

// //                     <Tooltip title="Download CV">
// //                       <Link
// //                         href="/Curriculum_Edison_Tezolin.pdf"
// //                         download
// //                         sx={{ textDecoration: "none" }}
// //                       >
// //                         <SocialButton>
// //                           <DownloadIcon sx={{ color: "#00E5FF" }} />
// //                         </SocialButton>
// //                       </Link>
// //                     </Tooltip>
// //                   </Box>
// //                 </Box>

// //                 <Box>
// //                   <Typography
// //                     // variant="h6"
// //                     sx={{
// //                       mb: 2,
// //                       fontFamily: '"Roboto Mono", monospace',
// //                       borderLeft: "3px solid #00E5FF",
// //                       pl: 1,
// //                       fontSize: "13.5pt",
// //                     }}
// //                   >
// //                     Disponibilidade
// //                   </Typography>

// //                   <Box sx={{ display: "flex", flexWrap: "wrap", mb: 2 }}>
// //                     <AvailabilityChip
// //                       icon={<ScheduleIcon />}
// //                       label="Entrevistas: 08h00 às 18h00"
// //                     />
// //                     <AvailabilityChip
// //                       icon={<VideocamIcon />}
// //                       label="Chamadas de vídeo"
// //                     />
// //                     <AvailabilityChip
// //                       icon={<LocationOnIcon />}
// //                       label="Remoto ou Curitiba/PR"
// //                     />
// //                   </Box>

// //                   <Typography
// //                     sx={{
// //                       fontFamily: '"Roboto Mono", monospace',
// //                       fontSize: "0.9rem",
// //                       color: "#f0f0f0",
// //                       opacity: 0.8,
// //                       mt: 2,
// //                     }}
// //                   >
// //                     Prefiro comunicação inicial por email. Estou disponível para
// //                     entrevistas técnicas e conversas sobre oportunidades de
// //                     desenvolvimento full-stack que envolvam .NET, React e
// //                     arquiteturas cloud-native.
// //                   </Typography>
// //                 </Box>
// //               </StyledCard>
// //             </motion.div>

// //             <motion.div
// //               whileHover={{ scale: 1.01 }}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: 0.3 }}
// //             >
// //               <StyledCard sx={{ mt: 3 }}>
// //                 <Typography
// //                   sx={{
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     fontSize: "0.9rem",
// //                     color: "#f0f0f0",
// //                     borderLeft: "3px solid #00E5FF",
// //                     paddingLeft: 1,
// //                   }}
// //                 >
// //                   <HighlightText>return</HighlightText> {`{`}
// //                 </Typography>

// //                 <Typography
// //                   sx={{
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     fontSize: "0.9rem",
// //                     color: "#f0f0f0",
// //                     pl: 3,
// //                     pb: 1,
// //                   }}
// //                 >
// //                   "Agradeço seu interesse em meu perfil! Estou aberto a discutir
// //                   como minhas habilidades podem contribuir para projetos
// //                   desafiadores e inovadores. Não hesite em entrar em contato
// //                   para conversarmos sobre potenciais colaborações."
// //                 </Typography>

// //                 <Typography
// //                   sx={{
// //                     fontFamily: '"Roboto Mono", monospace',
// //                     fontSize: "0.9rem",
// //                     color: "#f0f0f0",
// //                   }}
// //                 >
// //                   {`};`}
// //                 </Typography>
// //               </StyledCard>
// //             </motion.div>
// //           </Box>
// //         </Box>
// //       </motion.div>
// //     </Container>
// //   );
// // };

// // export default Contact;

// import type { FC } from "react";
// import {
//   Box,
//   Container,
//   Card,
//   Typography,
//   IconButton,
//   Link,
//   Tooltip,
//   Chip,
//   Button,
//   Avatar,
//   Divider,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/material/styles";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import DownloadIcon from "@mui/icons-material/Download";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import VideocamIcon from "@mui/icons-material/Videocam";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import RocketIcon from "@mui/icons-material/Rocket";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import MessageIcon from "@mui/icons-material/Message";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// const HeroCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(4),
//   background: `linear-gradient(135deg,
//     rgba(13, 33, 55, 0.9) 0%,
//     rgba(0, 20, 40, 0.8) 50%,
//     rgba(13, 33, 55, 0.9) 100%)`,
//   backdropFilter: "blur(20px)",
//   border: "1px solid rgba(0, 229, 255, 0.2)",
//   boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
//   borderRadius: theme.spacing(2),
//   position: "relative",
//   overflow: "hidden",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: "3px",
//     background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//   },
// }));

// const ContactCard = styled(Card)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: "rgba(13, 33, 55, 0.6)",
//   backdropFilter: "blur(15px)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   borderRadius: theme.spacing(2),
//   transition: "all 0.3s ease",
//   position: "relative",
//   overflow: "hidden",
//   "&:hover": {
//     transform: "translateY(-5px)",
//     borderColor: theme.palette.secondary.main,
//     boxShadow: "0 15px 40px rgba(0, 229, 255, 0.15)",
//   },
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   fontSize: "0.95rem",
//   textTransform: "none",
//   borderRadius: theme.spacing(3),
//   padding: theme.spacing(1.5, 3),
//   margin: theme.spacing(0.5),
//   minWidth: 160,
//   height: 48,
//   position: "relative",
//   overflow: "hidden",
//   transition: "all 0.3s ease",
//   "&.primary": {
//     background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
//     color: theme.palette.background.default,
//     border: "none",
//     "&:hover": {
//       transform: "translateY(-2px)",
//       boxShadow: "0 10px 25px rgba(0, 229, 255, 0.3)",
//     },
//   },
//   "&.secondary": {
//     border: `1px solid ${theme.palette.secondary.main}`,
//     color: theme.palette.secondary.main,
//     backgroundColor: "transparent",
//     "&:hover": {
//       backgroundColor: theme.palette.secondary.main,
//       color: theme.palette.background.default,
//       transform: "translateY(-2px)",
//     },
//   },
// }));

// const SocialButton = styled(IconButton)(({ theme }) => ({
//   width: 56,
//   height: 56,
//   backgroundColor: "rgba(13, 33, 55, 0.8)",
//   border: "1px solid rgba(255, 255, 255, 0.1)",
//   margin: theme.spacing(0.5),
//   transition: "all 0.3s ease",
//   position: "relative",
//   overflow: "hidden",
//   "&:hover": {
//     transform: "translateY(-3px) scale(1.05)",
//     borderColor: theme.palette.secondary.main,
//     backgroundColor: "rgba(0, 229, 255, 0.1)",
//     boxShadow: "0 10px 25px rgba(0, 229, 255, 0.2)",
//   },
//   "&.linkedin:hover": {
//     borderColor: "#0077b5",
//     backgroundColor: "rgba(0, 119, 181, 0.1)",
//   },
//   "&.github:hover": {
//     borderColor: "#333",
//     backgroundColor: "rgba(51, 51, 51, 0.1)",
//   },
//   "&.download:hover": {
//     borderColor: theme.palette.secondary.main,
//     backgroundColor: `rgba(0, 229, 255, 0.15)`,
//   },
// }));

// const StatusChip = styled(Chip)(({ theme }) => ({
//   fontFamily: '"Roboto Mono", monospace',
//   margin: theme.spacing(0.25),
//   height: 32,
//   fontSize: "0.8rem",
//   fontWeight: 500,
//   transition: "all 0.3s ease",
//   "&.available": {
//     backgroundColor: "rgba(76, 175, 80, 0.15)",
//     color: "#4caf50",
//     border: "1px solid rgba(76, 175, 80, 0.3)",
//   },
//   "&.info": {
//     backgroundColor: "rgba(0, 229, 255, 0.1)",
//     color: theme.palette.secondary.main,
//     border: "1px solid rgba(0, 229, 255, 0.3)",
//   },
//   "&.location": {
//     backgroundColor: "rgba(156, 39, 176, 0.15)",
//     color: "#9c27b0",
//     border: "1px solid rgba(156, 39, 176, 0.3)",
//   },
// }));

// const ContactInfo = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: theme.spacing(2),
//   padding: theme.spacing(2),
//   background: "rgba(0, 0, 0, 0.2)",
//   borderRadius: theme.spacing(1.5),
//   border: "1px solid rgba(255, 255, 255, 0.05)",
//   marginBottom: theme.spacing(2),
//   transition: "all 0.3s ease",
//   "&:hover": {
//     background: "rgba(0, 229, 255, 0.05)",
//     borderColor: "rgba(0, 229, 255, 0.2)",
//     transform: "translateX(5px)",
//   },
// }));

// const ContactAvatar = styled(Avatar)(({ theme }) => ({
//   width: 48,
//   height: 48,
//   backgroundColor: theme.palette.secondary.main,
//   color: theme.palette.background.default,
// }));

// const QuickActionBox = styled(Box)(({ theme }) => ({
//   background: `linear-gradient(135deg,
//     rgba(0, 229, 255, 0.08) 0%,
//     rgba(2, 136, 209, 0.05) 100%)`,
//   border: "1px solid rgba(0, 229, 255, 0.2)",
//   borderRadius: theme.spacing(2),
//   padding: theme.spacing(3),
//   marginBottom: theme.spacing(3),
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "2px",
//     background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
//   },
// }));

// const Contact: FC = () => {
//   const handleEmailClick = () => {
//     window.open(
//       "mailto:tezolin.edison@gmail.com?subject=Oportunidade%20de%20Trabalho%20-%20Desenvolvedor%20Full-Stack&body=Olá%20Edison,%0A%0AVi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades.%0A%0AAtenciosamente,",
//       "_blank"
//     );
//   };

//   const handleWhatsAppClick = () => {
//     window.open(
//       "https://wa.me/5541998335860?text=Olá%20Edison,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20de%20desenvolvimento",
//       "_blank"
//     );
//   };

//   const handleLinkedInClick = () => {
//     window.open("https://www.linkedin.com/in/etezolin", "_blank");
//   };

//   return (
//     <Container sx={{ py: 8 }} id="contact">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Typography variant="h2" sx={{ mb: 6, color: "primary.main" }}>
//           // Vamos Conversar?
//         </Typography>

//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <HeroCard sx={{ mb: 4 }}>
//             <Box sx={{ textAlign: "center", mb: 4 }}>
//               <RocketIcon
//                 sx={{
//                   fontSize: 64,
//                   color: "secondary.main",
//                   mb: 2,
//                   filter: "drop-shadow(0 4px 8px rgba(0, 229, 255, 0.3))",
//                 }}
//               />
//               <Typography
//                 variant="h4"
//                 sx={{
//                   fontFamily: '"Roboto Mono", monospace',
//                   color: "secondary.main",
//                   mb: 2,
//                   fontWeight: 600,
//                 }}
//               >
//                 Pronto para Novos Desafios
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "text.primary",
//                   opacity: 0.9,
//                   lineHeight: 1.6,
//                   maxWidth: 600,
//                   mx: "auto",
//                 }}
//               >
//                 Desenvolvedor Full-Stack especializado em .NET e React,
//                 disponível para projetos que fazem a diferença
//               </Typography>
//             </Box>

//             {/* Quick Actions */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 flexWrap: "wrap",
//                 gap: 2,
//                 mb: 3,
//               }}
//             >
//               <ActionButton
//                 className="primary"
//                 startIcon={<EmailIcon />}
//                 onClick={handleEmailClick}
//               >
//                 Enviar Email
//               </ActionButton>
//               <ActionButton
//                 className="secondary"
//                 startIcon={<MessageIcon />}
//                 onClick={handleWhatsAppClick}
//               >
//                 WhatsApp
//               </ActionButton>
//               <ActionButton
//                 className="secondary"
//                 startIcon={<CalendarTodayIcon />}
//                 onClick={handleLinkedInClick}
//               >
//                 LinkedIn
//               </ActionButton>
//             </Box>

//             {/* Status Chips */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 flexWrap: "wrap",
//                 gap: 1,
//               }}
//             >
//               <StatusChip
//                 className="available"
//                 icon={<CheckCircleIcon />}
//                 label="Disponível Imediatamente"
//               />
//               <StatusChip
//                 className="location"
//                 icon={<LocationOnIcon />}
//                 label="Remoto ou Curitiba/PR"
//               />
//               <StatusChip
//                 className="info"
//                 icon={<VideocamIcon />}
//                 label="Entrevistas Online"
//               />
//             </Box>
//           </HeroCard>
//         </motion.div>

//         {/* Contact Details Grid */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
//             gap: 4,
//           }}
//         >
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <ContactCard>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontFamily: '"Roboto Mono", monospace',
//                   color: "secondary.main",
//                   mb: 3,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <EmailIcon />
//                 Informações de Contato
//               </Typography>

//               <ContactInfo>
//                 <ContactAvatar>
//                   <EmailIcon />
//                 </ContactAvatar>
//                 <Box>
//                   <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
//                     Email Principal
//                   </Typography>
//                   <Link
//                     href="mailto:tezolin.edison@gmail.com"
//                     sx={{
//                       color: "secondary.main",
//                       textDecoration: "none",
//                       fontFamily: '"Roboto Mono", monospace',
//                       fontSize: "0.95rem",
//                       "&:hover": { textDecoration: "underline" },
//                     }}
//                   >
//                     tezolin.edison@gmail.com
//                   </Link>
//                 </Box>
//               </ContactInfo>

//               <ContactInfo>
//                 <ContactAvatar>
//                   <PhoneIcon />
//                 </ContactAvatar>
//                 <Box>
//                   <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
//                     WhatsApp / Telefone
//                   </Typography>
//                   <Link
//                     href="https://wa.me/5541998335860"
//                     target="_blank"
//                     sx={{
//                       color: "secondary.main",
//                       textDecoration: "none",
//                       fontFamily: '"Roboto Mono", monospace',
//                       fontSize: "0.95rem",
//                       "&:hover": { textDecoration: "underline" },
//                     }}
//                   >
//                     (41) 99833-5860
//                   </Link>
//                 </Box>
//               </ContactInfo>

//               <Divider
//                 sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }}
//               />

//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontFamily: '"Roboto Mono", monospace',
//                   mb: 2,
//                   color: "text.primary",
//                 }}
//               >
//                 Links Profissionais
//               </Typography>

//               <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//                 <Tooltip title="LinkedIn - Perfil Profissional" arrow>
//                   <SocialButton
//                     className="linkedin"
//                     onClick={() =>
//                       window.open(
//                         "https://www.linkedin.com/in/etezolin",
//                         "_blank"
//                       )
//                     }
//                   >
//                     <LinkedInIcon sx={{ fontSize: 24 }} />
//                   </SocialButton>
//                 </Tooltip>

//                 <Tooltip title="GitHub - Repositórios de Código" arrow>
//                   <SocialButton
//                     className="github"
//                     onClick={() =>
//                       window.open("https://github.com/etezolin", "_blank")
//                     }
//                   >
//                     <GitHubIcon sx={{ fontSize: 24 }} />
//                   </SocialButton>
//                 </Tooltip>

//                 <Tooltip title="Download CV em PDF" arrow>
//                   <SocialButton className="download">
//                     <Link
//                       href="/Curriculum_Edison_Tezolin.pdf"
//                       download
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         color: "inherit",
//                       }}
//                     >
//                       <DownloadIcon sx={{ fontSize: 24 }} />
//                     </Link>
//                   </SocialButton>
//                 </Tooltip>
//               </Box>
//             </ContactCard>
//           </motion.div>

//           {/* Availability & Preferences */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <ContactCard>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontFamily: '"Roboto Mono", monospace',
//                   color: "secondary.main",
//                   mb: 3,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <ScheduleIcon />
//                 Disponibilidade
//               </Typography>

//               <QuickActionBox>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     color: "secondary.main",
//                     mb: 2,
//                   }}
//                 >
//                   // Horários Preferenciais
//                 </Typography>
//                 <Box
//                   sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
//                 >
//                   <StatusChip
//                     className="info"
//                     icon={<ScheduleIcon />}
//                     label="Segunda a Sexta: 08h00 às 18h00"
//                     sx={{ justifyContent: "flex-start", width: "100%" }}
//                   />
//                   <StatusChip
//                     className="info"
//                     icon={<VideocamIcon />}
//                     label="Entrevistas online preferenciais"
//                     sx={{ justifyContent: "flex-start", width: "100%" }}
//                   />
//                   <StatusChip
//                     className="available"
//                     icon={<CheckCircleIcon />}
//                     label="Resposta em até 24h"
//                     sx={{ justifyContent: "flex-start", width: "100%" }}
//                   />
//                 </Box>
//               </QuickActionBox>

//               <Box sx={{ mb: 3 }}>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     mb: 2,
//                     color: "text.primary",
//                   }}
//                 >
//                   Oportunidades de Interesse
//                 </Typography>
//                 <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
//                   <StatusChip
//                     className="info"
//                     label="Desenvolvedor Full-Stack"
//                   />
//                   <StatusChip className="info" label="Arquiteto de Soluções" />
//                   <StatusChip className="info" label="Tech Lead" />
//                   <StatusChip className="info" label="Projetos .NET + React" />
//                 </Box>
//               </Box>

//               <Box
//                 sx={{
//                   p: 3,
//                   background: "rgba(0, 0, 0, 0.2)",
//                   borderRadius: 2,
//                   border: "1px solid rgba(0, 229, 255, 0.1)",
//                 }}
//               >
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontFamily: '"Roboto Mono", monospace',
//                     fontSize: "0.9rem",
//                     color: "text.primary",
//                     lineHeight: 1.7,
//                     textAlign: "center",
//                     fontStyle: "italic",
//                   }}
//                 >
//                   "Combinando expertise técnica com visão estratégica para criar
//                   soluções que realmente fazem a diferença. Vamos construir algo
//                   incrível juntos!"
//                 </Typography>
//               </Box>
//             </ContactCard>
//           </motion.div>
//         </Box>
//       </motion.div>
//     </Container>
//   );
// };

// export default Contact;

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
  Button,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VideocamIcon from "@mui/icons-material/Videocam";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import RocketIcon from "@mui/icons-material/Rocket";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MessageIcon from "@mui/icons-material/Message";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const HeroCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  background: `linear-gradient(135deg, 
    rgba(13, 33, 55, 0.9) 0%, 
    rgba(0, 20, 40, 0.8) 50%, 
    rgba(13, 33, 55, 0.9) 100%)`,
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(0, 229, 255, 0.2)",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  borderRadius: theme.spacing(2),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: "rgba(13, 33, 55, 0.6)",
  backdropFilter: "blur(15px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: theme.spacing(2),
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: theme.palette.secondary.main,
    boxShadow: "0 15px 40px rgba(0, 229, 255, 0.15)",
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  fontSize: "0.95rem",
  textTransform: "none",
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1.5, 3),
  margin: theme.spacing(0.5),
  minWidth: 160,
  height: 48,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&.primary": {
    background: `linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #e55039 100%)`,
    color: "#ffffff",
    border: "none",
    boxShadow: "0 4px 15px rgba(238, 90, 36, 0.3)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(238, 90, 36, 0.4)",
      background: `linear-gradient(135deg, #ff7675 0%, #e84393 50%, #fd79a8 100%)`,
    },
  },
  "&.whatsapp": {
    background: `linear-gradient(135deg, #25d366 0%, #128c7e 50%, #075e54 100%)`,
    color: "#ffffff",
    border: "none",
    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(37, 211, 102, 0.4)",
      background: `linear-gradient(135deg, #2dd4bf 0%, #14b8a6 50%, #0f766e 100%)`,
    },
  },
  "&.linkedin": {
    background: `linear-gradient(135deg, #0077b5 0%, #005885 50%, #004466 100%)`,
    color: "#ffffff",
    border: "none",
    boxShadow: "0 4px 15px rgba(0, 119, 181, 0.3)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(0, 119, 181, 0.4)",
      background: `linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)`,
    },
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  width: 56,
  height: 56,
  backgroundColor: "rgba(13, 33, 55, 0.8)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  margin: theme.spacing(0.5),
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-3px) scale(1.05)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
  },
  "&.linkedin": {
    color: "#0077b5",
    "&:hover": {
      borderColor: "#0077b5",
      backgroundColor: "rgba(0, 119, 181, 0.1)",
      boxShadow: "0 10px 25px rgba(0, 119, 181, 0.3)",
    },
  },
  "&.github": {
    color: "#f5f5f5",
    "&:hover": {
      borderColor: "#666",
      backgroundColor: "rgba(102, 102, 102, 0.1)",
      boxShadow: "0 10px 25px rgba(102, 102, 102, 0.2)",
    },
  },
  "&.download": {
    color: theme.palette.secondary.main,
    "&:hover": {
      borderColor: theme.palette.secondary.main,
      backgroundColor: "rgba(0, 229, 255, 0.15)",
      boxShadow: "0 10px 25px rgba(0, 229, 255, 0.3)",
    },
  },
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  fontFamily: '"Roboto Mono", monospace',
  margin: theme.spacing(0.25),
  height: 32,
  fontSize: "0.8rem",
  fontWeight: 500,
  transition: "all 0.3s ease",
  "&.available": {
    backgroundColor: "rgba(76, 175, 80, 0.15)",
    color: "#4caf50",
    border: "1px solid rgba(76, 175, 80, 0.3)",
  },
  "&.info": {
    backgroundColor: "rgba(0, 229, 255, 0.1)",
    color: theme.palette.secondary.main,
    border: "1px solid rgba(0, 229, 255, 0.3)",
  },
  "&.location": {
    backgroundColor: "rgba(156, 39, 176, 0.15)",
    color: "#9c27b0",
    border: "1px solid rgba(156, 39, 176, 0.3)",
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  background: "rgba(0, 0, 0, 0.2)",
  borderRadius: theme.spacing(1.5),
  border: "1px solid rgba(255, 255, 255, 0.05)",
  marginBottom: theme.spacing(2),
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(0, 229, 255, 0.05)",
    borderColor: "rgba(0, 229, 255, 0.2)",
    transform: "translateX(5px)",
  },
}));

const ContactIcon = styled(Box)(() => ({
  width: 48,
  height: 48,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  "&.email": {
    backgroundColor: "rgba(244, 67, 54, 0.15)",
    border: "1px solid rgba(244, 67, 54, 0.3)",
    color: "#f44336",
  },
  "&.phone": {
    backgroundColor: "rgba(76, 175, 80, 0.15)",
    border: "1px solid rgba(76, 175, 80, 0.3)",
    color: "#4caf50",
  },
}));

const QuickActionBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    rgba(0, 229, 255, 0.08) 0%, 
    rgba(2, 136, 209, 0.05) 100%)`,
  border: "1px solid rgba(0, 229, 255, 0.2)",
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "2px",
    background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  },
}));

const Contact: FC = () => {
  const handleEmailClick = () => {
    window.open(
      "mailto:tezolin.edison@gmail.com?subject=Oportunidade%20de%20Trabalho%20-%20Desenvolvedor%20Full-Stack&body=Olá%20Edison,%0A%0AVi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades.%0A%0AAtenciosamente,",
      "_blank"
    );
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5541998335860?text=Olá%20Edison,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20de%20desenvolvimento",
      "_blank"
    );
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/etezolin", "_blank");
  };

  return (
    <Container sx={{ py: 8 }} id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 6, color: "primary.main" }}>
          // Vamos Conversar?
        </Typography>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <HeroCard sx={{ mb: 4 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <RocketIcon
                sx={{
                  fontSize: 64,
                  color: "secondary.main",
                  mb: 2,
                  filter: "drop-shadow(0 4px 8px rgba(0, 229, 255, 0.3))",
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  color: "secondary.main",
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Pronto para Novos Desafios
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  opacity: 0.9,
                  lineHeight: 1.6,
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                Desenvolvedor Full-Stack especializado em .NET e React,
                disponível para projetos que fazem a diferença
              </Typography>
            </Box>

            {/* Quick Actions */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
                mb: 3,
              }}
            >
              <ActionButton
                className="primary"
                startIcon={<EmailIcon />}
                onClick={handleEmailClick}
              >
                Enviar Email
              </ActionButton>
              <ActionButton
                className="whatsapp"
                startIcon={<MessageIcon />}
                onClick={handleWhatsAppClick}
              >
                WhatsApp
              </ActionButton>
              <ActionButton
                className="linkedin"
                startIcon={<CalendarTodayIcon />}
                onClick={handleLinkedInClick}
              >
                LinkedIn
              </ActionButton>
            </Box>

            {/* Status Chips */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <StatusChip
                className="available"
                icon={<CheckCircleIcon />}
                label="Disponível Imediatamente"
              />
              <StatusChip
                className="location"
                icon={<LocationOnIcon />}
                label="Remoto ou Curitiba/PR"
              />
              <StatusChip
                className="info"
                icon={<VideocamIcon />}
                label="Entrevistas Online"
              />
            </Box>
          </HeroCard>
        </motion.div>

        {/* Contact Details Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 4,
          }}
        >
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactCard>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  color: "secondary.main",
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <EmailIcon />
                Informações de Contato
              </Typography>

              <ContactInfo>
                <ContactIcon className="email">
                  <EmailIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Email Principal
                  </Typography>
                  <Link
                    href="mailto:tezolin.edison@gmail.com"
                    sx={{
                      color: "#f44336",
                      textDecoration: "none",
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: "0.95rem",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#d32f2f",
                      },
                    }}
                  >
                    tezolin.edison@gmail.com
                  </Link>
                </Box>
              </ContactInfo>

              <ContactInfo>
                <ContactIcon className="phone">
                  <PhoneIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    WhatsApp / Telefone
                  </Typography>
                  <Link
                    href="https://wa.me/5541998335860"
                    target="_blank"
                    sx={{
                      color: "#4caf50",
                      textDecoration: "none",
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: "0.95rem",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#388e3c",
                      },
                    }}
                  >
                    (41) 99833-5860
                  </Link>
                </Box>
              </ContactInfo>

              <Divider
                sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }}
              />

              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  mb: 2,
                  color: "text.primary",
                }}
              >
                Links Profissionais
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Tooltip title="LinkedIn - Perfil Profissional" arrow>
                  <SocialButton
                    className="linkedin"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/etezolin",
                        "_blank"
                      )
                    }
                  >
                    <LinkedInIcon sx={{ fontSize: 24 }} />
                  </SocialButton>
                </Tooltip>

                <Tooltip title="GitHub - Repositórios de Código" arrow>
                  <SocialButton
                    className="github"
                    onClick={() =>
                      window.open("https://github.com/etezolin", "_blank")
                    }
                  >
                    <GitHubIcon sx={{ fontSize: 24 }} />
                  </SocialButton>
                </Tooltip>

                <Tooltip title="Download CV em PDF" arrow>
                  <SocialButton className="download">
                    <Link
                      href="/Curriculum_Edison_Tezolin.pdf"
                      download
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "inherit",
                      }}
                    >
                      <DownloadIcon sx={{ fontSize: 24 }} />
                    </Link>
                  </SocialButton>
                </Tooltip>
              </Box>
            </ContactCard>
          </motion.div>

          {/* Availability & Preferences */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactCard>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: '"Roboto Mono", monospace',
                  color: "secondary.main",
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <ScheduleIcon />
                Disponibilidade
              </Typography>

              <QuickActionBox>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    color: "secondary.main",
                    mb: 2,
                  }}
                >
                  // Horários Preferenciais
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  <StatusChip
                    className="info"
                    icon={<ScheduleIcon />}
                    label="Segunda a Sexta: 08h00 às 18h00"
                    sx={{ justifyContent: "flex-start", width: "100%" }}
                  />
                  <StatusChip
                    className="info"
                    icon={<VideocamIcon />}
                    label="Entrevistas online preferenciais"
                    sx={{ justifyContent: "flex-start", width: "100%" }}
                  />
                  <StatusChip
                    className="available"
                    icon={<CheckCircleIcon />}
                    label="Resposta em até 24h"
                    sx={{ justifyContent: "flex-start", width: "100%" }}
                  />
                </Box>
              </QuickActionBox>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    mb: 2,
                    color: "text.primary",
                  }}
                >
                  Oportunidades de Interesse
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <StatusChip
                    className="info"
                    label="Desenvolvedor Full-Stack"
                  />
                  <StatusChip className="info" label="Arquiteto de Soluções" />
                  <StatusChip className="info" label="Tech Lead" />
                  <StatusChip className="info" label="Projetos .NET + React" />
                </Box>
              </Box>

              <Box
                sx={{
                  p: 3,
                  background: "rgba(0, 0, 0, 0.2)",
                  borderRadius: 2,
                  border: "1px solid rgba(0, 229, 255, 0.1)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: "0.9rem",
                    color: "text.primary",
                    lineHeight: 1.7,
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  "Combinando expertise técnica com visão estratégica para criar
                  soluções que realmente fazem a diferença. Vamos construir algo
                  incrível juntos!"
                </Typography>
              </Box>
            </ContactCard>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
