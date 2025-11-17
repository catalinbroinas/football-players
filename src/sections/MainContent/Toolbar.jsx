import SearchBar from "../../components/Toolbar/SearchBar_temp";
import SortPlayers from "../../components/Toolbar/SortPlayers";

function Toolbar({ 
  setSortBy,
  filterText,
  onFilterTextChange
}) {
  return (
    <section className="toolbar">
      <SearchBar
        filterText={filterText}
        onFilterTextChange={onFilterTextChange}
      />
      <SortPlayers setSortBy={setSortBy} />
    </section>
  );
}

export default Toolbar;
