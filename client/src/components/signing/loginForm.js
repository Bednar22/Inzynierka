import React, {useState} from 'react'
import '../../App.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { useUserAuth } from '../signing/authContext'

//material ui imports
import {TextField, Button, Grid, Typography, Card} from'@material-ui/core'

const LoginForm = () => {

    const[password, setPassword] = useState('');
    const[email, setMail] = useState('');
    const history = useHistory();
    const { currentUser, setCurrentUser } = useUserAuth() //importowane wartosci z hooka, tam bedzie user role

    const goToAfterSingIn = () => {
        history.push("/")
    }


    const restartStates = () =>{ //MOZE DO USUNIECIA
        setMail('');
        setPassword('');
    }

    const loginUser = (e) =>{
        
        const user = {
            email: email,
            password: password
        }

        axios.post('/users/login', user).then(res=>{
            setCurrentUser(res.data)
            localStorage.setItem("token",res.headers.authtoken)
            goToAfterSingIn()
        });
        
        e.preventDefault();
        restartStates();
    }

    return(
    
            <Card>
            <Grid container direction='column' alignItems="center" spacing={4}  >
            <Grid item>
                <TextField 
                variant='outlined' 
                placeholder='Adres e-mail'
                type='email'
                onChange={(e)=>setMail(e.target.value)}>
                </TextField>
            </Grid>
            <Grid item>
                <TextField 
                
                variant='outlined'
                 placeholder='Hasło' 
                 type='password' 
                 onChange={(e)=>setPassword(e.target.value)}>
                </TextField>
            </Grid>
            <Grid item>
                <Button color='secondary' variant='contained' onClick={(e)=>loginUser(e)} >Zaloguj</Button>
            </Grid>
            <Grid item>
                <Typography>
                    Nie masz konta? (Zarejestruj się tutaj) -link
                </Typography>
            </Grid>
            </Grid>
            </Card>

    )

}

export default LoginForm;