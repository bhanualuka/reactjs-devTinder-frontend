const UserCard = ({ user }) => {
  const { firstName, lastName, age, skills, gendar, photoUrl, about } = user;
  return (
    <div className="flex justify-center my-5">
      <div className="card card-compact bg-base-300 w-96 shadow-xl">
        <figure>
          <img src={photoUrl} alt="user photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName}</h2>
          <p className=""> Age: {age} </p>
          <p className="flex"> {about} </p>

          <div className="card-actions  flex justify-center my-3">
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
