"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function PiratesPage() {
  const [activeTab, setActiveTab] = useState('schedule');

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

  // Mock data for roster
  const roster = [
    { id: 1, name: 'Player 1', position: 'Pitcher', number: '22' },
    { id: 2, name: 'Player 2', position: 'Catcher', number: '33' },
    { id: 3, name: 'Player 3', position: 'First Base', number: '44' },
  ];

  // Mock data for futures
  const futures = [
    { id: 1, type: 'World Series', odds: '+5000' },
    { id: 2, type: 'NL Pennant', odds: '+2500' },
    { id: 3, type: 'Division Winner', odds: '+1200' },
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

      {/* Tabs */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex space-x-4 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'schedule'
                ? 'text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Schedule
          </button>
          <button
            onClick={() => setActiveTab('roster')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'roster'
                ? 'text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Roster
          </button>
          <button
            onClick={() => setActiveTab('futures')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'futures'
                ? 'text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Futures
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto">
        {activeTab === 'schedule' && (
          <>
            <div className="mb-8">
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

            <div>
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
          </>
        )}

        {activeTab === 'roster' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Team Roster</h2>
            <div className="grid grid-cols-1 gap-3">
              {roster.map((player) => (
                <div key={player.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold">#{player.number} {player.name}</p>
                      <p className="text-gray-400">{player.position}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                      Player Props
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'futures' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Futures</h2>
            <div className="grid grid-cols-1 gap-3">
              {futures.map((bet) => (
                <div key={bet.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold">{bet.type}</p>
                      <p className="text-gray-400">Odds: {bet.odds}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                      Place Bet
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 