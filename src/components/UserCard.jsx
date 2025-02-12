import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/reduxToolkit/slices/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, age, skills, gendar, photoUrl, about } =
    user;

  const dispatch = useDispatch();

  const handleRequests = async (status, userId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };

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
            <button
              className="btn btn-secondary"
              onClick={() => handleRequests("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleRequests("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
