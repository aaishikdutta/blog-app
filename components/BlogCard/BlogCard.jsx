import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import Arrow from "../../assets/arrow.svg";
import Link from "next/link";

const BlogCard = ({
  blogCoverPhoto,
  blogTitle,
  blogDate,
  isEditing = false,
}) => {
  return (
    <div className="relative cursor-pointer flex flex-col rounded-[8px] bg-white min-h-[420px] transition-all duration-500 ease-in-out hover:rotate-[-1deg] hover:scale-[1.01] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
      {isEditing && <div className="flex absolute top-[10px] right-[10px] z-[99]">
        <div className="icon flex justify-center items-center w-[35px] h-[35px] rounded-[50%] bg-white transition-all duration-500 ease-in-out hover:bg-[#303030] mr-[8px]">
          <Edit className="edit pointer-events-none h-[15px] w-auto" />
        </div>
        <div className="icon flex justify-center items-center w-[35px] h-[35px] rounded-[50%] bg-white transition-all duration-500 ease-in-out hover:bg-[#303030]">
          <Delete className="delete pointer-events-none h-[15px] w-auto" />
        </div>
      </div>}
      <img
        src={blogCoverPhoto}
        className="block rounded-[8px_8px_0_0] z-1 w-full min-h-[200px] object-cover"
      />
      <div className="flex flex-col h-full z-3 py-[32px] px-[16px] text-black">
        <h4 className="pb-[8px] text-[20px] font-light">{blogTitle}</h4>
        <h6 className="font-normal text-[12px] pb-[16px]">
          Posted on: {blogDate}
        </h6>
        <Link href="/">
          <a className="link inline-flex items-center mt-auto font-medium pt-[20px] text-[12px] pb-[4px] transition-all duration-500 ease-in hover:text-[rgba(48,48,48,0.8)]">
            View The Post <Arrow className="arrow w-[10px]" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
