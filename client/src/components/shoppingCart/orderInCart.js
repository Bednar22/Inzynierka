import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SummaryCart from './summaryCart';



const SingleOrder = (props) => {

    return(
        <>
        <ListItem fullWidth key={props._id} role={undefined} dense button >
                        <ListItemText id={props._id} primary={props.name} />
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                            <DeleteIcon onClick={()=>props.removeFromCart()} />
                        </IconButton>
                        </ListItemSecondaryAction>

                 </ListItem>
        </>
    )
}

export default SingleOrder;