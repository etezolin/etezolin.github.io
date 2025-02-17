import React from 'react';
import { FaJsSquare, FaReact, FaDocker } from 'react-icons/fa';
import { DiDotnet } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiMui } from 'react-icons/si';
import { useTheme, useMediaQuery, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  styledGradientBackground,
  styledStarsOverlay,
  styledCodeComment,
  styledCodeVariable,
  stylesBox,
  stylesTypography,
} from './styles';

const CodeString = styled('span')({
  color: '#A3BE8C',
});

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Determina o tamanho do ícone baseado no breakpoint
  const iconSize = isMobile ? 20 : isTablet ? 22 : 24;
  return (
    <Box sx={styledGradientBackground}>
      <Box sx={styledStarsOverlay} />
      <Box sx={stylesBox.boxOne}>
        <Box sx={stylesBox.boxTwo}>
          {/* Introdução */}
          <Typography sx={stylesTypography.typoOne}>Hi all. I am</Typography>

          {/* Nome */}
          <Typography variant="h2" sx={stylesTypography.typoTwo}>
            Edison Tezolin
          </Typography>

          {/* Cargo */}
          <Typography sx={stylesTypography.typoThree}>
            <span style={{ color: '#5E81AC' }}>{'>'}</span> Back and Front-end
            developer
          </Typography>

          {/* Informações de contato */}
          <Box sx={stylesBox.boxThree}>
            <Typography sx={styledCodeComment}>my number:</Typography>
            <Typography sx={styledCodeVariable}>
              telephoneNum = <CodeString>"41 99833 5860"</CodeString>;
            </Typography>

            <Typography sx={styledCodeComment}>my e-mail:</Typography>
            <Typography sx={styledCodeVariable}>
              email = <CodeString>"tezolin.edison@gmail.com"</CodeString>;
            </Typography>

            <Typography sx={styledCodeComment}>
              {' '}
              you can also see it on my Github page
            </Typography>
            <Typography sx={styledCodeVariable}>
              githubLink ={' '}
              <CodeString
                onClick={() =>
                  window.open('https://github.com/etezolin', '_blank')
                }
              >
                "https://github.com/etezolin"
              </CodeString>
              ;
            </Typography>

            <Typography sx={styledCodeComment}>
              you can check my LinkedIn Page
            </Typography>
            <Typography sx={styledCodeVariable}>
              linkedInPage ={' '}
              <CodeString>
                "https://www.linkedin.com/in/edison-tezolin-7498b2284"
              </CodeString>
              ;
            </Typography>
          </Box>

          <Box sx={stylesBox.boxFour}>
            <Typography sx={styledCodeComment}>
              {' '}
              my development stack:
            </Typography>
            <Box sx={stylesBox.boxFive}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <TbBrandCSharp size={iconSize} />
                <span>C#</span>
              </Box>

              <Box sx={stylesBox.boxSix}>
                <DiDotnet size={iconSize} />
                <span>.NET</span>
              </Box>
              <Box sx={stylesBox.boxSix}>
                <FaJsSquare size={iconSize} />
                <span>JavaScript</span>
              </Box>

              <Box sx={stylesBox.boxSix}>
                <FaReact size={iconSize} />
                <span>React</span>
              </Box>

              <Box sx={stylesBox.boxSix}>
                <BiLogoTypescript size={iconSize} />
                <span>TypeScript</span>
              </Box>

              <Box sx={stylesBox.boxSix}>
                <SiMui size={iconSize} />
                <span>MaterialUI</span>
              </Box>

              <Box sx={stylesBox.boxSix}>
                <FaDocker size={iconSize} />
                <span>Docker</span>
              </Box>

              <Box sx={stylesBox.boxSix}>
                <AiOutlineConsoleSql size={iconSize} />
                <span>SQL</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
