import React from "react";
import { Header } from "../components/header";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export default function Confirmed() {
  return (
    <div className="flex flex-col px-40 leading-130 font-roboto">
      <Header />
      <main className="flex flex-col my-16">
        <h1 className="text-3xl font-baloo2 text-produto-yellow-dark font-extrabold ">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-xl text-base-subtitle font-normal mb-10">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="flex justify-between items-center gap-4">
          <div className="w-[580px] rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md p-0.5 bg-gradient-to-r from-produto-yellow to-produto-purple">
            <div className="flex flex-col gap-8 items-start justify-start bg-white h-full w-full rounded-tr-[35px] rounded-bl-[35px] rounded-tl-lg rounded-br-lg p-10">
              <strong className="flex gap-3 items-start justify-center">
                <div className="flex justify-center items-center rounded-full p-2 bg-produto-purple">
                  <MapPin weight="fill" className="size-4 text-white" />
                </div>
                <span className="text-base text-base-title w-80 -mt-1">
                  <small className="text-base font-normal">Entrega em </small>
                  Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS
                </span>
              </strong>
              <strong className="flex gap-3 items-start justify-center">
                <div className="flex justify-center items-center rounded-full p-2 bg-produto-yellow">
                  <Timer weight="fill" className="size-4 text-white" />
                </div>
                <span className="text-base text-base-title w-80 -mt-1">
                  <small className="text-base font-normal">
                    Previsão de entrega
                  </small>
                  <br />
                  20 min - 30 min
                </span>
              </strong>
              <strong className="flex gap-3 items-start justify-center">
                <div className="flex justify-center items-center rounded-full p-2 bg-produto-yellow-dark">
                  <CurrencyDollar
                   
                    className="size-4 text-white"
                  />
                </div>
                <span className="text-base text-base-title w-80 -mt-1">
                  <small className="text-base font-normal">
                    Pagamento na entrega
                  </small>{" "}
                  <br />
                  Cartão de Crédito
                </span>
              </strong>
            </div>
          </div>
          <img src="Illustration.png" alt="" className="w-[492px] h-[293px]" />
        </div>
      </main>
    </div>
  );
}
