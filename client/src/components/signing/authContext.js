import React, {useState, useContext} from 'react'

const UserAuthContext = React.createContext()

export function useUserAuth() {
    return useContext(UserAuthContext)
}

export function UserAuthProvider({children}){

    const [currentUser, setCurrentUser] = useState()

    const getUser = () => {
        if(localStorage.getItem('token')){
            
        }

    }


    const value = {
        currentUser
    }

    return(
            <UserAuthContext.Provider value={value}>
                {children}
            </UserAuthContext.Provider>
    )

}