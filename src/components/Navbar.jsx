// MyCode
/* 
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants/constants";
import { removeUser } from "../utils/reduxToolkit/slices/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            🧑‍💻DevTinder
          </Link>
        </div>
        {user && (
          <div className="flex-none gap-2">
            <p> Welcome {user.firstName}👋 </p>
            <div className="dropdown dropdown-end mx-8">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full   ">
                  <img alt="user photo" src={user.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections">connections</Link>
                </li>

                <li>
                  <Link to="/requests">Requests</Link>
                </li>

                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;


 */

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants/constants";
import { removeUser } from "../utils/reduxToolkit/slices/userSlice";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  console.log(user, "user");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser());
      removeCookie("Token", { path: "/" });
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="navbar bg-base-300">
        {/* Left Section */}
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-xl sm:text-2xl lg:text-3xl"
          >
            🧑‍💻DevTinder
          </Link>
        </div>

        {/* Right Section */}
        {user && (
          <div className="flex-none gap-2">
            {/* Welcome Message */}
            <p className="hidden lg:block">Welcome {user?.firstName}👋</p>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end mx-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="user photo" src={user?.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/requests">Requests</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
