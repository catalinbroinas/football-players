import SearchBar from "../components/Toolbar/SearchBar";
import SortPlayers from "../components/Toolbar/SortPlayers";

function Toolbar() {
  return (
    <section className="toolbar">
      <SearchBar />
      <SortPlayers  />
    </section>
  );
}

export default Toolbar;
