import React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, ButtonGroup, Grid} from '@material-ui/core/';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge'

export default function Navbar() {

  return (
    <div >
     
      <AppBar position="static"  color="secondary">
        <Toolbar> 
          <Typography variant="h6" >
          <Link to="/">
            <Button>LOGO</Button>
          </Link>
          </Typography>
          <Grid container direction='row' justify='center' allignItems='center' >
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Link to='shop'><Button>Części</Button></Link>
          <Link to='shop'><Button>Odzież</Button></Link>
         <Link to='shop'><Button>Akcesoria</Button></Link>
         <Link to='shop'><Button>Promocje</Button></Link>
        </ButtonGroup>
          </Grid>
          
         <Button>
         <Link to='/cart'>
           <Badge  badgeContent={4} color='error'><ShoppingBasketIcon color='primary' /> </Badge>
          </Link>
          </Button>
          <Link to='/users/register'>
         <Button><PersonIcon color='primary' /></Button>
         </Link>
        </Toolbar>
      </AppBar>
    
    </div>
    
  );
}
