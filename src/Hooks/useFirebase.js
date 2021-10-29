import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";

// google auth 
const auth =getAuth();
const useFirebase=()=>{
    const [user,setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              setUser(user)
            } else {
              // User is signed out
              setUser({})
            }
          });
    },[])


    const customSignIn = (email,pwd)=>{
        return createUserWithEmailAndPassword(auth,email,pwd)

    }
    const customLogin = (email,pwd)=>{
        return signInWithEmailAndPassword(auth,email,pwd)
    }

    const updateProfileInfo =(name,img)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
          }).then(() => {
            const newUser = {...user,displayName:name,photoURL:img}
            setUser(newUser)
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    const GoogleSignIn =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });

    }





    return {
        user,
        setUser,
        GoogleSignIn,
        updateProfileInfo,
        customSignIn,
        customLogin,
        logOut
    }

}
export default useFirebase