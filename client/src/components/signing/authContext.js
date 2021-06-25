import React, {useState,useEffect, useContext} from 'react'
import axios from 'axios'

const UserAuthContext = React.createContext()

export function useUserAuth() {
    return useContext(UserAuthContext)
}

export function UserAuthProvider({children}){

    const [currentUser, setCurrentUser] = useState('pies')

    // const getUserInfo = async () => {
    //     if(localStorage.getItem('token')){
    //         try {
    //             //await axios.get('/categories', {
    //                 await axios.get('/users/user', {
    //                 headers:{
    //                     "auth-token": localStorage.getItem('token'),
    //                 },
    //             }).then(res=>{
    //                 setCurrentUser(res.data)
    //             }) 
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // }

    // useEffect(()=>{
    //     getUserInfo();
    // },[])

    const value = {
        currentUser, 
        setCurrentUser
    }

    return(
            <UserAuthContext.Provider value={value}>
                {children}
            </UserAuthContext.Provider>
    )

}