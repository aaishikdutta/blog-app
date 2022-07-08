import BlogCard from "../components/BlogCard/BlogCard";
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

const mockBlogCards = [
  {
    blogCoverPhoto: 'https://images.unsplash.com/photo-1655210401969-2c4bb429c0fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
    blogTitle: 'Card Post #1', 
    blogDate: '24 June, 2022'
  },
  {
    blogCoverPhoto: 'https://images.unsplash.com/photo-1655825056958-0ba58b57b241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
    blogTitle: 'Card Post #2', 
    blogDate: '23 June, 2022'
  },
  {
    blogCoverPhoto: 'https://images.unsplash.com/photo-1655491454593-3dd31026da86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80', 
    blogTitle: 'Card Post #3', 
    blogDate: '22 June, 2022'
  },
  {
    blogCoverPhoto: 'https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80', 
    blogTitle: 'Card Post #4', 
    blogDate: '21 June, 2022'
  }
]

const Home = ({posts, cards}) => {
  return (
    <div className="home">
      {posts.map(post => {
        return <BlogPost title={post.title} blogHTML={post.blogHTML} blogCoverPhoto={post.blogCoverPhoto} />
      })}
      <div className="relative py-[80px] px-[16px] bg-orange-50 md:py-[100px] md:px-[16px]">
        <div className="container">
          <h3 className="font-light text-[28px] mb-[32px]">View More Recent Blogs</h3>
          <div className="grid gap-[32px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cards.map(card => {
              return <BlogCard blogCoverPhoto={card.blogCoverPhoto} blogTitle={card.blogTitle} blogDate={card.blogDate} />
            })}
          </div>
        </div>  
      </div>
    </div>
  )
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: mockBlogPosts,
      cards: mockBlogCards,
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
