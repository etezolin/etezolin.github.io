import React from 'react';
import {
  Box,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Fade,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { GoMortarBoard } from 'react-icons/go';
import { GoBriefcase } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import Tooltip from '@mui/material/Tooltip';
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
  const { t } = useTranslation();

  return (
    <Box sx={styledMainContainer}>
      {/* Sidebar */}

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ ...styledBox, display: { xs: 'none', sm: 'flex' } }}>
          <Sidebar
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </Box>

        <Box sx={styledMainContent}>
          <Paper
            sx={{
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: '#0d1117',
              borderTop: '1px solid #21262d',
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'space-around',
              width: '100%',
            }}
            elevation={3}
          >
            <BottomNavigation
              value={activeButton}
              onChange={(_, newValue) => setActiveButton(newValue)}
              sx={{
                backgroundColor: 'transparent',
                mt: 2,
                width: '100%',
                '& .MuiBottomNavigationAction-root': {
                  color: '#fff',
                  transition: 'all 0.5s ease',
                  flex: 1,
                  maxWidth: 'none',
                  padding: 0,
                  '&.Mui-selected': {
                    color: '#A3BE8C',
                    backgroundColor: 'rgba(163, 190, 140, 0.1)',
                    borderTop: '2px solid #A3BE8C',
                    boxShadow: '0 -4px 10px rgba(163, 190, 140, 0.1)',
                  },
                },
              }}
            >
              <BottomNavigationAction
                value="bio"
                icon={
                  <Tooltip title="bio">
                    <div>
                      <GoPerson style={{ fontSize: '15px' }} />
                    </div>
                  </Tooltip>
                }
              />
              <BottomNavigationAction
                value="education"
                icon={
                  <Tooltip title="education">
                    <div>
                      <GoBriefcase style={{ fontSize: '15px' }} />
                    </div>
                  </Tooltip>
                }
              />
              <BottomNavigationAction
                value="experience"
                icon={
                  <Tooltip title="experience">
                    <div>
                      <GoMortarBoard style={{ fontSize: '15px' }} />
                    </div>
                  </Tooltip>
                }
              />
            </BottomNavigation>
          </Paper>
          {activeButton === 'education' && (
            <Fade in={activeButton === 'education'} timeout={750}>
              <Box>
                <Typography sx={styledSubSectionTitle}>
                  <Box sx={stylesBox.boxOne}>{t('education.title')}</Box>
                </Typography>

                <Box sx={stylesBox.boxTwo}>
                  {/* Systems Analysis */}
                  <Box sx={stylesBox.boxThree}>
                    <Typography sx={stylesTypo.typoOne}>
                      {t('education.systemsAnalysis.interfaceDeclaration')}
                    </Typography>

                    <Box sx={{ pl: 3 }}>
                      <Typography sx={stylesTypo.typotwo}>
                        <strong>{t('education.labels.degree')}:</strong>{' '}
                        {t('education.systemsAnalysis.details.degree')}
                        <br />
                        <strong>
                          {t('education.labels.institution')}:
                        </strong>{' '}
                        {t('education.systemsAnalysis.details.institution')}
                        <br />
                        <strong>{t('education.labels.skills')}:</strong>{' '}
                        {t('education.systemsAnalysis.details.skills')}
                        <br />
                        <strong>{t('education.labels.projects')}:</strong>{' '}
                        {t('education.systemsAnalysis.details.projects')}
                      </Typography>
                    </Box>

                    <Typography sx={stylesTypo.typoFour}>
                      {t('education.systemsAnalysis.closingBrace')}
                    </Typography>
                  </Box>

                  {/* Philosophy */}
                  <Box sx={stylesBox.boxFour}>
                    <Typography sx={stylesTypo.typoThree}>
                      {t('education.philosophy.classDeclaration')}
                    </Typography>

                    <Box sx={{ pl: 3 }}>
                      <Typography sx={stylesTypo.typoFive}>
                        <strong>{t('education.labels.degree')}:</strong>{' '}
                        {t('education.philosophy.details.degree')}
                        <br />
                        <strong>
                          {t('education.labels.institution')}:
                        </strong>{' '}
                        {t('education.philosophy.details.institution')}
                        <br />
                        <strong>{t('education.labels.focus')}:</strong>{' '}
                        {t('education.philosophy.details.focus')}
                        <br />
                        <strong>{t('education.labels.thesis')}:</strong>{' '}
                        {t('education.philosophy.details.thesis')}
                      </Typography>
                    </Box>

                    <Typography sx={stylesTypo.typoSix}>
                      {t('education.philosophy.closingBrace')}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>
          )}

          {activeButton === 'bio' && (
            <Fade in={activeButton === 'bio'} timeout={750}>
              <Box>
                <Typography component="div" sx={styledSubSectionTitle}>
                  <Box sx={stylesBox.boxFive}>{t('bio.title')}</Box>
                </Typography>

                <Box sx={stylesBox.boxSeven}>
                  <>
                    <Typography
                      sx={stylesTypo.typoSeven}
                      dangerouslySetInnerHTML={{
                        __html: t('bio.mainContent.firstParagraph'),
                      }}
                    />
                    <Typography
                      sx={stylesTypo.typoSeven}
                      dangerouslySetInnerHTML={{
                        __html: t('bio.mainContent.secondParagraph'),
                      }}
                    />
                    <Box sx={stylesBox.boxSix}>
                      <Typography
                        sx={stylesTypo.typoSeven}
                        dangerouslySetInnerHTML={{
                          __html: t('bio.mainContent.anecdote'),
                        }}
                      />
                    </Box>
                  </>
                </Box>
              </Box>
            </Fade>
          )}
          {activeButton === 'experience' && (
            <Fade in={activeButton === 'experience'} timeout={750}>
              <Box>
                <Typography sx={styledSubSectionTitle}>
                  <Box sx={stylesBox.boxEight}>{t('experience.title')}</Box>
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Box sx={stylesBox.boxNine}>
                    <Typography
                      sx={stylesTypo.typoEight}
                      dangerouslySetInnerHTML={{
                        __html: t('experience.summary'),
                      }}
                    />
                  </Box>
                  <Box sx={stylesBox.boxTen}>
                    <div style={{ marginTop: '40px' }}>
                      {/* Backend Section */}
                      <div className="section-title">
                        {t('experience.sections.backend.title')}
                      </div>
                      {(
                        t('experience.sections.backend.skills', {
                          returnObjects: true,
                        }) as string[]
                      ).map((skill: string) => (
                        <div key={uuidv4()} className="list-item">
                          {skill}
                        </div>
                      ))}

                      {/* Frontend Section */}
                      <div className="section-title">
                        {t('experience.sections.frontend.title')}
                      </div>
                      {(
                        t('experience.sections.frontend.skills', {
                          returnObjects: true,
                        }) as string[]
                      ).map((skill: string) => (
                        <div key={uuidv4()} className="list-item">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </Box>
                </Box>
              </Box>
            </Fade>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioContent;
