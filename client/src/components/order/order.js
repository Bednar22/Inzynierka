import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {TextField, Grid, Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'


const Order = () => {
    //STATES --> same as user schema
    const [email, setEmail] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [city,setCity] = useState('');
    const [street,setStreet] = useState('');
    const [nr_domu,setNrDomu] = useState();
    const [nr_mieszkania,setNrMieszkania] = useState();
    const [kod_pocztowy, setKodpocztowy] = useState();

    const history = useHistory()

    const restartStates = () => {
        setCity('');
        setEmail('');
        setKodpocztowy();
        setName('');
        setSurname('');
        setNrDomu();
        setNrMieszkania('');
    }

    const setUserInfo=(user)=> {
        setEmail(user.email);
        setName(user.name);
        setSurname(user.surname);
        setCity(user.city);
        setStreet(user.street);
        setNrDomu(user.nr_domu);
        setNrMieszkania(user.nr_mieszkania);
        setKodpocztowy(user.kod_pocztowy);
    }

    const getUserInfo = async () => {
        
        if(localStorage.getItem('token')){
            try {
                await axios.get('/users/userInfo/ss', {
                    headers:{
                        "auth-token": localStorage.getItem('token'),
                        },
                    }
                ).then(res=>{ 
                    setUserInfo(res.data)})    
            } catch (error) {
                console.log(error)   
            }
        }
    }

    useEffect(()=>{
        getUserInfo()
    }, [])
    
    const addOrder = (e) => {

        const user = {
            email: email,
            name: name,
            surname: surname,
            city: city,
            street:street,
            nr_domu: nr_domu,
            nr_mieszkania: nr_mieszkania,
            kod_pocztowy: kod_pocztowy
        };
        
        axios.post('/order/add', user)
        .then(res=>{
             console.log(res.data);
             restartStates();
             history.push('/')
         })
        
        e.preventDefault();
        
    }
    
    return(
        
        <Grid container direction='column' spacing={2}>
            
            <Grid item> 
                <Button onClick={getUserInfo}> Zeruj dane </Button> 
            </Grid>
            
            <Grid item  container spacing={2} sm={6} >
            
            <Grid item sm={6}>
            <TextField 
                fullWidth
                variant='outlined' 
                placeholder='Imię'
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}>
            </TextField>
            </Grid>

            <Grid item sm={6}>
            <TextField 
            fullWidth
                variant='outlined' 
                placeholder='Nazwisko'
                type='text'
                value={surname}
                onChange={(e)=>setSurname(e.target.value)}>
            </TextField>
            </Grid>
            </Grid>

            <Grid item  container spacing={2} sm={6} >
            <Grid item sm={6}>
            <TextField 
                fullWidth
                variant='outlined' 
                placeholder='E-mail'
                type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}>
            </TextField>
            </Grid>

            <Grid item sm={6}>
            <TextField 
                fullWidth
                variant='outlined' 
                placeholder='Nr telefonu'
                type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}>
            </TextField>
            </Grid>
            </Grid>
            <Grid item container spacing={2} sm={6}>
            <Grid item sm={6}>
            <TextField 
                fullWidth
                variant='outlined' 
                placeholder='Ulica'
                type='text'
                value={street}
                onChange={(e)=>setStreet(e.target.value)}>
            </TextField>
            </Grid>

            <Grid item sm={3}>
            <TextField 
                fullWidth   
                variant='outlined' 
                placeholder='Nr domu'
                type='number'
                value={nr_domu}
                onChange={(e)=>setNrDomu(e.target.value)}>
            </TextField>
            </Grid>

            <Grid item sm={3}>
            <TextField 
                fullWidth
                variant='outlined' 
                placeholder='Nr mieszkania'
                type='text'
                value={nr_mieszkania}
                onChange={(e)=>setNrMieszkania(e.target.value)}>
            </TextField>
            </Grid>

            </Grid>

            
            <Grid item container sm={6} spacing={2}>
            <Grid item sm={6}>
            <TextField
                fullWidth  
                variant='outlined' 
                placeholder='Miasto'
                type='text'
                value={city}
                onChange={(e)=>setCity(e.target.value)}>
            </TextField>
            </Grid>

            <Grid item sm={6}>
            <TextField 
                fullWidth
                variant='outlined' 
                placeholder='Kod pocztowy'
                type='text'
                value={kod_pocztowy}
                onChange={(e)=>setKodpocztowy(e.target.value)}>
            </TextField>
            </Grid>
            </Grid>

            
        </Grid>
        

    
    )
}

export default Order;