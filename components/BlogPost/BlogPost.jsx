import Link from "next/link";
import Arrow from "../../assets/arrow.svg";

const BlogPost = ({ title, blogHTML, blogCoverPhoto }) => {
  return (
    <div className="blog-wrapper flex flex-col shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] md:min-h-[650px] md:max-h-[650px] md:flex-row">
      <div className="blog-content flex flex-col justify-center items-center flex-[4] order-2 md:flex-[3] md:order-1">
        <div className="max-w-[375px] py-[72px] px-[24px] md:py-0 md:px-[24px]">
          <h2 className="text-[32px] font-light uppercase mb-[24px] md:text-[40px]">
            {title}
          </h2>
          <p className="text-[13px] font-light leading-[1.7] max-h-[24px] w-[250px] whitespace-nowrap overflow-hidden text-ellipsis">
            {blogHTML}
          </p>
          <Link href="/">
            <a className="link inline-flex items-center mt-[32px] pb-[4px] border-b border-solid border-transparent hover:border-b-[#303030] transition-all duration-500 ease-in">
              View the Post
              <Arrow className="arrow" />
            </a>
          </Link>
        </div>
      </div>
      <div className="blog-photo order-1 flex-[3] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] md:order-2 md:flex-[4]">
        {/* TODO: Convert the image tag with next image without breaking current styles */}
       <img src={blogCoverPhoto} className="block w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default BlogPost;
