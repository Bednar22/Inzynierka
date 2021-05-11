import React from 'react'
import Filter from './filter'
import Box from'@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper';

import "./../../App.css"
const Shop = () => {

    return (
        <>
             <h1>
               PODSTAWA SKLEPU
           </h1>
            <Grid container spacing={6}>
           
           <Grid item xs={2}>
           <Box className='bord'>
            <Filter></Filter>
           </Box>
            </Grid>
            <Grid item xs={10} xl={8}>
            <Box className='bord'>
                <Grid container spacing={3}>
                <Grid item xs={4}>
                <Paper variant="outlined" style={{height:200}}></Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper variant="outlined" style={{height:200}}></Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper variant="outlined" style={{height:200}}></Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper variant="outlined" style={{height:200}}></Paper>
                </Grid>
                </Grid>
            </Box>
            </Grid>
           </Grid> {/* koniec grid conteinera */}
           
          </> 
    )
}

export default Shop;