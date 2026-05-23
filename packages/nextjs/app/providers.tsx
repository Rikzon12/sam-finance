"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { injected, walletConnect } from "wagmi/connectors";
import { defineChain } from "wagmi/chains";

const queryClient = new QueryClient();

// 🔥 DEFINE LITVM MANUAL (WAJIB)
const litvm = defineChain({
  id: 4441,
  name: "LitVM Testnet",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.litvm.xyz"],
    },
  },
});

const config = createConfig({
  chains: [litvm],

  connectors: [
    injected(),
    walletConnect({
      projectId:
        process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ||
        "3a8170812b534d0ff9d794f19a901d64",
    }),
  ],

  transports: {
    [litvm.id]: http(litvm.rpcUrls.default.http[0]),
  },
});

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
