
function SelectTeam({ teams, setSelectedTeam }) {
  const handleChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  return (
    <div className="form-column filter-form__select-team">
      <label
        htmlFor="team-select" 
        className="form-legend mb-0"
      >
        Select team
      </label>

      <select 
        id="team-select" 
        name="team" 
        className="form-select filter-form__select"
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
