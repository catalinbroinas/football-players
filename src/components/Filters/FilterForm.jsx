import SelectTeam from "./SelectTeam";
import PositionFilter from "./PositionFilter";
import AgeFilter from "./AgeFilter";
import players from "../../data/players";

function FilterForm({ 
    setSelectedTeam, 
    selectedPositions, 
    setSelectedPositions,
    onApply
  }) {
  const teams = [...new Set(players.map(player => player.team))].sort();

  return (
    <form className="form-container">
      <SelectTeam teams={teams} setSelectedTeam={setSelectedTeam} />
      <PositionFilter 
        selectedPositions= {selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
      <AgeFilter onApply={onApply} />
    </form>
  );
}

export default FilterForm;
