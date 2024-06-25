import React from "react";

export function Form() {
  return (
    <form action="" className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="CEP"
        className="bg-base-input p-3 rounded-md border-none w-44 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
      />
      <input
        type="text"
        placeholder="Rua"
        className="bg-base-input p-3 rounded-md border-none w-full text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
      />
      <div className="flex gap-2 items-center justify-start">
        <input
          type="text"
          placeholder="Numero"
          className="bg-base-input p-3 rounded-md border-none w-44 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
        />
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Complemento"
            className="bg-base-input p-3 rounded-md border-none w-full text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
          />
          <span className="absolute right-3 top-3 text-sm font-medium text-base-label">
            Opcional
          </span>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-start">
        <input
          type="text"
          placeholder="Bairro"
          className="bg-base-input p-3 rounded-md border-none w-44 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
        />
        <input
          type="text"
          placeholder="Cidade"
          className="bg-base-input p-3 rounded-md border-none w-full text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
        />
        <input
          type="text"
          placeholder="UF"
          className="bg-base-input p-3 rounded-md border-none w-16 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
        />
      </div>
    </form>
  );
}
