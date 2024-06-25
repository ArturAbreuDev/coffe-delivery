import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Address {
  zip?: string;
  street?: string;
  number?: string;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
}

interface PaymentContextType {
  address: Address;
  paymentMethod: string | null;
  handleSetAddress: (newAddress: Address) => void;
  handleSetPaymentMethod: (method: string) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

interface PaymentProviderProps {
  children: ReactNode;
}

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const [address, setAddress] = useState<Address>({});
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const handleSetAddress = (newAddress: Address) => {
    setAddress(newAddress);
  };

  const handleSetPaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <PaymentContext.Provider value={{ address, paymentMethod, handleSetAddress, handleSetPaymentMethod }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
