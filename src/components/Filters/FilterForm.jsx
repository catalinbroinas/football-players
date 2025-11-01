import SelectTeam from "./SelectTeam";

function FilterForm({ setSelectedTeam }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <SelectTeam setSelectedTeam={setSelectedTeam} />
    </form>
  );
}

export default FilterForm;
