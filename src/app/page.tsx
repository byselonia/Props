"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

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
        <div className="flex flex-col space-y-4 w-80">
          <button
            onClick={() => setActiveTab('login')}
            className={`w-full py-4 px-6 text-center text-lg font-medium transition-colors ${
              activeTab === 'login'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`w-full py-4 px-6 text-center text-lg font-medium transition-colors ${
              activeTab === 'signup'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
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