"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">Props</h1>
          <p className="text-2xl text-gray-300">Wanna Bet?</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-full space-y-4">
          <button
            onClick={() => router.push('/login')}
            className="w-full py-4 px-6 text-center text-2xl font-medium bg-white text-black rounded-lg hover:bg-gray-200"
          >
            Log In
          </button>
          <button
            onClick={() => router.push('/register')}
            className="w-full py-4 px-6 text-center text-2xl font-medium bg-white text-black rounded-lg hover:bg-gray-200"
          >
            Sign Up
          </button>
        </div>

        {/* Description */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300">
            Betting redefined. Bet against your friends with fully customizable stat selection, stats, and odds. Complete freedom, no Vegas.
          </p>
        </div>
      </div>
    </div>
  );
} 