import CardPlayer from "./CardPlayer";
import players from "../data/players";

function PlayerList() {
  return (
    <div className="player-list">
      {players.map(player => (
        <CardPlayer key={player.id} {...player} />
      ))}
    </div>
  );
}

export default PlayerList;
