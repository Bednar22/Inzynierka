import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StorageIcon from '@material-ui/icons/Storage';
import ListAltIcon from '@material-ui/icons/ListAlt';

import StoreIcon from '@material-ui/icons/Store';
import { useHistory } from 'react-router';
const DrawerList = (props) => {
    const history = useHistory();
    return (
        <div role='presentation' onClick={props.toggleDrawer(false)} onKeyDown={props.toggleDrawer(false)}>
            <List>
                <ListItem button onClick={() => props.setChoosenComp('orders')}>
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary='Zamówienia' />
                </ListItem>
                <ListItem button onClick={() => props.setChoosenComp('storage')}>
                    <ListItemIcon>
                        <StorageIcon />
                    </ListItemIcon>
                    <ListItemText primary='Magazyn' />
                </ListItem>
                <ListItem button onClick={() => props.setChoosenComp('shop')}>
                    <ListItemIcon>
                        <StoreIcon />
                    </ListItemIcon>
                    <ListItemText primary='Zarządzanie sklepem' />
                </ListItem>
                {/* <ListItem button onClick={() => props.setChoosenComp('StatsPanel')}>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary='Statystyki' />
                </ListItem> */}
                <Divider />
                <ListItem button onClick={() => history.push('/')}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary='Wróć do sklepu' />
                </ListItem>
            </List>
        </div>
    );
};
export default DrawerList;
