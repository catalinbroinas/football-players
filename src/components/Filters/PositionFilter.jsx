
function PositionFilter() {
  const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

  return (
    <div className="form-row">
      <p className="text fw-bold w-100 mb-0">Choose position</p>

      <div className="form-column">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="position-all"
            value="all"
            className="checkbox-input"
            defaultChecked={true}
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
              className="checkbox-input"
            />

            <label
              htmlFor={`position-${position.toLowerCase()}`}
              className="checkbox-label"
            >{position}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PositionFilter;
