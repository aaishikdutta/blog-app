import Admin from "../assets/admin.svg";
import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";
import Loader from "../components/Loader/Loader";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../context/authContext";
import { useRouter } from "next/router";
import { updateUserData } from "../utils/auth";

const Profile = () => {
  const { authState, authDispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (!authState.isAuthLoading) {
      if (!authState.user) {
        router.push("/login");
      } else {
        setFirstName(authState.profileFirstName);
        setLastName(authState.profileLastName);
        setUsername(authState.profileUsername);
        setEmail(authState.profileEmail);
        setIsLoading(false);
      }
    }
  }, [authState]);

  const updateUserSettings = async () => {
    setIsLoading(true);
    await updateUserData(firstName, lastName, username, authState.user);
    authDispatch({
      type: "UPDATE_USER_SETTING",
      payload: {
        firstName: firstName,
        lastName: lastName,
        username: username,
      },
    });
    setIsLoading(false);
  };

  return (
    <div className="profile">
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container max-w-[1000px] py-[60px] px-[25px]">
          <h2 className="text-center mb-[16px] font-light text-[32px]">
            Account Settings
          </h2>
          <div className="rounded-[8px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] p-[32px] bg-[#f1f1f1] flex flex-col max-w-[600px] my-[32px] mx-auto">
            <div className="w-[80px] h-[80px] text-[32px] bg-[#303030] text-white flex self-center items-center justify-center rounded-[50%]">
              {authState.profileInitials}
            </div>
            <div className="flex self-center text-white text-[14px] py-[8px] px-[24px] rounded-[8px] bg-[#303030] my-[16px] mx-0 text-center capitalize">
              <Admin class="w-[14px] h-auto mr-[8px]" />
              <span>admin</span>
            </div>

            <div className="my-[16px] mx-0">
              <label htmlFor="firstName" className="text-[14px] block pb-[6px]">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border-none bg-[#f2f7f6] p-[8px] h-[50px] md:focus:outline-none"
              />
            </div>
            <div className="my-[16px] mx-0">
              <label htmlFor="lastName" className="text-[14px] block pb-[6px]">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border-none bg-[#f2f7f6] p-[8px] h-[50px] md:focus:outline-none"
              />
            </div>
            <div className="my-[16px] mx-0">
              <label htmlFor="username" className="text-[14px] block pb-[6px]">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-none bg-[#f2f7f6] p-[8px] h-[50px] md:focus:outline-none"
              />
            </div>
            <div className="my-[16px] mx-0">
              <label htmlFor="email" className="text-[14px] block pb-[6px]">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly
                className="w-full border-none bg-[#f2f7f6] p-[8px] h-[50px] md:focus:outline-none"
              />
            </div>
            <button className="self-center" onClick={updateUserSettings}>
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Profile.getLayout = (page) => {
  return (
    <AppLayout>
      <StandardLayout>{page}</StandardLayout>
    </AppLayout>
  );
};

export default Profile;
