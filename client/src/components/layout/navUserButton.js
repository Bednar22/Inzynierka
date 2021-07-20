import React from 'react'
import { useUserAuth } from '../signing/authContext'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core/';
import PersonIcon from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const NavUserButton = (props) => {
    const { currentUser } = useUserAuth()


    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return(
        <>
        {currentUser ?  
            <>
         <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><PersonIcon color='primary' /></Button>
         <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleClose}
       >   
         <MenuItem onClick={handleClose}>Profil</MenuItem>
         <MenuItem onClick={handleClose}>Zamówienia</MenuItem>
         <MenuItem onClick={handleClose}>Ustawienia</MenuItem>
         <MenuItem>Wyloguj</MenuItem>
        </Menu>
         </>
         :  <Link to='/login'>
         <Button><PersonIcon color='primary' /></Button>
         </Link> }
        </>
    )

}

export default NavUserButton;