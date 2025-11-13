import SelectTeam from "./SelectTeam";
import PositionFilter from "./PositionFilter";
import AgeFilter from "./AgeFilter";
import AgeGroupFilter from "./AgeGroupFilter";
import players from "../../data/players";

function FilterForm({ 
    setSelectedTeam, 
    selectedPositions, 
    setSelectedPositions,
    ageRange,
    onApply,
    onChecked
  }) {
  const teams = [...new Set(players.map(player => player.team))].sort();

  return (
    <form className="form-container filter-form">
      <SelectTeam teams={teams} setSelectedTeam={setSelectedTeam} />
      <PositionFilter 
        selectedPositions= {selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
      <AgeGroupFilter
        ageRange={ageRange}
        onChecked={onChecked} 
      />
      <AgeFilter
        ageRange={ageRange}
        onApply={onApply}
      />
    </form>
  );
}

export default FilterForm;
