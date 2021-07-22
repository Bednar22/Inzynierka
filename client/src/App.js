import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//material-ui
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { Container } from '@material-ui/core';
//components
import Navbar from './components/layout/navbar.component'
import Homepage from './components/homepage/homepage'
import LoginForm from './components/signing/loginForm';
import Register from './components/signing/register'
import Footer from './components/layout/footer'
import ShoppingCart from './components/shoppingCart/shoppingCartMain'
import Shop from './components/shopItems/shop'
import AddProduct from './components/addNewProduct';
import AddCategory from './components/addCategory';
import Order from './components/order/order'
import { CartContextProvider } from './components/shoppingCart/cartContext'
import ShopItem from './components/shopItems/shopItem';
import Dashboard from './components/userDashboard/dashboard';

//Themes, used to set color of application
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
    <CartContextProvider>
      <Navbar></Navbar>
      <Container /* maxWidth="lg" */>
          <Switch>
              <Route path="/order" component={Order} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={LoginForm} />
              <Route path='/cart' component={ShoppingCart} />
              <Route path='/productupload' component={AddProduct} />
              <Route path='/category' component={AddCategory} />
              <Route path='/shop/item/:id' component={ShopItem} />
              <Route path='/shop' component={Shop} />
              <Route path='/dashboard' component={Dashboard} />
              <Route exact path='/' component={Homepage} />
          </Switch>
      </Container>
      </CartContextProvider>
      <Footer></Footer> 
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;