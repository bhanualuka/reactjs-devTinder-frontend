import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/reduxToolkit/slices/feedSlice";
import UserCard from "./userCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
      //   console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(feed);

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;
  if (feed.length < 0) return <h1> No New Users Found </h1>;

  return <div>{feed && <UserCard user={feed[0]} />}</div>;
};

export default Feed;
