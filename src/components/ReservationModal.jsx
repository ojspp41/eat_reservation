// src/components/ReservationModal.jsx

import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트
import "../css/ReservationModal.css"; // CSS 파일 임포트

const ReservationModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // useNavigate 사용

  if (!isOpen) return null;

  const handleConfirm = () => {
    onClose(); // 모달 닫기
    navigate("/"); // 홈 페이지로 이동
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">예약이 완료되었습니다!</h2>
        <button className="modal-close-button" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default ReservationModal;
