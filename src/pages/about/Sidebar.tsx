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
} from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import {
  FcOpenedFolder,
  FcReading,
  FcGraduationCap,
  FcServices,
} from 'react-icons/fc';
import { ReactNode, CSSProperties } from 'react';
import img from '../../../public/logo512.png';

interface MenuItem {
  id: string;
  icon: ReactNode;
  text: string;
}

interface SidebarProps {
  activeButton: string;
  setActiveButton: (id: string) => void;
}

interface Styles {
  container: CSSProperties;
  list: {
    padding: number;
    display: string;
    flexDirection: string;
    justifyContent: string;
  };
  listItem: {
    pl: number;
    padding: string;
    '&:hover': {
      backgroundColor: string;
      fontFamily: string;
    };
    cursor?: string;
  };
  icon: {
    minWidth: string;
  };
  text: {
    fontSize: string;
    color: string;
    fontFamily: string;
  };
  activeText: {
    fontSize: string;
    color: string;
    fontWeight: string;
  };
}

const STYLES: Styles = {
  container: {
    height: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  list: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listItem: {
    pl: 4,
    padding: '8px',
    '&:hover': { backgroundColor: 'transparent', fontFamily: 'monospace' },
  },
  icon: {
    minWidth: '24px',
  },
  text: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#8b949e',
  },
  activeText: {
    fontSize: '14px',
    color: '#c9d1d9',
    fontWeight: '600',
  },
};

const MENU_ITEMS: MenuItem[] = [
  { id: 'bio', icon: <FcReading />, text: 'bio' },
  { id: 'education', icon: <FcGraduationCap />, text: 'education' },
  { id: 'experience', icon: <FcServices />, text: 'experience' },
];

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
        <ListItemIcon sx={STYLES.icon}>{icon}</ListItemIcon>
        {!isMobile && (
          <ListItemText
            primary={text}
            primaryTypographyProps={isActive ? STYLES.activeText : STYLES.text}
          />
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
        <div>{MENU_ITEMS.map(renderMenuButton)}</div>
        <Box sx={{ mt: 0.5, display: { xs: 'none', sm: 'flow' } }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 6,
            }}
          >
            <Box
              sx={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                boxShadow: 3,
                overflow: 'hidden',
              }}
            >
              <img
                src="/img.jpg"
                alt="alt"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>

          <Box sx={{ mt: 4, mb: 5, position: 'relative' }}>
            <Typography
              sx={{
                color: '#8b949e',
                fontSize: '9.5pt', // Tamanho de fonte mais suave
                textAlign: 'center',
                fontFamily: 'monospace',
                pr: 3,
                pl: 3,
                lineHeight: 1.6,
                fontWeight: 300, // Fonte mais leve
                maxWidth: '650px',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              I’m Edison Tezolin, a full-stack developer blending technology
              with human-centered design. I create scalable, user-focused
              solutions, always aiming to deliver meaningful results. Technology
              is not just a tool—it’s a way to turn ideas into reality.
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '30px',
                  height: '30px',
                  // background: 'linear-gradient(45deg, #ff4081, #ff80ab)', // Adiciona um toque decorativo
                  borderRadius: '50%',
                  boxShadow: 3,
                }}
              />
            </Typography>
            <Box
              sx={{
                width: '50px',
                height: '5px',
                // background: 'linear-gradient(45deg, #ff4081, #ff80ab)', // Linha decorativa
                margin: '10px auto',
              }}
            />
          </Box>
          {CONTACT_ITEMS.map(renderContactItem)}
        </Box>
      </List>
    </div>
  );
};

export default Sidebar;
