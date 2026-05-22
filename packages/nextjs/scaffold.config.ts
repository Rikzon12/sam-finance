import * as chains from "viem/chains";
import { litvmLiteForge } from "~~/utils/scaffold-eth/chains";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  rpcOverrides?: Record<number, string>;
  walletConnectProjectId: string;
  burnerWalletMode: "localNetworksOnly" | "allNetworks" | "disabled";
};

export const DEFAULT_ALCHEMY_API_KEY = "IZYEU2cWBgnFmgiTAgpWD";

const scaffoldConfig = {
  targetNetworks: [litvmLiteForge],

  pollingInterval: 3000,

  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY,

  // 🔥 sementara HAPUS rpcOverrides dulu buat test
  rpcOverrides: {},

  walletConnectProjectId:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ||
    "3a8170812b534d0ff9d794f19a901d64",

  burnerWalletMode: "localNetworksOnly",
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
