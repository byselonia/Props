interface TeamPageProps {
  params: {
    gameId: string;
    teamId: string;
  };
}

export default function MLBTeamPage({ params }: TeamPageProps) {
  const { gameId, teamId } = params;

  // Mock data - ideally fetch game and team details based on gameId and teamId
  const allGames = [
    { id: 'mlb-game-1', homeTeam: 'New York Yankees', awayTeam: 'Boston Red Sox' },
    { id: 'mlb-game-2', homeTeam: 'Los Angeles Dodgers', awayTeam: 'San Francisco Giants' },
    { id: 'mlb-game-3', homeTeam: 'Chicago Cubs', awayTeam: 'St. Louis Cardinals' },
  ];

  const game = allGames.find(g => g.id === gameId);

  const teamName = teamId.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (!game) {
    return <div className="min-h-screen bg-black text-white p-4 text-center">Game not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Bet on the {teamName}</h1>
      <p className="text-center text-lg mb-8">For the game: {game.awayTeam} @ {game.homeTeam}</p>

      {/* Placeholder for bet options */}
      <div className="text-center text-gray-400">
        <p>Betting options for the {teamName} will be displayed here.</p>
      </div>
    </div>
  );
} 