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

  // MLB Teams organized by league
  const nationalLeagueTeams = [
    { id: 'diamondbacks', name: 'Arizona Diamondbacks' },
    { id: 'braves', name: 'Atlanta Braves' },
    { id: 'cubs', name: 'Chicago Cubs' },
    { id: 'reds', name: 'Cincinnati Reds' },
    { id: 'rockies', name: 'Colorado Rockies' },
    { id: 'dodgers', name: 'Los Angeles Dodgers' },
    { id: 'marlins', name: 'Miami Marlins' },
    { id: 'brewers', name: 'Milwaukee Brewers' },
    { id: 'mets', name: 'New York Mets' },
    { id: 'phillies', name: 'Philadelphia Phillies' },
    { id: 'pirates', name: 'Pittsburgh Pirates' },
    { id: 'padres', name: 'San Diego Padres' },
    { id: 'giants', name: 'San Francisco Giants' },
    { id: 'cardinals', name: 'St. Louis Cardinals' },
    { id: 'nationals', name: 'Washington Nationals' },
  ];

  const americanLeagueTeams = [
    { id: 'orioles', name: 'Baltimore Orioles' },
    { id: 'red-sox', name: 'Boston Red Sox' },
    { id: 'white-sox', name: 'Chicago White Sox' },
    { id: 'guardians', name: 'Cleveland Guardians' },
    { id: 'tigers', name: 'Detroit Tigers' },
    { id: 'astros', name: 'Houston Astros' },
    { id: 'royals', name: 'Kansas City Royals' },
    { id: 'angels', name: 'Los Angeles Angels' },
    { id: 'twins', name: 'Minnesota Twins' },
    { id: 'yankees', name: 'New York Yankees' },
    { id: 'athletics', name: 'Oakland Athletics' },
    { id: 'mariners', name: 'Seattle Mariners' },
    { id: 'rays', name: 'Tampa Bay Rays' },
    { id: 'rangers', name: 'Texas Rangers' },
    { id: 'blue-jays', name: 'Toronto Blue Jays' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header with Back Button */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/create">
          <button className="text-gray-400 hover:text-white">
            &larr; Back
          </button>
        </Link>
        <h1 className="text-2xl font-bold">MLB</h1>
        <div className="w-16"></div> {/* Placeholder for balance */}
      </div>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search MLB teams, games or players..."
            className="w-full px-4 py-3 pl-12 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Upcoming Games Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Games</h2>
        <div className="space-y-3">
          {upcomingGames.map((game) => (
            <Link key={game.id} href={`/create/mlb/${game.id}`}>
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
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* National League */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-400">National League</h2>
            <div className="space-y-2">
              {nationalLeagueTeams.map((team) => (
                <Link key={team.id} href={`/create/mlb/team/${team.id}`}>
                  <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                    <p className="text-white font-medium">{team.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* American League */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-red-400">American League</h2>
            <div className="space-y-2">
              {americanLeagueTeams.map((team) => (
                <Link key={team.id} href={`/create/mlb/team/${team.id}`}>
                  <div className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                    <p className="text-white font-medium">{team.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 