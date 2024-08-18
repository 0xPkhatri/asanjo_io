import { useState } from "react";
import { ethers } from "ethers";
import {
  useConnect,
  useAccount,
  usePrepareSendTransaction,
  useSendTransaction,
} from "wagmi";

export default function TransferETH() {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const { config } = usePrepareSendTransaction({
    request: {
      to: recipient,
      value: amount ? ethers.utils.parseEther(amount) : undefined,
    },
    enabled: isConnected && recipient && amount,
  });

  const { sendTransaction } = useSendTransaction(config);

  const handleTransfer = async () => {
    if (!isConnected) {
      await connect(connectors[0]); // Connect using WalletConnect or any other configured connector
    }
    sendTransaction();
  };

  return (
    <div>
      <h1>Transfer ETH</h1>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleTransfer}
        disabled={!isConnected || !recipient || !amount}
      >
        {isConnected ? "Send ETH" : "Connect Wallet"}
      </button>
    </div>
  );
}
