import React from "react";
import { CoffeShop } from "../components/coffe";
import { Header } from "../components/header";
import { Introduction } from "../components/introduction";


function Cart() {
  return (
    <div className="flex flex-col px-40 leading-130">
      <Header />
      <Introduction />
      <CoffeShop />
    </div>
  );
}

export default Cart;
