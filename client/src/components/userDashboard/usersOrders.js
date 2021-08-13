import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleUserOrder from './singleUserOrder'
import Grid from '@material-ui/core/Grid'
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
        <Grid item sm={10} xs={10} >
            {orders.map(item=>{
                return(
                    <SingleUserOrder orderDate={item.date} id={item._id} products={item.products} 
                    shipment={item.shipment} status={item.status} value={item.value} />
                )
            })}
        </Grid>
        </>
    )
}

export default UsersOrders;