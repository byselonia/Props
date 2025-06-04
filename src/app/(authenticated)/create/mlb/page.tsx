import Link from 'next/link';

export default function MLBGamesPage() {
  // Mock data for upcoming MLB games
  const upcomingGames = [
    { id: 'mlb-game-1', homeTeam: 'New York Yankees', awayTeam: 'Boston Red Sox', time: 'Today, 7:05 PM' },
    { id: 'mlb-game-2', homeTeam: 'Los Angeles Dodgers', awayTeam: 'San Francisco Giants', time: 'Today, 7:10 PM' },
    { id: 'mlb-game-3', homeTeam: 'Chicago Cubs', awayTeam: 'St. Louis Cardinals', time: 'Today, 7:15 PM' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <Link href="/authenticated/create">
          <button className="text-gray-400 hover:text-white">
            &larr; Back
          </button>
        </Link>
        <h1 className="text-2xl font-bold">Upcoming MLB Games</h1>
        <div className="w-16"></div> {/* Placeholder for balance */}
      </div>
      <div className="space-y-4">
        {upcomingGames.map((game) => (
          <Link key={game.id} href={`/authenticated/create/mlb/${game.id}`}>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer">
              <p className="text-lg font-semibold text-center">
                {game.awayTeam} @ {game.homeTeam}
              </p>
              <p className="text-center text-gray-400 mt-1">{game.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 