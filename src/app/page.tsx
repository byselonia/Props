"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">Props</h1>
          <p className="text-2xl text-gray-300">Wanna Bet?</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-6 w-[400px]">
          <button
            onClick={() => router.push('/login')}
            className="w-full py-6 px-10 text-center text-3xl font-medium transition-colors rounded-lg bg-white text-black hover:bg-gray-200"
          >
            Log In
          </button>
          <button
            onClick={() => router.push('/register')}
            className="w-full py-6 px-10 text-center text-3xl font-medium transition-colors rounded-lg bg-white text-black hover:bg-gray-200"
          >
            Sign Up
          </button>
        </div>

        {/* Description */}
        <div className="max-w-md mt-12 text-center">
          <p className="text-xl text-gray-300 leading-relaxed">
            Betting redefined. Bet against your friends with fully customizable stat selection, stats, and odds. Complete freedom, no Vegas.
          </p>
        </div>
      </div>
    </main>
  );
} 