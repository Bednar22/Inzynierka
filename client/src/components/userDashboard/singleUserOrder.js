import { Grid, List, ListItem, Paper, ListItemText,Typography} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Divider from '@material-ui/core/Divider';
const SingleUserOrder = (props)=> {
    
    const[status, setStatus] = useState('Brak informacji')

    const statusSwitch = (statusFunc) => {

        switch(statusFunc){
            case 'sent': return 'Wysłano'
            case 'new': return 'W realizacji'
            case 'rdytosent': return 'Przygotowane do wysłania'
            default : return 'Brak informacji'
        }
    }

    useEffect(()=>{
        setStatus(statusSwitch(props.status))
    },[])

    return(
        <>
            <Paper>
                <Grid container>
                    <Grid item sm={11} xs={11}>
                    <Typography> Zamówienienie {props.id} </Typography>
                    <List>
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
                        
                        
                    </List>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default SingleUserOrder;