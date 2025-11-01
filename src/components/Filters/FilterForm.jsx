
function FilterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
    </form>
  );
}

export default FilterForm;
