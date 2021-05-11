import React from 'react'
import { Container, Grid, List,ListItem, ListItemText, Divider, ListItemIcon} from '@material-ui/core/';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import "./../../App.css"

const Footer = () => {
    

    return (
        <>
         <Container className='footer' minWidth='xl'>
            <Grid container direction='row' spacing={3}>
                <Grid item xs>
                    <List>
                        <ListItem>
                            <ListItemText primary="O nas" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText secondary="Informacje" />
                    </ListItem>
                    <ListItem button>
                            <ListItemText secondary="FAQ" />
                    </ListItem>
                    </List>
                </Grid>
                <Divider orientation="vertical" flexItem />

                {/* DRUGA KOLUMNA */}
                <Grid item xs>
                    <List>
                        <ListItem>
                            <ListItemText primary="Informacje" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText secondary="Płatność" />
                        </ListItem>
                        <ListItem button>
                                <ListItemText secondary="Wysyłka" />
                        </ListItem>
                    </List>
                </Grid>
                <Divider orientation="vertical" flexItem />

                {/* TRZECIA KOLUMNA */}
                <Grid item xs>
                    <List>
                    <ListItem>
                            <ListItemText primary="Kontakt" />
                    </ListItem>
                    <ListItem>
                            <ListItemIcon>
                                <PhoneIcon  fontSize='small'/>
                            </ListItemIcon>
                            <ListItemText secondary="+48 123 456 789" />
                    </ListItem> 
                    <ListItem>
                            <ListItemIcon>
                                <EmailIcon fontSize='small'/>
                            </ListItemIcon>
                            <ListItemText secondary="probny@gmail.com" />
                    </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>   
        </>
    )
}

export default Footer;