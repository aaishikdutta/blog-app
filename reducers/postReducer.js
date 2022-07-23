const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_COVER_PHOTO": {
      const newState = { ...state };
      const { fileName, fileURL, file } = action.payload;

      newState.blogPhotoName = fileName;
      newState.blogPhotoFileURL = fileURL;
      newState.blogPhotoFile = file;
      console.log(newState);
      return newState;
    }
    case "SET_TITLE": {
      const newState = {...state};
      const title = action.payload;

      newState.blogTitle = title;
      console.log(newState.blogTitle);
      return newState;
    }
    case "SET_HTML": {
      const newState = {...state};
      const html = action.payload;

      newState.blogHTML = html;
      console.log(newState.blogHTML);
      return newState;
    }
  }
};

export default postReducer;
