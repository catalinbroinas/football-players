import FilterForm from "../../components/Filters/FilterForm";

function Sidebar({ 
    setSelectedTeam, 
    selectedPositions, 
    setSelectedPositions,
    ageRange,
    onApply,
    onChecked
  }) {
  return (
    <aside className="sidebar">
      <FilterForm
        setSelectedTeam={setSelectedTeam}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
        ageRange={ageRange}
        onApply={onApply}
        onChecked={onChecked}
      />
    </aside>
  );
}

export default Sidebar;
