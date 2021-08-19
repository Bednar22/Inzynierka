import React from 'react';
import OrdersPanelMenu from './ordersPanelMenu';
import Grid from '@material-ui/core/Grid';
import OrdersTable from '../ordersTable';

const OrdersPanel = () => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={2} sm={2}>
                    <OrdersPanelMenu></OrdersPanelMenu>
                </Grid>

                <Grid item sm={8} xs={8}>
                    <OrdersTable></OrdersTable>

                    {/* <DataTable></DataTable> */}
                </Grid>
            </Grid>
        </>
    );
};

export default OrdersPanel;
