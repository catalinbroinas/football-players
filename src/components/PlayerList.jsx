import CardPlayer from "./CardPlayer";

function PlayerList({ players }) {
  return (
    <div className="player-list">
      {players.map(player => (
        <CardPlayer key={player.id} {...player} />
      ))}
    </div>
  );
}

export default PlayerList;
