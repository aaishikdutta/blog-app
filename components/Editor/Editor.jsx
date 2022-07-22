import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useContext, useEffect } from "react";
import {
  downloadFromStorage,
  saveToCloudStorage,
} from "../../utils/cloudStorage";
import PostContext from "../../context/postContext";

const Editor = () => {
  const { quill, quillRef, Quill } = useQuill({
    placeholder: "Start typing...",
    modules: {
      blotFormatter: {},
    },
  });
  const { postState, postDispatch } = useContext(PostContext);

  if (Quill && !quill) {
    const BlotFormatter = require("quill-blot-formatter").default;
    Quill.register("modules/blotFormatter", BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(postState.blogHTML);
      quill.getModule("toolbar").addHandler("image", selectLocalImage);
      quill.on("text-change", () => {
        postDispatch({
          type: "SET_HTML",
          payload: quill.root.innerHTML,
        });
      });
    }
  }, [quill]);

  const selectLocalImage = () => {
    //use local file explorer to get image
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const filePath = `documents/blogPostPhotos/${file.name}`;
      await saveToCloudStorage(file, filePath);
      const url = await downloadFromStorage(filePath);
      quill.insertEmbed(quill.getSelection(), "image", url);
    };
  };

  return (
    <div className="textEditor relative flex flex-col h-full">
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;
