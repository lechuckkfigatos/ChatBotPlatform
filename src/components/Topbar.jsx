import React, { useState } from 'react';
import menuIcon from '../assets/menu.png';
import logoIcon from '../assets/usthlogo.png';
import avatarIcon from '../assets/avatar.png';

import './TopBar.css';

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="top-bar">
      <img
        src={menuIcon}
        alt="Menu"
        className="menu-toggle"
        onClick={toggleSidebar}
      />
      <img src={logoIcon} alt="Logo" className="logo" />
      <div className="right-section">
      </div>
    </div>
  );
};

export default TopBar;
