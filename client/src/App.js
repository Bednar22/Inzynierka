import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//material-ui
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
//components
import Navbar from './components/layout/navbar.component'
import Homepage from './components/homepage/homepage'
import LoginForm from './components/signing/loginForm';
import Register from './components/signing/register'
import Footer from './components/layout/footer'
import ShoppingCart from './components/shoppingCart'
import Shop from './components/shopItems/shop'
import { Container } from '@material-ui/core';
import AddProduct from './components/addNewProduct';
import AddCategory from './components/addCategory';
import Order from './components/order/order'

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
      <Container maxWidth="lg">
          <Switch>
            <Route path="/order" component={Order} />
            <Route path="/users/register" component={Register} />
            <Route path="/users" component={LoginForm} />
            <Route path='/cart' component={ShoppingCart} />
            <Route path='/shop' component={Shop} />
            <Route path='/productupload' component={AddProduct} />
            <Route path='/category' component={AddCategory} />
            <Route path='/' component={Homepage} />
            
          </Switch>
      </Container>
      <Footer></Footer>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;