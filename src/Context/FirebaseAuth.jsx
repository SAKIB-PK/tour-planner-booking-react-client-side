import React, { createContext } from 'react'
import useFirebase from '../Hooks/useFirebase'


export const FirebaseContext = createContext()
const FirebaseAuth = ({children}) => {
    const allContext = useFirebase()
    return (
        <FirebaseContext.Provider value={allContext}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseAuth
