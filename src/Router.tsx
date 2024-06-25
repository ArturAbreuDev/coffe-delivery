import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../src/pages/Cart"
import Home from "../src/pages/Home"
import Corfirmed from "../src/pages/Corfirmed";

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/finished" element={<Corfirmed />} />
    </Routes>
  );
}
