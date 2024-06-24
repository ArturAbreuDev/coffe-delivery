"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface Coffe {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: Coffe[];
  addCoffe: (product: Coffe) => void;
  removeCoffe: (id: number) => void;
  calculateTotal: () => string;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  modalCart: boolean;
  setModalCart: Dispatch<SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Coffe[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = sessionStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [modalCart, setModalCart] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addCoffe = (product: Coffe) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeCoffe = (id: number) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const calculateTotal = () => {
    const total = cart.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
    return total.toFixed(2);
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const context: CartContextType = {
    cart,
    addCoffe,
    calculateTotal,
    increaseQuantity,
    modalCart,
    setModalCart,
    removeCoffe,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
