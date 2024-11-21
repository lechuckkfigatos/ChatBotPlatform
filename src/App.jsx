import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ChatArea from './components/ChatArea';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentChat, setCurrentChat] = useState('Chat 1'); // Track the current active chat
  const [chatHistories, setChatHistories] = useState({
    'Chat 1': [],
    'Chat 2': [],
    'Chat 3': []
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to switch chats from the sidebar
  const handleChatSelect = (chatName) => {
    setCurrentChat(chatName);
    setIsSidebarOpen(false); // Optionally close the sidebar when a chat is selected
  };

  // Function to handle sending a message
  const handleSendMessage = (message) => {
    setChatHistories((prevHistories) => ({
      ...prevHistories,
      [currentChat]: [...prevHistories[currentChat], message],
    }));
  };

  return (
    <div className="app">
      <TopBar toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onChatSelect={handleChatSelect}
        />
        <ChatArea
          currentChat={currentChat}
          messages={chatHistories[currentChat]}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default App;
