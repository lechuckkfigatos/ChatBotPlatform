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

export default function Sidebar({ isOpen, toggleSidebar }) {
  const listIcons = [
    <img src={add_chatIcon} alt="Add chat" style={{ width: 24, height: 24 }} />,
    <img src={awardIcon} alt="Award" style={{ width: 24, height: 24 }} />,
    <img src={quizIcon} alt="Quiz" style={{ width: 24, height: 24 }} />,
    <img src={historyIcon} alt="History" style={{ width: 24, height: 24 }} />,
    <img src={settingIcon} alt="Settings" style={{ width: 24, height: 24 }} />,
  ];

  const menuItems = ['Add chat', 'Award', 'Quiz', 'Conv History', 'Setting'];

  return (
    <Drawer open={isOpen} onClose={toggleSidebar} anchor="left">
      <Box
        className="sidebar-container"
        role="presentation"
        onClick={toggleSidebar}
      >
        <List>
          {menuItems.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon className="icon">
                  {listIcons[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider className="divider" />
        <div className="logout-section">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon className="icon">
                <img src={logoutIcon} alt="Logout" style={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </div>
      </Box>
    </Drawer>
  );
}
