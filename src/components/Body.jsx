import axios from "axios";
import Navbar from "./Navbar";

import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/reduxToolkit/slices/userSlice";
import { useEffect } from "react";

const Body = () => {
  // Api call for profile
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const fetchUser = async () => {
    console.log("profile api call");

    try {
      const res = await axios.get(`${BASE_URL}/profile/view`, {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      {/* {user && <Footer />} */}
    </div>
  );
};

export default Body;
