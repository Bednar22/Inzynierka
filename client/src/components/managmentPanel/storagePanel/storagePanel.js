import React from 'react';
import Grid from '@material-ui/core/Grid';
import StorageMenu from './storageMenu';
import ItemsTable from './itemsTable';
const StoragePanel = () => {
    return (
        <>
            <>
                <Grid container>
                    <Grid item xs={3} sm={3}>
                        <StorageMenu></StorageMenu>
                    </Grid>
                    <Grid sm={1} xs={1}></Grid>
                    <Grid item sm={8} xs={8}>
                        <ItemsTable></ItemsTable>
                    </Grid>
                </Grid>
            </>
        </>
    );
};

export default StoragePanel;
