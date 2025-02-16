import { Box, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Twitter, GitHub, LinkedIn } from '@mui/icons-material';

// Container do footer estilizado
const StyledFooter = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1rem',
  background: 'linear-gradient(to top, rgba(10, 25, 47, 0.95), transparent)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,
}));

// Links estilizados
const SocialLink = styled(Link)(({ theme }) => ({
  color: '#4A5568',
  textDecoration: 'none',
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  '&:hover': {
    color: '#fff',
  },
}));

// Texto estilizado no estilo de código
const CodeText = styled(Box)(({ theme }) => ({
  color: '#4A5568',
  fontFamily: 'monospace',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}));

const Footer = () => {
  return (
    <StyledFooter>
      {/* Lado esquerdo - find me in */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: '#4A5568',
        }}
      >
        <CodeText>find me in:</CodeText>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/edison-tezolin-7498b2284"
            target="_blank"
            sx={{
              color: '#4A5568',
              '&:hover': { color: '#fff' },
            }}
          >
            <LinkedIn fontSize="small" />
          </IconButton>
          {/* <IconButton
            component="a"
            href="https://github.com"
            target="_blank"
            sx={{
              color: '#4A5568',
              '&:hover': { color: '#fff' },
            }}
          >
            <GitHub fontSize="small" />
          </IconButton> */}
        </Box>
      </Box>

      {/* Lado direito - github */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SocialLink
          href="https://github.com/etezolin"
          target="_blank"
          sx={{
            display: { xs: 'none', sm: 'flex' }, // Esconde em mobile
          }}
        >
          @etezolin
          <GitHub fontSize="small" />
        </SocialLink>
        <IconButton
          component="a"
          href="https://github.com/etezolin"
          target="_blank"
          sx={{
            color: '#4A5568',
            '&:hover': { color: '#fff' },
            display: { xs: 'flex', sm: 'none' }, // Mostra apenas em mobile
          }}
        >
          <GitHub fontSize="small" />
        </IconButton>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
