import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
//my components
import StatsPanel from './statsPanel';
import OrdersPanel from './ordersPanel';
import ShopPanel from './shopPanel';
import StoragePanel from './storagePanel';

const PanelNavbar = (props) => {
    const history = useHistory();
    const [choosenComp, setChoosenComp] = useState('OrdersPanel');

    const componentsList = {
        OrdersPanel: <OrdersPanel />,
        StoragePanel: <StoragePanel />,
        ShopPanel: <ShopPanel />,
        StatsPanel: <StatsPanel />,
    };

    return (
        <div>
            <AppBar color='secondary' position='fixed'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={props.handleClick('left', true)}
                        edge='start'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container justify='center'>
                        <Typography variant='h6'>Panel zarządzający</Typography>
                    </Grid>

                    <Grid container sm={2} xs={2} justify='flex-end'>
                        <Button onClick={() => history.push('/')} color='primary'>
                            Do sklepu
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default PanelNavbar;
