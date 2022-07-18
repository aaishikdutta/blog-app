import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import { authStateHandler, getCurrentUser, getTokenData } from "../utils/auth";

const StandardLayout = ({ children }) => {
  const { authDispatch } = useContext(AuthContext);
  const authStateCallBack = async (user) => {
    if (user) {
      // User is signed in, get the userdata
      const userSnapshot = await getCurrentUser(user);
      //get the admin data
      const idTokenResult = await getTokenData(user);
      //update the store
      authDispatch({
        type: "GET_CURRENT_USER",
        payload: {
          id: userSnapshot.data().id,
          email: userSnapshot.data().email,
          firstName: userSnapshot.data().firstName,
          lastName: userSnapshot.data().lastName,
          username: userSnapshot.data().username,
          role: idTokenResult.claims.admin,
          userId: user.uid,
        },
      });
    }
    authDispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  };

  useEffect(() => {
    authStateHandler(authStateCallBack);
  }, []);
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default StandardLayout;
