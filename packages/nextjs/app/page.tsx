"use client";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useSwitchChain,
  useChainId,
} from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const LITVM_CHAIN_ID = 4441;

  const handleConnect = async () => {
    const injected = connectors.find((c) => c.id === "injected");
    const walletConnect = connectors.find(
      (c) => c.id === "walletConnect"
    );

    const connector =
      typeof window !== "undefined" && window.ethereum
        ? injected
        : walletConnect;

    if (!connector) return;

    try {
      await connect({ connector });

      // auto switch chain setelah connect
      setTimeout(() => {
        if (chainId !== LITVM_CHAIN_ID) {
          switchChain({ chainId: LITVM_CHAIN_ID });
        }
      }, 500);
    } catch (err) {
      console.log("Connect error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white">

      {/* HERO */}
      <div className="flex flex-col items-center justify-center pt-32 px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
          Powering DeFi on LitVM
        </p>

        <h1 className="text-6xl md:text-7xl font-black mt-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          SAM FINANCE
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Swap, stake, and provide liquidity using zkLTC on LitVM LiteForge.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-10 flex-wrap justify-center">

          <button className="btn">Launch App</button>

          <button className="btn btn-outline">
            Explore
          </button>

          {/* WALLET BUTTON */}
          {!isConnected ? (
            <button onClick={handleConnect} className="btn">
              Connect Wallet
            </button>
          ) : chainId !== LITVM_CHAIN_ID ? (
            <button
              onClick={() =>
                switchChain({ chainId: LITVM_CHAIN_ID })
              }
              className="btn btn-warning"
            >
              Switch to LitVM Testnet
            </button>
          ) : (
            <button
              onClick={() => disconnect()}
              className="btn btn-error"
            >
              Disconnect {address?.slice(0, 6)}...
              {address?.slice(-4)}
            </button>
          )}
        </div>
      </div>

      {/* SWAP CARD */}
      <div className="max-w-md mx-auto mt-20 px-4">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

          <h2 className="text-2xl font-bold mb-4">
            Swap
          </h2>

          <input
            className="input w-full"
            placeholder="0.0"
          />

          <select className="select w-full mt-4">
            <option>zkLTC</option>
            <option>USDT</option>
            <option>SAM</option>
          </select>

          <div className="my-4 text-center text-cyan-400 text-2xl">
            ↓
          </div>

          <select className="select w-full">
            <option>SAM</option>
            <option>USDT</option>
            <option>zkLTC</option>
          </select>

          <button className="btn w-full mt-6">
            Swap Tokens
          </button>

        </div>
      </div>

    </div>
  );
}
