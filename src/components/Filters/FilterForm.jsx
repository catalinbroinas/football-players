import SelectTeam from "./SelectTeam";
import PositionFilter from "./PositionFilter";
import players from "../../data/players";

function FilterForm({ setSelectedTeam, selectedPositions, setSelectedPositions }) {
  const teams = [...new Set(players.map(player => player.team))].sort();

  return (
    <form className="form-container">
      <SelectTeam teams={teams} setSelectedTeam={setSelectedTeam} />
      <PositionFilter 
        selectedPositions= {selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
    </form>
  );
}

export default FilterForm;
