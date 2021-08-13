import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useCart } from '../shoppingCart/cartContext';
import { Container, Typography } from '@material-ui/core';

const ShopItem = (props) => {
    const [productInfo, setProductInfo] = useState({});
    const { addToCart } = useCart();

    const getItem = async () => {
        await axios.get(`/product/${props.match.params.id}`).then((res) => {
            setProductInfo(res.data);
        });
    };

    useEffect(() => {
        getItem();
    }, []);

    return (
        <>
            {/* main container */}
            <Container maxWidth='md'>
                <Grid container style={{ border: '2px solid red ' }} direction='row'>
                    <Grid container sm={6} xs={6} direction='column' style={{ border: '2px solid green ' }}>
                        <Grid item style={{ border: '2px solid blue' }}>
                            FOTO
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        sm={6}
                        xs={6}
                        direction='column'
                        //alignItems='flex-start'
                        justify='flex-start'
                        style={{ border: '2px solid blue' }}
                    >
                        <Grid item style={{ border: '2px solid black' }}>
                            <Button onClick={() => addToCart(productInfo._id)} variant='contained' color='secondary'>
                                Dodaj
                            </Button>
                        </Grid>
                        <Grid item style={{ border: '2px solid black' }}>
                            <Typography>Coś dla test</Typography>
                        </Grid>
                    </Grid>
                    <Grid container sm={12} xs={12}>
                        {' '}
                        OPIS
                    </Grid>
                </Grid>
            </Container>
            {/* main container */}
        </>
    );
};

export default ShopItem;
