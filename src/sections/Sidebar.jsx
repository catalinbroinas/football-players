import FilterForm from "../components/Filters/FilterForm";

function Sidebar({ setSelectedTeam, selectedPositions, setSelectedPositions }) {
  return (
    <aside className="sidebar">
      <FilterForm 
        setSelectedTeam={setSelectedTeam}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
    </aside>
  );
}

export default Sidebar;
