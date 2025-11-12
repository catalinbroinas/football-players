import { useState } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Content from "./Content";
import players from "../data/players";
import { getAge } from "../utils/dateUtils";

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

  // Filtering
  const filteredPlayers = players.filter(player => {
    const teamMatch = selectedTeam 
      ? player.team === selectedTeam
      : true;

    const positionMatch = 
      selectedPositions.includes('all') ||
      selectedPositions.includes(player.position.toLowerCase());

    const playerAge = getAge(player.dateOfBirth);

    const ageMatch =
      (ageRange.min === null || playerAge >= ageRange.min) &&
      (ageRange.max === null || playerAge <= ageRange.max);

    return teamMatch && positionMatch && ageMatch;
  });

  // Sorting
  const sortedPlayers = sortBy === 'default'
    ? filteredPlayers
    : [...filteredPlayers].sort((a, b) => {
    switch(sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'name-revert':
        return b.name.localeCompare(a.name);
      case 'team':
        return a.team.localeCompare(b.team);
      case 'team-revert':
        return b.team.localeCompare(a.team);
      case 'age':
        return getAge(a.dateOfBirth) - getAge(b.dateOfBirth);
      case 'age-revert':
        return getAge(b.dateOfBirth) - getAge(a.dateOfBirth);
      default:
        return 0;
    };
  });

  // Searching
  const searchedPlayers = sortedPlayers.filter(player => (
    player.name.toLowerCase().includes(filterText.toLowerCase().trim())
  ));

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
