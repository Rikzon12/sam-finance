import { defineChain } from "viem";

export const litvmLiteForge = defineChain({
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
