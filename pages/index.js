import BlogPost from "../components/BlogPost/BlogPost";
import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";

const mockBlogPosts = [
  {
    title: 'Fake Post #1',
    blogHTML: 'Lorem ipsum sit amet dolor ipsum astra elit',
    blogCoverPhoto: 'https://images.unsplash.com/photo-1593698054589-8c14bb66d2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Fake Post #2',
    blogHTML: 'Lorem ipsum sit amet dolor ipsum astra elit',
    blogCoverPhoto: 'https://images.unsplash.com/photo-1655718355752-67cac4ab4c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
  }
]

const Home = ({posts}) => {
  return (
    <div className="home">
      {posts.map(post => {
        return <BlogPost title={post.title} blogHTML={post.blogHTML} blogCoverPhoto={post.blogCoverPhoto} />
      })}
    </div>
  )
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: mockBlogPosts
    }
  }
}

Home.getLayout = (page) => {
  return (
    <AppLayout>
      <StandardLayout>{page}</StandardLayout>
    </AppLayout>
  );
};

export default Home;
