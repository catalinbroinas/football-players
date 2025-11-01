import PlayerList from "../components/PlayerList";

function Content({ players }) {
  return (
    <section className="content">
      <PlayerList players={players} />
    </section>
  );
}

export default Content;
