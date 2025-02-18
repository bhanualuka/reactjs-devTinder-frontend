import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/reduxToolkit/slices/feedSlice";
import UserCard from "./userCard";
import { useCookies } from "react-cookie";

const Feed = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["Token"]);
  const feed = useSelector((state) => state.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        headers: {
          Authorization: `Bearer ${cookies.Token}`,
        },
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
      //   console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;
  if (feed.length === 0) {
    return (
      <h1 className="flex justify-center text-bold text-full">
        No New Users Found
      </h1>
    );
  }

  return <div>{feed && <UserCard user={feed[0]} />}</div>;
};

export default Feed;
