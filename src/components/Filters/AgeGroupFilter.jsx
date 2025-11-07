import { useState } from "react";

function AgeGroupFilter({ onChecked }) {
  const ageGroups = [
    { id: 'all',    label: 'All (16+)',    min: 16, max: Infinity },
    { id: 'teen',    label: 'Teen (16–19)',    min: 16, max: 19 },
    { id: 'young',   label: 'Young (20–24)',   min: 20, max: 24 },
    { id: 'prime',   label: 'Prime (25–30)',   min: 25, max: 30 },
    { id: 'veteran', label: 'Veteran (31+)',   min: 31, max: Infinity }
  ];

  const [selectedIds, setSelectedIds] = useState(['all']);

  const handleChange = (e) => {
    const id = e.target.value;
    let newSelectedIds = [...selectedIds];

    if (id === 'all' || newSelectedIds.length === 0) {
      // Select 'all'
      newSelectedIds = ['all'];
    } else {
      if (newSelectedIds.includes(id)) {
        // Remove if already selected
        newSelectedIds = newSelectedIds.filter(item => item !== id);
      } else {
        // Add selection
        newSelectedIds.push(id);
      }

      // If one individual changed, auto deselect 'all'
      newSelectedIds = newSelectedIds.filter(item => item !== 'all');

      // If no category is selected, auto select 'all'
      if (newSelectedIds.length === 0) {
        newSelectedIds = ['all'];
      }

      // If every category is selected, auto select 'all'
      const allIndividualIds = ageGroups
        .map(g => g.id)
        .filter(id => id !== 'all');

      const everySelected = allIndividualIds.every(id =>
        newSelectedIds.includes(id)
      );

      if (everySelected) {
        newSelectedIds = ['all'];
      }
    }

    setSelectedIds(newSelectedIds);

    // Compute min & max for selected groups
    const selectedGroups = ageGroups.filter(g => newSelectedIds.includes(g.id));

    const min = Math.min(...selectedGroups.map(g => g.min));
    const max = Math.max(...selectedGroups.map(g => g.max));

    onChecked({ min, max });
  };

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
              checked={selectedIds.includes(ageGroup.id)}
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
