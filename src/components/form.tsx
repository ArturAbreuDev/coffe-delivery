import React from "react";
import { usePayment } from "../context/paymentContext"; 

export function Form() {
  const { handleSetAddress } = usePayment();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget);
    const newAddress = {
      zip: formData.get("zip") as string,
      street: formData.get("street") as string,
      number: formData.get("number") as string,
      complement: formData.get("complement") as string,
      district: formData.get("district") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
    };
    handleSetAddress(newAddress);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="zip"
        type="text"
        placeholder="CEP"
        className="bg-base-input p-3 rounded-md border-none w-44 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
      />
      <input
        name="street"
        type="text"
        placeholder="Rua"
        className="bg-base-input p-3 rounded-md border-none w-full text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
      />
      <div className="flex gap-2 items-center justify-start">
        <input
          name="number"
          type="text"
          placeholder="Número"
          className="bg-base-input p-3 rounded-md border-none w-44 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
        />
        <div className="relative w-full">
          <input
            name="complement"
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
          name="district"
          type="text"
          placeholder="Bairro"
          className="bg-base-input p-3 rounded-md border-none w-44 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
        />
        <input
          name="city"
          type="text"
          placeholder="Cidade"
          className="bg-base-input p-3 rounded-md border-none w-full text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
        />
        <input
          name="state"
          type="text"
          placeholder="UF"
          className="bg-base-input p-3 rounded-md border-none w-16 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
        />
      </div>
    </form>
  );
}
