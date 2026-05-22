"use client";

import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";
import { useAccount, useSwitchChain } from "wagmi";
import {
  BugAntIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { useTargetNetwork } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const { switchChain } = useSwitchChain();

  const { targetNetwork } = useTargetNetwork();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">

        <div className="px-5">

          <h1 className="text-center">
            <span className="block text-2xl mb-2">
              Powering DeFi on LitVM
            </span>

            <span className="block text-5xl font-bold">
              SAM FINANCE
            </span>
          </h1>

          <div className="flex justify-center items-center flex-col mt-6">

            <p className="my-2 font-medium">
              Connected Address:
            </p>

            <Address
              address={connectedAddress}
              chain={targetNetwork}
            />

            <button
              className="btn btn-secondary mt-4"
              onClick={() => switchChain({ chainId: 4441 })}
            >
              Switch to LitVM
            </button>

          </div>

          {/* 🔥 FEATURES */}
          <div className="mt-10 grid gap-4">
{/* SWAP */}
<div className="p-4 bg-base-100 rounded-xl shadow">

  <h2 className="font-bold text-xl">
    Swap
  </h2>

  <input
    className="input input-bordered w-full mt-2"
    placeholder="Amount"
  />

  <select className="select select-bordered w-full mt-2">
    <option>zkLTC</option>
    <option>USDT</option>
    <option>SAM</option>
  </select>

  <select className="select select-bordered w-full mt-2">
    <option>SAM</option>
    <option>zkLTC</option>
    <option>USDT</option>
  </select>

  <button className="btn btn-primary w-full mt-4">
    Swap
  </button>

</div>
            {/* STAKING */}
            <div className="p-4 bg-base-100 rounded-xl shadow">

              <h2 className="font-bold text-xl">
                Staking
              </h2>

              <input
                className="input input-bordered w-full mt-2"
                placeholder="Amount"
              />

              <button className="btn btn-primary w-full mt-4">
                Stake
              </button>
            </div>

            {/* LIQUIDITY */}
            <div className="p-4 bg-base-100 rounded-xl shadow">

              <h2 className="font-bold text-xl">
                Liquidity
              </h2>

              <input
                className="input input-bordered w-full mt-2"
                placeholder="Token A"
              />

              <input
                className="input input-bordered w-full mt-2"
                placeholder="Token B"
              />

              <button className="btn btn-primary w-full mt-4">
                Add Liquidity
              </button>
            </div>

            {/* FAUCET */}
            <div className="p-4 bg-base-100 rounded-xl shadow">

              <h2 className="font-bold text-xl">
                Faucet
              </h2>

              <button className="btn btn-secondary w-full mt-4">
                Claim zkLTC
              </button>
            </div>

          </div>

          <p className="text-center text-lg mt-10">
            Trade, Stake, and Provide Liquidity on SAM FINANCE
          </p>

          <p className="text-center text-lg">
            Native DeFi Hub powered by LitVM LiteForge
          </p>

        </div>

        {/* FOOTER CARDS */}
        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">

          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">

              <BugAntIcon className="h-8 w-8 fill-secondary" />

              <p>
                Tinker with your smart contract using the{" "}

                <Link
                  href="/debug"
                  passHref
                  className="link"
                >
                  Debug Contracts
                </Link>

                {" "}tab.
              </p>
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">

              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />

              <p>
                Explore your transactions using the{" "}

                <Link
                  href="/blockexplorer"
                  passHref
                  className="link"
                >
                  Block Explorer
                </Link>

                {" "}tab.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
