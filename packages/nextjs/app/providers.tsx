"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { injected, walletConnect } from "wagmi/connectors";
import scaffoldConfig from "~~/scaffold.config";

const queryClient = new QueryClient();

const config = createConfig({
  chains: scaffoldConfig.targetNetworks,

  connectors: [
    injected(), // MetaMask
    walletConnect({
      projectId:
        process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ||
        "3a8170812b534d0ff9d794f19a901d64",
    }),
  ],

  transports: scaffoldConfig.targetNetworks.reduce((acc, chain) => {
  acc[chain.id] = http(chain.rpcUrls.default.http[0]);
  return acc;
}, {} as Record<number, ReturnType<typeof http>>),
    ])
  ),
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
