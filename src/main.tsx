import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CartProvider } from "../src/context/cartContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";
import { PaymentProvider } from "./context/paymentContext.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <PaymentProvider>
          <Router />
        </PaymentProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
