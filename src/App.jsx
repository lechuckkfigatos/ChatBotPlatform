// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ChatArea from './components/ChatArea';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <div className="background">
        {/* Pass the toggleSidebar function to TopBar */}
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="main-content">
          {/* Pass isOpen and toggleSidebar to Sidebar */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <ChatArea />
        </div>
      </div>
    </div>
  );
};

export default App;
