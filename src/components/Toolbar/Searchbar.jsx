import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form className="form-container">
      <div className="form-row">
        <div className="form-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        <div className="form-outline">
          <input
            type="text"
            id="searchbar"
            className="form-control"
            placeholder="Search player"
            value={filterText}
            onChange={(e) => onFilterTextChange(e.target.value)}
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
