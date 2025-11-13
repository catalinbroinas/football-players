import PlayerCard from ".//PlayerCard";

function PlayerList({ players }) {
  return (
    <div className="player-list">
      {players.map(player => (
        <PlayerCard key={player.id} {...player} />
      ))}
    </div>
  );
}

export default PlayerList;
