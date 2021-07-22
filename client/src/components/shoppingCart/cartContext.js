import React, {useState,useEffect, useContext} from 'react'

const CartContext = React.createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartContextProvider({children}){


    const localCart = JSON.parse(localStorage.getItem('cart')) 
    console.log(localCart)
    const [cart, setCart] = useState([])
    const [cartLen, setCartLen] = useState(0)

    useEffect(()=>{
        if(localStorage.getItem('cart')){
            const localCart = JSON.parse(localStorage.getItem('cart')) 
            setCart(localCart)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
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