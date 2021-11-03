import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import FirebaseInitial from '../Firebase/Firebase.initialize';


// app initialize
FirebaseInitial()
// google auth 
const auth =getAuth();
const useFirebase=()=>{
    const [user,setUser] = useState({})
    const [isLoading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              console.log(user)
              // User is signed in, see docs for a list of available properties
            } else {
              // User is signed out
              setUser({})
            }
            setLoading(false)
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
          })
    }
    const GoogleSignIn =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const GithubSignIn =()=>{
        return signInWithPopup(auth,githubProvider)
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
        isLoading,
        setLoading,
        GoogleSignIn,
        GithubSignIn,
        updateProfileInfo,
        customSignIn,
        customLogin,
        logOut
    }

}
export default useFirebase