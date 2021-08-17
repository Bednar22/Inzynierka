import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShopItemCard from '../shopItems/shopItemCard';
import { Grid, Typography } from '@material-ui/core';
const PopularItems = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        axios
            .get('/product/popular')
            .then((res) => {
                setPopularItems(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Grid container sm={12} xs={12} justifyContent='center' alignItems='center'>
                <Grid container item direction='col' justify='center' alignItems='center'>
                    <Grid container sm={10} xs={10}>
                        <Typography style={{ marginBottom: '20px' }} variant='h4'>
                            Popularne:
                        </Typography>
                    </Grid>
                    <Grid container sm={10} direction='row' spacing={4}>
                        {popularItems.map((item) => {
                            return (
                                <Grid item key={item._id} xs={3}>
                                    <ShopItemCard
                                        _id={item._id}
                                        name={item.name}
                                        photo_id={item.photo_id}
                                        price={item.price}
                                    ></ShopItemCard>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default PopularItems;
