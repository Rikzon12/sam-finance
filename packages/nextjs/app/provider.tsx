"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import scaffoldConfig from "~~/scaffold.config";

const queryClient = new QueryClient();

const config = createConfig({
  chains: scaffoldConfig.targetNetworks,
  transports: Object.fromEntries(
    scaffoldConfig.targetNetworks.map((chain) => [
      chain.id,
      http(chain.rpcUrls.default.http[0]),
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
