import { useState, useEffect } from "react";

function AgeFilter({ ageRange, onApply }) {
  const [localAgeRange, setLocalAgeRange] = useState({
    min: ageRange.min,
    max: ageRange.max
  });

  useEffect(() => {
    setLocalAgeRange(ageRange)
  }, [ageRange]);

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
            value={localAgeRange.min}
            onChange={(e) => setLocalAgeRange({...localAgeRange, min: Number(e.target.value)})}
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
            value={localAgeRange.max || ""}
            onChange={(e) => setLocalAgeRange({...localAgeRange, max: Number(e.target.value)})}
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
        onClick={() => onApply(localAgeRange)}
        disabled={localAgeRange.min > localAgeRange.max}
      >Apply</button>
    </div>
  );
}

export default AgeFilter;
