import React, {useState} from 'react'
import axios from 'axios'
import {TextField, Grid, Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

const Register = () => {
    //STATES --> same as user schema
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [city,setCity] = useState('');
    const [street,setStreet] = useState('');
    const [nr_domu,setNrDomu] = useState();
    const [nr_mieszkania,setNrMieszkania] = useState();
    const [kod_pocztowy, setKodpocztowy] = useState();

    const[pass2, setPass2] = useState('')
    const history = useHistory()

    const checkPasswords = () => {
        if(password===pass2) return true;

        return false;
    }

    const restartStates = () => {
        setCity('');
        setEmail('');
        setKodpocztowy();
        setName('');
        setSurname('');
        setPassword('');
        setPass2('');
        setNrDomu();
        setNrMieszkania('');
    }

    const addUser = (e) => {

    if(!checkPasswords()) return;

        const user = {
            email: email,
            password: password,
            name: name,
            surname: surname,
            city: city,
            street:street,
            nr_domu: nr_domu,
            nr_mieszkania: nr_mieszkania,
            kod_pocztowy: kod_pocztowy,
            role: 'defUser'
        };

        const goToAfterSingUp = () => {
            history.push("/")
        }
        
        axios.post('/users/register', user)
        .then(res=>{
            console.log(res);
             console.log(res.data);
             restartStates();
             goToAfterSingUp();
         })
        
        e.preventDefault();
        

    }
    
    return(
        
        <Grid container direction='column' alignItems='center' spacing={2}>
            <Grid item>
            <TextField 
                variant='outlined' 
                placeholder='Imię'
                type='text'
                onChange={(e)=>setName(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item>
            <TextField 
                variant='outlined' 
                placeholder='Nazwisko'
                type='text'
                onChange={(e)=>setSurname(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item>
            <TextField 
                variant='outlined' 
                placeholder='Adres e-mail'
                type='email'
                onChange={(e)=>setEmail(e.target.value)}>
            </TextField>
            </Grid>
           <Grid item>
            <TextField variant='outlined' 
                placeholder='Hasło'
                type='password'
                onChange={(e)=>setPassword(e.target.value)}>
                </TextField>
            </Grid>
            <Grid item>
            <TextField variant='outlined' 
                placeholder='Powtórz hasło'
                type='password'
                onChange={(e)=>setPass2(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item>
            <TextField variant='outlined' 
                placeholder='Miasto'
                type='text'
                onChange={(e)=>setCity(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item>
            <TextField variant='outlined' 
                placeholder='Ulica'
                type='text'
                onChange={(e)=>setStreet(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item>
            <TextField variant='outlined' 
                placeholder='Numer domu'
                type='text'
                onChange={(e)=>setNrDomu(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item>
            <TextField variant='outlined' 
                placeholder='Numer mieszkania'
                type='text'
                onChange={(e)=>setNrMieszkania(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item>
            <TextField variant='outlined' 
                placeholder='Kod pocztowy'
                type='text'
                onChange={(e)=>setKodpocztowy(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item>
                <Button variant='outlined' type='submit' onClick={(e)=>addUser(e)}  >Dodaj</Button>
            </Grid>
        </Grid>
        

    
    )
}

export default Register;