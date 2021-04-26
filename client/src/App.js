import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//material-ui
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
//components
import Navbar from './components/navbar.component'
import Homepage from './components/homepage'
import LoginForm from './components/loginForm';
import Register from './components/register'
import Footer from './components/footer'
import ShoppingCart from './components/shoppingCart'
import Shop from './components/shop'
const theme = createMuiTheme({
   palette: {
     primary: {
      main: '#fafafa'
     },
     secondary: {
       light:'#90a4ae',
       main: '#37474f'
     }
   }
})


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar></Navbar>
          <Switch>
            <Route path="/users/register" component={Register} />
            <Route path="/users" component={LoginForm} />
            <Route path='/cart' component={ShoppingCart} />
            <Route path='/shop' component={Shop} />
            <Route path='/' component={Homepage} />
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;