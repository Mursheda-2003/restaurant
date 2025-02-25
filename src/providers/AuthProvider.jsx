import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // create user function
    const createUser = (email, password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // signIn user function
    const signIn = (email, password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user logout function
    const logOut = () =>{
        setLoading(false)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log("currentUser", currentUser)
            setLoading(false)
        });
        return()=>{
            return unsubscribe;
        }
    },[])
    
    const infoData ={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

  return (
    <AuthContext.Provider value={infoData}>
    {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;