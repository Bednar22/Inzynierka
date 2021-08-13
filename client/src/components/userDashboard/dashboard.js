import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import DashboardMenu from './dashboardMenu';
import EditUser from './editUser';
import PasswordChange from './passwordChange';
import UsersOrders from './usersOrders';

const Dashboard = () => {
    const [choosenComp, setChoosenComp] = useState('UsersOrders');

    const componentsList = {
        EditUser: <EditUser />,
        UsersOrders: <UsersOrders />,
        PasswordChange: <PasswordChange />,
    };

    const chooseComponentToShow = (component) => {
        setChoosenComp(component);
    };

    return (
        <>
            <Grid container>
                <Grid item xs={3} sm={3}>
                    <DashboardMenu chooseComponentToShow={chooseComponentToShow}></DashboardMenu>
                </Grid>
                <Grid sm={1} xs={1}></Grid>
                <Grid item sm={8} xs={8}>
                    {componentsList[choosenComp]}
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
