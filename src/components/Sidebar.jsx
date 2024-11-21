import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './Sidebar.css';

import addChatIcon from '../assets/add_note.png';
import theoryIcon from '../assets/theory.png';
import leaderBoardIcon from '../assets/leaderBoard.png';
import historyIcon from '../assets/history.png';
import logoutIcon from '../assets/logout.png';
import quizIcon from '../assets/quiz.png';
import settingIcon from '../assets/settings.png';
import usthLogo from '../assets/usthlogo.png';
import Setting from './SidebarItem/Setting';

export default function Sidebar({ isOpen, toggleSidebar, onChatSelect }) {
  const [showSettings, setShowSettings] = useState(false);
  const [showConvHistory, setShowConvHistory] = useState(false);

  const mainMenuItems = [
    { text: 'Add Chat', icon: addChatIcon },
    { text: 'Theory', icon: theoryIcon },
    { text: 'Leaderboard', icon: leaderBoardIcon },
    { text: 'Quiz', icon: quizIcon },
    { text: 'Conversation History', icon: historyIcon },
    { text: 'Setting', icon: settingIcon }
  ];

  const conversationChats = ['Chat 1', 'Chat 2', 'Chat 3'];

  const handleMainMenuClick = (menuItem) => {
    switch (menuItem) {
      case 'Add Chat':
        toggleSidebar();
        console.log('Navigating to Add Chat');
        break;
      case 'Theory':
        toggleSidebar();
        console.log('Navigating to Theory');
        break;
      case 'Leaderboard':
        toggleSidebar();
        console.log('Navigating to Leaderboard');
        break; 
      case 'Quiz':
        toggleSidebar();
        console.log('Navigating to Quiz');
        break;
      case 'Conversation History':
        setShowConvHistory((prev) => !prev);
        break;
      case 'Setting':
        toggleSidebar();
        handleSettings();
        break;
      default:
        break;
    }
  };

  const handleChatSelect = (chat) => {
    onChatSelect(chat);
    toggleSidebar();
  };

  // Updated handleSettings function to open the Settings modal
  const handleSettings = () => {
    setShowSettings(true);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    toggleSidebar();
  };

  return (
    <>
      <Drawer open={isOpen} onClose={toggleSidebar} anchor="left">
        <Box className="sidebar-container" role="presentation">
          {/* USTH Logo */}
          <List>
            <img src={usthLogo} alt="USTH Logo" className="usthlogo" />
          </List>

          <Divider className="divider" />

          {/* Main Menu Items */}
          <List>
            {mainMenuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => handleMainMenuClick(item.text)}>
                  <ListItemIcon>
                    <img src={item.icon} alt={item.text} style={{ width: 24, height: 24 }} />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider className="divider" />

          {/* Conversation History with Transition */}
          <div className={`conv-history ${showConvHistory ? 'show' : 'hide'}`}>
            <List>
              {conversationChats.map((chat) => (
                <ListItem key={chat} disablePadding>
                  <ListItemButton onClick={() => handleChatSelect(chat)}>
                    <ListItemText primary={chat} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider className="divider" />
          </div>

          {/* Logout Section */}
          <div className="logout-section">
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <img src={logoutIcon} alt="Logout" style={{ width: 24, height: 24 }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </div>
        </Box>
      </Drawer>

      {showSettings && <Setting closeSettings={() => setShowSettings(false)} />}
    </>
  );
}
