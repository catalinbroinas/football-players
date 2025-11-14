
function SortPlayers({ setSortBy }) {
  const sortOptions = [
    { id: 'default', label: 'Default order' },
    { id: 'name', label: 'Name (A–Z)' },
    { id: 'name-revert', label: 'Name (Z–A)' },
    { id: 'team', label: 'Team (A–Z)' },
    { id: 'team-revert', label: 'Team (Z–A)' },
    { id: 'age',  label: 'Age (Youngest first)' },
    { id: 'age-revert',  label: 'Age (Oldest first)' }
  ];

  return (
    <div className="sortPlayer">
      <label
        htmlFor="select-sort"
        className="form-legend mb-0"
      >Sort by</label>

      <select
        id="select-sort"
        name="sort"
        className="form-outline form-select sortPlayer__select"
        onChange={(e) => setSortBy(e.target.value)}
      >
        {sortOptions.map(option => (
          <option key={option.id} value={option.id}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default SortPlayers;
