import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './Sidebar.css';

import add_chatIcon from '../assets/add_note.png';
import awardIcon from '../assets/award.png';
import historyIcon from '../assets/history.png';
import logoutIcon from '../assets/logout.png';
import quizIcon from '../assets/quiz.png';
import settingIcon from '../assets/settings.png';
import usthLogo from '../assets/usthlogo.png';
import Setting from './SidebarItem/Setting';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [showSettings, setShowSettings] = React.useState(false);

  const listIcons = [
    <img src={add_chatIcon} alt="Add chat" style={{ width: 24, height: 24 }} />,
    <img src={awardIcon} alt="Award" style={{ width: 28, height: 28 }} />,
    <img src={quizIcon} alt="Quiz" style={{ width: 24, height: 24 }} />,
    <img src={historyIcon} alt="History" style={{ width: 24, height: 24 }} />,
    <img src={settingIcon} alt="Settings" style={{ width: 24, height: 24 }} />,
  ];

  const menuItems = ['Add chat', 'Award', 'Quiz', 'Conversation History', 'Setting'];

  const handleMenuClick = (menuItem) => {
    toggleSidebar(); 
    switch (menuItem) {
      case 'Add chat':
        console.log('Navigating to Add Chat');
        break;
      case 'Award':
        console.log('Navigating to Awards');
        break;
      case 'Quiz':
        console.log('Navigating to Quiz');
        break;
      case 'Conversation History':
        console.log('Navigating to Conversation History');
        break;
      case 'Setting':
        setShowSettings(true); 
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    toggleSidebar();
    console.log('Logging out...');
  };

  const closeSettings = () => {
    setShowSettings(false); 
  };

  return (
    <>
      <Drawer open={isOpen} onClose={toggleSidebar} anchor="left">
        <Box
          className="sidebar-container"
          role="presentation"
          onClick={toggleSidebar}
        >
          <List>
            <img src={usthLogo} alt='usth logo' className='usthlogo' />
            <Divider className="divider" />
            {menuItems.map((text, index) => (
              <ListItem className='list-item' key={text} disablePadding>
                <ListItemButton onClick={() => handleMenuClick(text)}>
                  <ListItemIcon className='icon'>
                    {listIcons[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider className="divider" />
          <div className="logout-section">
            <Divider className="divider" />
            <ListItem className='list-item' disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon className='icon'>
                  <img src={logoutIcon} alt="Logout" style={{ width: 24, height: 24 }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </div>
        </Box>
      </Drawer>

      {showSettings && (
        <Setting closeSettings={() => setShowSettings(false)} />
      )}
    </>
  );
}
