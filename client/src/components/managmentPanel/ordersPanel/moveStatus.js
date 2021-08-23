import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Typography, Paper } from '@material-ui/core';

const MoveStatus = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const chooseSortType = (sortType) => {
        switch (sortType) {
            case 'czasszeregowo':
                props.setSortType({ popularity: -1 });
                break;
            case 'czasogolnie':
                props.setSortType({ date: -1 });
                break;
            default:
                return;
        }
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const setSort = (sort) => {
        props.setSortBy(sort);
        chooseSortType(sort);

        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Paper style={{ paddingLeft: '10px' }}>
                <Typography variant='button'> Zmień status:</Typography>
                <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleMenuClick}>
                    {props.sort}
                </Button>
                <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={() => setSort('nowe')}>Czas szeregowo</MenuItem>
                    <MenuItem onClick={() => setSort('w przygotowaniu')}>Czas ogolnie</MenuItem>
                    <MenuItem onClick={() => setSort('wysłane')}>Czas ogolnie</MenuItem>
                </Menu>
            </Paper>
        </>
    );
};

export default MoveStatus;
