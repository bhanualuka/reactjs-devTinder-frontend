//  My first one..

/*

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

export default EditProfile;  */

// Second one
/* 
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
  const [showToast, setShowToast] = useState(false);

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
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 ">
      <div className="w-full max-w-5xl bg-base-300 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Edit Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="form-control">
            <span className="label-text">First Name</span>
            <input
              type="text"
              className="input input-bordered"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text">Last Name</span>
            <input
              type="text"
              className="input input-bordered"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text">Photo URL</span>
            <input
              type="text"
              className="input input-bordered"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text">Age</span>
            <input
              type="text"
              className="input input-bordered"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text">Gender</span>
            <input
              type="text"
              className="input input-bordered"
              value={gendar}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
        </div>

        <label className="form-control mt-4">
          <span className="label-text">About</span>
          <textarea
            className="textarea textarea-bordered h-28"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>

        {error && <p className="text-red-600 text-center mt-2">{error}</p>}

        <div className="flex justify-center mt-6">
          <button
            className="btn btn-primary w-full md:w-auto"
            onClick={handleSaveData}
          >
            Save Profile
          </button>
        </div>
      </div>

      <UserCard
        user={{ userId, firstName, lastName, age, photoUrl, about, gendar }}
        className="h-48"
      />

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile; */

// responsivness -1
/* 
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
  const [showToast, setShowToast] = useState(false);

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
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4 md:p-8 w-full">
      <div className="w-full h-[650px] max-w-4xl bg-base-300 p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="form-control ">
            <span className="label-text text-xl ">First Name</span>
            <input
              type="text"
              className="input input-bordered w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label className="form-control ">
            <span className="label-text text-xl  ">Last Name</span>
            <input
              type="text"
              className="input input-bordered w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text text-xl  ">Photo URL</span>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text text-xl  ">Age</span>
            <input
              type="number"
              className="input input-bordered w-full"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text text-xl  ">Gender</span>
            <input
              type="text"
              className="input input-bordered w-full"
              value={gendar}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
        </div>

        <label className="form-control mt-4">
          <span className="label-text text-xl  ">About</span>
          <textarea
            className="textarea textarea-bordered w-full h-24"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>

        {error && <p className="text-red-600 text-center mt-2">{error}</p>}

        <div className="flex justify-center mt-6">
          <button
            className="btn btn-primary w-full sm:w-auto"
            onClick={handleSaveData}
          >
            Save Profile
          </button>
        </div>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <UserCard
          user={{ userId, firstName, lastName, age, photoUrl, about, gendar }}
        />
      </div>

      {showToast && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-xs">
          <div className="toast toast-top toast-center">
            <div className="alert alert-success">
              <span>Profile Saved successfully.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
 */

// responsivness -2
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
  const [showToast, setShowToast] = useState(false);

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
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4 md:p-8 w-full">
      {/* Edit Profile Form */}
      <div className="w-full max-w-4xl bg-base-300 p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="form-control">
            <span className="label-text text-xl">First Name</span>
            <input
              type="text"
              className="input input-bordered w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text text-xl">Last Name</span>
            <input
              type="text"
              className="input input-bordered w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text text-xl">Photo URL</span>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text text-xl">Age</span>
            <input
              type="number"
              className="input input-bordered w-full"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text text-xl">Gender</span>
            <input
              type="text"
              className="input input-bordered w-full"
              value={gendar}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
        </div>

        <label className="form-control mt-4">
          <span className="label-text text-xl">About</span>
          <textarea
            className="textarea textarea-bordered w-full h-24"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>

        {error && <p className="text-red-600 text-center mt-2">{error}</p>}

        <div className="flex justify-center mt-6 mb-8 sm:mb-0">
          <button
            className="btn btn-primary w-full sm:w-auto"
            onClick={handleSaveData}
          >
            Save Profile
          </button>
        </div>
      </div>

      {/* User Card */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-6 sm:mt-0">
        <UserCard
          user={{ userId, firstName, lastName, age, photoUrl, about, gendar }}
        />
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-xs">
          <div className="alert alert-success">
            <span>Profile Saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
