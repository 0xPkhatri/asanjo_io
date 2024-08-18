import React, { useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { ethers } from "ethers";
import { SafeSmartAccountClient } from "@/lib/permissionless";

const USDTAddress = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"; // Replace with actual USDT contract address if different
const USDTAbi = [
  // The ABI for the balanceOf function
  "function balanceOf(address owner) view returns (uint256)",
];

function USDTBalanceButton({
  safeClient,
}: {
  safeClient: SafeSmartAccountClient;
}) {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = async () => {
    if (!isConnected) {
      await connect(connectors[0]);
    }

    if (safeClient && address) {
      setIsLoading(true);
      setIsError(false);

      try {
        // Create a contract instance
        const contract = new ethers.Contract(
          USDTAddress,
          USDTAbi,
          safeClient.publicClient
        );
        // Fetch balance using SafeSmartAccountClient
        const balance = await contract.balanceOf(address);
        // Format the balance and set it to the state
        setBalance(ethers.utils.formatUnits(balance, 6)); // USDT typically has 6 decimal places
      } catch (error) {
        console.error("Error fetching balance:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isConnected ? "Show USDT Balance" : "Connect Wallet"}
      </button>
      {balance && <p>Your USDT Balance: {balance}</p>}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching balance</p>}
    </div>
  );
}

export default USDTBalanceButton;
