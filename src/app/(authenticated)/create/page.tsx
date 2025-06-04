"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function CreateBetPage() {
  // Mock data for upcoming games - will be replaced with real data
  const upcomingGames = [
    { id: 1, sport: "NFL", teams: "Chiefs vs 49ers", time: "Today, 6:30 PM" },
    { id: 2, sport: "NBA", teams: "Lakers vs Celtics", time: "Today, 7:00 PM" },
    { id: 3, sport: "NHL", teams: "Bruins vs Rangers", time: "Today, 7:30 PM" },
  ];

  const sports = [
    { 
      id: "nfl", 
      name: "NFL", 
      logo: "/images/nfl-logo.png",
      color: "bg-[#1a1a1a]",
      width: 40,
      height: 40
    },
    { 
      id: "nba", 
      name: "NBA", 
      logo: "/images/nba-logo.png",
      color: "bg-[#1a1a1a]",
      width: 32,
      height: 32
    },
    { 
      id: "nhl", 
      name: "NHL", 
      logo: "/images/nhl-logo.png",
      color: "bg-[#1a1a1a]",
      width: 40,
      height: 40
    },
    { 
      id: "mlb", 
      name: "MLB", 
      logo: "/images/mlb-logo.png",
      color: "bg-[#1a1a1a]",
      width: 40,
      height: 40
    },
    { 
      id: "cfb", 
      name: "CFB", 
      logo: "/images/football-icon.png",
      color: "bg-[#1a1a1a]",
      width: 40,
      height: 40
    },
    { 
      id: "cbb", 
      name: "CBB", 
      logo: "/images/basketball-icon.png",
      color: "bg-[#1a1a1a]",
      width: 40,
      height: 40
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      {/* Upcoming Games Section */}
      <div className="max-w-2xl mx-auto mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Upcoming Games</h2>
        <div className="space-y-3">
          {upcomingGames.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-white font-medium">{game.teams}</span>
                  <p className="text-gray-400 text-sm">{game.sport}</p>
                </div>
                <span className="text-gray-400">{game.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sports Selection Box */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-white mb-4">Select Sport</h2>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center">
            {sports.map((sport) => (
              <Link key={sport.id} href={sport.id === 'mlb' ? '/create/mlb' : '#'}>
                <button
                  className="flex flex-col items-center space-y-2 group"
                >
                  <div className={`w-16 h-16 rounded-full ${sport.color} 
                    flex items-center justify-center border-2 border-gray-700
                    group-hover:border-[#00ff00] transition-all duration-200
                    overflow-hidden`}
                  >
                    <Image
                      src={sport.logo}
                      alt={`${sport.name} logo`}
                      width={sport.width || 40}
                      height={sport.height || 40}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white font-medium text-sm">{sport.name}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 