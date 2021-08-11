import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useCart } from '../shoppingCart/cartContext'

const ShopItem = (props) => {

    const [productInfo, setProductInfo] = useState({})
    const {cart, setCar, addToCart} = useCart()

    const getItem = async () => {
            await axios.get(`/product/${props.match.params.id}`).then(res=>{
                setProductInfo(res.data)
                console.log(res.data)
            })
    }

    const addToShoppingCart = () => {
        //addToCartFunctions(productInfo._id)
        //addToLocalCart(productInfo._id)
        //addToCart(productInfo._id)         
    //setCart(prevCart => [...prevCart, productInfo._id])                    
    }


    useEffect(()=>{
        getItem();
    },[])

    return(
        <>
        <Grid>
            <Button onClick={()=>addToCart(productInfo._id)} variant='contained' color='secondary'>Dodaj do koszyka</Button>
        </Grid> 
        </>
    )

}

export default ShopItem;