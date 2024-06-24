import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import React from "react";

export function Introduction() {
  return (
    <main className="flex justify-between items-center gap-4 my-14">
      <div className="absolute inset-0 -z-10 bg-[url('/Background.png')] bg-cover bg-center"></div>

      <div className="flex flex-col text-start">
        <h1 className="text-5xl font-extrabold font-baloo2 leading-130 mb-4">
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p className="text-xl font-normal font-roboto leading-130">
          Com o Coffee Delivery você recebe seu café onde estiver, a<br />
          qualquer hora
        </p>
        <aside className="grid grid-cols-2 grid-rows-2 items-center gap-x-10 gap-y-5 justify-center mt-16">
          <div className="flex gap-4 items-center">
            <div className="bg-produto-yellow-dark  p-2 rounded-full justify-center items-center">
              <ShoppingCart className="text-white size-5" weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-base-text  p-2 rounded-full justify-center items-center">
              <Package className="text-white size-5" weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-produto-yellow  p-2 rounded-full justify-center items-center">
              <Timer className="text-white size-5" weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-produto-purple  p-2 rounded-full justify-center items-center">
              <Coffee className="text-white size-5" weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </div>
        </aside>
      </div>
      <div>
        <img src="/coffe.png" alt="" />
      </div>
    </main>
  );
}
