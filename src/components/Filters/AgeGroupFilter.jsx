
function AgeGroupFilter() {
  const ageGroups = ['Teen', 'Young', 'Prime', 'Veteran'];

  return(
    <div className="form-row">
      <p className="text fw-bold w-100 mb-0">Filter by age group</p>

      <div className="form-column">
        <div className="checkbox-wrapper">
          <input 
            type="checkbox"
            id="all-ageGroup"
            className="checkbox-input"
            value="all"
            defaultChecked={true}
          />

          <label 
            htmlFor="all-ageGroup" 
            className="checkbox-label"
          >All players</label>
        </div>

        {ageGroups.map(ageGroup => (
          <div key={ageGroup} className="checkbox-wrapper">
            <input 
              type="checkbox"
              id={`${ageGroup.toLowerCase()}-ageGroup`}
              className="checkbox-input"
              value={ageGroup.toLowerCase()}
            />

            <label
              htmlFor={`${ageGroup.toLowerCase()}-ageGroup`}
              className="checkbox-label"
            >{ageGroup}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeGroupFilter;
