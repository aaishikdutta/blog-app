import Link from "next/link";
import classNames from "classnames";
import Editor from "../components/Editor/Editor";
import AppLayout from "../layouts/AppLayout";
import StandardLayout from "../layouts/StandardLayout";
import FileUpload from "../components/FileUpload/FileUpload";
import { useContext, useState } from "react";
import PostContext from "../context/postContext";
import { downloadFromStorage, saveToCloudStorage } from "../utils/cloudStorage";
import AuthContext from "../context/authContext";
import { addPost } from "../utils/firestore";

const CreatePost = () => {
  const { postState, postDispatch } = useContext(PostContext);
  const { authState } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const titleUpdateHandler = (e) => {
    postDispatch({
      type: 'SET_TITLE',
      payload: e.target.value,
    })
  };

  const uploadHandler = async () => {
    if(!postState.blogTitle || !postState.blogHTML){
      setErrorMessage('Please ensure post title and post content is not empty');
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    if(!postState.blogPhotoFile){
      setErrorMessage('Please ensure post cover photo is not empty');
      setError(true);
      return;
    }
    //upload the cover first
    const filePath = `documents/blogCoverPhotos/${postState.blogPhotoName}`;
    await saveToCloudStorage(postState.blogPhotoFile, filePath);

    const downloadUrl = await downloadFromStorage(filePath);
    const timeStamp = Date.now();
    const docRef = await addPost(postState.blogHTML, downloadUrl, postState.blogPhotoName, postState.blogTitle, authState.profileId, timeStamp);
    console.log(docRef.id);
  }

  const buttonStyle =
    "self-center text-[14px] cursor-pointer rounded-[20px] py-[12px] px-[24px] text-black bg-white no-underline uppercase";
  return (
    <div className="relative h-full default-background text-white flex-grow">
      <div className="container relative h-full p-[10px_25px_60px]">
        <div className={`${error ? 'opacity-1' : 'opacity-0'} w-full p-[12px] rounded-[8px] text-white mb-[10px] bg-[#303030] transition-all duration-500ms ease`}>
          <p className="text-[14px]">
            <span className="font-semibold">Error: </span>{errorMessage}
          </p>
        </div>
        <div className="flex mb-[32px]">
          <input
            type="text"
            placeholder="Enter Blog Title"
            name="blogTitle"
            className="transition-all duration-500 ease-in-out py-[10px] px-[4px] border-b-[1px] border-b-white bg-transparent focus:outline-none shadow-[0_1px_0_0_#303030] min-w-[300px]"
            value={postState.blogTitle}
            onChange={titleUpdateHandler}
          />
          <FileUpload buttonStyle={buttonStyle} />
        </div>
        <div className="h-[60vh] flex flex-col">
          <Editor />
        </div>
        <div className="mt-[32px] flex">
          <button className={classNames([buttonStyle, "mt-0 mr-[16px]"])} onClick={uploadHandler}>
            Publish Blog
          </button>
          <Link href="/preview-post">
            <a className={classNames([buttonStyle, "router-button mt-0"])}>
              Preview Blog
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

CreatePost.getLayout = (page) => {
  return (
    <AppLayout>
      <StandardLayout>{page}</StandardLayout>
    </AppLayout>
  );
};

export default CreatePost;
