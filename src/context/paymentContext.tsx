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
  isReadyToConfirm: boolean;
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
  const [isReadyToConfirm, setIsReadyToConfirm] = useState(false);

  const handleSetAddress = (newAddress: Address) => {
    setAddress(newAddress);
    setIsReadyToConfirm(!!newAddress.zip && !!newAddress.street && !!newAddress.state && !!paymentMethod);
  };
  
  const handleSetPaymentMethod = (method: string) => {
    setPaymentMethod(method);
    setIsReadyToConfirm(!!address.zip && !!address.street && !!address.state && !!method);
  };
  return (
    <PaymentContext.Provider value={{ address, paymentMethod, isReadyToConfirm, handleSetAddress, handleSetPaymentMethod }}>
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
