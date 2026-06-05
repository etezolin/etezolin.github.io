import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ExploreIcon from '@mui/icons-material/Explore';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketIcon from '@mui/icons-material/Rocket';
import SchoolIcon from '@mui/icons-material/School';
import TargetIcon from '@mui/icons-material/TrackChanges';
import { Box, Card, Container, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const GlassCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(20px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
  borderRadius: 14,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)'
      : '0 4px 24px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 70%, transparent 100%)`,
    opacity: 0.45,
  },
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.25),
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 8px 48px rgba(0,0,0,0.55), 0 0 30px rgba(51,153,255,0.06)'
        : '0 8px 32px rgba(15,23,42,0.12)',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(2), borderRadius: 10 },
}));

const HighlightTextV2 = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontWeight: 600,
}));

const GoalItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1.5, 0),
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
  '&:last-of-type': { borderBottom: 'none' },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginRight: theme.spacing(2),
  marginTop: '2px',
  flexShrink: 0,
}));

const Goal = styled(Typography)(({ theme }) => ({
  flex: 1,
  color: theme.palette.text.primary,
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.9rem',
  lineHeight: 1.75,
  '& ul': { paddingLeft: theme.spacing(2) },
  '& li': { marginBottom: theme.spacing(0.5) },
}));

const TerminalBlock = styled(Box)({
  marginTop: 24,
  borderRadius: 10,
  overflow: 'hidden',
  border: '1px solid rgba(51, 153, 255, 0.15)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
});

const TerminalBlockHeader = styled(Box)({
  background: 'rgba(0, 0, 0, 0.55)',
  padding: '9px 14px',
  display: 'flex',
  alignItems: 'center',
  gap: 7,
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  userSelect: 'none',
});

const TerminalBlockBody = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(2, 6, 14, 0.97)',
  padding: theme.spacing(2, 2.5),
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.88rem',
  lineHeight: 1.75,
  overflowX: 'auto',
}));

const KeywordText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.light,
  fontWeight: 600,
}));

const StringText = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.light,
}));

