import { useState, useEffect, useMemo } from "react";

function AgeGroupFilter({ ageRange, onChecked }) {
  const ageGroups = useMemo(() => [
    { id: 'teen',    label: 'Teen (16–19)',    min: 16, max: 19 },
    { id: 'young',   label: 'Young (20–24)',   min: 20, max: 24 },
    { id: 'prime',   label: 'Prime (25–30)',   min: 25, max: 30 },
    { id: 'veteran', label: 'Veteran (31+)',   min: 31, max: null }
  ], []);

  const [selectedId, setSelectedId] = useState('');

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedId(value);
      const group = ageGroups.find(ageGroup => ageGroup.id === value);
      onChecked({ min: group.min, max: group.max });
    } else {
      setSelectedId('');
      onChecked({
        min: ageGroups[0].min,
        max: ageGroups[ageGroups.length - 1].max
       });
    }
  };

  useEffect(() => {
    const match = ageGroups.find(g =>
      g.min === ageRange.min && g.max === ageRange.max
    );
    setSelectedId(match ? match.id : '');
  }, [ageRange, ageGroups]);

  return (
    <div className="form-row">
      <p className="text fw-bold w-100 mb-0">
        Filter by age group
      </p>

      <div className="form-column">
        {ageGroups.map(ageGroup => (
          <div key={ageGroup.id} className="checkbox-wrapper">
            <input
              type="checkbox"
              id={`${ageGroup.id}-ageGroup`}
              className="checkbox-input"
              value={ageGroup.id}
              checked={ageGroup.id === selectedId}
              onChange={handleChange}
            />
            <label
              htmlFor={`${ageGroup.id}-ageGroup`}
              className="checkbox-label"
            >
              {ageGroup.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeGroupFilter;
