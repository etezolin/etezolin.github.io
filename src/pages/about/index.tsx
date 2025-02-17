import React from 'react';
import { Box } from '@mui/material';
import { styledGradientBackground } from './styles';

const About: React.FC = () => {
  return (
    <Box sx={styledGradientBackground}>
      <Box
        sx={{
          display: 'flex',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        In progress...
      </Box>
    </Box>
  );
};

export default About;
