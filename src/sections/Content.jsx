import PlayerList from "../components/PlayerList";

function Content({ players }) {
  return (
    <section className="content">
      {players.length > 0 ? (
        <PlayerList players={players} />
      ) : (
        <div className="alert">
          <p className="text">No players found.</p>
        </div>
      )}
    </section>
  );
}

export default Content;
