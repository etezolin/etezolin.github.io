import React from 'react';
import { Box, Typography } from '@mui/material';
import { School } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import {
  styledBox,
  styledMainContainer,
  styledMainContent,
  styledSectionTitle,
  styledSubSectionTitle,
  styledEducationItem,
} from './styles';
import Sidebar from './Sidebar';

const CodeComment = styled(Box)(({ theme }) => ({
  backgroundColor: '#011627',
  padding: theme.spacing(3),
  marginTop: theme.spacing(2),
  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#607B96',
  whiteSpace: 'pre-wrap',
  overflowX: 'auto',
  borderRadius: '4px',
  width: '100%',
  maxWidth: '800px',
  '& .highlight': {
    color: '#4D5BCE',
  },
  '& .string': {
    color: '#43D9AD',
  },
}));

const PortfolioContent = () => {
  const [activeButton, setActiveButton] = React.useState<string>('education');

  return (
    <Box sx={styledMainContainer}>
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
      {/* Sidebar */}
      {/* <Box sx={styledBox}>
        <Sidebar
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </Box>

      <Box sx={styledMainContent}>
        <Typography sx={styledSectionTitle}>About Edison Tezolin</Typography>

        <Typography sx={{ color: '#8b949e', mb: 4, fontFamily: 'monospace' }}>
          Welcome to my portfolio.
        </Typography>

        <Typography sx={styledSubSectionTitle}>Education</Typography>

        <Box sx={{ mb: 4 }}>
          <Box sx={styledEducationItem}>
            <School />
            <Typography sx={{ fontFamily: 'monospace' }}>
              [Diploma] Technologist in Analysis and Systems Development
            </Typography>
          </Box>
          <Box sx={styledEducationItem}>
            <School />
            <Typography sx={{ fontFamily: 'monospace' }}>
              [Diploma] Bachelor's Degree in Philosophy
            </Typography>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default PortfolioContent;
