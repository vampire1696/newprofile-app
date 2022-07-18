import { createContext,useContext, useEffect } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth"

const authUserContext = createContext({user:null})

export default function AuthUserProvider({children}){
    useEffect(() => {
      
    })
    return<authUserContext.Provider>{children}</authUserContext.Provider>
}


export const useAuth = () => useContext(authUserContext)