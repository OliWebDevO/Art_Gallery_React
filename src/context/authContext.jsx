import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );
    const login =() => {
        // TO DO
        setCurrentUser({
            id:1,
            name:"John Travolta",
            profilePic:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        });
    }
    useEffect(()=> {
        localStorage.setItem('user', JSON.stringify(currentUser));
    },[currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
    )
}