import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Navbar.css'; // CSS 파일 임포트

const Navbar = ({ isCelebrityMode, toggleMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };
  const navigateToAR = () => {
    navigate('/ar'); // Replace '/ar' with the actual route for your AR page
  };
  return (
    <div className="navbar">
      {location.pathname !== '/' ? (
        <>
          <button className="back-button" onClick={handleBack}>
            <img src="/images/back-icon.svg" alt="뒤로가기" />
          </button>
          <div className="title">
            <strong>식도락</strong>
          </div>
        </>
      ) : (
        <div className="logo-container">
          <img src="/images/dosirock.png" alt="메인 로고" className="main-logo" />
          <div className="mode-toggle">
            <button
              className={`mode-button ${!isCelebrityMode ? 'active' : ''}`}
              onClick={() => toggleMode(false)}
            >
              일반 모드
            </button>
            <button
              className={`mode-button ${isCelebrityMode ? 'active' : ''}`}
              onClick={() => toggleMode(true)}
            >
              연예인 모드
            </button>
            <button className="mode-button" onClick={navigateToAR}>
              AR 모드
            </button>
          </div>
        </div>
        
      )}
      
    </div>
  );
};

export default Navbar;
