import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useCart } from '../shoppingCart/cartContext';
import { Container, Paper, Typography, Card, CardMedia } from '@material-ui/core';

//import { Image } from 'cloudinary-react';
const ShopItem = (props) => {
    const [productInfo, setProductInfo] = useState({});
    const { addToCart } = useCart();
    const [message, setMessage] = useState('');
    const getItem = async () => {
        await axios.get(`/product/${props.match.params.id}`).then((res) => {
            setProductInfo(res.data);
            console.log(res.data); //tymczasowe
        });
    };

    const addItem = () => {
        const mes = addToCart(productInfo._id);
        setMessage(mes);
    };

    useEffect(() => {
        getItem();
    }, []);

    return (
        <>
            {/* main container */}
            <Container maxWidth='md'>
                <Grid container sm={12} xs={12} direction='row' justify='space-around'>
                    <Grid container sm={6} xs={6} direction='column'>
                        <Grid item>
                            <Card style={{ minHeight: '458px' }}>
                                <CardMedia
                                    component='img'
                                    alt={productInfo.name}
                                    image={`https://res.cloudinary.com/dgcwg76qy/image/upload/v1573726751/${productInfo.photo_id}`}
                                    title='Pies'
                                ></CardMedia>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container sm={6} xs={6} direction='column' style={{ minHeight: '458px' }}>
                        <Paper elevation={1} style={{ padding: '20px', minHeight: '418px', marginLeft: '5px' }}>
                            <Grid container direction='col' justify='space-between'>
                                <Grid item x={12} sm={12}>
                                    <Typography color='secondary'>{productInfo.category}</Typography>
                                    <Typography variant='h5'>{productInfo.name}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} style={{ marginTop: '20px' }}>
                                    <Button onClick={() => addItem()} variant='contained' color='secondary'>
                                        Dodaj do koszyka
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>{message}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid container direction='column' sm={12} xs={12} style={{ marginTop: '20px' }}>
                        <Paper style={{ padding: '20px' }}>
                            <Typography variant='h4'> Opis:</Typography>
                            {/* <Typography>{productInfo.description}</Typography> 'white-space: pre-line' */}
                            <p style={{ whiteSpace: 'pre-line' }}>{productInfo.description}</p>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            {/* main container */}
        </>
    );
};

export default ShopItem;
