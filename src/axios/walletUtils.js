export const connectToPhantomWallet = async () => {
  console.log("fefas")
     if (window.solana && window.solana.isPhantom) {
       try {
         // Request connection to Phantom wallet
         const response = await window.solana.connect();
         console.log(response.publicKey)
         return { publicKey: response.publicKey.toString(), error: null };
       } catch (err) {
         console.error("Failed to connect to Phantom wallet:", err);
         return { publicKey: null, error: err.message || "An unknown error occurred" };
       }
     } else {
       const error = "Phantom wallet not found. Please install it.";
       alert(error);
       return { publicKey: null, error };
     }
   };
   