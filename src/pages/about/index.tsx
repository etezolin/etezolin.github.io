import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  styledBox,
  styledMainContainer,
  styledMainContent,
  styledSubSectionTitle,
  stylesBox,
  stylesTypo,
} from './styles.index';
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
          {activeButton === 'education' && (
            <>
              <Typography sx={styledSubSectionTitle}>
                <Box sx={stylesBox.boxOne}>Education</Box>
              </Typography>

              <Box sx={stylesBox.boxTwo}>
                {/* Formação em ADS */}
                <Box sx={stylesBox.boxThree}>
                  <Typography sx={stylesTypo.typoOne}>
                    {`interface SystemsAnalysis {`}
                  </Typography>

                  <Box sx={{ pl: 3 }}>
                    <Typography sx={stylesTypo.typotwo}>
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

                  <Typography sx={stylesTypo.typoFour}>{`}`}</Typography>
                </Box>
                {/* Formação em Filosofia */}
                <Box sx={stylesBox.boxFour}>
                  <Typography sx={stylesTypo.stypoThree}>
                    {`class Philosophy {`}
                  </Typography>

                  <Box sx={{ pl: 3 }}>
                    <Typography sx={stylesTypo.typoFive}>
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

                  <Typography sx={stylesTypo.typoSix}>{`}`}</Typography>
                </Box>
              </Box>
            </>
          )}

          {activeButton === 'bio' && (
            <>
              <Typography sx={styledSubSectionTitle}>
                <Box sx={stylesBox.boxFive}>Bio</Box>
              </Typography>

              <Box sx={stylesBox.boxSeven}>
                <Typography sx={stylesTypo.typoSeven}>
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

                  <Box sx={stylesBox.boxSix}>
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
                <Box sx={stylesBox.boxEight}>Experience</Box>
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Box sx={stylesBox.boxNine}>
                  <Typography sx={stylesTypo.typoEight}>
                    As a <strong>full-stack developer</strong> specialized in{' '}
                    <strong>.NET/C# backend</strong> and
                    <strong> React/TypeScript frontend</strong>, I focus on
                    creating scalable integration solutions and multi-platform
                    systems for the education sector, combining technical
                    expertise with thoughtful problem-solving approaches.
                  </Typography>
                </Box>
                <Box sx={stylesBox.boxTen}>
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
