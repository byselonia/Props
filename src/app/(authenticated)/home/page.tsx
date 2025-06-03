"use client";

export default function HomePage() {
  return (
    <div>
      {/* Header with Search and Credits */}
      <div className="w-full px-6 py-4 flex items-center justify-between bg-black">
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
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Props</h1>
        
        {/* Active Bets Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Active Bets</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400">No active bets yet</p>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Recent Activity</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-gray-400">No recent activity</p>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white text-black rounded-lg p-4 font-medium hover:bg-gray-200">
              Create New Bet
            </button>
            <button className="bg-white text-black rounded-lg p-4 font-medium hover:bg-gray-200">
              Browse Market
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 