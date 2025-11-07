import { useState } from "react";

function AgeGroupFilter({ minAge, maxAge, onChecked }) {
  const ageGroups = [
    { id: 'all',    label: 'All (16+)',    min: 16, max: Infinity },
    { id: 'teen',    label: 'Teen (16–19)',    min: 16, max: 19 },
    { id: 'young',   label: 'Young (20–24)',   min: 20, max: 24 },
    { id: 'prime',   label: 'Prime (25–30)',   min: 25, max: 30 },
    { id: 'veteran', label: 'Veteran (31+)',   min: 31, max: Infinity }
  ];
  const [ageRange, setAgeRange] = useState({
    min: minAge,
    max: maxAge
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const group = ageGroups.find(ageGroup => ageGroup.id === value);

    if (value === 'all') {
      setAgeRange({ ...ageRange, min: group.min, max: group.max });
    }

    let updateAgeRange = {...ageRange};

    if (checked) {
      updateAgeRange = { min: group.min, max: group.max };
    }

    onChecked(updateAgeRange);
  };

  const isChecked = (e) => {
     const group = ageGroups.find(ageGroup => ageGroup.id === e.target.value);
    return group.min <= ageRange.min && group.max >= ageRange.max;
  };

  return(
    <div className="form-row">
      <p className="text fw-bold w-100 mb-0">Filter by age group</p>

      <div className="form-column">
        {ageGroups.map(ageGroup => (
          <div key={ageGroup.id} className="checkbox-wrapper">
            <input 
              type="checkbox"
              id={`${ageGroup.id}-ageGroup`}
              className="checkbox-input"
              value={ageGroup.id}
              checked={isChecked === true}
              onChange={handleChange}
            />

            <label
              htmlFor={`${ageGroup.id}-ageGroup`}
              className="checkbox-label"
            >{ageGroup.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeGroupFilter;
