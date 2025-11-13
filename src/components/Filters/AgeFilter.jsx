import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function AgeFilter({ ageRange, onApply }) {
  const [localAgeRange, setLocalAgeRange] = useState({
    min: ageRange.min,
    max: ageRange.max
  });

  useEffect(() => {
    setLocalAgeRange(ageRange)
  }, [ageRange]);

  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">Filter by age</legend>

      <div className="form-row filter-form__apply-ageRange">
        <div className="form-outline">
          <input
            type="number"
            id="min-age"
            className="form-control"
            placeholder="Min"
            value={localAgeRange.min}
            onChange={(e) => setLocalAgeRange({...localAgeRange, min: Number(e.target.value)})}
          />

          <label
            htmlFor="min-age"
            className="form-label"
          >Min</label>
        </div>

        <div className="form-outline">
          <input
            type="number"
            id="max-age"
            className="form-control"
            placeholder="Max"
            value={localAgeRange.max || ""}
            onChange={(e) => setLocalAgeRange({...localAgeRange, max: Number(e.target.value)})}
          />

          <label
            htmlFor="max-age"
            className="form-label"
          >Max</label>
        </div>

        <button
          type="button"
          className="btn-primary mx-auto"
          aria-label="Apply"
          onClick={() => onApply(localAgeRange)}
          disabled={localAgeRange.min > localAgeRange.max}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </fieldset>
  );
}

export default AgeFilter;
