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
      { id: 6, name: "제주막걸리", price: 3000 },
      { id: 7, name: "제주소주", price: 4000 },
      { id: 8, name: "감귤 샐러드", price: 6000 },
      { id: 9, name: "고사리 나물", price: 5000 },
      { id: 10, name: "감자전", price: 7000 },
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
      { id: 6, name: "땅콩 마카롱", price: 3500 },
      { id: 7, name: "바닐라 쉐이크", price: 5500 },
      { id: 8, name: "카라멜 마키아토", price: 5000 },
      { id: 9, name: "초콜릿 스무디", price: 6000 },
      { id: 10, name: "유자 에이드", price: 5000 },
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
      { id: 6, name: "전복죽", price: 12000 },
      { id: 7, name: "홍합탕", price: 15000 },
      { id: 8, name: "고등어 조림", price: 18000 },
      { id: 9, name: "갈치구이", price: 25000 },
      { id: 10, name: "옥돔찜", price: 35000 },
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
      { id: 6, name: "레몬 에이드", price: 5000 },
      { id: 7, name: "아보카도 샌드위치", price: 7000 },
      { id: 8, name: "블루베리 머핀", price: 4500 },
      { id: 9, name: "크림치즈 베이글", price: 4000 },
      { id: 10, name: "핫초코", price: 4500 },
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
      { id: 6, name: "감귤 타르트", price: 6000 },
      { id: 7, name: "감귤 피클", price: 5000 },
      { id: 8, name: "감귤 떡", price: 4000 },
      { id: 9, name: "감귤 초콜릿", price: 5500 },
      { id: 10, name: "감귤 막걸리", price: 7000 },
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
      { id: 6, name: "멍게", price: 20000 },
      { id: 7, name: "해삼", price: 20000 },
      { id: 8, name: "도미 회", price: 45000 },
      { id: 9, name: "광어 회", price: 40000 },
      { id: 10, name: "돌문어 숙회", price: 35000 },
    ],
  },
  {
    id: 7,
    name: "한림 해산물 레스토랑",
    image: "/images/hanlim_seafood.jpg",
    menus: [
      { id: 1, name: "랍스터 구이", price: 80000 },
      { id: 2, name: "대게찜", price: 90000 },
      { id: 3, name: "조개찜", price: 60000 },
      { id: 4, name: "문어 샐러드", price: 25000 },
      { id: 5, name: "홍합 스튜", price: 20000 },
      { id: 6, name: "연어 스테이크", price: 40000 },
      { id: 7, name: "갈릭 쉬림프", price: 35000 },
      { id: 8, name: "바지락 크림 파스타", price: 30000 },
      { id: 9, name: "새우 칵테일", price: 20000 },
      { id: 10, name: "오징어 볶음", price: 15000 },
    ],
  },
  // 추가 레스토랑 생략 (같은 형식으로 12개까지 확장 가능)
];

export default restaurants;
