import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import restaurants from "../data/restaurants";

import '../css/RestaurantList.css'; // CSS 파일 임포트

const RestaurantList = () => {
  const [showSplash, setShowSplash] = useState(false); // 스플래시 화면 상태
  const [fadeOut, setFadeOut] = useState(false); // 페이드 아웃 상태
  const navigate = useNavigate();

  useEffect(() => {
    const splashShown = localStorage.getItem("splashShown");

    // 스플래시 화면이 한 번도 표시되지 않았다면 표시
    if (!splashShown) {
      setShowSplash(true);

      // 1.8초 후 페이드 아웃 시작
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 1800);

      // 2초 후 스플래시 화면 숨기기 및 로컬스토리지에 저장
      const timer = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("splashShown", "true"); // 로컬스토리지에 플래그 저장
      }, 2000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(timer);
      };
    }
  }, []);

  if (showSplash) {
    // 스플래시 화면 내용
    return (
      <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
        <img src="/images/main-logo.jpg" alt="로고" className="splash-logo" />
        <h1 className="splash-title">식도락</h1>
        <p className="splash-description">미리 주문 서비스로 간편하게 즐기세요.</p>
      </div>
    );
  }

  // 메인 콘텐츠
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
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
    </div>
  );
};

export default RestaurantList;
