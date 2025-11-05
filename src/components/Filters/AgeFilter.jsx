
function AgeFilter() {
  return (
    <div className="form-row">
      <p className="text fw-bold w-100 mb-0">Filter by age</p>

      <div className="form-column mb-2">
        <div className="form-outline">
          <input
            type="number"
            id="min-age"
            className="form-control"
            placeholder="Min age"
          />

          <label
            htmlFor="min-age"
            className="form-label"
          >Min age</label>
        </div>

        <div className="form-outline">
          <input
            type="number"
            id="max-age"
            className="form-control"
            placeholder="Max age"
          />

          <label
            htmlFor="max-age"
            className="form-label"
          >Max age</label>
        </div>
      </div>

      <button
        type="button"
        className="btn-primary mx-auto"
      >Apply</button>
    </div>
  );
}

export default AgeFilter;
