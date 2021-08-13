import React, { useState } from 'react';
import { Button } from '@material-ui/core/';
import PersonIcon from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

const NavUserButton = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const handleClick = (event) => {
        if (localStorage.getItem('token')) {
            setAnchorEl(event.currentTarget);
        } else {
            history.push('/login');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAnchorEl(null);
        history.push('/');
    };

    const handleClose = (pageLink) => {
        setAnchorEl(null);
        history.push(pageLink);
    };

    return (
        <>
            <>
                <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
                    <PersonIcon color='primary' />
                </Button>
                <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={() => handleClose('/dashboard')}>Profil</MenuItem>
                    {/* <MenuItem onClick={()=>handleClose('/orders')}>Zamówienia</MenuItem>
          <MenuItem onClick={()=>handleClose('/settings')}>Ustawienia</MenuItem> */}
                    <MenuItem onClick={logout}>Wyloguj</MenuItem>
                </Menu>
            </>
        </>
    );
};

export default NavUserButton;
