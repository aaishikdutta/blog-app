import { useContext, useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";
import Loader from "../components/Loader/Loader";
import { useRouter } from "next/router";
import AuthContext from "../context/authContext";
import { getIdToken } from "firebase/auth";

const Admin = () => {
  const { authState } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    if (!authState.isAuthLoading) {
      if (!authState.user) {
        router.push("/login");
      } else if (authState.user && !authState.profileAdmin) {
        router.push("/");
      } else {
        setIsLoading(false);
      }
    }
  }, [authState]);

  const emailSubmitHandler = async () => {
    try {
      const token = await getIdToken(authState.user);
      const response = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: { Authentication: `Bearer ${token}` },
      });
      const data = await response.json();
      setResponseMsg(data.message);
    } catch (err) {
      setResponseMsg(err.message);
    }
  };
  return (
    <div className="default-background flex-grow text-white">
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container max-w-[1000px] py-[60px] px-[25px]">
          <h2 className="text-center mb-[16px] font-light text-[32px]">
            Admin
          </h2>
          <div className="rounded-[8px] default-shadow p-[32px] bg-[#303030] flex flex-col max-w-[600px] my-[32px] mx-auto">
            <h2 className="text-center mb-[16px] font-light text-[32px]">
              Add Admin
            </h2>
            <div className="my-[16px]">
              <input
                placeholder="Enter user email to make them an admin"
                type="text"
                id="addAdmin"
                className="w-full border-b-2 border-b-white bg-transparent p-[8px] h-[50px] focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <span className="text-[14px]">{responseMsg}</span>
            <button className="self-center" onClick={emailSubmitHandler}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Admin.getLayout = (page) => {
  return (
    <AppLayout>
      <StandardLayout>{page}</StandardLayout>
    </AppLayout>
  );
};

export default Admin;
