import { useState } from "react";
import Sidebar from "./Sidebar";
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

  return (
    <div className="main-content">
      <Sidebar
        setSelectedTeam={setSelectedTeam}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
        ageRange={ageRange}
        onApply={handleAgeRange}
        onChecked={handleAgeRange}
      />
      <Content players={filteredPlayers} />
    </div>
  );
}

export default MainContent;
