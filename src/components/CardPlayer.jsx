import { getAge } from "../utils/dateUtils";

function CardPlayer({ image, name, dateOfBirth, position, team }) {
  const age = getAge(dateOfBirth);

  return (
    <div className="card card-player">
      <div className="card-image">
        <img src={image} alt={`Photo of ${name}`} className="img-fluid" />
      </div>

      <div className="card-header">
        <h3 className="card-title">{name}</h3>
        <h4 className="card-subtitle">{team}</h4>
      </div>

      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text m-0">{age} years</p>
          <p className="card-text m-0">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default CardPlayer;
