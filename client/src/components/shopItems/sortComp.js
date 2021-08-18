import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Typography, Paper } from '@material-ui/core';
const SortComp = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const chooseSortType = (sortType) => {
        switch (sortType) {
            case 'Popularne':
                props.setSortType({ popularity: -1 });
                break;
            case 'Najnowsze':
                props.setSortType({ date: -1 });
                break;
            case 'Cena rosnąco':
                props.setSortType({ price: 1 });
                break;
            case 'Cena malejąco':
                props.setSortType({ price: -1 });
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
                <Typography variant='button'> Sortuj:</Typography>
                <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleMenuClick}>
                    {props.sortBy}
                </Button>
                <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={() => setSort('Popularne')}>Popularne</MenuItem>
                    <MenuItem onClick={() => setSort('Najnowsze')}>Najnowsze</MenuItem>
                    <MenuItem onClick={() => setSort('Cena rosnąco')}>Cena rosnąco</MenuItem>
                    <MenuItem onClick={() => setSort('Cena malejąco')}>Cena malejaco</MenuItem>
                </Menu>
            </Paper>
        </>
    );
};

export default SortComp;
