import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {TextField, Grid, Button, Typography} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

const EditUser = () => {

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [city,setCity] = useState('');
    const [street,setStreet] = useState('');
    const [nr_domu,setNrDomu] = useState();
    const [nr_mieszkania,setNrMieszkania] = useState();
    const [kod_pocztowy, setKodpocztowy] = useState();
    const [readOnly, setReadOnly] = useState(true)
    
    const setDefValues = (user) => {
        setEmail(user.email)
        setName(user.name)
        setSurname(user.surname)
        setCity(user.city)
        setStreet(user.street)
        setNrDomu(user.nr_domu)
        setNrMieszkania(user.nr_mieszkania)
        setKodpocztowy(user.kod_pocztowy)
    }

    useEffect(()=>{

        axios.get('/users/userInfo', {
            headers:{
                "auth-token": localStorage.getItem('token')
                }
        }).then(res=>{
            console.log(res.data)
            setDefValues(res.data)
        }).catch(err=>{
            console.log(err)
        })
        
    },[])

    const submitChanges = () => {
        setReadOnly(true)
    }

    return(
        <>
        <Grid container direction='column' alignItems='flex-start' 
        justify='space-around' spacing={4} xs={10} sm={10} >
        
        <Grid container direction='column' alignItems="flex-start"  sm={12} xs={12} 
         spacing={4}    >
        <Grid item alignContent='flex-start' > <Typography>DANE:</Typography></Grid>
           <Grid spacing={4} container item direction='row' 
            sm={12} justify='space-evenly' > {/* IMIE I NAZWISKO */}
           <Grid item sm={6} xs={6} >
            <TextField 
                value={name}
                fullWidth
                variant='outlined' 
                label='Imię'
                color='secondary'
                InputProps={{
                    readOnly: readOnly,
                  }}
                InputLa belProps={{
                    shrink: true,
                  }}
                type='text'
                onChange={(e)=>setName(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item sm={6} xs={6}>
            <TextField 
                value={surname}
                fullWidth
                variant='outlined' 
                label='Nazwisko'
                color='secondary'
                InputProps={{
                    readOnly: readOnly,
                  }}
                InputLabelProps={{
                    shrink: true,
                  }}
                type='text'
                onChange={(e)=>setSurname(e.target.value)}>
            </TextField>
            </Grid>
           </Grid>{/* IMIE I NAZWISKO */}
            
           <Grid spacing={4} container item direction='row'
            justify='center' sm={12} > {/* MAIL I TELEFON */}
            <Grid item sm={6} xs={6}>
            <TextField 
                value={email}
                fullWidth
                variant='outlined' 
                label='E-mail'
                color='secondary'
                InputProps={{
                    readOnly: readOnly,
                  }}
                InputLabelProps={{
                    shrink: true,
                  }}
                type='email'
                onChange={(e)=>setEmail(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item sm={6} xs={6}>
            <TextField 
                // value={phone}
                fullWidth
                variant='outlined' 
                label='Numer telefonu'
                color='secondary'
                InputProps={{
                    readOnly: readOnly,
                  }}
                InputLabelProps={{
                    shrink: true,
                  }}
                type='text'
                >
            </TextField>
            </Grid>
            </Grid> {/* MAIL I NR TELEFONU */}

            <Grid  container item direction='row' 
            justify='center' spacing={4} sm={12}  > {/* Ulica mieszkanie dom */}
            
            <Grid item sm={6} xs={6}>
            <TextField variant='outlined' 
                value={street}
                fullWidth
                label='Ulica'
                color='secondary'
                InputProps={{
                    readOnly: readOnly,
                  }}
                InputLabelProps={{
                    shrink: true,
                  }}
                type='text'
                onChange={(e)=>setStreet(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item sm={3} xs={3}>
            <TextField variant='outlined' 
                value={nr_domu}
                fullWidth
                type='text'
                onChange={(e)=>setNrDomu(e.target.value)}
                label='Numer domu'
                color='secondary'
                InputProps={{
                    readOnly: readOnly,
                  }}
                InputLabelProps={{
                    shrink: true,
                  }}>
            </TextField>
            </Grid>
            <Grid item xs={3} sm={3} >
            <TextField variant='outlined' 
                fullWidth
                value={nr_mieszkania}                
                type='text'
                label='Numer mieszkania'
                color='secondary'
                InputProps={{
                    readOnly: readOnly,
                  }}
                InputLabelProps={{
                    shrink: true,
                  }}
                onChange={(e)=>setNrMieszkania(e.target.value)}>
            </TextField>
            </Grid>
            </Grid>
            <Grid spacing={4} container item direction='row'
             justify='center' sm={12} > {/* MIASTO I KP */}
             <Grid item sm={6} xs={6}>
            <TextField variant='outlined' 
                value={city}
                fullWidth
                label='Miasto'
                color='secondary'
                InputProps={{
                    readOnly: readOnly,
                  }}
                InputLabelProps={{
                    shrink: true,
                  }}
                type='text'
                onChange={(e)=>setCity(e.target.value)}>
            </TextField>
            </Grid>
            <Grid item sm={6} xs={6}>
            <TextField variant='outlined' 
                value={kod_pocztowy}
                fullWidth
                label='Kod pocztowy'
                color='secondary'
                InputProps={{
                    readOnly: readOnly,
                  }}
                InputLabelProps={{
                    shrink: true,
                  }}
                type='text'
                onChange={(e)=>setKodpocztowy(e.target.value)}>
            </TextField>
            </Grid>
            </Grid> {/* MIASTO I KP */}
            
            <Grid container item justify='space-between' alignItems='flex-start'>
        <Grid item>
            <Button onClick={()=>setReadOnly(false)} variant='contained' color='secondary'>ZMIEŃ</Button>
        </Grid>
        <Grid item>
            <Button onClick={()=>submitChanges()} variant='contained' color='secondary'>ZATWIERDŹ ZMIANY</Button>
        </Grid>
        </Grid>

        </Grid> {/* EoG personal data */}
       
        </Grid> {/* EoG main grid */}
        </>
    )
}

export default EditUser;