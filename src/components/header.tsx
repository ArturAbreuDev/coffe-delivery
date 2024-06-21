import React from "react";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="py-8 px-40 flex justify-between items-center">
      <span>
        <img src="src/assets/Logo.png" alt="" />
      </span>
      <aside className="flex gap-3 justify-center items-center">
        <div className="flex p-2 gap-1 bg-produto-purple-light justify-center items-center rounded-md">
          <MapPin className="text-produto-purple-dark size-5" weight="fill" />
          <p className="text-sm text-produto-purple-dark font-normal">
            Porto Alegre, RS
          </p>
        </div>
        <div className="flex justify-center items-center rounded-sm bg-produto-yellow-light p-2">
          <ShoppingCart className="size-5 text-produto-yellow-dark" weight="fill"/>
        </div>
      </aside>
    </header>
  );
}
