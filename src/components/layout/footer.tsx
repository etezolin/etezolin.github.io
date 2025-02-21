import { Box, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import {
  styledFooter,
  styledCodeText,
  styledSocialLink,
  styledBox,
} from './styles.footer';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styledFooter}>
      {/* Lado esquerdo - find me in */}
      <Box sx={styledBox}>
        <Box sx={styledCodeText}>{t('footer.text')}</Box>
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
              color: '#10B981',
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
              color: '#10B981',
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
            color: '#10B981',
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
          <GitHub
            fontSize="small"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
