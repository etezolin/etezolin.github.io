import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Box, Paper, Grid, Chip, Button } from '@mui/material';

const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(135deg, #0a192f 0%, #0f2942 50%, #0f1c2d 100%)`,

  // Grade com linhas finas brancas
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    right: '-50%',
    bottom: '-50%',
    background: `
      repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px),
      repeating-linear-gradient(-45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50px)
    `,
    transform: 'perspective(1000px) rotateX(30deg)',
    animation: 'move 15s linear infinite',
  },

  // Efeito de brilho verde/azul
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 50% 120%, rgba(20,184,166,0.15), transparent 60%),
      radial-gradient(circle at 80% 20%, rgba(49,46,129,0.2), transparent 50%)
    `,
    pointerEvents: 'none',
  },

  '@keyframes move': {
    '0%': {
      transform: 'perspective(1000px) rotateX(30deg) translateY(0)',
    },
    '100%': {
      transform: 'perspective(1000px) rotateX(30deg) translateY(50px)',
    },
  },
}));

// Pontos suaves simulando estrelas distantes
const StarsOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `radial-gradient(white 0.5px, transparent 1px)`,
  backgroundSize: '50px 50px',
  opacity: 0.05,
});

const CodeComment = styled(Typography)({
  color: '#4A5568',
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  '&::before': {
    content: '"// "',
    color: '#4A5568',
  },
});

const CodeVariable = styled(Typography)({
  color: '#81A1C1',
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  '&::before': {
    content: '"const "',
    color: '#4A5568',
  },
});

const CodeString = styled('span')({
  color: '#A3BE8C',
});

const Home: React.FC = () => {
  return (
    <GradientBackground>
      <StarsOverlay />
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'flex-start',
          p: {
            xs: 2, // padding em telas muito pequenas
            sm: 4, // padding em telas pequenas
            md: 6, // padding em telas médias
            lg: 8, // padding em telas grandes
          },
        }}
      >
        <Box
          sx={{
            maxWidth: '800px',
            width: '100%',
            ml: {
              xs: 4, // margem em telas muito pequenas
              sm: 8, // margem em telas pequenas
              md: 16, // margem em telas médias
              lg: 32, // margem em telas grandes
            },
          }}
        >
          {/* Introdução */}
          <Typography
            sx={{
              color: '#D8DEE9',
              fontFamily: 'monospace',
              fontSize: {
                xs: '0.9rem',
                sm: '1rem',
                md: '1.1rem',
              },
              mb: 2,
            }}
          >
            Hi all. I am
          </Typography>

          {/* Nome */}
          <Typography
            variant="h2"
            sx={{
              color: '#ECEFF4',
              fontFamily: 'monospace',
              fontSize: {
                xs: '2rem',
                sm: '2.3rem',
                md: '2.5rem',
              },
              fontWeight: 'normal',
              mb: 1,
            }}
          >
            Edison Tezolin
          </Typography>

          {/* Cargo */}
          <Typography
            sx={{
              color: '#81A1C1',
              fontFamily: 'monospace',
              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: '1.2rem',
              },
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <span style={{ color: '#5E81AC' }}>{'>'}</span> Back and Front-end
            developer
          </Typography>

          {/* Informações de contato */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              fontSize: {
                xs: '0.8rem',
                sm: '0.85rem',
                md: '0.9rem',
              },
            }}
          >
            <CodeComment>my number:</CodeComment>
            <CodeVariable>
              telephoneNum = <CodeString>"41 99833 5860"</CodeString>;
            </CodeVariable>

            <CodeComment>my e-mail:</CodeComment>
            <CodeVariable>
              email = <CodeString>"tezolin.edison@gmail.com"</CodeString>;
            </CodeVariable>

            <CodeComment>you can also see it on my Github page</CodeComment>
            <CodeVariable>
              githubLink ={' '}
              <CodeString>"https://github.com/etezolin"</CodeString>;
            </CodeVariable>

            <CodeComment>you can check my LinkedIn Page</CodeComment>
            <CodeVariable>
              linkedInPage ={' '}
              <CodeString>
                "https://www.linkedin.com/in/edison-tezolin-7498b2284"
              </CodeString>
              ;
            </CodeVariable>
          </Box>
        </Box>
      </Box>
    </GradientBackground>
  );
};

export default Home;
