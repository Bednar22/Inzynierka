import axios from 'axios'
import React, {useState, useEffect} from 'react'
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid'
import SummaryCart from './summaryCart';
import SingleOrder from './orderInCart';
import Button from '@material-ui/core/Button'
const ShoppingCart = () => {

    const[products, setProducts] = useState([])
    const[ammountArray, setAmmountArray] = ([])
    
    const getProducts = () => {
        const productsIds = localStorage.getItem('cart')
        if(productsIds || productsIds===''){
             console.log(productsIds)
             axios.get('/product/get/all', {
                    params:{
                        productsIds: productsIds
                        
                    }
                }).then(res=>{
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
        const indexToRemove = productsCopy.findIndex((obj)=>obj._id === itemId)
        if(indexToRemove > -1) { 
            productsCopy.splice(indexToRemove, 1)
            setProducts(productsCopy)
            localStorage.setItem("cart", JSON.stringify(productsCopy))
        }   
    }

    const ammountCheck = () => {

    }

    useEffect(()=>{
        getProducts()
    },[])

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