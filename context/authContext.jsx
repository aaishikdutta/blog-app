import React,{useReducer} from "react";
import authReducer from "../reducers/authReducer";
import authStore from '../store/authStore';

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, authStore);
    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;