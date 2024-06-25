import React, { useState, useEffect } from "react";
import { usePayment } from "../context/paymentContext"; 

export function Form() {
  const { handleSetAddress } = usePayment();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    zip: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;
    Object.entries(formData).forEach(([key, value]) => {
      if (!value && key !== "complement") {
        newErrors[key] = `${translateField(key)} é obrigatório`;
        isValid = false;
      }
    });
    setErrors(newErrors);
    if (isValid) {
      handleSetAddress(formData);
    }
  };

  const translateField = (field: string) => {
    const translations: { [key: string]: string } = {
      zip: "CEP",
      street: "Rua",
      number: "Número",
      complement: "Complemento",
      district: "Bairro",
      city: "Cidade",
      state: "UF",
    };
    return translations[field] || field;
  };

  return (
    <form className="flex flex-col gap-4">
      <div>
        <input
          name="zip"
          type="text"
          placeholder="CEP"
          value={formData.zip}
          onChange={handleChange}
          className={`bg-base-input p-3 rounded-md border-none w-44 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark ${errors.zip ? 'border-red-500' : ''}`}
        />
      </div>
      <div>
        <input
          name="street"
          type="text"
          placeholder="Rua"
          value={formData.street}
          onChange={handleChange}
          className={`bg-base-input p-3 rounded-md border-none w-full text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark ${errors.street ? 'border-red-500' : ''}`}
        />
      </div>
      <div className="flex gap-2 items-center justify-start">
        <div>
          <input
            name="number"
            type="text"
            placeholder="Número"
            value={formData.number}
            onChange={handleChange}
            className={`bg-base-input p-3 rounded-md border-none w-44 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark ${errors.number ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="relative w-full">
          <input
            name="complement"
            type="text"
            placeholder="Complemento"
            value={formData.complement}
            onChange={handleChange}
            className="bg-base-input p-3 rounded-md border-none w-full text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark"
          />
          <span className="absolute right-3 top-3 text-sm font-medium text-base-label">
            Opcional
          </span>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-start">
        <div>
          <input
            name="district"
            type="text"
            placeholder="Bairro"
            value={formData.district}
            onChange={handleChange}
            className={`bg-base-input p-3 rounded-md border-none w-44 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark ${errors.district ? 'border-red-500' : ''}`}
          />
        </div>
        <div>
          <input
            name="city"
            type="text"
            placeholder="Cidade"
            value={formData.city}
            onChange={handleChange}
            className={`bg-base-input p-3 rounded-md border-none w-full text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark ${errors.city ? 'border-red-500' : ''}`}
          />
        </div>
        <div>
          <input
            name="state"
            type="text"
            placeholder="UF"
            value={formData.state}
            onChange={handleChange}
            className={`bg-base-input p-3 rounded-md border-none w-16 text-sm font-medium text-base-label focus:outline-none focus:ring-2 focus:ring-produto-yellow-dark ${errors.state ? 'border-red-500' : ''}`}
          />
        </div>
      </div>
    </form>
  );
}
