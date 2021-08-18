import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularItems from './popularItems';
import SlidingCard from './SlidingCard';
import Grid from '@material-ui/core/Grid';
import { Button, Slide, Paper } from '@material-ui/core';
const Homepage = () => {
    useEffect(() => {
        axios
            .get('/product/get/search/p')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <>
            <Grid container direction='column' xs={12} sm={12} spacing={5} alignItems='center'>
                <SlidingCard></SlidingCard>

                <Grid item>
                    <PopularItems></PopularItems>
                </Grid>
            </Grid>
        </>
    );
};

export default Homepage;
