import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Paper } from '@material-ui/core';

const DashboardMenu = (props) => {
    return (
        <>
            <Paper>
                <List component='nav' fullWidth>
                    <ListItem button onClick={() => props.chooseComponentToShow('UsersOrders')}>
                        <ListItemText primary='Zamówienia' />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary='Dane' onClick={() => props.chooseComponentToShow('EditUser')} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText
                            primary='Zmiana hasła'
                            onClick={() => props.chooseComponentToShow('PasswordChange')}
                        />
                    </ListItem>
                </List>
                <Divider />
            </Paper>
        </>
    );
};

export default DashboardMenu;
