import SearchBar from "../components/Toolbar/SearchBar";
import SortPlayers from "../components/Toolbar/SortPlayers";

function Toolbar({ setSortBy }) {
  return (
    <section className="toolbar">
      <SearchBar />
      <SortPlayers setSortBy={setSortBy} />
    </section>
  );
}

export default Toolbar;
