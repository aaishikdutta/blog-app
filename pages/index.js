import BlogCard from "../components/BlogCard/BlogCard";
import BlogPost from "../components/BlogPost/BlogPost";
import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";
import { getPosts } from "../utils/firestore";

const Home = ({ posts }) => {
  return (
    <div className="default-background">
      <div className="container">
        {posts.slice(0,2).map((post) => {
          return (
            <BlogPost
              title={post.blogTitle}
              date={post.date}
              blogCoverPhoto={post.blogPhotoFileURL}
            />
          );
        })}
      </div>
      <div className="relative py-[80px] px-[16px] md:py-[100px] md:px-[16px]">
        <div className="container">
          <h3 className="font-light text-[28px] mb-[32px] text-white">
            View More Recent Blogs
          </h3>
          <div className="grid gap-[32px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.slice(2,6).map((card) => {
              return (
                <BlogCard
                  blogCoverPhoto={card.blogPhotoFileURL}
                  blogTitle={card.blogTitle}
                  blogDate={card.date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = [];
  const querySnapshot = await getPosts();
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });

  return {
    props: {
      posts,
    },
  };
};

Home.getLayout = (page) => {
  return (
    <AppLayout>
      <StandardLayout>{page}</StandardLayout>
    </AppLayout>
  );
};

export default Home;
