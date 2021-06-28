import React, {useState, useEffect} from 'react'
import { Typography, Grid } from '@material-ui/core';

const SummaryCart = (props) => {

    const [priceSum, setPriceSum] = useState(0)

    useEffect(()=>{
        let sum = 0;
        if(props.items){
            props.items.forEach(item => {
                sum = item.price + sum ;
              })
              console.log(sum)
              setPriceSum(sum)
        }
        
    },[props.items])

    return(
        <>
            <Grid container>
                <Typography variant='caption'>Zamówienie</Typography>
                    {props.items.map((item)=>{
                        return(
                            <Grid container item>
                                <h4>{item.name} {item.price}</h4>

                            </Grid>
                        )
                    })}
                <Typography variant='overline'>Łącznie {priceSum}</Typography>
            </Grid>
        </>
    )
}

export default SummaryCart;