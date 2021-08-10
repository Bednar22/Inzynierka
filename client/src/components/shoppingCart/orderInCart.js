import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SummaryCart from './smallCartSum';
import Card from '@material-ui/core/Card'
import { TextField, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const SingleOrder = (props) => {

    

    return(
        <>
                    <Card style={{paddingLeft:'10px'}}>
                        <Grid container spacing={2} alignItems='center' >
                            <Grid item xs={10} sm={10}>
                                <Typography>{props.name}</Typography> 
                            </Grid>
                          
                            <Grid xs={1} sm={1}>
                            <TextField type='number'  defaultValue={1}></TextField>
                            </Grid>
                            

                            <Grid item xs={1} sm={1}>
                            
                            <IconButton edge="end" aria-label="comments">
                                <DeleteIcon onClick={()=>props.removeFromCart()} />
                            </IconButton>
                            
                            </Grid>
                            </Grid>
                    </Card>    
              
        </>
    )
}

export default SingleOrder;