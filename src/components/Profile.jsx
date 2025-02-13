import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    user && (
      <div className="flex justify-center my-5 ">
        <EditProfile user={user} />
      </div>
    )
  );
};

export default Profile;
