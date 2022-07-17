import Admin from "../assets/admin.svg";
import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";
import Loader from "../components/Loader/Loader";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/authContext";
import { useRouter } from "next/router";

const Profile = () => {
  const {authState} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if(!authState.isAuthLoading){
      if(authState.user){
      }else{
        router.push('/login');
      }
      setIsLoading(false);
    }
  },[authState]);
  return (
    <div className="profile">
      {isLoading && <Loader />}
      {!isLoading && <div className="container max-w-[1000px] py-[60px] px-[25px]">
        <h2 className="text-center mb-[16px] font-light text-[32px]">
          Account Settings
        </h2>
        <div className="rounded-[8px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] p-[32px] bg-[#f1f1f1] flex flex-col max-w-[600px] my-[32px] mx-auto">
          <div className="w-[80px] h-[80px] text-[32px] bg-[#303030] text-white flex self-center items-center justify-center rounded-[50%]">
            AD
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
              className="w-full border-none bg-[#f2f7f6] p-[8px] h-[50px] md:focus:outline-none"
            />
          </div>
          <div className="my-[16px] mx-0">
            <label htmlFor="lastName" className="text-[14px] block pb-[6px]">
              LastName:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
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
              className="w-full border-none bg-[#f2f7f6] p-[8px] h-[50px] md:focus:outline-none"
            />
          </div>
          <button className="self-center">Save Changes</button>
        </div>
      </div>}
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
