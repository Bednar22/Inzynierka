import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, ButtonGroup, Grid } from '@material-ui/core/';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge';
import { Link as MaterialLink } from '@material-ui/core';
import '../../App.css';
import NavUserButton from './navUserButton';
import { useCart } from '../shoppingCart/cartContext';
import Logo from '../../logo/mtbbikelogo.png';
export default function Navbar() {
    const { cartLen } = useCart(); // values from cartContext

    return (
        <>
            <AppBar position='static' color='secondary' className='navbar'>
                <Toolbar>
                    <Link to='/'>
                        <img src={Logo} width='52' height='52'></img>
                    </Link>
                    {/* <img src={Logo} width='80' height='80'></img> */}
                    <Link to='/'>
                        <MaterialLink underline='none' color='secondary'>
                            <Typography color='primary' variant='body2' style={{ fontSize: '25px' }}>
                                MTBBike
                            </Typography>
                        </MaterialLink>
                    </Link>
                    <Grid container direction='row' justify='center'>
                        <ButtonGroup color='primary' aria-label='text primary button group'>
                            {' '}
                            {/* className='navbar-link' */}
                            <Link to='/shop/Części rowerowe'>
                                <MaterialLink underline='none' color='secondary'>
                                    {' '}
                                    <Button size='large' color='primary'>
                                        Części
                                    </Button>
                                </MaterialLink>
                            </Link>
                            <Link to='/shop/Odzież'>
                                <MaterialLink underline='none' color='secondary'>
                                    {' '}
                                    <Button size='large' color='primary'>
                                        Odzież
                                    </Button>
                                </MaterialLink>
                            </Link>
                            <Link to={`/shop/Akcesoria`}>
                                <MaterialLink underline='none' color='secondary'>
                                    {' '}
                                    <Button size='large' color='primary'>
                                        Akcesoria
                                    </Button>
                                </MaterialLink>
                            </Link>
                            <Link to='/shop/'>
                                <MaterialLink underline='none' color='secondary'>
                                    {' '}
                                    <Button size='large' color='primary'>
                                        Promocje
                                    </Button>
                                </MaterialLink>
                            </Link>
                        </ButtonGroup>
                    </Grid>
                    <Button size='large'>
                        <Link to='/cart'>
                            <Badge badgeContent={cartLen} color='error'>
                                <ShoppingBasketIcon fontSize='large' color='primary' />{' '}
                            </Badge>
                        </Link>
                    </Button>
                    <NavUserButton fontSize='large'></NavUserButton> {/* changes behovior, depends on loggin   */}
                </Toolbar>
            </AppBar>
        </>
    );
}
