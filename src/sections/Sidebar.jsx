import FilterForm from "../components/Filters/FilterForm";

function Sidebar({ setSelectedTeam }) {
  return (
    <aside className="sidebar">
      <FilterForm setSelectedTeam={setSelectedTeam} />
    </aside>
  );
}

export default Sidebar;
