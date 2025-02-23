import React, { SyntheticEvent, useEffect, useState } from 'react';
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Paper,
  Card,
  CardContent,
  useMediaQuery,
  Chip,
  Stack,
  styled,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { styledGradientBackground } from './styles';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
  dir: 'left' | 'right';
}

interface ProjectData {
  label: string;
  content: string;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
  }>;
}

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minHeight: 48,
  fontWeight: 500,
  padding: '12px 16px',
  marginRight: theme.spacing(2),
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.7)',
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(4),
    fontSize: '1rem',
  },
  transition: 'all 0.3s ease-in-out',
  '&.Mui-selected': {
    color: '#fff',
    backgroundColor: 'rgba(20, 184, 166, 0.1)',
    borderTopLeftRadius: theme.spacing(1),
    borderTopRightRadius: theme.spacing(1),
    transform: 'translateY(-4px)',
    boxShadow: '0 -2px 8px rgba(20, 184, 166, 0.1)',
  },
  '&:hover': {
    backgroundColor: 'rgba(20, 184, 166, 0.1)',
    transform: 'translateY(-2px)',
    transition: 'all 0.2s ease-in-out',
  },
}));

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, dir = 'right', ...other } = props;
  const isLeft = dir === 'left';
  // const isRight = dir === 'right';

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      style={{
        position: 'absolute',
        width: '100%',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: value === index ? 1 : 0,
        transform:
          value === index
            ? 'translateY(0) rotateX(0)'
            : isLeft
              ? 'translateY(20px) rotateX(-5deg)'
              : 'translateY(-20px) rotateX(5deg)',
        transformOrigin: 'top',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
      }}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const ProjectSection = () => {
  const isMobile = useMediaQuery('(min-width: 420px)');
  const [value, setValue] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>(
    'right'
  );

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setSlideDirection(newValue > value ? 'right' : 'left');
    setValue(newValue);
  };

  useEffect(() => {
    console.log('isMobile', isMobile);
  }, [isMobile]);

  const tabs: ProjectData[] = [
    {
      label: '_backend',
      content: 'In progress...',
      projects: [
        {
          title: '',
          description: '',
          technologies: [''],
        },
      ],
    },
    {
      label: '_frontend',
      content: 'In progress...',
      projects: [
        {
          title: '',
          description: '',
          technologies: [''],
        },
      ],
    },
    {
      label: '_rpa-bot',
      content: 'In progress...',
      projects: [
        {
          title: '',
          description: '',
          technologies: [''],
        },
      ],
    },
  ];

  return (
    <Box sx={styledGradientBackground}>
      return (
      <Box sx={{ width: '100%', position: 'relative', mt: 12 }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            bgcolor: 'rgba(13, 17, 23, 0.6)',
            width: '100%',
            overflow: 'hidden',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-indicator': {
                height: 3,
                backgroundColor: '#14b8a6',
              },
              '& .MuiTabs-flexContainer': {
                justifyContent: !isMobile ? 'flex-start' : 'center',
              },
              '& .MuiTabs-scrollButtons': {
                color: 'rgba(255, 255, 255, 0.7)',
                display: { xs: 'flex', sm: 'none' },
                '&.Mui-disabled': { opacity: 0.3 },
                '& svg': {
                  width: '1.5rem',
                  height: '1.5rem',
                },
              },
              '& .MuiTabs-scroller': {
                px: { xs: 1, sm: 2 },
              },
            }}
          >
            {tabs.map((tab, index) => (
              <StyledTab
                key={uuidv4()}
                label={tab.label}
                id={`project-tab-${index}`}
                aria-controls={`project-tabpanel-${index}`}
                sx={{
                  fontFamily: 'monospace',
                  minWidth: { xs: 'auto', sm: 120 },
                  flex: { xs: 'none', sm: 1 },
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Box
          sx={{
            position: 'relative',
            minHeight: 400,
            mt: 2,
            perspective: '1000px',
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          {tabs.map((tab, index) => (
            <TabPanel
              key={uuidv4()}
              value={value}
              index={index}
              dir={slideDirection}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 3 },
                  bgcolor: 'transparent',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 20px rgba(20, 184, 166, 0.1)',
                    border: '1px solid rgba(20, 184, 166, 0.2)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {tab.label}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                  paragraph
                >
                  {tab.content}
                </Typography>

                <Stack spacing={2} sx={{ mt: { xs: 2, sm: 4 } }}>
                  {tab.projects.map((project) => (
                    <Card
                      key={uuidv4()}
                      sx={{
                        bgcolor: 'transparent',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 2px 8px rgba(20, 184, 166, 0.1)',
                          border: '1px solid rgba(20, 184, 166, 0.2)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{
                            fontSize: { xs: '1rem', sm: '1.1rem' },
                            color: 'rgba(255, 255, 255, 0.9)',
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: '0.85rem', sm: '0.9rem' },
                            color: 'rgba(255, 255, 255, 0.7)',
                          }}
                          paragraph
                        >
                          {project.description}
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            flexWrap: 'wrap',
                            gap: 1,
                          }}
                        >
                          {project.technologies.map((tech) => (
                            <Chip
                              key={uuidv4()}
                              label={tech}
                              size="small"
                              sx={{
                                m: '2px',
                                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                                backgroundColor: 'rgba(20, 184, 166, 0.1)',
                                color: '#14b8a6',
                                border: '1px solid rgba(20, 184, 166, 0.3)',
                                '&:hover': {
                                  backgroundColor: 'rgba(20, 184, 166, 0.2)',
                                },
                              }}
                            />
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Paper>
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSection;
