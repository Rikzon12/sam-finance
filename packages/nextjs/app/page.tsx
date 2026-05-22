"use client";

import type { NextPage } from "next";
import { useAccount, useSwitchChain } from "wagmi";
import { Address } from "@scaffold-ui/components";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { switchChain } = useSwitchChain();
  const { targetNetwork } = useTargetNetwork();

  return (
    <div className="min-h-screen bg-[#070707] text-white px-6 py-12">

      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Powering DeFi on LitVM
        </p>

        <h1 className="text-6xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          SAM FINANCE
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Swap, Stake, and Provide Liquidity using zkLTC.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">

          <Address
            address={connectedAddress}
            chain={targetNetwork}
          />

          <button
            className="btn border-0 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8"
            onClick={() => switchChain({ chainId: 4441 })}
          >
            Switch to LitVM
          </button>

        </div>

      </div>

      {/* MAIN CARD */}
      <div
        id="swap"
        className="max-w-xl mx-auto mt-14 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
      >

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Swap
          </h2>

          <p className="text-sm text-gray-400">
            SAM DEX
          </p>
        </div>

        <input
          className="input input-bordered w-full bg-black/40 border-white/10"
          placeholder="0.0"
        />

        <select className="select select-bordered w-full mt-4 bg-black/40 border-white/10">
          <option>zkLTC</option>
          <option>USDT</option>
          <option>SAM</option>
        </select>

        <div className="flex justify-center my-4 text-cyan-400 text-2xl">
          ↓
        </div>

        <select className="select select-bordered w-full bg-black/40 border-white/10">
          <option>SAM</option>
          <option>USDT</option>
          <option>zkLTC</option>
        </select>

        <button className="btn w-full mt-6 border-0 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg">
          Swap Tokens
        </button>

      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14">

        <div
          id="staking"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-purple-400">
            Staking
          </h3>

          <p className="mt-4 text-gray-400">
            Earn rewards by staking SAM and zkLTC.
          </p>

          <button className="btn btn-primary mt-6 w-full">
            Stake Now
          </button>
        </div>

        <div
          id="liquidity"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-cyan-400">
            Liquidity
          </h3>

          <p className="mt-4 text-gray-400">
            Provide liquidity and earn LP rewards.
          </p>

          <button className="btn btn-secondary mt-6 w-full">
            Add LP
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-pink-400">
            Faucet
          </h3>

          <p className="mt-4 text-gray-400">
            Claim test zkLTC for LitVM testing.
          </p>

          <button className="btn mt-6 w-full bg-pink-500 border-0 text-white">
            Claim zkLTC
          </button>
        </div>

      </div>

    </div>
  );
};

export default Home;
