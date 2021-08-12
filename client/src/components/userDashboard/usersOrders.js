import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleUserOrder from './singleUserOrder'
const UsersOrders = () => {

    const [orders, setOrders] = useState([])

    const getOrders = () => {
        axios.get('/order/usersorders', 
        {
            headers:{
                "auth-token": localStorage.getItem('token')
                } 
        }).then(res=>{
            setOrders(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getOrders()
    },[])

    return(
        <>
            {orders.map(item=>{
                return(
                    <SingleUserOrder id={item._id} products={item.products} shipent={item.shipment} status={item.status} />
                )
            })}
        </>
    )
}

export default UsersOrders;