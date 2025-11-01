import SelectTeam from "./SelectTeam";
import players from "../../data/players";

function FilterForm({ setSelectedTeam }) {
  const teams = [...new Set(players.map(player => player.team))].sort();

  return (
    <form className="form-container">
      <SelectTeam teams={teams} setSelectedTeam={setSelectedTeam} />
    </form>
  );
}

export default FilterForm;
