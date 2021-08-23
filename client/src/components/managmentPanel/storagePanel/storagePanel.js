import React from 'react';
import Grid from '@material-ui/core/Grid';
import StorageMenu from './storageMenu';
import ItemsTable from './itemsTable';
const StoragePanel = () => {
    return (
        <>
            <>
                {/* <Grid container spacing={1} sm={12} xs={12}> */}
                {/* <Grid container item xs={12} sm={12} justify='center'>
                        <Grid container sm={11} xs={11} spacing={5} alignItems='center' justify='flex-start'>
                            <Grid item sm={3} xs={3}></Grid>
                            <Grid item sm={4} xs={4}></Grid>
                            <Grid item sm={5} xs={5}></Grid>
                        </Grid>
                    </Grid> */}

                <Grid container>
                    <Grid item xs={3} sm={3}>
                        <StorageMenu></StorageMenu>
                    </Grid>
                    <Grid sm={1} xs={1}></Grid>
                    <Grid item sm={8} xs={8}>
                        <ItemsTable></ItemsTable>
                    </Grid>
                </Grid>

                {/* <Grid container xs={3} sm={3}></Grid>
                <StorageMenu></StorageMenu>
                <Grid container sm={8} xs={8}>
                    <ItemsTable></ItemsTable>
                </Grid> */}
                {/* </Grid> */}
            </>
        </>
    );
};

export default StoragePanel;
