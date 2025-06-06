"use client";

export default function HomePage() {
  return (
    <div>
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