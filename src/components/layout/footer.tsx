import { Box, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { styledFooter, styledCodeText, styledSocialLink } from './styles';

const Footer = () => {
  return (
    <Box sx={styledFooter}>
      {/* Lado esquerdo - find me in */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          color: '#4A5568',
          ml: 5,
        }}
      >
        <Box sx={styledCodeText}>find me in:</Box>
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
          <IconButton
            component="a"
            href="https://github.com/etezolin"
            target="_blank"
            sx={{
              color: '#4A5568',
              '&:hover': { color: '#fff' },
            }}
          >
            <GitHub fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Lado direito - github */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 5 }}>
        <Link
          href="https://github.com/etezolin"
          target="_blank"
          sx={{
            ...styledSocialLink,
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          @etezolin
          <GitHub fontSize="small" />
        </Link>
        <IconButton
          component="a"
          href="https://github.com/etezolin"
          target="_blank"
          sx={{
            color: '#4A5568',
            '&:hover': { color: '#fff' },
            display: { xs: 'flex', sm: 'none' },
          }}
        >
          <GitHub fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
