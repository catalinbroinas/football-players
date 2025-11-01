
function SelectTeam({ teams, setSelectedTeam }) {
  const handleChange = (e) => {
    setSelectedTeam(e.target.value);
  };

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
        className="form-outline form-select" 
        onChange={handleChange}
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
