import React from 'react';
import Navbar from './Navbar';
import '../css/ARPage.css'; // Import CSS file for styling

import { useNavigate } from 'react-router-dom';
const ARPage = () => {
    const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate('/ar/ball'); // Replace '/target-page' with the actual route
  };
  return (
    <div className="ar-page">
      <Navbar />
      
      <div className="invisible-box" onClick={handleBoxClick}></div>
    </div>
  );
};

export default ARPage;
