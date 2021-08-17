import axios from 'axios';
import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import SummaryCart from './smallCartSum';
import SingleOrder from './orderInCart';
import Button from '@material-ui/core/Button';
import { useCart } from './cartContext';
import { useHistory } from 'react-router';
import { Container, Paper } from '@material-ui/core';
const ShoppingCart = () => {
    const { cart, setCart } = useCart();
    const history = useHistory();

    //removing item from cart and updating local storage cart
    const removeFromCart = (itemId) => {
        const cartCopy = [...cart];
        const localCartCopy = JSON.parse(localStorage.getItem('cart'));
        const indexToRemove = cartCopy.findIndex((obj) => obj._id === itemId);
        const indexToRemoveFromCart = localCartCopy.indexOf(itemId);
        if (indexToRemove > -1) {
            cartCopy.splice(indexToRemove, 1);
            setCart(cartCopy);
            localCartCopy.splice(indexToRemoveFromCart, 1);
            localStorage.setItem('cart', JSON.stringify(localCartCopy));
        }
    };

    return (
        <Container maxWidth='md'>
            <Grid container xs={12} sm={12} spacing={2}>
                <Grid container item sm={8} xs={8} direction='column'>
                    <List>
                        {/* list grid */}
                        {cart.map((item) => {
                            return (
                                <Grid item xs={12} sm={12}>
                                    <SingleOrder
                                        _id={item._id}
                                        name={item.name}
                                        removeFromCart={() => removeFromCart(item._id)}
                                    />
                                </Grid>
                            );
                        })}
                    </List>
                </Grid>
                {/* EOF list grid */}
                <Grid item sm={4} xs={4}>
                    <Paper style={{ padding: '10px' }}>
                        <SummaryCart items={cart}></SummaryCart>
                        <Grid container justify='flex-end'>
                            <Button color='secondary' variant='contained' onClick={() => history.push('/checkout')}>
                                Do kasy
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShoppingCart;
