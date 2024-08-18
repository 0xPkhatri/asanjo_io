import React from "react";
import { useAccount, useSignMessage } from "wagmi";
import { useWeb3ModalState } from "@web3modal/wagmi/react";

export default function Check() {
  const { addresses, chain, isConnecting, isDisconnected } = useAccount();
  const { signMessage } = useSignMessage();
  const { open, selectedNetworkId } = useWeb3ModalState();

  return (
    <div>
      <div>Address: {addresses}</div>
      <div>Connecting: {isConnecting ? "Yes" : "No"}</div>
      <div>Disconnected: {isDisconnected ? "Yes" : "No"}</div>
      <div>walletInfo: {chain ? chain.name : undefined}</div>
      <button onClick={() => signMessage({ message: "hello world" })}>
        Sign message
      </button>
      <div>Address: {open ? open.toString() : "flase"}</div>

      <div>Address: {selectedNetworkId}</div>
    </div>
  );
}
