import { ShoppingCart } from "@phosphor-icons/react";
import React, { useState } from "react";
import { coffees } from "./data";

export function CoffeShop() {
  const [quantities, setQuantities] = useState(coffees.map(() => 1));

  const incrementQuantity = (index) => {
    setQuantities(
      quantities.map((quantity, i) => (i === index ? quantity + 1 : quantity))
    );
  };

  const decrementQuantity = (index) => {
    setQuantities(
      quantities.map((quantity, i) =>
        i === index && quantity > 1 ? quantity - 1 : quantity
      )
    );
  };

  return (
    <div>
      <h1 className="font-baloo2 text-2xl text-base-subtitle font-extrabold">
        Nossos cafés
      </h1>
      <main className="grid grid-cols-4 gap-x-8 gap-y-10 my-16">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className="rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md bg-base-card flex flex-col items-center justify-center gap-4 px-5"
          >
            <img
              src={`/${coffee.image}`}
              alt={`imagem ${coffee.name}`}
              className="size-28 -mt-8"
            />
            <div className="flex gap-2">
              {coffee.type.split(", ").map((type, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded-full uppercase bg-produto-yellow-light text-produto-yellow-dark font-bold text-[10px]"
                >
                  {type}
                </span>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center w-full text-center">
              <h1 className="font-bold font-baloo2 text-xl text-base-subtitle">
                {coffee.name}
              </h1>
              <p className="text-base-label text-sm">{coffee.description}</p>
            </div>
            <aside className="flex justify-center items-center mb-5 my-4">
              <h1 className="text-2xl font-baloo2 font-extrabold text-base-text">
                <small className="text-sm font-normal mr-1">
                  {coffee.currency}
                </small>
                {coffee.price}
              </h1>
              <div className="flex items-center gap-1 mr-2 ml-6 justify-between w-20 p-2 bg-gray-200 rounded-lg">
                <button
                  onClick={() => decrementQuantity(index)}
                  className="text-produto-purple text-2xl hover:text-produto-purple-dark transition-colors"
                >
                  -
                </button>
                <span className="text-xl">{quantities[index]}</span>
                <button
                  onClick={() => incrementQuantity(index)}
                  className="text-produto-purple text-2xl hover:text-produto-purple-dark transition-colors"
                >
                  +
                </button>
              </div>
              <button className="bg-produto-purple-dark p-2 rounded-md hover:bg-produto-purple transition-colors">
                <ShoppingCart className="size-6 text-base-card" weight="fill" />
              </button>
            </aside>
          </div>
        ))}
      </main>
    </div>
  );
}
