import PlayerList from "../components/PlayerList";

function Content({ players }) {
  return (
    <section className="content">
      {players.length > 0 ? (
        <PlayerList players={players} />
      ) : (
        <div className="alert alert-info" role="alert">
          No players match your filters.
        </div>
      )}
    </section>
  );
}

export default Content;
