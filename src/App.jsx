// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";
import Navbar from "./components/Navbar";
import ARPage from "./components/Ar";
import ARBall from "./components/ARBall";
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/ar" element={<ARPage />} />
          <Route path="/ar/ball" element={<ARBall />} />
          
        </Routes>
      </Router>
    </RecoilRoot>
  );

}

export default App;
