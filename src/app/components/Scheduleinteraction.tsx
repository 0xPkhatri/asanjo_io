import React, { useState, FormEvent } from "react";
import {
  useAccount,
  useConnect,
  useReadContract,
  useWriteContract,
} from "wagmi";
import { schedulrTransferAbi } from "../../abi";
import { ethers } from "ethers";

const contract_address = "0xF1aE317941efeb1ffB103D959EF58170F1e577E0"; // Replace with actual contract address
function addressToBytes(address) {
  return ethers.utils.arrayify(ethers.utils.getAddress(address));
}
export default function ScheduleInteraction() {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const [isInitialized, setIsInitialized] = useState<boolean | null>(null);
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const { data, isError, isLoading } = useReadContract({
    address: contract_address,
    abi: schedulrTransferAbi,
    functionName: "isInitialized",
    args: [address],
  });
  console.log(
    ethers.utils.hexlify(
      ethers.utils.arrayify(ethers.utils.getAddress(address))
    )
  );
  const handleClick = async () => {
    if (!isConnected) {
      await connect({ connector: connectors[0] });
    }
    if (data !== undefined) {
      setIsInitialized(data as boolean);
    }
  };

  const handleinstallClick = async () => {
    if (!isConnected) {
      await connect({ connector: connectors[0] });
    }
    if (data !== undefined) {
      console.log("address: ", address);
      console.log("data: ", [
        ethers.utils.hexlify(
          ethers.utils.arrayify(ethers.utils.getAddress(address))
        ),
      ]);
      writeContract({
        address: contract_address,
        abi: schedulrTransferAbi,
        functionName: "onInstall",
        args: [
          ethers.utils.hexlify(
            ethers.utils.arrayify(ethers.utils.getAddress(address))
          ),
        ],
      });
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    writeContract({
      address: contract_address,
      abi: schedulrTransferAbi,
      functionName: "onInstall",
      args: [
        ethers.utils.hexlify(
          ethers.utils.arrayify(ethers.utils.getAddress(address))
        ),
      ],
    });
  }

  return (
    <div>
      <button
        className="border border-blue-500 bg-blue-400 rounded-md p-2"
        onClick={handleinstallClick}
      >
        useonInstall
      </button>
      <button
        onClick={handleClick}
        className="border border-blue-500 bg-blue-400 rounded-md p-2"
      >
        {isConnected ? "Check Initialization" : "Connect Wallet"}
      </button>
      {isInitialized !== null && (
        <p>Contract Initialized: {isInitialized ? "Yes" : "No"}</p>
      )}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching initialization status</p>}

      <form onSubmit={handleSubmit}>
        <button
          className="border border-green-500 bg-green-400 rounded-md p-2"
          type="submit"
          disabled={isPending}
        >
          onInstall
        </button>
      </form>
      {isPending && <p>Installing...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
