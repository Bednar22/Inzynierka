import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';

const SummaryCart = (props) => {
    const [priceSum, setPriceSum] = useState(0);

    useEffect(() => {
        let sum = 0;
        if (props.items) {
            props.items.forEach((item) => {
                sum = item.price + sum;
            });
            console.log(sum);
            setPriceSum(sum);
        }
    }, [props.items]);

    return (
        <>
            <Grid container>
                <Typography>
                    <b>Zamówienie</b>
                </Typography>
                <Grid container direction='column'>
                    {props.items.map((item) => {
                        return (
                            <Grid item>
                                <Typography variant='caption'>
                                    {item.name} Cena: {item.price} zł
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
                <Typography /* variant='overline' */>
                    <b>Łącznie {priceSum} zł</b>
                </Typography>
            </Grid>
        </>
    );
};

export default SummaryCart;
