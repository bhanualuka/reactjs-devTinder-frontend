// My code..
/* 
import axios from "axios";
import { use, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/reduxToolkit/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("@gmail.com");
  const [password, setPassword] = useState("@123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
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

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
      console.log(res.data.data);

      return navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center my-3 ">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center ">
              {isLogin ? "Login" : "SignUp"}
            </h2>

            {!isLogin && (
              <>
                {" "}
                <div className="py-1">
                  <label className="form-control w-full max-w-xs">
                    <div className="label"> FirstName</div>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered w-full max-w-xs"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="py-1">
                  <label className="form-control w-full max-w-xs">
                    <div className="label"> LastName</div>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered w-full max-w-xs"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </label>
                </div>
              </>
            )}

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
                  type="password"
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
              <button
                className="btn btn-primary"
                onClick={isLogin ? handleLogin : handleSignUp}
              >
                {isLogin ? "Login" : "SignUp"}
              </button>
            </div>

            <p
              className="m-auto cursor-pointer"
              onClick={() => setIsLogin((value) => !value)}
            >
              {isLogin ? "New User SignUp!" : "Exisiting User.. Login In"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
 */

import axios from "axios";
import { use, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/reduxToolkit/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
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
      console.log(res.data);

      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
      console.log(res.data.data);
      return navigate("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center my-3">
        <div className="card bg-base-300 w-full sm:w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center text-lg sm:text-xl">
              {isLogin ? "Login" : "SignUp"}
            </h2>
            {!isLogin && (
              <>
                <div className="py-1">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">FirstName</div>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered w-full max-w-xs sm:max-w-md"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="py-1">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">LastName</div>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered w-full max-w-xs sm:max-w-md"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </label>
                </div>
              </>
            )}
            <div className="py-1">
              <label className="form-control w-full max-w-xs">
                <div className="label">Email Id</div>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs sm:max-w-md"
                  value={emailId}
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">Password</div>
                <input
                  type="password"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs sm:max-w-md"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
            </div>
            <p className="text-red-800 flex justify-center text-sm sm:text-base">
              {error}
            </p>
            <div className="card-actions justify-center py-2">
              <button
                className="btn btn-primary w-full sm:w-auto"
                onClick={isLogin ? handleLogin : handleSignUp}
              >
                {isLogin ? "Login" : "SignUp"}
              </button>
            </div>
            <p
              className="m-auto cursor-pointer text-center text-sm sm:text-base"
              onClick={() => setIsLogin((value) => !value)}
            >
              {isLogin ? "New User SignUp!" : "Existing User.. Login In"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

/*
 */
