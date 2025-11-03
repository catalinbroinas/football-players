import SelectTeam from "./SelectTeam";
import PositionFilter from "./PositionFilter";
import players from "../../data/players";

function FilterForm({ setSelectedTeam }) {
  const teams = [...new Set(players.map(player => player.team))].sort();

  return (
    <form className="form-container">
      <SelectTeam teams={teams} setSelectedTeam={setSelectedTeam} />
      <PositionFilter />
    </form>
  );
}

export default FilterForm;
