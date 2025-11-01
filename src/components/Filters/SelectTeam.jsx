import players from "../../data/players";

function SelectTeam() {
  const teams = [...new Set(players.map(player => player.team))].sort();

  return (
    <div className="form-row">
      <label 
        htmlFor="team-select" 
        className="text fw-bold w-100 mb-0"
      >
        Select team
      </label>

      <select 
        id="team-select" 
        name="team" 
        className="form-outline" 
        aria-label="Select team"
      >
        <option value="">All teams</option>
        {teams.map(team => (
          <option key={team} value={team}>{team.trim()}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectTeam;
