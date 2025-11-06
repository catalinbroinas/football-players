import SelectTeam from "./SelectTeam";
import PositionFilter from "./PositionFilter";
import AgeFilter from "./AgeFilter";
import AgeGroupFilter from "./AgeGroupFilter";
import players from "../../data/players";
import { getAge } from "../../utils/dateUtils";

function FilterForm({ 
    setSelectedTeam, 
    selectedPositions, 
    setSelectedPositions,
    onApply,
    onChecked
  }) {
  const teams = [...new Set(players.map(player => player.team))].sort();

  const ages = players
    .map(player => getAge(player.dateOfBirth))
    .filter(age => !isNaN(age));
  
  const youngestPlayer = Math.min(...ages);
  const oldestPlayer = Math.max(...ages);

  return (
    <form className="form-container">
      <SelectTeam teams={teams} setSelectedTeam={setSelectedTeam} />
      <PositionFilter 
        selectedPositions= {selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
      <AgeGroupFilter onChecked={onChecked} />
      <AgeFilter
        minAge={youngestPlayer}
        maxAge={oldestPlayer}
        onApply={onApply}
      />
    </form>
  );
}

export default FilterForm;
