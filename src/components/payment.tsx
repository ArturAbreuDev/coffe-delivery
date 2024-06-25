import React, { useState } from "react";
import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { usePayment } from "../context/paymentContext";

export function Payment() {
  const { handleSetPaymentMethod } = usePayment();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(
    null
  );

  const handlePaymentClick = (paymentType: string) => {
    setSelectedPayment(paymentType);
    handleSetPaymentMethod(paymentType); 
  };

  const getButtonClasses = (paymentType: string) =>
    `flex gap-2 justify-start items-center p-4 rounded-md border-none w-44 text-xs font-medium text-base-text focus:outline-none focus:ring-2 focus:ring-produto-purple uppercase ${
      selectedPayment === paymentType
        ? "bg-produto-purple-light"
        : "bg-base-button"
    }`;

  return (
    <div className="flex flex-col rounded-md bg-base-card p-10 mt-4">
      <nav className="flex gap-2 justify-start items-start mb-6">
        <CurrencyDollar className="text-produto-purple size-[22px]" />
        <div className="-mt-1">
          <h2 className="text-base text-base-subtitle">Pagamento</h2>
          <p className="text-sm text-base-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </nav>
      <div className="flex gap-3">
        <button
          className={getButtonClasses("creditCard")}
          onClick={() => handlePaymentClick("creditCard")}
        >
          <CreditCard className="size-4 text-produto-purple" />
          Cartão de crédito
        </button>
        <button
          className={getButtonClasses("debitCard")}
          onClick={() => handlePaymentClick("debitCard")}
        >
          <Bank className="size-4 text-produto-purple" />
          Cartão de débito
        </button>
        <button
          className={getButtonClasses("money")}
          onClick={() => handlePaymentClick("money")}
        >
          <Money className="size-4 text-produto-purple" />
          Dinheiro
        </button>
      </div>
    </div>
  );
}
