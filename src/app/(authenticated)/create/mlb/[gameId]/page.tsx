import Link from 'next/link';

interface GamePageProps {
  params: {
    gameId: string;
  };
}

export default function MLBGamePage({ params }: GamePageProps) {
  const { gameId } = params;

  // Mock data - ideally fetch game details based on gameId
  // For now, we'll use the same structure as the list page
  const allGames = [
    { id: 'mlb-game-1', homeTeam: 'New York Yankees', awayTeam: 'Boston Red Sox', time: 'Today, 7:05 PM' },
    { id: 'mlb-game-2', homeTeam: 'Los Angeles Dodgers', awayTeam: 'San Francisco Giants', time: 'Today, 7:10 PM' },
    { id: 'mlb-game-3', homeTeam: 'Chicago Cubs', awayTeam: 'St. Louis Cardinals', time: 'Today, 7:15 PM' },
  ];

  const game = allGames.find(g => g.id === gameId);

  if (!game) {
    return <div className="min-h-screen bg-black text-white p-4 text-center">Game not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <Link href="/authenticated/create/mlb">
          <button className="text-gray-400 hover:text-white">
            &larr; Back
          </button>
        </Link>
        <h1 className="text-2xl font-bold">Select a Team</h1>
        <div className="w-16"></div> {/* Placeholder for balance */}
      </div>
      <p className="text-center text-lg mb-2">{game.awayTeam} @ {game.homeTeam}</p>
      <p className="text-center text-gray-400 mb-8">{game.time}</p>
      <div className="flex flex-col space-y-4 items-center">
        {/* Team Selection Buttons */}
        <Link href={`/authenticated/create/mlb/${gameId}/${game.awayTeam.replace(/\s+/g, '-').toLowerCase()}`}>
          <button className="w-64 p-4 rounded-lg text-white font-bold text-xl bg-blue-600 hover:bg-blue-700">
            {game.awayTeam}
          </button>
        </Link>
        <Link href={`/authenticated/create/mlb/${gameId}/${game.homeTeam.replace(/\s+/g, '-').toLowerCase()}`}>
          <button className="w-64 p-4 rounded-lg text-white font-bold text-xl bg-red-600 hover:bg-red-700">
            {game.homeTeam}
          </button>
        </Link>
      </div>
    </div>
  );
} 