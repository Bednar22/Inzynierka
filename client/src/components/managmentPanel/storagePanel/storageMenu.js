import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Paper } from '@material-ui/core';

const StorageMenu = () => {
    return (
        <Paper>
            <List component='nav' fullWidth>
                <ListItem button>
                    <ListItemText primary='Tabela przedmiotów' />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary='Dodaj przedmiot' />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary='Zmień ilość predmiotu' />
                </ListItem>
            </List>
            <Divider />
        </Paper>
    );
};

export default StorageMenu;
