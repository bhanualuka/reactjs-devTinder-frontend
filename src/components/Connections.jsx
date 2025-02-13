// My code
/* import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/reduxToolkit/slices/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connections);

  console.log(connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });

      dispatch(
        addConnections(
          res.data.data.filter((connection) => connection !== null)
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1> No Connections Found </h1>;

  return (
    <div className=" text-center my-10">
      <h1 className="text-bold  text-white text-3xl"> Connections</h1>

      {connections &&
        connections
          .filter((connection) => connection !== null)
          .map((connection) => {
            const { _id, firstName, lastName, photoUrl, age, gender, about } =
              connection;

            return (
              <div
                key={_id}
                className="flex   m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto "
              >
                <div>
                  <img
                    className="w-20 h-20 rounded-full"
                    src={photoUrl}
                    alt="photo"
                  />
                </div>

                <div className="text-left mx-4">
                  <h2 className="font-bold text-xl">
                    {firstName + "" + lastName}
                  </h2>
                  {age && gender && <p> {age + "," + gender}</p>}
                  <p>{about} </p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Connections;
 */

import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/reduxToolkit/slices/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connections);
  console.log(connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });

      const filteredConnections = res.data.data.filter(
        (connection) => connection !== null
      );
      dispatch(addConnections(filteredConnections));
      /*  dispatch(
        addConnections(
          res.data.data.filter((connection) => connection !== null)
        )
      ); */
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) return <h1> No Connections Found </h1>;

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl mb-6">Connections</h1>
      {connections &&
        connections
          .filter((connection) => connection !== null)
          .map((connection) => {
            const { _id, firstName, lastName, photoUrl, age, gender, about } =
              connection;
            return (
              <div
                key={_id}
                className="flex flex-col sm:flex-row justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-full sm:w-3/4 lg:w-1/2 mx-auto"
              >
                {/* Profile Image */}
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                  <img
                    className="w-24 h-24 rounded-full mx-auto sm:mx-0 object-cover"
                    src={photoUrl}
                    alt="User Profile"
                  />
                </div>

                {/* User Details */}
                <div className="text-left flex-1 mx-4">
                  <h2 className="font-bold text-xl">
                    {firstName + " " + lastName}
                  </h2>
                  {age && gender && <p>{age + ", " + gender}</p>}
                  <p className="w-full sm:w-[450px]">{about}</p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Connections;
