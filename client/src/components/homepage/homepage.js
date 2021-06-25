import React, {useState} from 'react'
import axios from 'axios'
import { useUserAuth } from '../signing/authContext'

const Homepage = () => {

  const { currentUser, setCurrentUser } = useUserAuth() //importowane wartosci z hooka, tam bedzie user role



    return(
        <div style={{minHeight:'500px'}}>
           {currentUser}
           <button onClick={()=>setCurrentUser('haha')}>ZMIEN</button>
        </div>
    )

}

export default Homepage;