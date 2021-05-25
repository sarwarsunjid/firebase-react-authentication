import React, { useContext, useState, useEffect } from 'react'
//import firebase auth module 
import {auth} from '../firebase'

export function useAuth(){
    return useContext(AuthContext)
}


export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] =useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(()=>{
        const unsubscribe = auth.onStateChanged(user=>{
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    
}


const value = {
    currentUser
}


export const authContext = () => {
    return (
        <>
           <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
