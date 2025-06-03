"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { 
  TrophyIcon,
  AcademicCapIcon,
  StarIcon,
  BoltIcon,
  FireIcon,
  SparklesIcon
} from "@heroicons/react/24/solid";

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
      icon: TrophyIcon,
      color: "bg-[#1a1a1a]"
    },
    { 
      id: "nba", 
      name: "NBA", 
      icon: StarIcon,
      color: "bg-[#1a1a1a]"
    },
    { 
      id: "nhl", 
      name: "NHL", 
      icon: BoltIcon,
      color: "bg-[#1a1a1a]"
    },
    { 
      id: "mlb", 
      name: "MLB", 
      icon: FireIcon,
      color: "bg-[#1a1a1a]"
    },
    { 
      id: "cfb", 
      name: "CFB", 
      icon: AcademicCapIcon,
      color: "bg-[#1a1a1a]"
    },
    { 
      id: "cbb", 
      name: "CBB", 
      icon: SparklesIcon,
      color: "bg-[#1a1a1a]"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for teams, players, or games..."
            className="w-full px-4 py-3 pl-12 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <MagnifyingGlassIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

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
            {sports.map((sport) => {
              const Icon = sport.icon;
              return (
                <button
                  key={sport.id}
                  className="flex flex-col items-center space-y-2 group"
                >
                  <div className={`w-16 h-16 rounded-full ${sport.color} 
                    flex items-center justify-center border-2 border-gray-700
                    group-hover:border-[#00ff00] transition-all duration-200`}
                  >
                    <Icon className="h-8 w-8 text-[#00ff00]" />
                  </div>
                  <span className="text-white font-medium text-sm">{sport.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 