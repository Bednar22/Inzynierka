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

const StyledBadge2 = withStyles((theme) => ({
    badge: {
        backgroundColor: 'orange',
        right: -12,
        top: 10,
    },
}))(Badge);

const StyledBadge3 = withStyles((theme) => ({
    badge: {
        backgroundColor: 'blue',
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
                            <StyledBadge showZero color='secondary' badgeContent={4}>
                                {' '}
                                Nowe
                                {/* <Typography>Nowe</Typography> */}
                            </StyledBadge>
                        }
                    ></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText
                        primary={
                            <StyledBadge2 showZero color='secondary' badgeContent={0}>
                                {' '}
                                W przygotowaniu
                                {/* <Typography>Nowe</Typography> */}
                            </StyledBadge2>
                        }
                    ></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText
                        primary={
                            <StyledBadge2 showZero color='secondary' badgeContent={0}>
                                {' '}
                                Pracownik nr 1{/* <Typography>Nowe</Typography> */}
                            </StyledBadge2>
                        }
                    ></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText
                        primary={
                            <StyledBadge2 showZero color='secondary' badgeContent={0}>
                                {' '}
                                Pracownik nr 2{/* <Typography>Nowe</Typography> */}
                            </StyledBadge2>
                        }
                    ></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText
                        primary={
                            <StyledBadge3 showZero color='secondary' badgeContent={2}>
                                {' '}
                                Wysłano
                                {/* <Typography>Nowe</Typography> */}
                            </StyledBadge3>
                        }
                    ></ListItemText>
                </ListItem>
            </List>
        </>
    );
};

export default OrdersPanelMenu;
