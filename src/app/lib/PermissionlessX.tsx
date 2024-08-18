import React from "react";
import { useState } from "react";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider, JsonRpcSigner, ethers, Provider } from "ethers";

import { getSmartAccountClient } from "./permissionless";
// import { abi, address as stc } from '../utils/ScheduleTransferContract'

export default function Permissionless() {
  const { address, chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSignMessage() {
    setLoading(true);
    setError("");
    if (!walletProvider || !address) {
      setError("User is disconnected.");
      setLoading(false);
      return;
    }

    const provider = new BrowserProvider(walletProvider, chainId);
    const signer = new JsonRpcSigner(provider, address);

    const smartAccountClient = await getSmartAccountClient(signer);
    console.log("hi");
    console.log(smartAccountClient);

    // const pimlicoUrl3 = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${process.env['NEXT_PUBLIC_PIMLICO_KEY']}`;
    // console.log('3',pimlicoUrl3)
    // const txHash = await smartAccountClient.sendTransaction({
    //     to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    //     value: 0n,
    //     data: "0x1234",
    // })

    // console.log(`User operation included: https://sepolia.etherscan.io/tx/${txHash}`)
    // const contract = new ethers.Contract(stc, abi, signer)
  }

  return (
    <div>
      <button onClick={onSignMessage}>Click me for X signer</button>
    </div>
  );
}
