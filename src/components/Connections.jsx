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

      dispatch(addConnections(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1> No connections </h1>;

  return (
    <div className=" text-center my-10">
      <h1 className="text-bold  text-white text-3xl"> Connections</h1>

      {connections.map((connections) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          connections;

        return (
          <div className="flex   m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto ">
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
              <p>{about} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
