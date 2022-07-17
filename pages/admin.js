import { useContext, useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";
import Loader from "../components/Loader/Loader";
import { useRouter } from "next/router";
import AuthContext from "../context/authContext";

const Admin = () => {
  const { authState } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    if (!authState.isAuthLoading) {
        console.log(authState.profileAdmin, authState.isAuthLoading);
      if (!authState.user) {
        router.push("/login");
      }else if(authState.user && !authState.profileAdmin){
        router.push("/");
      }else{
        setIsLoading(false);
      }
    }
  }, [authState]);

  const emailSubmitHandler = () => {
    fetch("/api/admin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => setResponseMsg(data.message))
      .catch((err) => {
        setResponseMsg(err.message);
      });
  };
  return (
    <div className="admin">
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container max-w-[1000px] py-[60px] px-[25px]">
          <h2 className="text-center mb-[16px] font-light text-[32px]">
            Admin
          </h2>
          <div className="rounded-[8px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] p-[32px] bg-[#f1f1f1] flex flex-col max-w-[600px] my-[32px] mx-auto">
            <h2 className="text-center mb-[16px] font-light text-[32px]">
              Add Admin
            </h2>
            <div className="my-[16px]">
              <input
                placeholder="Enter user email to make them an admin"
                type="text"
                id="addAdmin"
                className="w-full border-none bg-[#f2f7f6] p-[8px] h-[50px] focus:outline-none"
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
