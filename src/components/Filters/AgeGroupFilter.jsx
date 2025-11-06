import { useState } from "react";

function AgeGroupFilter({ minAge, maxAge, onChecked }) {
  const ageGroups = [
    { id: 'all',    label: 'All (16+)',    min: 16, max: Infinity },
    { id: 'teen',    label: 'Teen (16–19)',    min: 16, max: 19 },
    { id: 'young',   label: 'Young (20–24)',   min: 20, max: 24 },
    { id: 'prime',   label: 'Prime (25–30)',   min: 25, max: 30 },
    { id: 'veteran', label: 'Veteran (31+)',   min: 31, max: Infinity }
  ];
  const [selectedId, setSelectedId] = useState('all');

  const [ageRange, setAgeRange] = useState({
    min: minAge,
    max: maxAge
  });

  const handleChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);

    const getItem = ageGroups.find(ageGroup => ageGroup.id === e.target.value);
    const newRange = { min: Number(getItem.min), max: Number(getItem.max) };
    
    setAgeRange(newRange);
    onChecked(newRange);
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
              checked={selectedId === ageGroup.id}
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
