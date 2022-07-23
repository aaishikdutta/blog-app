import Link from "next/link";
import Arrow from "../../assets/arrow.svg";

const BlogPost = ({ title, date, blogCoverPhoto }) => {
  return (
    <div className="blog-wrapper flex flex-col default-shadow md:min-h-[650px] md:max-h-[650px] md:flex-row my-[50px] mx-[16px] bg-white">
      <div className="blog-content flex flex-col justify-center items-center flex-[4] order-2 md:flex-[3] md:order-1 bg-[#303030]">
        <div className="max-w-[375px] py-[72px] px-[24px] md:py-0 md:px-[24px] text-white">
          <h2 className="text-[32px] font-light uppercase mb-[24px] md:text-[40px]">
            {title}
          </h2>
          <p className="text-[13px] font-light leading-[1.7] max-h-[24px] w-[250px] whitespace-nowrap overflow-hidden text-ellipsis">Published on: {new Date(date).toDateString()}</p>
          <Link href="/">
            <a className="link inline-flex items-center mt-[32px] pb-[4px] border-b border-solid border-transparent hover:border-b-[#303030] transition-all duration-500 ease-in">
              View the Post
              <Arrow className="arrow" />
            </a>
          </Link>
        </div>
      </div>
      <div className="blog-photo order-1 flex-[3] default-shadow md:order-2 md:flex-[4]">
        {/* TODO: Convert the image tag with next image without breaking current styles */}
       <img src={blogCoverPhoto} className="block w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default BlogPost;
