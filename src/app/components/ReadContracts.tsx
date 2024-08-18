import { type BaseError, useReadContracts } from "wagmi";
import { WAGMIAbi } from "../../abi";

export default function ReadContracts() {
  const { data, error, isPending } = useReadContracts({
    contracts: [
      {
        address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
        abi: WAGMIAbi,
        functionName: "balanceOf",
        args: ["0x03A71968491d55603FFe1b11A9e23eF013f75bCF"],
      },
      {
        address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
        abi: WAGMIAbi,
        functionName: "ownerOf",
        args: [BigInt(69)],
      },
      {
        address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
        abi: WAGMIAbi,
        functionName: "totalSupply",
      },
    ],
  });

  const [balance, ownerOf, totalSupply] = data || [];

  if (isPending) return <div>Loading...</div>;

  if (error)
    return (
      <div>Error: {(error as BaseError).shortMessage || error.message}</div>
    );

  return (
    <>
      <div>Balance: {balance ? balance.result.toString() : "N/A"}</div>
      <div>
        Owner of Token 69: {ownerOf ? ownerOf.result.toString() : "N/A"}
      </div>
      <div>
        Total Supply: {totalSupply ? totalSupply.result.toString() : "N/A"}
      </div>
    </>
  );
}
