import React, { createContext, useState, useContext } from "react";
import { connectToPhantomWallet } from "./walletUtils"; // Ensure the correct path

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [publicKey, setPublicKey] = useState(null);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    const { publicKey, error } = await connectToPhantomWallet();
    setPublicKey(publicKey);
    setError(error);
  };
console.log(publicKey,"in wallet context")
  return (
    <WalletContext.Provider value={{ publicKey, error, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
