import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import players from "../data/players";
import { getAge } from "../utils/dateUtils";

function MainContent() {
  const[selectedTeam, setSelectedTeam] = useState('');
  const [selectedPositions, setSelectedPositions] = useState(['all']);
   const [ageRange, setAgeRange] = useState({
    min: 16,
    max: 40
  });

  const filteredPlayers = players.filter(player => {
    const teamMatch = selectedTeam 
      ? player.team === selectedTeam
      : true;

    const positionMatch = 
      selectedPositions.includes('all') ||
      selectedPositions.includes(player.position.toLowerCase());

    const playerAge = getAge(player.dateOfBirth);

    const ageMatch = playerAge >= ageRange.min && playerAge <= ageRange.max;

    return teamMatch && positionMatch && ageMatch;
  });

  return (
    <div className="main-content">
      <Sidebar
        setSelectedTeam={setSelectedTeam}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
        onApply={setAgeRange}
      />
      <Content players={filteredPlayers} />
    </div>
  );
}

export default MainContent;
