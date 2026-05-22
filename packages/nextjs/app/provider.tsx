"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import scaffoldConfig from "~~/scaffold.config";

const queryClient = new QueryClient();

// pakai chain dari config kamu (LitVM)
const config = createConfig({
  chains: scaffoldConfig.targetNetworks,
  transports: scaffoldConfig.targetNetworks.reduce((acc, chain) => {
    acc[chain.id] = http();
    return acc;
  }, {} as any),
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
