"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Header with Search and Credits */}
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4 flex items-center">
          <div className="bg-gray-800 px-4 py-2 rounded-lg">
            <span className="text-white font-medium">Credits: $1,000</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center w-full max-w-md mx-auto px-4">
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