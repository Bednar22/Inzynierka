import React, { useState } from 'react';
import OrdersPanelMenu from './ordersPanelMenu';
import Grid from '@material-ui/core/Grid';
import OrdersTable from './ordersTable';
import EnhancedTable from './orderTabel2';
import DataGridDemo from './orderTable3';
import SortBy from './sortBy';
import MoveStatus from './moveStatus';
const OrdersPanel = () => {
    const [sortBy, setSortBy] = useState('');
    const przenies = 'Przenies do';
    return (
        <>
            <Grid container spacing={5} sm={12} xs={12}>
                <Grid container item xs={12} sm={12} justify='center'>
                    <Grid container sm={11} xs={11} spacing={5} alignItems='center' justify='flex-start'>
                        <Grid item xs={3}></Grid>
                        <Grid item>
                            <SortBy sort={sortBy} setSortBy={setSortBy}></SortBy>
                        </Grid>
                        <Grid item>
                            <MoveStatus></MoveStatus>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={1} sm={1}></Grid> */}
                </Grid>
                <Grid container xs={12} sm={12}>
                    <Grid item xs={3} sm={3} style={{ marginLeft: '50px' }}>
                        <OrdersPanelMenu></OrdersPanelMenu>
                    </Grid>

                    <Grid item sm={8} xs={8}>
                        {/* <OrdersTable></OrdersTable> */}
                        {/* <EnhancedTable></EnhancedTable> */}
                        {/* <DataTable></DataTable> */}
                        <DataGridDemo></DataGridDemo>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default OrdersPanel;
