"use client";

import Link from 'next/link';

export default function PiratesPage() {
  // Mock data for upcoming Pirates games
  const upcomingGames = [
    { 
      id: 'game-1',
      opponent: 'Cincinnati Reds',
      date: 'Today',
      time: '7:05 PM',
      location: 'PNC Park'
    },
    { 
      id: 'game-2',
      opponent: 'St. Louis Cardinals',
      date: 'Tomorrow',
      time: '7:05 PM',
      location: 'PNC Park'
    },
    { 
      id: 'game-3',
      opponent: 'Chicago Cubs',
      date: 'Friday',
      time: '7:05 PM',
      location: 'PNC Park'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header with Back Button */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/create/mlb">
          <button className="text-gray-400 hover:text-white">
            &larr; Back
          </button>
        </Link>
        <h1 className="text-2xl font-bold">Pittsburgh Pirates</h1>
        <div className="w-16"></div> {/* Placeholder for balance */}
      </div>

      {/* Team Info Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-gray-700 rounded-full"></div> {/* Placeholder for team logo */}
            <div>
              <h2 className="text-xl font-semibold">Pittsburgh Pirates</h2>
              <p className="text-gray-400">National League Central</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Games Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Games</h2>
        <div className="space-y-3">
          {upcomingGames.map((game) => (
            <div key={game.id} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">vs {game.opponent}</p>
                  <p className="text-gray-400 text-sm">{game.date} at {game.time}</p>
                  <p className="text-gray-400 text-sm">{game.location}</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Place Bet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Stats Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Team Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Season Record</h3>
            <p className="text-2xl font-bold">0-0</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Last 10 Games</h3>
            <p className="text-2xl font-bold">0-0</p>
          </div>
        </div>
      </div>
    </div>
  );
} 