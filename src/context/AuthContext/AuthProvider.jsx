import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,GoogleAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    console.log(user);



    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser = ()=>{
        return signOut(auth);
    }

    const loginWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        signOutUser,
        loginWithGoogle

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;