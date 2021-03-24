import React, {useState} from 'react'
import {TextField, Grid} from '@material-ui/core'

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
    const [kodpocztowy, setKodpocztowy] = useState();

    const[pass2, setPass2] = useState('')

    return(
        <Grid container direction='column' alignItems='center'>
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
        </Grid>
    )
}

export default Register;