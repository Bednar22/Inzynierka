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
            <Grid
                container
                direction='column'
                xs={12}
                sm={12}
                spacing={5}
                alignItems='center'
                style={{ border: '2px solid red' }}
            >
                <SlidingCard></SlidingCard>

                <Grid item>
                    <PopularItems></PopularItems>
                </Grid>
                <Button onClick={handleChange}>TRANS</Button>
                <Slide direction='up' in={checked} mountOnEnter unmountOnExit>
                    <Paper elevation={4}>
                        <svg>
                            <polygon points='0,100 50,00, 100,100' />
                        </svg>
                    </Paper>
                </Slide>
            </Grid>
        </>
    );
};

export default Homepage;
