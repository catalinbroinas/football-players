import FilterForm from "../components/Filters/FilterForm";

function Sidebar({ 
    setSelectedTeam, 
    selectedPositions, 
    setSelectedPositions,
    onApply,
    onChecked
  }) {
  return (
    <aside className="sidebar">
      <FilterForm
        setSelectedTeam={setSelectedTeam}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
        onApply={onApply}
        onChecked={onChecked}
      />
    </aside>
  );
}

export default Sidebar;
