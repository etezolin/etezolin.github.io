import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
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

const PortfolioContent = () => {
  const [activeButton, setActiveButton] = React.useState<string>('bio');

  return (
    <Box sx={styledMainContainer}>
      {/* Sidebar */}
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={styledBox}>
          <Sidebar
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </Box>

        <Box sx={styledMainContent}>
          {/* <Typography sx={styledSectionTitle}>About Edison Tezolin</Typography>

          <Typography sx={{ color: '#8b949e', mb: 4, fontFamily: 'monospace' }}>
            Welcome to my portfolio.
          </Typography> */}

          {activeButton === 'education' && (
            <>
              <Typography sx={styledSubSectionTitle}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#A3BE8C', // Mudei para azul para diferenciar da bio
                    '&::before': {
                      content: '"//"',
                      color: '#607B96',
                      fontFamily: 'monospace',
                    },
                  }}
                >
                  Education
                </Box>
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  maxWidth: '800px',
                }}
              >
                {/* Formação em ADS */}
                <Box
                  sx={{
                    position: 'relative',
                    padding: '32px',
                    backgroundColor: 'rgba(1, 22, 39, 0.84)',
                    borderRadius: '12px',
                    border: '1px solid #1E2D3D',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      backgroundColor: 'rgba(1, 22, 39, 0.95)',
                      '&::before': {
                        height: '85%',
                        opacity: 0.9,
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '70%',
                      background:
                        'linear-gradient(180deg, #88C0D0 0%, rgba(136, 192, 208, 0.4) 100%)',
                      borderRadius: '0 4px 4px 0',
                      opacity: 0.7,
                      transition: 'all 0.3s ease',
                    },
                    '&::after': {
                      content: '"💻"',
                      position: 'absolute',
                      top: '-12px',
                      right: '24px',
                      fontSize: '24px',
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '11pt',
                      color: '#A3BE8C',
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    {`interface SystemsAnalysis {`}
                  </Typography>

                  <Box sx={{ pl: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: 'monospace',
                        color: '#E5E9F0',
                        fontSize: '11pt',
                        lineHeight: '1.8',
                        '& strong': {
                          color: '#A3BE8C',
                          fontWeight: 'normal',
                        },
                      }}
                    >
                      <strong>degree:</strong> Technology in Systems Analysis
                      and Development
                      <br />
                      <strong>institution:</strong> Centro Universitário Opet
                      <br />
                      <strong>skills:</strong> Software Development, Database
                      Design, System Architecture
                      <br />
                      <strong>projects:</strong> Educational Platforms,
                      Integration Systems, RPA Solutions, Data Processing, APIs
                      Development Services, System Architecture Design
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      color: '#A3BE8C',
                      mt: 2,
                    }}
                  >
                    {`}`}
                  </Typography>
                </Box>
                {/* Formação em Filosofia */}
                <Box
                  sx={{
                    position: 'relative',
                    padding: '32px',
                    backgroundColor: 'rgba(1, 22, 39, 0.84)',
                    borderRadius: '12px',
                    border: '1px solid #1E2D3D',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      backgroundColor: 'rgba(1, 22, 39, 0.95)',
                      '&::before': {
                        height: '85%',
                        opacity: 0.9,
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '70%',
                      background:
                        'linear-gradient(180deg, #88C0D0 0%, rgba(136, 192, 208, 0.4) 100%)',
                      borderRadius: '0 4px 4px 0',
                      opacity: 0.7,
                      transition: 'all 0.3s ease',
                    },
                    '&::after': {
                      content: '"📚"',
                      position: 'absolute',
                      top: '-12px',
                      right: '24px',
                      fontSize: '24px',
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '11pt',
                      color: '#A3BE8C',
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    {`class Philosophy {`}
                  </Typography>

                  <Box sx={{ pl: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: 'monospace',
                        color: '#E5E9F0',
                        fontSize: '11pt',
                        lineHeight: '1.8',
                        '& strong': {
                          color: '#A3BE8C',
                          fontWeight: 'normal',
                        },
                      }}
                    >
                      <strong>degree:</strong> Bachelor of Philosophy
                      <br />
                      <strong>institution:</strong> Pontifícia Universidade
                      Católica do Paraná
                      <br />
                      <strong>focus:</strong> Logic, Ethics and Critical
                      Thinking
                      <br />
                      <strong>thesis:</strong> The Intersection of Technology
                      and Human Consciousness
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      color: '#A3BE8C',
                      mt: 2,
                    }}
                  >
                    {`}`}
                  </Typography>
                </Box>
              </Box>
            </>
          )}

          {activeButton === 'bio' && (
            <>
              <Typography sx={styledSubSectionTitle}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#A3BE8C',
                    '&::before': {
                      content: '"//"',
                      color: '#607B96',
                      fontFamily: 'monospace',
                    },
                  }}
                >
                  Bio
                </Box>
              </Typography>

              <Box
                sx={{
                  ...styledEducationItem,
                  position: 'relative',
                  maxWidth: '800px',
                  padding: '32px',
                  backgroundColor: 'rgba(1, 22, 39, 0.84)',
                  borderRadius: '12px',
                  border: '1px solid #1E2D3D',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    backgroundColor: 'rgba(1, 22, 39, 0.95)',
                    '&::before': {
                      height: '85%',
                      opacity: 0.9,
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '70%',
                    background:
                      'linear-gradient(180deg, #A3BE8C 0%, rgba(163, 190, 140, 0.4) 100%)',
                    borderRadius: '0 4px 4px 0',
                    opacity: 0.7,
                    transition: 'all 0.3s ease',
                  },
                  '&::after': {
                    content: '"💡"',
                    position: 'absolute',
                    top: '-12px',
                    right: '24px',
                    fontSize: '24px',
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'monospace',
                    color: '#E5E9F0',
                    fontSize: '11pt',
                    lineHeight: '1.8',
                    // padding: '0 20px',
                    position: 'relative',
                    '& strong': {
                      color: '#A3BE8C',
                      fontWeight: 'normal',
                    },
                    '& p': {
                      marginBottom: '20px',
                      position: 'relative',
                      // paddingLeft: '20px',
                      '&::before': {
                        position: 'absolute',
                        left: '-10px',
                        color: '#607B96',
                        opacity: 0.6,
                      },
                    },
                  }}
                >
                  <p>
                    At the intersection of <strong>computational logic</strong>{' '}
                    and <strong>philosophical inquiry</strong>, we find a
                    developer who navigates between algorithms and questions of
                    human thought. With a background in{' '}
                    <strong>Systems Analysis and Development</strong> and{' '}
                    <strong>Philosophy</strong>, my professional journey
                    explores how these two disciplines complement each other in
                    a unique way.
                  </p>

                  <p>
                    As a former teacher and{' '}
                    <strong>full-stack developer</strong>, I apply philosophical
                    critical thinking to create solutions that not only work,
                    but also deeply consider the human experience. I believe
                    that each line of code is an opportunity to materialize
                    ideas into tangible solutions.
                  </p>

                  <Box
                    sx={{
                      mt: 4,
                      p: 3,
                      backgroundColor: 'rgba(96, 123, 150, 0.1)',
                      borderRadius: '8px',
                      border: '1px dashed #607B96',
                      position: 'relative',
                      '&::before': {
                        content: '"💭"',
                        position: 'absolute',
                        top: '-12px',
                        left: '12px',
                        fontSize: '20px',
                      },
                    }}
                  >
                    Speaking of combining technology and philosophy, once I was
                    explaining
                    <strong> while loops</strong> using Camus's{' '}
                    <strong>Myth of Sisyphus</strong> as an analogy, saying:
                    "Imagine Sisyphus programming — he would embody the perfect
                    infinite loop!" A confused student asked: "Professor,
                    wouldn't it be easier for him to use a{' '}
                    <strong>break statement</strong> instead of pushing the rock
                    eternally?" Sometimes, even existential dilemmas can be
                    solved with a bit of programming!
                  </Box>
                </Typography>
              </Box>
            </>
          )}
          {activeButton === 'experience' && (
            <>
              <Typography sx={styledSubSectionTitle}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#A3BE8C',
                    '&::before': {
                      content: '"//"',
                      color: '#607B96',
                      fontFamily: 'monospace',
                    },
                  }}
                >
                  Experience
                </Box>
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    ...styledEducationItem,
                    position: 'relative',
                    maxWidth: '800px',
                    padding: '24px',
                    backgroundColor: 'rgba(1, 22, 39, 0.84)',
                    borderRadius: '8px',
                    border: '1px solid #1E2D3D',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                      backgroundColor: 'rgba(1, 22, 39, 0.95)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '3px',
                      height: '70%',
                      backgroundColor: '#A3BE8C',
                      borderRadius: '0 4px 4px 0',
                      opacity: 0.7,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      color: '#E5E9F0',
                      fontSize: '10pt',
                      lineHeight: '1.8',
                      // mb: 3,
                      '& strong': {
                        color: '#A3BE8C',
                        fontWeight: 'normal',
                      },
                      // textAlign: 'justify',
                      padding: '0 16px',
                    }}
                  >
                    As a <strong>full-stack developer</strong> specialized in{' '}
                    <strong>.NET/C# backend</strong> and
                    <strong> React/TypeScript frontend</strong>, I focus on
                    creating scalable integration solutions and multi-platform
                    systems for the education sector, combining technical
                    expertise with thoughtful problem-solving approaches.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: '#011627',
                    padding: '32px',
                    marginTop: '24px',
                    fontFamily:
                      '"Fira Code", Consolas, Monaco, "Courier New", monospace',
                    fontSize: '10.2pt',
                    lineHeight: '2',
                    color: '#607B96',
                    whiteSpace: 'pre-wrap',
                    overflowX: 'auto',
                    borderRadius: '12px',
                    width: '100%',
                    maxWidth: '800px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    border: '1px solid #1E2D3D',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 48px rgba(0, 0, 0, 0.25)',
                      transform: 'translateY(-2px)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      height: '30px',
                      backgroundColor: '#1E2D3D',
                      borderTopLeftRadius: '12px',
                      borderTopRightRadius: '12px',
                      borderBottom: '1px solid #2A3343',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '12px',
                      left: '16px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: '#FF5F56',
                      boxShadow: '24px 0 0 #FFBD2E, 48px 0 0 #27C93F',
                      transition: 'all 0.3s ease',
                    },
                    '& .section-title': {
                      color: '#A3BE8C',
                      fontSize: '15px',
                      fontWeight: 500,
                      marginBottom: '16px',
                      marginTop: '40px',
                    },
                    '& .list-item': {
                      position: 'relative',
                      paddingLeft: '20px',
                      marginBottom: '12px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#E5E9F0',
                        transform: 'translateX(5px)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#A3BE8C',
                        borderRadius: '50%',
                        transform: 'translateY(-50%)',
                      },
                    },
                  }}
                >
                  <div style={{ marginTop: '40px' }}>
                    <div className="section-title"> Backend Development</div>
                    <div className="list-item">
                      Building robust RESTful APIs using .NET Core and C#
                    </div>
                    <div className="list-item">
                      Implementing layered architecture with DDD principles
                    </div>
                    <div className="list-item">
                      Designing and optimizing relational databases
                    </div>
                    <div className="list-item">
                      Applying design patterns and SOLID principles
                    </div>
                    <div className="list-item">
                      Developing microservices architecture
                    </div>
                    <div className="list-item">
                      Clean Architecture implementation
                    </div>

                    <div className="section-title"> Frontend Development</div>
                    <div className="list-item">
                      Creating modern SPAs using React and TypeScript
                    </div>
                    <div className="list-item">
                      Building responsive interfaces with reusable components
                    </div>
                    <div className="list-item">
                      Implementing Redux and Context API state management
                    </div>
                    <div className="list-item">
                      Optimizing application performance and UX
                    </div>
                    <div className="list-item">
                      Developing UI components with Material-UI
                    </div>
                  </div>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioContent;
