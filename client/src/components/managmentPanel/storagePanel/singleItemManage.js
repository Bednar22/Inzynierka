import React, { useState, useEffect } from 'react';
import {
    Grid,
    DialogTitle,
    DialogContentText,
    DialogContent,
    Card,
    CardMedia,
    Typography,
    Button,
    TextField,
} from '@material-ui/core';
import axios from 'axios';
const SingleItemManage = (props) => {
    const [productData, setProductData] = useState({});
    const [quantity, setQuantity] = useState();

    const updateQuantity = (e) => {
        axios
            .put(
                '/storage/changeStorage',
                { quantity },
                {
                    headers: {
                        'auth-token': localStorage.getItem('token'),
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getItem = () => {
        axios
            .get(`/product/${props.productInfo.product_id}`)
            .then((res) => {
                console.log(res);
                setProductData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getItem();
        setQuantity(props.productInfo.quantity);
    }, []);

    return (
        <>
            <DialogTitle id='max-width-dialog-title'>{productData.name}</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container sm={4} xs={4} justify='flex-start'>
                        <Grid item>
                            <Card style={{ minHeight: '250px' }}>
                                <CardMedia
                                    component='img'
                                    alt={productData.name}
                                    image={`https://res.cloudinary.com/dgcwg76qy/image/upload/v1573726751/${productData.photo_id}`}
                                    title='Pies'
                                ></CardMedia>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container sm={6} xs={6} direction='column' style={{ marginLeft: '30px' }}>
                        <Grid container alignItems='flex-start' spacing={3}>
                            <Grid>
                                <Typography>Ilość: </Typography>
                            </Grid>
                            <Grid xs={1} sm={1} style={{ marginLeft: '10px' }}>
                                <TextField
                                    disabled
                                    type='number'
                                    value={quantity}
                                    onChange={(e) => {
                                        setQuantity(e.target.value);
                                    }}
                                ></TextField>
                            </Grid>
                            <Grid>
                                <Button>Zmień</Button>
                            </Grid>
                            <Grid>
                                <Button>Zatwierdź</Button>
                            </Grid>
                        </Grid>
                        <Grid item style={{ marginTop: '15px', marginLeft: '-10px' }}>
                            <Typography>Lokacja: {props.productInfo.storage_location}</Typography>
                        </Grid>
                        <Grid item style={{ marginTop: '15px', marginLeft: '-10px' }}>
                            <Typography>Cena: {productData.price} zł</Typography>
                        </Grid>
                        <Grid item style={{ marginTop: '15px', marginLeft: '-10px' }}>
                            <Typography>Kategoria: {productData.category} </Typography>
                        </Grid>
                        <Grid item style={{ marginTop: '15px', marginLeft: '-10px' }}>
                            <Typography>Podkategoria: {productData.subCategory} </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </>
    );
};

export default SingleItemManage;
