import React, {useState,useEffect, useContext} from 'react'
import axios from 'axios'

const CartContext = React.createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartContextProvider({children}){

    const [cart, setCart] = useState([])
    const [cartLen, setCartLen] = useState(0)
    const [localCart, setLocalCart] = useState(JSON.parse(localStorage.getItem('cart'))) //cart with only IDs

    const addToCart = (id) => {
        axios.get(`product/${id}`).then(res=>{
            setCart(prevCart => [...prevCart, res.data])
        }).catch(err=>{
            console.log(err)
        })
    }

    const addToLocalCart = (id) => {
        setLocalCart(prevCart => [...prevCart, id])
        localStorage.setItem('cart', JSON.stringify(localCart))
    }

    const getInitialCart = () => { 
        if(localCart.length !== 0){
             axios.get('/product/get/all', {
                    params:{
                        productsIds: localCart
                    }
                }).then(res=>{
                    setCart(res.data)
                })
        } else{
            return;
        }
    }

    useEffect(()=>{
        if(localCart){
            getInitialCart()
        }
    },[])

    useEffect(()=>{

        setCartLen(cart.length)
    },[cart])

    const value = {
        cart,
        setCart,
        cartLen,
    }

    return(
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
    )

}