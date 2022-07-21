import React,{useReducer} from "react";
import postReducer from "../reducers/postReducer";
import postStore from '../store/postStore';

const PostContext = React.createContext();

export const PostProvider = ({children}) => {
    const [postState, postDispatch] = useReducer(postReducer, postStore);
    return (
        <PostContext.Provider value={{postState, postDispatch}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContext;