import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularItems from './popularItems';
import SlidingCard from './SlidingCard';
import Grid from '@material-ui/core/Grid';
//import { Button, Slide, Paper } from '@material-ui/core';
import { bellman } from '../algorithm/bellmanFord';

//import Tsp from '../algorithm/tsp';
const Homepage = () => {
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
