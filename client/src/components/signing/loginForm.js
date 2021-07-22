import React, {useState} from 'react'
import '../../App.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

//material ui imports
import {TextField, Button, Grid, Typography, Card} from'@material-ui/core'

const LoginForm = () => {

    const[password, setPassword] = useState('');
    const[email, setMail] = useState('');
    const history = useHistory();
    const [error, setError] = useState(false)

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
            //setCurrentUser(res.data)
            localStorage.setItem("token",res.headers.authtoken)
            history.push("/")
        }).catch(
            setError(true)
        );
        
        e.preventDefault();
    }

    const test = () => {
        axios.get('/users/userInfo', {
            headers:{
                "auth-token": localStorage.getItem('token'),
                },
        }).then(res=>{
            console.log('UDALO SIE')
        })
    }

    return(
    
            <Card style={{padding:'20px 20px 20px 20px'}}>
            <Grid container direction='column' alignItems="center" spacing={4}  >
            <Grid item>
                <TextField 
                color='secondary'
                label='Email'
                variant='outlined' 
                placeholder='Adres e-mail'
                type='email'
                onChange={(e)=>setMail(e.target.value)}>
                </TextField>
            </Grid>
            <Grid item>
                <TextField 
                color='secondary'
                label='Hasło'
                variant='outlined'
                 placeholder='Hasło' 
                 type='password' 
                 onChange={(e)=>setPassword(e.target.value)}>
                </TextField>
            </Grid>
            {error ?  
                <Typography color='error'>
                    Błędny email lub hasło
                </Typography>

             : ''}
            
            <Grid item>
                <Button color='secondary' variant='contained' onClick={(e)=>loginUser(e)} >Zaloguj</Button>
            </Grid>
            <Grid item>
                <Typography>
                    Nie masz konta? <Link to='/register' >Zarejestruj się tutaj</Link>
                </Typography>
            </Grid>
            </Grid>
            <Button onClick={test}>TEST</Button>
            </Card>

           

    )

}

export default LoginForm;