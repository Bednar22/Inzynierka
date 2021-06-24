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
        setNrDomu(user.nr_domu);
        setNrMieszkania(user.nr_mieszkania);
        setKodpocztowy(user.kod_pocztowy);
    }

    const getUserInfo = async () => {
        try {
            await axios.get('/users/userInfo/ss', {
                headers:{
                    "auth-token": localStorage.getItem('token'),
                    },
                }
            ).then(res=>{ /* setUserInfo(res.data) */ console.log(res.data)})    
        } catch (error) {
            console.log(error)   
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
            <Grid item>
            <TextField 
                variant='outlined' 
                placeholder='Imię'
                type='text'
                onChange={(e)=>setName(e.target.value)}>
            </TextField>
            </Grid>
            
        </Grid>
        

    
    )
}

export default Order;