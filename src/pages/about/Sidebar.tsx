import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
  useMediaQuery,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import { GoMortarBoard } from 'react-icons/go';
import { GoBriefcase } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  stylesBox,
  styledSectionTitle,
  stylesDivider,
  stylesTypo,
  STYLES,
} from './styles.sidebar';

interface MenuItem {
  id: string;
  icon: ReactNode;
  text: string;
}

interface SidebarProps {
  activeButton: string;
  setActiveButton: (id: string) => void;
}

const CONTACT_ITEMS: MenuItem[] = [
  {
    id: 'email',
    icon: <Email sx={{ fontSize: '14px', color: '#8b949e' }} />,
    text: 'tezolin.edison@gmail.com',
  },
  {
    id: 'phone',
    icon: <Phone sx={{ fontSize: '14px', color: '#8b949e' }} />,
    text: '41 99833 5860',
  },
];

const Sidebar = ({ activeButton, setActiveButton }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const MENU_ITEMS: MenuItem[] = [
    {
      id: 'bio',
      icon: (
        <Box sx={stylesBox.boxOne}>
          <GoPerson style={{ fontSize: '18px', color: '#c9d1d9' }} />
        </Box>
      ),
      text: t('sidebar.navigation.bio'),
    },
    {
      id: 'education',
      icon: (
        <Box sx={stylesBox.boxOne}>
          <GoMortarBoard style={{ fontSize: '18px', color: '#c9d1d9' }} />
        </Box>
      ),
      text: t('sidebar.navigation.education'),
    },
    {
      id: 'experience',
      icon: (
        <Box sx={stylesBox.boxOne}>
          <GoBriefcase style={{ fontSize: '18px', color: '#c9d1d9' }} />
        </Box>
      ),
      text: t('sidebar.navigation.experience'),
    },
  ];

  const handleClick = (id: string) => {
    if (id !== activeButton) {
      setActiveButton(id);
    }
  };

  const renderMenuButton = ({ id, icon, text }: MenuItem, index: number) => {
    const isActive = id === activeButton;

    const menuItem = (
      <ListItem
        key={`menu-${index}`}
        sx={{
          ...STYLES.listItem,
          cursor: 'pointer',
          backgroundColor: isActive
            ? 'rgba(139, 148, 158, 0.1)'
            : 'transparent',
          '&:hover': { backgroundColor: 'rgba(139, 148, 158, 0.1)' },
          justifyContent: isMobile ? 'center' : 'flex-start',
          padding: isMobile ? '12px 0' : '8px 16px',
        }}
        onClick={() => handleClick(id)}
      >
        {!isMobile && (
          <>
            <ListItemIcon sx={STYLES.icon}>{icon}</ListItemIcon>

            <ListItemText
              primary={text}
              primaryTypographyProps={
                isActive ? STYLES.activeText : STYLES.text
              }
            />
          </>
        )}
      </ListItem>
    );

    return isMobile ? (
      <Tooltip title={text} placement="right">
        {menuItem}
      </Tooltip>
    ) : (
      menuItem
    );
  };

  const renderContactItem = ({ icon, text }: MenuItem, index: number) => {
    const contactItem = (
      <ListItem
        key={`contact-${index}`}
        sx={{
          ...STYLES.listItem,
          justifyContent: isMobile ? 'center' : 'flex-start',
          padding: isMobile ? '12px 0' : '8px 16px',
        }}
      >
        <ListItemIcon sx={STYLES.icon}>{icon}</ListItemIcon>
        {!isMobile && (
          <ListItemText primary={text} primaryTypographyProps={STYLES.text} />
        )}
      </ListItem>
    );

    return isMobile ? (
      <Tooltip title={text} placement="right">
        {contactItem}
      </Tooltip>
    ) : (
      contactItem
    );
  };

  return (
    <div style={STYLES.container}>
      <List component="nav" sx={STYLES.list}>
        <Typography
          sx={{
            ...styledSectionTitle,
            display: { xs: 'none', sm: 'inline-block' },
            mb: 1,
          }}
        >
          {t('sidebar.navigation.whoami')}
        </Typography>
        <div>{MENU_ITEMS.map(renderMenuButton)}</div>
        <Box sx={{ mt: 0.5, display: { xs: 'none', sm: 'flow' } }}>
          <Divider sx={stylesDivider.dividerTwo} />
          <Typography sx={styledSectionTitle}>
            {' '}
            {t('sidebar.navigation.avatar')}
          </Typography>
          <Box sx={stylesBox.boxTwo}>
            <Box sx={stylesBox.boxThree}>
              <img
                src="/img.jpg"
                alt="alt"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 4, position: 'relative' }}>
            <Typography sx={stylesTypo.typoOne}>
              {t('sidebar.profile.description')}
              <Box sx={stylesBox.boxFour} />
            </Typography>
            <Box sx={stylesBox.boxFive} />
          </Box>
          <Divider sx={stylesDivider.dividerOne} />
          <Typography sx={styledSectionTitle}>
            {' '}
            {t('sidebar.navigation.contacts')}
          </Typography>
          {CONTACT_ITEMS.map(renderContactItem)}
        </Box>
      </List>
    </div>
  );
};

export default Sidebar;
