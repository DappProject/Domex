import React, { createContext, useState, useContext, useEffect } from "react";
import { connectToPhantomWallet } from "./walletUtils"; // Ensure the correct path

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [publicKey, setPublicKey] = useState(null);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    const { publicKey, error } = await connectToPhantomWallet();
    setPublicKey(publicKey);
    setError(error);
    return { publicKey, error }; // Return value for immediate usage
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const publicKey = urlParams.get('publicKey');
    if (publicKey) {
      setPublicKey(publicKey);
    }
  }, []);

  return (
    <WalletContext.Provider value={{ publicKey, error, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
