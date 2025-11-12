import { useState } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Content from "./Content";
import players from "../data/players";
import { getAge } from "../utils/dateUtils";

function MainContent() {
  const[selectedTeam, setSelectedTeam] = useState('');
  const [selectedPositions, setSelectedPositions] = useState(['all']);

  const ages = players
    .map(player => getAge(player.dateOfBirth))
    .filter(age => !isNaN(age));
  
  const youngestPlayer = Math.min(...ages);
  const oldestPlayer = Math.max(...ages);

  const [ageRange, setAgeRange] = useState({
    min: youngestPlayer,
    max: oldestPlayer
  });

  const [sortBy, setSortBy] = useState('name');

  const handleAgeRange = (newAgeRange) => {
    setAgeRange(newAgeRange);
  };

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

  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    switch(sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'team':
        return a.team.localeCompare(b.team);
      case 'age':
        return getAge(a.dateOfBirth) - getAge(b.dateOfBirth);
      default:
        return 0;
    };
  });

  return (
    <div className="main-layout">
      <Sidebar
        setSelectedTeam={setSelectedTeam}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
        ageRange={ageRange}
        onApply={handleAgeRange}
        onChecked={handleAgeRange}
      />
      <div className="main-content">
        <Toolbar setSortBy={setSortBy} />
        <Content players={sortedPlayers} />
      </div>
    </div>
  );
}

export default MainContent;
