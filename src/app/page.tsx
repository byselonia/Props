"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex items-center justify-center gap-16 max-w-6xl mx-auto px-4">
        {/* Left side - Title and Tabs */}
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-black mb-2">Props</h1>
            <p className="text-xl text-gray-600">Wanna Bet?</p>
          </div>
          
          {/* Tabs */}
          <div className="flex mb-8 w-full max-w-xs">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 px-4 text-center border-b-2 transition-colors ${
                activeTab === 'login'
                  ? 'border-black text-black font-medium'
                  : 'border-gray-200 text-gray-500 hover:text-gray-700'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2 px-4 text-center border-b-2 transition-colors ${
                activeTab === 'signup'
                  ? 'border-black text-black font-medium'
                  : 'border-gray-200 text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Tab Content */}
          <div className="w-full max-w-xs">
            {activeTab === 'login' ? (
              <Link 
                href="/login" 
                className="w-full block text-center px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Log In
              </Link>
            ) : (
              <Link 
                href="/register" 
                className="w-full block text-center px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </Link>
            )}
          </div>
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