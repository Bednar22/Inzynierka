import axios from 'axios'
import React, {useState, useEffect} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SummaryCart from './summaryCart';

const ShoppingCart = () => {

    const[products, setProducts] = useState([])

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

    const removeFromCart = (item) =>{
        console.log(item)
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <div>
            <List>
            {products.map((item)=>{
                return(
                    <>
                    <ListItem key={item._id} role={undefined} dense button >
                        <ListItemText id={item._id} primary={item.name} />
                        <ListItemSecondaryAction>
                        
                        <IconButton edge="end" aria-label="comments">
                            <DeleteIcon onClick={()=>removeFromCart(item._id)} />
                        </IconButton>
                        </ListItemSecondaryAction>

                        <ListItemSecondaryAction>
                        <IconButton edge="start" aria-label="comments">
                            <DeleteIcon onClick={()=>removeFromCart(item._id)} />
                        </IconButton>
                        </ListItemSecondaryAction>

                 </ListItem>
                 
                    </>
                )
            })}
            </List>

            <SummaryCart items={products}></SummaryCart>

        </div>
    )
}

export default ShoppingCart;