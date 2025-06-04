"use client";

import Link from 'next/link';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function MLBGamesPage() {
  // Mock data for upcoming MLB games
  const upcomingGames = [
    { id: 'mlb-game-1', homeTeam: 'New York Yankees', awayTeam: 'Boston Red Sox', time: 'Today, 7:05 PM' },
    { id: 'mlb-game-2', homeTeam: 'Los Angeles Dodgers', awayTeam: 'San Francisco Giants', time: 'Today, 7:10 PM' },
    { id: 'mlb-game-3', homeTeam: 'Chicago Cubs', awayTeam: 'St. Louis Cardinals', time: 'Today, 7:15 PM' },
  ];

  // Mock data for MLB teams
  const mlbTeams = [
    { id: 'yankees', name: 'New York Yankees', division: 'AL East' },
    { id: 'red-sox', name: 'Boston Red Sox', division: 'AL East' },
    { id: 'dodgers', name: 'Los Angeles Dodgers', division: 'NL West' },
    { id: 'giants', name: 'San Francisco Giants', division: 'NL West' },
    { id: 'cubs', name: 'Chicago Cubs', division: 'NL Central' },
    { id: 'cardinals', name: 'St. Louis Cardinals', division: 'NL Central' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header with Back Button */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/authenticated/create">
          <button className="text-gray-400 hover:text-white">
            &larr; Back
          </button>
        </Link>
        <h1 className="text-2xl font-bold">MLB</h1>
        <div className="w-16"></div> {/* Placeholder for balance */}
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search MLB teams or games..."
            className="w-full px-4 py-3 pl-12 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Upcoming Games Section */}
      <div className="max-w-2xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Games</h2>
        <div className="space-y-3">
          {upcomingGames.map((game) => (
            <Link key={game.id} href={`/authenticated/create/mlb/${game.id}`}>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">{game.awayTeam} @ {game.homeTeam}</p>
                    <p className="text-gray-400 text-sm">{game.time}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* MLB Teams Section */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">MLB Teams</h2>
        <div className="grid grid-cols-2 gap-4">
          {mlbTeams.map((team) => (
            <Link key={team.id} href={`/authenticated/create/mlb/team/${team.id}`}>
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 cursor-pointer">
                <p className="text-lg font-semibold">{team.name}</p>
                <p className="text-gray-400 text-sm">{team.division}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 