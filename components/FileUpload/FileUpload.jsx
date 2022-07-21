import classNames from "classnames";
import { useContext, useRef, useState } from "react";
import PostContext from "../../context/postContext";
import ImageUploadPreview from "../helpers/ImageUploadPreview";

const FileUpload = ({ buttonStyle }) => {
  const fileRef = useRef(null);
  const { postState, postDispatch } = useContext(PostContext);
  const [isPreview, setIsPreview] = useState(false);

  const fileUploadHandler = () => {
    const file = fileRef.current.files[0];
    //create url for it
    const fileURL = URL.createObjectURL(file);
    const fileName = file.name;
    postDispatch({
      type: "SET_COVER_PHOTO",
      payload: {
        fileName,
        fileURL,
      },
    });
  };

  const previewCloseHandler = () => {
    setIsPreview(false);
  };
  return (
    <>
      {isPreview && (
        <ImageUploadPreview
          imageSrc={postState.blogPhotoFileURL}
          closeHandler={previewCloseHandler}
        />
      )}

      <div className="flex-1 ml-[16px] relative flex">
        <label htmlFor="blog-photo" className={buttonStyle}>
          Upload Cover Photo
        </label>
        <input
          ref={fileRef}
          type="file"
          id="blog-photo"
          accept=".jpg, .jpeg, .png"
          className="hidden"
          onChange={fileUploadHandler}
        />
        <button
          className={classNames([
            buttonStyle,
            "mt-0 ml-[16px]",
            { "button-inactive": postState.blogPhotoFileURL === null },
          ])}
          onClick={() => setIsPreview(true)}
        >
          Preview Photo
        </button>
        <span className="text-[12px] ml-[16px] self-center">
          File Chosen: {postState.blogPhotoName}
        </span>
      </div>
    </>
  );
};

export default FileUpload;
