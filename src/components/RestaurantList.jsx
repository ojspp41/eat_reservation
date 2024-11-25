import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { showSplashState } from '../state'; // Import Recoil state
import { useNavigate } from 'react-router-dom';
import restaurants from '../data/restaurants';
import celebrityRestaurants from '../data/celebrityRestaurants'; // 연예인 모드 데이터
import Navbar from './Navbar'; // 네브바 컴포넌트 임포트

import '../css/RestaurantList.css'; // CSS 파일 임포트

const RestaurantList = () => {
  const [showSplash, setShowSplash] = useRecoilState(showSplashState); // 스플래시 화면 상태 (초기값 true)
  const [fadeOut, setFadeOut] = useState(false); // 페이드 아웃 상태
  const [isCelebrityMode, setIsCelebrityMode] = useState(true); // 연예인 모드 상태
  const navigate = useNavigate();

  useEffect(() => {
    if (showSplash) {
      // 1.8 seconds later, start fade-out
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 1800);

      // 2 seconds later, hide splash screen
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);

      // Clear timers
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(timer);
      };
    }
  }, [showSplash, setShowSplash]);

  const handleChatbotClick = () => {
    alert('맛집 추천 챗봇으로 이동합니다!');
  };

  const toggleMode = (isCelebrity) => {
    setIsCelebrityMode(isCelebrity);
  };

  if (showSplash) {
    // 스플래시 화면 내용
    return (
      <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
        <h1 className="splash-title">식도락</h1>
        <p className="splash-description">미리 주문 서비스로 간편하게 즐기세요.</p>
      </div>
    );
  }

  // 메인 콘텐츠
  const data = isCelebrityMode ? celebrityRestaurants : restaurants;

  return (
    <div>
      <Navbar isCelebrityMode={isCelebrityMode} toggleMode={toggleMode} />
      <div className="restaurant-list">
        {data.map((restaurant) => (
          <div
            key={restaurant.id}
            className="restaurant-card"
            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          >
            <div className="card-image">
              <img src={restaurant.image} alt={restaurant.name} />
            </div>
            <div className="card-content">
              <h3>{restaurant.name}</h3>
              <button>예약</button>
            </div>
          </div>
        ))}
        <div className="chatbot-button" onClick={handleChatbotClick}>
          <div className="chatbot-tooltip">챗봇 바로가기</div>
          <img src="/images/dosirock.png" alt="챗봇" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
