// src/data/restaurants.js

const restaurants = [
    {
      id: 1,
      name: "제주 흑돼지 전문점",
      image: "/images/jeju_black_pork.jpg",
      menus: [
        { id: 1, name: "흑돼지 삼겹살", price: 18000 },
        { id: 2, name: "흑돼지 목살", price: 17000 },
        { id: 3, name: "돼지김치찌개", price: 8000 },
        { id: 4, name: "된장찌개", price: 7000 },
        { id: 5, name: "공기밥", price: 1000 },
      ],
    },
    {
      id: 2,
      name: "우도 땅콩 아이스크림 카페",
      image: "/images/udo_peanut_icecream.jpg",
      menus: [
        { id: 1, name: "땅콩 아이스크림", price: 4500 },
        { id: 2, name: "땅콩 라떼", price: 5000 },
        { id: 3, name: "아메리카노", price: 4000 },
        { id: 4, name: "카페 라떼", price: 4500 },
        { id: 5, name: "우도 땅콩 케이크", price: 6000 },
      ],
    },
    {
      id: 3,
      name: "성산 일출봉 해물탕",
      image: "/images/seongsan_seafood.jpg",
      menus: [
        { id: 1, name: "해물탕 (소)", price: 50000 },
        { id: 2, name: "해물탕 (중)", price: 70000 },
        { id: 3, name: "해물탕 (대)", price: 90000 },
        { id: 4, name: "전복구이", price: 20000 },
        { id: 5, name: "해물파전", price: 15000 },
      ],
    },
    {
      id: 4,
      name: "협재 해수욕장 카페",
      image: "/images/hyeopjae_cafe.jpg",
      menus: [
        { id: 1, name: "바닐라 라떼", price: 5000 },
        { id: 2, name: "딸기 스무디", price: 5500 },
        { id: 3, name: "망고 주스", price: 5500 },
        { id: 4, name: "초콜릿 케이크", price: 6000 },
        { id: 5, name: "크로와상", price: 4000 },
      ],
    },
    {
      id: 5,
      name: "제주 감귤 밭 식당",
      image: "/images/jeju_orange_farm.jpg",
      menus: [
        { id: 1, name: "감귤 비빔밥", price: 8000 },
        { id: 2, name: "감귤 샐러드", price: 7500 },
        { id: 3, name: "감귤 에이드", price: 5000 },
        { id: 4, name: "감귤 주스", price: 5000 },
        { id: 5, name: "감귤 아이스크림", price: 4500 },
      ],
    },
    {
      id: 6,
      name: "중문 바닷가 횟집",
      image: "/images/jungmun_sashimi.jpg",
      menus: [
        { id: 1, name: "모둠회 (소)", price: 60000 },
        { id: 2, name: "모둠회 (중)", price: 80000 },
        { id: 3, name: "모둠회 (대)", price: 100000 },
        { id: 4, name: "전복 회", price: 30000 },
        { id: 5, name: "해산물 모둠", price: 40000 },
      ],
    },
  ];
  
  export default restaurants;
  