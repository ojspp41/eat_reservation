// src/components/Navbar.jsx

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Navbar.css'; // CSS 파일 임포트

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
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
            <img src="/images/main-logo.jpg" alt="메인 로고" className="main-logo" />
            <strong className='logo-text'>식도락</strong>    
        </div>
      )}
    </div>
  );
};

export default Navbar;
