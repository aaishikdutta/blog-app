import { useState } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";

const mockBlogCards = [
  {
    blogCoverPhoto:
      "https://images.unsplash.com/photo-1593698054589-8c14bb66d2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    blogTitle: "Fake Post #1",
    blogDate: "26 June, 2022",
  },
  {
    blogCoverPhoto:
      "https://images.unsplash.com/photo-1655718355752-67cac4ab4c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    blogTitle: "Fake Post #2",
    blogDate: "25 June, 2022",
  },
  {
    blogCoverPhoto:
      "https://images.unsplash.com/photo-1655210401969-2c4bb429c0fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    blogTitle: "Card Post #1",
    blogDate: "24 June, 2022",
  },
  {
    blogCoverPhoto:
      "https://images.unsplash.com/photo-1655825056958-0ba58b57b241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    blogTitle: "Card Post #2",
    blogDate: "23 June, 2022",
  },
  {
    blogCoverPhoto:
      "https://images.unsplash.com/photo-1655491454593-3dd31026da86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    blogTitle: "Card Post #3",
    blogDate: "22 June, 2022",
  },
  {
    blogCoverPhoto:
      "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80",
    blogTitle: "Card Post #4",
    blogDate: "21 June, 2022",
  },
];

const Blogs = () => {
    const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="relative py-[80px] px-[16px] bg-orange-50 md:py-[100px] md:px-[16px]">
      <div className="container grid gap-[32px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
        <div className="flex items-center absolute top-[-70px] right-0">
          <span className="mr-[16px]">Toggle Editing</span>
          <input
            type="checkbox"
            name="editPost"
            checked={isEditing}
            onClick={() => setIsEditing(!isEditing)}
            before=""
            className="relative cursor-pointer border-none appearance-none bg-white w-[80px] h-[30px] rounded-[20px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] before:content-[attr(before)] before:absolute before:w-[24px] before:h-[24px] before:rounded-[20px] before:top-[3px] before:left-[3px] before:bg-orange-800 before:transition-all before:duration-[750ms] before:ease-in-out checked:before:left-[52px]"
          />
        </div>
        {mockBlogCards.map((card) => {
          return (
            <BlogCard
              blogCoverPhoto={card.blogCoverPhoto}
              blogTitle={card.blogTitle}
              blogDate={card.blogDate}
              isEditing={isEditing}
            />
          );
        })}
      </div>
    </div>
  );
};

Blogs.getLayout = (page) => {
  return (
    <AppLayout>
      <StandardLayout>{page}</StandardLayout>
    </AppLayout>
  );
};

export default Blogs;
