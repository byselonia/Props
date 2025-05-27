"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex items-center justify-center gap-16 max-w-6xl mx-auto px-4">
        {/* Left side - Title */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-black mb-2">Props</h1>
            <p className="text-xl text-gray-600">Wanna Bet?</p>
          </div>
        </div>

        {/* Center - Tabs */}
        <div className="flex flex-col space-y-8 w-[400px]">
          <button
            onClick={() => router.push('/login')}
            className="w-full py-8 px-10 text-center text-2xl font-medium transition-colors rounded-lg bg-black text-white hover:bg-gray-900"
          >
            Log In
          </button>
          <button
            onClick={() => router.push('/register')}
            className="w-full py-8 px-10 text-center text-2xl font-medium transition-colors rounded-lg bg-black text-white hover:bg-gray-900"
          >
            Sign Up
          </button>
        </div>

        {/* Right side - Description */}
        <div className="max-w-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            Betting redefined. Bet against your friends with fully customizable stat selection, stats, and odds. Complete freedom, no Vegas.
          </p>
        </div>
      </div>
    </main>
  );
} 