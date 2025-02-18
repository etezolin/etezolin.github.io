import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import { FcOpenedFolder, FcReading, FcGraduationCap } from 'react-icons/fc';
import { ReactNode } from 'react';

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
  listItem: {
    pl: number;
    padding: string;
    '&:hover': {
      backgroundColor: string;
      fontFamily: string;
    };
    cursor?: string;
  };
  activeListItem: {
    pl: number;
    padding: string;
    backgroundColor: string;
    '&:hover': {
      backgroundColor: string;
      fontFamily: string;
    };
    cursor: string;
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
  listItem: {
    pl: 4,
    padding: '2px 8px',
    '&:hover': { backgroundColor: 'transparent', fontFamily: 'monospace' },
  },
  activeListItem: {
    pl: 4,
    padding: '2px 8px',
    backgroundColor: 'rgba(139, 148, 158, 0.1)',
    '&:hover': {
      backgroundColor: 'rgba(139, 148, 158, 0.1)',
      fontFamily: 'monospace',
    },
    cursor: 'pointer',
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
  { id: 'interests', icon: <FcOpenedFolder />, text: 'interests' },
  { id: 'education', icon: <FcGraduationCap />, text: 'education' },
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
  const handleClick = (id: string) => {
    setActiveButton(id === activeButton ? '' : id);
  };

  const renderMenuButton = ({ id, icon, text }: MenuItem, index: number) => {
    const isActive = id === activeButton;

    return (
      <ListItem
        key={`menu-${index}`}
        sx={{
          ...STYLES.listItem,
          cursor: 'pointer',
          backgroundColor: isActive
            ? 'rgba(139, 148, 158, 0.1)'
            : 'transparent',
          '&:hover': { backgroundColor: 'rgba(139, 148, 158, 0.1)' },
        }}
        onClick={() => handleClick(id)}
      >
        <ListItemIcon sx={STYLES.icon}>{icon}</ListItemIcon>
        <ListItemText
          primary={text}
          primaryTypographyProps={isActive ? STYLES.activeText : STYLES.text}
        />
      </ListItem>
    );
  };

  const renderContactItem = ({ icon, text }: MenuItem, index: number) => (
    <ListItem key={`contact-${index}`} sx={STYLES.listItem}>
      <ListItemIcon sx={STYLES.icon}>{icon}</ListItemIcon>
      <ListItemText primary={text} primaryTypographyProps={STYLES.text} />
    </ListItem>
  );

  const renderContactHeader = () => (
    <ListItem
      sx={{
        ...STYLES.listItem,
        color: '#c9d1d9',
        mt: 1,
      }}
    >
      <ListItemIcon sx={STYLES.icon}>
        <span
          style={{
            fontSize: '12px',
            color: '#8b949e',
            fontFamily: 'monospace',
          }}
        >
          ▼
        </span>
      </ListItemIcon>
      <ListItemText
        primary="contacts"
        primaryTypographyProps={{
          ...STYLES.text,
          color: '#c9d1d9',
        }}
      />
    </ListItem>
  );

  return (
    <List component="nav" sx={{ p: 0, mt: 4 }}>
      {MENU_ITEMS.map(renderMenuButton)}
      {renderContactHeader()}
      {CONTACT_ITEMS.map(renderContactItem)}
    </List>
  );
};

export default Sidebar;
