"use client";

export default function Home() {
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

          <button
            className="btn border-0 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8"
            onClick={() =>
              window.scrollTo({
                top: 700,
                behavior: "smooth",
              })
            }
          >
            Launch App
          </button>

          <button className="btn btn-outline border-white/20 text-white">
            Explore
          </button>

          {/* CONNECT WALLET */}
          <button
  onClick={() => alert("Connect button works")}
  className="btn"
  style={{ position: "relative", zIndex: 50 }}
>
  Connect Wallet
</button>

        </div>

      </div>

      {/* SWAP CARD */}
      <div className="max-w-md mx-auto mt-20 px-4">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">

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

      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20 px-6 pb-20">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

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

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <h3 className="text-2xl font-bold text-cyan-400">
            Liquidity
          </h3>

          <p className="mt-4 text-gray-400">
            Provide liquidity and earn LP rewards.
          </p>

          <button className="btn btn-secondary mt-6 w-full">
            Add Liquidity
          </button>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <h3 className="text-2xl font-bold text-pink-400">
            Faucet
          </h3>

          <p className="mt-4 text-gray-400">
            Claim free zkLTC for testing on LitVM.
          </p>

          <button className="btn mt-6 w-full bg-pink-500 border-0 text-white">
            Claim zkLTC
          </button>

        </div>

      </div>

    </div>
  );
}
