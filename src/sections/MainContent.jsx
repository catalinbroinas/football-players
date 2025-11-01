import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import players from "../data/players";

function MainContent() {
  const[selectedTeam, setSelectedTeam] = useState('');

  const filteredPlayers = selectedTeam
    ? players.filter(player => player.team === selectedTeam)
    : players;

  return (
    <div className="main-content">
      <Sidebar setSelectedTeam={setSelectedTeam} />
      <Content players={filteredPlayers} />
    </div>
  );
}

export default MainContent;
