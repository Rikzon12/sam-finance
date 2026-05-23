"use client";

import Providers from "./providers";
import "~~/styles/globals.css";

export const metadata = {
  title: "SAM FINANCE",
  description: "Native DeFi Hub on LitVM",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className="bg-[#070707] text-white min-h-screen">

        {/* NAVBAR */}
        <div className="navbar px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0 z-50">

          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-wide text-purple-400">
              SAM FINANCE
            </h1>
          </div>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#swap" className="hover:text-cyan-400 transition">
              Swap
            </a>

            <a href="#staking" className="hover:text-cyan-400 transition">
              Staking
            </a>

            <a href="#liquidity" className="hover:text-cyan-400 transition">
              Liquidity
            </a>

            <a href="/debug" className="hover:text-cyan-400 transition">
              Contracts
            </a>
          </div>

        </div>

        {/* PAGE */}
        <Providers>
  <main>
    {children}
  </main>
</Providers>

      </body>
    </html>
  );
};

export default RootLayout;
