import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const ShopItem = (props) => {

    const [productInfo, setProductInfo] = useState({})

    const getItem = async () => {
            await axios.get(`/product/${props.match.params.id}`).then(res=>{
                setProductInfo(res.data)
                console.log(res.data)
            })
    }

    const addToShoppingCart = () => {
            let shoppingCart = localStorage.getItem('cart')
            if(shoppingCart){
                let shoppingCartJSON = JSON.parse(shoppingCart)
                shoppingCartJSON.push(productInfo._id);
                localStorage.setItem("cart", JSON.stringify(shoppingCartJSON))
            } else {
                const shoppingCartArray = [productInfo._id]
                localStorage.setItem("cart", JSON.stringify(shoppingCartArray))
    }
}

    useEffect(()=>{
        getItem();
    },[])

    return(
        <>
        <Grid>
            <Button onClick={addToShoppingCart} variant='contained' color='secondary'>Dodaj do koszyka</Button>
        </Grid> 
        </>
    )

}

export default ShopItem;