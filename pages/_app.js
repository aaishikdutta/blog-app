import { AuthProvider } from "../context/authContext";
import { PostProvider } from "../context/postContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <AuthProvider>
      <PostProvider>{getLayout(<Component {...pageProps} />)}</PostProvider>
    </AuthProvider>
  );
}

export default MyApp;
