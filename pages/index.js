import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";

const Home = () => {
  return <h1>Hello World</h1>;
};

Home.getLayout = (page) => {
  return (
    <AppLayout>
      <StandardLayout>{page}</StandardLayout>
    </AppLayout>
  );
};

export default Home;
