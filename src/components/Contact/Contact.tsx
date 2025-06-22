import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";
import RocketIcon from "@mui/icons-material/Rocket";
import ScheduleIcon from "@mui/icons-material/Schedule";
import VideocamIcon from "@mui/icons-material/Videocam";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import type { FC } from "react";
// ✅ Import do hook traduzido
import { useTypedTranslation } from "../../hooks/useTranslation";

// ✅ Funções de analytics
import {
  trackProfileConversion,
  trackProfileTabInteraction,
} from "../../firebase";

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
  height: "100%",
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
  cursor: "pointer",
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
  cursor: "pointer",
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
  cursor: "pointer",
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
  cursor: "pointer",
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
}));

const Contact: FC = () => {
  // ✅ Hook de tradução
  const { t } = useTypedTranslation();

  // Funções para rastrear diferentes tipos de contato
  const handleEmailClick = () => {
    trackProfileTabInteraction("contact", "contact_method_click", "email");
    trackProfileConversion("email_contact", "contact");
    window.open(
      "mailto:tezolin.edison@gmail.com?subject=Oportunidade%20de%20Trabalho%20-%20Desenvolvedor%20Full-Stack&body=Olá%20Edison,%0A%0AVi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades.%0A%0AAtenciosamente,",
      "_blank"
    );
  };

  const handleWhatsAppClick = () => {
    trackProfileTabInteraction("contact", "contact_method_click", "whatsapp");
    trackProfileConversion("whatsapp_contact", "contact");
    window.open(
      "https://wa.me/5541998335860?text=Olá%20Edison,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20oportunidades%20de%20desenvolvimento",
      "_blank"
    );
  };

  const handleLinkedInClick = () => {
    trackProfileTabInteraction("contact", "social_link_click", "linkedin");
    trackProfileConversion("linkedin_visit", "contact");
    window.open("https://www.linkedin.com/in/etezolin", "_blank");
  };

  const handleGitHubClick = () => {
    trackProfileTabInteraction("contact", "social_link_click", "github");
    trackProfileConversion("github_visit", "contact");
    window.open("https://github.com/etezolin", "_blank");
  };

  const handleCVDownload = () => {
    trackProfileTabInteraction("contact", "cv_download", "pdf");
    trackProfileConversion("cv_download", "contact");
  };

  const handleDirectEmailClick = () => {
    trackProfileTabInteraction("contact", "direct_contact_click", "email_link");
    trackProfileConversion("direct_email_contact", "contact");
  };

  const handleDirectPhoneClick = () => {
    trackProfileTabInteraction("contact", "direct_contact_click", "phone_link");
    trackProfileConversion("phone_contact", "contact");
  };

  const handleStatusChipClick = (chipType: string, label: string) => {
    trackProfileTabInteraction(
      "contact",
      "status_chip_click",
      `${chipType}_${label}`
    );
  };

  const handleOpportunityChipClick = (opportunity: string) => {
    trackProfileTabInteraction("contact", "opportunity_interest", opportunity);
  };

  const handleHeroIconClick = () => {
    trackProfileTabInteraction("contact", "hero_icon_click", "rocket");
  };

  const handleQuoteClick = () => {
    trackProfileTabInteraction(
      "contact",
      "quote_click",
      "professional_message"
    );
  };

  return (
    <Container sx={{ py: 8 }} component="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h2" sx={{ mb: 6, color: "primary.main" }}>
          {t('contactTitle')}
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
                  cursor: "pointer",
                }}
                onClick={handleHeroIconClick}
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
                {t('readyForChallenges')}
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
                {t('heroDescription')}
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
                {t('sendEmail')}
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
                label={t('availableImmediately')}
                onClick={() =>
                  handleStatusChipClick("availability", "immediate")
                }
              />
              <StatusChip
                className="location"
                icon={<LocationOnIcon />}
                label={t('remoteOrCuritiba')}
                onClick={() =>
                  handleStatusChipClick("location", "remote_curitiba")
                }
              />
              <StatusChip
                className="info"
                icon={<VideocamIcon />}
                label={t('onlineInterviews')}
                onClick={() => handleStatusChipClick("interview", "online")}
              />
            </Box>
          </HeroCard>
        </motion.div>

        {/* Contact Details */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
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
                {t('contactInformation')}
              </Typography>

              <ContactInfo onClick={handleDirectEmailClick}>
                <ContactIcon className="email">
                  <EmailIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {t('primaryEmail')}
                  </Typography>
                  <Link
                    href="mailto:tezolin.edison@gmail.com"
                    sx={{
                      color: "#f44336",
                      textDecoration: "none",
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: { xs: "0.8rem", sm: "0.95rem" },
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

              <ContactInfo onClick={handleDirectPhoneClick}>
                <ContactIcon className="phone">
                  <PhoneIcon />
                </ContactIcon>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {t('whatsappPhone')}
                  </Typography>
                  <Link
                    href="https://wa.me/5541998335860"
                    target="_blank"
                    sx={{
                      color: "#4caf50",
                      textDecoration: "none",
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: { xs: "0.8rem", sm: "0.95rem" },
                      transition: "all 0.3s ease",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#388e3c",
                      },
                    }}
                  >
                    +55 41 99833-5860
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
                {t('professionalLinks')}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Tooltip title={t('linkedinTooltip')} arrow>
                  <SocialButton
                    className="linkedin"
                    onClick={handleLinkedInClick}
                  >
                    <LinkedInIcon sx={{ fontSize: 24 }} />
                  </SocialButton>
                </Tooltip>

                <Tooltip title={t('githubTooltip')} arrow>
                  <SocialButton className="github" onClick={handleGitHubClick}>
                    <GitHubIcon sx={{ fontSize: 24 }} />
                  </SocialButton>
                </Tooltip>

                <Tooltip title={t('downloadCvTooltip')} arrow>
                  <SocialButton className="download" onClick={handleCVDownload}>
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
                {t('availability')}
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
                  {t('preferredSchedule')}
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  <StatusChip
                    className="info"
                    icon={<ScheduleIcon />}
                    label={t('weekdaysSchedule')}
                    sx={{ justifyContent: "flex-start", width: "100%" }}
                    onClick={() =>
                      handleStatusChipClick("schedule", "weekdays_8_18")
                    }
                  />
                  <StatusChip
                    className="info"
                    icon={<VideocamIcon />}
                    label={t('onlineInterviewsPreferred')}
                    sx={{ justifyContent: "flex-start", width: "100%" }}
                    onClick={() =>
                      handleStatusChipClick("interview_preference", "online")
                    }
                  />
                  <StatusChip
                    className="available"
                    icon={<CheckCircleIcon />}
                    label={t('responseTime24h')}
                    sx={{ justifyContent: "flex-start", width: "100%" }}
                    onClick={() =>
                      handleStatusChipClick("response_time", "24h")
                    }
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
                  {t('opportunitiesOfInterest')}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <StatusChip
                    className="info"
                    label={t('fullStackDeveloper')}
                    onClick={() =>
                      handleOpportunityChipClick("full_stack_developer")
                    }
                  />
                  <StatusChip
                    className="info"
                    label={t('solutionsArchitect')}
                    onClick={() =>
                      handleOpportunityChipClick("solutions_architect")
                    }
                  />
                  <StatusChip
                    className="info"
                    label={t('techLead')}
                    onClick={() => handleOpportunityChipClick("tech_lead")}
                  />
                  <StatusChip
                    className="info"
                    label={t('dotnetReactProjects')}
                    onClick={() =>
                      handleOpportunityChipClick("dotnet_react_projects")
                    }
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  p: 3,
                  background: "rgba(0, 0, 0, 0.2)",
                  borderRadius: 2,
                  border: "1px solid rgba(0, 229, 255, 0.1)",
                  cursor: "pointer",
                }}
                onClick={handleQuoteClick}
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
                  {t('professionalQuote')}
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
