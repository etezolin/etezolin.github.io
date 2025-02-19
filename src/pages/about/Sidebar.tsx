import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import {
  FcOpenedFolder,
  FcReading,
  FcGraduationCap,
  FcServices,
} from 'react-icons/fc';
import { ReactNode, CSSProperties } from 'react';

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
          {CONTACT_ITEMS.map(renderContactItem)}
        </Box>
      </List>
    </div>
  );
};

export default Sidebar;
