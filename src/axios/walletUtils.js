export const connectToPhantomWallet = async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      // Ensure the wallet opens every time
      const response = await window.solana.connect({ onlyIfTrusted: false });
      console.log("Public Key:", response.publicKey.toString());
      // Perform your success action here, like logging in the user
      return { publicKey: response.publicKey.toString(), error: null };
    } catch (err) {
      console.error("Failed to connect to Phantom wallet:", err);
      return { publicKey: null, error: err.message || "An unknown error occurred" };
    }
  } else {
    // Redirect the user to the Phantom website to download the wallet
    const phantomDownloadUrl = "https://phantom.app/download";
    alert("Phantom wallet not found. Redirecting to download page...");
    window.location.href = phantomDownloadUrl;
    return { publicKey: null, error: "Phantom wallet not installed." };
  }
};
