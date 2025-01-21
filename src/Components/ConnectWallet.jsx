import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

const ConnectWallet = () => {
  const [publicKey, setPublicKey] = useState(null);

  // Function to connect to Phantom wallet
  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        // Request connection to Phantom wallet
        const response = await window.solana.connect();

        // Set the public key to the state
        setPublicKey(response.publicKey.toString());
      } catch (err) {
        console.error("Failed to connect to Phantom wallet:", err);
      }
    } else {
      alert("Phantom wallet not found. Please install it.");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        Connect Phantom Wallet
      </button>
      {publicKey && (
        <div>
          <h3>Connected with public key:</h3>
          <p>{publicKey}</p>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
