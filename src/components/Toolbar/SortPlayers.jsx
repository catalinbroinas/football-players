
function SortPlayers() {
  const sortOptions = [
    { id: 'name', label: 'Name', filter: null },
    { id: 'team', label: 'Team', filter: null },
    { id: 'age', label: 'Age', filter: null }
  ];

  return (
    <div className="sortPlayer">
      <label
        htmlFor="select-sort"
        className="text fw-bold mb-0"
      >Sort by</label>

      <select
        id="select-sort"
        name="sort"
        className="form-outline form-select sortPlayer__select"
      >
        {sortOptions.map(option => (
          <option key={option.id} value={option.id}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default SortPlayers;
