
function PositionFilter({ selectedPositions, setSelectedPositions }) {
  const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (value === 'all') {
      return setSelectedPositions(['all']);
    }

    let updatedPositions = [...selectedPositions];

    if (checked) {
      updatedPositions = updatedPositions
        .filter(pos => pos !== 'all')
        .concat(value);
    } else {
      updatedPositions = updatedPositions.filter(pos => pos !== value);
    }

    if (updatedPositions.length === 0) {
      updatedPositions = ['all'];
    }

    setSelectedPositions(updatedPositions);
  };

  return (
    <fieldset className="form-fieldset">
      <legend className="form-legend">Choose position</legend>

      <div className="form-column filter-form__check-positions">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="position-all"
            value="all"
            className="checkbox-input"
            checked={selectedPositions.includes('all')}
            onChange={handleChange}
          />

          <label
            htmlFor="position-all"
            className="checkbox-label"
          >All positions
          </label>
        </div>

        {positions.map(position => (
          <div key={position} className="checkbox-wrapper">
            <input
              type="checkbox"
              id={`position-${position.toLowerCase()}`}
              value={position.toLowerCase()}
              checked={selectedPositions.includes(position.toLowerCase())}
              onChange={handleChange}
              className="checkbox-input"
            />

            <label
              htmlFor={`position-${position.toLowerCase()}`}
              className="checkbox-label"
            >{position}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default PositionFilter;
