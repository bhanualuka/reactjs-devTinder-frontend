// My code
/* 
import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserRequests,
  removeUserRequest,
} from "../utils/reduxToolkit/slices/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const connectionRequests = useSelector((state) => state.requests);

  // Fetchindg Requests
  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/user/requests/received/pending`,
        {
          withCredentials: true,
        }
      );

      console.log(res.data.data);

      dispatch(addUserRequests(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  const reviewRequests = async (status, _id) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // if (!connectionRequests) return;

  // if (connectionRequests.length === 0) return <h1> Loading... </h1>;

  return (
    <div className=" text-center my-10">
      <h1 className="text-bold  text-white text-3xl"> Requests</h1>

      {connectionRequests.map((Request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          Request.fromUserId;

        return (
          <div
            className="flex justify-between items-center  m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto "
            key={_id}
          >
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src={photoUrl}
                alt="photo"
              />
            </div>

            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">{firstName + "" + lastName}</h2>
              {age && gender && <p> {age + "," + gender}</p>}
              <div className="w-[450px]">{about}</div>
            </div>

            <div>
              <button
                className="btn btn-primary  mx-2 "
                onClick={() => reviewRequests("accepted", Request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequests("rejected", Request._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
 */

// First Responsive

import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserRequests,
  removeUserRequest,
} from "../utils/reduxToolkit/slices/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const connectionRequests = useSelector((state) => state.requests);

  // Fetching Requests
  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/user/requests/received/pending`,
        {
          withCredentials: true,
        }
      );
      console.log(res.data.data);
      dispatch(addUserRequests(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  const reviewRequests = async (status, _id) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!connectionRequests || connectionRequests.length === 0) {
    return (
      <h1 className="text-center text-white text-3xl my-10">
        {" "}
        No new Requests{" "}
      </h1>
    );
  }

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl mb-6">Requests</h1>
      {connectionRequests.map((Request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          Request.fromUserId;
        return (
          <div
            className="flex flex-col sm:flex-row justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-full sm:w-3/4 lg:w-1/2 mx-auto"
            key={_id}
          >
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <img
                className="w-24 h-24 rounded-full mx-auto sm:mx-0"
                src={photoUrl}
                alt="photo"
              />
            </div>

            <div className="text-left flex-1 mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <div className="w-full sm:w-[450px]">{about}</div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4 sm:mt-0 w-full sm:w-auto">
              <button
                className="btn btn-primary w-full sm:w-auto"
                onClick={() => reviewRequests("accepted", Request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary w-full sm:w-auto"
                onClick={() => reviewRequests("rejected", Request._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
