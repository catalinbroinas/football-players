import SelectTeam from "./SelectTeam";

function FilterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <SelectTeam />
    </form>
  );
}

export default FilterForm;
