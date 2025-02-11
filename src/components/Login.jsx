import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/reduxToolkit/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("bhanuprakash@gmail.com");
  const [password, setPassword] = useState("Bhanu@123");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        ` ${BASE_URL}/login`,
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data));

      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center my-3 ">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center ">Login</h2>

            <div className="py-1">
              <label className="form-control w-full max-w-xs">
                <div className="label"> Email Id </div>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                  value={emailId}
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                />
              </label>
            </div>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label"> Password </div>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
            </div>

            <p className="text-red-800 flex justify-center"> {error} </p>
            <div className="card-actions justify-center py-2 ">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
