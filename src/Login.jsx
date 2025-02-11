import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("bhanuprakash@gmail.com");
  const [password, setPassword] = useState("Bhanu@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8888/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(res);
    } catch (err) {
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
