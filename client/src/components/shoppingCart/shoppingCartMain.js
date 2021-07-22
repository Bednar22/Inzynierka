import axios from 'axios'
import React, {useState, useEffect} from 'react'
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid'
import SummaryCart from './summaryCart';
import SingleOrder from './orderInCart';
import Button from '@material-ui/core/Button'
import { useCart } from './cartContext';

const ShoppingCart = () => {

    const[products, setProducts] = useState([])
    const {cart, setCart} = useCart()
    
    const getProducts = () => {
        
        if(cart.length !== 0){
            console.log('gettin products')
            console.log(cart)
             axios.get('/product/get/all', {
                    params:{
                        productsIds: cart
                        
                    }
                }).then(res=>{
                    console.log('TO WRCA')
                    console.log(res.data)
                    setProducts(res.data)
                })
        } else{
            return;
        }


    }

    //removing item from cart and updating local storage cart
    const removeFromCart = (itemId) =>{
        const productsCopy = [...products]
        const cartCopy = [...cart]
        const indexToRemove = productsCopy.findIndex((obj)=>obj._id === itemId)
        const indexToRemoveFromCart = cart.indexOf(itemId)
        if(indexToRemove > -1) { 
            productsCopy.splice(indexToRemove, 1)
            setProducts(productsCopy)
            cartCopy.splice(indexToRemoveFromCart, 1)
            setCart(cartCopy)

        }   
    }

    useEffect(()=>{
        getProducts()
    },[cart])

    return(
            <Grid container xs={12} sm={12} spacing={2}>
                <Grid container item sm={8} xs={8} direction="column" >
                
                    <List>{/* list grid */}
                        {products.map((item)=>{
                            return(
                                
                                <Grid item xs={12} sm={12} >
                                    <SingleOrder _id={item.id} name={item.name} 
                                    removeFromCart={()=>removeFromCart(item._id)} />
                                    
                                </Grid>
                            )
                        })}
                    </List>
                </Grid> {/* EOF list grid */}
            
                <Grid item sm={4} xs={4}>    
                    <SummaryCart items={products}></SummaryCart>
                </Grid>

                <Grid>
                    <Button color='secondary' variant="contained">
                        Zamawiam
                    </Button>
                </Grid>
            </Grid>
        
    )
}

export default ShoppingCart;