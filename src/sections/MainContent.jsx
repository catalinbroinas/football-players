import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import players from "../data/players";

function MainContent() {
  const[selectedTeam, setSelectedTeam] = useState('');
  const [selectedPositions, setSelectedPositions] = useState(['all']);

  const filteredPlayers = players.filter(player => {
    const teamMatch = selectedTeam 
      ? player.team === selectedTeam
      : true;

    const positionMatch = 
      selectedPositions.includes('all') ||
      selectedPositions.includes(player.position.toLowerCase());

    return teamMatch && positionMatch;
  });

  return (
    <div className="main-content">
      <Sidebar 
        setSelectedTeam={setSelectedTeam}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
      <Content players={filteredPlayers} />
    </div>
  );
}

export default MainContent;
