"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto px-4 py-12">
        {/* Title with animation */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4">
            Props
          </h1>
          <p className="text-3xl text-gray-300 font-light tracking-wide">
            Wanna Bet?
          </p>
        </div>

        {/* Buttons with enhanced styling */}
        <div className="flex flex-col space-y-6 w-[400px]">
          <button
            onClick={() => router.push('/login')}
            className="w-full py-6 px-10 text-center text-2xl font-semibold transition-all duration-300 rounded-xl bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
          >
            Log In
          </button>
          <button
            onClick={() => router.push('/register')}
            className="w-full py-6 px-10 text-center text-2xl font-semibold transition-all duration-300 rounded-xl border-2 border-white text-white hover:bg-white hover:text-black transform hover:-translate-y-1"
          >
            Sign Up
          </button>
        </div>

        {/* Description with enhanced styling */}
        <div className="max-w-2xl mt-16 text-center">
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Betting redefined. Bet against your friends with fully customizable stat selection, stats, and odds. Complete freedom, no Vegas.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </main>
  );
} 