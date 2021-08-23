import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CartContext = React.createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [cartLen, setCartLen] = useState(0);
    const [localCart, setLocalCart] = useState([]); //cart with only IDs

    // checkIfContains = (id) => {
    //     let found = false;
    //     for (let i = 0; i < vendors.length; i++) {
    //         if (vendors[i]._id == id) {
    //             found = true;
    //             break;
    //         }
    //     }
    // };

    const addToCart = (id) => {
        if (cart.some((item) => item._id == id)) {
            return 'Ten przedmiot już jest w koszyku';
        }
        console.log(`ID KTORE PRZYSZŁO TO LOCAL ${id}`);
        setLocalCart((prevLocalCart) => [...prevLocalCart, id]);

        axios
            .get(`/product/${id}`)
            .then((res) => {
                setCart((prevCart) => [...prevCart, res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(localCart);
        return 'Dodano pomyślnie do koszyka';
    };

    const addToLocalCart = (id) => {
        setLocalCart((prevCart) => [...prevCart, id]);
        localStorage.setItem('cart', JSON.stringify(localCart));
    };

    const getInitialCart = () => {
        const local = JSON.parse(localStorage.getItem('cart'));
        setLocalCart(local);

        if (local.length > 0) {
            axios
                .get('/product/get/all', {
                    params: {
                        productsIds: local,
                    },
                })
                .then((res) => {
                    setCart(res.data);
                });
        }
    };

    const clearCart = () => {
        setLocalCart([]);
        setCart([]);
    };

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            getInitialCart();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(localCart));
    }, [localCart]);

    useEffect(() => {
        setCartLen(cart.length);
    }, [cart]);

    const value = {
        cart,
        localCart,
        setCart,
        cartLen,
        addToCart,
        addToLocalCart,
        clearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
