import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Home";
import Shoes from "./assets/Components/Shoes";
import Shirts from "./assets/Components/Shirts";
import CartView from "./CartView";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shoes" element={<Shoes category="Shoes" />}></Route>
        <Route path="/shirts" element={<Shirts category="Shirt" />}></Route>
        <Route path="/home" element={<Home   />}></Route>
        <Route path="/Cart" element={<CartView />}></Route>
      </Routes>
    </div>
  );
};

export default App;
