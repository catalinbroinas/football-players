
function AgeFilter({ ageRange, onApply }) {
  const handleChange = (key, value) => {
    const updated = { ...ageRange, [key]: Number(value) };
    onApply(updated);
  };

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
            value={ageRange.min}
            onChange={(e) => handleChange('min', e.target.value)}
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
            value={ageRange.max}
            onChange={(e) => handleChange('max', e.target.value)}
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
        onClick={() => onApply(ageRange)}
        disabled={ageRange.min > ageRange.max}
      >Apply</button>
    </div>
  );
}

export default AgeFilter;
