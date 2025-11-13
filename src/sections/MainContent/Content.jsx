import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import PlayerList from "../../components/Player/PlayerList";

function Content({ players }) {
  return (
    <section className="content">
      {players.length > 0 ? (
        <PlayerList players={players} />
      ) : (
        <div className="alert alert-info" role="alert">
          <FontAwesomeIcon icon={faCircleInfo} />
          No players match your filters.
        </div>
      )}
    </section>
  );
}

export default Content;
