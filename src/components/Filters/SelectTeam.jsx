
function SelectTeam() {
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
        <option value="team 1">team 1</option>
        <option value="team 2">team 2</option>
        <option value="team 3">team 3</option>
        <option value="team 4">team 4</option>
        <option value="team 5">team 5</option>
        <option value="team 6">team 6</option>
      </select>
    </div>
  );
}

export default SelectTeam;
