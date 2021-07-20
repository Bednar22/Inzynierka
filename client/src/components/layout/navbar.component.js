import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, ButtonGroup, Grid} from '@material-ui/core/';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge'
import {Link as MaterialLink} from '@material-ui/core';
import '../../App.css';
import NavUserButton from './navUserButton';

export default function Navbar() {

  const [cartItems, setCartItems] = useState(0)
 
  
  useEffect(()=>{
    let itemsInCart = JSON.parse(localStorage.getItem('cart')).length
    setCartItems(itemsInCart)
  },[])

  return (
     <>
      <AppBar position="static"  color="secondary" className='navbar'>
        <Toolbar> 
          <Typography variant="h6" >
          <Link to="/">
            <Button>LOGO</Button>
          </Link>
          </Typography>
          <Grid container direction='row' justify='center'>
            <ButtonGroup color="primary" aria-label="text primary button group"> {/* className='navbar-link' */}
            <Link to='/shop'><MaterialLink underline='none' color='secondary'> <Button color='primary'>Części</Button></MaterialLink></Link> 
            <Link to='/shop'><MaterialLink underline='none' color='secondary'> <Button color='primary'>Odzież</Button></MaterialLink></Link> 
            <Link to='/shop'><MaterialLink underline='none' color='secondary'> <Button color='primary'>Akcesoria</Button></MaterialLink></Link> 
            <Link to='/shop'><MaterialLink underline='none' color='secondary'> <Button color='primary'>Promocje</Button></MaterialLink></Link> 
            </ButtonGroup>
          </Grid>
          
         <Button>
         <Link to='/cart'>
           <Badge  badgeContent={cartItems} color='error'><ShoppingBasketIcon color='primary' /> </Badge>
          </Link>
          </Button>
          <NavUserButton></NavUserButton> {/* my comp */}
          
        </Toolbar>
      </AppBar>
    
    </>
    
  );
}
