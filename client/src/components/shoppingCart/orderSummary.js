import React, {useEffect, useState} from 'react' 
import { Paper, Grid, Typography, Button } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useCart } from './cartContext';
import axios from 'axios'

const OrderSummary = (props) => {

    const {cart, localCart} = useCart()

    useEffect(()=>{
        console.log(localCart)
    },[])

    const submitOrder = () => {

        const order = {
            customer: {
                name: props.name,
                surname: props.surname,
                city: props.city,
                street: props.street,
                kod_pocztowy: props.kod_pocztowy,
                nr_domu: props.nr_domu,
                nr_mieszkania:props.nr_mieszkania

            },
            shipment: props.shipment,
            payment: props.payment,
            products: localCart
        }

        axios.post('/order/add', order)
        .then(res=>{
            console.log(`Wszystko cacy`)
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <>
        <Grid container direction='column' alignItems='center' style={{border:'2px green'}}>
        
            <Grid container direction='column' /* alignItems='center' */ 
            spacing={4} xs={8} sm={8} style={{border:'2px solid red'}}>
                <Grid item >
                <List >

               {cart.map((item)=>{
                    return(
                        <>
                        <ListItem>
                        <ListItemText primary={item.name} secondary={`Ilość: 2  Cena: ${item.price}`} />
                        </ListItem>
                        <Divider component="li" />
                        </>
                    )
                })}
                <ListItem>
                    <ListItemText primary='SUMA: tymczasowa'> </ListItemText>
                </ListItem>
                    </List>
                </Grid> {/* Koniec grida listy */}
                
                <Grid container item >

                    <Grid item container direction='column' sm={4} xs={4}>
                    <Grid><Typography> DANE </Typography></Grid>
                    <Grid><Typography> {props.name} {props.surname} </Typography></Grid>
                    <Grid><Typography> {props.email} {props.phone} </Typography></Grid>
                    <Grid><Typography> {props.street} {props.nr_domu}/{props.nr_mieszkania} </Typography></Grid>
                    <Grid><Typography> {props.kod_pocztowy} {props.city} </Typography></Grid>
                    </Grid>

                    <Grid item container direction='column'  sm={4} xs={4}>
                        <Grid><Typography> WYSYŁKA </Typography></Grid>
                        <Grid><Typography> {props.shipment} </Typography></Grid>
                    </Grid>

                    <Grid item container direction='column'  sm={4} xs={4}>
                    <Grid><Typography> PŁATNOŚĆ </Typography></Grid>
                    <Grid><Typography> {props.payment} </Typography></Grid>
                    </Grid>


                </Grid>

                <Grid item container justify='space-between'> 
                <Grid item>
                <Button color='secondary' variant='contained' onClick={props.handleSummary}>Wróc do kasy</Button>
                </Grid>

                <Grid item>
                <Button color='secondary' variant='contained' onClick={()=>submitOrder()}>ZAMAWIAM I PŁACĘ</Button>
                </Grid>
            </Grid>
            </Grid> {/* EoG main grid */}

            
        </Grid> {/* EoG pojemnik */}
        </>
    )
}

export default OrderSummary