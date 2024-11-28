import React from "react";
import Home from "./Pages/Home";
import ShopGride from "./Pages/ShopGride";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Shop-grid" element={<ShopGride />} />
      </Routes>
    </Router>
  );
}

export default App;
