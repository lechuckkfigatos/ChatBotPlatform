// TopBar.js
import React from 'react';
import menuIcon from '../assets/menu.png';
import logoIcon from '../assets/logo.png';
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
      <div className="Title">
        <h2 className='chatbot'>Chatbot</h2>
      </div>
    </div>
  );
};

export default TopBar;
