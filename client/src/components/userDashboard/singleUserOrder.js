import { Grid, List, ListItem, Paper, ListItemText,Typography} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';

const SingleUserOrder = (props)=> {
    
    const[status, setStatus] = useState('Brak informacji')
    const[date, setDate] = useState()
    
    const dateFormat = (dateObject) => {
        const oldDate = new Date(dateObject)
        oldDate.setDate(oldDate.getDate());
        const newDate = ('0' + oldDate.getDate()).slice(-2) + '/' //date formated => dd/mm/yyyy
             + ('0' + (oldDate.getMonth()+1)).slice(-2) + '/'
             + oldDate.getFullYear();

        setDate(newDate)
    }
    
    const statusSwitch = (statusFunc) => {

        switch(statusFunc){
            case 'sent': return 'Wysłano'
            case 'new': return 'W realizacji'
            case 'rdytosent': return 'Przygotowane do wysłania'
            default : return 'Brak informacji'
        }
    }


    useEffect(()=>{
        dateFormat(props.orderDate)
        setStatus(statusSwitch(props.status))
    },[])

    return(
        <>
            <Paper style={{paddingTop: '10px'}, {marginBottom:'30px'}} >
                {/* <Grid container style={{border:'2px solid green'}}> */}
                    <Grid item sm={12} xs={11} justify='flex-start' alignItems='flex-start' >
                    {/* <Grid item>
                    <Typography> Zamówienienie {props.id} </Typography>
                    </Grid> */}
                    <Grid item>
                    <List dense subheader={<ListSubheader><Typography color='textPrimary'>Zamówienienie {props.id}:</Typography> </ListSubheader>}>
                        {props.products.map(item=>{
                            return(
                                <>
                                <ListItem>
                                    <ListItemText primary={item.name} secondary={`Ilość: ${item.quantity} Cena: ${item.price}`}  />
                                </ListItem>
                                <Divider />
                                </>
                            )})
                        }
                        <ListItem>
                            <Grid container item direction='row' justify='space-between'>
                            <Typography>Łączna wartość: {props.value.productsValue+props.value.shipmentValue}</Typography>
                            <Typography>Data zamówienia: {date}</Typography>
                            <Typography>Status: {status}</Typography>
                            </Grid>
                        </ListItem>    
                        
                    </List>
                    </Grid>
                    </Grid>
                {/* </Grid> */}
            </Paper>
        </>
    )
}

export default SingleUserOrder;