import FilterForm from "../components/Filters/FilterForm";

function Sidebar({ 
    setSelectedTeam, 
    selectedPositions, 
    setSelectedPositions,
    onApply
  }) {
  return (
    <aside className="sidebar">
      <FilterForm
        setSelectedTeam={setSelectedTeam}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
        onApply={onApply}
      />
    </aside>
  );
}

export default Sidebar;
