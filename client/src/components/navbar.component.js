import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    myButton: {
      background: 'green',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      '&:hover': {
        backgroundColor: 'red',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
    },
    
  });


export default function Navbar() {

    const classes = useStyles();

  return (
    <div >
      <AppBar position="static"  color="secondary">
        <Toolbar>
          <Typography variant="h6" >
            News
          </Typography>
          <Button  color="primary" >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
