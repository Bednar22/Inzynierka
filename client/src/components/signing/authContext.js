import React, {useState,useEffect, useContext} from 'react'

const UserAuthContext = React.createContext()

export function useUserAuth() {
    return useContext(UserAuthContext)
}

export function UserAuthProvider({children}){

    const [currentUser, setCurrentUser] = useState('')

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