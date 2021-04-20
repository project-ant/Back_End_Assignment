function Card(props) {
  return (
    <div className="m-1">
      <div className="card" style={{ minHeight: "15vw" }}>
        <div className="card-body">
          <h5 className="card-subtitle mb-2 text-muted text-center">
            User Info
          </h5>
          <hr />
          <div className="card-text">
            <p>
              <b>Name:</b> {`${props.first_name} ${props.last_name}`}
            </p>
            <p>
              <b>Email:</b> {`${props.email}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
