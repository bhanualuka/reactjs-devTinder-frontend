import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserRequests } from "../utils/reduxToolkit/slices/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const connectionRequests = useSelector((state) => state.requests);
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

  /*  if (!connectionRequests) return;

  if (connectionRequests.length === 0) return <h1> Loading... </h1>; */

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className=" text-center my-10">
      <h1 className="text-bold  text-white text-3xl"> Connections</h1>

      {connectionRequests.map((Requests) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          Requests.fromUserId;

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
              <button className="btn btn-primary  mx-2">Accept</button>
              <button className="btn btn-secondary mx-2">Reject</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
