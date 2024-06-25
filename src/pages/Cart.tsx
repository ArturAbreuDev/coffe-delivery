import React from "react";
import { Header } from "../components/header";
import { MapPinLine, Trash } from "@phosphor-icons/react";
import { useCart } from "../context/cartContext";
import { Form } from "../components/form";
import { Payment } from "../components/payment";
import { useNavigate } from "react-router-dom";
import { usePayment } from "../context/paymentContext";

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    removeCoffe,
    calculateTotal,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();
  const { isReadyToConfirm } = usePayment();

  const handleDecrementQuantity = (id) => {
    decreaseQuantity(id);
  };

  const handleIncrementQuantity = (id) => {
    increaseQuantity(id);
  };

  const handleRemoveCoffe = (id) => {
    removeCoffe(id);
  };

  const deliveryFee = 3.0;

  const handleRouteFinished = () => {
    navigate("/finished");
    clearCart();
  };

  return (
    <div className="flex flex-col px-40 leading-130">
      <Header />
      <main className="grid grid-cols-2 items-start justify-center gap-6 my-20">
        <aside className="flex flex-col w-full">
          <h1 className="text-lg font-bold font-baloo2 text-base-subtitle">
            Complete seu pedido
          </h1>
          <div className="flex flex-col rounded-md bg-base-card p-10 mt-4">
            <nav className="flex gap-2 justify-start items-start mb-6">
              <MapPinLine className="text-produto-yellow-dark size-[22px]" />
              <div className="-mt-1">
                <h2 className="text-base text-base-subtitle">
                  Endereço de Entrega
                </h2>
                <p className="text-sm text-base-text">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </nav>
            <Form />
          </div>
          <Payment />
        </aside>
        <aside className="flex flex-col">
          <h1 className="text-lg font-bold font-baloo2 text-base-subtitle">
            Cafés selecionados
          </h1>
          <div className="flex flex-col rounded-tr-[44px] rounded-bl-[44px] rounded-tl-md rounded-br-md bg-base-card p-10 mt-4 gap-4">
            {cart.map((product) => (
              <>
                <div
                  key={product.id}
                  className="flex items-start justify-between w-full gap-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[64px] h-[64px]"
                  />
                  <div className="flex flex-col flex-1 ml-4">
                    <span className="text-base-subtitle text-base">
                      {product.name}
                    </span>
                    <main className="flex gap-2 justify-start items-center mt-2">
                      <div className="flex items-center gap-1 p-2 bg-base-button rounded-lg h-8 hover:bg-base-hover transition-colors">
                        <button
                          onClick={() => handleDecrementQuantity(product.id)}
                          className="text-produto-purple text-2xl hover:text-produto-purple-dark transition-colors"
                        >
                          -
                        </button>
                        <span className="text-xl mx-2">{product.quantity}</span>
                        <button
                          onClick={() => handleIncrementQuantity(product.id)}
                          className="text-produto-purple text-2xl hover:text-produto-purple-dark transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveCoffe(product.id)}
                        className="bg-base-button text-base-text text-xs uppercase flex justify-center items-center p-2 rounded-lg hover:bg-base-hover transition-colors"
                      >
                        <Trash className="text-produto-purple size-4 mr-2" />
                        REMOVER
                      </button>
                    </main>
                  </div>
                  <h3 className="text-base font-bold text-base-text">
                    R$ {product.price.toFixed(2)}
                  </h3>
                </div>
                <hr className="bg-base-button my-3 h-px rounded-full" />
              </>
            ))}
            <strong className="flex flex-col gap-4 my-4">
              <p className="text-sm text-base-text flex justify-between items-center font-normal">
                Total de itens
                <small className="text-base">R$ {calculateTotal()}</small>
              </p>
              <p className="text-sm text-base-text flex justify-between items-center font-normal">
                Entrega
                <small className="text-base">R$ {deliveryFee.toFixed(2)}</small>
              </p>
              <h3 className="text-xl font-bold text-base-text flex justify-between items-center">
                Total
                <small className="text-xl">
                  R$ {(parseFloat(calculateTotal()) + deliveryFee).toFixed(2)}
                </small>
              </h3>
              <button
                onClick={handleRouteFinished}
                disabled={!isReadyToConfirm}
                className="px-2 py-3 w-full mt-3 text-white bg-produto-yellow text-sm font-bold rounded-md uppercase hover:bg-produto-yellow-dark transition-colors disabled:cursor-not-allowed disabled:bg-produto-yellow-dark"
              >
                confirmar pedido
              </button>
            </strong>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Cart;
