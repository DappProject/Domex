export const connectToPhantomWallet = async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      // If Phantom wallet is installed, try to connect
      const response = await window.solana.connect({ onlyIfTrusted: false });
      console.log("Public Key:", response.publicKey.toString());
      
      // Return publicKey and error state
      return { publicKey: response.publicKey.toString(), error: null };
    } catch (err) {
      console.error("Failed to connect to Phantom wallet:", err);
      return { publicKey: null, error: err.message || "An unknown error occurred" };
    }
  } else if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
    // If Phantom wallet isn't found but the device is mobile, redirect to the Phantom app
    const phantomAppUrl = "phantom://"; // Custom URL scheme to open the Phantom app on mobile
    alert("Phantom wallet not found on your browser. Opening Phantom app...");

    // Attempt to open the Phantom app directly using the custom URL scheme
    window.location.href = phantomAppUrl;

    return { publicKey: null, error: "Phantom wallet app not found. Please ensure it's installed." };
  } else {
    // Redirect to the Phantom website for desktop users
    const phantomDownloadUrl = "https://phantom.app/download";
    alert("Phantom wallet not found. Redirecting to download page...");
    window.location.href = phantomDownloadUrl;

    return { publicKey: null, error: "Phantom wallet not installed." };
  }
};
