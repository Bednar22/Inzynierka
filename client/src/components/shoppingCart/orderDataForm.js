import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {TextField, Grid, Button, Typography} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import OrderSummary from './orderSummary';

const OrderDataForm = () => {

    //user data states
    const [email, setEmail] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [city,setCity] = useState('');
    const [street,setStreet] = useState('');
    const [nr_domu,setNrDomu] = useState();
    const [nr_mieszkania,setNrMieszkania] = useState();
    const [kod_pocztowy, setKodpocztowy] = useState();
    const [shipping, setShipping] = useState('');
    const [payment, setPayment] = useState('')
    //help states to manage component
    const [summary, setSummary] = useState(false)
    const [disablePayment, setDisablePayment] = useState(false)
    const [disableGotowka, setDisbleGotowka] = useState(false)

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

    const handleSummary = () => {
        setSummary(!summary)
    }

    const handleShipping = (e) => {
        
        if(e === 'kurierpobranie'){
            setShipping(e)
            setPayment('gotowka')
            setDisablePayment(true)
        } else{
            setShipping(e)
            setDisablePayment(false)
            setDisbleGotowka(true)
        }
        
    }


    if(summary===false){
    return(
        <>
        <Grid container direction='column' sm={12} alignItems='center'>
        <Grid container direction='column' alignItems='center' 
        justify='space-around' spacing={4} xs={6} sm={6} style={{border:'2px solid red'}}>
        
        <Grid container direction='column' alignItems="center"  sm={12} xs={12} 
         spacing={4}  style={{border:'2px solid green'}}  >
        <Grid item > <Typography>DANE</Typography></Grid>
           <Grid spacing={4} container item direction='row' 
            sm={12} justify='space-evenly' > {/* IMIE I NAZWISKO */}
           <Grid item sm={6} xs={6} >
            <TextField 
                value={name}
                fullWidth
                variant='outlined' 
                label='Imię'
                color='secondary'
                InputLabelProps={{
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
                InputLabelProps={{
                    shrink: true,
                  }}
                type='text'
                onChange={(e)=>setKodpocztowy(e.target.value)}>
            </TextField>
            </Grid>
            </Grid> {/* MIASTO I KP */}
            
           
        </Grid> {/* EoG personal data */}
        
        <Grid item><Typography>WYSYŁKA</Typography></Grid>
        <Grid item container  sm={11} xs={11} style={{border:' 2px solid blue '}} >
            <FormControl component="fieldset">
                <FormLabel required component="legend" color='secondary'>Sposób wysyłki:</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={shipping} onChange={(e)=>handleShipping(e.target.value)}>
                <FormControlLabel value="kurier" control={<Radio />} label="Kurier" />
                <FormControlLabel value="paczkomat" control={<Radio />} label="Paczkomat" />
                <FormControlLabel value="pocztapolska" control={<Radio />} label="Poczta Polska" />
                <FormControlLabel value="kurierpobranie" control={<Radio />} label="Kurier pobranie" />
                </RadioGroup>
            </FormControl>
        </Grid> {/* EoG shipping grid */}

        <Grid item><Typography>PŁATNOŚĆ</Typography></Grid>
        <Grid item container  sm={11} xs={11} style={{border:' 2px solid blue '}} >
            <FormControl component="fieldset">
                <FormLabel required component="label" color='secondary'>Sposób płatności:</FormLabel>
                <RadioGroup aria-label="payment" name="payment1" value={payment} onChange={(e)=>setPayment(e.target.value)}>
                <FormControlLabel value="kurierpobranie" disabled={disablePayment} control={<Radio />} label="Karta" />
                <FormControlLabel value="paczkomat" disabled={disablePayment} control={<Radio />} label="Przelew tradycyjny" />
                <FormControlLabel value="gotowka" disabled={disableGotowka} control={<Radio />} label="Gotówka przy odbiorze" />
                </RadioGroup>
            </FormControl>
        </Grid> {/* EoG payment grid */}
        
        <Grid item>
            <Button onClick={handleSummary} variant='contained' color='secondary'>
                Podsumowanie
            </Button>
        </Grid>
        </Grid> {/* EoG main grid */}
        </Grid> {/* EoG pojemnik */}
        </>
    )
    } else{
        return(
            <>
            <OrderSummary city={city} name={name} street={street} kod_pocztowy={kod_pocztowy} surname={surname}
            email={email} nr_domu={nr_domu} nr_mieszkania={nr_mieszkania}
            shipping={shipping} payment={payment} handleSummary={handleSummary}></OrderSummary>
            </>
        )
    }
}

export default OrderDataForm;