"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { injected, walletConnect } from "wagmi/connectors";
import { mainnet } from "wagmi/chains";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [mainnet],

  connectors: [
    injected(),
    walletConnect({
      projectId: "3a8170812b534d0ff9d794f19a901d64",
    }),
  ],

  transports: {
    [mainnet.id]: http(),
  },
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
