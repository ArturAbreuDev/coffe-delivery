import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../src/pages/Cart"
import Home from "../src/pages/Cart"

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<Cart />} />
    </Routes>
  );
}
