
function Intro() {
  return (
    <section className="intro shadow-2">
      <div className="container-fluid text-center">
        <h1 className="intro__title mb-2 mb-md-3">Football players</h1>
        
        <div className="d-flex flex-center gap-2 gap-md-3 mb-2 mb-md-3">
          <hr className="intro__hr" />
          <h2 className="intro__subtitle mb-0">Season 2025-2026</h2>
          <hr className="intro__hr" />
        </div>

        <p className="intro__text mb-0">
          Team players from Premier League
        </p>
      </div>
    </section>
  );
}

export default Intro;
