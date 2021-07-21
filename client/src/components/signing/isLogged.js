import React from 'react'
import 'axios'
import axios from 'axios'

export const isLogged = () => {
    // let logged = false;
    const localToken = localStorage.getItem('token')
    // if(localToken){
    //         axios.get('/users/logcheck', {
    //             headers:{
    //                 "auth-token": localToken
    //                 }
    //         }).then(res=>{
    //             logged = res.data;
    //             console.log('TO JEST W SRODKU')
    //             console.log(logged)
    //             return logged
    //         }).catch(err=>{
    //             console.log(err)
    //         })
    // } 
    if(localToken) {
        return true;
    }
    // console.log('TO nA ZEWNARZ DO ODDANIA')
    // console.log(logged)
    return false;    

}