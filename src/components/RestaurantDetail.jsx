import React, { useState } from "react";
import { useParams } from "react-router-dom";
import restaurants from "../data/restaurants";
import ReservationModal from "./ReservationModal";
import "../css/RestaurantDetail.css"; // CSS 파일 임포트

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((res) => res.id === Number(id));
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [people, setPeople] = useState(1); // 인원수 상태 추가
  const [quantities, setQuantities] = useState({}); // 메뉴별 수량 상태 추가

  const handleQuantityChange = (menuId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [menuId]: value > 0 ? value : 1, // 최소값 1 유지
    }));
  };
  const incrementQuantity = (menuId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [menuId]: (prevQuantities[menuId] || 1) + 1,
    }));
  };

  const decrementQuantity = (menuId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [menuId]: Math.max((prevQuantities[menuId] || 1) - 1, 1),
    }));
  };
  const updateCartItemQuantity = (menuId, value) => {
    if (value <= 0) {
      removeFromCart(menuId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === menuId ? { ...item, quantity: value } : item
        )
      );
    }
  };
  const incrementCartItem = (menuId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === menuId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCartItem = (menuId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === menuId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };
  const addToCart = (menu) => {
    const existingItem = cart.find((item) => item.id === menu.id);
    const quantity = quantities[menu.id] || 1;

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === menu.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...menu, quantity }]);
    }

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [menu.id]: 1,
    }));
  };

  const removeFromCart = (menuId) => {
    setCart(cart.filter((item) => item.id !== menuId));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const incrementPeople = () => setPeople((prev) => prev + 1);
  const decrementPeople = () => setPeople((prev) => Math.max(prev - 1, 1));

  const handleKakaoPay = () => {
    if (people <= 0 || totalPrice <= 0) {
      alert("예약 정보를 확인해주세요.");
      return;
    }
    alert("카카오페이 결제를 진행합니다."); // Replace with KakaoPay integration
    setIsModalOpen(true);
  };

  const handleNaverPay = () => {
    if (people <= 0 || totalPrice <= 0) {
      alert("예약 정보를 확인해주세요.");
      return;
    }
    alert("네이버페이 결제를 진행합니다."); // Replace with NaverPay integration
    setIsModalOpen(true);
  };

  const isReservationAvailable = totalPrice > 0 && people > 0;

  return (
    <div className="restaurant-detail">
      <h2 className="restaurant-name">{restaurant.name}</h2>
      <h3 className="menu-title">메뉴</h3>
      <ul className="menu-list">
        {restaurant.menus.map((menu) => (
          <li key={menu.id} className="menu-item">
            <img
              src="/images/menu-icon.png"
              alt="메뉴 아이콘"
              className="menu-icon"
            />
            <span className="menu-titles">{menu.name}</span>
            <span className="menu-price">{menu.price}원</span>
            <div className="quantity-controls">
              <button
                onClick={() => decrementQuantity(menu.id)}
                className="quantity-button"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantities[menu.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(menu.id, Number(e.target.value))
                }
                className="quantity-input"
              />
              <button
                onClick={() => incrementQuantity(menu.id)}
                className="quantity-button"
              >
                +
              </button>
            </div>
            <button onClick={() => addToCart(menu)}>담기</button>
          </li>
        ))}
      </ul>
      <h3 className="cart-title">장바구니</h3>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img
              src="/images/cart-icon.png"
              alt="장바구니 아이콘"
              className="cart-icon"
            />
            <span>{item.name}</span>
            <div className="quantity-controls">
              <button
                onClick={() => decrementCartItem(item.id)}
                className="quantity-button"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateCartItemQuantity(item.id, Number(e.target.value))
                }
                className="quantity-input"
              />
              <button
                onClick={() => incrementCartItem(item.id)}
                className="quantity-button"
              >
                +
              </button>
            </div>
            <span className="cart-price">
              {item.price * item.quantity}원
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-button"
            >
              제거
            </button>
          </li>
        ))}
      </ul>
      <div className="reservation-info">
        <label htmlFor="people">인원수:</label>
        <div className="quantity-controls">
          <button onClick={decrementPeople} className="quantity-button">
            -
          </button>
          <input
            type="number"
            id="people"
            value={people}
            onChange={(e) => setPeople(Math.max(Number(e.target.value), 1))}
            min="1"
            className="quantity-input"
          />
          <button onClick={incrementPeople} className="quantity-button">
            +
          </button>
        </div>
        {isReservationAvailable ? (
          <span className="reservation-available">예약 가능</span>
        ) : (
          <span className="reservation-unavailable">예약 불가</span>
        )}
      </div>
      <h4 className="total-price">총 가격: {totalPrice}원</h4>
      <div className="payment-buttons">
        <button
          onClick={handleKakaoPay}
          className="kakao-pay-button"
          disabled={!isReservationAvailable}
        >
          카카오페이 결제하기
        </button>
        <button
          onClick={handleNaverPay}
          className="naver-pay-button"
          disabled={!isReservationAvailable}
        >
          네이버페이 결제하기
        </button>
      </div>

      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default RestaurantDetail;
