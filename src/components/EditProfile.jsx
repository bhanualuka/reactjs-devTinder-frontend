import { useState } from "react";
import UserCard from "./userCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/reduxToolkit/slices/userSlice";

const EditProfile = ({ user }) => {
  const [userId, setUserId] = useState(user._id);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gendar, setGender] = useState(user.gendar || "");
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const [showTost, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const handleSaveData = async () => {
    setError("");
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        { firstName, lastName, age, photoUrl, about, gendar },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data.data));
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center my-2 ">
        <div className="flex justify-center mx-10 ">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center ">Edit Profile</h2>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">FirstName:</span>
                  </div>
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
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    {" "}
                    <span>LastName:</span>{" "}
                  </div>
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

              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    {" "}
                    <span>PhotoUrl:</span>{" "}
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered w-full max-w-xs"
                    value={photoUrl}
                    onChange={(e) => {
                      setPhotoUrl(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    {" "}
                    <span>Age:</span>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered w-full max-w-xs"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    {" "}
                    <span>Gendar:</span>{" "}
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered w-full max-w-xs"
                    value={gendar}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div>
                <label className="form-control w-full max-w-xs my-3">
                  About:
                  <textarea
                    className="textarea textarea-bordered h-36 "
                    placeholder="Bio"
                    value={about}
                    onChange={(e) => {
                      setAbout(e.target.value);
                    }}
                  ></textarea>
                </label>
              </div>
            </div>

            <p className="text-red-800 flex justify-center"> {error}</p>
            <div className="card-actions justify-center pb-20">
              <button className="btn btn-primary" onClick={handleSaveData}>
                Save Profile
              </button>
            </div>
          </div>
        </div>

        <UserCard
          user={{ userId, firstName, lastName, age, photoUrl, about, gendar }}
        />
      </div>

      {showTost && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