const CommentCodeText = styled('span')({
  color: '#6a9955',
  fontStyle: 'italic',
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About: FC = () => {
  return (
    <Container sx={{ minHeight: '100vh', py: 8 }} id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              backgroundImage: (t) =>
                `linear-gradient(135deg, ${t.palette.primary.light} 0%, ${t.palette.primary.main} 40%, ${t.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2rem' },
            }}
          >
            // Bio
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <LightbulbIcon sx={{ color: 'secondary.main', flexShrink: 0, mt: 0.25 }} />
              <Typography
                variant="body1"
                sx={{ fontFamily: '"Roboto Mono", monospace', fontSize: '0.9rem', lineHeight: 1.8 }}
              >
                Desenvolvedor Full-Stack com experiência em{' '}
                <HighlightTextV2>arquitetar</HighlightTextV2> e{' '}
                <HighlightTextV2>implementar</HighlightTextV2> soluções tecnológicas escaláveis.
                Especializado em .NET, React, TypeScript e Node.js, com conhecimento em arquiteturas
                de microsserviços e aplicações cloud-native no Google Cloud.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <SchoolIcon sx={{ color: 'secondary.main', flexShrink: 0, mt: 0.25 }} />
              <Typography
                variant="body1"
                sx={{ fontFamily: '"Roboto Mono", monospace', fontSize: '0.9rem', lineHeight: 1.8 }}
              >
                Minha formação multidisciplinar em{' '}
                <HighlightTextV2>Análise e Desenvolvimento de Sistemas</HighlightTextV2> e{' '}
                <HighlightTextV2>Filosofia</HighlightTextV2> me permite abordar desafios técnicos
                com pensamento crítico e visão holística. Atualmente, estou ampliando minhas
                competências com estudos em <HighlightTextV2>Ciência de Dados</HighlightTextV2> na
                UTFPR, explorando análise avançada de dados e machine learning.
              </Typography>
            </Box>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <EngineeringIcon sx={{ color: 'secondary.main', flexShrink: 0, mt: 0.25 }} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  Ao longo da minha carreira, trabalhei no desenvolvimento de projetos,
                  implementando práticas de CI/CD, test-driven development e integração contínua.
                  Minha experiência prévia como professor me proporcionou excelentes habilidades de
                  comunicação e capacidade de traduzir conceitos técnicos complexos para
                  stakeholders não-técnicos.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                  }}
                >
                  Busco constantemente novos desafios onde possa aplicar minhas habilidades técnicas
                  e criativas para desenvolver soluções inovadoras que não apenas atendam aos
                  requisitos de negócio, mas também proporcionem experiências excepcionais para os
                  usuários finais.
                </Typography>
              </Box>
            </Box>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <CodeIcon sx={{ color: 'secondary.main', flexShrink: 0, mt: 0.25 }} />
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.88rem',
                    mb: 2,
                  }}
                >
                  Falando em combinar tecnologia e filosofia, uma vez eu estava explicando loops
                  while usando o Mito de Sísifo de Camus como analogia, dizendo:
                </Typography>
                <Box
                  sx={{
                    bgcolor: (t) =>
                      t.palette.mode === 'dark' ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.06)',
                    p: 2,
                    borderRadius: 2,
                    mb: 2,
                    border: (t) => `1px solid ${alpha(t.palette.primary.main, 0.1)}`,
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.88rem',
                    color: 'text.primary',
                    fontStyle: 'italic',
                  }}
                >
                  "Imagine Sísifo programando — ele incorporaria o loop infinito perfeito!"
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.88rem',
                  }}
                >
                  Um aluno confuso perguntou: "Professor, não seria mais fácil para ele usar um
                  break statement em vez de empurrar a pedra eternamente?" Às vezes, até dilemas
                  existenciais podem ser resolvidos com um pouco de programação!
                </Typography>
              </Box>
            </Box>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontFamily: '"Roboto Mono", monospace',
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.15rem' },
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: '3px',
                  height: '1em',
                  background: 'linear-gradient(180deg, #3399ff, #00e676)',
                  borderRadius: '2px',
                  flexShrink: 0,
                },
              }}
            >
              Objetivos Profissionais
            </Typography>

            <GoalItem>
              <IconWrapper>
                <TargetIcon />
              </IconWrapper>
              <Goal>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontSize: '0.95rem',
                    fontFamily: '"Roboto Mono", monospace',
                    color: 'text.primary',
                    fontWeight: 600,
                  }}
                >
                  Oportunidades que busco
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 1,
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.88rem',
                    lineHeight: 1.75,
                  }}
                >
                  Procuro posições de <HighlightTextV2>Desenvolvedor Full-Stack</HighlightTextV2> ou{' '}
                  <HighlightTextV2>Especialista em Arquitetura</HighlightTextV2> onde possa aplicar
                  minha experiência em:
                </Typography>
                <Box
                  component="ul"
                  sx={{ pl: 2, '& li': { fontSize: '0.88rem', lineHeight: 1.75 } }}
                >
                  <Box component="li">
                    Arquitetar e desenvolver soluções escaláveis em ambientes cloud;
                  </Box>
                  <Box component="li">Trabalhar com integração de sistemas e microsserviços;</Box>
                  <Box component="li">Otimizar performance e modernizar sistemas legados;</Box>
                  <Box component="li">
                    Desenhar e orquestrar integrações entre sistemas e microsserviços.
                  </Box>
                </Box>
              </Goal>
            </GoalItem>

            <GoalItem>
              <IconWrapper>
                <RocketIcon />
              </IconWrapper>
              <Goal>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontSize: '0.95rem',
                    fontFamily: '"Roboto Mono", monospace',
                    color: 'text.primary',
                    fontWeight: 600,
                  }}
                >
                  Tecnologias e projetos de interesse
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 1,
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.88rem',
                    lineHeight: 1.75,
                  }}
                >
                  Busco me aprofundar nas seguintes áreas e tecnologias:
                </Typography>
                <Box
                  component="ul"
                  sx={{ pl: 2, '& li': { fontSize: '0.88rem', lineHeight: 1.75 } }}
                >
                  <Box component="li">
                    <HighlightTextV2>Arquiteturas cloud-native</HighlightTextV2> e infraestrutura
                    como código (IaC) com Terraform;
                  </Box>
                  <Box component="li">
                    <HighlightTextV2>Event-driven architecture</HighlightTextV2> com Kafka,
                    RabbitMQ, sistemas de mensageria e padrões CQRS;
                  </Box>
                  <Box component="li">
                    <HighlightTextV2>CI/CD avançado</HighlightTextV2> e práticas DevSecOps com
                    GitHub Actions, Docker e Kubernetes;
                  </Box>
                  <Box component="li">
                    <HighlightTextV2>Observabilidade e monitoramento</HighlightTextV2> de sistemas
                    distribuídos com telemetria unificada;
                  </Box>
                  <Box component="li">
                    Aplicação de <HighlightTextV2>Data Science e ML</HighlightTextV2> em soluções de
                    negócio.
                  </Box>
                </Box>
              </Goal>
            </GoalItem>

            <GoalItem>
              <IconWrapper>
                <ExploreIcon />
              </IconWrapper>
              <Goal>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontSize: '0.95rem',
                    fontFamily: '"Roboto Mono", monospace',
                    color: 'text.primary',
                    fontWeight: 600,
                  }}
                >
                  Disponibilidade e modalidade
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.88rem',
                    lineHeight: 1.75,
                  }}
                >
                  Estou disponível para trabalho <HighlightTextV2>remoto</HighlightTextV2> ou{' '}
                  <HighlightTextV2>híbrido</HighlightTextV2> em Curitiba/PR. Aberto a relocalização
                  para projetos especiais.
                </Typography>
              </Goal>
            </GoalItem>

            <TerminalBlock>
              <TerminalBlockHeader>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ff5f57' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#febc2e' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#28c840' }} />
                <Typography
                  sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.72rem',
                    color: 'rgba(255,255,255,0.3)',
                    ml: 0.5,
                    flex: 1,
                    textAlign: 'center',
                  }}
                >
                  careerGoals.ts
                </Typography>
              </TerminalBlockHeader>
              <TerminalBlockBody>
                <KeywordText>function</KeywordText> careerGoals() {'{'}
                <br />
                &nbsp;&nbsp;
                <CommentCodeText>
                  // Combinação única de habilidades técnicas e visão estratégica
                </CommentCodeText>
                <br />
                &nbsp;&nbsp;<KeywordText>const</KeywordText> ideal = {'{'}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;environment:{' '}
                <StringText>"Inovador e colaborativo"</StringText>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;workType: <StringText>"Remoto ou híbrido"</StringText>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;focus:{' '}
                <StringText>"Soluções de alto impacto com tecnologias modernas"</StringText>
                <br />
                &nbsp;&nbsp;{'}'};<br />
                <br />
                &nbsp;&nbsp;<KeywordText>return</KeywordText>{' '}
                <StringText>
                  "Busco aplicar minha combinação de conhecimentos técnicos e pensamento crítico
                  para criar soluções que façam diferença."
                </StringText>
                ;<br />
                {'}'}
              </TerminalBlockBody>
            </TerminalBlock>
          </GlassCard>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;
