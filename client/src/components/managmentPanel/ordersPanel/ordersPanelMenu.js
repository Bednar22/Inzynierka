import { List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: 'green',
        right: -12,
        top: 10,
    },
}))(Badge);

const OrdersPanelMenu = () => {
    return (
        <>
            <List
                dense
                subheader={
                    <ListSubheader component='div' id='nested-list-subheader'>
                        Zamówienia:
                    </ListSubheader>
                }
            >
                <ListItem button>
                    <ListItemText
                        primary={
                            <StyledBadge color='secondary' badgeContent={4}>
                                {' '}
                                Nowe
                                {/* <Typography>Nowe</Typography> */}
                            </StyledBadge>
                        }
                    ></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Chleb'></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Chleb'></ListItemText>
                </ListItem>
            </List>
        </>
    );
};

export default OrdersPanelMenu;
