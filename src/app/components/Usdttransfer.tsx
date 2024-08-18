import React, { useState } from "react";
import { useAccount, useConnect, useReadContract } from "wagmi";
import { useWriteContract } from "wagmi";
import { USDTAbi } from "../../abi";
import { ethers } from "ethers";
import { useWeb3 } from '../../context/Web3Context';

const USDTAddress = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"; // Replace with actual USDT contract address if different

export default function Usdttransfer() {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();

  const { data: hash, writeContract } = useWriteContract();
  console.log("Address:", address);
  console.log("ABI:", USDTAbi);
  console.log("Contract Address:", USDTAddress);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const receiverAddress = formData.get("receiverAddress") as string;
    writeContract({
      address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
      abi: USDTAbi,
      functionName: "transfer",
      args: [receiverAddress, BigInt(1000000)],
    });
  }
  const handletransfer = async () => {
    console.log([address, BigInt(1000000)]);
    writeContract({
      address: USDTAddress,
      abi: USDTAbi,
      functionName: "transfer",
      args: [address, 1000000],
    });
  };
  return (
    <div>
      <button
        className="border bg-indigo-400 rounded-md p-2"
        onClick={handletransfer}
      >
        transfer
      </button>
      <form onSubmit={submit}>
        <input
          name="receiverAddress"
          placeholder="0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
          required
        />
        <button type="submit">Transfer Token</button>
        {hash && <div>Transaction Hash: {hash}</div>}
      </form>

      <button
        className="border bg-indigo-400 rounded-md p-2"
        onClick={async () => {
          // Checking if all values are defined
          if (!USDTAbi || !USDTAddress || !address) {
            console.error("One or more required values are undefined");
            return;
          }

          try {
            const response = await writeContract({
              abi: USDTAbi,
              address: USDTAddress,
              functionName: "transfer",
              args: [address, ethers.utils.parseUnits("1.0", 6)], // Explicit conversion to BigInt
            });
            console.log("Transaction successful:", response);
          } catch (error) {
            console.error("Error during transaction:", error);
          }
        }}
      >
        Transfer
      </button>
    </div>
  );
}
