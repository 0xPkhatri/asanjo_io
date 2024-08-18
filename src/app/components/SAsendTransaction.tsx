import { writeFileSync } from "fs";
import {
  ENTRYPOINT_ADDRESS_V07,
  GetUserOperationReceiptReturnType,
  UserOperation,
  bundlerActions,
  createSmartAccountClient,
  getAccountNonce,
  getSenderAddress,
  getUserOperationHash,
  signUserOperationHashWithECDSA,
  waitForUserOperationReceipt,
} from "permissionless";
import {
  privateKeyToSafeSmartAccount,
  privateKeyToSimpleSmartAccount,
  signerToSafeSmartAccount,
} from "permissionless/accounts";
import {
  pimlicoBundlerActions,
  pimlicoPaymasterActions,
} from "permissionless/actions/pimlico";
import {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico";
import {
  Address,
  Hash,
  Hex,
  concat,
  createClient,
  createPublicClient,
  encodeFunctionData,
  http,
  parseAbiItem,
} from "viem";
import {
  generatePrivateKey,
  privateKeyToAccount,
  signMessage,
} from "viem/accounts";
import { lineaTestnet, polygonMumbai, sepolia } from "viem/chains";

// Initialize Pimlico and Viem configurations
const apiKey = "pim_cjr1AsK3B5S3t6BLBLf7kF";
const paymasterUrl = `https://api.pimlico.io/v2/sepolia/rpc?apikey=${apiKey}`;

const privateKey =
  (process.env.PRIVATE_KEY as Hex) ??
  (() => {
    const pk = generatePrivateKey();
    writeFileSync(".env", `PRIVATE_KEY=${pk}`);
    return pk;
  })();

export const publicClient = createPublicClient({
  transport: http("https://rpc.ankr.com/eth_sepolia"),
});

export const paymasterClient = createPimlicoPaymasterClient({
  transport: http(paymasterUrl),
  entryPoint: ENTRYPOINT_ADDRESS_V07,
});
export default function SAsendTransaction() {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}
