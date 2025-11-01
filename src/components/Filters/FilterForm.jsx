import SelectTeam from "./SelectTeam";
import players from "../../data/players";

function FilterForm({ setSelectedTeam }) {
  const teams = [...new Set(players.map(player => player.team))].sort();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <SelectTeam teams={teams} setSelectedTeam={setSelectedTeam} />
    </form>
  );
}

export default FilterForm;
