import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const OrderConfirmation = (props) => {
    return (
        <>
            <Grid container alignItems='center' justify='center'>
                <Grid item sm={8} xs={8}>
                    <Paper style={{ padding: '20px 20px 20px 20px' }}>
                        <Grid container alignItems='center' spacing={2}>
                            <Grid item sm={1}>
                                <CheckCircleIcon fontSize='large' style={{ fill: 'green' }}></CheckCircleIcon>
                            </Grid>
                            <Grid item sm={6}>
                                <Typography component='span' variant='h6'>
                                    Dziękujemy za złożenie zamówienia
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container alignItems='center' spacing={2}>
                            <Grid item sm={1}></Grid>
                            <Grid item sm={11}>
                                <Typography component='span'>
                                    Twoje zamówienie nr <b>{props.match.params.id}</b> zostało przekazane do realizacji.
                                    O zmianie statusu zamówienia poinforumujemy Cię drogą mailową.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default OrderConfirmation;
