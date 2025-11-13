import { useState } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Content from "./Content";
import players from "../../data/players";
import { getAge } from "../../utils/dateUtils";
import { filterPlayers, searchPlayers, sortPlayers } from "../../utils/playerUtils";

function MainContent() {
  // Derived data
  const ages = players
    .map(player => getAge(player.dateOfBirth))
    .filter(age => !isNaN(age));
  const youngestPlayer = Math.min(...ages);
  const oldestPlayer = Math.max(...ages);

  // States
  const[selectedTeam, setSelectedTeam] = useState('');
  const [selectedPositions, setSelectedPositions] = useState(['all']);
  const [ageRange, setAgeRange] = useState({
    min: youngestPlayer,
    max: oldestPlayer
  });
  const [sortBy, setSortBy] = useState('default');
  const [filterText, setFilterText] = useState('');

  // Processing
  const filteredPlayers = filterPlayers(players, {
    selectedTeam,
    selectedPositions,
    ageRange
  });
  const sortedPlayers = sortPlayers(filteredPlayers, sortBy);
  const searchedPlayers = searchPlayers(sortedPlayers, filterText);

  return (
    <div className="main-layout">
      <Sidebar
        setSelectedTeam={setSelectedTeam}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
        ageRange={ageRange}
        onApply={(newAgeRange) => setAgeRange(newAgeRange)}
        onChecked={(newAgeRange) => setAgeRange(newAgeRange)}
      />
      <div className="main-content">
        <Toolbar
          setSortBy={setSortBy}
          filterText={filterText}
          onFilterTextChange={setFilterText}
        />
        <Content players={searchedPlayers} />
      </div>
    </div>
  );
}

export default MainContent;
