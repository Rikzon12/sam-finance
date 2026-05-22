import * as chains from "viem/chains";
import { defineChain } from "viem";

/* =========================
   LITVM CHAIN
========================= */
const litvmLiteForge = defineChain({
  id: 4441,
  name: "LitVM LiteForge",
  nativeCurrency: {
    name: "zkLTC",
    symbol: "zkLTC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://liteforge.rpc.caldera.xyz/http"],
      webSocket: ["wss://liteforge.rpc.caldera.xyz/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "LiteForge Explorer",
      url: "https://liteforge.explorer.caldera.xyz",
    },
  },
});

/* =========================
   CONFIG TYPE
========================= */
export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  rpcOverrides?: Record<number, string>;
  walletConnectProjectId: string;
  burnerWalletMode: "localNetworksOnly" | "allNetworks" | "disabled";
};

/* =========================
   DEFAULT CONFIG
========================= */
export const DEFAULT_ALCHEMY_API_KEY = "IZYEU2cWBgnFmgiTAgpWD";

const scaffoldConfig = {
  targetNetworks: [litvmLiteForge],

  pollingInterval: 3000,

  alchemyApiKey:
    process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY,

  rpcOverrides: {
    [4441]: "https://liteforge.rpc.caldera.xyz/http",
  },

  walletConnectProjectId:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ||
    "3a8170812b534d0ff9d794f19a901d64",

  burnerWalletMode: "localNetworksOnly",
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
