import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';

import DrawerList from './drawerList';
import PanelNavbar from './panelNavbar';
import StatsPanel from './statsPanel';
import OrdersPanel from './ordersPanel/ordersPanel';
import ShopPanel from './shopPanel';
import StoragePanel from './storagePanel';

const Panel = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [choosenComp, setChoosenComp] = useState('OrdersPanel');

    const componentsList = {
        OrdersPanel: <OrdersPanel />,
        StoragePanel: <StoragePanel />,
        ShopPanel: <ShopPanel />,
        StatsPanel: <StatsPanel />,
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        //setState({ ...state, [anchor]: open });
        setDrawerOpen(open);
    };

    return (
        <>
            <PanelNavbar handleClick={toggleDrawer}></PanelNavbar>
            <Drawer anchor={'left'} open={drawerOpen} onClose={toggleDrawer(false)}>
                <DrawerList toggleDrawer={toggleDrawer} setChoosenComp={setChoosenComp}></DrawerList>
            </Drawer>
            {componentsList[choosenComp]}
        </>
    );
};
export default Panel;
