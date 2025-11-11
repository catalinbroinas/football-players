
function SearchBar() {
  return (
    <form className="form-container">
      <div className="form-row">
        <div className="form-outline">
          <input
            type="text"
            id="searchbar"
            className="form-control"
            placeholder="Search player"
          />

          <label
            htmlFor="searchbar"
            className="form-label"
          >Search player</label>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
