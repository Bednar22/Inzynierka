import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import { TextField, Grid, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const SingleOrder = (props) => {
    return (
        <>
            <Paper style={{ paddingLeft: '10px' }}>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item xs={9} sm={9}>
                        <Typography>{props.name}</Typography>
                    </Grid>

                    <Grid xs={1} sm={1}>
                        <TextField type='number' defaultValue={1}></TextField>
                    </Grid>

                    <Grid item xs={2} sm={2}>
                        <IconButton edge='end'>
                            <DeleteIcon onClick={() => props.removeFromCart()} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default SingleOrder;
