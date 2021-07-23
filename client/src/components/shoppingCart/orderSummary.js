import React, {useEffect} from 'react' 
import 'axios'
import { Paper, Grid, Typography, Button, Box } from '@material-ui/core'

const OrderSummary = (props) => {

    return(
        <>
      

      <Paper style={{border:'2px solid black'}}>
        <Grid container direction='column' sm={8} xs={8} alignItems='center' style={{border:'2px green'}}>
        

            <Grid container direction='column' alignItems='center' 
            spacing={4} xs={8} sm={8} style={{border:'2px solid red'}}>
                <Grid item  sm={12} xs={12}>
                    <Typography> PIESEK</Typography>
                </Grid>
            
            </Grid> {/* EoG main grid */}

            <Grid>
            <Button onClick={props.handleSummary}>Wróc do kasy</Button>
            </Grid>

        </Grid> {/* EoG pojemnik */}
        </Paper>
        </>
    )
}

export default OrderSummary