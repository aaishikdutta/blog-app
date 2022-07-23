import { useContext } from "react"
import PostContext from "../context/postContext"
import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";
import "quill/dist/quill.snow.css";

const PreviewPost = () => {
    const {postState} = useContext(PostContext);
    return (
        <div className="min-h-full default-background flex-grow text-white">
            <div className="container quillWrapper max-w-[1000px] py-[60px] px-[25px]">
                <h2 className="mb-[16px] font-light text-[32px]">{postState.blogTitle}</h2>
                <img src={postState.blogPhotoFileURL} className="w-full mb-[32px]" />
                <div className="post-content ql-editor p-0" dangerouslySetInnerHTML={{__html: postState.blogHTML}} />
            </div>
        </div>
    )
}

PreviewPost.getLayout = (page) => {
    return (
      <AppLayout>
        <StandardLayout>{page}</StandardLayout>
      </AppLayout>
    );
  };

export default PreviewPost;