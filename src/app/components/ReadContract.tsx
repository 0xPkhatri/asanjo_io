import { type BaseError, useReadContract } from "wagmi";
import { WAGMIAbi } from "../../abi";

export default function ReadContract() {
  const {
    data: balance,
    error,
    isPending,
  } = useReadContract({
    address: "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
    abi: WAGMIAbi,
    functionName: "balanceOf",
    args: ["0x03A71968491d55603FFe1b11A9e23eF013f75bCF"],
  });

  if (isPending) return <div>Loading...</div>;

  if (error)
    return (
      <div>Error: {(error as BaseError).shortMessage || error.message}</div>
    );

  return (
    <>
      <div>Balance: {balance ? balance.toString() : "N/A"}</div>
    </>
  );
}
