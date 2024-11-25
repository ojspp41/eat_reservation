import React from 'react';
import Navbar from './Navbar';
import '../css/Arball.css'; // Import CSS file for styling

import { useNavigate } from 'react-router-dom';
const ARBall = () => {
    const navigate = useNavigate();

  const handleBoxClicks = () => {
    alert("뉴진스의 미공개 영상이 다운로드 되었습니다")
    navigate('/'); // Replace '/target-page' with the actual route
  };
  return (
    <div className="ar-ball">
      <Navbar />
      
      <div className="invisible-boxs" onClick={handleBoxClicks}></div>
    </div>
  );
};

export default ARBall;
