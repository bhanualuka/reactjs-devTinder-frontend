// code

import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/reduxToolkit/slices/feedSlice";
import { useCookies } from "react-cookie";

const UserCard = ({ user }) => {
  const [cookies] = useCookies(["Token"]);

  const { _id, firstName, lastName, age, skills, gendar, photoUrl, about } =
    user;

  const dispatch = useDispatch();

  const handleRequests = async (status, userId) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${cookies.Token}`,
          },
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
          <p className=""> {gendar} </p>
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

/* 
import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/reduxToolkit/slices/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, age, gendar, photoUrl, about } = user;
  const dispatch = useDispatch();

  const handleRequests = async (status, userId) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center my-5">
      <div
        className="card card-compact bg-base-300 shadow-xl 
                      w-96 sm:w-80 md:w-96 lg:w-96"
      >
        <figure>
          <img
            src={photoUrl}
            alt="User"
            className="w-full h-auto object-cover"
          />
        </figure>

        <div className="card-body p-4">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          <p>Age: {age}</p>
          <p className="capitalize">Gender: {gendar}</p>
          <p className="text-gray-700 mt-2">{about}</p>

          <div className="card-actions flex justify-center gap-2 mt-4">
            <button
              className="btn btn-secondary w-full sm:w-auto"
              onClick={() => handleRequests("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-primary w-full sm:w-auto"
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
 */
