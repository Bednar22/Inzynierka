import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularItems from './popularItems';
import SlidingCard from './SlidingCard';
import Grid from '@material-ui/core/Grid';
//import { Button, Slide, Paper } from '@material-ui/core';
import { bellman } from '../algorithm/bellmanFord';
import { johnson } from '../algorithm/johnson';
//import Tsp from '../algorithm/tsp';
const Homepage = () => {
    let data = [
        [4, 7],
        [2, 5],
        [5, 1],
        [3, 6],
        [1, 4],
    ];
    useEffect(() => {
        johnson(data);
    });
    return (
        <>
            <Grid container direction='column' xs={12} sm={12} spacing={5} alignItems='center'>
                <SlidingCard></SlidingCard>

                <Grid item>
                    <PopularItems></PopularItems>
                </Grid>
                {bellman(0)}
            </Grid>
        </>
    );
};

export default Homepage;
