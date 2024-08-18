"use client";

import { useAccount, useConnect, useBalance, useVerifyMessage } from "wagmi";
import { useEnsAddress, useEnsName } from "wagmi";
import { useWeb3Modal, useWalletInfo } from "@web3modal/wagmi/react";
import Check from "./components/check";
import { SiweData } from "./components/SiweData";
import { WagmiModalInfo } from "./components/WagmiModalInfo";
import { WagmiSendCallsTest } from "./components/Wagmi/WagmiSendCallsTest";
import USDTBalanceButton from "./components/USDTBalanceButton";
import Scheduleinteraction from "./components/Scheduleinteraction";
import { SendTransaction } from "./components/SendTransactions";
import ReadContracts from "./components/ReadContracts";
import ReadContract from "./components/ReadContract";
import { WriteContract } from "./components/WriteContract";
import SAsendTransaction from "./components/SAsendTransaction";
import Usdttransfer from "./components/Usdttransfer";
import TokenSelector from "./components/dropdown";
import PermissionlessX from "./lib/PermissionlessX";

function App() {
  const result = useBalance({
    address: "0x4557B18E779944BFE9d78A672452331C186a9f48",
  });
}
export default function Home() {
  const { address, isConnected } = useAccount();
  const { walletInfo } = useWalletInfo();
  const { data, error, status } = useEnsName({ address });
  const tokens = [
    {
      name: "rmrk",
      address: "0x524d524B4c9366be706D3A90dcf70076ca037aE3",
      decimal: 18,
    },
    {
      name: "bava",
      address: "0x3fbdE9864362CE4Abb244EbeF2EF0482ABA8eA39",
      decimal: 18,
    },
    {
      name: "ai",
      address: "0x2598c30330D5771AE9F983979209486aE26dE875",
      decimal: 18,
    },
    {
      name: "moon",
      address: "0x7C8DbFdB185C088E73999770C93b885295805739",
      decimal: 18,
    },
  ];
  const handleInTokenSelect = (token) => {
    if (token) {
      // Check if token is not undefined
      console.log("Selected token address:", token.address);
      // You can set the state here or perform other actions with the selected token data
    } else {
      console.log("No token selected");
      // Handle the case where no token is selected or input is cleared
    }
  };
  const handleOutTokenSelect = (token) => {
    if (token) {
      // Check if token is not undefined
      console.log("Selected token address:", token.address);
      // You can set the state here or perform other actions with the selected token data
    } else {
      console.log("No token selected");
      // Handle the case where no token is selected or input is cleared
    }
  };

  return (
    <main className="min-h-screen px-8 py-0 pb-12 flex-1 flex flex-col items-center bg-white">
      <header className="w-full py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="hidden sm:inline text-xl font-bold">
            Schedule Transaction and swap
          </div>
        </div>
        <div className="flex items-center">
          {/* <w3m-button balance="show" /> */}
          {isConnected ? <w3m-account-button /> : <w3m-connect-button />}

          {/* <w3m-network-button /> */}
        </div>
      </header>
      <p>Select Token or enter address</p>
      <div className="flex gap-20">
        <div>
          <h1>Select a InToken</h1>
          <TokenSelector onTokenSelect={handleInTokenSelect} />
        </div>
        <div>
          <h1>Select a OutToken</h1>
          <TokenSelector onTokenSelect={handleOutTokenSelect} />
        </div>
      </div>
      {/* <USDTBalanceButton /> */}
      <PermissionlessX />
      <div className="flex gap-20">
        <div>
          Address:
          <input
            type="text"
            value={address}
            list="token-names"
            placeholder="Enter token name"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          Amount
          <input
            type="text"
            value="0"
            list="token-names"
            placeholder="Enter token name"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          Date:
          <input
            type="text"
            value="DD/MM/YY"
            list="token-names"
            placeholder="Enter token name"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
      </div>
      <button className="mt-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </main>
  );
}

// <div>Hello open() USDTB</div>
//       <div>is connected: {isConnected ? "true" : "false"}</div>
//       <div className="border border-black">
//         <Check />
//       </div>
//       <div>
//         {/* <SiweData /> */}
//         Hello
//         <WagmiModalInfo />
//         {/* <WagmiSendCallsTest /> */}
//         <USDTBalanceButton />
//         {/* <sendtransaction   /> */}
//         hi
//         <div className="border border-black">
//           <SendTransaction />
//         </div>
//         {/* <WriteContract /> */}
//         {/* <SAsendTransaction /> */}
//         {/* <Scheduleinteraction /> */}
//         {/* <Usdttransfer /> */}
//       </div>
