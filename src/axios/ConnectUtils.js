import axios from "axios";

export const handleConnectWallet = async (connectWallet, navigate, setLoading) => {
  try {
    // Step 1: Connect wallet
    const walletResponse = await connectWallet(); // Await wallet connection
    if (!walletResponse || !walletResponse.publicKey) {
      console.error("Failed to connect wallet or retrieve public key");
      return;
    }

    const currentPublicKey = walletResponse.publicKey;
    console.log(currentPublicKey);

    setLoading && setLoading(true); // Update loading state if provided

    // Step 2: Fetch nonce
    const response1 = await axios.post(
      `https://domex-mw1q.onrender.com/auth/user/nonce`,
      { publicKey: currentPublicKey }
    );

    if (response1.data.data.nonce) {
      const nonce = response1.data.data.nonce;

      // Step 3: Verify nonce
      const response2 = await axios.post(
        `https://domex-mw1q.onrender.com/auth/user/verify-nonce`,
        { publicKey: currentPublicKey, nonce }
      );

      if (response2.data.statusCode === 200) {
        localStorage.setItem("accessToken", response2.data.data.token);

        // Navigate to the desired route
        window.location.href = "/Discover/my-agent";
        navigate("/Discover/my-agent", {
          state: {
            walletConnected: true,
          },
        });
      }
    }
  } catch (error) {
    console.error("Error connecting wallet:", error);
  } finally {
    setLoading && setLoading(false); // Reset loading state
  }
};
