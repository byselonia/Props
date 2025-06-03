"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { 
  FootballIcon, 
  BasketballIcon, 
  HockeyIcon, 
  BaseballIcon, 
  AcademicCapIcon, 
  TrophyIcon 
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
      icon: FootballIcon,
      color: "bg-[#1a1a1a] hover:bg-[#2a2a2a]"
    },
    { 
      id: "nba", 
      name: "NBA", 
      icon: BasketballIcon,
      color: "bg-[#1a1a1a] hover:bg-[#2a2a2a]"
    },
    { 
      id: "nhl", 
      name: "NHL", 
      icon: HockeyIcon,
      color: "bg-[#1a1a1a] hover:bg-[#2a2a2a]"
    },
    { 
      id: "mlb", 
      name: "MLB", 
      icon: BaseballIcon,
      color: "bg-[#1a1a1a] hover:bg-[#2a2a2a]"
    },
    { 
      id: "cfb", 
      name: "College Football", 
      icon: AcademicCapIcon,
      color: "bg-[#1a1a1a] hover:bg-[#2a2a2a]"
    },
    { 
      id: "cbb", 
      name: "College Basketball", 
      icon: TrophyIcon,
      color: "bg-[#1a1a1a] hover:bg-[#2a2a2a]"
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

      {/* Sports List */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-white mb-4">Select Sport</h2>
        <div className="space-y-2">
          {sports.map((sport) => {
            const Icon = sport.icon;
            return (
              <button
                key={sport.id}
                className={`w-full ${sport.color} text-white rounded-lg p-4 
                  transition-all duration-200 flex items-center space-x-4
                  border border-gray-700 hover:border-gray-600`}
              >
                <Icon className="h-6 w-6 text-[#00ff00]" />
                <span className="text-lg font-bold">{sport.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
} 