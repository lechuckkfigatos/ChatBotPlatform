import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-text">Welcome to</div>
        <div className="header-right">
          <div className="header-title">Chatbot</div>
          <img
            className="logo"
            src="C:\Users\bachn\GroupProject.js\ChatBotPlatform\src\assets\usthlogo.png"
            alt="Logo"
          />
        </div>
      </div>
      <div className="prompt">Tell us who you are:</div>
      <div className="main">
        <div className={`card teacher-card`}>
          <div className={`card-background teacher-background`} />
          <div className="card-text">Teacher</div>
          <img
            className={`card-image teacher-image`}
            src="C:\Users\bachn\GroupProject.js\ChatBotPlatform\src\assets\teacher.png"
            alt="Teacher"
          />
        </div>
        <div className={`card student-card`}>
          <div className={`card-background student-background`} />
          <img
            className={`card-image student-image`}
            src="C:\Users\bachn\GroupProject.js\ChatBotPlatform\src\assets\student.png"
            alt="Student"
          />
          <div className="card-text">Student</div>
        </div>
      </div>
    </div>
  );
};

export default App;
